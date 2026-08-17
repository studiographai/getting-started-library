---
entity_type: skill
entity_id: flowchart-diagram
created_at: '2026-08-16T15:32:19.014Z'
updated_at: '2026-08-17T01:39:12.289Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - diagram
  - template
  - flowchart
  - decision
  - logic
name: Flowchart
description: >-
  Decision-logic diagram — ovals for start/end, rectangles for steps, diamonds
  for branching questions with labeled yes/no exits. Use when the reader must
  answer "what should I do?" by following a branch.
applies_to:
  - diagram
  - artboard
  - presentation
  - document
license: MIT
source: 'github.com/cathrynlavery/diagram-design (MIT License) — type: flowchart'
loading: on-demand
status: draft
---
# Flowchart

A top-down decision diagram built from three shapes: ovals for start and end states, rectangles for steps, diamonds for decisions. Shape carries type — never fill color. Arrows are drawn first (behind nodes), every decision branch is labeled, and a single coral accent marks the happy path or the one decision that matters most.

## When to use

Reach for Flowchart when the content is decision logic: "Should we…?" questions, triage trees, onboarding routing, approval flows — anything where the reader follows branches to an answer.

Avoid it when there are no real decisions — a straight sequence of steps with no branching is a Process diagram, not a flowchart. Avoid it too when a decision would need four or more exits; refactor into nested diamonds instead. Every node must earn its place: remove arrows the layout already implies, keep density around 4/10 (generous whitespace, few strokes), and above ~9 nodes split into two diagrams rather than shrinking one.

Conventions worth keeping: flow runs top→down; from a diamond, No exits right and Yes continues down (but label every branch regardless); if two arrows must cross, arc-jump one so the crossing reads; use coral on the happy path *or* the single most consequential decision — never on every branch.

**Offset the spine — don't centre it.** Because every No exits right, a flowchart's drawn width is roughly twice its spine width, all of it on one side. Centring the spine on the canvas therefore pushes the *composition* right and strands the entire left half as dead space. Place the spine so that spine and branch column together straddle the middle: with leftmost ink `L` (a diamond's left point) and rightmost ink `R` (a branch node's right edge), solve for `spine_cx` such that `(L + R) / 2 == viewBox_width / 2`. In practice the spine ends up around 20–25% in from the left, not at 50%.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | node strokes, primary text |
| muted | #4f5d75 | arrows, branch labels, secondary text |
| accent | #eb6c36 | happy path / focal node — 1–2 elements ONLY |
| hairline | #d5d8e0 | legend divider, rules |

## Typography

No external fonts — Studiograph frames cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | kicker above headline |
| headline | 'Source Serif 4', Georgia, serif | 32px, 400 | title above the diagram |
| node label | 'DM Sans', system-ui, sans-serif | 12px, 600 | primary node text |
| node sub | 'JetBrains Mono', ui-monospace, monospace | 9px | secondary line inside end nodes |
| branch label | 'JetBrains Mono', ui-monospace, monospace | 8px, 0.12em caps | YES / NO on arrows |

## Layout

Default canvas **1200 × auto**. The diagram is one inline SVG (viewBox ~1000×560 for a two-decision flow) below an eyebrow + serif headline. Node grammar: oval = `rect` with `rx` = half its height; step = `rect rx=6`; decision = `polygon` diamond ~210×84. Arrows are 1.2px muted lines with a small triangle marker; branch labels sit on a tiny paper-colored chip so they never collide with the line.

**Fit the surface to the flow.** The frame is `height: "auto"`, so the viewBox is what actually sets the frame's proportions — size it to the diagram instead of reaching for a round number. Set `viewBox_height = ink_height + 2×margin + legend_band` (the legend band is ~60: rule, eyebrow, swatch row), then verify the diagram's top and bottom margins against the **legend rule** and make them equal. A 1:1 composition dropped into a 1000×600 box is the classic failure — it cannot grow vertically, so the extra width just becomes dead gutter. The cure is horizontal: widen the spine nodes, lengthen the branch runs, and push the branch column out toward the right margin until the ink spans roughly 80% of the viewBox width. Only then trim the height.

