---
entity_type: skill
entity_id: venn-overlap-diagram
created_at: '2026-08-16T15:48:34.562Z'
updated_at: '2026-08-17T01:38:36.092Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - diagram
  - template
  - venn
  - overlap
  - sets
name: Venn
description: >-
  Set-overlap template — 2–3 hairline circles with compounding low-opacity tints
  and one emphasized intersection. Use for concept overlap, shared
  responsibilities, and "where A meets B" sweet-spot frames.
applies_to:
  - diagram
  - artboard
  - presentation
  - document
license: MIT
source: 'github.com/cathrynlavery/diagram-design (MIT License) — type: venn'
loading: on-demand
status: draft
---
# Venn

Two or three hairline-stroked circles whose very-low-opacity tints compound naturally where they overlap. Each set gets a name and a small mono sublabel inside its non-overlapping lobe; the one intersection that matters — the sweet spot — is isolated with chained SVG clip paths and filled solid ink so its white label carries the whole diagram's emphasis.

## When to use

Reach for Venn when the point *is* the overlap: intersecting concepts or domains, shared attributes between categories, overlapping team responsibilities, ikigai-style frames (desirable × feasible × viable). The reader should leave knowing what lives in the intersection and why it matters.

Avoid it with 4+ sets — a four-circle Venn is unreadable, use a matrix instead. Avoid it when the sets don't actually overlap (that's a grouping, not a Venn), and when the relationship is flow or hierarchy (Architecture or Layer Stack). Keep it spare: 2–3 circles, one emphasized intersection, and only the labels the regions need — density around 4/10, with every labeled region earning its place.

Conventions worth keeping from the source project:

- Circle stroke: 1px hairline, one color per set (ink, muted, soft `#7a8399`).
- Circle fill: very low opacity — `rgba(45,49,66,0.04)` / `rgba(79,93,117,0.05)` / `rgba(122,131,153,0.05)`. The compounding tints draw the overlap regions for free; never fill regions with flat opaque color.
- Radii equal when the sets are comparable; proportional when they're meaningfully different — don't fake equal sizes for aesthetics. Centers and radii on multiples of 4.
- Set labels live inside each circle's non-overlapping lobe (or fully outside), **never sitting on a circle stroke**. Sans 14px 600 name + mono 9px sublabel.
- Emphasize exactly ONE intersection: chain `clipPath`s (clip to set A, then set B, then fill via circle C) to isolate it, fill it solid ink, and label it in white. A coral tint (`rgba(235,108,54,0.10)`) is the lighter-touch alternative — either way, one region only.
- For a small overlap whose label won't fit, use a leader line to a label in clear space rather than shrinking the type.
- **Centre the focal label in the region, not on the region's bounding box.** A triple intersection is an apex-up curved triangle: it tapers to a point at the top and pinches to a point at the bottom, so the band where a two-line block actually fits is narrower than the shape looks. Place the block so its clearance to the boundary is even on all four sides — for r=140 circles at (500,180)/(428,320)/(572,320) that lands the name baseline near y=266 and the sublabel near y=281, not lower.
- **Size the focal label to the region.** Set it a notch smaller than the outer set names (12.5px name / 8px sublabel against 14px / 9px) and tighten the sublabel tracking to 0.10em. Solid dark fill plus white type already gives the region all the emphasis it needs; type that runs to within a few px of the tapering edges reads as crowded, not as important.
- **Balance the canvas around the circle group.** Size the viewBox so the whitespace above the topmost circle equals the whitespace below the lowest — three r=140 circles spanning y 40–460 want a 500-unit canvas, not 480.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | set A stroke, focal intersection fill |
| muted | #4f5d75 | set B stroke, sublabels |
| soft | #7a8399 | set C stroke |
| accent | #eb6c36 | optional focal tint (one region only) |
| hairline | #d5d8e0 | rules, if a legend strip is added |

Swap `accent` for your brand color — everything else stays neutral by design.

## Typography

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | JetBrains Mono | 11px, 500, uppercase, 0.18em | kicker above the headline |
| headline | Source Serif 4 | 34px, 400, −0.02em | page title |
| set name | DM Sans | 14px, 600 | one per circle |
| sublabel | JetBrains Mono | 9px, uppercase, 0.14em | one-line gloss under each name |
| focal label | DM Sans | 12.5px, 600, white | inside the solid intersection — a notch under the set names |
| focal sublabel | JetBrains Mono | 8px, uppercase, 0.10em, 75% paper | second line inside the intersection |

No external font fetches — Studiograph frames cannot load Google Fonts, so the stacks fall back to Georgia / system-ui / ui-monospace.

## Layout

Default canvas **1200×auto** (landscape). The frame holds an eyebrow, a serif headline, then a full-width inline SVG (viewBox 1000×500). Three equal circles of r=140 at (500,180), (428,320), (572,320) give a classic triple overlap with a generous center region and span y 40–460 — which is why the canvas is 500 tall, leaving 40 units of air above and below the group. Check every label against the circle boundaries — labels crossing strokes are the classic Venn failure.

