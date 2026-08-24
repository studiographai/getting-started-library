---
entity_type: skill
entity_id: powerpoint-to-presentation
created_at: '2026-08-24T02:01:13.897Z'
updated_at: '2026-08-24T02:01:13.897Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-24'
tags:
  - pptx
  - powerpoint
  - presentation
  - import
  - slides
  - foundational
name: PowerPoint Deck to Presentation
description: >-
  Turn a PowerPoint deck (.pptx) into a Studiograph presentation that
  reproduces it faithfully: read the OOXML for slide size, shape geometry, text
  runs, spacing, and theme; map EMUs onto fixed-size frames with exact type;
  carry images through the presigned upload flow (never retype binary data);
  repair what lossy exporters (especially design-tool exports) destroy; verify
  against a native render or a trusted reference deck. Second in the import
  series after Word → publication; Excel → dataset follows the same shape.
applies_to:
  - presentation
---

# PowerPoint Deck to Presentation

Turn a `.pptx` into a Studiograph **presentation** — one fixed-geometry frame per slide, stepped by the platform, looking like the source deck. The method is the same discipline as [[word-to-publication]]: a `.pptx` is a zip of XML with every measurement stated, so read the numbers instead of guessing from a screenshot — then verify against a render, because two classes of source lie: lossy exporters drop attributes, and CSS reproduces PowerPoint's layout model only when you translate its semantics, not just its values.

Know which of two jobs you are doing before you start:

- **Reproduction** — the presentation *is* the deck. Every number below matters.
- **Template decode** — the deck defines a house style and the user wants a reusable slide system. Decode it once into a skill (type scale by role, layout grid, chrome), keep the imported deck as the worked example.

## 1. Get the file

Same four paths as Word: chat attachment, library asset (`list_assets` → `/api/assets/<asset_id>/<filename>`), an imported entry with the original attached, or a local path. You need the original bytes — decks cannot be reconstructed from text. Note that library import does not convert `.pptx` (no converter exists); it will usually arrive as an attachment or a file on disk.

**Ask where the deck came from.** A deck authored in PowerPoint or Google Slides keeps its layout system intact. A deck *exported* from a design tool (Figma and similar) is a different animal — structurally simple but attribute-lossy. See §6; identify which case you have before mapping.

## 2. Unpack and read the XML

A `.pptx` is a zip:

```
ppt/presentation.xml       slide size (p:sldSz, in EMUs) + slide order (p:sldIdLst → rels)
ppt/slides/slideN.xml      shapes (p:sp), pictures (p:pic), connectors (p:cxnSp), groups (p:grpSp)
ppt/slides/_rels/…         rId → media file per slide
ppt/slideLayouts/…         placeholder formatting a slide inherits
ppt/slideMasters/…         master text styles (lvl1pPr…), theme reference
ppt/theme/theme1.xml       color scheme + major/minor fonts
ppt/media/*                images
```

Units: **1 in = 914400 EMU; px at 96 dpi = EMU ÷ 9525.** Font sizes (`sz`) are hundredths of a point; letter-spacing (`spc`) hundredths of a point; line spacing `a:spcPts` hundredths of a point, `a:spcPct` thousandths of a percent. When you upscale to a larger frame (e.g. a 960×540pt deck onto 1920×1080), fold the scale factor in once: at 2×, **px = EMU ÷ 4762.5** and **type px = value ÷ 100 × 8⁄3**.

### What to extract

**Slide size and order** from `presentation.xml` — pick the frame geometry from `p:sldSz` (16:9 decks are usually best imported at 1920×1080; scale everything by `target ÷ (sldSz ÷ 9525)`).

**Per shape**: `a:xfrm` off/ext (position/size), `rot` (60000ths of a degree), `flipH/flipV`; `a:prstGeom` kind (rect, ellipse, line, roundRect…) or `a:custGeom`; fill (`a:solidFill` + `a:alpha`), stroke (`a:ln` w + fill — PowerPoint strokes are **centered** on the edge); `p:txBody` with `a:bodyPr` (anchor t/ctr/b, insets, autofit) and paragraphs.

