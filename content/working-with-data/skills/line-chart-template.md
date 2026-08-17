---
entity_type: skill
entity_id: line-chart-template
created_at: '2026-08-16T23:34:37.326Z'
updated_at: '2026-08-16T23:34:37.326Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - chart
  - data
  - template
  - line
name: Line Chart
description: >-
  Change over evenly spaced time — a thin continuous line per series, read for
  shape and direction. Use when the trend is the story, not the individual
  values.
applies_to:
  - chart
  - artboard
  - presentation
  - document
  - dashboard
loading: on-demand
status: draft
---
# Line Chart

A thin continuous line per series across a shared time axis. The line is read as a shape — rising, flattening, crossing — not as a row of values, so the chart's whole job is to make that shape legible and to keep everything else recessive. A single series wears ink with one accent endpoint; two or more use the fixed categorical order with a legend and direct end labels. Color is chosen last.

## When to use

The form follows the job the data has to do. A line chart's job is **change over evenly spaced time**: signups by month, latency by day, price by week. The reader's task is to see direction and inflection — where it turned, where it flattened, where two series crossed. Continuity is the encoding: connecting the points asserts that the space between them is real and evenly spaced.

That assertion is also the constraint. A different form is right whenever the x-axis is not a continuous, evenly spaced dimension:

| If the data is really… | Use this instead |
|---|---|
| Categories, not time (regions, teams, vendors) | A **bar chart**. Connecting unrelated categories draws a trend that does not exist. |
| Fewer than about four time points | **Bars**, or a stat tile with a delta. A three-point line is two segments pretending to be a trend. |
| Irregularly spaced or missing periods | **Bars**, or a line with an explicit gap — never a straight segment silently spanning a hole. |
| Discrete counts per period that are compared, not tracked | **Columns** — the reader is ranking periods, not following them. |
| More than about four or five series | **Small multiples** — one small line per series on a shared scale. Past four converging lines, direct end labels collide and the legend stops helping. |
| One series that matters, the rest context | **Emphasis** — ink the one, gray the rest. Often the honest answer to "make this chart clearer." |
| A single headline value plus its direction | A **stat tile** with a 12-point sparkline. The chart is the number. |
| Two measures on different scales | **Two charts**, small multiples, or both indexed to a common base. Never a second y-axis. |

Two more form calls worth making deliberately. Use an **area fill** only for a single series, and only as a wash at about 10% opacity — stacked areas make every band above the first unreadable. And show markers on every point only when the points are few (roughly twelve or fewer); on a dense line the markers become noise, and the hover layer does the point-finding instead.

## Palette

Two cases, and only two. Pick by series count, never by taste.

**Single series (the default).** The line takes ink; exactly one mark — normally the endpoint — takes accent.

| Role | Value | Use |
|---|---|---|
| paper | `#f5f5f5` | canvas, marker rings, label chips |
| ink | `#2d3142` | the line, primary text, direct labels |
| muted | `#4f5d75` | axis ticks, crosshair, legend text, subtitles |
| accent | `#eb6c36` | the ONE highlighted mark — the endpoint, or the peak |
| hairline | `#d5d8e0` | gridlines, axis rules, table rules |

**Multi-series (2+).** Use the validated categorical order, from slot 1 down. Never cycle, never generate a ninth hue — fold the tail into "Other" or facet into small multiples.

| Slot | Value | Slot | Value |
|---|---|---|---|
| 1 | `#2a78d6` | 5 | `#e87ba4` |
| 2 | `#eb6834` | 6 | `#008300` |
| 3 | `#1baf7a` | 7 | `#4a3aa7` |
| 4 | `#eda100` | 8 | `#e34948` |

This order is validated against paper `#f5f5f5`: lightness band, chroma floor, adjacent CVD separation (worst pair ΔE 9.1) and normal-vision separation (worst pair ΔE 19.6) all pass. **The contrast check returns a relief warning** — slots 2, 3, 4 and 5 sit below 3:1 against paper, and a 2px line is thin. That warning is not dismissable: any chart using the multi-series palette **must** ship direct end labels, a table view, or both. Build them in; they are the relief, not a nicety.

Two more rules that hold in every case: color follows the entity, not its rank, so filtering out a series never repaints the survivors; and text never wears the data color — labels, values and legends stay in ink or muted, with a short colored line-key beside them carrying identity.

