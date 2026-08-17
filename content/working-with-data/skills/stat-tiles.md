---
entity_type: skill
entity_id: stat-tiles
created_at: '2026-08-16T23:24:26.713Z'
updated_at: '2026-08-16T23:33:02.791Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - data
  - template
  - kpi
  - stat
  - dashboard
  - metrics
name: Stat Tiles
description: >-
  A row of KPI tiles — big number, label, optional delta against a named period,
  optional sparkline. Use when the honest answer is one number and one
  comparison, not a chart.
applies_to:
  - artboard
  - dashboard
  - presentation
  - document
  - app
loading: on-demand
status: draft
---
# Stat Tiles

A row of small tiles, each carrying exactly one number: a big value, a plain label, an optional delta against a named period, and an optional sparkline. Stat tiles are the form to reach for when the honest answer to "what chart should this be?" is *not a chart* — when the reader needs one number and one comparison, a tile says it faster and more accurately than any plot can.

The rules below follow the data-visualization method: pick the form before the color, keep marks thin and chrome recessive, and never let color carry meaning on its own.

## When to use

**A stat tile beats a chart entirely when the data is one number and at most one comparison.** A single current value, a headline total, a rate against last month — a chart of one value is just a number wearing an axis. The two clearest cases:

- **A one-bar bar chart is a stat tile.** One bar has nothing to compare itself to; the axis is doing no work.
- **A two-slice pie is a stat tile.** "68% / 32%" is one number and its complement. Print the number.

Beyond that, reach for tiles when:

- **A KPI row** — three to five headline numbers in *different units* (revenue, signups, churn rate). They cannot share an axis, so they should not share a chart.
- **A hero figure** — the single number a page leads with, set large. Exactly one per view; a second hero means neither is the hero.

**Do not use tiles when you need the shape of the data.** A delta compresses a whole period into one ratio and hides the path it took — a metric that dipped hard in week two and recovered shows the same "+4% vs last month" as one that climbed steadily. If the reader must see seasonality, a crossover, a distribution, or *when* something turned, that is a line or a bar chart. The tile can still sit above it carrying the headline.

Two more limits worth holding: past about six tiles a row becomes a table the reader has to scan anyway — so make it a table. And when several values share a unit *and* a scale (revenue by region, say), tiles force the reader to do the comparison arithmetic themselves; that is a bar chart's job.

## Anatomy of a tile

Four parts, always in this order, top to bottom.

| Part | Required | Rules |
|---|---|---|
| **Label** | yes | Sentence case, no trailing colon, one line. Names the metric *and* its period ("Revenue · Q4") so the number is never ambiguous. |
| **Value** | yes | One number, auto-compacted (`1,284` · `12.9K` · `$4.2M`). Unit symbol attached to the number, never floated as a separate word. No decimals the reader would not act on. |
| **Delta** | optional | Signed, with an arrow glyph and a **named** comparison period — `▲ +20.7% vs Q3`, never a bare `+20.7%`. See *Deltas and status*. |
| **Sparkline** | optional | ~12 points, no axis, no gridlines, no point labels. Line in the de-emphasis gray with the current point in the accent. Below about six points, drop it — the delta already says it. |

Three rules the anatomy depends on:

- **The tiles share a baseline.** Every value in a row sits on one horizontal line, so the eye reads across without re-focusing. Get this from a CSS `subgrid` (the row owns the rows; each tile spans them), not from hand-tuned heights — a two-line label in one tile must not shove that tile's number out of line.
- **Each sparkline is scaled to its own range.** Tiles in a row hold different units, so their sparks share no y-axis. Never imply otherwise by drawing an axis, a zero line, or a shared gridline across them.
- **A tile has no legend and no tooltip.** It is the one form that ships without a hover layer — everything it knows is already printed on it.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | `#f5f5f5` | canvas |
| ink | `#2d3142` | values, hero figure |
| muted | `#4f5d75` | labels, period text |
| accent | `#eb6c36` | the current point on a sparkline, or one focal tile — never both |
| hairline | `#d5d8e0` | the rule above each tile |
| trend | `#a7adbb` | sparkline stroke (de-emphasis gray) |
| delta good | `#006300` | reinforces an arrow + sign, never used alone |
| delta bad | `#d03b3b` | reinforces an arrow + sign, never used alone |

