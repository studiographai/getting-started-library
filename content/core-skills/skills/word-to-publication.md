---
entity_type: skill
entity_id: word-to-publication
created_at: '2026-08-23T00:00:14.132Z'
updated_at: '2026-08-24T02:01:29.613Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-22'
tags:
  - docx
  - word
  - publication
  - import
  - pagination
  - foundational
name: Word Document to Publication
description: >-
  Turn a Word document (.docx) — attached to the chat, uploaded to the library,
  imported as a document entry, or on disk — into a Studiograph publication that
  reproduces it faithfully: read the OOXML for page size, margins, styles, exact
  leading, fonts, headers/footers and page numbers; map them to a paginated
  frame with furniture; convert the body; verify against Word's own render.
  Foundational — the first of a series (PowerPoint → presentation, Excel →
  dataset follow the same shape).
applies_to:
  - publication
  - document
---

# Word Document to Publication

Turn a `.docx` into a Studiograph **publication** — a paginated document frame that looks like the Word file, flows across pages the same way, and exports to a matching PDF. The method is deterministic: Word stores every measurement in its XML, so read the numbers instead of guessing from a screenshot.

Two outcomes are possible and you should know which one the user wants before you start:

- **Reproduction** — the publication *is* the Word document (a letter, contract, proposal, report that must match the original). Every number below matters.
- **Template** — the Word file defines a house style and the user wants *new* content set in it. Decode the file once into a reusable skill — page geometry, every style in pt and px, header/footer behavior, structure, ready-to-use CSS — then build publications from that skill.

## 1. Get the file

The source can arrive four ways. Handle each so the original bytes are available — the text alone is not enough for fidelity.

| Source | How to read it |
|---|---|
| **Attached to the chat** | Read it directly. Ask for the file (not a PDF of it) if measurements matter. |
| **Library asset** (`.docx` uploaded via Import or *Upload*) | `list_assets` with `name` to get `asset_id` + `filename`. The original is served at `/api/assets/<asset_id>/<filename>` (URL-encode spaces). From a CLI / Claude Code session, download it with the workspace token: `curl -H "Authorization: Bearer $SG_TOKEN" "<origin>/api/assets/<id>/<filename>" -o in.docx` — the token lives in `~/.studiograph/user.json` under `studiograph_tokens[<origin>]`. Never paste tokens into entries or skills. |
| **Imported document entry** | Import converts a `.docx` into a `document` entry (prose) *and* keeps the original attached. `get_entity` gives you the text and the attachment link; fetch the attachment as above for styles and geometry. |
| **Local path** | Use it as-is. |

If you can only get text (no file), say so and build a *styled* publication, not a reproduction — do not claim pixel fidelity you cannot verify.

## 2. Unpack and read the XML

A `.docx` is a zip. Unzip it and read these parts, in this order:

```
word/document.xml        body paragraphs, runs, tables, and the section properties (sectPr) at the end
word/styles.xml          docDefaults + every paragraph/character/table style (the real type spec)
word/header*.xml         running headers   ┐ referenced from sectPr by type: first / default / even
word/footer*.xml         running footers   ┘ page numbers live here as <w:fldSimple w:instr="PAGE"> or field codes
word/numbering.xml       bullet/number formats, indents, bullet glyph fonts
word/settings.xml        evenAndOddHeaders, defaultTabStop, compat flags
word/fontTable.xml       font names → embedded files (word/fonts/*.odttf) — tells you which faces were actually used
word/_rels/document.xml.rels   maps rId → header/footer/image parts
word/media/*             images
```

Units: **1 in = 1440 twips = 72 pt = 96 px**; `w:sz` is half-points; `w:spacing w:line` is twentieths of a point; borders are eighths of a point; `w:spacing w:val` (tracking) is twentieths of a point; table widths (`w:w`) twips. **px = twips ÷ 15; px = pt × 4 ⁄ 3.**

### What to extract

**Page** (`sectPr`): `pgSz` w/h; `pgMar` top/right/bottom/left/header/footer/gutter; `titlePg` (different first page); `cols`. Multiple `sectPr` = multiple sections with different margins/headers — note each.

**Default type** (`docDefaults/rPrDefault` + `Normal`): family (theme fonts resolve via `theme/theme1.xml` — `minorHAnsi` is usually Calibri), size, language.

**Each style used** (`styles.xml`, resolve `basedOn` chains): font family per script (`ascii`/`hAnsi`/`cs`), size, bold/italic, color, tracking, `spacing` before/after/line + `lineRule` (**`exact`** = fixed line box; `atLeast`; `auto` = multiple of single where 240 = 1.0), indents (`left`, `hanging`, `firstLine`), alignment, `keepNext`, `pageBreakBefore`, `widowControl` (on by default), `numPr`, tabs, borders/shading.

