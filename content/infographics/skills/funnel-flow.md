---
entity_type: skill
entity_id: funnel-flow
created_at: '2026-08-14T20:53:04.445Z'
updated_at: '2026-08-16T16:59:26.151Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - infographic
  - template
  - funnel
  - pipeline
  - editorial
  - social
  - marketing
  - content
name: Funnel Flow
description: >-
  Editorial funnel template — narrowing trapezoid stages on paper, each labeled
  with a count/percentage and a short note, with a tonal ink ramp and one
  accented stage. Use for conversion funnels, sales or hiring pipelines, and any
  process with real attrition between stages.
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
  'funnel-sequence'
status: draft
---
# Funnel Flow

A funnel on paper: trapezoid stages narrow from top to bottom, each one labeled with a stage name, a number (a count, a percentage, a conversion rate), and a short note. Built for anything that describes a narrowing process — a marketing funnel, a sales pipeline, a hiring pipeline, an experiment's drop-off. Stages step through a tonal ink ramp rather than a rainbow, and a single accented stage marks the outcome that matters.

## When to use

Conversion funnels, sales/hiring pipelines, "how many made it through each stage" content, any process where the honest visual is that most things don't make it to the next step. The narrowing itself is the message — don't use this template if every stage should look equally weighted.

Avoid it for content with no attrition between stages — use Timeline Flow for a plain sequence where nothing drops out.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | numerals, primary text |
| muted | #4f5d75 | stage tags, notes |
| accent | #eb6c36 | the one stage that matters — 1 band ONLY |
| hairline | #d5d8e0 | rule under the header |

Bands are tinted with a tonal ink ramp — `rgba(45,49,66,0.06)`, `0.10`, `0.16` — so the funnel reads as one material getting denser as it narrows. The final (or otherwise most consequential) band is the single accent: `rgba(235,108,54,0.10)` fill with a solid `#eb6c36` hairline. Never tint more than one band with the accent, and never give each stage its own hue.

## Typography

No external fonts — Studiograph frames cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | kicker above headline |
| title | 'Source Serif 4', Georgia, serif | 46px, 400, −0.02em | headline |
| stage tag | 'JetBrains Mono', ui-monospace, monospace | 12px, 0.16em caps | stage name inside the band |
| stage number | 'Source Serif 4', Georgia, serif | 46px, 400 | count/percentage — big, but never a heavy display sans |
| stage note | 'DM Sans', system-ui, sans-serif | 17px | one-line note beneath the band |

## Layout

Default canvas **1080×1350** (portrait). Eyebrow + serif headline in a padded header, a hairline rule, then the funnel as one full-bleed inline SVG (viewBox 1080×1000) so band geometry is exact px. Bands are 168 tall on a 258 pitch — the 90px of air between a note and the next band is what keeps density near 4/10. Each band tapers ~17% across its own height; widths step 800 → 640 → 460 → 290 for a four-stage funnel. Notes sit centered beneath their band, never inside it.

For a horizontal cut (1600×900), lay the trapezoids left-to-right narrowing rightward instead — same stage units, rotated axis.

### `<style>`

```html
<style>
:root{
  --ff-paper:#f5f5f5; --ff-ink:#2d3142; --ff-muted:#4f5d75;
  --ff-accent:#eb6c36; --ff-hairline:#d5d8e0;
  --ff-serif:'Source Serif 4',Georgia,serif;
  --ff-sans:'DM Sans',system-ui,sans-serif;
  --ff-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.ff{position:relative;width:1080px;min-height:1350px;background:var(--ff-paper);
  color:var(--ff-ink);font-family:var(--ff-sans);padding:104px 0 0;}
.ff-head{padding:0 96px;}
.ff-eyebrow{font-family:var(--ff-mono);font-size:11px;font-weight:500;
  letter-spacing:.18em;text-transform:uppercase;color:var(--ff-muted);margin-bottom:10px;}
.ff-title{font-family:var(--ff-serif);font-size:46px;font-weight:400;
  letter-spacing:-.02em;line-height:1.12;}
.ff-rule{height:1px;background:var(--ff-hairline);margin:28px 96px 0;}
.ff svg{display:block;width:100%;margin-top:24px;}
.ff-tag{font-family:var(--ff-mono);font-size:12px;letter-spacing:.16em;
  text-transform:uppercase;fill:var(--ff-muted);}
.ff-num{font-family:var(--ff-serif);font-size:46px;letter-spacing:-.02em;fill:var(--ff-ink);}
.ff-note{font-family:var(--ff-sans);font-size:17px;fill:var(--ff-muted);}
.ff-accent .ff-tag{fill:var(--ff-accent);}
</style>
```

