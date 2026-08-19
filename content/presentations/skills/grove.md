---
entity_type: skill
entity_id: grove
created_at: '2026-08-14T21:17:47.840Z'
updated_at: '2026-08-14T21:17:47.840Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - dark
  - editorial
  - organic
  - design-system
name: Grove
description: >-
  Organic editorial deck theme — deep forest-green canvas with warm bone type
  and a single terracotta coral accent, plus an alternate parchment mode.
  Playfair Display 400 headlines with italic-coral emphasis, Jost 300 body,
  JetBrains Mono chrome, and a giant low-opacity serif watermark numeral. Use
  for sustainability and wellness brands, outdoor products, wineries and
  restaurants, literary and arts decks, advisory deliverables.
applies_to:
  - deck
  - slides
  - presentation
  - artifact-canvas
  - theme
loading: on-demand
status: draft
source: github.com/zarazhangrui/beautiful-html-templates @ e5e204f — templates/grove
---
# Grove

A quiet editorial-serif system in the register of a well-bound monograph or boutique brand book. Playfair Display at weight 400 carries every headline — **italicised in terracotta coral for emphasis, which is the system's signature move**. Jost at 300 is the "good paper" body face. JetBrains Mono holds labels and the thin chrome bars.

Deep forest green, warm cream type, one coral accent, and a near-invisible serif watermark numeral giving it the calm authority of a literary journal.

## When to use

Reach for Grove when the deck should feel organic, considered and grown-up — sustainability and wellness brands, outdoor and nature products, wineries and restaurants, literary or arts decks, advisory deliverables. It also suits tech, research or business decks that want patience over urgency.

**Avoid it** where the deck needs neon energy or rapid-fire pop. The forest canvas and Playfair serif commit to a slow, classical voice.

It shares Playfair with `cartesian` but goes somewhere different: Cartesian is stone-on-stone and cool, Grove is forest-and-coral and warm. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

**This is the only theme in the folder with two genuine surface modes.** Unlike `monochrome` and `vellum`, where the light/dark classes are vestigial, Grove's are real and both are used.

| Role | Value | Notes |
|---|---|---|
| `bg` | `#192b1b` | deep forest green — the default canvas |
| `bg-alt` | `#1e3221` | lighter forest, image placeholders |
| `bg-light` | `#e8e4d6` | **parchment mode** — quote slides, "page" moments |
| `bg-light-alt` | `#dedad0` | deeper parchment |
| `fg` | `#d4cfbf` | warm bone type on dark |
| `fg-2` / `fg-3` | 60% / 32% bone | secondary / tertiary on dark |
| `fg-light` | `#192b1b` | **the green doubles as text colour on parchment** |
| `fg-light-2` / `fg-light-3` | 58% / 33% green | secondary / tertiary on light |
| `accent` | `#c8524a` | terracotta coral |
| `border` / `border-light` | 12% bone / 14% green | every hairline |
| `watermark` | 6% bone / 6% green | the giant numeral |

**The coral vocabulary is closed.** Coral appears in exactly seven places: italic emphasis, kicker, the 36px rule, the em-dash bullet, stat figures, the quote mark, and the chapter ordinal. It is never a surface fill and never body copy.

## Typography

Four families (Playfair, Jost, JetBrains Mono, plus Noto SC for Chinese). **Playfair is always weight 400 — never bold.**

| Token | Size | Family | Use |
|---|---|---|---|
| `grove-num` | 346px | Playfair | the watermark numeral (−0.03em) |
| `display` | 192px | Playfair | cover display (lh 1, −0.01em) |
| `quote-mark` | 154px | Playfair | coral opening-quote glyph (lh 0.6) |
| `h1` | 106px | Playfair | primary headline |
| `stat-value` | 86px | Playfair | stat figure, **coral** (−0.02em) |
| `h1-statement` | 81px | Playfair | statement headline |
| `h2` / `quote-text` | 61px | Playfair | section headline / **italic** quote body |
| `h3` | 38px | Playfair | sub-headline |
| `lead` | 28px | Jost 300 | lead paragraph (lh 1.65) |
| `body-list-emph` | 27px | Jost 300 | emphasised list item |
| `body` | 20px | Jost 300 | body paragraph (lh 1.75) |
| `caption` | 16px | Jost 300 | caption |
| `label` / `kicker` / `chapter-num` / `stat-label` | 13px | JetBrains Mono 300 | chrome, 0.12–0.2em uppercase |

**The signature move:** `<em>` inside any Playfair headline switches that word to **italic terracotta coral**. Note this is the opposite of `vellum`, where italic is the default and `<em>` flips to roman — here the serif is upright and `<em>` adds both italic *and* colour.

