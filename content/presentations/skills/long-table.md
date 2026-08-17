---
entity_type: skill
entity_id: long-table
created_at: '2026-08-14T21:44:09.295Z'
updated_at: '2026-08-14T21:44:09.295Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - light
  - warm
  - hospitality
  - single-ink
  - design-system
name: Long Table
description: >-
  Single-ink supper-club deck theme — every mark rendered in one warm rust
  terracotta on buttery cream paper, with a 4px radial-dot texture giving it
  Risograph printed-stock quality. Bricolage Grotesque 800 uppercase display
  against italic Fraunces body, outline-only pills, badges and cards. Use for
  supper clubs, dinner series, small hospitality brands, studio open houses,
  membership pitches, wine and food catalogues.
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
  templates/long-table
---
# Long Table

A **single-ink** editorial system in the register of a supper-club poster, a Risograph zine, or a small-press dinner programme. Every visible mark — every headline, paragraph, border, rule, pill and page number — is one warm rust terracotta on buttery cream paper.

The only variation is opacity. The aesthetic borrows from one-colour screen printing and letterpress, formats where each additional colour is a separate pass and therefore a deliberate decision.

## When to use

Reach for Long Table when the deck should feel warm, intimate and people-facing — supper clubs and dinner series, community gatherings, small restaurants and hospitality brands, creative-studio open houses, membership or subscription pitches, wine and food catalogues, modern lifestyle brands.

**Avoid it** where corporate polish, technical density, or a cold minimalist register is needed. The rust palette and bold serif mix are intentionally warm.

It shares Bricolage Grotesque with `mat`, but goes somewhere different: Mat is mid-century workbench, Long Table is printed dinner programme. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

**One ink. The constraint is the identity.**

| Role | Value | Notes |
|---|---|---|
| `paper` | `#FAF1E2` | buttery cream ground |
| `paper-d` / `paper-vd` | `#F2E5CF` / `#E8D7B6` | deeper cream tones |
| `ink` | `#B53D2A` | warm rust terracotta — **everything** |
| `ink-dp` | `#8E2D1F` | deeper ink, used sparingly |
| `ink-78` | ink at 78% | de-emphasised metadata |
| `ink-32` | ink at 32% | dashed and internal dividers |
| `ink-50` | ink at 50% | the paper-texture dots |

Variation comes from opacity — 100% for primary marks, 78% for de-emphasised metadata, 32% for internal dividers, 10% for texture. **Never a second hue.**

## Typography

Two families in deliberate contrast: **Bricolage Grotesque uppercase** for display, **Fraunces italic** for everything else.

| Token | Size | Family | Use |
|---|---|---|---|
| `display-jumbo-numeral` | 410px | Fraunces *italic* | **the hero anchor** (lh 0.86, −0.02em) |
| `display-cover` | 162px | Bricolage 800 | cover title, uppercase |
| `display` | 140px | Bricolage 800 | display headline |
| `headline-xl` | 113px | Bricolage 800 | large headline |
| `headline` | 108px | Bricolage 800 | standard headline |
| `headline-md` | 91px | Bricolage 800 | medium headline |
| `quote` | 80px | Bricolage 700 | pull-quote, uppercase |
| `card-title` | 44px | Bricolage 800 | card name |
| `edition-label` | 30px | Fraunces *italic* | "Edition N." label |
| `course-name` / `info-value` | 28px | Bricolage 700 | course name, info value |
| `body-serif-italic-lg` | 28px | Fraunces *italic* | large body (lh 1.45) |
| `tagline` | 26px | Fraunces *italic* | tagline (lh 1.35) |
| `body-serif-italic` / `stats` | 22px | Fraunces *italic* | body, stats (lh 1.5) |
| `pill-text` | 20px | Fraunces *italic* | pill and tag label |
| `edition-label-tracked` / `who-tag` | 18px | Bricolage 700 | tracked 0.18em / who tag |
| `body-roman` | 17px | Fraunces **roman** | card body description |
| `meta-tag` / `info-key` / `pagenum` | 16px | Fraunces *italic* | metadata, page number |
| `nav-hint` | 13px | Fraunces *italic* | navigation hint |

**Fraunces runs italic by default.** Roman is the exception, used only for info-keys (where italic tracking feels wrong) and card body descriptions (where italic at small size hurts readability). This inverts the usual convention and is the system's typographic signature.

**Bricolage is always uppercase**, weight 800 (or 700 for quote, course-name and who-tag), with negative tracking. Never sentence case.

The **italic Fraunces jumbo numeral at up to 410px** is the hero typographic anchor on cover-class slides.