## Typography

No external fetches. Every stack falls back to something local.

| Token | Family | Weight / Size | Use |
|---|---|---|---|
| eyebrow | `'JetBrains Mono', ui-monospace, monospace` | 11px, 500, .18em caps | kicker above the headline |
| headline | `'Source Serif 4', Georgia, serif` | 32px, 400 | chart title |
| subtitle | `'DM Sans', system-ui, sans-serif` | 13px, 400, muted | what is measured, in what unit |
| series name | `'DM Sans', system-ui, sans-serif` | 12px, 400, muted | direct end labels, legend |
| axis tick | `'JetBrains Mono', ui-monospace, monospace` | 11px, muted | scale values and period labels |
| direct label | `'JetBrains Mono', ui-monospace, monospace` | 13px, 600, ink | the value at a line end |
| tooltip value | `'JetBrains Mono', ui-monospace, monospace` | 13px, 600, ink | the readout number |

Axis ticks and table columns get `font-variant-numeric: tabular-nums`. A large standalone figure does not — equal-width digits make a number like `121` look loose at display size.

## Anatomy

- **The line.** **2px**, round join and round cap, no fill. That weight is the whole point: heavy lines read as blocks and lose the shape. Never dash a data line to mean "less important" — dashing is for a forecast or a target, and then it needs a legend entry saying so.
- **Markers.** **≥ 8px diameter** (r ≥ 4), filled with the series color, each carrying a **2px ring in the paper color** so it stays legible where it crosses a line or another marker. The ring is part of the hit target, not just spacing. On a dense line, drop the resting markers and let the hover layer place a focus dot instead.
- **Area fill.** Single series only, the line's hue at about 10% opacity — a wash, never a saturated block.
- **The surface gap.** Where fills touch — a band against another band, a marker over a line — a **2px gap or ring in the paper color** does the separating. Never a stroke drawn around a mark.
- **Gridlines.** Horizontal only, **1px, solid, `#d5d8e0`**, drawn behind the lines. Four or five is plenty. Never dashed: dashing reads as "threshold" when it is only a grid. Vertical gridlines are usually noise — the period labels already mark the columns.
- **Axis.** One axis. The value axis carries rounded, thousands-comma'd ticks; the time axis carries period labels, never rotated. The value axis on a line chart **may** start above zero when the variation would otherwise be invisible — that is the one honest difference from a bar chart — but say so in the subtitle and keep the baseline gridline visible.
- **Labels.** Label selectively: the value at the end of each line, plus at most one peak or inflection that the text is actually about. Never a number on every point. When end labels collide because the lines converge, do not nudge them apart — that detaches them from their lines. Use a leader line, or facet into small multiples.
- **Legend.** Present whenever there are two or more series, with **short line keys** (legends mirror the mark — a line for lines, a rect for bars and areas). Direct end labels supplement it; they do not replace it. A single series gets no legend box.
- **Container.** Size the plot to include the period-label band and the right-hand gutter the end labels need — typically 120–150px of the canvas width. A fixed height that fits the plot but not the axis produces a card with a tiny nested scrollbar.

## Layout

Default canvas **1200 × auto**, 48px padding. The chart is one inline SVG on a `viewBox`, scaled to 100% width, wrapped in a positioned figure so the tooltip can sit over it. Reserve the right-hand gutter for end labels before you place the last x position. No charting library, no external script.

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
.ch-overlay{fill:transparent;cursor:crosshair;outline:none;}
.ch-cross{stroke:#4f5d75;stroke-width:1;opacity:0;}
.ch-tip{position:absolute;left:0;top:0;pointer-events:none;opacity:0;
  transform:translate(-50%,-100%);background:#fff;border:1px solid var(--ch-hairline);
  border-radius:6px;padding:8px 10px;min-width:150px;
  box-shadow:0 2px 10px rgba(45,49,66,.12);transition:opacity .12s;z-index:2;}
.ch-tip-h{font-family:var(--ch-mono);font-size:10px;letter-spacing:.12em;
  text-transform:uppercase;color:var(--ch-muted);}
.ch-tip-row{display:flex;align-items:center;gap:8px;margin-top:6px;}
.ch-tip-key{width:14px;height:2px;border-radius:1px;flex:none;}
.ch-tip-val{font-family:var(--ch-mono);font-size:13px;font-weight:600;color:var(--ch-ink);}
.ch-tip-name{font-size:11px;color:var(--ch-muted);margin-left:auto;}
.ch-legend{display:flex;gap:22px;margin-top:16px;}
.ch-legend-item{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--ch-muted);}
.ch-key-line{width:16px;height:2px;border-radius:1px;flex:none;}
.ch-details{margin-top:20px;font-size:12px;color:var(--ch-muted);}
.ch-details summary{cursor:pointer;font-family:var(--ch-mono);font-size:10px;
  letter-spacing:.12em;text-transform:uppercase;}
