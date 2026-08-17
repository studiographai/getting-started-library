---
entity_type: skill
entity_id: bar-chart
created_at: '2026-08-16T23:23:15.265Z'
updated_at: '2026-08-16T23:30:58.428Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - chart
  - data
  - template
  - bar
name: Bar Chart
description: >-
  Magnitude across categories — one thin bar per category growing from a shared
  baseline. Use when the reader must rank or compare sizes, not follow a trend.
applies_to:
  - chart
  - artboard
  - presentation
  - document
  - dashboard
loading: on-demand
status: draft
---
# Bar Chart

One thin bar per category, every bar growing from the same baseline, so length is the only quantity the reader has to judge. Horizontal bars for long category names, vertical columns for time buckets. A single series wears ink and lets one accent bar carry the point; two or more series use the fixed categorical order plus a legend. Color is chosen last — after the form, after the layout.

## When to use

The form follows the job the data has to do. A bar chart's job is **magnitude across categories**: revenue by region, tickets by team, spend by vendor, headcount by function. The reader's task is to rank and to compare sizes, and length from a common baseline is the most accurately read encoding there is. If the categories have long names or there are more than about six of them, lay the bars horizontally — the labels then read straight and never need rotating.

A different form is the right answer more often than people expect:

| If the data is really… | Use this instead |
|---|---|
| One current value, with or without a trend | A **stat tile** — value, delta, small sparkline. A one-bar bar chart is not a chart. |
| Two parts of a whole | A **stat tile** or a sentence. A two-slice pie and a two-bar chart both waste a whole figure on one ratio. |
| Evenly spaced points over time (months, weeks, quarters) | A **line chart** — continuity is the story, and bars break it into disconnected blocks. |
| Values that are all close together, or more than ~12 categories | A **dot plot / lollipop** — bars at near-equal length turn into a wall of ink; a dot on a rule shows the small differences. |
| One series that matters, the rest context | **Emphasis** — keep the bars, but ink everything and accent the one. This is the most underused answer to "make this chart clearer." |
| More than ~7 classes that all carry meaning | A **table**, or a table beside the chart. Past seven, adjacent classes blur. |
| Two measures on different scales | **Two charts**, or both indexed to a common base. Never a second y-axis. |

Density budget: aim for four to eight bars. Above twelve, sort and truncate to a top-N with an "Other" row, or facet into small multiples. Always sort by value unless the category order is itself meaningful (time, tiers, age bands) — an unsorted bar chart makes the reader do the sorting.

## Palette

Two cases, and only two. Pick by series count, never by taste.

**Single series (the default).** Every bar takes ink; exactly one bar takes accent.

| Role | Value | Use |
|---|---|---|
| paper | `#f5f5f5` | canvas, surface gaps, marker rings |
| ink | `#2d3142` | bars, primary text, direct labels |
| muted | `#4f5d75` | axis ticks, legend text, subtitles |
| accent | `#eb6c36` | the ONE highlighted bar — never two |
| hairline | `#d5d8e0` | gridlines, axis rules, table rules |

**Multi-series (2+).** Use the validated categorical order, from slot 1 down. Never cycle, never generate a ninth hue — fold the tail into "Other" or facet into small multiples.

| Slot | Value | Slot | Value |
|---|---|---|---|
| 1 | `#2a78d6` | 5 | `#e87ba4` |
| 2 | `#eb6834` | 6 | `#008300` |
| 3 | `#1baf7a` | 7 | `#4a3aa7` |
| 4 | `#eda100` | 8 | `#e34948` |

This order is validated against paper `#f5f5f5`: lightness band, chroma floor, adjacent CVD separation (worst pair ΔE 9.1) and normal-vision separation (worst pair ΔE 19.6) all pass. **The contrast check returns a relief warning** — slots 2, 3, 4 and 5 sit below 3:1 against paper. That warning is not dismissable: any chart using the multi-series palette **must** ship direct labels on the marks, a table view, or both. Build them in; they are the relief, not a nicety.