The accent appears **once per tile at most** — the current point on the sparkline, or a single focal tile in a row. It never colors the value text: a number in the accent looks like a warning, and text should wear text colors regardless. And when the tiles sit on a dashboard whose charts use the categorical palette, drop the accent from the sparklines entirely — the accent is the same orange as categorical slot 2, so an accented point reads as whichever entity holds that slot.

The two delta colors come from the reserved **status** palette. Status colors mean good / warning / serious / critical and nothing else — they are never recycled as a series color in a chart on the same page, and a series color never stands in for status. Stat tiles are exactly where this gets violated, because a tile is the one place where a color really does mean "good" or "bad."

Tiles carry no cards, no shadows, and no boxes. A single hairline above each tile does all the separating; anything more is chrome competing with the number.

## Typography

No external fonts — Studiograph frames cannot fetch webfonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | `'JetBrains Mono', ui-monospace, monospace` | 11px, 500, 0.18em caps | kicker above the row |
| headline | `'Source Serif 4', Georgia, serif` | 32px, 400 | section title |
| label | `'DM Sans', system-ui, sans-serif` | 13px, 500 | metric name |
| value | `'JetBrains Mono', ui-monospace, monospace` | 38px, 500, −0.03em | the number |
| hero value | `'JetBrains Mono', ui-monospace, monospace` | 84px, 500, −0.04em | the one lead number |
| delta | `'JetBrains Mono', ui-monospace, monospace` | 12px, 500 | arrow + signed value |

**Numerals are monospaced, with `font-variant-numeric: tabular-nums`, and this is deliberate.** Two things depend on it. Tiles sit in a row and are read *across*, so digits of equal width let the eye compare magnitudes without re-measuring each number. And a value that refreshes — a live dashboard, a filter change — must not reflow: proportional digits make `1` narrower than `8`, so every update nudges the number sideways and the whole row twitches.

The trade is real and worth naming: equal-width digits make a short number like `121` look slightly loose at display sizes, which is why the general advice for a large standalone figure is proportional figures. The house answer is to keep the tabular figures and tighten the tracking instead (−0.03em on values, −0.04em on the hero), never to switch the hero to a different face. The hero figure stays in the numerals mono; a serif or display face on a hero number reads as decoration rather than data.

## Layout

Default canvas **1200 × auto**, 56px padding. The KPI row is a four-column grid with a 24px gutter; each tile is a `subgrid` spanning the row's four tracks (label, value, delta, sparkline) so all four parts line up across every tile. Each tile is topped by a hairline — the rule, not a border box, is what separates them. A hero figure is a separate block below, set off by its own hairline, with the number on the left and one line of context on the right.

### `<style>`