.ch-table{border-collapse:collapse;width:100%;margin-top:12px;font-size:12px;}
.ch-table th,.ch-table td{border-bottom:1px solid var(--ch-hairline);
  padding:6px 14px 6px 0;text-align:left;font-weight:400;color:var(--ch-ink);}
.ch-table th{color:var(--ch-muted);}
.ch-table .n{text-align:right;font-family:var(--ch-mono);
  font-variant-numeric:tabular-nums;padding-right:0;}
</style>
```

### Example — single series, accent endpoint

Ink line, no legend (the title names the series), one accent endpoint carrying the current value.

```html
<div class="ch">
  <p class="ch-eyebrow">Line Chart · Chart Templates</p>
  <h1 class="ch-title">Monthly signups</h1>
  <p class="ch-sub">New accounts per month, first half of 2026.</p>

  <figure class="ch-plot" data-tip-cross data-labels="Jan,Feb,Mar,Apr,May,Jun">
    <svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
      <title>Monthly signups, January to June 2026</title>
      <rect width="1000" height="300" fill="#f5f5f5"/>
      <g stroke="#d5d8e0" stroke-width="1">
        <line x1="66" y1="250" x2="880" y2="250"/><line x1="66" y1="174.7" x2="880" y2="174.7"/>
        <line x1="66" y1="99.3" x2="880" y2="99.3"/><line x1="66" y1="24" x2="880" y2="24"/>
      </g>
      <g font-family="'JetBrains Mono',ui-monospace,monospace" font-size="11" fill="#4f5d75"
         text-anchor="end" style="font-variant-numeric:tabular-nums">
        <text x="54" y="254">0</text><text x="54" y="178.7">1,000</text>
        <text x="54" y="103.3">2,000</text><text x="54" y="28">3,000</text>
      </g>
      <g font-family="'JetBrains Mono',ui-monospace,monospace" font-size="11" fill="#4f5d75"
         text-anchor="middle">
        <text x="66" y="276">Jan</text><text x="228.8" y="276">Feb</text>
        <text x="391.6" y="276">Mar</text><text x="554.4" y="276">Apr</text>
        <text x="717.2" y="276">May</text><text x="880" y="276">Jun</text>
      </g>
      <line class="ch-cross" x1="66" y1="24" x2="66" y2="250"/>
      <!-- 2px line, round join and cap -->
      <polyline class="ch-series" data-name="Signups" data-color="#2d3142"
        data-values="1,240|1,420|1,610|1,720|2,040|2,380"
        fill="none" stroke="#2d3142" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
        points="66,156.6 228.8,143.1 391.6,128.7 554.4,120.5 717.2,96.4 880,70.8"/>
      <!-- the ONE accent mark: endpoint, 10px with a 2px paper ring -->
      <circle cx="880" cy="70.8" r="5" fill="#eb6c36" stroke="#f5f5f5" stroke-width="2"/>
      <text x="894" y="75" font-family="'JetBrains Mono',ui-monospace,monospace"
            font-size="13" font-weight="600" fill="#2d3142">2,380</text>
      <g class="ch-focus"></g>
      <rect class="ch-overlay" x="50" y="24" width="850" height="226" tabindex="0"
            role="application" aria-label="Monthly signups, use arrow keys to step through months"/>
    </svg>
    <div class="ch-tip" role="status" aria-live="polite"></div>
  </figure>