Two more rules that hold in every case: color follows the entity, not its rank, so filtering out a series never repaints the survivors; and text never wears the data color — labels, values and legends stay in ink or muted, with a colored swatch beside them carrying identity.

## Typography

No external fetches. Every stack falls back to something local.

| Token | Family | Weight / Size | Use |
|---|---|---|---|
| eyebrow | `'JetBrains Mono', ui-monospace, monospace` | 11px, 500, .18em caps | kicker above the headline |
| headline | `'Source Serif 4', Georgia, serif` | 32px, 400 | chart title |
| subtitle | `'DM Sans', system-ui, sans-serif` | 13px, 400, muted | what is measured, in what unit |
| category label | `'DM Sans', system-ui, sans-serif` | 13px, 400 | the names beside or under the bars |
| axis tick | `'JetBrains Mono', ui-monospace, monospace` | 11px, muted | scale values |
| direct label | `'JetBrains Mono', ui-monospace, monospace` | 13px, 600, ink | the value on a labelled bar |
| legend | `'DM Sans', system-ui, sans-serif` | 12px, muted | series names |

Axis ticks and table columns get `font-variant-numeric: tabular-nums` so digits align vertically. A large standalone figure does not — equal-width digits make a number like `121` look loose at display size.

## Anatomy

- **Bars.** Capped at **24px thick** — never fill the band. The leftover width is air, and it is what keeps the chart quiet. **4px rounded data-end, square at the baseline**: a horizontal bar rounds its right edge only, a column rounds its cap only. Every bar grows from one shared baseline at zero. A truncated baseline is a lie in a bar chart; if the differences are too small to see at zero, the form is wrong, not the axis.
- **The surface gap.** Adjacent bars in a group, and every segment of a stack, are separated by a **2px gap in the paper color** — never by a stroke. A border drawn around a mark is data-weight ink doing a spacer's job.
- **Gridlines.** Hairline, **1px, solid, `#d5d8e0`**, one step off the surface, drawn behind the bars. Never dashed — dashing reads as "projection" or "threshold" when it is only a grid. Four to six gridlines is plenty; for horizontal bars they run vertically.
- **Axis.** One axis. The value axis carries rounded, thousands-comma'd ticks (0 / 1,000 / 2,000). The category axis carries names only, never rotated — if they do not fit, go horizontal.
- **Labels.** Label selectively. Put the value at the tip of the bar that matters and let the axis carry the rest, or label every tip and drop the axis ticks entirely — but never both, and never a number on every bar of a twelve-bar chart. A label that does not fit inside a bar moves outside the bar end; if there is no room outside either, it lives in the tooltip and the table view. Never crop a label with `overflow: hidden`. When a label sits where a gridline would run through the digits, set a small chip in the paper color behind it rather than moving the gridline.
- **Legend.** Present whenever there are two or more series, with **rect swatches** (legends mirror the mark — rects for bars, line keys for lines). A single series gets no legend box: there is one color, and the title already names it.
- **Container.** Size the plot to include the category axis band. A fixed height that fits the plot but not the labels produces a card with a tiny nested scrollbar.

## Layout

Default canvas **1200 × auto**, 48px padding. The chart is one inline SVG on a `viewBox`, scaled to 100% width, wrapped in a positioned figure so the tooltip can sit over it. No charting library, no external script.

