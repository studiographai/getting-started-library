---
entity_type: skill
entity_id: dashboard-layout
created_at: '2026-08-16T23:26:31.300Z'
updated_at: '2026-08-16T23:32:53.188Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - data
  - template
  - dashboard
  - layout
  - grid
  - charts
name: Dashboard Layout
description: >-
  How to compose stat tiles and several charts into one coherent canvas — the
  KPI row, the chart grid, reading order, one shared filter row, and the
  consistency rules that make panels agree with each other.
applies_to:
  - artboard
  - dashboard
  - app
  - presentation
  - document
loading: on-demand
status: draft
---
# Dashboard Layout

A dashboard is not a folder of charts on one page — it is a single argument told in panels. This skill covers the composition: a KPI row across the top, a chart grid beneath it, one filter row that scopes everything, and the consistency rules that stop four correct panels from adding up to one misleading page.

Individual panels are built with the chart skills (**Bar Chart**, **Line Chart**) and the **Stat Tiles** skill. What follows is only how they sit together.

## When to use

Reach for a dashboard layout when a reader needs to **monitor** several related measures of one subject, repeatedly, and would otherwise open four separate charts and hold them in their head. Recurring reviews, health pages, quarterly readouts, anything someone returns to weekly.

**A single chart is better** when there is one question. Most "dashboards" are one chart plus context that got promoted; if you can name the one thing the reader must see, build that chart well and put the supporting numbers in a caption. A dashboard with a single real panel and three panels of filler is worse than the one panel alone.

**A short document is better** when the answer is already known and needs explaining. A dashboard shows state and lets the reader draw conclusions; when *you* have the conclusion, write it, and use charts as evidence inside the prose. A dashboard is a poor place to make an argument — it has no order of sentences, only an order of panels.

Also skip it when the panels would not share a filter, a time range, or a subject. Four unrelated charts on one canvas is a contact sheet, and each chart is better off on its own page.

## The grid

One canvas, three horizontal bands, top to bottom.

| Band | What it holds | Rules |
|---|---|---|
| **Header + filters** | Title, one line of context, and the filter row | Filters live here and nowhere else — one row, full width, scoping everything below |
| **KPI row** | 3–5 stat tiles, edge to edge | Equal columns; every value on a shared baseline; the headline numbers only |
| **Chart grid** | 2 columns × 2 rows of panels | 24px gutters; each panel topped by a hairline; no cards, no shadows |

**Span rules.** The grid is two columns wide at 1400px. A panel spans **one** column by default. A panel earns a **full-width span** only when its x-axis needs the room — a long time series, twelve or more categories, a stacked bar with many segments. Never span a panel just to fill a gap: an odd number of panels ends with one full-width panel on the last row, or with three panels and honest empty space, never with one panel stretched to look tidy.

Sizes that work: 1400px canvas, 48px padding, two 640px columns. Below about 1100px the grid collapses to a single column and the KPI row wraps to two rows of two — the reading order below still holds, just vertically. Do not scale panels down to keep two columns; a 320px-wide line chart with six labels is unreadable at any resolution.

**Keep panels the same height.** Panels in a row share a top hairline and a chart height, so the eye tracks across without re-anchoring. If one chart needs to be taller, it belongs on its own row, full width.

## Reading order

Readers scan a canvas top-left first, then right, then down. Put the content in that order and the dashboard needs no instructions.

1. **Top-left is the most important number, always.** In the KPI row, the leftmost tile carries the metric the dashboard exists to report. Everything else is context for it.
2. **The KPI row answers "how are we doing?" before any chart asks the reader to interpret anything.** Someone with ten seconds should be able to read the top band and stop.
3. **Top-left panel is the primary trend** — the chart that explains the leading KPI. It is the second thing everyone looks at, so it gets the clearest chart in the set.
4. **Right and downward is decomposition and diagnosis** — the same story broken out by segment, region, or cohort. Each panel should answer a question the panel before it provoked.
5. **The bottom band is reference** — slower-moving detail, per-item tables, definitions, source and freshness notes. Nobody scrolls to be surprised.

Two smaller ordering rules: the tiles and the panels should use the **same order for the same dimension** everywhere (if the KPI row runs Revenue, Signups, Churn, keep that order in any panel that repeats those measures), and time always runs **left to right**, in every panel, without exception.

## Consistency rules

This is what separates a dashboard from four charts. Break any of these and the panels quietly contradict each other.

