#!/usr/bin/env node
/**
 * Rewrite the library from the `asset-url` font strategy to `google-fonts`.
 *
 * The export bakes `@font-face` blocks pointing at workspace-local asset ids via
 * `/api/assets/{{ASSET_ID}}/<file>.woff2`. Those placeholders can never resolve
 * on their own, which is what holds the release gate shut (see
 * docs/getting-started-library.md, "The release gate").
 *
 * Every family the library uses is on Google Fonts under the OFL, and the
 * runtime now permits fonts.googleapis.com / fonts.gstatic.com at the artifact
 * CSP layer. So the `@font-face` blocks in each <style> are replaced by a single
 * `@import`, built from the manifest's per-file requirement set: family,
 * weights, styles, and whether the face is variable.
 *
 *   node tools/rewrite-to-google-fonts.mjs --dry-run [--file=<path>]
 *   node tools/rewrite-to-google-fonts.mjs --apply
 *
 * Parsing note: `{{ASSET_ID}}` contains `}}`, so a naive `@font-face\{[^}]*\}`
 * match truncates mid-block. The placeholder is swapped for a brace-free
 * sentinel before matching and restored afterwards.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const TOKEN = '{{ASSET_ID}}';
const SENTINEL = '@@ASSETID@@';

const args = process.argv.slice(2);
const DRY = !args.includes('--apply');
const ONLY = (args.find((a) => a.startsWith('--file=')) || '').split('=')[1] || null;

const manifest = JSON.parse(readFileSync('manifest.json', 'utf8'));
const byFile = new Map(manifest.fonts.map((f) => [f.file, f]));

/** "100 900" -> [100,900]; "400" -> [400,400] */
function parseWeights(specs) {
  const out = [];
  for (const s of specs) {
    const parts = String(s).trim().split(/\s+/).map(Number);
    out.push(parts.length > 1 ? [parts[0], parts[parts.length - 1]] : [parts[0], parts[0]]);
  }
  return out;
}

/** Google Fonts css2 spec for one family, from the faces used in this block. */
function familySpec(family, faces) {
  const byStyle = { normal: [], italic: [] };
  let variable = false;
  for (const f of faces) {
    if (f.variable) variable = true;
    for (const st of f.styles) {
      byStyle[st === 'italic' ? 'italic' : 'normal'].push(...parseWeights(f.weights));
    }
  }
  const axis = (ranges) => {
    const lo = Math.min(...ranges.map((r) => r[0]));
    const hi = Math.max(...ranges.map((r) => r[1]));
    if (variable) return lo === hi ? String(lo) : `${lo}..${hi}`;
    const uniq = [...new Set(ranges.flatMap((r) => (r[0] === r[1] ? [r[0]] : [r[0], r[1]])))];
    return uniq.sort((a, b) => a - b).join(';');
  };
  const name = family.replace(/ /g, '+');
  const hasNormal = byStyle.normal.length > 0;
  const hasItalic = byStyle.italic.length > 0;
  if (hasNormal && hasItalic) {
    const n = axis(byStyle.normal).split(';').map((w) => `0,${w}`).join(';');
    const i = axis(byStyle.italic).split(';').map((w) => `1,${w}`).join(';');
    return `${name}:ital,wght@${n};${i}`;
  }
  if (hasItalic) {
    return `${name}:ital,wght@${axis(byStyle.italic).split(';').map((w) => `1,${w}`).join(';')}`;
  }
  return `${name}:wght@${axis(byStyle.normal)}`;
}

function rewriteStyleBlock(css, unknown) {
  const used = [];
  const stripped = css.replace(/@font-face\{[^}]*\}/g, (block) => {
    if (!block.includes(SENTINEL)) return block; // a face not backed by an asset url
    const m = block.match(/([A-Za-z0-9._-]+\.woff2)/);
    if (!m) { unknown.push(block.slice(0, 70)); return block; }
    const meta = byFile.get(m[1]);
    if (!meta) { unknown.push(m[1]); return block; }
    used.push(meta);
    return '';
  });
  if (used.length === 0) return { css, changed: false };

  const families = new Map();
  for (const f of used) {
    for (const fam of f.family) {
      if (!families.has(fam)) families.set(fam, []);
      families.get(fam).push(f);
    }
  }
  const specs = [...families.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([fam, fs]) => familySpec(fam, fs));
  const url = `https://fonts.googleapis.com/css2?${specs.map((s) => `family=${s}`).join('&')}&display=block`;
  return { css: `@import url('${url}');${stripped}`, changed: true, url };
}

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (p.endsWith('.md')) acc.push(p);
  }
  return acc;
}

const candidates = ONLY ? [ONLY] : walk('content');
const files = candidates.filter((p) => readFileSync(p, 'utf8').includes(TOKEN));

let touched = 0;
let blocks = 0;
const unknown = [];
const urls = new Set();

for (const p of files) {
  const orig = readFileSync(p, 'utf8');
  let out = orig.split(TOKEN).join(SENTINEL);
  out = out.replace(/<style>([\s\S]*?)<\/style>/g, (full, css) => {
    const r = rewriteStyleBlock(css, unknown);
    if (r.changed) { blocks++; urls.add(r.url); }
    return `<style>${r.css}</style>`;
  });
  out = out.split(SENTINEL).join(TOKEN);
  if (out !== orig) {
    touched++;
    if (!DRY) writeFileSync(p, out);
  }
}

console.log(`${DRY ? '[dry-run] ' : ''}${touched} file(s), ${blocks} <style> block(s) rewritten`);
console.log(`${urls.size} distinct Google Fonts URL(s)`);
if (unknown.length) {
  console.log('UNRESOLVED (left untouched):');
  for (const u of new Set(unknown)) console.log('  ', u);
}
if (!DRY) {
  const left = files.filter((p) => readFileSync(p, 'utf8').includes(TOKEN));
  console.log(`placeholders remaining: ${left.length} file(s)`);
}