```html
<style>
:root{
  --ch-paper:#f5f5f5; --ch-ink:#2d3142; --ch-muted:#4f5d75;
  --ch-accent:#eb6c36; --ch-hairline:#d5d8e0;
  --ch-c1:#2a78d6; --ch-c2:#eb6834; --ch-c3:#1baf7a; --ch-c4:#eda100;
  --ch-c5:#e87ba4; --ch-c6:#008300; --ch-c7:#4a3aa7; --ch-c8:#e34948;
  --ch-serif:'Source Serif 4',Georgia,serif;
  --ch-sans:'DM Sans',system-ui,sans-serif;
  --ch-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.ch{width:1200px;background:var(--ch-paper);color:var(--ch-ink);
  font-family:var(--ch-sans);padding:48px;}
.ch-eyebrow{font-family:var(--ch-mono);font-size:11px;font-weight:500;
  letter-spacing:.18em;text-transform:uppercase;color:var(--ch-muted);margin-bottom:8px;}
.ch-title{font-family:var(--ch-serif);font-size:32px;font-weight:400;
  letter-spacing:-.02em;line-height:1.15;}
.ch-sub{font-size:13px;color:var(--ch-muted);margin-top:6px;max-width:70ch;}
.ch-plot{position:relative;margin-top:24px;}
.ch-plot svg{width:100%;display:block;overflow:visible;}
.ch-hit{fill:transparent;cursor:default;outline:none;}
.ch-hit:focus-visible{fill:rgba(45,49,66,.05);}
.ch-tip{position:absolute;left:0;top:0;pointer-events:none;opacity:0;
  transform:translate(-50%,-100%);background:#fff;border:1px solid var(--ch-hairline);
  border-radius:6px;padding:8px 10px;min-width:140px;
  box-shadow:0 2px 10px rgba(45,49,66,.12);transition:opacity .12s;z-index:2;}
.ch-tip-h{font-family:var(--ch-mono);font-size:10px;letter-spacing:.12em;
  text-transform:uppercase;color:var(--ch-muted);}
.ch-tip-row{display:flex;align-items:center;gap:8px;margin-top:6px;}
.ch-tip-key{width:14px;height:2px;border-radius:1px;flex:none;}
.ch-tip-val{font-family:var(--ch-mono);font-size:13px;font-weight:600;color:var(--ch-ink);}
.ch-tip-name{font-size:11px;color:var(--ch-muted);margin-left:auto;}
.ch-legend{display:flex;gap:22px;margin-top:16px;}
.ch-legend-item{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--ch-muted);}
.ch-swatch{width:12px;height:12px;border-radius:2px;flex:none;}
.ch-table{border-collapse:collapse;width:100%;margin-top:20px;font-size:12px;}
.ch-table caption{text-align:left;font-family:var(--ch-mono);font-size:10px;
  letter-spacing:.12em;text-transform:uppercase;color:var(--ch-muted);padding-bottom:8px;}
.ch-table th,.ch-table td{border-bottom:1px solid var(--ch-hairline);
  padding:7px 14px 7px 0;text-align:left;font-weight:400;color:var(--ch-ink);}
.ch-table th{color:var(--ch-muted);}
.ch-table .n{text-align:right;font-family:var(--ch-mono);
  font-variant-numeric:tabular-nums;padding-right:0;}
</style>
```

### Example — single series, emphasis

Horizontal bars, ink throughout, one accent bar with its value at the tip. The axis carries every other value, so nothing is gated behind the highlight.