## Layout

- **Frame size:** 1920×1080.
- **Density: rich but curated** — one major Bricolage display moment plus 2–4 supporting groups. Single-element slides feel underweight; eight-element slides feel broken.

| Token | Value |
|---|---|
| `pad-h-default` | 96px |
| `pad-h-wide` | 134px |
| `pad-h-narrow` | 230px |
| `pad-top-default` / `-cover` | 108px / 65px |
| `pad-bottom-default` / `-wide` | 119px / 151px |
| `gap-section` | 32px |
| `gap-content` | 22px |
| `gap-row` | 17px |
| `gap-tight` | 13px |
| `border-weight` | **1.5px** |

**Nothing is ever filled.** Cards, pills, badges and rect-tags are outline-only — filled rectangles in the ink colour do not exist. No shadows, gradients, blur or filters.

**Radius is ternary:** 999px (pill), 50% (badge), or 0. Never 4, 8 or 12px.

### The paper texture — not optional

Every slide carries a 4px radial-dot overlay at 10% opacity. The source is explicit: a flat cream background without it *reads as digital, not paper*.

```css
.lt-texture{position:absolute;inset:0;pointer-events:none;z-index:1;opacity:0.10;
  background-image:radial-gradient(circle at 1px 1px,
    rgba(181,61,42,0.5) 0.5px, transparent 1px);
  background-size:4px 4px;}
```

### Components

- **Pill** — 999px outlined, italic Fraunces, generous padding. **For actions.**
- **Rect-tag** — the same but sharp-cornered. **For metadata and status.** Do not conflate the two.
- **Edition badge** — a ~40px circular outlined badge holding one italic digit. **Always paired with an italic "EDITION N." label** — the circle and label are one unit, never separated.
- **Outlined card** — 1.5px ink border, with a *solid* 32% rule above the content and a *dashed* 32% rule below it. That solid/dashed pairing is the system's rhythm.
- **Topbar divider** — a 1.5px ink bottom border under a topbar. The universal page-divider device.
- **Ledger row** — a multi-column grid (typically `80px 130px 1.6fr 0.9fr auto`) with a 1px 32% bottom border, reading as a reservation log.
- **Pagenum** — italic Fraunces, bottom-right, on every slide.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, `background: "#FAF1E2"` on both `display` and each frame, and everything below in `shared.head`.

### `shared.head`

