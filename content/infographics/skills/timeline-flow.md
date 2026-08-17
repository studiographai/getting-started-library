---
entity_type: skill
entity_id: timeline-flow
created_at: '2026-08-14T20:51:09.787Z'
updated_at: '2026-08-17T01:45:16.456Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - infographic
  - template
  - timeline
  - roadmap
  - social
  - marketing
  - content
name: Timeline Flow
description: >-
  Vertical (or horizontal) chronological spine template — numbered milestone
  nodes connected by a running line, each with a date tag, headline, and one
  line of context. Use for roadmaps, company history, step-by-step processes, or
  any content that moves through time.
applies_to:
  - infographic
  - artboard
  - artifact-canvas
  - social-media
  - marketing
  - presentation
license: MIT
loading: on-demand
source: >-
  github.com/antvis/Infographic (MIT License) — template category:
  'timeline-sequence' / 'roadmap-sequence'
status: draft
---
# Timeline Flow

A vertical (or horizontal) chronological spine: a running line connects numbered milestone nodes, each carrying a date/step tag, a short headline, and one line of supporting copy. Built for content that moves through time — a roadmap, a company history, a step-by-step process, a "how we got here" recap.

## When to use

Reach for Timeline Flow whenever the content is inherently sequential — dated milestones, launch roadmaps, a project's phases, a step-by-step how-to, "then vs. now" recaps. It reads well as a single social post/story, a slide, or a printed one-pager.

Avoid it when items don't have a real order — use Comparison Split or SWOT Quadrant instead, since forcing unordered facts onto a timeline invents a sequence that isn't there.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | node rings, step numerals, headlines |
| muted | #4f5d75 | date tags, supporting copy |
| hairline | #d5d8e0 | the connecting spine |
| accent | #eb6c36 | header rule + the one current/focal node — 1–2 elements ONLY |

Nodes are hollow rings, not filled discs: a spine of solid coloured dots gives every milestone the same shout, which is exactly the emphasis a timeline should not have. Ring the single node that matters — the one you're standing on, or the one you're arguing for — in accent, and leave the rest ink.

## Typography

No external fonts — Studiograph frames cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| kicker | 'JetBrains Mono', ui-monospace, monospace | 13px, 500, 0.18em caps | top eyebrow |
| title | 'Source Serif 4', Georgia, serif | 64px, 400, −0.02em | headline |
| step-num | 'Source Serif 4', Georgia, serif | 26px, 400 | numeral inside each node ring |
| date-tag | 'JetBrains Mono', ui-monospace, monospace | 13px, 500, 0.18em caps | date/step label |
| headline | 'Source Serif 4', Georgia, serif | 40px, 400, −0.02em | milestone title |
| body | 'DM Sans', system-ui, sans-serif | 19px, 400 | one-line supporting copy |

## Layout

Default canvas **1080×1620** (portrait — social story/carousel-friendly). Header (accent rule, mono kicker, serif title) at the top; below it the track fills the remaining height. Every node but the last is `flex:1`, so the milestones distribute evenly down the canvas and the final node's copy lands on the bottom margin — no dangling spine, no void at the foot of the artboard. The spine is drawn per node as a 1px hairline running from the bottom of that node's ring to the top of the next one, so it can never overshoot the last milestone.

For a landscape version (1600×900 or wider), rotate the spine horizontal and stack content above/below alternating nodes — the same node/line/content units just change axis.

### `<style>`