**Fonts — verify, don't trust names.** Custom font names lie: a style may say family "X Semibold" and also set `<w:b/>`; only the font table tells you what file the bold slot points to. Deobfuscate the embedded `.odttf` (XOR the first 32 bytes with the `fontKey` GUID bytes reversed) and read the `name`/`OS/2` tables for the real family, subfamily, weight, and vertical metrics (hhea/typo/win ascender+descender — needed for baseline math). Also check for `w:kern` and `w:ligatures`: **absent means Word does not kern or ligate**, and browsers do both by default.

**Headers/footers:** which parts exist for `first` / `default` / `even`, what each contains (tables, text, images, PAGE/NUMPAGES fields), their height, and whether they push the body down (Word starts the body at `max(top margin, header bottom)`). A section with no `footerReference` has no footer — do not invent one.

**Body:** walk paragraphs in order; for each record its style, direct formatting overrides (`pPr`/`rPr`), runs (text, bold/italic/underline/highlight/color/size overrides, tabs, breaks), bookmarks/fields, and tables (grid widths, cell margins, borders, row heights, merged cells). Note explicit page breaks (`w:br w:type="page"`, `pageBreakBefore`) and section breaks.

**The render reference:** if a PDF exported by Word sits next to the file, use it — extract text baselines and x-extents (`pdftotext -bbox-layout`, or a PDF library) and keep it as ground truth. If not, and Word is available, export one. A reference render settles every "is this right?" question numerically.

## 3. Map to a publication

A publication is **one `pages` frame** with `pagination`. Never one frame per page; never `height:"auto"`.

| Word | Publication |
|---|---|
| `pgSz` | `geometry` — Letter 12240×15840 twips → **816 × 1056**; A4 11906×16838 → **794 × 1123** |
| `pgMar` left/right | `pagination.margins.left/right` (twips ÷ 15) |
| `pgMar` top/bottom **adjusted for header/footer height** | `margins.top` = where the body actually starts on a *typical* page; `margins.bottom` likewise. If the first page differs (`titlePg` with a tall letterhead), keep the uniform margin for pages 2+ and push page 1 with a fixed-height spacer at the top of the body. |
| `pgMar` header/footer distance | `furniture.header/footer.anchor:"page"`, `offset` = distance in px. Use `anchor:"content"` only when the band should hug the body edge. |
| first / default / even header | `furniture.header.first` / `.middle` / `.last` (there is no even/odd; if the file uses them, say so). Empty Word header → `"<div></div>"`, explicitly. |
| `PAGE` field in a footer/header | `pagination.pageNumbers` — `position`, `format` (`{n}`, `{n} of {m}`), `showOnFirst:false` when `titlePg` hides it, `fontFamily/fontSize/color` set explicitly to the footer's run properties. **No PAGE field anywhere → `pageNumbers:{show:false}`** (`enabled:false` is not a key). |
| page break / `pageBreakBefore` | `style="break-before:column"` on the next block |
| `keepNext` / `keepLines` | `break-after:avoid` / `break-inside:avoid` |
| `widowControl` (default on) | `p{orphans:2;widows:2}` |

**Furniture is out-of-flow and reserves no space.** A header taller than `margins.top` overlaps the body; `inspect_artifact` reports it as `furnitureOverflow` with the margin to set — set exactly that. Furniture also does not inherit body type (default: 12 px grey `#374151`): style every region inline with its own font, size, weight, color. Furniture is laid out inside the left/right content margins, so horizontal positions inside it are measured from the left margin, not the page edge.

### Type mapping