```html
<style>
@font-face{font-family:'Bricolage Grotesque';font-style:normal;font-weight:200 800;
  font-display:block;src:url('/api/assets/{{ASSET_ID}}/BricolageGrotesque-Variable.woff2') format('woff2');}
@font-face{font-family:'Fraunces';font-style:normal;font-weight:400 700;
  font-display:block;src:url('/api/assets/{{ASSET_ID}}/Fraunces-Variable.woff2') format('woff2');}
@font-face{font-family:'Fraunces';font-style:italic;font-weight:400 700;
  font-display:block;src:url('/api/assets/{{ASSET_ID}}/Fraunces-Italic-Variable.woff2') format('woff2');}
:root{
  --paper:#FAF1E2; --paper-d:#F2E5CF; --paper-vd:#E8D7B6;
  --ink:#B53D2A; --ink-dp:#8E2D1F;
  --ink-78:rgba(181,61,42,0.78); --ink-50:rgba(181,61,42,0.5);
  --ink-32:rgba(181,61,42,0.32);
  --display:'Bricolage Grotesque',sans-serif;
  --serif:'Fraunces',Georgia,serif;
  --pad-h:96px; --pad-h-wide:134px; --pad-h-narrow:230px;
  --pad-top:108px; --pad-bottom:119px;
  --gap-section:32px; --gap-content:22px; --gap-row:17px; --gap-tight:13px;
}
*{box-sizing:border-box;margin:0;padding:0;}

.lt{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--paper);color:var(--ink);font-family:var(--serif);
  padding:var(--pad-top) var(--pad-h) var(--pad-bottom);}
.lt.wide{padding-left:var(--pad-h-wide);padding-right:var(--pad-h-wide);}
.lt.narrow{padding-left:var(--pad-h-narrow);padding-right:var(--pad-h-narrow);}
.lt.cover{padding-top:65px;}
.lt > *{position:relative;z-index:2;}

/* paper texture — every slide */
.lt-texture{position:absolute;inset:0;pointer-events:none;z-index:1;opacity:0.10;
  background-image:radial-gradient(circle at 1px 1px,
    rgba(181,61,42,0.5) 0.5px, transparent 1px);
  background-size:4px 4px;}

/* Bricolage — uppercase always */
.lt-display-cover{font-family:var(--display);font-weight:800;font-size:162px;
  line-height:0.92;letter-spacing:-0.012em;text-transform:uppercase;}
.lt-display{font-family:var(--display);font-weight:800;font-size:140px;
  line-height:0.9;letter-spacing:-0.012em;text-transform:uppercase;}
.lt-h-xl{font-family:var(--display);font-weight:800;font-size:113px;
  line-height:0.9;letter-spacing:-0.012em;text-transform:uppercase;}
.lt-h{font-family:var(--display);font-weight:800;font-size:108px;
  line-height:0.9;letter-spacing:-0.012em;text-transform:uppercase;}
.lt-h-md{font-family:var(--display);font-weight:800;font-size:91px;
  line-height:0.92;letter-spacing:-0.012em;text-transform:uppercase;}
.lt-quote{font-family:var(--display);font-weight:700;font-size:80px;
  line-height:0.95;letter-spacing:-0.012em;text-transform:uppercase;}
.lt-card-title{font-family:var(--display);font-weight:800;font-size:44px;
  line-height:0.95;letter-spacing:-0.008em;text-transform:uppercase;}
.lt-course{font-family:var(--display);font-weight:700;font-size:28px;
  line-height:1.05;letter-spacing:-0.005em;text-transform:uppercase;}
.lt-info-value{font-family:var(--display);font-weight:700;font-size:28px;
  line-height:1.1;letter-spacing:-0.005em;text-transform:uppercase;}
.lt-tracked{font-family:var(--display);font-weight:700;font-size:18px;
  letter-spacing:0.18em;text-transform:uppercase;}
.lt-who{font-family:var(--display);font-weight:700;font-size:18px;
  letter-spacing:-0.005em;text-transform:uppercase;}

/* Fraunces — italic by default */
.lt-numeral{font-family:var(--serif);font-style:italic;font-weight:400;
  font-size:410px;line-height:0.86;letter-spacing:-0.02em;}
.lt-edition{font-family:var(--serif);font-style:italic;font-weight:400;
  font-size:30px;line-height:1;}
.lt-body-lg{font-family:var(--serif);font-style:italic;font-weight:400;
  font-size:28px;line-height:1.45;}
.lt-tagline{font-family:var(--serif);font-style:italic;font-weight:400;
  font-size:26px;line-height:1.35;}
.lt-body{font-family:var(--serif);font-style:italic;font-weight:400;
  font-size:22px;line-height:1.5;}
.lt-pill-text{font-family:var(--serif);font-style:italic;font-weight:400;
  font-size:20px;line-height:1;}
.lt-meta{font-family:var(--serif);font-style:italic;font-weight:400;
  font-size:16px;line-height:1.4;}
.lt-info-key{font-family:var(--serif);font-style:italic;font-weight:400;
  font-size:16px;letter-spacing:0.16em;text-transform:uppercase;}

/* roman — the two exceptions only */
.lt-roman{font-family:var(--serif);font-style:normal;font-weight:400;
  font-size:17px;line-height:1.45;}

.lt-78{color:var(--ink-78);}

/* outline-only components */
.lt-pill{display:inline-flex;align-items:center;border:1.5px solid var(--ink);
  border-radius:999px;padding:11px 32px;
  font-family:var(--serif);font-style:italic;font-size:20px;line-height:1;color:var(--ink);}
.lt-rect-tag{display:inline-flex;align-items:center;border:1.5px solid var(--ink);
  padding:10px 22px;
  font-family:var(--serif);font-style:italic;font-size:20px;line-height:1;color:var(--ink);}
.lt-badge{width:40px;height:40px;border:1.5px solid var(--ink);border-radius:50%;
  display:inline-flex;align-items:center;justify-content:center;
  font-family:var(--serif);font-style:italic;font-size:20px;line-height:1;}
.lt-card{border:1.5px solid var(--ink);padding:28px 26px;
  display:flex;flex-direction:column;}
.lt-card-top{border-bottom:1px solid var(--ink-32);padding-bottom:14px;margin-bottom:18px;}
.lt-card-meta{border-top:1px dashed var(--ink-32);padding-top:14px;margin-top:auto;}

/* rules */
.lt-topbar{display:flex;justify-content:space-between;align-items:baseline;
  border-bottom:1.5px solid var(--ink);padding-bottom:var(--gap-content);}
.lt-rule-dashed{height:0;border-top:1px dashed var(--ink-32);width:100%;}
.lt-rule{height:0;border-top:1px solid var(--ink-32);width:100%;}

/* ledger */
.lt-ledger-row{display:grid;grid-template-columns:80px 130px 1.6fr 0.9fr auto;
  gap:24px;align-items:center;padding:15px 0;border-bottom:1px solid var(--ink-32);}

/* pagenum */
.lt-pagenum{position:absolute;right:80px;bottom:56px;z-index:3;
  font-family:var(--serif);font-style:italic;font-size:16px;letter-spacing:0.02em;}
</style>
```

