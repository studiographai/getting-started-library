---
entity_type: skill
entity_id: process-diagram
created_at: '2026-08-16T15:34:00.613Z'
updated_at: '2026-08-16T15:34:00.613Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - diagram
  - template
  - process
  - swimlane
  - workflow
name: Process
description: >-
  Swimlane process map — numbered step columns crossing actor lanes, each node
  carrying owner badge, input→output, and tool. Use for cross-team workflows
  where who does what, in what order, with what data must be legible at a
  glance.
applies_to:
  - diagram
  - artboard
  - presentation
  - document
license: MIT
source: 'github.com/cathrynlavery/diagram-design (MIT License) — type: process'
loading: on-demand
status: draft
---
# Process

A swimlane process map: horizontal lanes for actors (teams, roles, systems), numbered step columns running left→right, and one 100×64 node per step showing who does it (role badge), what transforms (input → output), and which tool is used. Orthogonal connectors hand the work off between lanes; exactly one step and one node may be focal (coral).

## When to use

Reach for Process when a sequential workflow crosses multiple owners and the reader needs the handoffs — client onboarding, order fulfillment, content review, hiring pipelines. It answers "who does what, in what order, and what moves between them" in one glance.

Avoid it when there is only one actor (a plain step list or Timeline reads better), and when the flow is really decision logic — branches and yes/no exits belong in a Flowchart. If the data payloads and tools don't matter, drop the chips and sub-lines rather than filling them with noise: every element must earn its place. Keep density near 4/10 — max 6 lanes, max 12 steps, and above ~9 nodes prefer two diagrams (e.g. "onboarding" and "delivery") over one crowded one. Remove connectors the layout already implies: adjacent same-lane steps read left→right without an arrow if the corridor is unambiguous — but never drop a cross-lane handoff arrow.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | node titles, strokes |
| muted | #4f5d75 | lane labels, connectors, sub text |
| accent | #eb6c36 | ONE focal step chip + ONE focal node/handoff only |
| hairline | #d5d8e0 | lane dividers, legend rules |

Optional data-type chips use small desaturated color codes (e.g. slate `#5e7a9b` records, moss `#7c8f6f` task, clay `#9c6b50` document, ochre `#b8915a` transaction, plum `#6e6479` status) — always explained in the legend, never load-bearing on their own.

## Typography

No external fonts — Studiograph frames cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | kicker above headline |
| headline | 'Source Serif 4', Georgia, serif | 32px, 400 | title above the diagram |
| lane label | 'JetBrains Mono', ui-monospace, monospace | 8px, 500, 0.08em caps | actor names in left column |
| step label | 'JetBrains Mono', ui-monospace, monospace | 6px, 500, 0.12em caps | column headers (≤9 chars) |
| node title | 'DM Sans', system-ui, sans-serif | 9px, 600 | what happens in the step |
| node sub / tool | 'JetBrains Mono', ui-monospace, monospace | 6.5px | input → output · tool used |

## Layout

Default canvas **1200 × auto**. Deterministic geometry: label column 140px, each step slot 112px (100px node + 12px corridor), lane height 80px, node 100×64 centered in its lane. Numbered pill chips (16×16) head each column at y=8 with the uppercase label below. Connectors exit a node's right edge, bend with an 8px radius, and enter the next node's top or bottom edge — a `node-mask` paper rect under each node keeps lines from touching text.

### `<style>`

```html
<style>
:root{
  --dg-paper:#f5f5f5; --dg-ink:#2d3142; --dg-muted:#4f5d75;
  --dg-accent:#eb6c36; --dg-accent-tint:rgba(235,108,54,.08);
  --dg-hairline:#d5d8e0; --dg-lane:rgba(45,49,66,.018);
  --dg-chip:rgba(45,49,66,.12);
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
.dg svg text{font-family:var(--dg-sans);}
.dg .mono{font-family:var(--dg-mono);}
.dg .lane{fill:var(--dg-lane);}
.dg .actor{fill:var(--dg-muted);font:500 8px var(--dg-mono);letter-spacing:.08em;}
.dg .step-label{fill:var(--dg-muted);font:500 6px var(--dg-mono);letter-spacing:.12em;}
.dg .step-chip{fill:var(--dg-chip);}
.dg .step-num{fill:var(--dg-ink);font:600 7px var(--dg-mono);}
.dg .connector{fill:none;stroke:var(--dg-muted);stroke-width:1;}
.dg .connector.focal{stroke:var(--dg-accent);stroke-width:1.2;}
.dg .node-mask{fill:var(--dg-paper);}
.dg .node{fill:#fff;stroke:rgba(45,49,66,.25);}
.dg .node.focal{fill:var(--dg-accent-tint);stroke:var(--dg-accent);stroke-width:1.2;}
.dg .role{fill:rgba(45,49,66,.10);}
.dg .role.focal{fill:rgba(235,108,54,.25);}
.dg .role-text{fill:var(--dg-ink);font:600 6px var(--dg-mono);}
.dg .role-text.focal{fill:var(--dg-accent);}
.dg .node-title{fill:var(--dg-ink);font:600 9px var(--dg-sans);}
.dg .node-sub{fill:var(--dg-muted);font:6.5px var(--dg-mono);}
.dg .node-tool{fill:#7a8399;font:6.5px var(--dg-mono);}
</style>
```

