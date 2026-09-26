# Changelog

All notable changes to the Getting Started library are recorded here. Versions
follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html); the version a
workspace has installed is stamped at provisioning so updates know what to apply.

## [1.2.1] - 2026-09-26

Retires the "font kit" from the brand scaffolding. Studiograph removed its
font-skill feature when uploaded fonts began applying automatically by family
name, but `using-custom-fonts` still taught the agent to build a kit entry, so
an agent following it recreated the retired pattern.

### Changed

- **`your-brand/skills/using-custom-fonts.md`** — rewritten around how fonts
  work now: upload the files to a folder shared with everyone and name the
  family; weights, italics and name variants come from the files' own metadata.
  A font kept in another folder is declared in the artifact itself (the
  library's **Copy @font-face**). The build-a-kit steps, the kit-referencing
  pattern and the "Build a font kit entry" prompt are gone, and the skill now
  tells the reader not to create one. Licensing, fallback, portability and
  checking sections kept.
- **`your-brand/skills/brand-skill-template.md`** — dropped the "Font kit"
  field; the upload note now says where to put the files.
- **`core-skills/skills/word-to-publication.md`** — Type mapping names the
  family when the font applies automatically and declares it otherwise; no
  "font-kit skill" fallback.
- `manifest.json`: `version` 1.2.1.

## [1.2.0] - 2026-08-24

Second core skill in the import series, validated end-to-end before landing.

### Added

- **`core-skills/skills/powerpoint-to-presentation.md`** — PowerPoint Deck to
  Presentation: decode a `.pptx` (EMU geometry, text runs, the layout/master
  inheritance chain, theme) onto fixed-size frames; carry images through the
  presigned upload flow (binary is never retyped through an agent); a full
  "Damaged exports" taxonomy for design-tool PPTX exports (flattened weights,
  dropped paragraph spacing, phantom shapes, rasterized charts, oversized text
  boxes, misoriented ticks) with repairs; a PDF-pages archival fallback.
  Validated by a from-scratch skill run that reproduced a hand-reviewed import
  byte-for-byte across all 8 slides. Entry count: 143 → 144.

### Changed

- **`core-skills/skills/word-to-publication.md`** — added the strut rule to
  Type mapping (font-size must live on the block that carries a fixed
  line-height, or headless renderers inflate the line box ~1.3×), and the
  Series section now links the new PowerPoint skill.
- `manifest.json`: `version` 1.2.0, `counts.entries` 144, `source.commit` updated.

## [1.1.0] - 2026-08-23

Self-containment pass: the library no longer names or depends on anything in the
source workspace, and gains one new core skill.

### Added

- **`core-skills/skills/word-to-publication.md`** — Word Document to Publication:
  turn a `.docx` into a publication that reproduces it faithfully (read the OOXML
  for page size, margins, styles, exact leading, fonts, headers/footers and page
  numbers; map to a paginated frame with furniture; verify against Word's own
  render). First of a planned series: PowerPoint → presentation, Excel → dataset.
  Entry count: 142 → 143.

### Changed

- **18 presentation theme skills** carried a sentence directing readers to the
  source studio's internal `schema-slides` / `proposal-slides` skills — a
  dangling reference in every provisioned workspace. Each now reads: "Do not use
  it for formal client proposals in your studio's own visual system — set those
  in your own brand deck skill (see [[brand-skill-template]])." (Wording adapted
  per file for aurora, bright-sans, creative-mode, and sticker-pop; aurora's
  "Schema deck chrome" clause is now "a corporate brand system's deck chrome.")
- **`core-skills/skills/humanizer-2.md`** — removed the `copied_from` frontmatter
  pointer into the source workspace's `skills` folder (dangling provenance in a
  fresh tenant).
- `manifest.json`: `version` 1.1.0, `counts.entries` 143, `source.commit` updated
  to the workspace state these edits mirror.

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
