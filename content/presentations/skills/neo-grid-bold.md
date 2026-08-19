---
entity_type: skill
entity_id: neo-grid-bold
created_at: '2026-08-14T20:38:18.444Z'
updated_at: '2026-08-14T20:38:18.444Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - light
  - brutalist
  - editorial
  - design-system
name: Neo-Grid Bold
description: >-
  Editorial neo-brutalist deck theme — a strict 12×8 block grid of putty-ecru,
  ink-black and neon-lemon panels, with uppercase Space Grotesk 700 display and
  JetBrains Mono labels. Zero rounded corners, no shadows, high density. Use for
  product launches, design reviews, founder pitches, brand decks, consulting
  findings and conference talks that should read design-led rather than
  corporate.
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
  templates/neo-grid-bold
---
# Neo-Grid Bold

A heavy editorial poster system built on a strict 12-column × 8-row block grid. Every slide is a magazine spread divided into coloured panels — paper-ecru, ink-black and electric lemon-yellow trading roles across cells. Space Grotesk at weight 700 in strict uppercase carries every display moment; JetBrains Mono carries every label and metadata tag.

Contemporary editorial print, brutalist annual reports, and the populist-poster end of design week.

## When to use

Reach for Neo-Grid Bold when the deck should feel confident and graphic — product launches, design reviews, founder pitches, brand decks, consulting findings, conference talks. It is especially strong for stat-heavy slides, comparison matrices and process flows, and it works for tech, research or finance whenever the speaker wants to read as design-led rather than corporate.

**Avoid it** for anything that needs to feel quiet, traditional or warm. The neon-yellow accent and uppercase display commit to a loud voice.

It is the opposite pole from `monochrome` and `vellum` in this folder: where those whisper and leave the page empty, this one shouts and fills every cell. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

| Role | Value | Notes |
|---|---|---|
| `bg` | `#ECECE8` | putty-ecru slide ground |
| `paper` | `#F5F4EF` | default panel fill, slightly lighter than the ground |
| `ink` | `#0A0A0A` | text, rules, and the inverted panel fill |
| `accent-lemon` | `#E6FF3D` | the signature neon yellow |
| `muted` | `#8A8A85` | secondary metadata |

**Yellow is a fill colour only — never a text colour.** It is too light to read as type. This is the single easiest way to break the system.

Only one chromatic accent exists. Adding red, blue or green breaks it.

## Typography

Two families. Display is **always uppercase**; body is **always mixed case**.

| Token | Size | Family | Weight | Use |
|---|---|---|---|---|
| `section-num` | 320px | Space Grotesk | 700 | giant divider numeral (lh 0.85, −0.05em) |
| `stat-num-lg` | 240px | Space Grotesk | 700 | hero stat (lh 0.85, −0.04em) |
| `stat-num` | 156px | Space Grotesk | 700 | standard stat (lh 0.9, −0.03em) |
| `display` | 132px | Space Grotesk | 700 | cover / primary display, UPPERCASE |
| `stat-num-sm` | 96px | Space Grotesk | 700 | small stat |
| `title` | 88px | Space Grotesk | 700 | slide title, UPPERCASE |
| `subtitle` | 56px | Space Grotesk | 700 | subtitle, UPPERCASE |
| `card-headline` | 44px | Space Grotesk | 700 | panel headline, UPPERCASE |
| `card-h3` | 30px | Space Grotesk | 700 | small panel heading, UPPERCASE |
| `body` | 28px | Space Grotesk | 400 | body copy, mixed case (lh 1.35) |
| `label` / `pagenum` | 24px | JetBrains Mono | 400 | label 0.08em uppercase; pagenum 0.04em |
| `body-sm` | 22px | Space Grotesk | 400 | small body (lh 1.45) |
| `label-sm` | 16px | JetBrains Mono | 400 | small label, 0.08em |
| `label-xs` | 14px | JetBrains Mono | 400 | table head, 0.12em |

**`<em>` is repurposed as a colour switch, not italic.** Italic letterforms do not exist in this system. Same idea as `vellum`'s inversion, opposite mechanism — there, italic flips to roman; here, there is no italic at all.

For inline emphasis inside a headline, use `<mark>` — a yellow swatch behind the words with ink text.

