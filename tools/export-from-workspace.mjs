#!/usr/bin/env node
/**
 * Export the workspace `getting-started` folder into this repo's /content/ tree.
 *
 * The repo is the canonical source; a workspace is a *rendering* of it. So the
 * export is deliberately a near-copy: the on-disk folder tree is mirrored file
 * for file, and the only transformation is that workspace-specific asset ids are
 * replaced with a placeholder token. Provisioning reverses exactly that one
 * substitution — nothing else has to be understood on the way back in.
 *
 *   node tools/export-from-workspace.mjs <workspace-getting-started-dir> [--out .]
 *
 * Asset ids are workspace-local. A real id copied into another workspace does
 * not resolve, and the failure is SILENT (a font falls through to the stack's
 * next entry), so storing real ids here would be a latent bug in every
 * downstream workspace. `{{ASSET_ID}}` cannot resolve by accident.
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { execFileSync } from 'child_process';

const ASSET_ID_TOKEN = '{{ASSET_ID}}';
/** `/api/assets/<uuid>/<filename>` — the only workspace-specific shape in the content. */
const ASSET_URL_RE = /\/api\/assets\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\/([A-Za-z0-9._-]+)/g;
/** A CSS `@font-face` block. Works on raw markdown and on the JSON-escaped
 *  bodies of artifact entries alike: inside an artifact bundle the CSS lives in
 *  a JSON string where `{`/`}` are still literal, so the block boundaries hold. */
const FONT_FACE_RE = /@font-face\s*\{([^}]*)\}/g;

const args = process.argv.slice(2);
const SRC = args[0];
const OUT = args[args.indexOf('--out') + 1] && args.includes('--out') ? args[args.indexOf('--out') + 1] : '.';
if (!SRC || !existsSync(SRC)) {
  console.error('usage: export-from-workspace.mjs <workspace-getting-started-dir> [--out <repo-root>]');
  process.exit(1);
}

const INVENTORY = args.includes('--inventory')
  ? JSON.parse(readFileSync(args[args.indexOf('--inventory') + 1], 'utf8'))
  : [];

/** Files that make up an entry or define folder presentation. Everything else in
 *  the workspace folder is server-side bookkeeping and must not travel. */
const isContentFile = (name) => name.endsWith('.md') || name === '.studiograph-folder.json';

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (isContentFile(name)) acc.push(full);
  }
  return acc;
}

