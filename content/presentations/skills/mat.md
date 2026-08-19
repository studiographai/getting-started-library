---
entity_type: skill
entity_id: mat
created_at: '2026-08-14T21:22:01.313Z'
updated_at: '2026-08-14T21:22:01.313Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - dark
  - warm
  - mid-century
  - design-system
name: Mat
description: >-
  Material-tactile mid-century deck theme — dark forest green warmed by a
  wood-brown atmospheric glow, cream type floating directly on the field, and a
  single warm-orange inline accent. Bricolage Grotesque display in mixed case,
  DM Sans body, DM Mono labels, with a cream info-card as the signature material
  contrast. Use for design studio credentials, architecture and interior brands,
  ceramics/craft/furniture, advisory decks.
applies_to:
  - deck
  - slides
  - presentation
  - artifact-canvas
  - theme
loading: on-demand
status: draft
source: github.com/zarazhangrui/beautiful-html-templates @ e5e204f — templates/mat
---
# Mat

A material-tactile system built on one environmental premise: a deep forest-green surface warmed from the bottom-right by a low wood-brown glow. The atmosphere does the heavy lifting — before any content lands, the slide already feels like a workbench in afternoon light.

Cream type floats directly on the green field. No cards, no panels, no frames. Where the system needs to break the green, it lays down a single piece of warm paper.

## When to use

Reach for Mat when the deck should feel mid-century, tactile and intentional — design studio credentials, architecture and interior brands, ceramics, craft and furniture, advisory decks. It's a warm, distinctive choice for tech, research or business work that wants a considered analog feel instead of digital-cool.

**Avoid it** where fast tech energy or institutional restraint is needed. The muted sage and burnt orange are deliberately warm and slow.

It reads as industrial-design portfolio meets boutique product launch — never tech demo. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

| Role | Value | Notes |
|---|---|---|
| `bg-dark` | `#232E26` | dark forest green — the default surface |
| `bg-dark-alt` | `#2E3D30` | lighter green for recessed regions, used sparingly |
| `bg-cream` | `#EDE6D0` | warm paper — the info-card and the light-slide variant |
| `bg-cream-alt` | `#E4DAC4` | deeper cream |
| `ink-cream` | `#F0E8D2` | primary text on dark |
| `ink-cream-2` / `-3` | 58% / 30% cream | secondary / tertiary on dark |
| `ink-dark` | `#1E2820` | primary text on cream |
| `ink-dark-2` / `-3` | 60% / 30% dark | secondary / tertiary on cream |
| `accent-orange` | `#C07030` | the single accent |
| `border-on-dark` / `-cream` | 12% cream / 14% dark | every hairline |
| `wood-glow` | `#7A4E24` | the atmospheric glow |

**Orange is inline-only.** It appears as the kicker colour, the bullet em-dash, the inline `<em>`, the quote glyph, and one highlighted chart bar. It is never a background, never a headline colour. Headlines are cream on dark, dark ink on cream.

## Typography

Three voices, and **the case contrast between them is the system's rhythm**: Bricolage display is *always mixed case*, DM Mono labels are *always uppercase*.

| Token | Size | Family | Weight | Use |
|---|---|---|---|---|
| `display` | 230px | Bricolage | 800 | cover display (lh 0.88, −0.03em) |
| `quote-mark` | 154px | Bricolage | 800 | opening quote glyph (lh 0.6) |
| `h1` | 134px | Bricolage | 800 | primary headline (lh 0.92, −0.025em) |
| `stat-value` | 106px | Bricolage | 800 | stat figure (−0.025em) |
| `h2` | 77px | Bricolage | 700 | section headline (−0.02em) |
| `quote-text` | 65px | Bricolage | 600 | pull-quote (−0.02em) |
| `h3` | 46px | Bricolage | 600 | sub-headline (−0.01em) |
| `lead` | 29px | DM Sans 400 | lead paragraph (lh 1.55) |
| `body` | 20px | DM Sans 400 | body (lh 1.65) |
| `caption` | 16px | DM Sans 400 | caption (lh 1.5) |
| `label` | 13px | DM Mono 400 | **uppercase, 0.12em** — all chrome |

**No serif anywhere** — the rounded grotesque carries every editorial moment. **No italic letterforms**; `<em>` is repurposed as an orange colour switch and stays upright. That includes the `<em>` inside a stat numeral, which is how unit suffixes read in this system.