### `<style>`

```html
<style>
:root{
  --dg-paper:#f5f5f5; --dg-ink:#2d3142; --dg-muted:#4f5d75;
  --dg-accent:#eb6c36; --dg-hair:#d5d8e0;
  --dg-serif:'Source Serif 4',Georgia,serif;
  --dg-sans:'DM Sans',system-ui,sans-serif;
  --dg-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.dg{width:1200px;background:var(--dg-paper);color:var(--dg-ink);
  font-family:var(--dg-sans);padding:56px 64px 64px;}
.dg-eyebrow{font-family:var(--dg-mono);font-size:11px;font-weight:500;
  letter-spacing:0.18em;text-transform:uppercase;color:var(--dg-muted);margin-bottom:10px;}
.dg-title{font-family:var(--dg-serif);font-size:34px;font-weight:400;
  letter-spacing:-0.02em;line-height:1.15;margin-bottom:28px;}
.dg svg{width:100%;display:block;}
</style>
```

### Example

```html
<div class="dg">
  <p class="dg-eyebrow">Venn · Diagram Templates</p>
  <h1 class="dg-title">One team · Product × Design × Engineering</h1>
  <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img">
    <defs>
      <!-- Chained clips isolate the all-three intersection: clip to set A, then set B, then fill via the third circle. -->
      <clipPath id="clip-eng"><circle cx="500" cy="180" r="140"/></clipPath>
      <clipPath id="clip-product"><circle cx="428" cy="320" r="140"/></clipPath>
    </defs>

    <rect width="100%" height="100%" fill="#f5f5f5"/>

    <!-- Three set circles (stroke + very-low-opacity tint; tints compound in overlaps) -->
    <circle cx="500" cy="180" r="140" fill="rgba(45,49,66,0.04)" stroke="#2d3142" stroke-width="1"/>
    <circle cx="428" cy="320" r="140" fill="rgba(79,93,117,0.05)" stroke="#4f5d75" stroke-width="1"/>
    <circle cx="572" cy="320" r="140" fill="rgba(122,131,153,0.05)" stroke="#7a8399" stroke-width="1"/>

    <!-- Focal: solid-ink triple intersection (dark fill for white text to read against) -->
    <g clip-path="url(#clip-eng)">
      <g clip-path="url(#clip-product)">
        <circle cx="572" cy="320" r="140" fill="#2d3142"/>
      </g>
    </g>

    <!-- Set labels — inside each circle's non-overlapping lobe, clear of every stroke -->
    <text x="500" y="96" fill="#2d3142" font-size="14" font-weight="600" font-family="'DM Sans',system-ui,sans-serif" text-anchor="middle">Engineering</text>
    <text x="500" y="112" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle" letter-spacing="0.14em">HOW IT WORKS</text>

    <text x="380" y="386" fill="#2d3142" font-size="14" font-weight="600" font-family="'DM Sans',system-ui,sans-serif" text-anchor="middle">Product</text>
    <text x="380" y="402" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle" letter-spacing="0.14em">WHAT WE BUILD</text>

    <text x="620" y="386" fill="#2d3142" font-size="14" font-weight="600" font-family="'DM Sans',system-ui,sans-serif" text-anchor="middle">Design</text>
    <text x="620" y="402" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle" letter-spacing="0.14em">HOW IT FEELS</text>

    <!-- Focal label: white text on the dark intersection, sized to the region and
         centred so the clearance to the tapering edges is even on all four sides -->
    <text x="500" y="266" fill="#ffffff" font-size="12.5" font-weight="600" font-family="'DM Sans',system-ui,sans-serif" text-anchor="middle">The product</text>
    <text x="500" y="281" fill="rgba(245,245,245,0.75)" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle" letter-spacing="0.10em">BUILT TOGETHER</text>
  </svg>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry, one frame at **1200×auto**, background `#f5f5f5`, with the `<style>` block in `shared.head` and the eyebrow + headline + SVG markup as the frame content. When renaming sets, re-check label widths against the circle boundaries — a long set name may need its anchor nudged toward the lobe's widest point, and the focal label must stay entirely inside the dark intersection. For a two-set Venn, drop the third circle and one clipPath; the emphasized region becomes the single A∩B lens.

## Source & license

Adapted from the **venn** diagram type in [Diagram Design](https://github.com/cathrynlavery/diagram-design) by Cathryn Lavery, an MIT-licensed skill for editorial technical diagrams. License verified directly against the repository's `LICENSE` file (standard MIT text, copyright © 2025 Cathryn Lavery) on 2026-08-16. The type's layout conventions (hairline circles, compounding tints, chained-clip focal intersection, lobe-interior labels) are ported; the HTML/CSS above is re-authored for Studiograph artboards with Studiograph-safe font stacks — no Google Fonts fetches.