## Layout

- **Frame size:** 1920×1080, authored in fixed pixels — no fluid scale to resolve.
- **The frame:** every slide is `position:absolute; inset:40px` holding a `repeat(12,1fr) × repeat(8,1fr)` grid with 12px gaps. **Compose every layout by spanning cells inside it.**
- The only elements allowed outside the grid are the page-number tag, the corner mark, and the copyright line — all absolutely positioned. Nothing else breaks the grid.

| Token | Value |
|---|---|
| `frame-inset` | 40px |
| `grid-gap` | 12px (18px for looser compositions) |
| `card-pad-sm` | 24px 28px |
| `card-pad-md` | 28px 32px |
| `card-pad-lg` | 36px 32px |
| `card-pad-xl` | 40px 44px |

**Density is required, not optional.** A slide with one panel and seven empty cells reads as broken. The system needs density to function as an editorial poster — this is the inverse of every other editorial theme in this folder.

**Zero rounded corners anywhere. No shadows.** Depth comes from colour adjacency only.

### Panels

`.card` is the generic panel, paper-filled by default:

- `.ink` — black fill, paper text. The contrast block.
- `.lemon` — full neon-yellow fill, ink text. The loudest signal; use sparingly.
- `.photo` — near-black fill, white text, for image regions.

### Marks

- **Corner mark** — a 36px 2×2 block at top-right, three solid `currentColor` squares plus one transparent. A small structural stamp.
- **Blockmark** — a larger 2×2 stamp (56px+) with diagonal squares filled, used on covers and dividers.
- **QR tile** — a decorative 5×5 grid of black squares with a few lemon squares interspersed. Not scannable, purely graphic.
- **Page number** — a bottom-left tag reading `01 / 12`, in paper, `.invert` (ink) or `.lemon`.

### Comparison matrix

Cells carry 1.5px ink borders on bottom and right (last column drops the right border). The head row inverts to ink with paper mono uppercase. State pills: `yes` is lemon-filled, `part` is paper with a 1.5px ink border, `no` is ink-filled. **Despite the name, pills are 0-radius rectangles.**

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, `background: "#ECECE8"` on both `display` and each frame, and everything below in `shared.head`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&family=Space+Grotesk:wght@300..700&display=block');


:root{
  --bg:#ECECE8; --paper:#F5F4EF; --ink:#0A0A0A;
  --accent:#E6FF3D; --muted:#8A8A85; --line:#0A0A0A;
  --sans:'Space Grotesk','Helvetica Neue',Helvetica,Arial,sans-serif;
  --mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

/* slide + the universal 12x8 frame */
.ng{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--bg);color:var(--ink);font-family:var(--sans);}
.ng-frame{position:absolute;inset:40px;display:grid;
  grid-template-columns:repeat(12,1fr);grid-template-rows:repeat(8,1fr);gap:12px;}
.ng-frame.loose{gap:18px;}

