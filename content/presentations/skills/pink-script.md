---
entity_type: skill
entity_id: pink-script
created_at: '2026-08-14T21:00:20.031Z'
updated_at: '2026-08-14T21:00:20.031Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - dark
  - editorial
  - fashion
  - design-system
name: Pink Script (After Hours)
description: >-
  Nocturnal couture editorial deck theme — hot fuchsia on warm-black, with a
  radial-gradient surface, film-grain overlay and 1px hairline interior frame on
  every slide. DM Serif Display up to 600px, Inter 300 body, JetBrains Mono
  catalogue metadata. Use for fashion brand decks, creator personal brands,
  nightlife/spirits launches, luxury reveals and editorial features.
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
  templates/pink-script
---
# Pink Script (After Hours)

A nocturnal couture editorial system: hot fuchsia ink on dim warm-black paper, with a soft film-grain overlay and a hairline interior frame. DM Serif Display carries every editorial moment at sizes up to 600px; Inter at weight 300 carries the body voice; JetBrains Mono carries the boutique-catalogue metadata.

Glossy fashion magazine spreads, late-night perfume advertising, high-end zines. Closer to a Maison's seasonal lookbook than a startup deck.

## When to use

Reach for Pink Script when the deck should feel nocturnal, intentional and a little luxe — fashion brand decks, creator personal brands, after-hours products (nightlife, dating, spirits), luxury launches, editorial features. It's also a striking unexpected pick for a tech keynote or business pitch that wants to land with magnetic confidence.

**Avoid it** for daytime corporate and traditional B2B, where the dark canvas and hot-pink accent read as too styled.

It is the third dark theme in this folder and distinct from both: `aurora` is engineered and developer-native, `vellum` is scholarly and still, Pink Script is glamorous and atmospheric. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

One accent, and restraint. There is no second chromatic colour.

| Role | Value | Notes |
|---|---|---|
| `ink-deep` | `#060507` | near-black base |
| `ink-violet` | `#0F0D11` | slightly violet dark, panel fills |
| `paper-blush` | `#F5EDF1` | pearl-cream — all primary text |
| `pink` | `#ED3D8C` | hot fuchsia — the only accent |
| `pink-light` | `#FF66A8` | lighter fuchsia |
| `pink-deep` | `#B81D67` | deeper fuchsia |
| `line-pink` | `rgba(237,61,140,0.32)` | pink hairlines |
| `mute-paper` | `rgba(245,237,241,0.55)` | secondary copy |
| `hair-paper` | `rgba(245,237,241,0.14)` | the interior frame |

**Never render fuchsia as text on the paper-blush surface** — the contrast inverts and reads as a typo.

## Typography

Three families, strict roles. The serif is the editorial voice; the sans is the prose voice; the mono is catalogue metadata.

| Token | Size | Family | Use |
|---|---|---|---|
| `script-section` | 600px | DM Serif Display | section-divider mega numeral (lh 0.82, pink) |
| `script-huge` | 540px | DM Serif Display | largest script moment |
| `script-giant` | 360px | DM Serif Display | giant script |
| `script-cover` | 280px | DM Serif Display | cover script (pink) |
| `script-large` | 220px | DM Serif Display | large script |
| `script-med` | 156px | DM Serif Display | medium script |
| `serif-cta` | 140px | DM Serif Display | closing headline (paper) |
| `script-sm` / `serif-h2` | 132px | DM Serif Display | small script / h2 |
| `serif-stat` | 116px | DM Serif Display | stat figure (pink, lh 0.9) |
| `serif-quote` | 92px | DM Serif Display | pull-quote (paper) |
| `serif-chart-h` | 90px | DM Serif Display | chart headline |
| `serif-section-h` | 88px | DM Serif Display | section headline |
| `serif-toc-num` | 64px | DM Serif Display | index numeral (pink) |
| `serif-toc-title` | 56px | DM Serif Display | index title |
| `serif-quote-attr` | 48px | DM Serif Display | quote attribution |
| `serif-process-h` | 38px | DM Serif Display | process step heading |
| `serif-matrix-label` | 32px | DM Serif Display | matrix label |
| `mono-cover-pre` | 28px | JetBrains Mono | cover pre-title, **0.42em tracking** |
| `body` | 24px | Inter 300 | body (lh 1.55) |
| `body-toc-desc` | 24px | Inter 300 | index description, muted |
| `mono-runner` | 24px | JetBrains Mono | top runner, 0.14em |
| `body-muted` | 22px | Inter 300 | muted body (lh 1.5) |
| `mono-kicker` | 22px | JetBrains Mono | pink kicker, 0.14em |
| `mono-label` | 22px | JetBrains Mono | paper label, 0.14em |
| `mono-pill` | 16px | JetBrains Mono | pill, 0.08em |