```html
<style>
:root{
  --tf-paper:#f5f5f5; --tf-ink:#2d3142; --tf-muted:#4f5d75;
  --tf-hairline:#d5d8e0; --tf-accent:#eb6c36;
  --tf-serif:'Source Serif 4',Georgia,serif;
  --tf-sans:'DM Sans',system-ui,sans-serif;
  --tf-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.tf{width:1080px;height:1620px;background:var(--tf-paper);color:var(--tf-ink);
  font-family:var(--tf-sans);padding:96px 80px;display:flex;flex-direction:column;}
.tf-rule{width:40px;height:2px;background:var(--tf-accent);margin-bottom:22px;}
.tf-kicker{font-family:var(--tf-mono);font-size:13px;font-weight:500;text-transform:uppercase;
  letter-spacing:.18em;color:var(--tf-muted);margin-bottom:18px;}
.tf-title{font-family:var(--tf-serif);font-weight:400;font-size:64px;line-height:1.1;
  letter-spacing:-.02em;max-width:640px;margin-bottom:80px;}
.tf-track{flex:1;display:flex;flex-direction:column;padding-left:96px;}
.tf-node{position:relative;flex:1;}
.tf-node:last-child{flex:0 0 auto;}
.tf-node:not(:last-child)::after{content:'';position:absolute;left:-64px;top:64px;bottom:0;
  width:1px;background:var(--tf-hairline);}
.tf-dot{position:absolute;left:-96px;top:0;width:64px;height:64px;border-radius:50%;
  background:var(--tf-paper);border:1px solid var(--tf-ink);color:var(--tf-ink);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--tf-serif);font-weight:400;font-size:26px;}
.tf-node.is-current .tf-dot{border-color:var(--tf-accent);color:var(--tf-accent);}
.tf-date{font-family:var(--tf-mono);font-size:13px;font-weight:500;text-transform:uppercase;
  letter-spacing:.18em;color:var(--tf-muted);margin-bottom:14px;}
.tf-h{font-family:var(--tf-serif);font-weight:400;font-size:40px;line-height:1.15;
  letter-spacing:-.02em;margin-bottom:12px;}
.tf-body{font-size:19px;line-height:1.6;color:var(--tf-muted);max-width:44ch;}
</style>
```

### Example

```html
<div class="tf">
  <div class="tf-rule"></div>
  <div class="tf-kicker">Product Roadmap · 2026</div>
  <h1 class="tf-title">Where we’ve been, where we’re headed</h1>
  <div class="tf-track">
    <div class="tf-node">
      <div class="tf-dot">1</div>
      <div class="tf-date">Q1 2026</div>
      <h3 class="tf-h">Foundations</h3>
      <p class="tf-body">Rebuilt the core data pipeline for 3× faster sync across large workspaces.</p>
    </div>
    <div class="tf-node">
      <div class="tf-dot">2</div>
      <div class="tf-date">Q2 2026</div>
      <h3 class="tf-h">Collaboration</h3>
      <p class="tf-body">Shipped live co-editing and comment threads across every entry type.</p>
    </div>
    <div class="tf-node is-current">
      <div class="tf-dot">3</div>
      <div class="tf-date">Q3 2026</div>
      <h3 class="tf-h">Automation</h3>
      <p class="tf-body">Introduced scheduled workflows so routine reports build themselves.</p>
    </div>
  </div>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry, one frame at 1080×1620 (or your chosen size), background `#f5f5f5`, with the `<style>` block above in `shared.head` and the track markup in the frame content. Swap node count, ring colour, and copy freely — the spine math stays fixed regardless of how many nodes you add: the ring is 64px at `left:-96px` inside a track with `padding-left:96px`, and the connector sits at `left:-64px` so it runs through the ring's centre. Move the `is-current` class to whichever milestone deserves the accent; only ever put it on one. See the working example artboard at `infographics/examples/timeline-flow-preview`.

## Source & license

Layout concept adapted from the **Timeline Sequence** / **Roadmap Sequence** template category in [AntV Infographic](https://github.com/antvis/Infographic) (`@antv/infographic`), an MIT-licensed infographic generation framework built by the AntV team at Ant Group. License verified directly against the repository's `LICENSE` file (standard MIT text, copyright AntV) on 2026-08-14. AntV Infographic defines these layouts as a declarative JSON spec rendered to SVG via its own rendering engine; the implementation above is an original, self-contained HTML/CSS port built for Studiograph artboards — no source code from the framework is reused, only the layout concept and category name.