```html
<style>
:root{
  --st-paper:#f5f5f5; --st-ink:#2d3142; --st-muted:#4f5d75;
  --st-accent:#eb6c36; --st-hairline:#d5d8e0; --st-trend:#a7adbb;
  --st-good:#006300; --st-bad:#d03b3b;
  --st-serif:'Source Serif 4',Georgia,serif;
  --st-sans:'DM Sans',system-ui,sans-serif;
  --st-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.st{width:1200px;background:var(--st-paper);color:var(--st-ink);
  font-family:var(--st-sans);padding:56px;}
.st-eyebrow{font-family:var(--st-mono);font-size:11px;font-weight:500;
  letter-spacing:.18em;text-transform:uppercase;color:var(--st-muted);margin-bottom:8px;}
.st-title{font-family:var(--st-serif);font-size:32px;font-weight:400;
  letter-spacing:-.02em;line-height:1.15;margin-bottom:28px;}
/* KPI row — subgrid keeps every value on one baseline */
.st-row{display:grid;grid-template-columns:repeat(4,1fr);gap:0 24px;
  grid-template-rows:auto auto auto auto;}
.st-tile{grid-row:span 4;display:grid;grid-template-rows:subgrid;row-gap:12px;
  border-top:1px solid var(--st-hairline);padding-top:16px;}
.st-label{font-size:13px;font-weight:500;color:var(--st-muted);line-height:1.3;}
.st-value{font-family:var(--st-mono);font-variant-numeric:tabular-nums;
  font-size:38px;font-weight:500;line-height:1;letter-spacing:-.03em;}
.st-delta{font-family:var(--st-mono);font-variant-numeric:tabular-nums;
  font-size:12px;font-weight:500;display:flex;align-items:baseline;gap:6px;flex-wrap:wrap;}
.st-delta--good{color:var(--st-good);}
.st-delta--bad{color:var(--st-bad);}
.st-vs{color:var(--st-muted);font-weight:400;font-size:11px;letter-spacing:.02em;}
.st-spark{width:100%;height:auto;display:block;align-self:end;}
.st-spark polyline{fill:none;stroke:var(--st-trend);stroke-width:2;
  stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke;}
/* Hero figure — exactly one per view */
.st-hero{border-top:1px solid var(--st-hairline);padding-top:22px;margin-top:48px;
  display:grid;grid-template-columns:auto 1fr;gap:0 44px;align-items:end;}
.st-hero-value{font-family:var(--st-mono);font-variant-numeric:tabular-nums;
  font-size:84px;font-weight:500;line-height:.95;letter-spacing:-.04em;}
.st-hero-note{font-size:15px;line-height:1.55;color:var(--st-muted);
  max-width:46ch;padding-bottom:10px;}
</style>
```

### Example — a four-up KPI row

Two tiles shown; the row holds four, all the same shape. The second is the important one: churn went **down**, and down is **good** — the arrow follows the direction, the color follows the judgement.

```html
<div class="st">
  <p class="st-eyebrow">Quarterly performance · Q4 2026</p>
  <h1 class="st-title">Where the quarter landed</h1>
  <div class="st-row">

    <div class="st-tile">
      <div class="st-label">Revenue · Q4</div>
      <div class="st-value">$742,300</div>
      <div class="st-delta st-delta--good">
        <span aria-hidden="true">▲</span><span>+20.7%</span><span class="st-vs">vs Q3</span>
      </div>
      <svg class="st-spark" viewBox="0 0 200 36" role="img"
           aria-label="Monthly revenue, last 12 months, trending up">
        <polyline points="4,30.2 21.5,32 38.9,26.5 56.4,23.6 73.8,26.1 91.3,22.6
                          108.7,18.9 126.2,14.6 143.6,18 161.1,10.8 178.5,12.1 196,4"/>
        <circle cx="196" cy="4" r="4" fill="#eb6c36" stroke="#f5f5f5" stroke-width="2"/>
      </svg>
    </div>

    <div class="st-tile">
      <div class="st-label">Churn rate · Q4</div>
      <div class="st-value">3.9%</div>
      <div class="st-delta st-delta--good">
        <span aria-hidden="true">▼</span><span>−0.3 pt</span>
        <span class="st-vs">vs Q3 · lower is better</span>
      </div>
      <svg class="st-spark" viewBox="0 0 200 36" role="img"
           aria-label="Monthly churn rate, last 12 months, trending down">
        <polyline points="4,4 21.5,7.7 38.9,15.2 56.4,11.5 73.8,17.1 91.3,20.8
                          108.7,18.9 126.2,24.5 143.6,26.4 161.1,24.5 178.5,30.1 196,32"/>
        <circle cx="196" cy="32" r="4" fill="#eb6c36" stroke="#f5f5f5" stroke-width="2"/>
      </svg>
    </div>

    <!-- two more tiles, same shape -->
  </div>
</div>
```

### Example — a single hero number

One number, set large, with a line of context beside it rather than beneath. No sparkline: at hero scale a 200px-wide trend line reads as a squiggle, and the sentence does the job better.