Keep the vertical rhythm uniform: a constant gap between consecutive spine shapes (26 works at this scale), widened to ~34 where a YES chip has to sit on the connector so the line is not chopped into two stubs.

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
  letter-spacing:-.02em;line-height:1.15;margin-bottom:24px;}
.dg svg{width:100%;display:block;}
</style>
```

### Example

```html
<div class="dg">
  <p class="dg-eyebrow">Flowchart · Diagram Templates</p>
  <h1 class="dg-title">Should we build this feature?</h1>
  <svg viewBox="0 0 1000 392" xmlns="http://www.w3.org/2000/svg" role="img">
    <defs>
      <marker id="fa" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#4f5d75"/></marker>
      <marker id="fa-acc" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#eb6c36"/></marker>
    </defs>
    <rect width="100%" height="100%" fill="#f5f5f5"/>
    <!-- arrows first, behind nodes. Spine sits at x=360, NOT 500: with the No
         branch running out to x=740, spine+branch together straddle the middle. -->
    <line x1="360" y1="72" x2="360" y2="104" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#fa)"/>
    <line x1="360" y1="152" x2="360" y2="176" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#fa)"/>
    <line x1="460" y1="224" x2="580" y2="224" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#fa)"/>
    <line x1="360" y1="272" x2="360" y2="312" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#fa-acc)"/>
    <!-- branch labels on paper chips -->
    <rect x="504" y="214" width="24" height="12" rx="2" fill="#f5f5f5"/>
    <text x="516" y="223" fill="#4f5d75" font-size="8" font-family="'JetBrains Mono',monospace" text-anchor="middle" letter-spacing="0.12em">NO</text>
    <rect x="344" y="282" width="32" height="12" rx="2" fill="#f5f5f5"/>
    <text x="360" y="291" fill="#eb6c36" font-size="8" font-family="'JetBrains Mono',monospace" text-anchor="middle" letter-spacing="0.12em">YES</text>
    <!-- start oval -->
    <rect x="280" y="24" width="160" height="48" rx="24" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)"/>
    <text x="360" y="52" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">Feature proposed</text>
    <!-- step -->
    <rect x="280" y="104" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142"/>
    <text x="360" y="132" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">Write the one-pager</text>
    <!-- decision diamond -->
    <polygon points="360,176 460,224 360,272 260,224" fill="#ffffff" stroke="#2d3142"/>
    <text x="360" y="222" fill="#2d3142" font-size="11" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">Worth building</text>
    <text x="360" y="236" fill="#2d3142" font-size="11" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">this quarter?</text>
    <!-- end ovals -->
    <rect x="580" y="200" width="160" height="48" rx="24" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)"/>
    <text x="660" y="228" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">Revisit next cycle</text>
    <rect x="280" y="312" width="160" height="56" rx="28" fill="rgba(235,108,54,0.08)" stroke="#eb6c36"/>
    <text x="360" y="340" fill="#2d3142" font-size="12" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">Build it</text>
    <text x="360" y="356" fill="#4f5d75" font-size="9" font-family="'JetBrains Mono',monospace" text-anchor="middle">scope + ship</text>
  </svg>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry: one frame, geometry width 1200 and height "auto", background `#f5f5f5`. Put the `<style>` block in `shared.head` and the `.dg` markup in the frame content. Add a second decision by repeating the diamond + branch-oval unit 118px lower (one diamond height plus one connector gap); keep a bottom legend strip (hairline rule + shape key) once the diagram has three or more node types. Each added decision grows the ink vertically, so re-derive the viewBox height and re-check that top and bottom margins still match before you call it done. See the working example artboard at `diagrams/examples/flowchart-diagram-preview`.

## Source & license

Adapted from the **flowchart** type in the [Diagram Design](https://github.com/cathrynlavery/diagram-design) project by Cathryn Lavery, released under the MIT License. License verified by reading the repository's `LICENSE` file (standard MIT text) on 2026-08-16. The shape grammar, layout conventions, and editorial philosophy (shape carries type, labeled branches, single accent, density budget) are ported; the HTML/CSS and example content were re-authored for Studiograph artboards, with the project's webfont links replaced by locally-safe font stacks.