```html
<div class="ch">
  <p class="ch-eyebrow">Bar Chart · Chart Templates</p>
  <h1 class="ch-title">Revenue by region</h1>
  <p class="ch-sub">Trailing twelve months, USD thousands.</p>

  <figure class="ch-plot" data-tip-mark>
    <svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg">
      <title>Revenue by region, trailing twelve months</title>
      <rect width="1000" height="240" fill="#f5f5f5"/>
      <!-- gridlines: hairline, solid, behind the bars -->
      <g stroke="#d5d8e0" stroke-width="1">
        <line x1="150" y1="12" x2="150" y2="204"/><line x1="300" y1="12" x2="300" y2="204"/>
        <line x1="450" y1="12" x2="450" y2="204"/><line x1="600" y1="12" x2="600" y2="204"/>
        <line x1="750" y1="12" x2="750" y2="204"/><line x1="900" y1="12" x2="900" y2="204"/>
      </g>
      <g font-family="'JetBrains Mono',ui-monospace,monospace" font-size="11" fill="#4f5d75"
         text-anchor="middle" style="font-variant-numeric:tabular-nums">
        <text x="150" y="222">0</text><text x="300" y="222">1,000</text>
        <text x="450" y="222">2,000</text><text x="600" y="222">3,000</text>
        <text x="750" y="222">4,000</text><text x="900" y="222">5,000</text>
      </g>
      <g font-family="'DM Sans',system-ui,sans-serif" font-size="13" fill="#2d3142" text-anchor="end">
        <text x="134" y="40.5">North America</text><text x="134" y="88.5">Europe</text>
        <text x="134" y="136.5">Asia-Pacific</text><text x="134" y="184.5">Latin America</text>
      </g>
      <!-- bars: 24px thick, 4px rounded data-end, square at the baseline -->
      <path id="b1" fill="#eb6c36" d="M150,24 H869 A4,4 0 0 1 873,28 V44 A4,4 0 0 1 869,48 H150 Z"/>
      <path id="b2" fill="#2d3142" d="M150,72 H692 A4,4 0 0 1 696,76 V92 A4,4 0 0 1 692,96 H150 Z"/>
      <path id="b3" fill="#2d3142" d="M150,120 H582.5 A4,4 0 0 1 586.5,124 V140 A4,4 0 0 1 582.5,144 H150 Z"/>
      <path id="b4" fill="#2d3142" d="M150,168 H368 A4,4 0 0 1 372,172 V188 A4,4 0 0 1 368,192 H150 Z"/>
      <!-- one direct label, on the bar that carries the point.
           The paper chip keeps the last gridline from running through the digits. -->
      <rect x="879" y="28.5" width="52" height="17" fill="#f5f5f5"/>
      <text x="885" y="41" font-family="'JetBrains Mono',ui-monospace,monospace"
            font-size="13" font-weight="600" fill="#2d3142">4,820</text>
      <!-- hit targets: the whole row, far bigger than the mark -->
      <rect class="ch-hit" x="0" y="15" width="1000" height="42" tabindex="0" role="button"
        aria-label="North America, 4,820" data-mark="b1" data-cat="North America"
        data-val="4,820" data-series="Revenue" data-color="#eb6c36" data-x="873" data-y="24"/>
      <rect class="ch-hit" x="0" y="63" width="1000" height="42" tabindex="0" role="button"
        aria-label="Europe, 3,640" data-mark="b2" data-cat="Europe"
        data-val="3,640" data-series="Revenue" data-color="#2d3142" data-x="696" data-y="72"/>
      <rect class="ch-hit" x="0" y="111" width="1000" height="42" tabindex="0" role="button"
        aria-label="Asia-Pacific, 2,910" data-mark="b3" data-cat="Asia-Pacific"
        data-val="2,910" data-series="Revenue" data-color="#2d3142" data-x="586.5" data-y="120"/>
      <rect class="ch-hit" x="0" y="159" width="1000" height="42" tabindex="0" role="button"
        aria-label="Latin America, 1,480" data-mark="b4" data-cat="Latin America"
        data-val="1,480" data-series="Revenue" data-color="#2d3142" data-x="372" data-y="168"/>
    </svg>
    <div class="ch-tip" role="status" aria-live="polite"></div>
  </figure>
</div>
```

### Example — multi-series, legend + direct labels

Grouped columns in the fixed categorical order, a **2px paper gap** between neighbours, a legend with rect swatches, and direct labels on the final group. The direct labels are what discharge the palette's contrast warning; a table view discharges it too, and on a wider grouped chart it is usually the better answer.