**Per paragraph/run**: `a:pPr` algn, `a:lnSpc`, `a:spcBef`/`a:spcAft`, `marL`/`indent`, `a:buChar`/`a:buAutoNum`; `a:rPr` sz, b, i, u, spc, kern, solidFill, latin typeface.

**The inheritance chain — the hard part of real decks.** A run's effective properties resolve run → paragraph → shape `lstStyle` → the layout's placeholder (matched by `p:ph` type/idx) → the master's text styles → theme defaults. Naive importers read only the run and get sizes, colors, and fonts wrong. Design-tool exports usually bake everything onto runs (chain irrelevant); native decks lean on it heavily. Resolve the chain per placeholder before mapping.

**Theme**: color scheme and major/minor fonts. If the theme is the untouched Office default while slides carry explicit fonts and colors, it's dead weight — a hallmark of an exported deck.

**Kerning**: `kern="0"` on runs means PowerPoint won't kern; browsers kern by default. Match the source — but if the deck came from a design tool that *does* kern, keep browser kerning (design truth beats export encoding).

## 3. Map to a presentation

Create with `entity_type:"presentation"`: **N frames, one per slide, fixed geometry** — the platform steps them. Never hand-roll a stepper or pagination inside a frame.

| PowerPoint | Frame HTML |
|---|---|
| slide background fill | frame `background` |
| shape `xfrm` | absolutely positioned `div` (left/top/width/height in scaled px; `transform:rotate()` for `rot`) |
| rect / ellipse | div / div + `border-radius:50%` |
| line / connector | a 1px-to-stroke-width div (or inline SVG for diagonals); remember strokes are centered — offset by half the width |
| solid fill / stroke | `background` / `border` (with `*{box-sizing:border-box}` a CSS border draws inside; compensate if it matters) |
| `bodyPr` anchor ctr/b | flex column with `justify-content:center` / `flex-end` |
| paragraph | one `<p>` with `margin:0` (+ `spcBef`/`spcAft` as margins) |
| run | text in the `<p>`, `<span>` only for deltas |
| picture | positioned div; image via workspace asset URL, `background-size:100% 100%` for stretch fills |

### Type mapping — where reproductions live or die

- **Put `font-size` on the block element that carries the fixed `line-height` — never only on inner spans.** A paragraph that keeps a small inherited font-size (the strut) while a large span sets its own can inflate the line box far past the intended leading in headless render environments (measured ~1.3×), while looking fine in a quick local check. The paragraph carries the dominant run's full style; spans override only differences.
- `a:spcPts` → `line-height` in px; `a:spcPct val="100000"` = 100% → prefer the computed px so the value survives font swaps.
- `spc` → `letter-spacing` (÷100 × scale × 4⁄3); size and tracking scale together.
- `alpha` on fills → `rgba(...)`; keep exact values.
- Emit non-ASCII characters as HTML entities (`&#160;` for a non-breaking space) — invisible characters otherwise get silently normalized when markup is retyped or reviewed.
- Load every font weight/style the deck uses via `@font-face` from workspace assets in one edit ([[using-custom-fonts]]; Google-hosted families per [[using-google-fonts]]). A partial set faux-bolds. Always give a fallback stack.

### Media — the one hard transport rule

**Binary data must travel disk → storage without ever being retyped through an agent's output.** Re-emitting base64 by hand corrupts it (~a handful of errors per 100 KB, and the failure is *silent* — an image just doesn't render). The safe path, per file: `create_asset_upload` (presign) → `curl` PUT of the file bytes → `finalize_asset_upload`. Every failure mode on that path is loud (403 / `token_invalid`), so mangling is caught, not shipped. Then reference the returned `/api/assets/…` URLs from small generated CSS — low-entropy text is safe to emit, and a mistyped asset id shows up as a request failure at inspect time. For many small images, delegate the upload loop to a subagent and have it write a filename→URL mapping file.

## 4. Build and verify

