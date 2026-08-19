---
entity_type: skill
entity_id: biennale-yellow
created_at: '2026-08-14T21:39:17.957Z'
updated_at: '2026-08-14T21:39:17.957Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - light
  - editorial
  - cultural
  - design-system
name: Biennale Yellow
description: >-
  Art-biennale poster deck theme — warm parchment flooded with soft solar-yellow
  radial blooms, a single deep indigo ink for all text, and an ember
  counter-glow. Instrument Serif display, Archivo micro-typography, JetBrains
  Mono for data. No shadows, no rounded corners, no cards — only 1px ink
  hairlines. Use for exhibitions, arts programmes, design conferences,
  curatorial pitches, literary publications and studio retrospectives.
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
  templates/biennale-yellow
---
# Biennale Yellow

A literary-editorial system in the register of an art-biennale catalogue or a quiet exhibition poster. Warm parchment grounds flooded with soft solar-yellow radial blooms, set against a single deep indigo ink. Instrument Serif carries display, Archivo handles sans chrome, JetBrains Mono holds numbers and metadata.

No drop shadows, no rounded corners, no bordered cards. The only structural line is a 1px ink rule. Somewhere between a folded museum brochure, a slow-reading literary quarterly, and a Mediterranean exhibition poster.

## When to use

Reach for Biennale Yellow when the deck should feel like a museum's annual programme — exhibition decks, arts-institution announcements, design conference brochures, curatorial pitches, literary publications, studio retrospectives. It suits any deck wanting Dutch-editorial atmosphere with a single unmistakable colour signature.

**Avoid it** where visual punch or multi-colour energy is needed. The warm-paper canvas and one-yellow palette are intentionally quiet.

It is the atmospheric counterpart to `cartesian` — both are warm, quiet and hairline-ruled, but Cartesian's depth comes from drafting geometry while this one's comes from light. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

| Role | Value | Notes |
|---|---|---|
| `paper` | `#E9E5DB` | warm parchment — the universal ground |
| `paper-deep` | `#DCD6C4` | deeper parchment for layered regions |
| `sun` | `#F1EE2E` | solar yellow — blooms, panels, block tiles |
| `sun-soft` | `#F8F39B` | the bloom's mid-stop |
| `haze` | `#F0DA7C` | the bloom's outer stop |
| `ink` | `#1B2566` | deep indigo — **all text, all rules** |
| `ember` | `#E26B4A` | peach counter-glow, always subordinate |

**One text colour, no exceptions.** Display, body, labels, mono — everything is full-opacity ink. There is no muted-ink secondary, no yellow text, no ember text. That single rule does a lot of work.

**Never invert.** Ink grounds with yellow or paper text are not part of the system; ink as a fill is reserved for chart bars and small rule elements.

## Typography

| Token | Size | Family | Use |
|---|---|---|---|
| `numeral-jumbo` | 538px | Instrument Serif | the giant editorial numeral (lh 0.84, −0.04em) |
| `display` | 238px | Instrument Serif | cover display (lh 0.86, −0.018em) |
| `numeral-lg` | 238px | Instrument Serif | large figure |
| `display-sm` | 194px | Instrument Serif | smaller display |
| `display-md` | 173px | Instrument Serif | mid display |
| `numeral-md` | 130px | Instrument Serif | mid figure |
| `display-it` | 119px | Instrument Serif | *italic display variant — see Fonts* |
| `date-rail` | 96px | Instrument Serif | the cover's top-right date rail |
| `headline` | 76px | Instrument Serif | section headline (lh 1.06) |
| `headline-sm` | 56px | Instrument Serif | sub-headline |
| `strand-num` | 38px | Instrument Serif | numbered list ordinal |
| `strand-title` | 32px | Instrument Serif | list row title |
| `ledger-title` | 30px | Instrument Serif | ledger row title |
| `body-lede` | 18px | Archivo 400 | lead paragraph (lh 1.55) |
| `body` | 16px | Archivo 400 | body (lh 1.5) |
| `mono-date` | 16px | JetBrains Mono | date callout |
| `micro-label` | 14px | Archivo 600 | **uppercase, 0.18em** |
| `mono-data` | 14px | JetBrains Mono | ledger figure, chart value |
| `body-sm` | 13px | Archivo 400 | small body |
| `rail-label` | 13px | Archivo 600 | **uppercase, 0.32em** — the widest tracking |
| `pagenum` | 13px | JetBrains Mono | page number, 75% opacity |
| `micro-label-tight` | 12px | Archivo 600 | **uppercase, 0.16em** |