</div>
```

### Example — two series, legend + direct end labels

The fixed categorical order, a legend with line keys, and a direct label at each line end. The end labels are what discharge the palette's contrast warning; the collapsed table view below discharges it a second way and keeps every value reachable without hovering.

```html
<div class="ch">
  <p class="ch-eyebrow">Line Chart · Chart Templates</p>
  <h1 class="ch-title">Signups by channel</h1>
  <p class="ch-sub">New accounts per month, first half of 2026. Referral is closing the gap.</p>

  <figure class="ch-plot" data-tip-cross data-labels="Jan,Feb,Mar,Apr,May,Jun">
    <svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
      <title>Signups by channel, direct and referral, January to June 2026</title>
      <rect width="1000" height="300" fill="#f5f5f5"/>
      <g stroke="#d5d8e0" stroke-width="1">
        <line x1="66" y1="250" x2="830" y2="250"/><line x1="66" y1="174.7" x2="830" y2="174.7"/>
        <line x1="66" y1="99.3" x2="830" y2="99.3"/><line x1="66" y1="24" x2="830" y2="24"/>
      </g>
      <g font-family="'JetBrains Mono',ui-monospace,monospace" font-size="11" fill="#4f5d75"
         text-anchor="end" style="font-variant-numeric:tabular-nums">
        <text x="54" y="254">0</text><text x="54" y="178.7">1,000</text>
        <text x="54" y="103.3">2,000</text><text x="54" y="28">3,000</text>
      </g>
      <g font-family="'JetBrains Mono',ui-monospace,monospace" font-size="11" fill="#4f5d75"
         text-anchor="middle">
        <text x="66" y="276">Jan</text><text x="218.8" y="276">Feb</text>
        <text x="371.6" y="276">Mar</text><text x="524.4" y="276">Apr</text>
        <text x="677.2" y="276">May</text><text x="830" y="276">Jun</text>
      </g>
      <line class="ch-cross" x1="66" y1="24" x2="66" y2="250"/>
      <polyline class="ch-series" data-name="Direct" data-color="#2a78d6"
        data-values="1,240|1,420|1,610|1,720|2,040|2,380"
        fill="none" stroke="#2a78d6" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
        points="66,156.6 218.8,143.1 371.6,128.7 524.4,120.5 677.2,96.4 830,70.8"/>
      <polyline class="ch-series" data-name="Referral" data-color="#eb6834"
        data-values="420|540|720|880|1,160|1,390"
        fill="none" stroke="#eb6834" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
        points="66,218.4 218.8,209.3 371.6,195.8 524.4,183.7 677.2,162.7 830,145.3"/>
      <circle cx="830" cy="70.8" r="5" fill="#2a78d6" stroke="#f5f5f5" stroke-width="2"/>
      <circle cx="830" cy="145.3" r="5" fill="#eb6834" stroke="#f5f5f5" stroke-width="2"/>
      <!-- direct end labels: name in muted, value in ink; never in the series color -->
      <g font-family="'DM Sans',system-ui,sans-serif" font-size="12" fill="#4f5d75">
        <text x="844" y="66">Direct</text><text x="844" y="140">Referral</text>
      </g>
      <g font-family="'JetBrains Mono',ui-monospace,monospace" font-size="13" font-weight="600" fill="#2d3142">
        <text x="844" y="83">2,380</text><text x="844" y="157">1,390</text>
      </g>
      <g class="ch-focus"></g>
      <rect class="ch-overlay" x="50" y="24" width="800" height="226" tabindex="0"
            role="application" aria-label="Signups by channel, use arrow keys to step through months"/>
    </svg>
    <div class="ch-tip" role="status" aria-live="polite"></div>
  </figure>

  <div class="ch-legend">
    <span class="ch-legend-item"><span class="ch-key-line" style="background:#2a78d6"></span>Direct</span>
    <span class="ch-legend-item"><span class="ch-key-line" style="background:#eb6834"></span>Referral</span>
  </div>

  <details class="ch-details">
    <summary>Table view</summary>
    <table class="ch-table">
      <thead><tr><th>Month</th><th class="n">Direct</th><th class="n">Referral</th></tr></thead>
      <tbody>
        <tr><td>Jan</td><td class="n">1,240</td><td class="n">420</td></tr>
        <tr><td>Feb</td><td class="n">1,420</td><td class="n">540</td></tr>
        <tr><td>Mar</td><td class="n">1,610</td><td class="n">720</td></tr>
        <tr><td>Apr</td><td class="n">1,720</td><td class="n">880</td></tr>
        <tr><td>May</td><td class="n">2,040</td><td class="n">1,160</td></tr>
        <tr><td>Jun</td><td class="n">2,380</td><td class="n">1,390</td></tr>
      </tbody>
    </table>
  </details>