**Color follows the entity, never its rank.** Each entity — region, plan, cohort — is assigned a categorical slot once, and keeps that hue in every panel, every filter state, and every export. If Europe is orange in the trend chart, it is orange in the bar chart and orange in the table. The failure mode to watch for is *recolor-on-filter*: coloring by current row order, so filtering out a series repaints the survivors and a reader who learned "Europe is orange" is now being misled.

Assign from the validated categorical order, in order, never cycled:

| Slot | Hex | Assigned to |
|---|---|---|
| 1 | `#2a78d6` | first entity |
| 2 | `#eb6834` | second |
| 3 | `#1baf7a` | third |
| 4 | `#eda100` | fourth |
| 5 | `#e87ba4` | fifth |
| 6 | `#008300` | sixth |
| 7 | `#4a3aa7` | seventh |
| 8 | `#e34948` | eighth |

Past eight there is no ninth color — fold the tail into "Other", or facet into small multiples. A generated ninth hue is indistinguishable from an existing slot under colorblind vision. Several of these slots sit below 3:1 contrast against the paper, so any panel using them ships **visible labels or a table view**; that is not optional relief, it is the condition on using the palette at all.

**One legend for the whole dashboard, not one per panel.** Shared color meaning is a property of the canvas. Put a single legend directly above the chart grid, and let every panel inherit it. A per-panel legend implies per-panel color meaning, which is the thing you are trying to prevent.

**A single series is ink, not a color.** When a panel plots one thing, use the ink `#2d3142` with the accent `#eb6c36` on the one mark that matters. Reserving color for identity means an ink chart reads instantly as "this is not broken out by entity."

**Watch the accent for collisions with a series hue.** The house accent `#eb6c36` is, to the eye, the same orange as categorical slot 2 `#eb6834`. On a single-chart page that never matters; on a dashboard where slot 2 is assigned to an entity, an accented mark in another panel reads as *that entity*. When the two are on one canvas, do emphasis with weight instead of color — the context marks in a de-emphasis grey (`#a7adbb`) and the focal mark in ink. Emphasis by ink-against-grey is the safer default in a dashboard generally, because it never competes with identity.

**Consistent scales.** Panels that plot the same measure share a y-axis range, even when one panel's data would fit in half of it — otherwise two identical-looking charts describe very different magnitudes. Panels that plot *different* measures must look different enough that nobody reads them as comparable. Same rule for units: pick one currency, one rounding, one date format, and hold it across the canvas.

**One axis per chart. No dual-axis anywhere.** Two y-scales on one plot invent a correlation that isn't in the data, because the alignment between the two scales is arbitrary — the classic case is users (0–30k) plotted against sessions (0–800k), which looks like a discovered relationship and is a drawing accident. When two measures must be compared: two panels side by side, small multiples, or index both series to 100 at a common starting point and plot them on **one** axis. There is no exception, and a second axis is never the fix for a crowded chart.

**Every panel says what it is.** A title, and where the number is derived (net of refunds, excluding internal accounts), in the panel. A dashboard is read out of context by people who did not build it.

**One "as of" for the canvas.** A single freshness stamp in the footer, not per panel. If panels genuinely have different lag, say so there — but panels that update on different schedules usually belong on different pages.

## Layout

Default canvas **1400 × auto**, 48px padding. Header, then the filter row between two hairlines, then the KPI row, then a shared legend, then the 2×2 grid, then a footer carrying the source, the freshness stamp, and the table-view toggle. Panels are hairline-topped blocks, never cards; the grid gutter and the hairline do all the separating.

### `<style>`