/* panels */
.ng-card{background:var(--paper);position:relative;overflow:hidden;padding:28px 32px;}
.ng-card.ink{background:var(--ink);color:var(--paper);}
.ng-card.lemon{background:var(--accent);color:var(--ink);}
.ng-card.photo{background:#111;color:#fff;}
.ng-card.pad-sm{padding:24px 28px;}
.ng-card.pad-lg{padding:36px 32px;}
.ng-card.pad-xl{padding:40px 44px;}
.ng-card.flush{padding:0;}

/* display type — uppercase always */
.ng-section-num{font-size:320px;font-weight:700;line-height:0.85;letter-spacing:-0.05em;}
.ng-stat-lg{font-size:240px;font-weight:700;line-height:0.85;letter-spacing:-0.04em;}
.ng-stat{font-size:156px;font-weight:700;line-height:0.9;letter-spacing:-0.03em;}
.ng-display{font-size:132px;font-weight:700;line-height:0.92;letter-spacing:-0.02em;
  text-transform:uppercase;}
.ng-stat-sm{font-size:96px;font-weight:700;line-height:0.9;letter-spacing:-0.03em;}
.ng-title{font-size:88px;font-weight:700;line-height:0.95;letter-spacing:-0.015em;
  text-transform:uppercase;}
.ng-subtitle{font-size:56px;font-weight:700;line-height:1;letter-spacing:-0.01em;
  text-transform:uppercase;}
.ng-card-h{font-size:44px;font-weight:700;line-height:1;letter-spacing:-0.01em;
  text-transform:uppercase;}
.ng-card-h3{font-size:30px;font-weight:700;line-height:1.05;letter-spacing:-0.005em;
  text-transform:uppercase;}

/* body — mixed case always */
.ng-body{font-size:28px;font-weight:400;line-height:1.35;}
.ng-body-sm{font-size:22px;font-weight:400;line-height:1.45;}
.ng-muted{color:var(--muted);}

/* mono labels */
.ng-label{font-family:var(--mono);font-size:24px;font-weight:400;
  letter-spacing:0.08em;text-transform:uppercase;}
.ng-label-sm{font-family:var(--mono);font-size:16px;font-weight:400;
  letter-spacing:0.08em;text-transform:uppercase;}
.ng-label-xs{font-family:var(--mono);font-size:14px;font-weight:400;
  letter-spacing:0.12em;text-transform:uppercase;}

/* inline yellow swatch — the emphasis device */
.ng-mark{background:var(--accent);color:var(--ink);padding:0 6px;}

/* out-of-grid chrome — the only permitted exceptions */
.ng-pagenum{position:absolute;left:0;bottom:0;background:var(--paper);color:var(--ink);
  font-family:var(--mono);font-size:24px;letter-spacing:0.04em;padding:14px 22px;}
.ng-pagenum.invert{background:var(--ink);color:var(--paper);}
.ng-pagenum.lemon{background:var(--accent);color:var(--ink);}
.ng-corner{position:absolute;top:22px;right:22px;width:36px;height:36px;
  display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:4px;}
.ng-corner span{background:currentColor;}
.ng-corner span:nth-child(2){background:transparent;}
.ng-blockmark{width:56px;height:56px;display:grid;
  grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:4px;}
.ng-blockmark span:nth-child(1),.ng-blockmark span:nth-child(4){background:var(--ink);}
.ng-blockmark span:nth-child(2),.ng-blockmark span:nth-child(3){background:transparent;}
.ng-copyright{position:absolute;left:22px;bottom:22px;font-family:var(--mono);
  font-size:16px;line-height:1.4;color:var(--ink);opacity:0.85;}

/* QR tile */
.ng-qr{width:90px;height:90px;display:grid;
  grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(5,1fr);}
.ng-qr i{background:transparent;display:block;}
.ng-qr i.on{background:var(--ink);}
.ng-qr i.acc{background:var(--accent);}

/* comparison matrix */
.ng-table{display:grid;width:100%;}
.ng-th{background:var(--ink);color:var(--paper);font-family:var(--mono);
  font-size:14px;letter-spacing:0.12em;text-transform:uppercase;padding:18px 22px;}
.ng-td{padding:18px 22px;font-size:24px;line-height:1.35;
  border-bottom:1.5px solid var(--ink);border-right:1.5px solid var(--ink);}
.ng-td.last{border-right:none;}
.ng-pill{display:inline-block;padding:6px 14px;font-family:var(--mono);
  font-size:14px;letter-spacing:0.12em;text-transform:uppercase;}
.ng-pill.yes{background:var(--accent);color:var(--ink);}
.ng-pill.part{background:var(--paper);color:var(--ink);border:1.5px solid var(--ink);}
.ng-pill.no{background:var(--ink);color:var(--paper);}

/* bars */
.ng-bars{display:flex;align-items:flex-end;gap:18px;height:100%;}
.ng-bar{flex:1;background:var(--ink);}
.ng-bar.lemon{background:var(--accent);}
</style>
```

### Cover frame

Cells are placed with `grid-column` / `grid-row` spans inside the frame:

```html
<div class="ng">
  <div class="ng-frame">
    <div class="ng-card ink pad-xl" style="grid-column:1 / 9;grid-row:1 / 6;
         display:flex;flex-direction:column;justify-content:space-between;">
      <span class="ng-label">Product launch · 2026</span>
      <h1 class="ng-display">Ship the<br>whole thing</h1>
      <div class="ng-corner"><span></span><span></span><span></span><span></span></div>
    </div>
    <div class="ng-card lemon pad-lg" style="grid-column:9 / 13;grid-row:1 / 4;
         display:flex;align-items:flex-end;">
      <span class="ng-card-h">Q3<br>Release</span>
    </div>
    <div class="ng-card pad-lg" style="grid-column:9 / 13;grid-row:4 / 6;">
      <p class="ng-body-sm">Four changes, one release, no migration required.</p>
    </div>
    <div class="ng-card pad-lg" style="grid-column:1 / 5;grid-row:6 / 9;">
      <span class="ng-label-sm ng-muted">Presented by</span>
      <p class="ng-body" style="margin-top:12px;">Field Office</p>
    </div>
    <div class="ng-card ink pad-lg" style="grid-column:5 / 13;grid-row:6 / 9;
         display:flex;align-items:flex-end;justify-content:space-between;">
      <span class="ng-label">01 / 12</span>
      <div class="ng-blockmark"><span></span><span></span><span></span><span></span></div>
    </div>
  </div>
</div>
```

### Stat panel

```html
<div class="ng-card lemon pad-xl" style="grid-column:1 / 5;grid-row:1 / 5;
     display:flex;flex-direction:column;justify-content:space-between;">
  <span class="ng-label">Adoption</span>
  <div>
    <div class="ng-stat">68%</div>
    <p class="ng-body-sm" style="margin-top:12px;">of teams shipped in week one</p>
  </div>
</div>
```

### Headline with the yellow swatch

```html
<h2 class="ng-title">We rebuilt the <mark class="ng-mark">core</mark> in a quarter</h2>
```

## Do's and Don'ts

**Do** — compose everything inside the 12×8 grid; keep display uppercase and body mixed case; use yellow as a fill only; keep every corner square; fill the grid densely; use `<mark>` for inline emphasis; keep the page number, corner mark and copyright as the only out-of-grid elements.

**Don't** — add box-shadow to any panel; round any corner; put display in mixed case or body in uppercase; introduce a second accent colour; use yellow as text; compose outside the grid; use italic letterforms; make pills actually pill-shaped; leave the grid sparsely populated.

## Fonts

Space Grotesk (variable 300–700) and JetBrains Mono (variable 100–800) are hosted in this folder's asset library and wired into the `@font-face` block above. Space Grotesk carries display at 700 and body at 400 from the same variable file.

This skill shares the **variable** JetBrains Mono asset with `editorial-forest`. Do not point it at the static weight-400 file that `monochrome` uses.

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. Both families are OFL-licensed.

**Bonus:** Space Grotesk is the face the `replit` skill in this folder has been missing. If you want that theme rendering properly, point its `--rp-display` stack at this same asset and add the matching `@font-face`.

## Notes on the port

This ported cleanly — like `editorial-forest`, it is already authored at a fixed 1920×1080 canvas in real pixels, and it has no animation layer keyed to an active-slide class, so nothing needed defusing. Four departures:

1. **The `deck-stage` runtime is gone.** The source relies on a `<deck-stage>` custom element for canvas scaling and navigation (arrow keys, space, PgUp/PgDn, Home/End). Studiograph steps frames itself, so the wrapper is dropped and the slides become frames. The source's `#1a1a1a` stage background — the colour *behind* the scaled slide — goes with it; Studiograph paints its own canvas.
2. **Per-slide classes became composable ones.** The source styles each slide through a semantic class (`.s-cover`, `.s-stats`, `.s-matrix2`…) with grid placements baked in. Here the frame, panels and type are generic, and each frame declares its own `grid-column` / `grid-row` spans inline. Every value is the source's own; the layouts are just no longer welded to slide names.
3. **Component class names are prefixed `ng-`** to avoid collisions with the other themes in this folder.
4. **The corner mark and blockmark need four `<span>` children.** They are 2×2 CSS grids whose fill pattern comes from `nth-child` rules — omit a span and the pattern breaks silently.

**Two source inconsistencies:** `template.json` claims 13 slides; the template contains 12. And the components list names `pill-yes` / `pill-part` / `pill-no` as "pills" while the Don'ts explicitly forbid rounding them — they are rectangles, and the naming is vestigial.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/neo-grid-bold` — `design.md`, `template.html`, `template.json`.