### Example

```html
<div class="ff">
  <div class="ff-head">
    <p class="ff-eyebrow">Q2 2026 · Funnel Recap</p>
    <h1 class="ff-title">From click to customer</h1>
  </div>
  <div class="ff-rule"></div>
  <svg viewBox="0 0 1080 1000" xmlns="http://www.w3.org/2000/svg" role="img"
       aria-label="Funnel from 48,200 visits to 610 paid customers">
    <g>
      <polygon points="140,0 940,0 870,168 210,168"
        fill="rgba(45,49,66,0.06)" stroke="rgba(45,49,66,0.12)"/>
      <text class="ff-tag" x="540" y="56" text-anchor="middle">Visited</text>
      <text class="ff-num" x="540" y="118" text-anchor="middle">48,200</text>
      <text class="ff-note" x="540" y="206" text-anchor="middle">Unique visits to the pricing page.</text>
    </g>
    <g>
      <polygon points="220,258 860,258 804,426 276,426"
        fill="rgba(45,49,66,0.10)" stroke="rgba(45,49,66,0.14)"/>
      <text class="ff-tag" x="540" y="314" text-anchor="middle">Signed up</text>
      <text class="ff-num" x="540" y="376" text-anchor="middle">6,100</text>
      <text class="ff-note" x="540" y="464" text-anchor="middle">12.7% of visitors started a trial.</text>
    </g>
    <g>
      <polygon points="310,516 770,516 730,684 350,684"
        fill="rgba(45,49,66,0.16)" stroke="rgba(45,49,66,0.18)"/>
      <text class="ff-tag" x="540" y="572" text-anchor="middle">Activated</text>
      <text class="ff-num" x="540" y="634" text-anchor="middle">2,340</text>
      <text class="ff-note" x="540" y="722" text-anchor="middle">Completed setup within 7 days.</text>
    </g>
    <g class="ff-accent">
      <polygon points="395,774 685,774 660,942 420,942"
        fill="rgba(235,108,54,0.10)" stroke="#eb6c36"/>
      <text class="ff-tag" x="540" y="830" text-anchor="middle">Converted</text>
      <text class="ff-num" x="540" y="892" text-anchor="middle">610</text>
      <text class="ff-note" x="540" y="980" text-anchor="middle">Upgraded to a paid plan.</text>
    </g>
  </svg>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry, one frame at 1080×1350 with `background:"#f5f5f5"` on the frame itself (not just `.ff`) so there's no seam around the edge. Put the `<style>` block in `shared.head` and the `.ff` markup in the frame content. Band widths and fills are set per-stage in the SVG, same reasoning as Ranked Pyramid — hand-tune the taper to the real drop-off, don't default to even steps. Adding a fifth stage means adding 258 to the viewBox height and repeating one `<g>`. See the working example artboard at `infographics/examples/funnel-flow-preview`.

## Source & license

Layout concept adapted from the **Funnel Sequence** template category in [AntV Infographic](https://github.com/antvis/Infographic) (`@antv/infographic`), MIT-licensed. License verified against the repo's `LICENSE` file on 2026-08-14. Original static HTML/CSS implementation for Studiograph.