// ── read source ────────────────────────────────────────────────────────────────
const files = walk(SRC).sort();
let sourceCommit = 'unknown';
try {
  sourceCommit = execFileSync('git', ['-C', SRC, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
} catch { /* not a git checkout — leave 'unknown' */ }

// ── mirror content, swapping asset ids for the placeholder ────────────────────
const contentRoot = join(OUT, 'content');
rmSync(contentRoot, { recursive: true, force: true });

/** filename -> Set(entry paths referencing it) — the `referencedBy` index. */
const referencedBy = new Map();
/** Per-file font declarations, used for the cross-check and for whichever font
 *  strategy provisioning ends up using. */
const declarations = [];
const anomalies = [];

for (const abs of files) {
  const rel = relative(SRC, abs);
  const raw = readFileSync(abs, 'utf8');

  for (const m of raw.matchAll(ASSET_URL_RE)) {
    if (!referencedBy.has(m[1])) referencedBy.set(m[1], new Set());
    referencedBy.get(m[1]).add(rel);
  }

  // Parse @font-face blocks that point at a workspace asset.
  const faces = [];
  for (const m of raw.matchAll(FONT_FACE_RE)) {
    const body = m[1];
    const file = (body.match(/\/api\/assets\/[0-9a-fA-F-]{36}\/([A-Za-z0-9._-]+\.woff2)/) || [])[1];
    if (!file) continue;
    const grab = (p) => (body.match(p) || [])[1]?.trim();
    faces.push({
      family: grab(/font-family:\s*['"]?([^;'"]+)/) ?? '(unset)',
      weight: grab(/font-weight:\s*([^;]+)/) ?? null,
      style: grab(/font-style:\s*([^;]+)/) ?? null,
      display: grab(/font-display:\s*([^;]+)/) ?? null,
      file,
    });
  }
  if (faces.length) declarations.push({ entry: rel, faces });

  // Cross-check 1 — a variable weight RANGE declared against a static file. The
  // browser satisfies the extra weights by SYNTHESISING them (smeared strokes),
  // which looks plausible enough to ship and wrong enough to matter.
  for (const f of faces) {
    if (f.weight && /^\d+\s+\d+$/.test(f.weight) && !/variable/i.test(f.file)) {
      anomalies.push({
        kind: 'range-on-static-file',
        entry: rel,
        family: f.family,
        weight: f.weight,
        file: f.file,
        detail: `weight range "${f.weight}" declared against non-variable file ${f.file}; intermediate weights are synthesised`,
      });
    }
  }

  // Cross-check 2 — the entry sets `font-style: italic` somewhere, but some
  // declared family has no italic @font-face, so the browser shears that
  // family's roman. On a serif that is immediately visible; this is the bug
  // class the rollout memo recorded by hand.
  //
  // This is deliberately PER-FAMILY, not per-file. A file-level "does any italic
  // face exist?" test passes `paged-manuscript` — which declares Cormorant
  // Garamond Italic beside a roman-only Newsreader — and so misses exactly the
  // bug that was found by hand. CSS cannot tell us which family a given
  // `font-style: italic` rule resolves against, so the families without an
  // italic cut are reported as CANDIDATES to check, not as confirmed defects.
  const usesItalic = /font-style\s*:\s*\\?"?italic/i.test(raw) || /font-style:italic/i.test(raw);
  if (faces.length && usesItalic) {
    const italicFamilies = new Set(faces.filter((f) => f.style && /italic/i.test(f.style)).map((f) => f.family));
    const romanOnly = [...new Set(faces.map((f) => f.family))].filter((fam) => !italicFamilies.has(fam)).sort();
    if (romanOnly.length) {
      anomalies.push({
        kind: 'italic-used-without-italic-face',
        entry: rel,
        families: romanOnly,
        detail: `entry sets font-style: italic; these declared families have no italic cut and would be synthesised: ${romanOnly.join(', ')}`,
      });
    }
  }

  const rewritten = raw.replace(ASSET_URL_RE, `/api/assets/${ASSET_ID_TOKEN}/$1`);
  const dest = join(contentRoot, rel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, rewritten);
}

// ── cross-check against the workspace asset store ─────────────────────────────
const referencedFiles = new Set(referencedBy.keys());
const inventoryFiles = new Set(INVENTORY.map((a) => a.filename));
const orphanAssets = [...inventoryFiles].filter((f) => !referencedFiles.has(f)).sort();
const missingAssets = [...referencedFiles].filter((f) => !inventoryFiles.has(f)).sort();

// ── font requirement set ──────────────────────────────────────────────────────
// Grouped by the file each @font-face points at, because that — not the family —
// is what a bundled strategy uploads and what a CDN strategy must reproduce.
const fonts = [...referencedFiles].sort().map((file) => {
  const uses = declarations.flatMap((d) => d.faces.filter((f) => f.file === file).map((f) => ({ ...f, entry: d.entry })));
  const inv = INVENTORY.find((a) => a.filename === file);
  return {
    file,
    label: inv?.label ?? null,
    family: [...new Set(uses.map((u) => u.family))].sort(),
    weights: [...new Set(uses.map((u) => u.weight).filter(Boolean))].sort(),
    styles: [...new Set(uses.map((u) => u.style).filter(Boolean))].sort(),
    variable: /variable/i.test(file),
    referencedBy: [...referencedBy.get(file)].sort(),
  };
});

// ── verify the transformation left nothing workspace-specific behind ──────────
const leaked = [];
for (const abs of walk(contentRoot)) {
  const body = readFileSync(abs, 'utf8');
  const m = body.match(/\/api\/assets\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-/);
  if (m) leaked.push(relative(contentRoot, abs));
}
if (leaked.length) {
  console.error(`FAILED: real asset ids survived the rewrite in ${leaked.length} file(s):`);
  for (const f of leaked) console.error(`  ${f}`);
  process.exit(1);
}

const manifest = {
  version: JSON.parse(readFileSync(join(OUT, 'package.json'), 'utf8')).version,
  generatedAt: process.env.SOURCE_DATE ?? null,
  source: { workspace: 'schema-os', folder: 'getting-started', commit: sourceCommit },
  folder: { name: 'getting-started', display_name: 'Getting Started', workspace_wide: true },
  rewrite: { strategy: 'asset-url', token: ASSET_ID_TOKEN, pattern: `/api/assets/${ASSET_ID_TOKEN}/<filename>` },
  counts: { entries: files.filter((f) => f.endsWith('.md')).length, folderConfigs: files.length - files.filter((f) => f.endsWith('.md')).length, fonts: fonts.length },
  // No font BINARIES ship in this version — see README "Fonts". This is the
  // requirement set both candidate strategies need: what to upload if fonts stay
  // workspace assets, or what axes a Google Fonts URL must reproduce if they do not.
  fontStrategy: 'undecided',
  fonts,
  crossCheck: { orphanAssets, missingAssets, anomalies },
};

writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

console.log(`content:   ${manifest.counts.entries} entries + ${manifest.counts.folderConfigs} folder configs`);
console.log(`fonts:     ${fonts.length} referenced`);
console.log(`orphans:   ${orphanAssets.length ? orphanAssets.join(', ') : 'none'}`);
console.log(`missing:   ${missingAssets.length ? missingAssets.join(', ') : 'none'}`);
console.log(`anomalies: ${anomalies.length}`);
for (const a of anomalies) console.log(`  [${a.kind}] ${a.entry} — ${a.detail}`);