```html
<style>
:root{
  --db-paper:#f5f5f5; --db-ink:#2d3142; --db-muted:#4f5d75;
  --db-accent:#eb6c36; --db-hairline:#d5d8e0; --db-axis:#b9bfcc;
  --db-trend:#a7adbb; --db-good:#006300; --db-bad:#d03b3b;
  --db-s1:#2a78d6; --db-s2:#eb6834; --db-s3:#1baf7a; --db-s4:#eda100;
  --db-serif:'Source Serif 4',Georgia,serif;
  --db-sans:'DM Sans',system-ui,sans-serif;
  --db-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.db{width:1400px;background:var(--db-paper);color:var(--db-ink);
  font-family:var(--db-sans);padding:48px;}
.db-eyebrow{font-family:var(--db-mono);font-size:11px;font-weight:500;
  letter-spacing:.18em;text-transform:uppercase;color:var(--db-muted);margin-bottom:8px;}
.db-title{font-family:var(--db-serif);font-size:34px;font-weight:400;
  letter-spacing:-.02em;line-height:1.15;}
.db-sub{font-size:14px;color:var(--db-muted);margin-top:6px;}
/* filter row — one row, above everything it scopes */
.db-filters{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:24px;
  border-top:1px solid var(--db-hairline);border-bottom:1px solid var(--db-hairline);
  padding:12px 0;}
.db-flabel{font-family:var(--db-mono);font-size:11px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--db-muted);}
.db-chip{font-family:var(--db-mono);font-size:11px;letter-spacing:.06em;
  text-transform:uppercase;padding:6px 12px;border:1px solid var(--db-hairline);
  border-radius:999px;background:transparent;color:var(--db-muted);cursor:pointer;}
.db-chip[aria-pressed="true"]{border-color:var(--db-ink);color:var(--db-ink);
  background:rgba(45,49,66,.06);}
.db-fdiv{width:1px;height:20px;background:var(--db-hairline);margin:0 6px;}
.db-push{margin-left:auto;font-family:var(--db-mono);font-size:11px;color:var(--db-muted);}
/* KPI row */
.db-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:0 24px;
  grid-template-rows:auto auto auto;margin:32px 0 36px;}
.db-tile{grid-row:span 3;display:grid;grid-template-rows:subgrid;row-gap:10px;
  border-top:1px solid var(--db-hairline);padding-top:14px;}
.db-tlabel{font-size:13px;font-weight:500;color:var(--db-muted);}
.db-tvalue{font-family:var(--db-mono);font-variant-numeric:tabular-nums;
  font-size:34px;font-weight:500;line-height:1;letter-spacing:-.03em;}
.db-tdelta{font-family:var(--db-mono);font-variant-numeric:tabular-nums;
  font-size:12px;font-weight:500;display:flex;align-items:baseline;gap:6px;flex-wrap:wrap;}
.db-tdelta--good{color:var(--db-good);} .db-tdelta--bad{color:var(--db-bad);}
.db-vs{color:var(--db-muted);font-weight:400;font-size:11px;}
/* one legend for the whole canvas */
.db-legend{display:flex;align-items:center;gap:22px;flex-wrap:wrap;margin-bottom:16px;}
.db-key{display:inline-flex;align-items:center;gap:8px;font-size:12px;color:var(--db-muted);}
.db-swatch{width:14px;height:3px;border-radius:2px;}
/* chart grid */
/* panels span two tracks and subgrid them, so captions and plots align across a row */
.db-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:32px 24px;
  grid-template-rows:auto auto auto auto;}
.db-panel{grid-row:span 2;display:grid;grid-template-rows:subgrid;row-gap:10px;
  border-top:1px solid var(--db-hairline);padding-top:14px;}
.db-panel--wide{grid-column:1 / -1;}
.db-ptitle{font-size:15px;font-weight:600;line-height:1.3;}
.db-pnote{font-size:12px;color:var(--db-muted);margin-top:3px;}
.db-panel svg{width:100%;height:auto;display:block;align-self:start;}
/* shared chart chrome */
.db-panel text{font-family:var(--db-sans);}
text.ax{font-family:var(--db-mono);font-size:10px;fill:var(--db-muted);letter-spacing:.03em;}
text.vl{font-family:var(--db-mono);font-size:10px;font-weight:500;fill:var(--db-ink);
  font-variant-numeric:tabular-nums;}
text.dl{font-size:10px;fill:var(--db-muted);}
line.grid{stroke:var(--db-hairline);stroke-width:1;}
line.base{stroke:var(--db-axis);stroke-width:1;}
polyline.ln{fill:none;stroke-width:2;stroke-linejoin:round;stroke-linecap:round;
  vector-effect:non-scaling-stroke;}
.db-foot{display:flex;gap:20px;align-items:center;flex-wrap:wrap;margin-top:32px;
  border-top:1px solid var(--db-hairline);padding-top:12px;
  font-size:12px;color:var(--db-muted);}
.db-foot button{font-family:var(--db-mono);font-size:11px;letter-spacing:.06em;
  text-transform:uppercase;padding:5px 11px;border:1px solid var(--db-hairline);
  border-radius:999px;background:transparent;color:var(--db-muted);cursor:pointer;}
</style>
```

### Example — the dashboard shell

The panel bodies below are placeholder SVGs so the structure stays readable; build the real ones with the **Bar Chart** and **Line Chart** skills, keeping the chrome classes (`.ax`, `.vl`, `.grid`, `.base`, `.ln`) so every panel shares one visual language.

