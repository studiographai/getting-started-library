---
entity_type: skill
entity_id: editorial-forest
created_at: '2026-08-14T20:21:20.878Z'
updated_at: '2026-08-17T01:46:45.017Z'
created_by: philip-kleemann
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - theme
  - deck
  - editorial
  - serif
  - warm
  - design-system
name: Editorial Forest
description: >-
  Serif-led editorial deck theme — deep forest green, dusty rose pink and
  oat-cream paper, with Source Serif 4 at weight 500 scaling to 220px and
  JetBrains Mono as chrome. Flat, paper-feeling, colour-block surfaces with 2px
  hairline rules and no shadows. Use for quarterly reviews, internal readouts,
  studio updates, creative-agency decks, research recaps — anything that should
  feel warm and unhurried rather than corporate.
applies_to:
  - deck
  - slides
  - presentation
  - artifact-canvas
  - theme
loading: on-demand
status: draft
source: >-
  github.com/zarazhangrui/beautiful-html-templates @ e5e204f —
  templates/editorial-forest
---
# Editorial Forest

A serif-led editorial system in the register of a Penguin classic, a quiet annual report, or an art-book spread. One confident typographic voice — Source Serif 4 at weight 500, scaled to 220px for cover and stat moments — with JetBrains Mono as the editorial chrome. Deep forest green, dusty rose pink, and oat-cream paper.

The page should feel printed, not glassy.

## When to use

Reach for Editorial Forest when the deck should feel considered and unhurried — quarterly reviews, internal readouts, studio updates, creative-agency presentations, research recaps, programme announcements, team retrospectives.

**Avoid it** for anything that needs to feel urgent, punchy, or sales-driven. The palette and rhythm are intentionally quiet.

Among the themes in this folder it is the warmest of the editorial group: `monochrome` strips colour out entirely, `cobalt-grid` keeps one cold accent on a grid. Editorial Forest is the one with actual warmth. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

Three primary surfaces plus tonal siblings. **Two surface colours per slide is typical; three is loud.**

| Role | Value | Notes |
|---|---|---|
| `green` | `#2e4a2a` | deep forest — slide surface, tile fill, border, rule |
| `green-deep` | `#243a21` | text colour on pink surfaces, where plain green lacks contrast |
| `green-lite` | `#3a5a36` | second green for tiles sitting beside a primary green tile; carries pink text |
| `pink` | `#e89cb1` | dusty rose — surface, tile fill, on-green text, bar series, monogram border |
| `pink-deep` | `#d27e96` | border on pink-filled tiles, so the edge reads against the fill |
| `cream` | `#efe7d4` | oat paper — default content surface, on-green body text |
| `cream-2` | `#e6dcc4` | tile fill on the cream surface; pairs with a 2px green border |
| `ink` | `#1a1a17` | body text on cream. A warm near-black — never pure black |

**Text colour by surface:** on cream → green headlines, ink body. On green → cream headlines (pink for hero-scale), cream body. On pink → green-deep.

**Accessibility limit, from the source:** green-on-pink and pink-on-green are fine at 84px+ but fail WCAG AA at body sizes. Keep small text cream-on-green or ink-on-cream. Do not set 26px body in pink-on-green.

## Typography

Two faces only. Never a third.

- **Source Serif 4** at **weight 500** for nearly every display moment — not 400, not 700. Heavy enough to feel authored, light enough to keep the page calm. Body text drops to **weight 400**; running body at 500 reads heavy.
- **JetBrains Mono** at **weight 500**, uppercase, tracked 0.08–0.18em, for every label, caption, tag, axis tick and footline.

The `opsz` optical-size axis (8–60) is engaged, so the same face renders subtly different letterforms at 26px versus 220px — small sizes pick up extra contrast automatically. The source calls this critical to the system's quality.