</div>
```

Ship it as an artboard entry: one frame, width 1200, height `auto`, background `#f5f5f5`, with the `<style>` block in the bundle's shared head and the markup in the frame. A working example lives at `working-with-data/examples/line-chart-preview`.

## Interaction

An HTML chart is interactive by default — the hover layer is part of the deliverable, not an upgrade. On a line chart the hover layer is a **crosshair plus one tooltip**, because the x-axis is continuous and the reader is aiming at a date, never at a 2px line.

- **The crosshair finds the X.** A vertical hairline in muted tracks the pointer and **snaps to the nearest data position**. It runs the full plot height, behind the lines.
- **One tooltip, every series.** The readout lists every series at that x, so the pointer never has to land on a line to get a value. A **focus dot** with a 2px paper ring appears on each line at the snapped position.
- **Values lead, names follow.** In the tooltip the number is the strong, high-contrast element; the series name is secondary, keyed by a short **stroke** of the series color — at tooltip density a filled box is data-weight ink doing a label's job.
- **The hit area is the whole plot**, not the line. A transparent overlay rect spans the plot and a little beyond, so nearest-x snapping does the work.
- **Tooltips enhance, never gate.** Every value is also reachable from the direct end labels, the value axis, or the table view. Keyboard focus shows exactly what hover shows: the overlay is focusable and the left / right arrow keys step through periods.
- **Labels are untrusted data.** Series and period names usually arrive from a sheet or an API. Insert them with `textContent`, never by concatenating into `innerHTML`.
- **Filters, if any, sit in one row above everything they scope** — date range first, presets before a custom range, never inside a chart card. On refetch, hold the previous render at reduced opacity rather than flashing a skeleton.

```html
<script>
(function(){
  document.querySelectorAll('[data-tip-cross]').forEach(function(fig){
    var svg = fig.querySelector('svg'), tip = fig.querySelector('.ch-tip');
    var vb = svg.viewBox.baseVal, NS = 'http://www.w3.org/2000/svg';
    var cross = fig.querySelector('.ch-cross');
    var focus = fig.querySelector('.ch-focus');
    var labels = (fig.dataset.labels || '').split(',');
    var series = [].map.call(fig.querySelectorAll('.ch-series'), function(p){
      return {
        name: p.dataset.name, color: p.dataset.color,
        vals: (p.dataset.values || '').split('|'),
        pts: p.getAttribute('points').trim().split(/\s+/).map(function(s){
          return s.split(',').map(Number);
        })
      };
    });
    if (!series.length) return;
    var xs = series[0].pts.map(function(p){ return p[0]; });
    var dots = series.map(function(s){
      var c = document.createElementNS(NS, 'circle');
      c.setAttribute('r', 4.5); c.setAttribute('fill', s.color);
      c.setAttribute('stroke', '#f5f5f5'); c.setAttribute('stroke-width', 2);
      c.setAttribute('opacity', 0); focus.appendChild(c); return c;
    });
    function render(i){
      var x = xs[i];
      cross.setAttribute('x1', x); cross.setAttribute('x2', x);
      cross.setAttribute('opacity', 1);
      tip.textContent = '';
      var h = document.createElement('div'); h.className = 'ch-tip-h';
      h.textContent = labels[i] || ''; tip.appendChild(h);
      var top = Infinity;
      series.forEach(function(s, si){
        var pt = s.pts[i];
        dots[si].setAttribute('cx', pt[0]); dots[si].setAttribute('cy', pt[1]);
        dots[si].setAttribute('opacity', 1);
        if (pt[1] < top) top = pt[1];
        var row = document.createElement('div'); row.className = 'ch-tip-row';
        var k = document.createElement('span'); k.className = 'ch-tip-key'; k.style.background = s.color;
        var v = document.createElement('span'); v.className = 'ch-tip-val'; v.textContent = s.vals[i];
        var n = document.createElement('span'); n.className = 'ch-tip-name'; n.textContent = s.name;
        row.appendChild(k); row.appendChild(v); row.appendChild(n); tip.appendChild(row);
      });
      var r = svg.getBoundingClientRect();
      var px = x / vb.width * r.width, py = top / vb.height * r.height;
      tip.style.opacity = 1;
      var th = tip.offsetHeight, tw = tip.offsetWidth;
      tip.style.left = Math.min(Math.max(px, tw / 2), r.width - tw / 2) + 'px';
      if (py - th - 10 < 0){ tip.style.transform = 'translate(-50%,0)'; tip.style.top = (py + 20) + 'px'; }
      else { tip.style.transform = 'translate(-50%,-100%)'; tip.style.top = (py - 10) + 'px'; }
    }
    function hide(){
      tip.style.opacity = 0; cross.setAttribute('opacity', 0);
      dots.forEach(function(d){ d.setAttribute('opacity', 0); });
    }
    var overlay = fig.querySelector('.ch-overlay'), cur = 0;
    overlay.addEventListener('pointermove', function(e){
      var r = svg.getBoundingClientRect();
      var vx = (e.clientX - r.left) / r.width * vb.width, best = 0, bd = Infinity;
      xs.forEach(function(x, i){ var d = Math.abs(x - vx); if (d < bd){ bd = d; best = i; } });
      cur = best; render(cur);
    });
    overlay.addEventListener('pointerleave', hide);
    overlay.addEventListener('blur', hide);
    overlay.addEventListener('focus', function(){ render(cur); });
    overlay.addEventListener('keydown', function(e){
      if (e.key === 'ArrowRight'){ cur = Math.min(cur + 1, xs.length - 1); render(cur); e.preventDefault(); }
      if (e.key === 'ArrowLeft'){ cur = Math.max(cur - 1, 0); render(cur); e.preventDefault(); }
    });
  });
})();
</script>
```

