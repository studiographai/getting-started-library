---
entity_type: skill
entity_id: comparison-split
created_at: '2026-08-14T20:52:12.056Z'
updated_at: '2026-08-16T17:02:54.290Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - infographic
  - template
  - comparison
  - before-after
  - social
  - marketing
  - content
name: Comparison Split
description: >-
  Two-column head-to-head template — matched left/right panels split by a center
  divider and badge, each with an eyebrow, headline, and bullet points. Use for
  before/after, this-vs-that, or product comparison content.
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
  'binary-comparison'
status: draft
---
# Comparison Split

Two matched columns facing off across a center divider — a clean "this vs. that" layout for contrasting two options, time periods, products, or arguments. A center badge (a "VS", a percentage, or a short verdict) anchors the divide.

## When to use

Use it for head-to-head comparisons: old vs. new, us vs. them, before vs. after, plan A vs. plan B. It's built for exactly two sides — for three or more options, use Ranked Pyramid or a plain grid instead.

Avoid it when the two sides aren't genuinely comparable on the same axes; a lopsided comparison reads as biased rather than informative.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas — one ground, both sides |
| ink | #2d3142 | headlines, the favoured side's points |
| muted | #4f5d75 | eyebrows, the other side's points, badge label |
| accent | #eb6c36 | side B's mark + eyebrow — 1–2 elements ONLY |
| hairline | #d5d8e0 | centre divider, badge ring, point rules |

Both sides share one paper ground. Contrast is carried by a 1px divider and by text colour — the side you're arguing for takes ink points and the accent eyebrow, the other takes muted. Flooding two columns with two saturated background fields is the loud version of this layout; it makes the comparison look decided before the reader has read it.

## Typography

No external fonts — Studiograph frames cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 13px, 500, 0.18em caps | side label ("BEFORE" / "AFTER") |
| headline | 'Source Serif 4', Georgia, serif | 42px, 400, −0.02em | side title |
| point | 'DM Sans', system-ui, sans-serif | 19px, 400 | comparison point |
| badge | 'JetBrains Mono', ui-monospace, monospace | 12px, 500, 0.18em caps | centre divider label |

## Layout

Default canvas **1080×1080** (square — feed-native). Two equal columns split by a 1px hairline divider, inset 72px top and bottom, carrying a hollow circular badge at vertical centre. Each column: a short mark, eyebrow, headline, then 3–4 points.

The points are not bulleted — each is a `flex:1` block with a hairline above it, so the list fills the column as an even table and the rules line up across the divider, row for row. Give the headline a `min-height` of two lines so a one-line title on one side and a two-line title on the other still start their lists at the same height. For a widescreen cut (1600×900), keep the same column structure — it scales without restructuring.

### `<style>`

```html
<style>
:root{
  --cs-paper:#f5f5f5; --cs-ink:#2d3142; --cs-muted:#4f5d75;
  --cs-accent:#eb6c36; --cs-hairline:#d5d8e0;
  --cs-serif:'Source Serif 4',Georgia,serif;
  --cs-sans:'DM Sans',system-ui,sans-serif;
  --cs-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.cs{position:relative;width:1080px;height:1080px;display:flex;overflow:hidden;
  background:var(--cs-paper);color:var(--cs-ink);font-family:var(--cs-sans);}
.cs-side{flex:1;padding:88px 64px;display:flex;flex-direction:column;}
.cs-mark{width:32px;height:2px;background:var(--cs-hairline);margin-bottom:22px;}
.cs-side.b .cs-mark{background:var(--cs-accent);}
.cs-eyebrow{font-family:var(--cs-mono);font-size:13px;font-weight:500;text-transform:uppercase;
  letter-spacing:.18em;color:var(--cs-muted);margin-bottom:18px;}
.cs-side.b .cs-eyebrow{color:var(--cs-accent);}
.cs-headline{font-family:var(--cs-serif);font-weight:400;font-size:42px;line-height:1.15;
  letter-spacing:-.02em;min-height:97px;margin-bottom:36px;}
.cs-list{flex:1;display:flex;flex-direction:column;border-bottom:1px solid var(--cs-hairline);}
.cs-point{flex:1;display:flex;align-items:center;border-top:1px solid var(--cs-hairline);
  font-size:19px;line-height:1.55;color:var(--cs-muted);padding-right:8px;}
.cs-side.b .cs-point{color:var(--cs-ink);}
.cs-divider{position:absolute;left:50%;top:72px;bottom:72px;width:1px;
  transform:translateX(-50%);background:var(--cs-hairline);z-index:2;}
.cs-badge{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3;
  width:88px;height:88px;border-radius:50%;background:var(--cs-paper);
  border:1px solid var(--cs-hairline);display:flex;align-items:center;justify-content:center;
  font-family:var(--cs-mono);font-size:12px;font-weight:500;letter-spacing:.18em;
  color:var(--cs-muted);}
</style>
```

### Example

```html
<div class="cs">
  <div class="cs-side a">
    <div class="cs-mark"></div>
    <div class="cs-eyebrow">Before</div>
    <h2 class="cs-headline">Manual reporting</h2>
    <div class="cs-list">
      <p class="cs-point">4 hours assembling data every Monday</p>
      <p class="cs-point">Numbers pulled from five disconnected tools</p>
      <p class="cs-point">One person is the single point of failure</p>
    </div>
  </div>
  <div class="cs-divider"></div>
  <div class="cs-badge">VS</div>
  <div class="cs-side b">
    <div class="cs-mark"></div>
    <div class="cs-eyebrow">After</div>
    <h2 class="cs-headline">Automated dashboard</h2>
    <div class="cs-list">
      <p class="cs-point">Live numbers, refreshed every hour</p>
      <p class="cs-point">One source of truth, five feeds merged</p>
      <p class="cs-point">Anyone on the team can check it, anytime</p>
    </div>
  </div>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry, one frame at 1080×1080, background `#f5f5f5`. Put the `<style>` block in `shared.head` and the `.cs` markup in the frame content. The badge sits in the 128px gutter between the two columns' text boxes and carries the paper colour as its own fill, so it masks the divider cleanly without a shadow ring — keep its background matched to the canvas if you recolour anything. Keep both sides to the same number of points so the hairlines stay aligned across the divide. See the working example artboard at `infographics/examples/comparison-split-preview`.

## Source & license

Layout concept adapted from the **Binary Comparison** template category in [AntV Infographic](https://github.com/antvis/Infographic) (`@antv/infographic`), MIT-licensed. License verified against the repo's `LICENSE` file on 2026-08-14. As with the other templates in this set, the framework's own code is a declarative-JSON-to-SVG renderer; this is an original static HTML/CSS build of the same layout idea, made self-contained for Studiograph.