| Token | Size | Weight | Use |
|---|---|---|---|
| `display-hero` / `stat-figure` | 220px | 500 | cover title, closing title, KPI figure (−0.02/−0.03em, lh 0.92) |
| `display` | 140px | 500 | statement / pull-quote (lh 1.02) |
| `stat-figure-unit` | 110px | 500 | unit suffix beside a KPI figure |
| `headline-xl` | 96px | 500 | primary section headline (lh 0.96) |
| `headline` | 84px | 500 | data-slide headline; large topic-tile title |
| `headline-sm` | 80px | 500 | stats-slide headline |
| `title-card` | 68px | 500 | step-tile title |
| `title-card-sm` / `figure-caption-serif` | 56px | 500 | topic-tile title; figure caption |
| `name` | 44px | 600 | attribution name — the one place 600 appears |
| `meta-value` | 32px | 500 | definition-list value |
| `body-lg` | 32px | 400 | lead paragraph (lh 1.32) |
| `body` | 30px | 400 | body paragraph (lh 1.38) |
| `body-card` | 26px | 400 | body inside a tile (lh 1.34) |
| `label` | 26px | 500 | mono label, 0.18em |
| `label-tight` / `axis-mono` | 26px | 500 | mono tile ordinal 0.14em; axis tick 0.08em |
| `caption-mono` | 24px | 500 | mono caption, footline, tile foot, 0.12–0.16em |

Every display headline carries negative letter-spacing (−0.01 to −0.03em) and tight line-height (0.92–1.0). **Never set the serif in italic or underline** — emphasis is size and colour.

## Layout

- **Frame size:** 1920×1080. The source is already authored at this size in fixed pixels, so every value below is used as-is.

| Padding | Value | Use |
|---|---|---|
| default | `96px 120px` | standard slides |
| narrow | `100px 120px` | data, framework, stats |
| wide | `100px 140px` | cover, summary |
| statement | `130px 160px` | the big-quote slide |

**Density: spacious and committed.** One strong subject per slide, surrounded by deep negative space. Reach for fewer elements at larger sizes rather than more elements at smaller sizes. A slide with two competing content blocks reads as broken.

**Radii:** 6px topic tiles, 8px step tiles, 3px on bar tops, 2px on legend swatches, 50% on the monogram circle. Nothing else is round.

**Rules:** 2px solid, or 2.5px on step-tile borders. Never 1px, never 4px+. Colour follows the region — green on cream, pink on green.

**No shadows, no gradients, no glows, no rgba transparency on surfaces.** Elevation is colour-block contrast and hairline rules.

### Chrome anatomy

Every slide carries a **topbar** — a mono label left, and a monogram circle or counter right. The source is explicit: a slide without it "loses its editorial spine." Most slides also carry a **footline**, a mono caption row pinned to the bottom edge.

Reserve the monogram circle for cover and summary moments; using it everywhere dilutes it.

## The eight layouts

| Layout | Surface | Composition |
|---|---|---|
| **Cover** | green | topbar + monogram, 220px pink hero title, mono footline |
| **Agenda** | cream | headline + label head, then a `1.5fr 1fr 1fr` × 2 tile grid — one tall green tile spanning both rows beside pink, green-lite and bordered cream-2 tiles |
| **Statement** | pink | mono label, 140px green-deep blockquote, attribution row with a 44px serif name |
| **Two column** | cream | `880px 1fr` — a green figure panel with caption left, eyebrow + 96px headline + body + 3-column meta list right |
| **Data** | green | head with legend, then a bar chart: mono y-axis, 2px inner-edge axes, paired pink/cream bars with value labels above |
| **Framework** | cream | headline, then four step tiles — bordered cream, solid green, solid pink — each with ordinal, title, body, and a rule-topped marker row |
| **Stats** | green | headline, then a pink-ruled 3-column KPI row with 220px pink figures and 110px cream units |
| **Summary** | green | topbar, 220px pink closing title, closing grid |

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, with `background` set per frame to that slide's surface colour, and everything below in `shared.head`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&family=Source+Serif+4:wght@200..900&display=block');


:root{
  --green:#2e4a2a; --green-deep:#243a21; --green-lite:#3a5a36;
  --pink:#e89cb1; --pink-deep:#d27e96;
  --cream:#efe7d4; --cream-2:#e6dcc4; --ink:#1a1a17;
  --serif:'Source Serif 4','Source Serif Pro',Georgia,serif;
  --mono:'JetBrains Mono',ui-monospace,Menlo,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}

/* slide surfaces */
.ef{position:relative;width:1920px;height:1080px;overflow:hidden;
  padding:96px 120px;background:var(--cream);color:var(--ink);
  font-family:var(--serif);}
.ef.wide{padding:100px 140px;}
.ef.narrow{padding:100px 120px;}
.ef.statement{padding:130px 160px;}
.ef.on-green{background:var(--green);color:var(--cream);}
.ef.on-pink{background:var(--pink);color:var(--green-deep);}

