---
entity_type: skill
entity_id: architecture-diagram
created_at: '2026-08-16T15:33:50.270Z'
updated_at: '2026-08-17T01:37:57.196Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - diagram
  - template
  - architecture
  - system
  - data-flow
name: Architecture
description: >-
  Boxes-and-arrows system diagram — labeled component nodes, orthogonal
  connectors, and optional zone groupings on a calm paper canvas. Use for system
  overviews, data-flow maps, integration topology, and infra diagrams.
applies_to:
  - diagram
  - artboard
  - presentation
  - document
license: MIT
source: 'github.com/cathrynlavery/diagram-design (MIT License) — type: architecture'
loading: on-demand
status: draft
---
# Architecture

A boxes-and-arrows system diagram in an editorial register: components are calm rounded rectangles with a small mono eyebrow tag, a name, and a one-line sublabel; connections are thin orthogonal arrows; related components sit inside a barely-there zone rectangle. One coral focal node tells the reader where to look first. Built as inline SVG on a paper canvas with a serif headline above.

## When to use

Reach for Architecture when the content is a *system*: how requests flow through services, how tools integrate, where data lives, what talks to what. It works for infra topology, data-flow overviews, and integration maps — anywhere the reader needs "what are the parts and how do they connect" at a glance.

Avoid it when the parts are strictly hierarchical bands (use Layer Stack), when the point is a 2×2 judgment (use Quadrant), or when you're mapping conceptual overlap (use Venn). Also avoid it as a dumping ground: every node must earn its place, and arrows the layout already implies (adjacent boxes in a left-to-right flow) can often be a single line, not three. Target a visual density of about 4/10 — above roughly 9 nodes, split it into two diagrams rather than shrinking the type.

Conventions worth keeping from the source project:

- Primary flow runs left→right (or top→down) — pick one direction and hold it.
- Draw arrows **before** boxes so connections sit behind components (z-order: background → zones → arrows → nodes).
- 1–2 coral focal elements maximum: the key node, or the key node plus the primary flow arrow. Every box in coral means no box is important.
- Non-horizontal/vertical connections use rounded right-angle (orthogonal) elbows — never diagonal lines. Mainly-vertical paths should enter a node's top or bottom edge, not puncture its side.
- Dashed + lighter stroke = return/async/passive flow; same routing rules as solid.
- Zone rectangles (max 3) group nodes by tier or trust boundary; the zone label sits in a paper-colored mask over the top edge, with ≥16px clearance above the first enclosed node.
- Keep the legend below a hairline rule at the bottom, never floating inside the diagram.
- **Centre the ink, not the viewBox.** A viewBox is only a window — content drawn at x=40–780 inside a 1000-wide box reads as shoved left and low even though the box itself is perfectly centred. When a diagram "looks off-centre" this is almost always why, so check the drawn bounding box rather than trusting the viewBox.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas + label masks over lines |
| ink | #2d3142 | names, strongest node strokes |
| muted | #4f5d75 | sublabels, default arrows, soft strokes |
| accent | #eb6c36 | the 1–2 focal elements ONLY |
| hairline | #d5d8e0 | legend rule, zone strokes, dividers |

Swap `accent` for your brand color — everything else stays neutral by design.

## Typography

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | JetBrains Mono | 11px, 500, uppercase, 0.18em | kicker above the headline |
| headline | Source Serif 4 | 34px, 400, −0.02em | page title |
| node name | DM Sans | 12px, 600 | component name |
| sublabel | JetBrains Mono | 9px | detail line under the name |
| tag / arrow label | JetBrains Mono | 7–8px, uppercase, 0.08–0.14em | corner tags, edge labels, zone labels |

No external font fetches — Studiograph frames cannot load Google Fonts, so the stacks fall back to Georgia / system-ui / ui-monospace.

## Layout

Default canvas **1200×auto** (landscape). The frame holds an eyebrow, a serif headline, then a full-width inline SVG (viewBox around 1000×300–480). Arrow labels sit on paper-colored mask rectangles so they never collide with the line they annotate.

**Centring pass — run this after every layout change.** Take the bounding box of everything actually drawn: nodes, zone rectangles, connector paths and their label chips. Exclude the two full-bleed background rects (they always report as the whole viewBox and will mask the problem) and exclude the legend strip (it is page furniture and spans full width by design). Then either fit the viewBox to that box with equal margins, or leave the viewBox and wrap the diagram in a single group:

```html
<g transform="translate(dx,dy)"> … nodes, zones, connectors … </g>
```

with `dx = (W − (x_min + x_max)) / 2` and `dy = (H_band − (y_min + y_max)) / 2`, where `W` is the viewBox width and `H_band` is measured to the **legend rule**, not the bottom of the viewBox. Getting `H_band` wrong is the usual reason a diagram that is horizontally centred still sits visibly low. Nest the group tightly — a background rect swept inside it will shift and expose bare canvas at the edge.

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