### Example

A minimal two-lane, three-step slice (viewBox width = 140 + 3×112 + 28 = 504):

```html
<div class="dg">
  <p class="dg-eyebrow">Process · Diagram Templates</p>
  <h1 class="dg-title">Project kickoff in three steps</h1>
  <svg viewBox="0 0 504 232" xmlns="http://www.w3.org/2000/svg" role="img">
    <defs>
      <marker id="pa" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#4f5d75"/></marker>
    </defs>
    <rect width="504" height="232" fill="#f5f5f5"/>
    <rect class="lane" x="140" y="36" width="364" height="80"/>
    <g stroke="#d5d8e0" stroke-width=".8"><line x1="0" y1="36" x2="504" y2="36"/><line x1="0" y1="116" x2="504" y2="116"/><line x1="0" y1="196" x2="504" y2="196"/></g>
    <line x1="140" y1="36" x2="140" y2="196" stroke="rgba(45,49,66,.20)"/>
    <g class="actor" text-anchor="middle"><text x="70" y="80">CLIENT</text><text x="70" y="160">TEAM</text></g>
    <g text-anchor="middle">
      <rect class="step-chip" x="190" y="8" width="16" height="16" rx="8"/><text class="step-num" x="198" y="19">1</text><text class="step-label" x="198" y="32">BRIEF</text>
      <rect x="302" y="8" width="16" height="16" rx="8" fill="rgba(235,108,54,.20)"/><text x="310" y="19" fill="#eb6c36" font-size="7" font-weight="600" class="mono">2</text><text x="310" y="32" fill="#eb6c36" font-size="6" font-weight="500" letter-spacing=".12em" class="mono">PLAN</text>
      <rect class="step-chip" x="414" y="8" width="16" height="16" rx="8"/><text class="step-num" x="422" y="19">3</text><text class="step-label" x="422" y="32">APPROVE</text>
    </g>
    <path class="connector focal" d="M248 76 H302 Q310 76 310 84 V124" marker-end="url(#pa)"/>
    <path class="connector" d="M360 156 H414 Q422 156 422 148 V112" marker-end="url(#pa)"/>
    <g text-anchor="middle">
      <g><rect class="node-mask" x="148" y="44" width="100" height="64" rx="6"/><rect class="node" x="148" y="44" width="100" height="64" rx="6"/><rect class="role" x="152" y="48" width="20" height="10" rx="2"/><text class="role-text" x="162" y="56">CLI</text><text class="node-title" x="198" y="70">Share the brief</text><text class="node-sub" x="198" y="84">need → brief</text><text class="node-tool" x="198" y="96">intake form</text></g>
      <g><rect class="node-mask" x="260" y="124" width="100" height="64" rx="6"/><rect class="node focal" x="260" y="124" width="100" height="64" rx="6"/><rect class="role focal" x="264" y="128" width="20" height="10" rx="2"/><text class="role-text focal" x="274" y="136">TEM</text><text class="node-title" x="310" y="150">Build the plan</text><text class="node-sub" x="310" y="164">brief → plan</text><text class="node-tool" x="310" y="176">project tracker</text></g>
      <g><rect class="node-mask" x="372" y="44" width="100" height="64" rx="6"/><rect class="node" x="372" y="44" width="100" height="64" rx="6"/><rect class="role" x="376" y="48" width="20" height="10" rx="2"/><text class="role-text" x="386" y="56">CLI</text><text class="node-title" x="422" y="70">Approve the plan</text><text class="node-sub" x="422" y="84">plan → go-ahead</text><text class="node-tool" x="422" y="96">e-sign</text></g>
    </g>
    <text x="144" y="216" fill="#4f5d75" font-size="7" letter-spacing=".12em" class="mono">FLOW · LEFT IN · RIGHT OUT</text>
  </svg>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry: one frame, geometry width 1200 and height "auto", background `#f5f5f5`. Put the `<style>` block in `shared.head` and the `.dg` markup in the frame content. To scale up: viewBox width = 140 + steps×112 + 28, height = 36 + lanes×80 + legend (~80px). Add a bottom legend strip (STEPS / DATA TYPE / FLOW rows) once chips or a focal handoff appear. See the working example artboard at `diagrams/examples/process-diagram-preview`.

## Source & license

Adapted from the **process** type in the [Diagram Design](https://github.com/cathrynlavery/diagram-design) project by Cathryn Lavery, released under the MIT License. License verified by reading the repository's `LICENSE` file (standard MIT text) on 2026-08-16. The parametric lane/step geometry, node anatomy (role badge, input→output, tool line, data chips), and editorial rules are ported; the HTML/CSS and example content were re-authored for Studiograph artboards, with the project's webfont links replaced by locally-safe font stacks.
