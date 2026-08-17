# Changelog

All notable changes to the Getting Started library are recorded here. Versions
follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html); the version a
workspace has installed is stamped at provisioning so updates know what to apply.

## [Unreleased]

The content mirror and export path. `v1.0.0` is intentionally **not** cut yet —
it waits on the font strategy, which waits on the artifact CSP work reaching
production (see README → Fonts).

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