### Cover frame

```html
<div class="lt cover">
  <div class="lt-texture"></div>
  <div style="display:flex;justify-content:space-between;align-items:flex-start;">
    <span class="lt-tracked">Supper Club</span>
    <span class="lt-meta">Rotterdam · 2026</span>
  </div>
  <div style="display:flex;align-items:center;gap:64px;margin-top:64px;">
    <div class="lt-numeral">09</div>
    <div>
      <h1 class="lt-display-cover">Long<br>Table</h1>
      <p class="lt-tagline" style="margin-top:22px;max-width:560px;">
        Nine courses, one table, twenty-two strangers.
      </p>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:16px;margin-top:32px;">
    <span class="lt-pill">Reserve a seat</span>
    <span class="lt-pill-text" style="opacity:0.7;">·</span>
    <span class="lt-rect-tag">Sold out ’25</span>
  </div>
  <div class="lt-pagenum">01 / 08</div>
</div>
```

### Card grid frame

```html
<div class="lt">
  <div class="lt-texture"></div>
  <div class="lt-topbar">
    <h2 class="lt-h-md">The menu</h2>
    <span class="lt-meta">Nine courses</span>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:32px;">
    <div class="lt-card">
      <div class="lt-card-top">
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="lt-badge">1</span>
          <span class="lt-edition">Edition 9.</span>
        </div>
      </div>
      <h3 class="lt-card-title">Bread &amp; cultured butter</h3>
      <p class="lt-roman" style="margin-top:12px;">
        Sourdough from the bakery two doors down, butter churned that morning.
      </p>
      <div class="lt-card-meta">
        <span class="lt-meta">Course one · 19:00</span>
      </div>
    </div>
    <!-- two more -->
  </div>
  <div class="lt-pagenum">04 / 08</div>
</div>
```

## Do's and Don'ts

**Do** — commit to single-ink rendering with opacity for variation; put the paper texture on every slide; run Bricolage at 800 (or 700) uppercase with negative tracking; run Fraunces italic by default; use the italic jumbo numeral as the cover anchor; pair every edition badge with its italic label; use the solid-above / dashed-below card rhythm; distinguish pill (action) from rect-tag (metadata); put the page number on every slide; keep slides rich but curated.

**Don't** — introduce a second ink; fill any shape; use shadows, gradients, blur or filters; omit the texture; run Bricolage in sentence case; default Fraunces to roman; use borders 2px+; use a medium radius; separate the badge from its label; crowd with eight small elements.

## Fonts

Bricolage Grotesque is reused from `mat`. **Fraunces roman and italic are newly hosted** — both are required here, because italic is the *default* body voice rather than an emphasis device, so synthetic obliquing would affect nearly every line of body text on every slide.

Fraunces carries `opsz`, `SOFT` and `WONK` axes beyond weight; the files hosted are the standard `opsz 9..144, wght 400..700` cuts for each style.

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. Both families are OFL-licensed.

## Notes on the port

Four departures. The second would have produced a blank deck.

1. **The fluid scale was resolved to fixed pixels.** Every size is a `clamp()` against `vw`/`vh`, resolving against the browser viewport rather than the frame. Each value above is the source's own evaluated at 1920×1080 — the jumbo numeral resolves through `min(22vw, 38vh)` to 410px, `pad-h-default` to 96px, and so on.
2. **The active-slide machinery was removed.** The source sets `.slide { opacity: 0; pointer-events: none }` and reveals only via `.slide.active` — the **eighth** template in this folder with that pattern. Carried across verbatim, every frame would render invisible.
3. **The navigation layer is gone.** The vanilla-JS handler and the fixed nav-hint are dropped; the eight slides become eight frames. The page number is kept, since it is content chrome rather than a control.
4. **The texture moved from stage to slide.** In the source the dot overlay sits once on the shared stage behind all slides. Studiograph frames are independent, so `.lt-texture` is a per-frame element — include it in every frame. Content sits at `z-index: 2` above it.

**Component class names are prefixed `lt-`** to avoid collisions with the other themes in this folder.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/long-table` — `design.md`, `template.html`, `template.json`.
