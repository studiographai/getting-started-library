---
entity_type: skill
entity_id: ranked-pyramid
created_at: '2026-08-14T20:52:48.086Z'
updated_at: '2026-08-16T17:02:43.980Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - infographic
  - template
  - ranking
  - hierarchy
  - social
  - marketing
  - content
name: Ranked Pyramid
description: >-
  Stacked tiers narrowing from a wide base to a narrow peak, each carrying a
  rank number, title, and note. Use for top-N rankings, maturity models, and
  priority stacks where order and weight both matter.
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
  github.com/antvis/Infographic (MIT License) — template categories:
  'pyramid-list' / 'pyramid-sequence'
status: draft
---
# Ranked Pyramid

Stacked tiers narrowing from a wide base to a narrow peak (or the reverse — widening downward), each tier carrying a rank number, a short title, and one line of support. Built for "top N" content where order and relative weight both matter. Tiers step through a tonal ink ramp rather than a rainbow, and the peak — the tier the reader is meant to remember — is the single accent.

## When to use

Top-5/top-10 rankings, maturity models (foundational → advanced), priority stacks (must-have → nice-to-have), Maslow-style hierarchies. The shrinking width is doing real communicative work — reserve it for content where "higher/narrower = more important or more advanced" is actually true.

Avoid it for parallel, equally-weighted items — that's Stat Row List. And avoid it for time-ordered content with no ranking — that's Timeline Flow.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | tier titles, rule of the page |
| muted | #4f5d75 | rank numerals, tier body copy |
| accent | #eb6c36 | the peak tier — 1 tier ONLY |
| hairline | #d5d8e0 | rule under the header |

Tiers step through a tonal ink ramp from the base up — `rgba(45,49,66,0.06)`, `0.10`, `0.15`, `0.18` — so the stack reads as one material densifying toward the top. The peak takes the accent instead of a fifth ink stop: `rgba(235,108,54,0.10)` with its rank numeral in `#eb6c36`. One accented tier, never two; if a middle tier is the real point, move the accent there and leave the peak on ink.

## Typography

No external fonts — Studiograph frames cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | kicker above headline |
| title | 'Source Serif 4', Georgia, serif | 52px, 400, −0.02em | headline |
| rank | 'Source Serif 4', Georgia, serif | 34px, 400 | numeral inside each tier — large, but never a heavy display sans |
| tier-title | 'DM Sans', system-ui, sans-serif | 22px, 600 | per-tier headline |
| tier-body | 'DM Sans', system-ui, sans-serif | 17px, 1.55 | per-tier description |

## Layout

Default canvas **1080×1350** (portrait). Eyebrow + serif headline in a padded header, a hairline rule, then the tiers stacked bottom-to-top with decreasing width, centered. Widths step 96% → 84% → 72% → 60% → 48%: a 2× taper is enough to read as a pyramid while still leaving the narrowest tier a usable measure. Inside a tier the rank numeral sits left on the same baseline as the title, with title and body in a column beside it — that keeps the numeral out of the body's wrap.

Padding is 56×52 with a 16px gap; the tier stack is what fills the page, so if you use fewer than five tiers, raise the padding rather than letting the bottom go empty. For a taller version with more tiers (1080×1920), keep the same per-tier padding and just add rows — the width step stays proportional.

### `<style>`