1. `create_artifact` with all frames (stub the largest, fill by `patch_artifact set_frame_content` — re-fetch `artifact_hash` via `get_artifact_manifest` **immediately before every patch**; it changes on each write).
2. After writing, confirm each frame's server-reported character count equals your local bytes — catches truncation and insertion drift.
3. `inspect_artifact`: `requestFailures` empty (fonts and images actually loading), `framesOverflowing` empty, then compare each slide against the reference render.
4. **The reference render**: PowerPoint/Keynote PDF export of the deck if available, or the design tool's own PDF export. No reference at all → say so; you are building a styled interpretation, not a verified reproduction.
5. When a value is in doubt and the workspace holds a *trusted* artifact in the same visual system (an earlier hand-verified deck), read its frames (`get_artifact_manifest` with `frame_id`) and treat it as ground truth for roles the source lost.
6. For layout questions the screenshots can't settle, build a throwaway **probe frame**: the doubtful markup next to ruler divs at exact expected positions. One render answers what hours of eyeballing won't.

## 5. Rules

- Numbers come from the XML and the reference render, never from eyeballing a screenshot at unknown scale.
- Reproduce absence faithfully: no invented footers, page numbers, or decorations.
- Fidelity beats convention: keep the source's exact colors, alphas, and tracking even where they look idiosyncratic — flag, don't silently normalize.
- Emit only text you generated; never retype binary or high-entropy content (§3 Media).
- Say what you could not verify, and which repairs (§6) rest on judgment rather than the file.

## 6. Damaged exports — decks that came out of a design tool

Design-tool PPTX exports are structurally simple (everything direct-formatted, no real placeholders) but lose attributes the design depends on. The taxonomy, with repairs:

| Damage | Symptom in the XML | Repair |
|---|---|---|
| **Font weights flattened** | one typeface string everywhere, zero `b="1"` | Repair by **role from a trusted reference** (an earlier verified deck, a brand skill, or the design file itself) — never by a size heuristic; size bands assign the same weight to roles that genuinely differ. Flag every repaired weight as an assumption. |
| **Paragraph spacing dropped** | no `spcBef`/`spcAft` anywhere | Fingerprint: a text box much taller than line-count × line-pitch — the residual *is* the lost spacing. Divide it across the intended groups; confirm the exact value against the reference. |
| **Phantom shapes** | full-width rects carrying only a stroke, or stray boxes with no design purpose | Invisible layout containers materialized by the exporter. Remove, and record which shapes you dropped. |
| **Charts rasterized to image tiles** | dozens of `p:pic` from a small set of media files | Carry the tiles through the asset flow for fidelity; mark the slide for a native rebuild (real divs/SVG) as a follow-up. |
| **Oversized text boxes** | a right- or center-aligned box extending past its visual alignment target | Clamp the box to the target the text aligns to (a rule's end, a column edge); the exporter widened the box, moving the aligned edge. |
| **Misoriented tick/line shapes** | short `line` geometries whose extents contradict the design (horizontal slivers where the design shows vertical ticks) | Orient from design intent (a tick at a rule's end is perpendicular to the rule), not from the exported extent. |
| **Dead default theme** | stock Office theme + fully direct-formatted slides | Ignore the theme; the slides are self-describing. |

The better answer, when the design file itself is reachable: import from the design tool directly and use the PPTX only as a cross-check — an export of an export is never the source of truth.

## Appendix: PDF-pages fallback

When only a PDF of the deck exists, a faithful *non-editable* import is honest and quick: render each page to an image at 2×, upload via the asset flow, one frame per page with the image full-bleed. Label it as archival — text is not editable and the type system is not extracted. Do not reconstruct an "editable" deck from PDF geometry; that is inference, not decoding.

## Series

- [[word-to-publication]] — Word → publication (the method's origin; shares the file-acquisition, verification, and portability rules)
- **PowerPoint → presentation** (this skill)
- **Excel → dataset** — `xl/worksheets/*.xml` + `sharedStrings.xml` + number formats onto a CSV-bodied dataset with column formats (next in the series)
