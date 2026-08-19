---
entity_type: skill
entity_id: cartesian
created_at: '2026-08-14T21:13:38.993Z'
updated_at: '2026-08-14T21:13:38.993Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - light
  - editorial
  - neutral
  - design-system
name: Cartesian
description: >-
  Quiet museum-catalogue deck theme — a five-tone warm-stone palette with
  Playfair Display serif headlines, Inter body, and 1px taupe hairlines as the
  only structure. Thin drafting-paper geometry (rings, dashed arcs, hairlines)
  drifts behind sparse content. Use for investment theses, white papers,
  advisory deliverables, longform research, gallery and cultural decks.
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
  templates/cartesian
---
# Cartesian

A quiet museum-catalogue system: Playfair Display serif headlines, Inter body, and a five-tone warm-stone palette. Minimal geometric line decorations — thin rings, dashed arcs, vertical and horizontal hairlines — drift behind the content, suggesting drafting paper and compass work.

Every divider is a single 1px line in muted taupe. Nothing is bold, nothing is loud. The references are Vignelli's editorial work, museum catalogues, and pencil-and-tracing-paper planning documents.

## When to use

Reach for Cartesian when the deck should feel quiet, considered and grown-up — investment theses, white papers, advisory deliverables, longform research, gallery and cultural decks, editorial features, founder reflections. It suits any deck where restraint is the message.

**Avoid it** where the deck needs visual heat, multiple accents, or urgency. The warm-neutral palette is deliberately low-energy.

Among the light editorial themes here it sits closest to `monochrome`, but warmer and softer: Monochrome is ivory-and-ink with zero decoration, Cartesian adds stone tones and drafting geometry. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

Warm bone and stone only. **No saturated colour anywhere** — the system runs entirely on tonal contrast and typography.

| Role | Value | Notes |
|---|---|---|
| `bg-primary` | `#EDE8E0` | warm bone canvas |
| `bg-secondary` | `#E2DBD1` | stone fill — placeholders, portrait frames |
| `text-primary` | `#1A1A1A` | ink — **all Playfair headlines** |
| `text-secondary` | `#5A5A5A` | body copy |
| `accent` | `#8A8178` | taupe — **small text only** |
| `line` | `#B8B0A4` | every 1px hairline |
| `white-overlay` | `rgba(255,255,255,0.3)` | tracing-paper card fill |

**The colour rule that defines the system:** headlines are always ink, never taupe. Taupe is reserved for labels, attributions, numerals and micro-text. Inverting that reads as a different deck.

## Typography

Two faces, fixed pairing. **Playfair at weight 400 everywhere** — the thin-stroke didone aesthetic depends on it, and bolding breaks it.

| Token | Size | Family | Use |
|---|---|---|---|
| `display` | 88px | Playfair | cover display (lh 1.1) |
| `quote-mark` | 80px | Playfair | decorative quote glyph |
| `h1` | 72px | Playfair | primary headline |
| `h2` | 48px | Playfair | section headline |
| `stat-figure` / `team-initial` | 32px | Playfair | stat figure, portrait initial |
| `h3` | 26px | Playfair | sub-headline |
| `agenda-numeral` | 24px | Playfair | agenda numeral |
| `card-headline` | 21px | Playfair | card title |
| `subtitle` | 21px | Inter | subtitle (lh 1.5) |
| `timeline-headline` | 19px | Playfair | timeline entry |
| `body` | 18px | Inter | body copy (lh 1.6) |
| `body-sm` | 14px | Inter | small body |
| `attribution` | 14px | Inter | **uppercase, 2px tracking** |
| `label` | 12px | Inter 500 | **uppercase, 3px tracking** |
| `micro` | 11px | Inter | **uppercase, 2px tracking** |

Small Inter text is **always uppercase with 2–3px letter-spacing** — never sentence case. That tracking is what makes it read as catalogue chrome rather than body copy.

## Layout

- **Frame size:** 1920×1080.
- **Padding:** 43px vertical, 77px horizontal.
- **Density: low.** Sparse, breathing layouts read as elegant; packed layouts read as broken.

| Token | Value |
|---|---|
| `pad-y` | 43px |
| `pad-x` | 77px |
| `gap-xl` | 115px |
| `gap-lg` | 96px |
| `gap-md` | 58px |
| `gap-sm` | 22px |
| `card-pad` | 43px 38px |

**Every structural border is 1px.** No 2px, no thicker. No shadows, no elevation, no gradients. **No rounded corners** — the only round shapes are true circles.

### The drafting geometry

This is the system's atmosphere, and the restraint rule is explicit: **one or two geometric decorations per slide, never more.**

- **geo-circle** — thin solid taupe ring at 50% opacity.
- **geo-arc** — thin *dashed* taupe ring at 30% opacity. Pairs with a solid ring to suggest compass construction.
- **geo-ring** — the largest variant: a 960px centred ring at 30% opacity with an inner dashed ring at 70% diameter via `::before`.
- **vertical-line** — a 1px hairline at 30% opacity, anchored ~154px from the left edge. Drafting-paper feel.
- **horizontal-accent** — a 384px × 1px rule in **ink, not taupe**. The one strong mark in the system; use sparingly on cover or closing.

