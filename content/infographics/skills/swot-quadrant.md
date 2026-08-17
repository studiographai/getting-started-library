---
entity_type: skill
entity_id: swot-quadrant
created_at: '2026-08-14T20:52:15.062Z'
updated_at: '2026-08-17T01:45:29.254Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - infographic
  - template
  - quadrant
  - strategy
  - social
  - marketing
  - content
name: SWOT Quadrant
description: >-
  2x2 grid template with a center badge and four quadrants tinted from a tonal
  ink ramp, one carrying the accent. Use for SWOT analyses, decision matrices,
  positioning maps, or any four-way framework.
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
  'swot-analysis' / 'quarter-quadrant'
status: draft
---
# SWOT Quadrant

A 2×2 grid with a center badge, each quadrant tinted from a tonal ink ramp and independently labeled. Originally a strategy-framework staple (Strengths / Weaknesses / Opportunities / Threats), but the four-box structure works for any positioning or decision framework you want to visualize at a glance.

## When to use

Strategy recaps, decision matrices, positioning maps (e.g. cost vs. quality), any "four things to weigh against each other" content. Also works relabeled — Impact/Effort, Pros/Cons split two ways, or a simple 2×2 feature matrix.

Avoid it for sequential or ranked content — a quadrant implies four independent categories, not a progression. Use Timeline Flow or Ranked Pyramid for those.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas, gutters, badge fill |
| ink | #2d3142 | headings, points, badge ring |
| muted | #4f5d75 | kickers, bullet dashes |
| accent | #eb6c36 | ONE quadrant — the one to act on |
| hairline | #d5d8e0 | optional rules |

Quadrants are tinted from a tonal ink ramp — `rgba(45,49,66,0.06)` / `0.10` / `0.16` — so the four fields separate without four competing hues. Exactly one quadrant takes the accent instead of an ink stop: `rgba(235,108,54,0.10)` fill with its kicker in `#eb6c36`. Pick the quadrant the reader should act on (usually Opportunities); never accent two. The badge stays paper-filled with a 1px ink ring — a dark disc would out-shout the accent.

## Typography

No external fonts — Studiograph frames cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| kicker | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | quadrant label (S / W / O / T) |
| q-title | 'Source Serif 4', Georgia, serif | 28px, 400, −0.02em | quadrant heading |
| q-point | 'DM Sans', system-ui, sans-serif | 17px, 1.5 | bullet within a quadrant |
| badge | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | center badge |

## Layout

Default canvas **1200×1200** (square). Four equal quadrants with an 8px paper gutter between them and a circular center badge overlapping all four at the crosshair. Cell padding is 72×64 and the badge is 132px wide with a 12px paper halo — that clearance is what keeps the badge off the kickers in the lower two cells, so if you enlarge the badge, raise the cell padding with it. Two points per quadrant is the working maximum; a third pushes density past ~4/10.

For a wider cut (1600×1000), keep the grid square and pad the sides — don't stretch the quadrants into rectangles, the grid should stay visually equal-weighted.

### `<style>`

```html
<style>
:root{
  --sq-paper:#f5f5f5; --sq-ink:#2d3142; --sq-muted:#4f5d75;
  --sq-accent:#eb6c36; --sq-hairline:#d5d8e0;
  --sq-serif:'Source Serif 4',Georgia,serif;
  --sq-sans:'DM Sans',system-ui,sans-serif;
  --sq-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.sq{position:relative;width:1200px;height:1200px;background:var(--sq-paper);
  color:var(--sq-ink);font-family:var(--sq-sans);
  display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:8px;padding:8px;}
.sq-cell{padding:72px 64px;display:flex;flex-direction:column;justify-content:center;}
.sq-cell.q1{background:rgba(45,49,66,0.06);}
.sq-cell.q2{background:rgba(45,49,66,0.10);}
.sq-cell.q3{background:rgba(235,108,54,0.10);}
.sq-cell.q4{background:rgba(45,49,66,0.16);}
.sq-kicker{font-family:var(--sq-mono);font-size:11px;font-weight:500;
  text-transform:uppercase;letter-spacing:.18em;color:var(--sq-muted);margin-bottom:16px;}
.sq-cell.q3 .sq-kicker{color:var(--sq-accent);}
.sq-title{font-family:var(--sq-serif);font-size:28px;font-weight:400;
  letter-spacing:-.02em;line-height:1.15;margin-bottom:26px;}
.sq-point{font-size:17px;line-height:1.5;padding-left:24px;position:relative;
  margin-bottom:14px;max-width:44ch;}
.sq-point:last-child{margin-bottom:0;}
.sq-point::before{content:'—';position:absolute;left:0;color:var(--sq-muted);}
.sq-badge{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3;
  width:132px;height:132px;border-radius:50%;background:var(--sq-paper);
  border:1px solid var(--sq-ink);color:var(--sq-ink);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  text-align:center;text-indent:.18em;line-height:1.9;
  font-family:var(--sq-mono);font-size:11px;font-weight:500;
  text-transform:uppercase;letter-spacing:.18em;
  box-shadow:0 0 0 12px var(--sq-paper);}
</style>
```

### Example

```html
<div class="sq">
  <div class="sq-cell q1">
    <div class="sq-kicker">Strengths</div>
    <div class="sq-title">What’s working</div>
    <p class="sq-point">Retention is up 12% quarter over quarter</p>
    <p class="sq-point">Support response time under 2 hours</p>
  </div>
  <div class="sq-cell q2">
    <div class="sq-kicker">Weaknesses</div>
    <div class="sq-title">What’s not</div>
    <p class="sq-point">Onboarding takes 3x longer than target</p>
    <p class="sq-point">Mobile experience trails desktop</p>
  </div>
  <div class="sq-cell q3">
    <div class="sq-kicker">Opportunities</div>
    <div class="sq-title">Where to lean in</div>
    <p class="sq-point">Untapped mid-market segment</p>
    <p class="sq-point">Partner integrations requested by users</p>
  </div>
  <div class="sq-cell q4">
    <div class="sq-kicker">Threats</div>
    <div class="sq-title">What to watch</div>
    <p class="sq-point">Two new entrants in the category</p>
    <p class="sq-point">Rising acquisition costs on paid channels</p>
  </div>
  <div class="sq-badge">2026<br>Review</div>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry, one frame at 1200×1200 with `background:"#f5f5f5"` on the frame itself. Put the `<style>` block in `shared.head` and the `.sq` markup in the frame content. Relabel `.sq-kicker` freely for non-SWOT uses (Impact/Effort, Now/Next, etc.) — the grid and badge structure don't assume the SWOT acronym. Move the accent by moving the `q3` rules to whichever cell deserves it. See the working example artboard at `infographics/examples/swot-quadrant-preview`.

## Source & license

Layout concept adapted from the **SWOT Analysis** / **Quarter Quadrant** template categories in [AntV Infographic](https://github.com/antvis/Infographic) (`@antv/infographic`), MIT-licensed. License verified against the repo's `LICENSE` file on 2026-08-14. Original static HTML/CSS implementation for Studiograph — the framework's own rendering code is not reused.
