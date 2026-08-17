---
entity_type: skill
entity_id: quadrant-diagram
created_at: '2026-08-16T15:36:09.123Z'
updated_at: '2026-08-17T01:37:14.313Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - diagram
  - template
  - quadrant
  - matrix
  - prioritization
name: Quadrant
description: >-
  2×2 matrix template — an ink axis cross with labeled dot items positioned by
  two dimensions, one coral focal item. Use for prioritization (impact ×
  effort), positioning maps, and portfolio views.
applies_to:
  - diagram
  - artboard
  - presentation
  - document
license: MIT
source: 'github.com/cathrynlavery/diagram-design (MIT License) — type: quadrant'
loading: on-demand
status: draft
---
# Quadrant

A 2×2 matrix on a paper canvas: a thin ink axis cross divides the plane, quadrant names sit in the four corners as small mono tags, and each item is a labeled dot positioned by its two dimensions. Exactly one item — the thing to do next — gets the coral accent. Position is the signal; color is reserved for the single call to action.

## When to use

Reach for Quadrant when two independent dimensions genuinely sort the items: prioritization (impact × effort), positioning (reach × frequency), portfolio maps, risk × reward. The reader should be able to answer "which corner is this in, and what do we do about that corner" in seconds.

Avoid it when items have no second meaningful dimension (a ranked list is honest; a fake 2×2 isn't), when the position *inside* a cell carries no meaning (a four-cell table of named scenarios is a different diagram), or when you have more than ~12 items — cluster or split beyond that. The editorial rule holds here too: every dot earns its place, target a density around 4/10, and resist decorating — the axis cross plus positioned labels already do the work.

Conventions worth keeping from the source project:

- Axis lines: a 1px ink cross through the center; never place items on the lines (ambiguous quadrant).
- Axis labels sit at the line ends in mono caps — both dimensions must be named. Set them **larger and bolder than the item labels** (11px / weight 700 in ink, against 11px regular muted items): they are the frame of the chart, not more data. If the axis names read as quietly as the plotted points, the reader has to work out what the picture measures. Keep them ink or muted — never the accent, which is reserved for the single focal item.
- Quadrant corner tags (DO FIRST, QUICK WINS…) in mono caps; only the focal corner's tag may take the accent color.
- Items are `r=4` dots with the label 8–12px to the right; the one focal item is `r=6` coral. Don't let labels cross the axis lines.
- At most one very subtle tint (3% accent) behind the focal quadrant — never four filled quadrants in different colors.
- Legend strip below a hairline rule at the bottom, explaining the coral dot.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | axis cross, item dots |
| muted | #4f5d75 | item labels, axis + corner labels |
| accent | #eb6c36 | ONE focal item (+ its corner tag) |
| hairline | #d5d8e0 | legend rule |

Swap `accent` for your brand color — everything else stays neutral by design.

## Typography

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | JetBrains Mono | 11px, 500, uppercase, 0.18em | kicker above the headline |
| headline | Source Serif 4 | 34px, 400, −0.02em | page title |
| item label | DM Sans | 11px (600 on the focal item) | dot labels |
| corner tag | JetBrains Mono | 9px, uppercase, 0.18em | quadrant names |
| axis label | JetBrains Mono | 11px, 700, uppercase, 0.16em, ink | dimension names at line ends — must outrank item labels |

No external font fetches — Studiograph frames cannot load Google Fonts, so the stacks fall back to Georgia / system-ui / ui-monospace.

## Layout

Default canvas **1200×auto** (landscape). The frame holds an eyebrow, a serif headline, then a full-width inline SVG (viewBox 1000×500). The axis cross spans x 120–880 / y 80–420 with the intersection at (500, 250); dots snap to positions that keep their labels clear of the axis lines.

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
  <p class="dg-eyebrow">Quadrant · Diagram Templates</p>
  <h1 class="dg-title">Feature ideas · Impact × Effort</h1>
  <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img">
    <defs>
      <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="#f5f5f5"/>
    <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

    <!-- Subtle tint on the focal quadrant only -->
    <rect x="120" y="80" width="380" height="170" fill="rgba(235,108,54,0.03)"/>

    <!-- Axis cross -->
    <line x1="120" y1="250" x2="880" y2="250" stroke="rgba(45,49,66,0.45)" stroke-width="1"/>
    <line x1="500" y1="80" x2="500" y2="420" stroke="rgba(45,49,66,0.45)" stroke-width="1"/>

    <!-- Axis end labels -->
    <text x="880" y="270" fill="#2d3142" font-size="11" font-weight="700" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="end" letter-spacing="0.16em">HIGH EFFORT →</text>
    <text x="120" y="270" fill="#2d3142" font-size="11" font-weight="700" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.16em">← LOW EFFORT</text>
    <text x="512" y="78" fill="#2d3142" font-size="11" font-weight="700" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.16em">↑ HIGH IMPACT</text>
    <text x="512" y="436" fill="#2d3142" font-size="11" font-weight="700" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.16em">↓ LOW IMPACT</text>

    <!-- Quadrant corner labels -->
    <text x="140" y="104" fill="#eb6c36" font-size="9" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.18em" font-weight="600">DO FIRST</text>
    <text x="860" y="104" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="end" letter-spacing="0.18em">MAJOR PROJECTS</text>
    <text x="140" y="412" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.18em">QUICK WINS</text>
    <text x="860" y="412" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="end" letter-spacing="0.18em">AVOID</text>

    <!-- Items (focal first) -->
    <circle cx="220" cy="140" r="6" fill="#eb6c36"/>
    <text x="232" y="144" fill="#2d3142" font-size="11" font-weight="600" font-family="'DM Sans',system-ui,sans-serif">Onboarding revamp</text>
    <circle cx="320" cy="200" r="4" fill="#2d3142"/>
    <text x="332" y="204" fill="#4f5d75" font-size="11" font-family="'DM Sans',system-ui,sans-serif">Improve search</text>
    <circle cx="620" cy="140" r="4" fill="#2d3142"/>
    <text x="632" y="144" fill="#4f5d75" font-size="11" font-family="'DM Sans',system-ui,sans-serif">Mobile app</text>
    <circle cx="760" cy="180" r="4" fill="#2d3142"/>
    <text x="772" y="184" fill="#4f5d75" font-size="11" font-family="'DM Sans',system-ui,sans-serif">Enterprise SSO</text>
    <circle cx="260" cy="320" r="4" fill="#2d3142"/>
    <text x="272" y="324" fill="#4f5d75" font-size="11" font-family="'DM Sans',system-ui,sans-serif">Fix broken links</text>
    <circle cx="360" cy="380" r="4" fill="#2d3142"/>
    <text x="372" y="384" fill="#4f5d75" font-size="11" font-family="'DM Sans',system-ui,sans-serif">Dark mode</text>
    <circle cx="640" cy="380" r="4" fill="#2d3142"/>
    <text x="652" y="384" fill="#4f5d75" font-size="11" font-family="'DM Sans',system-ui,sans-serif">Custom analytics engine</text>
    <circle cx="780" cy="320" r="4" fill="#2d3142"/>
    <text x="792" y="324" fill="#4f5d75" font-size="11" font-family="'DM Sans',system-ui,sans-serif">Full rewrite</text>

    <!-- Legend -->
    <line x1="40" y1="456" x2="960" y2="456" stroke="#d5d8e0" stroke-width="0.8"/>
    <text x="40" y="472" fill="#4f5d75" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" letter-spacing="0.18em">LEGEND</text>
    <circle cx="52" cy="488" r="6" fill="#eb6c36"/>
    <text x="68" y="492" fill="#4f5d75" font-size="8.5" font-family="'DM Sans',system-ui,sans-serif">Start next sprint</text>
    <circle cx="192" cy="488" r="4" fill="#2d3142"/>
    <text x="208" y="492" fill="#4f5d75" font-size="8.5" font-family="'DM Sans',system-ui,sans-serif">Candidate feature</text>
    <text x="336" y="492" fill="#4f5d75" font-size="8.5" font-family="'DM Sans',system-ui,sans-serif" font-style="italic">Position is the signal. Colour is reserved for the single next action.</text>
  </svg>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry, one frame at **1200×auto**, background `#f5f5f5`, with the `<style>` block in `shared.head` and the eyebrow + headline + SVG markup as the frame content. To reposition items, only the `circle` center and its label's x/y move — keep the label 12px right of the dot center and check no label crosses the axis cross. Keep the item count under ~12.

## Source & license

Adapted from the **quadrant** diagram type in [Diagram Design](https://github.com/cathrynlavery/diagram-design) by Cathryn Lavery, an MIT-licensed skill for editorial technical diagrams. License verified directly against the repository's `LICENSE` file (standard MIT text, copyright © 2025 Cathryn Lavery) on 2026-08-16. The type's layout conventions (axis cross, corner tags, dot items, single focal accent, legend strip) are ported; the HTML/CSS above is re-authored for Studiograph artboards with Studiograph-safe font stacks — no Google Fonts fetches.