```html
<style>
:root{
  --rp-paper:#f5f5f5; --rp-ink:#2d3142; --rp-muted:#4f5d75;
  --rp-accent:#eb6c36; --rp-hairline:#d5d8e0;
  --rp-serif:'Source Serif 4',Georgia,serif;
  --rp-sans:'DM Sans',system-ui,sans-serif;
  --rp-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.rp{position:relative;width:1080px;min-height:1350px;background:var(--rp-paper);
  color:var(--rp-ink);font-family:var(--rp-sans);padding:104px 0 0;}
.rp-head{padding:0 96px;}
.rp-eyebrow{font-family:var(--rp-mono);font-size:11px;font-weight:500;
  letter-spacing:.18em;text-transform:uppercase;color:var(--rp-muted);margin-bottom:10px;}
.rp-title{font-family:var(--rp-serif);font-size:52px;font-weight:400;
  letter-spacing:-.02em;line-height:1.12;}
.rp-rule{height:1px;background:var(--rp-hairline);margin:28px 96px 48px;}
.rp-stack{display:flex;flex-direction:column-reverse;align-items:center;
  gap:16px;width:100%;}
.rp-tier{display:flex;align-items:baseline;gap:28px;padding:56px 52px;}
.rp-rank{font-family:var(--rp-serif);font-size:34px;line-height:1;
  color:var(--rp-muted);flex:0 0 auto;}
.rp-tier-title{font-size:22px;font-weight:600;letter-spacing:-.01em;margin-bottom:6px;}
.rp-tier-body{font-size:17px;line-height:1.55;color:var(--rp-muted);}
.rp-tier.is-peak{background:rgba(235,108,54,0.10);}
.rp-tier.is-peak .rp-rank{color:var(--rp-accent);}
</style>
```

### Example

```html
<div class="rp">
  <div class="rp-head">
    <p class="rp-eyebrow">2026 Maturity Model</p>
    <h1 class="rp-title">Five stages of data maturity</h1>
  </div>
  <div class="rp-rule"></div>
  <div class="rp-stack">
    <div class="rp-tier" style="width:96%;background:rgba(45,49,66,0.06);">
      <div class="rp-rank">1</div>
      <div>
        <div class="rp-tier-title">Ad hoc</div>
        <p class="rp-tier-body">Data lives in spreadsheets, pulled manually when someone asks.</p>
      </div>
    </div>
    <div class="rp-tier" style="width:84%;background:rgba(45,49,66,0.10);">
      <div class="rp-rank">2</div>
      <div>
        <div class="rp-tier-title">Centralized</div>
        <p class="rp-tier-body">One shared source of truth, still updated by hand.</p>
      </div>
    </div>
    <div class="rp-tier" style="width:72%;background:rgba(45,49,66,0.15);">
      <div class="rp-rank">3</div>
      <div>
        <div class="rp-tier-title">Automated</div>
        <p class="rp-tier-body">Pipelines refresh dashboards without manual intervention.</p>
      </div>
    </div>
    <div class="rp-tier" style="width:60%;background:rgba(45,49,66,0.18);">
      <div class="rp-rank">4</div>
      <div>
        <div class="rp-tier-title">Predictive</div>
        <p class="rp-tier-body">Models forecast, not just report, what already happened.</p>
      </div>
    </div>
    <div class="rp-tier is-peak" style="width:48%;">
      <div class="rp-rank">5</div>
      <div>
        <div class="rp-tier-title">Autonomous</div>
        <p class="rp-tier-body">Systems act on insights directly, with humans reviewing exceptions.</p>
      </div>
    </div>
  </div>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry, one frame at 1080×1350 with `background:"#f5f5f5"` on the frame itself. Put the `<style>` block in `shared.head` and the `.rp` markup in the frame content. Tier widths and ink stops are set inline per-tier (`style="width:__%;background:__"`) rather than computed by CSS, so you can hand-tune the step for however many tiers you actually have — don't let it default to exactly equal steps if the content itself isn't evenly spaced. Watch the narrowest tier: if its body copy runs past two lines, either shorten the line or widen the taper. See the working example artboard at `infographics/examples/ranked-pyramid-preview`.

## Source & license

Layout concept adapted from the **Pyramid List** / **Pyramid Sequence** template categories in [AntV Infographic](https://github.com/antvis/Infographic) (`@antv/infographic`), MIT-licensed. License verified against the repo's `LICENSE` file on 2026-08-14. Original static HTML/CSS implementation for Studiograph.