/* chrome */
.ef-topbar{display:flex;justify-content:space-between;align-items:center;gap:40px;}
.ef-head{display:flex;justify-content:space-between;align-items:baseline;gap:40px;}
.ef-label{font-family:var(--mono);font-size:26px;font-weight:500;
  letter-spacing:0.18em;text-transform:uppercase;}
.ef-label.tight{letter-spacing:0.14em;}
.ef-caption{font-family:var(--mono);font-size:24px;font-weight:500;
  letter-spacing:0.12em;text-transform:uppercase;}
.ef-mark{width:130px;height:130px;border-radius:50%;border:2px solid var(--pink);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--mono);font-size:28px;font-weight:500;letter-spacing:0.1em;}
.ef-footline{position:absolute;bottom:80px;left:140px;right:140px;
  display:flex;justify-content:space-between;
  font-family:var(--mono);font-size:28px;font-weight:500;
  letter-spacing:0.12em;text-transform:uppercase;}

/* display type */
.ef-hero{font-family:var(--serif);font-weight:500;font-size:220px;
  line-height:0.92;letter-spacing:-0.02em;}
.ef-display{font-family:var(--serif);font-weight:500;font-size:140px;
  line-height:1.02;letter-spacing:-0.02em;}
.ef-h1{font-family:var(--serif);font-weight:500;font-size:96px;
  line-height:0.96;letter-spacing:-0.02em;}
.ef-h2{font-family:var(--serif);font-weight:500;font-size:84px;
  line-height:1;letter-spacing:-0.02em;}
.ef-h2-sm{font-family:var(--serif);font-weight:500;font-size:80px;
  line-height:0.98;letter-spacing:-0.02em;}
.ef-name{font-family:var(--serif);font-weight:600;font-size:44px;line-height:1;}
.ef-lead{font-family:var(--serif);font-weight:400;font-size:32px;line-height:1.32;}
.ef-body{font-family:var(--serif);font-weight:400;font-size:30px;line-height:1.38;
  text-wrap:pretty;}
.ef-body-card{font-family:var(--serif);font-weight:400;font-size:26px;line-height:1.34;}

/* topic tiles */
.ef-grid-agenda{display:grid;grid-template-columns:1.5fr 1fr 1fr;
  grid-template-rows:1fr 1fr;gap:24px;}
.ef-topic{border-radius:6px;padding:40px 40px 36px;display:flex;
  flex-direction:column;justify-content:space-between;min-height:0;}
.ef-topic .num{font-family:var(--mono);font-size:26px;font-weight:500;letter-spacing:0.14em;}
.ef-topic h3{font-family:var(--serif);font-weight:500;font-size:56px;
  line-height:0.98;letter-spacing:-0.01em;margin-top:28px;}
.ef-topic .foot{font-family:var(--mono);font-size:24px;font-weight:500;
  letter-spacing:0.12em;text-transform:uppercase;margin-top:20px;}
.t-green{background:var(--green);color:var(--pink);grid-row:span 2;}
.t-green h3{font-size:84px;}
.t-pink{background:var(--pink);color:var(--green-deep);}
.t-greenlite{background:var(--green-lite);color:var(--pink);}
.t-cream{background:var(--cream-2);color:var(--green);border:2px solid var(--green);}

/* step tiles */
.ef-flow{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;align-items:stretch;}
.ef-step{border-radius:8px;padding:40px 32px 32px;display:flex;flex-direction:column;
  min-height:470px;border:2.5px solid var(--green);background:var(--cream);color:var(--green);}
.ef-step.fill{background:var(--green);color:var(--pink);border-color:var(--green);}
.ef-step.pinkfill{background:var(--pink);color:var(--green-deep);border-color:var(--pink-deep);}
.ef-step .num{font-family:var(--mono);font-size:26px;font-weight:500;letter-spacing:0.16em;}
.ef-step h3{font-family:var(--serif);font-weight:500;font-size:68px;
  line-height:0.96;letter-spacing:-0.01em;margin:24px 0;}
.ef-step .marker{margin-top:auto;display:flex;justify-content:space-between;
  align-items:baseline;padding-top:24px;border-top:2px solid currentColor;
  font-family:var(--mono);font-size:24px;font-weight:500;
  letter-spacing:0.12em;text-transform:uppercase;}

/* meta definition list */
.ef-meta{margin-top:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:36px;
  border-top:2px solid var(--green);padding-top:32px;}
.ef-meta dt{font-family:var(--mono);font-size:24px;font-weight:500;
  letter-spacing:0.14em;text-transform:uppercase;color:var(--green);margin-bottom:8px;}