**Instrument Serif is always weight 400** with tight line-height (0.84–1.06) and negative tracking (−0.018 to −0.04em). Bold serif flattens the system.

**Every uppercase label is Archivo 600 tracked 0.16–0.32em.** Without the wide tracking they read as code rather than editorial.

**Mono is exclusively numerical and metadata** — dates, ledger figures, chart values, page numbers. Never display, never body.

## Layout

- **Frame size:** 1920×1080.
- **Density: medium**, but sparse in feel — no cards, no panel stacks, no multi-region container grids.

| Token | Value |
|---|---|
| `pad-edge` | 76px |
| `pad-region` | 80px |
| `pad-foot` | 56px |
| `gap-region` | 48px |
| `gap-strand` | 19px |
| `gap-footer-col` | 44px |
| `pad-strand-y` | 17px |
| `pagenum-bottom` / `-right` | 26px / 46px |

**Zero shadows, zero border-radius, no border above 1px.** The hairline is the entire border vocabulary.

### The blooms — the depth mechanism

**Every surface needs at least one sun-bloom.** The source is explicit that a flat parchment surface *reads as broken* — atmosphere is how this system creates depth, in place of shadows or elevation.

A **sun-bloom** is a large soft radial of solar yellow, sized 42–70% of the frame, placed off-centre or behind a focal element. An **ember-bloom** is a small peach radial at 15–22% opacity in the opposite corner, giving warm-cool tension without raising saturation. It is always subordinate.

```css
.by-bloom{position:absolute;inset:0;pointer-events:none;z-index:0;
  background:
    radial-gradient(ellipse 42% 38% at 52% 42%,
      rgba(241,238,46,0.95) 0%, rgba(241,238,46,0.65) 38%,
      rgba(240,218,124,0.22) 65%, rgba(233,229,219,0) 88%),
    radial-gradient(ellipse 28% 30% at 88% 16%,
      rgba(226,107,74,0.22) 0%, rgba(226,107,74,0) 70%);}
```

### Other components

- **Hairline rule** — 1px solid ink. Header-band underline, ledger rows, footer columns, strand separators. A **soft** variant at 18–20% ink is used between rows in dense lists where full weight would feel oppressive.
- **Yellow panel** — a full-bleed sun column or third of the frame. The strongest colour statement; ink text sits on top at full opacity.
- **Block tiles** — translucent sun rectangles at 40–70% on an 8×4 grid behind cover or colophon surfaces, suggesting a layered poster underprint.
- **Strand row** — a `56px 1fr` grid: serif numeral, then content, separated by a soft hairline.
- **Bars** — solid ink; the featured row uses `bar-lit`, a sun fill with a 1px ink stroke.
- **Pagenum** — mono, bottom-right, 75% opacity ink, on **every** surface. The only persistent chrome.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, `background: "#E9E5DB"` on both `display` and each frame, and everything below in `shared.head`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100..900&family=Instrument+Serif:wght@400&family=JetBrains+Mono:wght@100..800&display=block');



:root{
  --paper:#E9E5DB; --paper-deep:#DCD6C4;
  --sun:#F1EE2E; --sun-soft:#F8F39B; --haze:#F0DA7C;
  --ink:#1B2566; --ember:#E26B4A;
  --serif:'Instrument Serif',Georgia,serif;
  --sans:'Archivo',sans-serif;
  --mono:'JetBrains Mono',ui-monospace,monospace;
  --pad-edge:76px; --pad-region:80px; --pad-foot:56px;
  --gap-region:48px; --gap-strand:19px; --gap-footer-col:44px;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

.by{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--paper);color:var(--ink);font-family:var(--sans);}
.by > *{position:relative;z-index:1;}

/* the bloom layer — at least one per surface */
.by-bloom{position:absolute;inset:0;pointer-events:none;z-index:0;}
.by-bloom.cover{background:
  radial-gradient(ellipse 42% 38% at 52% 42%,rgba(241,238,46,0.95) 0%,
    rgba(241,238,46,0.65) 38%,rgba(240,218,124,0.22) 65%,rgba(233,229,219,0) 88%),
  radial-gradient(ellipse 28% 30% at 88% 16%,rgba(226,107,74,0.22) 0%,
    rgba(226,107,74,0) 70%);}