```html
<div class="db">
  <p class="db-eyebrow">Sample data · updated 16 Aug 2026</p>
  <h1 class="db-title">Quarterly performance</h1>
  <p class="db-sub">Signups, revenue and churn across four regions.</p>

  <!-- one filter row, scoping everything below it -->
  <div class="db-filters">
    <span class="db-flabel">Range</span>
    <button class="db-chip" data-group="range" aria-pressed="false">Last 4 quarters</button>
    <button class="db-chip" data-group="range" aria-pressed="true">FY 2026</button>
    <span class="db-fdiv"></span>
    <span class="db-flabel">Region</span>
    <button class="db-chip" data-group="region" aria-pressed="true">All</button>
    <button class="db-chip" data-group="region" aria-pressed="false">North America</button>
    <span class="db-push">As of 16 Aug 2026</span>
  </div>

  <!-- KPI row: leftmost tile is the metric the page exists to report -->
  <div class="db-kpis">
    <div class="db-tile">
      <div class="db-tlabel">Revenue · Q4</div>
      <div class="db-tvalue">$742,300</div>
      <div class="db-tdelta db-tdelta--good">
        <span aria-hidden="true">▲</span><span>+20.7%</span><span class="db-vs">vs Q3</span>
      </div>
    </div>
    <div class="db-tile">
      <div class="db-tlabel">Churn rate · Q4</div>
      <div class="db-tvalue">3.9%</div>
      <div class="db-tdelta db-tdelta--good">
        <span aria-hidden="true">▼</span><span>−0.3 pt</span>
        <span class="db-vs">vs Q3 · lower is better</span>
      </div>
    </div>
    <!-- two more tiles -->
  </div>

  <!-- one legend for every panel below -->
  <div class="db-legend">
    <span class="db-key"><span class="db-swatch" style="background:#2a78d6"></span>North America</span>
    <span class="db-key"><span class="db-swatch" style="background:#eb6834"></span>Europe</span>
    <span class="db-key"><span class="db-swatch" style="background:#1baf7a"></span>Asia Pacific</span>
    <span class="db-key"><span class="db-swatch" style="background:#eda100"></span>Latin America</span>
  </div>

  <div class="db-grid">
    <figure class="db-panel">
      <figcaption>
        <div class="db-ptitle">Total revenue by quarter</div>
        <div class="db-pnote">One series — context in grey, the current quarter in ink.</div>
      </figcaption>
      <svg viewBox="0 0 600 220" role="img" aria-label="Total revenue by quarter, rising">
        <line class="base" x1="62" y1="178" x2="520" y2="178"/>
        <rect x="107" y="91" width="24" height="87" fill="#a7adbb"/>
        <rect x="222" y="74" width="24" height="104" fill="#a7adbb"/>
        <rect x="336" y="52" width="24" height="126" fill="#a7adbb"/>
        <rect x="451" y="26" width="24" height="152" fill="#2d3142"/>
      </svg>
    </figure>

    <figure class="db-panel">
      <figcaption>
        <div class="db-ptitle">Signups by region</div>
        <div class="db-pnote">Four series — each region keeps its hue in every panel.</div>
      </figcaption>
      <svg viewBox="0 0 600 220" role="img" aria-label="Signups by region, all four rising">
        <line class="base" x1="62" y1="178" x2="520" y2="178"/>
        <polyline class="ln" stroke="#2a78d6" points="119,76 234,62 348,47 463,28"/>
        <polyline class="ln" stroke="#eb6834" points="119,105 234,96 348,81 463,67"/>
        <polyline class="ln" stroke="#1baf7a" points="119,128 234,117 348,104 463,88"/>
        <polyline class="ln" stroke="#eda100" points="119,155 234,150 348,143 463,135"/>
      </svg>
    </figure>

    <!-- two more panels complete the 2×2 -->
  </div>

  <div class="db-foot">
    <span>Source: Sample Data — Quarterly Performance</span>
    <span>·</span><span>Revenue net of refunds</span>
    <button type="button">Table view</button>
  </div>
</div>
```

### Example — the filter row on its own

One row, above everything it scopes, date range first. Selection is carried by the border and the `aria-pressed` state, not by color alone, so it survives greyscale and forced-colors. The handler re-renders **every** panel against the same slice — that shared re-render is the whole point of putting the filters in one place.

