---
entity_type: skill
entity_id: layer-stack-diagram
created_at: '2026-08-16T15:43:25.440Z'
updated_at: '2026-08-17T01:37:22.734Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - diagram
  - template
  - layers
  - stack
  - hierarchy
name: Layer Stack
description: >-
  Stacked horizontal bands template — 4–6 full-width layers with index tags,
  names, and right-aligned notes, one coral focal layer. Use for tech stacks,
  abstraction hierarchies, and anything genuinely layered.
applies_to:
  - diagram
  - artboard
  - presentation
  - document
license: MIT
source: 'github.com/cathrynlavery/diagram-design (MIT License) — type: layers'
loading: on-demand
status: draft
---
# Layer Stack

Horizontal bands stacked vertically: each layer is a full-width rectangle carrying a small mono index tag on the left, the layer name, and a right-aligned mono note. A slim direction indicator in the left margin tells the reader which way the hierarchy runs, and exactly one layer — the one under discussion — gets the coral tint and stroke. No arrows: the stacking itself is the relationship.

## When to use

Reach for Layer Stack when the content is genuinely hierarchical bands: a tech or tooling stack, abstraction layers (UI → logic → data → infra), the OSI model, a memory hierarchy, a context/prompt hierarchy. It answers "what sits on what" — and the focal accent answers "which layer we're talking about."

Avoid it when the parts aren't actually stacked — components that call each other sideways belong in an Architecture diagram, and parallel tracks belong in a swimlane. Don't force order onto peers. Keep 4–6 layers; the editorial rule applies here as much as anywhere: every layer earns its place, the layout already implies the relationships so no connector lines are needed, and if you're past 6–7 bands it's two diagrams (or a table), not a taller stack. Target density around 4/10.

Conventions worth keeping from the source project:

- Every layer same x, same width, same height (56–72px) — inconsistent heights need a reason.
- Row anatomy, left→right: index tag (`L3`) in mono, layer name in sans 600, sublabel note right-aligned in mono.
- Number continuously — a skipped index (`L3` then `L5`) reads as a missing layer.
- Fills: alternating subtle neutrals (white / paper / #ececec) or all-paper with hairline dividers. Pick one scheme and hold it — every layer a different color makes the hierarchy invisible.
- 1px hairline between layers; a hairline also caps the top and bottom of the stack.
- Direction indicator lives in the LEFT margin, outside the stack: a thin vertical line with an arrowhead and two mono labels naming what grows in each direction. The indicator must span **exactly** the stack's height — arrowhead tip flush with the top cap, line foot flush with the bottom cap, never overshooting either. Centre both margin labels on the axis (`text-anchor="middle"` at the axis x), not left-aligned from an arbitrary x; and give them equal optical clearance above and below the stack.
- Coral on ONE focal layer only: tint fill + coral stroke + coral tag/note. An optional caption line below the stack says why that layer matters.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas + one of the band fills |
| ink | #2d3142 | layer names |
| muted | #4f5d75 | tags, notes, direction labels |
| accent | #eb6c36 | ONE focal layer (tint + stroke + tag) |
| hairline | #d5d8e0 | layer dividers, stack caps |

Band fills alternate between #ffffff, #f5f5f5, and #ececec. Swap `accent` for your brand color — everything else stays neutral by design.

## Typography

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | JetBrains Mono | 11px, 500, uppercase, 0.18em | kicker above the headline |
| headline | Source Serif 4 | 34px, 400, −0.02em | page title |
| layer name | DM Sans | 16px, 600 | band titles |
| index tag | JetBrains Mono | 8px, uppercase, 0.14em | L1…L5 markers |
| note / direction | JetBrains Mono | 8–10px | right-aligned sublabels, margin labels |

No external font fetches — Studiograph frames cannot load Google Fonts, so the stacks fall back to Georgia / system-ui / ui-monospace.

## Layout

Default canvas **1200×auto** (landscape). The frame holds an eyebrow, a serif headline, then a full-width inline SVG (viewBox 1000×500). The stack spans x 120–960 with 64px bands; the direction column sits at x≈80 in the left margin.

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
  <p class="dg-eyebrow">Layer Stack · Diagram Templates</p>
  <h1 class="dg-title">The company tooling stack</h1>
  <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img">
    <defs>
      <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="#f5f5f5"/>
    <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

    <!-- Direction column (left margin) -->
    <!-- labels centred on the axis; arrow spans exactly y 80→400 (the stack) -->
    <text x="81" y="68" fill="#4f5d75" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.18em" text-anchor="middle">DAY-TO-DAY</text>
    <line x1="80" y1="88" x2="80" y2="400" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
    <polygon points="76,89 84,89 80,80" fill="#4f5d75"/>
    <text x="81" y="418" fill="#4f5d75" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.18em" text-anchor="middle">FOUNDATION</text>

    <!-- Stack caps -->
    <line x1="120" y1="80" x2="960" y2="80" stroke="#d5d8e0" stroke-width="1"/>
    <line x1="120" y1="400" x2="960" y2="400" stroke="#d5d8e0" stroke-width="1"/>

    <!-- L5 — Communication -->
    <rect x="120" y="80" width="840" height="64" fill="#ffffff"/>
    <line x1="120" y1="144" x2="960" y2="144" stroke="#d5d8e0" stroke-width="1"/>
    <text x="140" y="116" fill="#4f5d75" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.14em">L5</text>
    <text x="260" y="118" fill="#2d3142" font-size="16" font-weight="600" font-family="'DM Sans',system-ui,sans-serif">Communication</text>
    <text x="940" y="118" fill="#4f5d75" font-size="10" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="end" letter-spacing="0.08em">chat, email, video</text>

    <!-- L4 — Work management (FOCAL) -->
    <rect x="120" y="144" width="840" height="64" fill="rgba(235,108,54,0.08)"/>
    <rect x="120" y="144" width="840" height="64" fill="none" stroke="#eb6c36" stroke-width="1"/>
    <text x="140" y="180" fill="#eb6c36" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.14em" font-weight="600">L4</text>
    <text x="260" y="182" fill="#2d3142" font-size="16" font-weight="600" font-family="'DM Sans',system-ui,sans-serif">Work management</text>
    <text x="940" y="182" fill="#eb6c36" font-size="10" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="end" letter-spacing="0.08em">projects, tasks, docs</text>

    <!-- L3 — Creative tools -->
    <rect x="120" y="208" width="840" height="64" fill="#f5f5f5"/>
    <line x1="120" y1="272" x2="960" y2="272" stroke="#d5d8e0" stroke-width="1"/>
    <text x="140" y="244" fill="#4f5d75" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.14em">L3</text>
    <text x="260" y="246" fill="#2d3142" font-size="16" font-weight="600" font-family="'DM Sans',system-ui,sans-serif">Creative tools</text>
    <text x="940" y="246" fill="#4f5d75" font-size="10" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="end" letter-spacing="0.08em">design, docs, decks</text>

    <!-- L2 — Data & analytics -->
    <rect x="120" y="272" width="840" height="64" fill="#ececec"/>
    <line x1="120" y1="336" x2="960" y2="336" stroke="#d5d8e0" stroke-width="1"/>
    <text x="140" y="308" fill="#4f5d75" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.14em">L2</text>
    <text x="260" y="310" fill="#2d3142" font-size="16" font-weight="600" font-family="'DM Sans',system-ui,sans-serif">Data &amp; analytics</text>
    <text x="940" y="310" fill="#4f5d75" font-size="10" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="end" letter-spacing="0.08em">warehouse, dashboards</text>

    <!-- L1 — Infrastructure -->
    <rect x="120" y="336" width="840" height="64" fill="#ececec"/>
    <text x="140" y="372" fill="#4f5d75" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.14em">L1</text>
    <text x="260" y="374" fill="#2d3142" font-size="16" font-weight="600" font-family="'DM Sans',system-ui,sans-serif">Infrastructure</text>
    <text x="940" y="374" fill="#4f5d75" font-size="10" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="end" letter-spacing="0.08em">hosting, identity, backups</text>

    <!-- Caption -->
    <text x="120" y="456" fill="#4f5d75" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.18em">FOCAL LAYER</text>
    <text x="240" y="456" fill="#4f5d75" font-size="8.5" font-family="'DM Sans',system-ui,sans-serif" font-style="italic">Work management is the hub — every project, task, and document flows through it before it ships.</text>
  </svg>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry, one frame at **1200×auto**, background `#f5f5f5`, with the `<style>` block in `shared.head` and the eyebrow + headline + SVG markup as the frame content. Bands are 64px tall starting at y=80; to add or remove a layer, shift every subsequent band by ±64 and move the bottom cap, direction column end, and caption to match. Keep index tags renumbered top-to-bottom with no gaps.

## Source & license

Adapted from the **layers** diagram type in [Diagram Design](https://github.com/cathrynlavery/diagram-design) by Cathryn Lavery, an MIT-licensed skill for editorial technical diagrams. License verified directly against the repository's `LICENSE` file (standard MIT text, copyright © 2025 Cathryn Lavery) on 2026-08-16. The type's layout conventions (full-width bands, index/name/note row anatomy, margin direction indicator, single focal layer) are ported; the HTML/CSS above is re-authored for Studiograph artboards with Studiograph-safe font stacks — no Google Fonts fetches.
