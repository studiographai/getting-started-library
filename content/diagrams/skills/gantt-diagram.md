---
entity_type: skill
entity_id: gantt-diagram
created_at: '2026-08-16T15:43:28.922Z'
updated_at: '2026-08-17T01:39:27.153Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - diagram
  - template
  - gantt
  - timeline
  - planning
name: Gantt
description: >-
  Phased project timeline — task bars on a week grid grouped into subtle phase
  zones, with one accent-colored critical gate. Use for plans where temporal
  overlap, parallel tracks, and sequencing must read at a glance.
applies_to:
  - diagram
  - artboard
  - presentation
  - document
license: MIT
source: 'github.com/cathrynlavery/diagram-design (MIT License) — type: gantt'
loading: on-demand
status: draft
---
# Gantt

A phased project timeline: a left label column, a week grid running left→right with month headers, and one rounded task bar per row. Tasks group into phases marked by subtle zone rectangles with eyebrow labels; exactly one bar — the critical gate or key deliverable — takes the coral accent, everything else stays muted.

## When to use

Reach for Gantt when tasks have explicit start and end dates and the reader needs to see overlap and sequencing — launch plans, engagement schedules, rollout roadmaps. It answers "what runs in parallel, and what gates what" at a glance.

Avoid it when dates are soft or the content is really a sequence of milestones without durations — a Timeline Flow reads better there. Skip dependency arrows in v1 (add only when essential), keep start/end dates out of bar labels (the axis carries them), and never give all bars equal visual weight — the focal task must stand out. Budget: max 12 tasks (split into sub-plans beyond that), max 5 parallel tracks per phase, density near 4/10. Every gridline must earn its place: week lines at 5% opacity, month separators dashed at 8% — the grid whispers, the bars speak.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | task labels, month headers |
| muted | #4f5d75 | bar strokes, legend text |
| accent | #eb6c36 | ONE focal bar (critical gate) + its label only |
| hairline | #d5d8e0 | axis rules; gridlines fade further to rgba(45,49,66,.05) |

Bar fills: normal task `rgba(79,93,117,0.15)` with `#4f5d75` stroke; focal task `rgba(235,108,54,0.12)` with `#eb6c36` stroke; phase zone `rgba(45,49,66,0.02)` with `rgba(45,49,66,0.10)` stroke.

## Typography

No external fonts — Studiograph frames cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | kicker above headline |
| headline | 'Source Serif 4', Georgia, serif | 32px, 400 | title above the diagram |
| task label | 'DM Sans', system-ui, sans-serif | 10px, 600 | task names in left column |
| month header | 'DM Sans', system-ui, sans-serif | 9px, 600 | time axis |
| phase label | 'JetBrains Mono', ui-monospace, monospace | 7px, 0.14em caps, 40% ink | phase eyebrow inside each zone |
| gate tag | 'JetBrains Mono', ui-monospace, monospace | 9px | short tag inside the focal bar |

## Layout

Default canvas **1200 × auto**. One inline SVG (viewBox ~1000×500 for 7 tasks / 12 weeks). Grid math: label column x=20–196, timeline x=200–956; pitch = timeline_width ÷ total_weeks (756 ÷ 12 = 63); bar x = 200 + start_week×pitch, width = duration_weeks×pitch — every bar edge must be *computed* onto a gridline, never nudged by eye. Row height 40, bar height 24. Give every row label the same baseline offset from its bar (`bar_top + 16`, i.e. bar centre + 4) so labels and bars share one baseline down the whole chart. A paper-colored mask rect under each label and bar keeps gridlines from striking through text.

**Derive each phase zone from the bars it contains — never hand-set its height.** A zone's box is `top = first_bar_top − 20` (that 20px strip carries the phase eyebrow, baseline at `top + 13`) and `bottom = last_bar_bottom + 8`, with 8px of gutter between consecutive zones. So `height = 40×(rows − 1) + 52` at a 40px row pitch. A zone left even one row-pitch short lets its final bar hang across the boundary — and because the last row of a phase is so often the accent gate, that is the most conspicuous way this template breaks. Re-check every zone against the formula after any edit to rows or spacing.

Close the plot area. Week gridlines and the vertical axis run from the header rule (y=60) down to the **last zone's bottom edge** — not to some rounder number past it — and the final week boundary (x=956) gets its own faint line so the grid reads as a closed box rather than an open right edge. Text set inside a bar sits at `bar_centre_x` / `bar_centre_y + 3`; a 9px mono tag in a 24px bar is easy to leave two pixels low.

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