Mono is always uppercase with ≥0.12em tracking. Never sentence case.

## Layout

- **Frame size:** 1920×1080.
- **Density: spacious.** The rhythm is one headline + one supporting paragraph + one accent rule. If a slide feels full, remove an element rather than shrinking type.

| Token | Value |
|---|---|
| `pad-x` | 154px |
| `pad-y` | 70px |
| `pad-quote-x` / `pad-quote-y` | 169px / 84px |
| `gap-lg` | 49px |
| `gap-md` | 30px |
| `gap-sm` | 15px |
| `rule-short` | 36px |

**No shadows, gradients or blur. No borders above 1px. No rounded corners** — the only round shape in the source is a 5px nav dot, which this port drops.

### The three structural units

1. **The kicker triad.** A mono coral kicker, then the 36px coral rule, then the headline. The source is explicit: *never place a kicker without a coral rule below it.* They are one compositional unit.
2. **Chrome and foot.** A thin top bar (mono label each side, 1px hairline below) and a matching bottom bar (section name and `NN / TT` counter, hairline above). Together they make the slide read as a page. **Content slides must carry both**; cover, chapter, quote and end slides hide both.
3. **The watermark numeral.** A 346px Playfair digit at 6% opacity, anchored bottom-right, pointer-events disabled. Belongs on chapter and section-opener slides — that corner needs the anchor.

### Other components

- **Stat card** — coral Playfair value over a mono uppercase label, with a 1px bottom hairline. **No background fill**; the card is defined by the rule and the type ratio alone.
- **Bullet list** — a `2em / 1fr` grid where the bullet is a coral em-dash in JetBrains Mono. **Never round bullets, hyphens or asterisks.**
- **Image placeholder** — solid `bg-alt` fill with a mono caption, min-height 30vh.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080. Set each frame's `background` to match its mode — `#192b1b` for dark slides, `#e8e4d6` for parchment — and `display.background` to `#192b1b`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&family=Jost:wght@200..600&family=Playfair+Display:wght@400..700&display=block');



:root{
  --bg:#192b1b; --bg-alt:#1e3221; --bg-light:#e8e4d6; --bg-light-alt:#dedad0;
  --fg:#d4cfbf; --fg-2:rgba(212,207,191,0.6); --fg-3:rgba(212,207,191,0.32);
  --fg-light:#192b1b; --fg-light-2:rgba(25,43,27,0.58); --fg-light-3:rgba(25,43,27,0.33);
  --accent:#c8524a;
  --border:rgba(212,207,191,0.12); --border-light:rgba(25,43,27,0.14);
  --wm-dark:rgba(212,207,191,0.06); --wm-light:rgba(25,43,27,0.06);
  --serif:'Playfair Display','Noto Serif SC',Georgia,serif;
  --sans:'Jost','Noto Sans SC',system-ui,sans-serif;
  --mono:'JetBrains Mono',monospace;
  --pad-x:154px; --pad-y:70px; --gap-lg:49px; --gap-md:30px; --gap-sm:15px;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

/* the two modes — both real */
.gv{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--bg);color:var(--fg);font-family:var(--sans);
  padding:var(--pad-y) var(--pad-x);display:flex;flex-direction:column;}
.gv.light{background:var(--bg-light);color:var(--fg-light);}
.gv.quote{padding:84px 169px;}

/* serif — always 400 */
.gv-serif{font-family:var(--serif);font-weight:400;}
.gv-display{font-size:192px;line-height:1;letter-spacing:-0.01em;}
.gv-h1{font-size:106px;line-height:1.1;}
.gv-statement{font-size:81px;line-height:1.15;}
.gv-h2{font-size:61px;line-height:1.2;}
.gv-h3{font-size:38px;line-height:1.3;}
.gv-quote-text{font-size:61px;line-height:1.35;letter-spacing:-0.01em;font-style:italic;}
.gv-quote-mark{font-family:var(--serif);font-weight:400;font-size:154px;
  line-height:0.6;color:var(--accent);}
.gv-stat-value{font-family:var(--serif);font-weight:400;font-size:86px;
  line-height:1;letter-spacing:-0.02em;color:var(--accent);}

/* THE signature move — em = italic coral */
.gv-serif em{font-style:italic;color:var(--accent);}

/* watermark numeral */
.gv-num{position:absolute;right:var(--pad-x);bottom:-0.15em;pointer-events:none;
  font-family:var(--serif);font-weight:400;font-size:346px;line-height:1;
  letter-spacing:-0.03em;color:var(--wm-dark);}
.gv.light .gv-num{color:var(--wm-light);}