.by-bloom.wide{background:
  radial-gradient(ellipse 70% 60% at 50% 50%,rgba(241,238,46,0.7) 0%,
    rgba(248,243,155,0.42) 32%,rgba(240,218,124,0.18) 56%,rgba(233,229,219,0) 80%),
  radial-gradient(circle 600px at 12% 88%,rgba(226,107,74,0.15) 0%,
    rgba(226,107,74,0) 70%);}

/* serif — always 400, always ink */
.by-serif{font-family:var(--serif);font-weight:400;color:var(--ink);}
.by-numeral-jumbo{font-size:538px;line-height:0.84;letter-spacing:-0.04em;}
.by-display{font-size:238px;line-height:0.86;letter-spacing:-0.018em;}
.by-numeral-lg{font-size:238px;line-height:0.9;letter-spacing:-0.04em;}
.by-display-sm{font-size:194px;line-height:0.86;letter-spacing:-0.018em;}
.by-display-md{font-size:173px;line-height:0.86;letter-spacing:-0.018em;}
.by-numeral-md{font-size:130px;line-height:0.92;letter-spacing:-0.01em;}
.by-date-rail{font-size:96px;line-height:0.96;letter-spacing:-0.005em;text-align:right;}
.by-headline{font-size:76px;line-height:1.06;letter-spacing:-0.005em;}
.by-headline-sm{font-size:56px;line-height:1;}
.by-strand-num{font-size:38px;line-height:1;}
.by-strand-title{font-size:32px;line-height:1.1;}
.by-ledger-title{font-size:30px;line-height:1.15;}

/* sans — micro-typography */
.by-lede{font-family:var(--sans);font-weight:400;font-size:18px;line-height:1.55;}
.by-body{font-family:var(--sans);font-weight:400;font-size:16px;line-height:1.5;}
.by-body-sm{font-family:var(--sans);font-weight:400;font-size:13px;line-height:1.5;}
.by-micro{font-family:var(--sans);font-weight:600;font-size:14px;line-height:1.2;
  letter-spacing:0.18em;text-transform:uppercase;}
.by-micro-tight{font-family:var(--sans);font-weight:600;font-size:12px;line-height:1.2;
  letter-spacing:0.16em;text-transform:uppercase;}
.by-rail-label{font-family:var(--sans);font-weight:600;font-size:13px;line-height:1;
  letter-spacing:0.32em;text-transform:uppercase;}

/* mono — numbers and metadata only */
.by-mono{font-family:var(--mono);font-weight:400;font-size:14px;
  line-height:1.4;letter-spacing:0.04em;}
.by-mono-date{font-family:var(--mono);font-weight:400;font-size:16px;
  line-height:1.4;letter-spacing:0.02em;}
.by-pagenum{position:absolute;right:46px;bottom:26px;z-index:5;
  font-family:var(--mono);font-weight:400;font-size:13px;
  letter-spacing:0.08em;color:var(--ink);opacity:0.75;}

/* rules — 1px only */
.by-rule{height:1px;background:var(--ink);width:100%;}
.by-rule-soft{height:1px;background:rgba(27,37,102,0.2);width:100%;}
.by-rule-v{width:1px;background:var(--ink);align-self:stretch;}

/* yellow panel — the strongest colour statement */
.by-panel{background:var(--sun);color:var(--ink);}

/* block tiles — poster underprint */
.by-tiles{position:absolute;inset:0;z-index:0;pointer-events:none;
  display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(8,1fr);}
.by-tiles i{display:block;}
.by-tiles i.on{background:rgba(241,238,46,0.55);}

/* strand row */
.by-strand{display:grid;grid-template-columns:56px 1fr;gap:24px;
  padding-bottom:17px;border-bottom:1px solid rgba(27,37,102,0.2);}