Note the viewBox. The drawn ink here runs x 40→624 and y 80→264, so the box is **fitted to the ink** — 664×344, giving equal 40px side and 80px top/bottom margins. Left at a rounder `0 0 1000 300` the identical markup would strand 376px of empty canvas down the right-hand side.

```html
<div class="dg">
  <p class="dg-eyebrow">Architecture · Diagram Templates</p>
  <h1 class="dg-title">Order flow, end to end</h1>
  <svg viewBox="0 0 664 344" xmlns="http://www.w3.org/2000/svg" role="img">
    <defs>
      <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
      </pattern>
      <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
      <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
    </defs>
    <rect width="100%" height="100%" fill="#f5f5f5"/>
    <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

    <!-- Arrows first (behind boxes) -->
    <line x1="168" y1="112" x2="240" y2="112" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#arrow-accent)"/>
    <line x1="400" y1="112" x2="480" y2="112" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
    <path d="M 400,128 H 544 Q 552,128 552,136 V 200" fill="none" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>

    <!-- Arrow labels on paper masks -->
    <rect x="176" y="92" width="48" height="12" rx="2" fill="#f5f5f5"/>
    <text x="200" y="102" fill="#eb6c36" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle" letter-spacing="0.08em">HTTPS</text>
    <rect x="408" y="92" width="48" height="12" rx="2" fill="#f5f5f5"/>
    <text x="432" y="102" fill="#4f5d75" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle" letter-spacing="0.08em">QUERY</text>
    <rect x="500" y="134" width="40" height="12" rx="2" fill="#f5f5f5"/>
    <text x="520" y="143" fill="#4f5d75" font-size="8" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle" letter-spacing="0.08em">SEND</text>

    <!-- Node: Visitor (external) -->
    <rect x="40" y="80" width="128" height="64" rx="6" fill="rgba(79,93,117,0.10)" stroke="#7a8399" stroke-width="1"/>
    <rect x="48" y="88" width="28" height="12" rx="2" fill="transparent" stroke="rgba(122,131,153,0.40)" stroke-width="0.8"/>
    <text x="62" y="97" fill="#7a8399" font-size="7" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle" letter-spacing="0.08em">EXT</text>
    <text x="104" y="116" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',system-ui,sans-serif" text-anchor="middle">Visitor</text>
    <text x="104" y="132" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle">Browser</text>

    <!-- Node: API Server (focal) -->
    <rect x="240" y="80" width="160" height="64" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
    <rect x="248" y="88" width="32" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" stroke-width="0.8"/>
    <text x="264" y="97" fill="#eb6c36" font-size="7" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle" letter-spacing="0.08em">API</text>
    <text x="320" y="116" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',system-ui,sans-serif" text-anchor="middle">API Server</text>
    <text x="320" y="132" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle">app logic</text>

    <!-- Node: Database -->
    <rect x="480" y="80" width="144" height="64" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
    <rect x="488" y="88" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
    <text x="502" y="97" fill="#2d3142" font-size="7" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle" letter-spacing="0.08em">DB</text>
    <text x="552" y="116" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',system-ui,sans-serif" text-anchor="middle">Database</text>
    <text x="552" y="132" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle">orders · accounts</text>

    <!-- Node: Email Service -->
    <rect x="480" y="200" width="144" height="64" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
    <rect x="488" y="208" width="32" height="12" rx="2" fill="transparent" stroke="rgba(79,93,117,0.50)" stroke-width="0.8"/>
    <text x="504" y="217" fill="#4f5d75" font-size="7" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle" letter-spacing="0.08em">MAIL</text>
    <text x="552" y="236" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',system-ui,sans-serif" text-anchor="middle">Email Service</text>
    <text x="552" y="252" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',ui-monospace,monospace" text-anchor="middle">receipts · alerts</text>
  </svg>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry, one frame at **1200×auto**, background `#f5f5f5`, with the `<style>` block in `shared.head` and the eyebrow + headline + SVG markup as the frame content. Keep node widths on an 8px-ish rhythm, leave 52–80px of clear run for each arrow, and remember the z-order: zones, then arrows, then label masks, then nodes. Add a legend strip below a hairline rule when the diagram uses more than two node treatments.

## Source & license

Adapted from the **architecture** diagram type in [Diagram Design](https://github.com/cathrynlavery/diagram-design) by Cathryn Lavery, an MIT-licensed skill for editorial technical diagrams. License verified directly against the repository's `LICENSE` file (standard MIT text, copyright © 2025 Cathryn Lavery) on 2026-08-16. The type's layout conventions (orthogonal connectors, zone grouping, focal-accent rule, legend strip) are ported; the HTML/CSS above is re-authored for Studiograph artboards with Studiograph-safe font stacks — no Google Fonts fetches.
