# Getting Started Library

The canonical, versioned source for the Studiograph **Getting Started** library — the starter content every new workspace receives: presentation, publication, landing-page, infographic, diagram, social and chart templates, plus the core skills and brand scaffolding that go with them.

Improvements land here first and flow forward into workspaces. A workspace copy is a *rendering* of this repo, not the other way round.

> **Status: unreleased.** The content mirror and the export path are in place; `v1.0.0` is deliberately not cut yet. See [Fonts](#fonts) for the one open dependency.

## Layout

```
content/                  mirror of the workspace folder tree, file for file
  start-here.md
  sources-and-licenses.md
  presentations/          skills/ (templates) + examples/ (a finished piece each)
  publications/  landing-pages/  infographics/
  diagrams/  social-media/  working-with-data/
  core-skills/  your-brand/
manifest.json             version, font requirements, provisioning contract, cross-checks
tools/
  export-from-workspace.mjs   regenerates content/ + manifest.json from a workspace
```

`content/` mirrors the on-disk workspace layout exactly — including each folder's
`.studiograph-folder.json`, which carries display names — so both export and
import stay near-copies rather than transformations.

## The one transformation: asset ids

Entries reference uploaded files as `/api/assets/<asset-id>/<filename>`. **Asset
ids are workspace-local**: a real id copied into another workspace does not
resolve, and the failure is *silent* — a font simply falls through to the next
entry in its CSS stack and the piece renders structurally correct and
typographically wrong.

So the export replaces every id with a placeholder that cannot resolve by accident:

```
/api/assets/{{ASSET_ID}}/Inter-Variable.woff2
```

Provisioning reverses exactly this one substitution, matching on the **filename**
that follows the token. Nothing else about the content has to be understood on
the way back in. The export fails hard if any real id survives the rewrite.

## Fonts

**No font binaries ship in this version, and the strategy is not yet settled.**

Every family the templates use — all 21 declared, across 30 referenced files — is
available on Google Fonts under the OFL, with the italic cuts the templates need.
That opens a second path beyond bundling the files as workspace assets:

| Strategy | What it means | Blocked on |
|---|---|---|
| **Bundled** | ship `.woff2` files here, upload per workspace, rewrite ids | nothing — works against production today |
| **Google Fonts** | templates reference `fonts.googleapis.com`; no binaries, no rewrite | the artifact CSP allowlist reaching production |

The CSP work that admits `fonts.googleapis.com` / `fonts.gstatic.com` for live
renders — and inlines them at export time so exports stay self-contained — is
merged to `main` but **not in any release tag yet**. Until it deploys, the Google
Fonts path cannot be validated, so `v1.0.0` waits.

Meanwhile `manifest.json` records the full **font requirement set**: per file, the
declared family, weight ranges, styles, and every entry referencing it. That is
the input both strategies need — what to upload if fonts stay workspace assets,
or which axes a `css2` URL must reproduce if they do not. Note that weight ranges
differ per template (Source Serif 4 appears as `200 900`, `400 700` *and*
`400 600`), so a Google Fonts rewrite must be per-file, not per-family.

Switching strategy also means rewriting `your-brand/skills/using-google-fonts.md`,
which currently teaches the opposite — that a canvas "cannot fetch anything from
the internet." True when written; false once the CSP work ships.

## Cross-checks

`manifest.json` carries a `crossCheck` block, so a declared asset that nothing
uses and a used asset that nothing declares both surface mechanically rather than
by eye:

- **`orphanAssets`** — in the workspace asset store, referenced by no entry.
- **`missingAssets`** — referenced by an entry, absent from the store.
- **`anomalies`** — declaration defects that render as plausible-but-wrong type:
  - `range-on-static-file` — a variable weight *range* declared against a static
    file, so intermediate weights get synthesised.
  - `italic-used-without-italic-face` — the entry sets `font-style: italic` but
    some declared family has no italic cut, so the browser shears its roman. CSS
    cannot tell us which family a given rule resolves against, so these are
    reported as **candidates to check**, not confirmed defects.

## Known issues in the current content

Carried over from the source workspace — all pre-existing, none introduced here:

- **17 anomalies** reported by the cross-check, including all three known italic
  bugs: `coming-soon-landing-app`, `paged-manuscript-template` (both request
  italic Newsreader with only the regular cut), and `latex-article-template`
  (uses `font-style: italic` while declaring no italic face at all — previously
  undocumented).
- **`Newsreader-Italic.woff2` does not exist** in the workspace asset store, so
  the first two cannot be fixed by adding a declaration alone. On the Google
  Fonts path they resolve for free.
- **2 orphan assets** — `PressStart2P-Regular.woff2` and `VT323-Regular.woff2`
  are uploaded but referenced by nothing.
- **Two entity ids carry collision suffixes** — `venn-overlap-diagram` and
  `line-chart-template` — because the natural ids were taken elsewhere in the
  source workspace. Left as-is: both work, and renaming them would require
  updating inbound wikilinks. Cosmetic.

## Regenerating

```bash
node tools/export-from-workspace.mjs <workspace>/getting-started \
  --out . --inventory <asset-inventory.json>
```

The export is one-way. Edit content **here**, not in a workspace, or the next
export will overwrite it.

## Licensing

Every source in this library is MIT, OFL, or CC0 — see
[`content/sources-and-licenses.md`](content/sources-and-licenses.md). Font
families referenced by the templates are all SIL Open Font License.

## Not here yet

Provisioning (installing this into a new workspace) and updates (carrying
improvements into existing workspaces without clobbering local edits) are later
phases. This repo is currently the source of truth and nothing consumes it
automatically.