.ef-meta dd{font-family:var(--serif);font-size:32px;font-weight:500;color:var(--ink);}

/* KPI row */
.ef-kpi-row{margin-top:80px;display:grid;grid-template-columns:repeat(3,1fr);
  gap:60px;border-top:2px solid var(--pink);padding-top:56px;}
.ef-kpi{display:flex;flex-direction:column;gap:16px;}
.ef-kpi .tag{font-family:var(--mono);font-size:24px;font-weight:500;
  letter-spacing:0.16em;text-transform:uppercase;color:var(--pink);}
.ef-kpi .big{font-family:var(--serif);font-weight:500;font-size:220px;
  line-height:0.92;letter-spacing:-0.03em;color:var(--pink);}
.ef-kpi .big .unit{font-size:110px;color:var(--cream);margin-left:4px;}
.ef-kpi .desc{font-family:var(--serif);font-weight:400;font-size:30px;
  line-height:1.32;color:var(--cream);margin-top:8px;}

/* bar chart */
.ef-chart{margin-top:110px;height:520px;display:grid;
  grid-template-columns:80px 1fr;grid-template-rows:1fr 60px;column-gap:24px;}
.ef-chart .yaxis{display:flex;flex-direction:column;justify-content:space-between;
  font-family:var(--mono);font-size:26px;font-weight:500;color:var(--cream);
  text-align:right;padding-right:8px;}
.ef-chart .plot{position:relative;border-left:2px solid var(--cream);
  border-bottom:2px solid var(--cream);padding:0 30px;display:flex;
  align-items:flex-end;justify-content:space-between;gap:30px;}
.ef-chart .grid-lines{position:absolute;inset:0;pointer-events:none;
  background-image:repeating-linear-gradient(to top,transparent 0 calc(25% - 1px),
    rgba(239,231,212,0.18) calc(25% - 1px) 25%);}
.ef-bar-group{display:flex;flex-direction:column;align-items:center;flex:1;
  height:100%;justify-content:flex-end;gap:8px;}
.ef-bar-pair{display:flex;align-items:flex-end;gap:12px;height:100%;
  width:100%;justify-content:center;}
.ef-bar{width:56px;border-radius:3px 3px 0 0;position:relative;}
.ef-bar.a{background:var(--pink);}
.ef-bar.b{background:var(--cream);}
.ef-bar .val{position:absolute;top:-38px;left:50%;transform:translateX(-50%);
  font-family:var(--mono);font-size:24px;font-weight:500;color:var(--cream);}
.ef-xlabels{grid-column:2;display:flex;justify-content:space-between;
  padding:18px 30px 0;font-family:var(--mono);font-size:26px;font-weight:500;
  color:var(--cream);letter-spacing:0.08em;text-transform:uppercase;}
.ef-xlabels span{flex:1;text-align:center;}
.ef-legend{display:flex;gap:36px;margin-top:18px;font-family:var(--mono);
  font-size:26px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;}
.ef-legend .sw{display:inline-block;width:26px;height:26px;margin-right:12px;
  vertical-align:-4px;border-radius:2px;}
</style>
```

### Cover frame

```html
<div class="ef wide on-green" style="color:var(--pink);">
  <div class="ef-topbar">
    <span class="ef-label">Quarterly review · Q3 2026</span>
    <div class="ef-mark">FO</div>
  </div>
  <h1 class="ef-hero" style="margin-top:40px;">The quiet<br>quarter</h1>
  <div class="ef-footline">
    <span>Field Office</span>
    <span>01 / 08</span>
  </div>
</div>
```

### Agenda frame

```html
<div class="ef" style="padding:90px 120px;display:grid;grid-template-rows:auto 1fr;gap:36px;">
  <div class="ef-head">
    <h2 class="ef-h1" style="color:var(--green);white-space:nowrap;">What we covered</h2>
    <span class="ef-label" style="color:var(--green);white-space:nowrap;">Agenda</span>
  </div>
  <div class="ef-grid-agenda">
    <div class="ef-topic t-green">
      <span class="num">01</span>
      <div><h3>The shape of the quarter</h3>
        <p class="ef-body-card" style="margin-top:16px;">Three shifts that changed how the work got made.</p></div>
      <span class="foot">Section one</span>
    </div>
    <div class="ef-topic t-pink"><span class="num">02</span><h3>Findings</h3><span class="foot">Research</span></div>
    <div class="ef-topic t-greenlite"><span class="num">03</span><h3>The method</h3><span class="foot">Process</span></div>
    <div class="ef-topic t-cream"><span class="num">04</span><h3>Numbers</h3><span class="foot">Measures</span></div>
    <div class="ef-topic t-cream"><span class="num">05</span><h3>What’s next</h3><span class="foot">Closing</span></div>
  </div>
