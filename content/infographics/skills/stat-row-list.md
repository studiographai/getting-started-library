---
entity_type: skill
entity_id: stat-row-list
created_at: '2026-08-14T20:52:29.398Z'
updated_at: '2026-08-16T17:04:52.584Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - infographic
  - template
  - list
  - stats
  - social
  - marketing
  - content
name: Stat Row List
description: >-
  Vertical stack of numeral-led rows separated by hairlines — a big stat, a
  label, and one line of context per row. Use for quick-fact sheets, 'N things
  to know' posts, and scannable feature lists.
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
  github.com/antvis/Infographic (MIT License) — template category: 'row-list'
  (e.g. list-row-simple-horizontal-arrow)
status: draft
---
# Stat Row List

A vertical stack of rows, each pairing a big numeral (or a small icon chip) with a short label and one line of context, separated by hairlines. Built for "N things you should know" content — fast to scan, easy to screenshot, easy to keep to one screen.

## When to use

Quick-fact sheets, "5 stats that matter this quarter," feature lists, FAQ-style content, carousel slides where each row could also stand alone. It's the workhorse template — reach for it whenever the content is a short list of parallel items.

Avoid it when items need to show a real relationship to each other (a sequence, a hierarchy, a comparison) — this template treats every row as independent and equal-weighted.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | headline, numerals, row labels |
| muted | #4f5d75 | eyebrow, supporting copy |
| accent | #eb6c36 | header rule + the one lead numeral — 1–2 elements ONLY |
| hairline | #d5d8e0 | row dividers |

The accent marks the header rule and a single lead statistic. Every other numeral stays ink — a stat list where all five numbers are coloured has no lead, and reads as decoration rather than emphasis.

## Typography

No external fonts — Studiograph frames cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| kicker | 'JetBrains Mono', ui-monospace, monospace | 13px, 500, 0.18em caps | top eyebrow |
| title | 'Source Serif 4', Georgia, serif | 56px, 400, −0.02em | headline |
| numeral | 'Source Serif 4', Georgia, serif | 72px, 400, −0.02em | per-row stat |
| row-label | 'DM Sans', system-ui, sans-serif | 22px, 500 | per-row headline |
| row-body | 'DM Sans', system-ui, sans-serif | 17px, 400 | per-row description |

Numerals stay large — that is the whole point of the format — but they are set in the serif at a normal weight, not a display sans at 800. Size carries the emphasis; weight does not have to.

## Layout

Default canvas **1080×1350** (portrait — carousel/story-friendly). A short accent rule, mono kicker and serif title sit at the top; below them the rows fill the remaining height as an even editorial table — each row is `flex:1` with its content vertically centred and a hairline beneath, the last hairline suppressed. Fixed-width numeral column on the left, label + body on the right. Works equally well as a wide banner (1600×640) by laying rows out in a horizontal row of cards instead of a vertical stack — same content units, different container `display`.

Letting the rows stretch to fill the canvas (rather than stacking to their natural height and leaving a void at the bottom) is what keeps density around 4/10 without the page reading as unfinished.

### `<style>`

```html
<style>
:root{
  --sl-paper:#f5f5f5; --sl-ink:#2d3142; --sl-muted:#4f5d75;
  --sl-accent:#eb6c36; --sl-hairline:#d5d8e0;
  --sl-serif:'Source Serif 4',Georgia,serif;
  --sl-sans:'DM Sans',system-ui,sans-serif;
  --sl-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.sl{width:1080px;height:1350px;background:var(--sl-paper);color:var(--sl-ink);
  font-family:var(--sl-sans);padding:96px 88px;display:flex;flex-direction:column;}
.sl-rule{width:40px;height:2px;background:var(--sl-accent);margin-bottom:22px;}
.sl-kicker{font-family:var(--sl-mono);font-size:13px;font-weight:500;text-transform:uppercase;
  letter-spacing:.18em;color:var(--sl-muted);margin-bottom:18px;}
.sl-title{font-family:var(--sl-serif);font-weight:400;font-size:56px;line-height:1.1;
  letter-spacing:-.02em;max-width:16ch;margin-bottom:56px;}
.sl-track{flex:1;display:flex;flex-direction:column;border-top:1px solid var(--sl-hairline);}
.sl-row{flex:1;display:grid;grid-template-columns:220px 1fr;gap:44px;
  align-content:center;align-items:start;border-bottom:1px solid var(--sl-hairline);}
.sl-row:last-child{border-bottom:none;}
.sl-numeral{font-family:var(--sl-serif);font-weight:400;font-size:72px;line-height:1;
  letter-spacing:-.02em;}
.sl-row:first-child .sl-numeral{color:var(--sl-accent);}
.sl-label{font-size:22px;font-weight:500;line-height:1.3;margin-bottom:10px;}
.sl-rowbody{font-size:17px;line-height:1.55;color:var(--sl-muted);max-width:44ch;}
</style>
```

### Example

```html
<div class="sl">
  <div class="sl-rule"></div>
  <div class="sl-kicker">By the numbers · Q2 2026</div>
  <h1 class="sl-title">Three stats worth screenshotting</h1>
  <div class="sl-track">
    <div class="sl-row">
      <div class="sl-numeral">63%</div>
      <div><div class="sl-label">of teams now automate their weekly report</div>
        <p class="sl-rowbody">Up from 41% a year ago, per our platform usage data.</p></div>
    </div>
    <div class="sl-row">
      <div class="sl-numeral">2.4×</div>
      <div><div class="sl-label">faster time-to-insight</div>
        <p class="sl-rowbody">Median time from raw data to a shared dashboard.</p></div>
    </div>
    <div class="sl-row">
      <div class="sl-numeral">12</div>
      <div><div class="sl-label">connected data sources, on average</div>
        <p class="sl-rowbody">Most teams stopped adding tools after month three.</p></div>
    </div>
  </div>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry, one frame at 1080×1350, background `#f5f5f5`. Put the `<style>` block in `shared.head` and the `.sl` markup in the frame content. Keep rows to 3–5 — past that, either shrink `sl-numeral` and `sl-row` padding or split into a second artboard; a stat list that scrolls past one screen defeats the format. See the working example artboard at `infographics/examples/stat-row-list-preview`.

## Source & license

Layout concept adapted from the **Row List** template category in [AntV Infographic](https://github.com/antvis/Infographic) (`@antv/infographic`) — the framework's own README example is literally this shape (`list-row-simple-horizontal-arrow`: a numbered/stepped horizontal row list). MIT-licensed; license verified against the repo's `LICENSE` file on 2026-08-14. Original static HTML/CSS implementation for Studiograph.