### Other components

- **Card** — 1px taupe outline with a 30%-white fill that lets the canvas tone bleed through. No radius, no shadow. "Tracing paper."
- **Card icon** — a 40px taupe ring holding a Roman numeral or letter in taupe.
- **Agenda row** — numeral left, label right, separated only by a 1px taupe hairline.
- **Timeline** — a single 1px horizontal taupe line. No nodes, no markers.
- **Image placeholder** — stone fill with two crossed 1px diagonals at ±30° via `::before`/`::after`, forming an X. The system's signature placeholder.
- **Team portrait** — a 230px circle in stone, ringed in taupe, holding one Playfair initial in taupe.
- **Charts** — ink stroke for the primary series, taupe `5,5` dashed for comparison, stone grid lines, taupe axis ticks.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, `background: "#EDE8E0"` on both `display` and each frame, and everything below in `shared.head`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:wght@400..700&display=block');


:root{
  --bg:#EDE8E0; --bg-2:#E2DBD1; --ink:#1A1A1A; --text-2:#5A5A5A;
  --accent:#8A8178; --line:#B8B0A4; --overlay:rgba(255,255,255,0.3);
  --serif:'Playfair Display',Georgia,serif;
  --sans:'Inter',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

.ca{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--bg);color:var(--ink);font-family:var(--sans);
  padding:43px 77px;display:flex;flex-direction:column;}

/* serif — always weight 400, always ink */
.ca-serif{font-family:var(--serif);font-weight:400;color:var(--ink);line-height:1.1;}
.ca-display{font-size:88px;} .ca-h1{font-size:72px;} .ca-h2{font-size:48px;}
.ca-h3{font-size:26px;} .ca-card-h{font-size:21px;} .ca-timeline-h{font-size:19px;}
.ca-stat{font-size:32px;line-height:1;} .ca-agenda-num{font-size:24px;line-height:1;}
.ca-initial{font-size:32px;line-height:1;color:var(--accent);}
.ca-quote-mark{font-family:var(--serif);font-weight:400;font-size:80px;
  line-height:1;color:var(--accent);}

/* sans — body and chrome */
.ca-subtitle{font-family:var(--sans);font-weight:400;font-size:21px;
  line-height:1.5;color:var(--text-2);}
.ca-body{font-family:var(--sans);font-weight:400;font-size:18px;
  line-height:1.6;color:var(--text-2);}
.ca-body-sm{font-family:var(--sans);font-weight:400;font-size:14px;
  line-height:1.6;color:var(--text-2);}

/* small text — always uppercase, always tracked, always taupe */
.ca-attribution{font-family:var(--sans);font-weight:400;font-size:14px;
  line-height:1.4;letter-spacing:2px;text-transform:uppercase;color:var(--accent);}
.ca-label{font-family:var(--sans);font-weight:500;font-size:12px;
  line-height:1;letter-spacing:3px;text-transform:uppercase;color:var(--accent);}
.ca-micro{font-family:var(--sans);font-weight:400;font-size:11px;
  line-height:1;letter-spacing:2px;text-transform:uppercase;color:var(--accent);}

/* tracing-paper card */
.ca-card{border:1px solid var(--line);background:var(--overlay);padding:43px 38px;}
.ca-card-icon{width:40px;height:40px;border:1px solid var(--line);border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--serif);font-weight:400;font-size:16px;color:var(--accent);}

/* rules */
.ca-agenda-row{display:flex;align-items:baseline;gap:38px;padding:22px 0;
  border-bottom:1px solid var(--line);}
.ca-rule{height:1px;background:var(--line);width:100%;}
.ca-accent-rule{width:384px;height:1px;background:var(--ink);}
.ca-vline{position:absolute;top:0;bottom:0;left:154px;width:1px;
  background:var(--line);opacity:0.3;pointer-events:none;}

/* drafting geometry — max two per slide */
.ca-geo{position:absolute;border:1px solid var(--line);border-radius:50%;
  opacity:0.5;pointer-events:none;}
.ca-geo.dashed{border-style:dashed;opacity:0.3;}
.ca-geo-ring{position:absolute;width:960px;height:960px;border:1px solid var(--line);
  border-radius:50%;opacity:0.3;pointer-events:none;}
.ca-geo-ring::before{content:'';position:absolute;inset:15%;
  border:1px dashed var(--line);border-radius:50%;}

/* image placeholder — crossed diagonals */
.ca-img{position:relative;background:var(--bg-2);border:1px solid var(--line);
  overflow:hidden;display:flex;align-items:center;justify-content:center;}
.ca-img::before,.ca-img::after{content:'';position:absolute;left:-10%;right:-10%;
  top:50%;height:1px;background:var(--line);}
.ca-img::before{transform:rotate(30deg);}
.ca-img::after{transform:rotate(-30deg);}
.ca-img span{position:relative;z-index:1;background:var(--bg-2);padding:0 12px;}