## Layout

- **Frame size:** 1920×1080.
- **Density: medium-sparse.** One primary headline, one supporting paragraph, optionally 3–5 short bullets. Three columns of bullets breaks the system — the green field needs negative space to do its atmospheric work.

| Token | Value |
|---|---|
| `pad-x` | 106px |
| `pad-y` | 59px |
| `gap-lg` | 49px |
| `gap-md` | 30px |
| `gap-sm` | 15px |

**No shadows of any kind. No rounded corners on any structural element. No borders above 1px.** Depth is the atmospheric glow and nothing else.

### The wood glow — non-optional

Every dark slide carries it via `::before`. The source is explicit that it is *part of the surface, not an optional flourish*: a 55%×70% ellipse anchored past the bottom-right corner, wood-brown fading to transparent.

```css
.mat.dark::before{content:'';position:absolute;bottom:-10%;right:-5%;
  width:55%;height:70%;pointer-events:none;z-index:0;
  background:radial-gradient(ellipse at 70% 80%,
    rgba(122,78,36,0.28) 0%, rgba(80,50,20,0.14) 40%, transparent 70%);}
```

### The info-card — the signature move

A cream rectangle inset directly on the green field, reading as a piece of warm paper laid on a dark surface. **No border, no shadow** — the tonal jump between cream and forest green *is* the edge. Adding a border breaks the flat material reading.

Max-width 538px, padding 30px × 85px.

### Other components

- **Kicker** — DM Mono uppercase in orange, 0.12em.
- **Rule** — 32×1px orange bar.
- **Bullet** — an em-dash prefix in orange via DM Mono. Never a dot, check or numeral.
- **Stat cell** — divided by a 1px right hairline; last cell drops it. Value plus a one-line label.
- **Chrome / foot bands** — label pairs above and below 1px rules, suppressed on cover, quote and end slides.
- **Bar chart** — muted cream bars at 30%; the highlighted bar takes orange.
- **Compare divider** — a 1px-wide vertical *column*, not a border.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080. Set each frame's `background` to match its mode — `#232E26` for dark, `#EDE6D0` for the cream variant — and `display.background` to `#232E26`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@200..800&family=DM+Mono:wght@400&family=DM+Sans:wght@100..1000&display=block');



:root{
  --bg:#232E26; --bg-alt:#2E3D30; --cream:#EDE6D0; --cream-alt:#E4DAC4;
  --fg:#F0E8D2; --fg-2:rgba(240,232,210,0.58); --fg-3:rgba(240,232,210,0.3);
  --ink:#1E2820; --ink-2:rgba(30,40,32,0.6); --ink-3:rgba(30,40,32,0.3);
  --accent:#C07030; --wood:#7A4E24;
  --border:rgba(240,232,210,0.12); --border-cream:rgba(30,40,32,0.14);
  --display:'Bricolage Grotesque','Noto Sans SC',sans-serif;
  --sans:'DM Sans','Noto Sans SC',sans-serif;
  --mono:'DM Mono',monospace;
  --pad-x:106px; --pad-y:59px; --gap-lg:49px; --gap-md:30px; --gap-sm:15px;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

.mat{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--bg);color:var(--fg);font-family:var(--sans);
  padding:var(--pad-y) var(--pad-x);
  display:grid;grid-template-rows:auto 1fr auto;}
.mat.light{background:var(--cream);color:var(--ink);}

/* the wood glow — every dark slide */
.mat.dark::before{content:'';position:absolute;bottom:-10%;right:-5%;
  width:55%;height:70%;pointer-events:none;z-index:0;
  background:radial-gradient(ellipse at 70% 80%,
    rgba(122,78,36,0.28) 0%, rgba(80,50,20,0.14) 40%, transparent 70%);}
.mat > *{position:relative;z-index:1;}
.mat-body{min-height:0;}

/* display — Bricolage, always mixed case */
.mat-display{font-family:var(--display);font-weight:800;font-size:230px;
  line-height:0.88;letter-spacing:-0.03em;}
.mat-h1{font-family:var(--display);font-weight:800;font-size:134px;
  line-height:0.92;letter-spacing:-0.025em;}