```html
<div class="ch">
  <p class="ch-eyebrow">Bar Chart · Chart Templates</p>
  <h1 class="ch-title">Revenue by segment</h1>
  <p class="ch-sub">Three quarters, USD thousands. Enterprise and Mid-market only.</p>

  <figure class="ch-plot" data-tip-mark>
    <svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg">
      <title>Grouped column chart of revenue by segment and quarter</title>
      <rect width="1000" height="340" fill="#f5f5f5"/>
      <g stroke="#d5d8e0" stroke-width="1">
        <line x1="66" y1="280" x2="940" y2="280"/><line x1="66" y1="215" x2="940" y2="215"/>
        <line x1="66" y1="150" x2="940" y2="150"/><line x1="66" y1="85" x2="940" y2="85"/>
        <line x1="66" y1="20" x2="940" y2="20"/>
      </g>
      <g font-family="'JetBrains Mono',ui-monospace,monospace" font-size="11" fill="#4f5d75"
         text-anchor="end" style="font-variant-numeric:tabular-nums">
        <text x="54" y="284">0</text><text x="54" y="219">1,000</text>
        <text x="54" y="154">2,000</text><text x="54" y="89">3,000</text>
        <text x="54" y="24">4,000</text>
      </g>
      <g font-family="'DM Sans',system-ui,sans-serif" font-size="13" fill="#2d3142" text-anchor="middle">
        <text x="211.7" y="306">Q1 2026</text><text x="503" y="306">Q2 2026</text>
        <text x="794.3" y="306">Q3 2026</text>
      </g>
      <!-- 22px bars, 2px paper gap between neighbours (24px pitch) -->
      <path id="g1" fill="#2a78d6" d="M189,280 V142.3 A4,4 0 0 1 193,138.3 H207 A4,4 0 0 1 211,142.3 V280 Z"/>
      <path id="g2" fill="#eb6834" d="M213,280 V191.7 A4,4 0 0 1 217,187.7 H231 A4,4 0 0 1 235,191.7 V280 Z"/>
      <path id="g3" fill="#2a78d6" d="M480,280 V130.6 A4,4 0 0 1 484,126.6 H498 A4,4 0 0 1 502,130.6 V280 Z"/>
      <path id="g4" fill="#eb6834" d="M504,280 V185.9 A4,4 0 0 1 508,181.9 H522 A4,4 0 0 1 526,185.9 V280 Z"/>
      <path id="g5" fill="#2a78d6" d="M771,280 V94.9 A4,4 0 0 1 775,90.9 H789 A4,4 0 0 1 793,94.9 V280 Z"/>
      <path id="g6" fill="#eb6834" d="M795,280 V174.2 A4,4 0 0 1 799,170.2 H813 A4,4 0 0 1 817,174.2 V280 Z"/>
      <!-- direct labels on the last group only -->
      <g font-family="'JetBrains Mono',ui-monospace,monospace" font-size="13" font-weight="600"
         fill="#2d3142" text-anchor="middle">
        <text x="782" y="82">2,910</text><text x="806" y="161">1,690</text>
      </g>
      <rect class="ch-hit" x="188" y="20" width="24" height="260" tabindex="0" role="button"
        aria-label="Q1 2026, Enterprise, 2,180" data-mark="g1" data-cat="Q1 2026"
        data-val="2,180" data-series="Enterprise" data-color="#2a78d6" data-x="200" data-y="138.3"/>
      <rect class="ch-hit" x="212" y="20" width="24" height="260" tabindex="0" role="button"
        aria-label="Q1 2026, Mid-market, 1,420" data-mark="g2" data-cat="Q1 2026"
        data-val="1,420" data-series="Mid-market" data-color="#eb6834" data-x="224" data-y="187.7"/>
      <rect class="ch-hit" x="479" y="20" width="24" height="260" tabindex="0" role="button"
        aria-label="Q2 2026, Enterprise, 2,360" data-mark="g3" data-cat="Q2 2026"
        data-val="2,360" data-series="Enterprise" data-color="#2a78d6" data-x="491" data-y="126.6"/>
      <rect class="ch-hit" x="503" y="20" width="24" height="260" tabindex="0" role="button"
        aria-label="Q2 2026, Mid-market, 1,510" data-mark="g4" data-cat="Q2 2026"
        data-val="1,510" data-series="Mid-market" data-color="#eb6834" data-x="515" data-y="181.9"/>
      <rect class="ch-hit" x="770" y="20" width="24" height="260" tabindex="0" role="button"
        aria-label="Q3 2026, Enterprise, 2,910" data-mark="g5" data-cat="Q3 2026"
        data-val="2,910" data-series="Enterprise" data-color="#2a78d6" data-x="782" data-y="90.9"/>
      <rect class="ch-hit" x="794" y="20" width="24" height="260" tabindex="0" role="button"
        aria-label="Q3 2026, Mid-market, 1,690" data-mark="g6" data-cat="Q3 2026"
        data-val="1,690" data-series="Mid-market" data-color="#eb6834" data-x="806" data-y="170.2"/>
    </svg>
    <div class="ch-tip" role="status" aria-live="polite"></div>
  </figure>

  <div class="ch-legend">
    <span class="ch-legend-item"><span class="ch-swatch" style="background:#2a78d6"></span>Enterprise</span>
    <span class="ch-legend-item"><span class="ch-swatch" style="background:#eb6834"></span>Mid-market</span>
  </div>
</div>
```