/* sans body — always 300 */
.gv-lead{font-family:var(--sans);font-weight:300;font-size:28px;line-height:1.65;}
.gv-body{font-family:var(--sans);font-weight:300;font-size:20px;line-height:1.75;}
.gv-list-emph{font-family:var(--sans);font-weight:300;font-size:27px;line-height:1.6;}
.gv-caption{font-family:var(--sans);font-weight:300;font-size:16px;line-height:1.55;}
.gv-muted{color:var(--fg-2);} .gv.light .gv-muted{color:var(--fg-light-2);}

/* mono chrome — always uppercase, tracked */
.gv-label{font-family:var(--mono);font-weight:300;font-size:13px;letter-spacing:0.12em;}
.gv-kicker{font-family:var(--mono);font-weight:300;font-size:13px;
  letter-spacing:0.14em;text-transform:uppercase;color:var(--accent);}
.gv-chapter-num{font-family:var(--mono);font-weight:300;font-size:13px;
  letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);
  margin-bottom:var(--gap-md);}
.gv-stat-label{font-family:var(--mono);font-weight:300;font-size:13px;
  letter-spacing:0.12em;text-transform:uppercase;}

/* the kicker triad — never separate these */
.gv-rule{width:36px;height:1px;background:var(--accent);margin:var(--gap-sm) 0;}
.gv-rule-full{width:100%;height:1px;background:var(--border);}
.gv.light .gv-rule-full{background:var(--border-light);}

/* chrome + foot — both required on content slides */
.gv-chrome{display:flex;justify-content:space-between;align-items:center;
  padding-bottom:var(--gap-sm);border-bottom:1px solid var(--border);
  margin-bottom:var(--gap-md);
  font-family:var(--mono);font-weight:300;font-size:13px;letter-spacing:0.12em;
  text-transform:uppercase;}
.gv-foot{margin-top:auto;padding-top:var(--gap-sm);border-top:1px solid var(--border);
  display:flex;justify-content:space-between;align-items:center;
  font-family:var(--mono);font-weight:300;font-size:13px;letter-spacing:0.12em;
  text-transform:uppercase;}
.gv.light .gv-chrome{border-bottom-color:var(--border-light);}
.gv.light .gv-foot{border-top-color:var(--border-light);}

/* stat card — no fill, defined by rule + type ratio */
.gv-stat{border-bottom:1px solid var(--border);padding-bottom:var(--gap-md);}
.gv.light .gv-stat{border-bottom-color:var(--border-light);}

/* em-dash bullet — the only bullet glyph */
.gv-list{display:flex;flex-direction:column;gap:var(--gap-md);}
.gv-li{display:grid;grid-template-columns:2em 1fr;align-items:baseline;}
.gv-li::before{content:'—';font-family:var(--mono);color:var(--accent);}

/* image placeholder */
.gv-img{background:var(--bg-alt);color:var(--fg-3);min-height:324px;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--mono);font-weight:300;font-size:13px;
  letter-spacing:0.12em;text-transform:uppercase;}
.gv.light .gv-img{background:var(--border-light);color:var(--fg-light-3);}

/* entrance animation — ungated, see port notes */
@keyframes gv-fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:none;}}
@keyframes gv-fadeIn{from{opacity:0;}to{opacity:1;}}
.gv-anim{animation:gv-fadeUp .7s cubic-bezier(0.16,1,0.3,1) both;}
.gv-anim.fade{animation-name:gv-fadeIn;}
.gv-anim.d1{animation-delay:.08s;} .gv-anim.d2{animation-delay:.18s;}
.gv-anim.d3{animation-delay:.3s;}  .gv-anim.d4{animation-delay:.44s;}
.gv-anim.d5{animation-delay:.6s;}  .gv-anim.d6{animation-delay:.78s;}
</style>
```

### Cover frame (dark, no chrome)

```html
<div class="gv" style="justify-content:center;">
  <div class="gv-kicker gv-anim">Brand book · 2026</div>
  <div class="gv-rule gv-anim d1"></div>
  <h1 class="gv-serif gv-display gv-anim d2">Grove</h1>
  <p class="gv-lead gv-muted gv-anim d3" style="margin-top:30px;max-width:900px;">
    A working document for the people who plant things and wait.
  </p>
</div>
```

### Chapter frame with the watermark

```html
<div class="gv" style="justify-content:center;">
  <div class="gv-num">02</div>
  <div class="gv-chapter-num gv-anim">Chapter two</div>
  <h2 class="gv-serif gv-h1 gv-anim d1" style="max-width:1300px;">
    What grows <em>slowly</em> lasts
  </h2>