Four tasks over eight weeks (pitch = 756 ÷ 8 = 94.5):

```html
<div class="dg">
  <p class="dg-eyebrow">Gantt · Diagram Templates</p>
  <h1 class="dg-title">Website refresh · 8-week plan</h1>
  <svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" role="img">
    <rect width="100%" height="100%" fill="#f5f5f5"/>
    <!-- month headers + axis -->
    <text x="389" y="52" fill="#2d3142" font-size="9" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">Month 1</text>
    <text x="767" y="52" fill="#2d3142" font-size="9" font-weight="600" font-family="'DM Sans',sans-serif" text-anchor="middle">Month 2</text>
    <line x1="200" y1="60" x2="956" y2="60" stroke="rgba(45,49,66,0.20)" stroke-width="0.8"/>
    <line x1="200" y1="36" x2="200" y2="236" stroke="rgba(45,49,66,0.20)" stroke-width="0.8"/>
    <line x1="578" y1="36" x2="578" y2="236" stroke="rgba(45,49,66,0.08)" stroke-width="0.8" stroke-dasharray="3,3"/>
    <!-- week gridlines (whisper-quiet) -->
    <line x1="294" y1="60" x2="294" y2="236" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
    <line x1="389" y1="60" x2="389" y2="236" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
    <line x1="483" y1="60" x2="483" y2="236" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
    <line x1="672" y1="60" x2="672" y2="236" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
    <line x1="767" y1="60" x2="767" y2="236" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
    <line x1="861" y1="60" x2="861" y2="236" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
    <!-- final week boundary closes the plot area on the right -->
    <line x1="956" y1="60" x2="956" y2="236" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
    <!-- rows: label mask + label + bar mask + bar -->
    <rect x="20" y="76" width="176" height="24" fill="#f5f5f5"/>
    <text x="20" y="92" fill="#2d3142" font-size="10" font-weight="600" font-family="'DM Sans',sans-serif">Audit &amp; IA</text>
    <rect x="200" y="76" width="189" height="24" rx="4" fill="#f5f5f5"/>
    <rect x="200" y="76" width="189" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
    <rect x="20" y="116" width="176" height="24" fill="#f5f5f5"/>
    <text x="20" y="132" fill="#2d3142" font-size="10" font-weight="600" font-family="'DM Sans',sans-serif">Design</text>
    <rect x="294" y="116" width="189" height="24" rx="4" fill="#f5f5f5"/>
    <rect x="294" y="116" width="189" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
    <rect x="20" y="156" width="176" height="24" fill="#f5f5f5"/>
    <text x="20" y="172" fill="#2d3142" font-size="10" font-weight="600" font-family="'DM Sans',sans-serif">Build</text>
    <rect x="483" y="156" width="284" height="24" rx="4" fill="#f5f5f5"/>
    <rect x="483" y="156" width="284" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
    <!-- focal: the launch gate -->
    <rect x="20" y="196" width="176" height="24" fill="#f5f5f5"/>
    <text x="20" y="212" fill="#eb6c36" font-size="10" font-weight="600" font-family="'DM Sans',sans-serif">Launch</text>
    <rect x="767" y="196" width="94" height="24" rx="4" fill="#f5f5f5"/>
    <rect x="767" y="196" width="94" height="24" rx="4" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" stroke-width="1"/>
    <text x="814" y="211" fill="#eb6c36" font-size="9" font-family="'JetBrains Mono',monospace" text-anchor="middle">GATE</text>
  </svg>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry: one frame, geometry width 1200 and height "auto", background `#f5f5f5`. Put the `<style>` block in `shared.head` and the `.dg` markup in the frame content. To scale up: recompute pitch for your week count, add phase zone rects behind each task group (drawn first, with eyebrow labels, and sized by the `first_bar_top − 20` / `last_bar_bottom + 8` formula above rather than by eye), and finish with a bottom legend strip (hairline + focal/task/phase swatches). See the working example artboard at `diagrams/examples/gantt-diagram-preview`.

## Source & license

Adapted from the **gantt** type in the [Diagram Design](https://github.com/cathrynlavery/diagram-design) project by Cathryn Lavery, released under the MIT License. License verified by reading the repository's `LICENSE` file (standard MIT text) on 2026-08-16. The grid math, bar/zone patterns, and editorial rules (one focal bar, whisper-quiet gridlines, task budget) are ported; the HTML/CSS and example content were re-authored for Studiograph artboards, with the project's webfont links replaced by locally-safe font stacks.
