# Changelog

All notable changes to the Getting Started library are recorded here. Versions
follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html); the version a
workspace has installed is stamped at provisioning so updates know what to apply.

## [1.0.0] - 2026-08-19

First cut. 142 entries, 25 folder configs, across 10 top-level folders.

- **Fonts resolve from Google Fonts.** The `asset-url` strategy is retired: the
  `@font-face` blocks that pointed at `/api/assets/{{ASSET_ID}}/<file>.woff2`
  are replaced by one `css2` `@import` per `<style>`, generated from the
  manifest's per-file requirement set. 47 entries, 28 distinct URLs, every one
  verified to return `@font-face` CSS. Weight axes are preserved per template
  (variable faces become ranges, static faces an explicit weight list, and
  families used in both romans and italics emit `ital,wght`).
- `manifest.json`: `fontStrategy: "google-fonts"`, `version: 1.0.0`, `generatedAt` stamped.
- `your-brand/skills/using-google-fonts.md` rewritten — it taught the upload
  workaround for a CSP limitation that no longer exists. Uploading is now
  documented as the path for typefaces that are *not* on Google Fonts.
- `tools/rewrite-to-google-fonts.mjs` added, so a future re-export can be
  converted in one command.

### Added

- `content/` — the full Getting Started tree exported from the `schema-os`
  workspace: **142 entries** (72 skills, 27 artboards, 19 presentations, 11 notes,
  6 apps, 6 publications, 1 dataset) plus **25** `.studiograph-folder.json`
  folder configs, mirroring the on-disk layout file for file.
- `manifest.json` — the provisioning contract: version, folder identity, the
  asset-url rewrite rule, the per-file font requirement set, and the `crossCheck`
  block.
- `tools/export-from-workspace.mjs` — regenerates `content/` and `manifest.json`
  from a workspace folder. Replaces workspace-local asset ids with the
  `{{ASSET_ID}}` placeholder and **fails hard** if any real id survives.
- Cross-checks that catch silently-wrong typography: `orphanAssets`,
  `missingAssets`, `range-on-static-file`, and a **per-family**
  `italic-used-without-italic-face` check.

### Changed

- **`paged-manuscript`** — corrected a claim that would teach the wrong mental
  model: the empty `header.first` slot was described as reserving space for the
  running head. Furniture is out-of-flow and never reserves space; the body
  starts at the same height on every page because `margins.top` is uniform. That
  misconception is exactly why a too-tall letterhead reads as unfixable, so it is
  worth not shipping to every new workspace.
- **`paged-manuscript-template`** — the folio now carries `fontSize: 12` and
  `color: #8A7F6D`, matching the running head and the skill's own palette table.
  It had been rendering in the browser default (Times, 16px, black) under a
  Newsreader book page, because the platform resolved "the document's body type"
  from `<body>`, which this template — like every template here — never styles.
  The engine fix (studiograph#706) makes the default a folio derived from the
  document's real body text, which lands close on its own; these two fields take
  it to the palette exactly, and demonstrate the override pattern.

These are the only two files this pagination work touches. The other five
publication skills declare no furniture and specify no folio type, so the engine
change only improves them (their page numbers move from Times to each
document's own face). `tufte-essay` names `#666666` for page numbers in its
palette; the new default resolves to roughly `#707070`, so it is left on the
default rather than pinned — flagged here rather than silently changed.

### Known issues

Pre-existing in the source workspace, carried over unchanged and not yet fixed:

- **17 declaration anomalies**, including all three italic bugs —
  `coming-soon-landing-app`, `paged-manuscript-template`, and
  `latex-article-template` (the last previously undocumented: it uses
  `font-style: italic` while declaring no italic face at all).
- **`Newsreader-Italic.woff2` is absent** from the workspace asset store, so the
  first two cannot be fixed by adding a declaration alone.
- `coming-soon-landing-app` declares `font-weight: 400 600` — a variable range —
  against the static `Newsreader-Regular.woff2`, so 600 is synthesised.
- **2 orphan assets**: `PressStart2P-Regular.woff2`, `VT323-Regular.woff2`.

### Notes

- No font binaries ship in this version; the manifest records the requirement set
  instead, which is what either candidate strategy consumes.
- Entity ids `venn-overlap-diagram` and `line-chart-template` keep their
  collision suffixes from the source workspace. Cosmetic; renaming would require
  updating inbound wikilinks.
