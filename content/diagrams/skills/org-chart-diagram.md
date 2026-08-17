---
entity_type: skill
entity_id: org-chart-diagram
created_at: '2026-08-16T15:36:23.815Z'
updated_at: '2026-08-17T01:38:03.076Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - diagram
  - template
  - org-chart
  - hierarchy
  - team
name: Org Chart
description: >-
  Ownership hierarchy — one leader or front door at top, aligned departments
  below, people under them, with open roles and gaps kept visible. Use when the
  reader's question is "who owns what?"
applies_to:
  - diagram
  - artboard
  - presentation
  - document
license: MIT
source: 'github.com/cathrynlavery/diagram-design (MIT License) — type: org-chart'
loading: on-demand
status: draft
---
# Org Chart

A responsibility map, not just a tree: the root owner (or "front door") sits top center with the single coral treatment, tier-1 departments align horizontally beneath it, and individual owners hang below those. Orthogonal connectors only — vertical drop from parent, horizontal bus, vertical drops to children. Horizontal band labels (LEADERSHIP / DEPARTMENTS / TEAM) name each tier, and gaps — open roles, unstaffed functions — stay visible as dashed nodes instead of being hidden.

## When to use

Reach for Org Chart when the nodes are people, teams, roles, or accountable owners and the reader needs to know *who owns what* — company teams, agent rosters, escalation maps, routing maps. Each node answers up to three questions: name (sans), how to reach/invoke them (mono sublabel — handle, queue, channel), and scope (2–4 terse words, never a paragraph).

Avoid it when the real question is "how does work flow?" — that's a Process diagram; an org chart explains ownership, not sequence. Avoid drawing every node as an identical box (it hides the front door, the specialists, and the gaps), and avoid cramming job descriptions into nodes — move detail to a footer strip or cards below the chart.

Complexity budget, straight from the source conventions: max 12 visible nodes (above ~9, prefer an overview chart plus per-team detail charts), max 4 tiers, max 5 direct reports per parent (group them if more), exactly 1 coral node, max 2 side callouts. Remove lines the layout already implies; keep density near 4/10.

Say each thing once. Two redundancies creep into org charts and both must go:

- **No role chips on nodes when tier bands are labelled.** A `CEO` chip on the top box and `DEPT` chips on the department boxes repeat what the LEADERSHIP / DEPARTMENTS band labels in the left margin already say — and they crowd the node, pushing the name and sublabel off-centre. Pick one carrier for the tier: the band label. Then vertically centre the name/sublabel pair in the box.
- **No legend when the tier bands and node treatments already read.** A swatch key for "leadership / department / team member / open role" restates the bands plus the dashed open-roles strip. Delete it, then pull the canvas height in so the chart doesn't sit above a block of dead space; give the diagram roughly equal breathing room above the first band label and below the last element.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | department strokes, names |
| muted | #4f5d75 | connectors, sublabels, band labels |
| accent | #eb6c36 | the root / front door node ONLY |
| hairline | #d5d8e0 | band dividers |

Node treatments: **root/front door** = accent tint fill + accent stroke; **department/pod** = white fill + ink stroke; **individual owner** = faint ink tint + muted stroke; **gap/open role** = dashed muted stroke on near-transparent fill.

## Typography

No external fonts — Studiograph frames cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | kicker above headline |
| headline | 'Source Serif 4', Georgia, serif | 32px, 400 | title above the diagram |
| band label | 'JetBrains Mono', ui-monospace, monospace | 9px, 0.16em caps | tier names in left margin |
| node name | 'DM Sans', system-ui, sans-serif | 12px, 600 | person / team name |
| node sub | 'JetBrains Mono', ui-monospace, monospace | 9px | scope · invocation path |

Name and sublabel are the only text inside a node — no corner role chip. In a 48px box put the name baseline at box-top + 23 and the sublabel at + 37; in a 56px box, + 28 and + 44. That centres the pair optically in the box.

## Layout