Ship it as an artboard entry: one frame, width 1200, height `auto`, background `#f5f5f5`, with the `<style>` block in the bundle's shared head and the markup in the frame. A working example lives at `working-with-data/examples/bar-chart-preview`.

## Interaction

An HTML chart is interactive by default — the hover layer is part of the deliverable, not an upgrade. On a bar chart **the mark is the hit target**; there is no crosshair (a crosshair finds an X on a continuous axis, and a bar chart's category axis is not one).

- Each bar carries its own `pointerenter` / `focus` tooltip showing category, value and — when there is more than one series — the series name.
- **The hit target is bigger than the mark.** Give each bar a transparent rect spanning its whole band (a full-height column for a column chart, a full-width row for a horizontal chart), at least 24px in the tight direction. Nobody should have to land on a 22px bar.
- **The hovered bar responds** — drop it to ~75% opacity so the reader sees which mark the readout belongs to. Never move it, never grow it.
- **Values lead, names follow.** In the tooltip the number is the strong, high-contrast element; the series name is secondary, keyed by a short stroke of the series color. That is the legend's hierarchy inverted, because here the reader already has the series and wants the number.
- **Tooltips enhance, never gate.** Every value is also reachable from a direct label, the axis, or the table view. Keyboard focus shows exactly what hover shows — hence `tabindex="0"` and `aria-label` on every hit rect.
- **Labels are untrusted data.** Category and series names usually arrive from a sheet or an API. Insert them with `textContent`, never by concatenating into `innerHTML`.
- **Filters, if any, sit in one row above everything they scope** — never inside a chart card, never per-chart. On refetch, hold the previous render at reduced opacity rather than flashing a skeleton.

```html
<script>
(function(){
  document.querySelectorAll('[data-tip-mark]').forEach(function(fig){
    var svg = fig.querySelector('svg'), tip = fig.querySelector('.ch-tip');
    var vb = svg.viewBox.baseVal;
    function build(head, color, value, name){
      tip.textContent = '';
      var h = document.createElement('div'); h.className = 'ch-tip-h';
      h.textContent = head; tip.appendChild(h);
      var row = document.createElement('div'); row.className = 'ch-tip-row';
      var k = document.createElement('span'); k.className = 'ch-tip-key'; k.style.background = color;
      var v = document.createElement('span'); v.className = 'ch-tip-val'; v.textContent = value;
      var n = document.createElement('span'); n.className = 'ch-tip-name'; n.textContent = name;
      row.appendChild(k); row.appendChild(v); row.appendChild(n); tip.appendChild(row);
    }
    function place(x, y){
      var r = svg.getBoundingClientRect();
      var px = x / vb.width * r.width, py = y / vb.height * r.height;
      tip.style.opacity = 1;
      var th = tip.offsetHeight, tw = tip.offsetWidth;
      tip.style.left = Math.min(Math.max(px, tw/2), r.width - tw/2) + 'px';
      if (py - th - 6 < 0){ tip.style.transform = 'translate(-50%,0)'; tip.style.top = (py + 18) + 'px'; }
      else { tip.style.transform = 'translate(-50%,-100%)'; tip.style.top = (py - 6) + 'px'; }
    }
    fig.querySelectorAll('.ch-hit').forEach(function(hit){
      var mark = svg.getElementById(hit.dataset.mark);
      function on(){
        build(hit.dataset.cat, hit.dataset.color, hit.dataset.val, hit.dataset.series);
        place(parseFloat(hit.dataset.x), parseFloat(hit.dataset.y));
        if (mark) mark.setAttribute('opacity', '.75');
      }
      function off(){ tip.style.opacity = 0; if (mark) mark.setAttribute('opacity', '1'); }
      hit.addEventListener('pointerenter', on); hit.addEventListener('focus', on);
      hit.addEventListener('pointerleave', off); hit.addEventListener('blur', off);
    });
  });
})();
</script>
```

## Do's and Don'ts

**Do**

- Start every bar at zero, from one shared baseline.
- Cap bars at 24px and let the leftover band be air.
- Round the data-end 4px and keep the baseline end square.
- Separate touching bars with a 2px gap in the paper color.
- Sort by value unless the category order is itself meaningful.
- Use emphasis — ink plus one accent — whenever one bar is the story.
- Keep a legend for two or more series, with rect swatches; drop it for one.
- Ship the hover layer, and make the hit target bigger than the bar.
- Ship direct labels or a table view whenever the multi-series palette is in play.

**Don't**

- **Never build a dual-axis chart.** Two y-scales on one plot invent a correlation the data does not contain — the alignment of the two scales is arbitrary, and readers have flagged such charts as looking hallucinated. **One axis.** Two measures of different magnitude become two charts, small multiples, or both series indexed to a common base (=100 at t0).
- **Never cycle or generate hues.** The categorical order is fixed and eight slots long; a ninth color, generated or reused, is indistinguishable from an existing slot under CVD. Fold the tail into "Other," facet into small multiples, or encode with hue × shape.
- Never color bars darker-where-bigger on nominal categories — that double-encodes length as hue and burns the only free channel on information the chart already shows.
- Never truncate the value axis.
- Never dash a gridline, and never let the grid out-weigh the bars.
- Never draw a border around a bar to separate it from its neighbour.
- Never put a number on every bar *and* keep the axis ticks — pick one.
- Never crop a label with `overflow: hidden`; move it outside the bar end or into the tooltip.
- Never color the label text with the series color; ink and muted only, with a swatch carrying identity.
- Never let a fixed container height clip the category axis band.
- Never reuse a status color (good / warning / critical) as a series color.

## Fonts

| Role | Family | Fallback stack |
|---|---|---|
| headline | Source Serif 4 | `'Source Serif 4', Georgia, serif` |
| body, category labels, legend | DM Sans | `'DM Sans', system-ui, sans-serif` |
| numerals, axis ticks, eyebrow | JetBrains Mono | `'JetBrains Mono', ui-monospace, monospace` |

These stacks are written so the chart still reads correctly with nothing installed — the fallbacks are Georgia, the system UI sans, and the system monospace. **Studiograph canvases cannot fetch fonts from the web**, so a Google Fonts link or an `@import` will silently do nothing. To get the real faces, upload the font files to your workspace and declare them with `@font-face` in the same style block as the chart tokens. The `using-google-fonts` skill in `your-brand` walks through the upload and the `@font-face` declaration; `using-custom-fonts` covers licensed or bespoke families. Until the files are uploaded, leave the stacks exactly as written — never swap in a web URL.