- Family: the real family from the font table, loaded via `@font-face` in `shared.head` from workspace assets (see [[using-custom-fonts]]; if your workspace has a font-kit skill for the family, use its declarations). Load **every** weight/style the document uses in one edit — a partial set makes the browser faux-bold and looks worse than the fallback. Always give a fallback stack.
- Size: half-points ÷ 2 × 4⁄3 → px. Line: `lineRule="exact"` → `line-height: <twentieths ÷ 15>px` and **no** vertical padding on the block; `auto` 240 → `line-height: normal` is *not* the same as Word (Word single spacing uses the font's *win* ascent+descent) — compute it: `(winAscent + winDescent) ÷ unitsPerEm × size`. `atLeast` → `min-height` on the line is not expressible; use the exact value if the text never exceeds it.
- **Baseline within an exact line:** Word places the baseline at `lineTop + (lineHeight − descentPortion)` and, in the cases measured, that lands lower than CSS's half-leading placement by about 1 px at 12/15 pt. Measure it against the reference PDF and absorb the difference in `margins.top` / the page-1 spacer, not in per-line padding.
- **Put `font-size` on the same block element that carries the fixed `line-height`** — never only on inner spans. If a block keeps a small inherited font-size (the 16px strut) while a large span sets its own, some render environments inflate the line box far past the fixed line-height (measured ~1.3× in headless rendering, invisible in a quick local check). Spans override only deltas from the block's size.
- Kerning/ligatures: `font-kerning:none; font-variant-ligatures:none` unless the document enables them. Add `text-rendering:geometricPrecision` so Chrome uses linear advance widths — without it, glyph widths round to whole pixels and roughly one word in six lines wraps differently from Word.
- Tracking: twentieths of a point × 1⁄15 → px `letter-spacing`.
- Indents: `left`/`hanging` → `padding-left` + absolutely positioned marker (bullets) — reproduce the bullet glyph, size, and font from `numbering.xml`.
- Tables: use the `tblGrid` column widths (twips ÷ 15), cell margins as padding, borders as given (eighths of a point ÷ 8 × 4⁄3 → px), `tblStylePr firstRow` etc. for header-row formatting. Last row of a bordered table typically has no bottom rule in designed templates — check the XML rather than assuming.
- Highlights (`w:highlight`) are usually placeholder markers, not design — do not reproduce them in the publication. Keep placeholders as plain text to be replaced, and note in the skill which strings are placeholders.
- Colors: `w:color` hex; `auto` = black. Theme colors resolve via `theme1.xml`.
- Images: upload from `word/media` as assets (`upload_asset_inline` / `attach_asset_to_entity`), size from `wp:extent` (EMU ÷ 9525 → px).

### Body conversion

Every Word paragraph becomes one block (`<p>`, heading, `<li>`, table row) with the style's CSS class; empty paragraphs become fixed-height spacers (`<div style="height:<line>px">`), **not** `<br>` chains or `&nbsp;` paragraphs — they must keep the exact line height. Runs with direct formatting become `<span>`s. Keep the source order; do not merge or split paragraphs. Tab stops: right/center tabs become grid or flex cells at the tab position.

## 4. Build

1. `create_artifact` with `entity_type:"publication"`, one `pages` frame, `shared.head` holding `@font-face` + the style classes, `pagination` as mapped, `background` set to the page color.
2. Name the entry after the document; link it to the source: attach the original `.docx` (`attach_asset_to_entity`) or wikilink the imported `document` entry so the provenance is one click away.
3. For a *template*, also save the decoded measurements as a skill (page, margins, every style in pt and px, header/footer behavior per page, body start per page, lines per page, structure, CSS, QA list) — that is the durable output; the publication is the example.

## 5. Verify — this step is not optional

1. `inspect_artifact`: `furnitureOverflow` and `requestFailures` empty (a failed font request means the page is in the fallback sans — fix before looking at anything else); `framesOverflowing` empty; page count as expected.
2. Compare against the reference render, numerically where you can: body start on page 1 and page 2; x of any header/footer element; line count per page (build a throwaway bundle of numbered one-line paragraphs and read where the break falls); line wraps of the longest paragraph (same last word on each line).
3. Compare visually: fonts and weights (real bold/italic cuts, not synthesized), rules, table borders, bullets, highlights, page numbers present/absent on the first page.
4. Iterate with `patch_artifact` (`set_frame_meta` for pagination — send the complete `pagination` object each time, it is replaced wholesale; `set_shared_file` for CSS tweaks). Re-inspect after every change.
5. Export to PDF and read the PDF, not the canvas, for the final check.

## Rules

- Numbers come from the XML and the reference render, never from eyeballing a screenshot at unknown scale.
- A Word document with no footer gets no footer; with no page numbers gets none. Reproduce absence as faithfully as presence.
- Keep one frame. Page 1 exceptions are spacers and `furniture.first`, not a second frame.
- Do not shrink type or leading to make content fit — if it paginates differently, find the measurement you got wrong.
- Never put credentials, tokens, or workspace-specific asset URLs into a portable skill; a template skill names the font family and leaves the kit to the workspace ([[using-custom-fonts]] → *Portability*).
- Say what you could not verify (e.g. "pages 2+ offset computed, not measured — reference PDF is one page").

## Series

This is the first of three import skills that share the same shape (get the file → read the native XML → map to the Studiograph format → build → verify against the native render):

- **Word → publication** (this skill)
- **PowerPoint → presentation** — [[powerpoint-to-presentation]]: `ppt/slides/*.xml`, `slideLayouts`, `slideMasters`, EMU geometry (÷ 9525 → px at 96 dpi) onto fixed-size frames
- **Excel → dataset** — `xl/worksheets/*.xml` + `sharedStrings.xml` + `styles.xml` number formats onto a CSV-bodied dataset with column formats

## References

- Pagination reference: the platform's built-in `paged-documents` skill (the agent is prompted to load it whenever an artifact has a paginated frame), plus [[paged-manuscript]] and [[minimal-report]] in this folder.
- Fonts: [[using-custom-fonts]], [[using-google-fonts]].