Default canvas **1200 × auto**. One inline SVG (viewBox ~1040×580 for three tiers plus an open-roles strip — size the height to the last element, not to a legend that isn't there). Root node 200×48, departments 160×48, individuals 136×56. Hairline horizontal rules separate the tiers; connectors are 1px muted paths with no arrowheads (hierarchy implies direction — an arrow here is a line the layout already implies).

### `<style>`

```html
<style>
:root{
  --dg-paper:#f5f5f5; --dg-ink:#2d3142; --dg-muted:#4f5d75;
  --dg-accent:#eb6c36; --dg-hairline:#d5d8e0;
  --dg-serif:'Source Serif 4',Georgia,serif;
  --dg-sans:'DM Sans',system-ui,sans-serif;
  --dg-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.dg{width:1200px;background:var(--dg-paper);color:var(--dg-ink);
  font-family:var(--dg-sans);padding:48px;}
.dg-eyebrow{font-family:var(--dg-mono);font-size:11px;font-weight:500;
  letter-spacing:.18em;text-transform:uppercase;color:var(--dg-muted);margin-bottom:8px;}
.dg-title{font-family:var(--dg-serif);font-size:32px;font-weight:400;
  letter-spacing:-.02em;line-height:1.15;margin-bottom:12px;}
.dg-subtitle{color:var(--dg-muted);font-size:14px;line-height:1.5;
  max-width:720px;margin-bottom:24px;}
.dg svg{width:100%;display:block;}
</style>
```

### Example

Root plus one aligned department row (viewBox 760×240):

```html
<div class="dg">
  <p class="dg-eyebrow">Org Chart · Diagram Templates</p>
  <h1 class="dg-title">Who owns what</h1>
  <svg viewBox="0 0 760 190" xmlns="http://www.w3.org/2000/svg" role="img">
    <rect width="760" height="190" fill="#f5f5f5"/>
    <!-- connectors: drop → bus → drops -->
    <path d="M 380 68 V 96 M 140 96 H 620 M 140 96 V 120 M 380 96 V 120 M 620 96 V 120" fill="none" stroke="#4f5d75" stroke-width="1"/>
    <!-- root (front door — the one accent node) -->
    <rect x="280" y="20" width="200" height="48" rx="6" fill="rgba(235,108,54,.08)" stroke="#eb6c36"/>
    <text x="380" y="42" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">Maya Chen</text>
    <text x="380" y="56" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',monospace" text-anchor="middle">CEO · direction · final calls</text>
    <!-- departments -->
    <rect x="60" y="120" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142"/>
    <text x="140" y="142" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">Design</text>
    <text x="140" y="156" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',monospace" text-anchor="middle">brand · product</text>
    <rect x="300" y="120" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142"/>
    <text x="380" y="142" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">Engineering</text>
    <text x="380" y="156" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',monospace" text-anchor="middle">web · platform</text>
    <!-- open role stays visible as a dashed gap node -->
    <rect x="540" y="120" width="160" height="48" rx="6" fill="rgba(45,49,66,.02)" stroke="#7a8399" stroke-dasharray="4,4"/>
    <text x="620" y="142" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">Growth</text>
    <text x="620" y="156" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',monospace" text-anchor="middle">hiring · open role</text>
    <!-- no legend: the tier bands and the dashed gap node already say this -->
  </svg>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry: one frame, geometry width 1200 and height "auto", background `#f5f5f5`. Put the `<style>` block in `shared.head` and the `.dg` markup in the frame content. Add a third tier by repeating the drop→bus→drops connector pattern 150px lower with 136×56 owner nodes; keep escalation/approval rules in a footer strip, not as extra org nodes. See the working example artboard at `diagrams/examples/org-chart-diagram-preview`.

## Source & license

Adapted from the **org-chart** type in the [Diagram Design](https://github.com/cathrynlavery/diagram-design) project by Cathryn Lavery, released under the MIT License. License verified by reading the repository's `LICENSE` file (standard MIT text) on 2026-08-16. The tiered layout, node treatments (front door / pod / owner / gap), complexity budget, and editorial rules are ported; the HTML/CSS and example content were re-authored for Studiograph artboards, with the project's webfont links replaced by locally-safe font stacks.