.mat-h2{font-family:var(--display);font-weight:700;font-size:77px;
  line-height:1;letter-spacing:-0.02em;}
.mat-h3{font-family:var(--display);font-weight:600;font-size:46px;
  line-height:1.1;letter-spacing:-0.01em;}
.mat-stat{font-family:var(--display);font-weight:800;font-size:106px;
  line-height:1;letter-spacing:-0.025em;}
.mat-quote{font-family:var(--display);font-weight:600;font-size:65px;
  line-height:1.2;letter-spacing:-0.02em;}
.mat-quote-mark{font-family:var(--display);font-weight:800;font-size:154px;
  line-height:0.6;color:var(--accent);}

/* em = orange colour switch, upright */
.mat-display em,.mat-h1 em,.mat-h2 em,.mat-h3 em,.mat-stat em,.mat-quote em{
  font-style:normal;color:var(--accent);}

/* body */
.mat-lead{font-family:var(--sans);font-weight:400;font-size:29px;line-height:1.55;}
.mat-text{font-family:var(--sans);font-weight:400;font-size:20px;line-height:1.65;}
.mat-caption{font-family:var(--sans);font-weight:400;font-size:16px;line-height:1.5;}
.mat-muted{color:var(--fg-2);} .mat.light .mat-muted{color:var(--ink-2);}
.mat-faint{color:var(--fg-3);} .mat.light .mat-faint{color:var(--ink-3);}

/* mono chrome — always uppercase */
.mat-label{font-family:var(--mono);font-weight:400;font-size:13px;
  letter-spacing:0.12em;text-transform:uppercase;}
.mat-kicker{font-family:var(--mono);font-weight:400;font-size:13px;
  letter-spacing:0.12em;text-transform:uppercase;color:var(--accent);}
.mat-rule{width:32px;height:1px;background:var(--accent);}

/* chrome + foot bands */
.mat-chrome{display:flex;justify-content:space-between;align-items:center;
  padding-bottom:var(--gap-sm);border-bottom:1px solid var(--border);
  font-family:var(--mono);font-size:13px;letter-spacing:0.12em;text-transform:uppercase;}
.mat-foot{display:flex;justify-content:space-between;align-items:center;
  padding-top:var(--gap-sm);border-top:1px solid var(--border);
  font-family:var(--mono);font-size:13px;letter-spacing:0.12em;text-transform:uppercase;}
.mat.light .mat-chrome{border-bottom-color:var(--border-cream);}
.mat.light .mat-foot{border-top-color:var(--border-cream);}

/* the info-card — no border, no shadow; the tonal jump IS the edge */
.mat-card{background:var(--cream);color:var(--ink);
  padding:var(--gap-md) 85px;max-width:538px;}

/* em-dash bullets */
.mat-list{display:flex;flex-direction:column;gap:var(--gap-sm);}
.mat-li{display:grid;grid-template-columns:1.6em 1fr;align-items:baseline;}
.mat-li::before{content:'—';font-family:var(--mono);color:var(--accent);}

/* stat cells */
.mat-stat-cell{border-right:1px solid var(--border);
  padding:var(--gap-md) var(--pad-x) var(--gap-md) 0;}
.mat-stat-cell:last-child{border-right:none;}
.mat.light .mat-stat-cell{border-right-color:var(--border-cream);}

/* bars */
.mat-bars{display:flex;align-items:flex-end;gap:24px;height:100%;}
.mat-bar{flex:1;background:var(--fg-3);}
.mat-bar.accent{background:var(--accent);}

/* image placeholder */
.mat-img{background:rgba(240,232,210,0.06);border:1px solid var(--border);
  color:var(--fg-3);display:flex;align-items:center;justify-content:center;
  font-family:var(--mono);font-size:13px;letter-spacing:0.12em;text-transform:uppercase;}
</style>
```

### Cover frame (no chrome)

```html
<div class="mat dark">
  <div></div>
  <div class="mat-body" style="display:flex;flex-direction:column;justify-content:center;">
    <div class="mat-kicker" style="margin-bottom:15px;">Studio credentials · 2026</div>
    <div class="mat-rule" style="margin-bottom:30px;"></div>
    <h1 class="mat-display">Mat</h1>
    <p class="mat-lead mat-muted" style="margin-top:30px;max-width:900px;">
      Furniture and objects for rooms that get used.
    </p>
  </div>
  <div></div>