</div>
```

### Statement frame

```html
<div class="ef statement on-pink" style="display:flex;flex-direction:column;justify-content:space-between;">
  <span class="ef-label" style="color:var(--green-deep);">On method</span>
  <blockquote class="ef-display" style="max-width:1560px;margin-top:48px;">
    The work got better when we stopped trying to make it faster.
  </blockquote>
  <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:60px;gap:60px;">
    <div style="display:flex;flex-direction:column;gap:14px;">
      <span class="ef-name">Lin Ito</span>
      <span class="ef-caption">Studio lead</span>
    </div>
    <span class="ef-caption">03 / 08</span>
  </div>
</div>
```

### KPI row (stats slide)

```html
<div class="ef-kpi-row">
  <div class="ef-kpi">
    <span class="tag">Throughput</span>
    <span class="big">18<span class="unit">wks</span></span>
    <p class="desc">Median time from brief to shipped, down from twenty-six.</p>
  </div>
  <!-- two more -->
</div>
```

## Do's and Don'ts

**Do** — run every display headline in Source Serif 4 weight 500 with negative tracking and tight leading; run every label in JetBrains Mono 500 uppercase with wide tracking; put a topbar on every slide; pick one dominant surface per slide; rotate tile fills through green / pink / green-lite / bordered cream-2 rather than repeating one; use 2px hairlines to separate stacked sections; scale display type aggressively when there is room; keep padding generous; reserve the monogram for cover and summary.

**Don't** — add box-shadow anywhere; introduce a third typeface; set the serif in italic or underline; render mono in sentence case or untracked; add a fourth colour family; use 1px or 4px+ borders; put two competing blocks on one slide; use rgba for surfaces; run serif body at weight 500; omit the topbar.

## Fonts

Source Serif 4 (variable, weights 400–600 with the `opsz` 8–60 axis) and JetBrains Mono (variable, 100–800) are hosted in this folder's asset library and wired into the `@font-face` block above.

The optical-size axis is preserved deliberately — the source names it as critical, and a non-`opsz` fallback flattens the size-aware letterform contrast that makes 26px captions and 220px headlines feel like one family.

Note this skill references a **different** JetBrains Mono asset from `monochrome`. That one uses a static weight-400 cut, which is all it needs; Editorial Forest sets mono at weight 500 throughout, so it needs the variable file. Do not swap them.

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. Both families are OFL-licensed.

## Notes on the port

This template ported more cleanly than the others in this folder, because it was already authored for a fixed 1920×1080 canvas in real pixels — no fluid scale to resolve. Four departures:

1. **The `deck-stage` runtime is gone.** The source wraps its slides in a `<deck-stage>` custom element that handles canvas scaling and navigation (arrow keys, space, PgUp/PgDn, Home/End), and the design notes list it as an undocumented runtime dependency. Studiograph steps frames itself, so the wrapper is dropped and the eight `<section>` slides become eight frames. Nothing else depended on it — unlike `monochrome`, there is no animation layer keyed to an active-slide class, so nothing goes invisible.
2. **Per-slide surfaces became modifier classes.** The source styles each slide by its semantic class (`.cover`, `.statement`, `.data`…), which bakes surface colour, padding and text colour together. Here the surface and padding are separated into `.on-green` / `.on-pink` and `.wide` / `.narrow` / `.statement` modifiers so the layouts can be recombined. Every value is the source's own. **Set the frame's `background` to match the surface class**, or the canvas paints cream behind a green slide.
3. **Component class names are prefixed `ef-`.** The source uses bare names (`.label`, `.topic`, `.step`, `.bar`) which would collide with other themes if two decks were ever authored in one workspace context. Behaviour is unchanged.
4. **Hardcoded identity strings are left as placeholders.** The source notes that the monogram text, footline strings and tile counters carry hardcoded content that must be replaced per deck. The examples above use placeholder text — replace it.

**Carried over as constraints, not decoration:** the bar chart uses hand-set percentage heights with no data binding (extending it means computing heights manually), and the green-on-pink / pink-on-green contrast limit is a real accessibility boundary, not a style preference.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/editorial-forest` — `design.md`, `template.html`, `template.json`.