```html
<div class="st">
  <div class="st-hero">
    <div>
      <div class="st-label" style="margin-bottom:14px;">Total revenue · 2026</div>
      <div class="st-hero-value">$2.29M</div>
    </div>
    <p class="st-hero-note">
      Up 75% on 2025, with every region contributing growth in all four quarters.
      North America remains 41% of the total.
    </p>
  </div>
</div>
```

## Deltas and status

A delta is the most misread element on a dashboard, because two independent facts are hiding in one badge: **which way the number moved**, and **whether that is good**. Encode them separately.

- **The arrow carries direction.** `▲` for up, `▼` for down — always literally the direction the number moved, never "the direction we like."
- **The sign carries magnitude.** `+20.7%`, `−0.3 pt`. Points and percent are different things; say which. A rate that fell from 4.2% to 3.9% dropped **0.3 points**, not 0.3 percent.
- **The color carries the judgement, and only reinforces it.** Green for a good move, red for a bad one — decided by the metric, not by the arrow. Churn down is good and gets a down arrow in green. Cost up is bad and gets an up arrow in red. When the two disagree with the reader's default expectation, say so in words: `vs Q3 · lower is better`.
- **Never color alone.** Remove all the color from a tile and the delta must still read correctly: arrow, sign, and the named period survive greyscale, colorblind vision, forced-colors mode, and a black-and-white print. The color is the fourth cue, not the first.
- **Always name the comparison.** `+20.7%` on its own is unfalsifiable. Versus what — last quarter, last year, plan, the same quarter last year? Put it in the tile.
- **A delta with no meaningful baseline is worse than no delta.** First month of data, a metric that reset, a period still in progress — show `—` and a short note instead of inventing a comparison.
- **Neutral is a real state.** When a move is within noise, or the metric has no good direction (headcount, number of regions), use the muted text color and no green/red at all.

## Do's and Don'ts

**Do**

- Reach for a tile whenever a chart would show a single value — the number *is* the chart.
- Keep every value in a row on one baseline, from a subgrid rather than fixed heights.
- Name the comparison period in the tile itself.
- Compact big numbers (`$4.2M`), and keep the unit attached to the number.
- Let one hairline per tile do all the separating.
- Give a tile a plain-text alternative: the label and value are already text, so leave them as text — never render a tile as an image.

**Don't**

- Don't draw a one-bar bar chart, a two-slice pie, or a gauge where a tile belongs.
- Don't ship a delta that means anything only in color.
- Don't put an axis, a zero line, or point labels on a sparkline — it is a shape, not a chart.
- Don't share a sparkline scale across tiles in different units.
- Don't run more than about six tiles in a row; make it a table.
- Don't reuse the green/red status colors as chart series colors elsewhere on the page, or a series color as a delta cue.
- Don't set the hero figure in the serif or any display face, and don't put two heroes on one view.
- Don't stack tiles into a decorative grid of cards with shadows and borders — the chrome outweighs the data.

## Building it in Studiograph

Create an artboard entry with one frame, geometry width 1200 and height `auto`, background `#f5f5f5`. Put the `<style>` block in the shared head and the `.st` markup in the frame content. A KPI row usually rides on top of a dashboard rather than standing alone — see the **Dashboard Layout** skill for how the row composes with a chart grid beneath it. A working example is at `working-with-data/examples/stat-tiles-preview`.

## Fonts

Studiograph frames cannot fetch external fonts, and asset-URL font files are not portable between folders — so every family is declared as a local stack with real fallbacks, and nothing is loaded over the network.

| Role | Stack |
|---|---|
| Headline | `'Source Serif 4', Georgia, serif` |
| Body / labels | `'DM Sans', system-ui, sans-serif` |
| **Numerals** | `'JetBrains Mono', ui-monospace, monospace` with `font-variant-numeric: tabular-nums` |

Every number a reader might compare or watch update — tile values, deltas, hero figures, axis ticks, table cells — is set in the numerals stack with tabular figures. If `JetBrains Mono` is unavailable the stack falls through to the platform's UI monospace, which is also tabular by construction, so alignment survives the fallback.