</div>
```

### Content frame with the info-card

```html
<div class="mat dark">
  <div class="mat-chrome">
    <span>Mat · Studio</span>
    <span>Section 02</span>
  </div>
  <div class="mat-body" style="display:grid;grid-template-columns:1.3fr 1fr;
       gap:106px;align-items:center;">
    <div>
      <div class="mat-kicker" style="margin-bottom:15px;">The approach</div>
      <h2 class="mat-h2">We make things that <em>age</em> well</h2>
      <div class="mat-list" style="margin-top:49px;">
        <div class="mat-li"><span class="mat-text">Solid timber, visible joinery, no veneer.</span></div>
        <div class="mat-li"><span class="mat-text">Finishes that patina rather than wear through.</span></div>
        <div class="mat-li"><span class="mat-text">Parts you can replace without a workshop.</span></div>
      </div>
    </div>
    <div class="mat-card">
      <h3 class="mat-h3" style="font-size:34px;">On repair</h3>
      <p class="mat-text" style="margin-top:15px;">
        Every piece ships with the hardware to take it apart. A chair that cannot be
        opened is a chair that gets thrown away.
      </p>
    </div>
  </div>
  <div class="mat-foot">
    <span>Credentials</span>
    <span>03 / 09</span>
  </div>
</div>
```

### Stats row

```html
<div style="display:grid;grid-template-columns:repeat(3,1fr);">
  <div class="mat-stat-cell">
    <div class="mat-stat">14<em>yr</em></div>
    <div class="mat-label mat-muted" style="margin-top:15px;">Median piece lifespan</div>
  </div>
  <!-- two more -->
</div>
```

## Do's and Don'ts

**Do** — default to dark forest green; apply the wood glow to every dark slide; pair mixed-case Bricolage with uppercase DM Mono; keep headlines cream on dark and ink on cream; use orange only as kicker, bullet, inline `<em>`, quote glyph and one chart bar; use the cream info-card for material contrast; keep slides medium-sparse; use 1px hairlines for every divider; use the em-dash bullet; render `<em>` inside a numeral in orange, upright.

**Don't** — uppercase any Bricolage text; introduce a second accent; add shadows or elevation; round any structural corner; crowd with three columns of bullets; use orange as a background; use a serif anywhere; put a border on the info-card; use italic letterforms.

## Fonts

Bricolage Grotesque (variable 200–800) is now hosted in this folder's asset library. **DM Sans and DM Mono were already hosted** — DM Sans for `vellum`, DM Mono for `cobalt-grid` — and are reused.

Bricolage carries an optical-size axis as well as weight; the file hosted here is the standard `opsz 12..96, wght 200..800` cut, and the system uses 600, 700 and 800.

The CJK fallback (Noto Sans SC) is named in the stacks but not hosted.

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. All three families are OFL-licensed.

## Notes on the port

Four departures. **Unlike four of the other templates in this folder, this one has no invisible-element trap** — its slides are a horizontal flex strip moved by transform, with no `opacity: 0` default and no `[data-anim]` gating. It ported without that hazard.

1. **The fluid scale was resolved to fixed pixels.** Every size is a raw `vw`/`vh` value, which in a Studiograph frame resolves against the browser viewport rather than the 1920×1080 frame. Each value above is the source's own evaluated at 1920×1080 — `display` 12vw → 230px, `pad-x` 5.5vw → 106px, and so on.
2. **The navigation layer is gone.** The flex strip, inline keyboard handler and nav dots are dropped; the nine slides become nine frames.
3. **The glow needs a stacking context.** In the source the glow sits at `z-index: 0` behind content that happens to paint later. Because frames re-parent content, this port adds `.mat > * { position: relative; z-index: 1 }` so slide content reliably sits above the `::before` glow. Without it, a slide with a solid child could occlude the warmth.
4. **Component class names are prefixed `mat-`** to avoid collisions with the other themes in this folder.

**Both surface modes are genuine**, as in `grove` — dark forest green is the default and cream is a deliberate tonal break. Set each frame's `background` to match, or the canvas paints green behind a cream slide. Note the glow is scoped to `.mat.dark`, so a cream slide correctly has none.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/mat` — `design.md`, `template.html`, `template.json`.