**Two non-obvious rules:**

- **Add `padding-bottom: .1em` to every DM Serif Display headline.** The serif's descenders get clipped without it.
- **`<em>` is repurposed as a pink colour switch**, not italic. Inside a paper-blush serif headline, one word in pink is the system's primary emphasis. Italic letterforms do not exist here.

Body is Inter at **weight 300** — the ultra-light is the calm prose voice. Never set body in the serif, never set headlines in the sans.

## Layout

- **Frame size:** 1920×1080, authored in fixed pixels.
- **Density: low.** One hero moment dominates each slide. Multiple equally-weighted regions break the elegance.

| Token | Value |
|---|---|
| `edge-x` | 60px |
| `edge-top-chrome` / `edge-bottom-chrome` | 60px |
| `content-top` / `content-bottom` | 140px |
| `inner-frame-inset` | 36px |

### The three non-optional atmospherics

Every slide carries all three. The source is explicit that omitting any of them breaks the system.

1. **Radial-gradient surface** — an off-centre light source, warmer in the upper-left fading to near-black lower-right. The asymmetry is part of the identity.
2. **Film grain** — a tiny inline SVG `fractalNoise` at 8% opacity with `mix-blend-mode: screen`. Barely visible, but it makes the canvas read photographic rather than digitally flat.
3. **Hairline interior frame** — 1px paper-blush at 14%, inset 36px. The editorial border of the magazine page.

### Chrome

A **runner** at top (brand left in pink, section right in muted paper) and a **footer** at bottom (source left, page position right). The page position uses pink `<em>` for the current number: `<em>03</em> / 09`.

### Other components

- **Pink glow** — `text-shadow: 0 0 80px rgba(237,61,140,0.18)` on hero scripts; the mega variant at `0 0 120px / 0.22` for section numerals. This is the **only** shadow in the system, and it's a glow, not a drop shadow.
- **Callout rail** — a 1px pink left border with 24px padding, used to anchor a stat or explanation beside a chart.
- **Pink rule** — 1px pink at 45% opacity; **hair rule** — 1px paper at 25%.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, `background: "#060507"` on both `display` and each frame, and everything below in `shared.head`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=block');