## Do's and Don'ts

**Do**

- Keep the line at 2px with round joins and caps.
- Give every marker a 2px paper ring so crossings stay legible.
- Keep gridlines horizontal, hairline, solid, and behind the data.
- Direct-label the line ends — name in muted, value in ink.
- Keep a legend with line keys for two or more series; drop it for one.
- Use emphasis — ink plus one accent — whenever one series is the story.
- Reserve a right-hand gutter for end labels before placing the last x position.
- Ship the crosshair and the tooltip, with keyboard stepping that shows the same values.
- Ship direct labels or a table view whenever the multi-series palette is in play.
- Show a real gap where data is missing, rather than a segment spanning the hole.

**Don't**

- **Never build a dual-axis chart.** Two y-scales on one plot invent a correlation the data does not contain — the alignment of the two scales is arbitrary, and readers have flagged such charts as looking hallucinated. **One axis.** Two measures of different magnitude become two charts, small multiples, or both series indexed to a common base (=100 at t0).
- **Never cycle or generate hues.** The categorical order is fixed and eight slots long; a ninth color, generated or reused, is indistinguishable from an existing slot under CVD. Fold the tail into "Other," facet into small multiples, or encode with hue × shape.
- Never connect categories that are not a continuous, evenly spaced dimension.
- Never plot more than about five series on one line chart — facet instead.
- Never nudge colliding end labels apart; use a leader line or small multiples.
- Never dash a data line unless it means forecast or target, and then say so in the legend.
- Never put a number on every point.
- Never stack area fills, and never use a saturated area fill.
- Never color the label text with the series color; ink and muted only, with a line key carrying identity.
- Never dash a gridline, and never let the grid out-weigh the lines.
- Never let a fixed container height clip the period-label band.
- Never reuse a status color (good / warning / critical) as a series color.

## Fonts

| Role | Family | Fallback stack |
|---|---|---|
| headline | Source Serif 4 | `'Source Serif 4', Georgia, serif` |
| body, series names, legend | DM Sans | `'DM Sans', system-ui, sans-serif` |
| numerals, axis ticks, eyebrow | JetBrains Mono | `'JetBrains Mono', ui-monospace, monospace` |

These stacks are written so the chart still reads correctly with nothing installed — the fallbacks are Georgia, the system UI sans, and the system monospace. **Studiograph canvases cannot fetch fonts from the web**, so a Google Fonts link or an `@import` will silently do nothing. To get the real faces, upload the font files to your workspace and declare them with `@font-face` in the same style block as the chart tokens. The `using-google-fonts` skill in `your-brand` walks through the upload and the `@font-face` declaration; `using-custom-fonts` covers licensed or bespoke families. Until the files are uploaded, leave the stacks exactly as written — never swap in a web URL.