```html
<div class="db-filters">
  <span class="db-flabel">Range</span>
  <button class="db-chip" data-group="range" aria-pressed="true">Last 30 days</button>
  <button class="db-chip" data-group="range" aria-pressed="false">Last 90 days</button>
  <button class="db-chip" data-group="range" aria-pressed="false">Year to date</button>
  <span class="db-fdiv"></span>
  <span class="db-flabel">Segment</span>
  <button class="db-chip" data-group="segment" aria-pressed="true">All plans</button>
  <button class="db-chip" data-group="segment" aria-pressed="false">Enterprise</button>
  <span class="db-push">As of 16 Aug 2026</span>
</div>

<script>
document.querySelectorAll('.db-chip[data-group]').forEach(function (chip) {
  chip.addEventListener('click', function () {
    var group = chip.dataset.group;
    document.querySelectorAll('.db-chip[data-group="' + group + '"]').forEach(function (c) {
      c.setAttribute('aria-pressed', String(c === chip));
    });
    // Re-render every panel against the same slice — never one panel at a time.
    // Hold the previous render at reduced opacity while data loads; no skeletons.
  });
});
</script>
```

## Interaction

- **Filters live in one row, above the charts.** Never inside a panel, never per chart. If one panel genuinely needs its own range, it is a different dashboard.
- **Date range first.** It is the control every reader reaches for. Offer presets as rows or chips (today, last 7 / 30 / 90 days, year to date) before any custom range picker — nobody wants to fight a calendar grid for "last 30 days".
- **Filters scope everything below them.** Tiles, charts, and tables all re-render against the same slice, so the numbers on the page always agree with each other. A tile that ignores the filter is a bug that looks like a fact.
- **Refetch keeps the frame.** While data reloads, hold the previous render at reduced opacity. No skeleton flash, no layout jump, no panels popping in at different times.
- **Hover is per panel, and it enhances rather than gates.** Line panels get a crosshair that snaps to the nearest x and a tooltip listing every series at that point; bar and cell panels make each mark its own hit target, sized larger than the painted pixels (about 24px minimum). Keyboard focus shows the same readout as hover.
- **Every value stays reachable without hovering.** Direct labels on the marks that matter, and one table-view toggle in the footer covering the canvas. A tooltip is never the only way to read a number.
- **Legend items may toggle to isolate a series** — but isolating must not repaint anything. The survivors keep their hues.

## Do's and Don'ts

**Do**

- Lead with the KPI row: someone with ten seconds should be able to stop after the top band.
- Put the most important number top-left and the chart that explains it directly below.
- Give every entity one hue and keep it across every panel, filter state, and export.
- Keep one legend, one filter row, one freshness stamp, and one table-view toggle for the whole canvas.
- Hold panels in a row to the same height, and let the last row be honestly short rather than stretched.
- Say what each panel measures and how it is derived, in the panel.

**Don't**

- Don't build a dual-axis panel. Ever. Two measures → two panels, small multiples, or index both to 100 on one axis.
- Don't assign color by rank or row order, and don't let a filter repaint the survivors.
- Don't accent a mark in a hue that is also serving as a series color on the same canvas — emphasise with ink against grey instead.
- Don't put filters inside a chart card, or give each panel its own range.
- Don't vary the y-scale between panels that plot the same measure.
- Don't span a panel across both columns just to fill a gap.
- Don't wrap panels in cards with borders and shadows — a hairline and a gutter separate them at a fraction of the ink.
- Don't reuse the reserved status colors (good / warning / serious / critical) as series colors on the same canvas.
- Don't ship a canvas of eight panels where two would do; every panel must answer a question the reader actually has.

## Building it in Studiograph

Create an artboard entry with one frame, geometry width 1400 and height `auto`, background `#f5f5f5`. Put the `<style>` block in the shared head and the `.db` markup in the frame content, then build each panel with the **Bar Chart** and **Line Chart** skills and the KPI row with **Stat Tiles**, keeping the shared chrome classes so the panels stay one visual system. A working example is at `working-with-data/examples/dashboard-layout-preview`.

## Fonts

Studiograph frames cannot fetch external fonts, so every family is declared as a local stack with real fallbacks and nothing is loaded over the network.

| Role | Stack |
|---|---|
| Headline | `'Source Serif 4', Georgia, serif` |
| Body / panel titles / legends | `'DM Sans', system-ui, sans-serif` |
| **Numerals** | `'JetBrains Mono', ui-monospace, monospace` with `font-variant-numeric: tabular-nums` |

Every number on the canvas — tile values, deltas, axis ticks, direct value labels, table cells — is set in the numerals stack with tabular figures, so axis ticks align down the left edge of a plot, values align across a KPI row, and nothing jitters when a filter changes the data. SVG `<text>` does not inherit the page font, so the chrome classes set the family explicitly.