:root{
  --ink:#060507; --ink-2:#0F0D11; --paper:#F5EDF1;
  --pink:#ED3D8C; --pink-2:#FF66A8; --pink-deep:#B81D67;
  --line:rgba(237,61,140,.32); --mute:rgba(245,237,241,.55); --hair:rgba(245,237,241,.14);
  --serif:'DM Serif Display',Georgia,serif;
  --sans:'Inter',system-ui,sans-serif;
  --mono:'JetBrains Mono',monospace;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

/* the surface — radial light source, off-centre */
.ps{position:relative;width:1920px;height:1080px;overflow:hidden;
  color:var(--paper);font-family:var(--sans);
  background:radial-gradient(ellipse 90% 70% at 30% 30%,#1A1218 0%,#0A0709 55%,#050306 100%);}

/* film grain — inline SVG noise, screen blend */
.ps::before{content:'';position:absolute;inset:0;pointer-events:none;z-index:1;
  opacity:.08;mix-blend-mode:screen;
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");}

/* hairline interior frame */
.ps::after{content:'';position:absolute;inset:36px;pointer-events:none;z-index:2;
  border:1px solid var(--hair);}

/* content sits above the atmospherics */
.ps > *{position:relative;z-index:3;}

/* serif — every editorial moment. .1em bottom padding for descenders. */
.ps-serif{font-family:var(--serif);font-weight:400;padding-bottom:.1em;}
.ps-section{font-size:600px;line-height:0.82;letter-spacing:-0.02em;color:var(--pink);}
.ps-huge{font-size:540px;line-height:1.05;letter-spacing:-0.01em;color:var(--pink);}
.ps-giant{font-size:360px;line-height:1.05;color:var(--pink);}
.ps-cover{font-size:280px;line-height:1.02;letter-spacing:-0.015em;color:var(--pink);}
.ps-large{font-size:220px;line-height:1.04;color:var(--pink);}
.ps-med{font-size:156px;line-height:1.04;color:var(--pink);}
.ps-cta{font-size:140px;line-height:1.04;letter-spacing:-0.015em;color:var(--paper);}
.ps-h2{font-size:132px;line-height:1.06;color:var(--paper);}
.ps-stat{font-size:116px;line-height:0.9;color:var(--pink);}
.ps-quote{font-size:92px;line-height:1.05;letter-spacing:-0.005em;color:var(--paper);}
.ps-section-h{font-size:88px;line-height:1.06;color:var(--paper);}
.ps-toc-num{font-size:64px;line-height:1;color:var(--pink);}
.ps-toc-title{font-size:56px;line-height:1.05;color:var(--paper);}
.ps-quote-attr{font-size:48px;line-height:1.05;color:var(--paper);}
.ps-process-h{font-size:38px;line-height:1.05;color:var(--paper);}
.ps-matrix-label{font-size:32px;line-height:1.2;color:var(--paper);}

/* em = pink colour switch, never italic */
.ps-serif em{font-style:normal;color:var(--pink);}

/* the glow — the only shadow in the system */
.ps-glow{text-shadow:0 0 80px rgba(237,61,140,0.18);}
.ps-glow-mega{text-shadow:0 0 120px rgba(237,61,140,0.22);}

/* sans body — weight 300 always */
.ps-body{font-family:var(--sans);font-weight:300;font-size:24px;line-height:1.55;
  color:var(--paper);}
.ps-body-muted{font-family:var(--sans);font-weight:300;font-size:22px;line-height:1.5;
  color:var(--mute);}

/* mono metadata */
.ps-mono{font-family:var(--mono);font-weight:400;font-size:24px;
  letter-spacing:0.14em;text-transform:uppercase;}
.ps-kicker{font-family:var(--mono);font-weight:400;font-size:22px;
  letter-spacing:0.14em;text-transform:uppercase;color:var(--pink);}
.ps-label{font-family:var(--mono);font-weight:400;font-size:22px;
  letter-spacing:0.14em;text-transform:uppercase;color:var(--paper);}
.ps-cover-pre{font-family:var(--mono);font-weight:400;font-size:28px;
  letter-spacing:0.42em;text-transform:uppercase;color:var(--paper);}
.ps-pill{display:inline-block;font-family:var(--mono);font-size:16px;
  letter-spacing:0.08em;text-transform:uppercase;border:1px solid var(--line);
  padding:8px 16px;}

/* chrome */
.ps-runner{position:absolute;left:60px;right:60px;top:60px;z-index:5;
  display:flex;align-items:baseline;justify-content:space-between;
  font-family:var(--mono);font-size:24px;letter-spacing:0.14em;
  text-transform:uppercase;color:var(--mute);white-space:nowrap;}
.ps-runner .brand{color:var(--pink);}
.ps-footer{position:absolute;left:60px;right:60px;bottom:60px;z-index:5;
  display:flex;align-items:baseline;justify-content:space-between;
  font-family:var(--mono);font-size:24px;letter-spacing:0.14em;
  text-transform:uppercase;color:var(--mute);white-space:nowrap;}
.ps-footer em{font-style:normal;color:var(--pink);}

/* rules + rails */
.ps-rule-pink{height:1px;background:var(--pink);opacity:.45;}
.ps-rule-hair{height:1px;background:var(--paper);opacity:.25;}
.ps-rail{border-left:1px solid var(--pink);padding-left:24px;}
</style>
```

### Cover frame

```html
<div class="ps">
  <div class="ps-runner">
    <span class="brand">Maison Nocturne</span>
    <span>Seasonal lookbook · 2026</span>
  </div>
  <div style="position:absolute;left:140px;top:50%;transform:translateY(-50%);">
    <div class="ps-cover-pre" style="margin-bottom:40px;">After hours</div>
    <h1 class="ps-serif ps-cover ps-glow">Encore</h1>
    <p class="ps-body-muted" style="margin-top:32px;max-width:640px;">
      A late collection, shown once, to whoever is still awake.
    </p>
  </div>
  <div class="ps-footer">
    <span>Confidential</span>
    <span><em>01</em> / 09</span>
  </div>
</div>
```

### Editorial slide with the pink `<em>` switch

```html
<div class="ps">
  <div class="ps-runner"><span class="brand">Maison Nocturne</span><span>The index</span></div>
  <div style="position:absolute;left:140px;right:140px;top:140px;bottom:140px;
              display:flex;flex-direction:column;justify-content:center;">
    <div class="ps-kicker" style="margin-bottom:28px;">Chapter two</div>
    <h2 class="ps-serif ps-h2">Everything worth having<br>happens <em>after</em> midnight</h2>
    <div class="ps-rule-pink" style="margin:48px 0;max-width:420px;"></div>
    <p class="ps-body" style="max-width:780px;">
      The collection was built for the hours when nobody is performing.
    </p>
  </div>
  <div class="ps-footer"><span>Confidential</span><span><em>02</em> / 09</span></div>
</div>
```

### Section divider — the 600px numeral

```html
<div class="ps">
  <div class="ps-runner"><span class="brand">Maison Nocturne</span><span>Movements</span></div>
  <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
    <span class="ps-serif ps-section ps-glow-mega">03</span>
  </div>
  <div style="position:absolute;left:140px;bottom:200px;">
    <div class="ps-kicker" style="margin-bottom:20px;">Movement three</div>
    <div class="ps-serif ps-section-h">The long walk home</div>
  </div>
  <div class="ps-footer"><span>Confidential</span><span><em>04</em> / 09</span></div>
</div>
```

## Do's and Don'ts

**Do** — apply the gradient surface, film grain and hairline frame to every slide; set hero scripts in pink with the halo; use DM Serif Display for every editorial moment; set body in Inter 300; track all mono ≥0.08em uppercase; use `<em>` for the pink word switch; place a pink kicker above every primary headline; use the pink rail as a callout anchor; add `padding-bottom: .1em` to every serif headline; use the `<em>03</em> / 09` footer pattern.

**Don't** — omit the grain or the interior frame; use box-shadow on any panel; introduce a second accent; render fuchsia as text on paper-blush; put body copy in the serif or headlines in the sans; round any element; use blurred shadows; use italic letterforms; crowd the slide with competing regions.

## Fonts

DM Serif Display (single weight 400 — it has no other cut) and Inter (variable 100–900) are now hosted in this folder's asset library. JetBrains Mono is reused — this skill points at the **variable** file, the same one `neo-grid-bold`, `editorial-forest` and `creative-mode` use.

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. All three families are OFL-licensed.

**Bonus:** Inter was not previously hosted, and `bright-sans` in this folder names Inter but falls back to system fonts. Pointing that skill's `--bs-sans` stack at this asset and adding the `@font-face` would complete it.

## Notes on the port

Four departures:

1. **The `deck-stage` runtime is gone.** The source styles slides through `deck-stage > section.slide` and relies on the custom element for scaling and navigation. That selector became `.ps`, and the nine slides become nine frames. The source's black page background goes with it.
2. **Both pseudo-element slots are in use, and that is deliberate.** `.ps::before` is the film grain, `.ps::after` is the hairline frame — exactly as the source has them. Because both slots are taken, content must not rely on further pseudo-elements at the slide level, and a `z-index: 3` rule lifts real content above the two atmospheric layers.
3. **Component class names are prefixed `ps-`** to avoid collisions with the other themes in this folder.
4. **Per-slide layouts became inline positioning.** The source addresses each slide by class (`.s-cover`, `.s-toc`, `.s-matrix`…) with absolute coordinates baked in. The type, chrome and atmospherics are generic here; each frame declares its own positioning. Every value is the source's own.

**The film grain is self-contained** — an inline SVG data URI, not an external asset, so it survives the frame CSP intact. Verified by test render.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/pink-script` — `design.md`, `template.html`, `template.json`.