/* bars */
.by-bar{height:17px;background:var(--ink);}
.by-bar.lit{background:var(--sun);border:1px solid var(--ink);}
</style>
```

### Cover frame

```html
<div class="by">
  <div class="by-bloom cover"></div>
  <div class="by-serif by-date-rail" style="position:absolute;top:56px;right:76px;">
    12 — 28<br>Sept
  </div>
  <div style="position:absolute;left:76px;top:50%;transform:translateY(-50%);">
    <div class="by-micro" style="margin-bottom:32px;">Ninth edition</div>
    <h1 class="by-serif by-display">Slow<br>Light</h1>
  </div>
  <div style="position:absolute;left:76px;right:76px;bottom:56px;
              display:grid;grid-template-columns:repeat(3,1fr);gap:44px;
              border-top:1px solid var(--ink);padding-top:24px;">
    <div class="by-body-sm">Kunsthal Noord<br>Rotterdam</div>
    <div class="by-body-sm">Curated by<br>Ilse Warmerdam</div>
    <div class="by-mono">2026 / IX</div>
  </div>
  <div class="by-pagenum">01 / 08</div>
</div>
```

### Strand list frame

```html
<div class="by">
  <div class="by-bloom wide"></div>
  <div style="position:absolute;inset:80px 76px;display:flex;flex-direction:column;">
    <div style="display:flex;justify-content:space-between;align-items:baseline;
                border-bottom:1px solid var(--ink);padding-bottom:24px;">
      <h2 class="by-serif by-headline">The programme</h2>
      <span class="by-rail-label">Four strands</span>
    </div>
    <div style="margin-top:48px;display:flex;flex-direction:column;gap:19px;">
      <div class="by-strand">
        <span class="by-serif by-strand-num">01</span>
        <div>
          <div class="by-serif by-strand-title">Rooms that hold light</div>
          <p class="by-body" style="margin-top:6px;max-width:900px;">
            Eleven interiors photographed at the same hour across a year.
          </p>
        </div>
      </div>
      <!-- three more -->
    </div>
  </div>
  <div class="by-pagenum">03 / 08</div>
</div>
```

## Do's and Don'ts

**Do** — use parchment as the universal ground; set every line of text in ink; keep Instrument Serif at 400 with tight leading and negative tracking; put at least one sun-bloom on every surface; pair it with an ember-bloom in the opposite corner for warm-cool tension; use 1px ink hairlines for every separator; track uppercase labels 0.16–0.32em in Archivo 600; use a full-bleed yellow panel when a region needs maximum commitment; put the mono pagenum bottom-right on every surface; reserve mono for numbers and metadata.

**Don't** — add any shadow; round any corner; use borders above 1px; set the serif bold; introduce a second text colour; crowd the canvas with cards or panel grids; invert to ink grounds with yellow or paper text.

## Fonts

Instrument Serif and Archivo are newly hosted. JetBrains Mono variable is reused from `neo-grid-bold`.

**Archivo is not Archivo Black.** They are separate families — `creative-mode` uses Archivo Black (a single ultra-heavy display cut), while this theme uses Archivo (a variable text family, 100–900). Both are now hosted as distinct assets; do not point one skill at the other's file.

**Only the roman cut of Instrument Serif is hosted.** The design tokens define a `display-it` italic variant, but the stylesheet's `.display-it` class sets no `font-style`, the template never uses the class, and there are no `<em>` tags anywhere — the italic is unreachable in practice. If you want the italic display variant, upload Instrument Serif italic and add `font-style: italic` to `.by-display-it`.

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. All three families are OFL-licensed.

## Notes on the port

Four departures. The second would have produced a blank deck.

1. **The fluid scale was resolved to fixed pixels.** Every size is a `clamp()` against `vw`/`vh`, resolving against the browser viewport rather than the frame. Each value above is the source's own evaluated at 1920×1080 — `display` resolves through `min(14.6vw, 22vh)` to 238px, `numeral-jumbo` to 538px, `pad-edge` to 76px. Note `pad-foot` hits its 56px *floor* at this aspect ratio rather than its `5vh` value.
2. **The active-slide machinery was removed.** The source sets `.slide { opacity: 0; pointer-events: none }` and reveals only via `.slide.active` — the **seventh** template in this folder with that pattern. Carried across verbatim, every frame would render invisible.
3. **The navigation layer is gone.** The vanilla-JS handler (arrow keys, space, Home/End, touch swipe) is dropped; the eight slides become eight frames.
4. **Component class names are prefixed `by-`**, and the per-slide-type bloom gradients (`.s-cover::before`, `.s-manifesto::before`) became reusable `.by-bloom` variants so any frame can carry either. The gradient stops are the source's own, unchanged.

**A stacking rule was added** — `.by > * { position: relative; z-index: 1 }` — so content sits above the bloom layer, since the blooms are full-bleed absolute elements.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/biennale-yellow` — `design.md`, `template.html`, `template.json`.