/* portrait */
.ca-portrait{width:230px;height:230px;border-radius:50%;border:1px solid var(--line);
  background:var(--bg-2);display:flex;align-items:center;justify-content:center;}
</style>
```

### Cover frame

```html
<div class="ca" style="justify-content:center;">
  <div class="ca-vline"></div>
  <div class="ca-geo-ring" style="right:-300px;top:-200px;"></div>
  <div class="ca-label" style="margin-bottom:32px;">Investment thesis · 2026</div>
  <h1 class="ca-serif ca-display" style="max-width:1300px;">The patient position</h1>
  <p class="ca-subtitle" style="margin-top:28px;max-width:820px;">
    Why the next decade rewards holding rather than trading.
  </p>
  <div class="ca-accent-rule" style="margin-top:48px;"></div>
  <div class="ca-attribution" style="margin-top:24px;">Meridian Partners · October 2026</div>
</div>
```

### Agenda frame

```html
<div class="ca">
  <div class="ca-geo" style="width:520px;height:520px;right:-120px;bottom:-180px;"></div>
  <div class="ca-geo dashed" style="width:380px;height:380px;right:-50px;bottom:-110px;"></div>
  <div class="ca-label" style="margin-bottom:24px;">Contents</div>
  <h2 class="ca-serif ca-h2" style="margin-bottom:40px;">What we will cover</h2>
  <div>
    <div class="ca-agenda-row">
      <span class="ca-serif ca-agenda-num" style="width:60px;">I</span>
      <span class="ca-serif ca-h3">The position</span>
    </div>
    <div class="ca-agenda-row">
      <span class="ca-serif ca-agenda-num" style="width:60px;">II</span>
      <span class="ca-serif ca-h3">Evidence</span>
    </div>
    <div class="ca-agenda-row">
      <span class="ca-serif ca-agenda-num" style="width:60px;">III</span>
      <span class="ca-serif ca-h3">Risks we accept</span>
    </div>
  </div>
</div>
```

### Cards

```html
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:38px;">
  <div class="ca-card">
    <div class="ca-card-icon" style="margin-bottom:28px;">I</div>
    <h3 class="ca-serif ca-card-h">Time horizon</h3>
    <p class="ca-body" style="margin-top:14px;">Ten years, not ten quarters.</p>
  </div>
  <!-- two more -->
</div>
```

## Do's and Don'ts

**Do** — use a single 1px taupe line for every separator; set every Playfair element at weight 400; render headlines in ink; render labels, attributions and numerals in taupe, uppercase, tracked 2–3px; layer one or two geometric rings at 20–50% opacity; keep the Playfair/Inter pairing; let slides breathe; use stone fill for placeholders and portrait frames; use the ink accent rule sparingly.

**Don't** — introduce any saturated accent; render Playfair in taupe; bold any Playfair element; add shadows, elevation or gradients; round anything but true circles; use borders thicker than 1px; crowd the slide; pair Playfair with a different sans; set small text in sentence case; use more than two geo decorations per slide.

## Fonts

Playfair Display (variable 400–700) is now hosted in this folder's asset library. Inter was already hosted for `pink-script` and is reused.

**Only the roman cut is hosted** — the source loads a Playfair italic axis but never uses it (zero `font-style: italic` rules in the stylesheet), so it would be dead weight. If you introduce italic later, upload the italic `.woff2` and add a matching `@font-face`.

The variable file covers 400–700, but **the system only ever uses 400**. The heavier range is available for compatibility, not for use.

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. Both families are OFL-licensed.

## Notes on the port

Five departures. The second one would have produced a blank deck.

1. **The fluid type scale was resolved to fixed pixels.** Sizes mix `rem` and `clamp()` against `vw`; in a Studiograph frame the viewport units resolve against the browser window rather than the 1920×1080 frame. Every value above is the source's own evaluated at 1920×1080 — `display` resolves to its 5.5rem ceiling (88px), `pad-x` 4vw → 77px, and so on. `rem` is resolved at the browser default of 16px, since the source never overrides the root font-size.
2. **The active-slide machinery was removed.** The source sets `.slide { opacity: 0; visibility: hidden }` and reveals only the current slide via `.slide.active`, driven by its inline keyboard handler. Carried across verbatim, **every frame would render invisible** — and here doubly so, since `visibility: hidden` compounds the opacity. This is the third template in this folder with that trap.
3. **The navigation chrome is gone.** Nav arrows and nav dots are dropped since Studiograph navigates. The slide counter can be kept as a static per-frame element if you want page numbers; it is not part of the visual system the way `vellum`'s pin-note is.
4. **Component class names are prefixed `ca-`** to avoid collisions with the other themes in this folder.
5. **The `geo-ring` inner dashed ring uses `inset: 15%`** to achieve the source's "70% diameter" `::before`. Same result, expressed as an inset rather than a size — simpler to position when the ring is anchored off-canvas.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/cartesian` — `design.md`, `template.html`, `template.json`.