</div>
```

### Content frame (chrome + foot required)

```html
<div class="gv">
  <div class="gv-chrome">
    <span>Grove · Field notes</span>
    <span>Section 03</span>
  </div>
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
    <div class="gv-kicker">The practice</div>
    <div class="gv-rule"></div>
    <h2 class="gv-serif gv-h2" style="max-width:1200px;">
      Three things we do <em>every</em> season
    </h2>
    <div class="gv-list" style="margin-top:49px;max-width:1100px;">
      <div class="gv-li"><span class="gv-list-emph">Walk the whole site before deciding anything.</span></div>
      <div class="gv-li"><span class="gv-list-emph">Record what failed, in the same book as what worked.</span></div>
      <div class="gv-li"><span class="gv-list-emph">Leave one row unplanted, to see what arrives.</span></div>
    </div>
  </div>
  <div class="gv-foot">
    <span>Field notes</span>
    <span>04 / 12</span>
  </div>
</div>
```

### Quote frame (parchment mode)

```html
<div class="gv light quote" style="justify-content:center;">
  <div class="gv-quote-mark">&ldquo;</div>
  <p class="gv-serif gv-quote-text" style="max-width:1400px;margin-top:-20px;">
    The soil does not care how quickly you would like results.
  </p>
  <div class="gv-rule" style="margin-top:49px;"></div>
  <div class="gv-label" style="margin-top:20px;text-transform:uppercase;">
    Marta Egwu · Head grower
  </div>
</div>
```

## Do's and Don'ts

**Do** — run every serif at Playfair 400; use `<em>` for the italic-coral switch; run paragraphs in Jost 300; run all mono uppercase at ≥0.12em; default to forest green and use parchment for quote and "page" moments; pair every kicker with its coral rule; use the coral em-dash as the only bullet; put the watermark numeral on chapter slides; keep slides spacious.

**Don't** — use bold serif; add a fifth typeface; use coral as a surface fill or for body copy; add shadows, gradients or blur; use borders above 1px; round any corner; use round bullets, hyphens or asterisks; place a kicker without its rule; set mono in sentence case; omit chrome and foot on content slides; crowd the canvas.

## Fonts

**No new fonts were needed.** Playfair Display (hosted for `cartesian`), Jost (hosted for `monochrome`) and JetBrains Mono variable (hosted for `neo-grid-bold`) are all reused. This is the first theme in the folder to require zero uploads while using three families.

Playfair's variable file covers 400–700, but Grove only ever uses 400. Jost's covers 200–600; Grove uses 300.

The CJK fallbacks (Noto Serif SC, Noto Sans SC) are named in the stacks but not hosted. A Chinese-language deck will fall back to system CJK faces.

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. All three families are OFL-licensed.

## Notes on the port

**The source anticipated this port.** Grove's `design.md` opens with a "Frontend Slides Fixed-Stage Policy" instructing that the deck be generated as a fixed 1920×1080 stage, and that `vw`/`vh`/`clamp()` values be treated as *"design proportions to translate into 1920×1080 stage coordinates, not as live responsive rules."* That is precisely the conversion applied to every template in this folder — here it is the source's own stated intent rather than an inference.

Four departures:

1. **The fluid scale was resolved to fixed pixels**, per that policy. `display` 10vw → 192px, `grove-num` 18vw → 346px, `pad-x` 8vw → 154px, and so on. `h1-statement` resolves its `min(4.5vw, 7.5vh, 88px)` to 81px at this aspect ratio.
2. **The animation system was ungated, not removed.** The source sets `[data-anim] { opacity: 0 }` and reveals only via `.slide.is-active` — the fourth template in this folder with that trap, and carried over verbatim it would render every animated element invisible. But Grove's Do's state that animation *"is part of the system identity, not optional polish,"* so rather than dropping it, the gate is removed: `.gv-anim` runs its entrance on load with the source's own easing (`cubic-bezier(0.16, 1, 0.3, 1)`, 0.7s) and its stagger ladder (0 / .08 / .18 / .3 / .44 / .6 / .78s). Elements are visible whether or not the animation plays.
3. **The navigation layer is gone.** Nav dots and the inline keyboard handler are dropped. Note the source had already disabled its own fixed `#slide-counter`, reasoning that the slide-foot shows `NN / TT` — so the foot counter is the real page number, and it is kept.
4. **Component class names are prefixed `gv-`** to avoid collisions with the other themes in this folder.

**Both surface modes are genuine here.** `.slide.dark` and `.slide.light` resolve to different backgrounds and text colours — unlike `monochrome` and `vellum`, where the equivalent classes are vestigial. Set each frame's `background` to match the mode it uses, or the canvas paints forest green behind a parchment slide.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/grove` — `design.md`, `template.html`, `template.json`.
