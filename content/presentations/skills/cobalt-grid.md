---
entity_type: skill
entity_id: cobalt-grid
created_at: '2026-08-14T19:19:57.230Z'
updated_at: '2026-08-14T22:30:49.978Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - light
  - editorial
  - two-color
  - design-system
name: Cobalt Grid
description: >-
  Two-colour trend-report editorial deck theme — warm cream paper, electric
  cobalt ink, and a permanent graph-paper grid behind every slide. Newsreader
  serif headlines, Hanken Grotesk labels, DM Mono chrome, pixel-glitch scanline
  columns and QR-style mosaics. Use for design-research reports, studio annuals,
  agency capabilities decks, art/architecture/academic publications, and any
  deck wanting printed-ledger calmness with one strict accent colour.
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
  templates/cobalt-grid
---
# Cobalt Grid

A two-colour trend-report editorial system: warm cream paper, electric cobalt ink, and a graph-paper grid that lives permanently behind every slide. Newsreader serif carries every display moment, Hanken Grotesk every label and body, DM Mono every piece of chrome. The signature decoration is a pixel-glitch column — stair-stepped vertical scanlines — paired with QR-style 8×8 mosaics.

The cultural reference is WIRED Japan, Shift magazine, and architectural trend reports printed two-colour risograph: cream plus one cobalt.

## When to use

Reach for Cobalt Grid when the deck should read like a quietly serious design or research bulletin — trend reports, studio annuals and seasonal bulletins, agency capabilities decks, art/architecture/curatorial publications, academic decks, newsletter or zine pitches.

**Avoid it** for decks that need warmth, multi-colour energy, or a casual voice. The strict cobalt-and-cream palette is intentionally austere. Where `bright-sans` is friendly and `sticker-pop` is playful, this one is studious and printed.

Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides` for those.

## Palette

Strictly two colours. There are no accent colours — cobalt is the *only* ink, cream the *only* surface.

| Role | Value | Notes |
|---|---|---|
| `paper` | `#F0EBDE` | warm cream canvas, newsprint-leaning |
| `paper-2` | `#E6E0CE` | deeper cream, used sparingly |
| `ink` | `#1F2BE0` | electric cobalt — all type, all borders, all chrome |
| `ink-soft` | `#5560E5` | lighter cobalt for secondary marks |
| `ink-faint` | `rgba(31,43,224,0.18)` | faint row dividers |
| `grid` | `rgba(31,43,224,0.10)` | the permanent graph-paper grid |

The saturation is intentional: at full strength it reads as risograph cobalt, not navy.

## Typography

A three-face conversation with strict roles — **serif = statement, grotesk = supporting copy, mono = catalogue chrome**. There is no fourth face.

Newsreader runs at **weight 400 only**. The type asserts hierarchy through size, never weight.

| Token | Size | Family | Use |
|---|---|---|---|
| `vbig-numeral` | 194px | Newsreader | hero stat figure, −0.015em |
| `display-hero` | 194px | Newsreader | cover title, −0.008em, **lh 1.02** — see below |
| `display-closing` | 151px | Newsreader | colophon headline |
| `display-manifesto` | 119px | Newsreader | manifesto statement |
| `display-chapter` | 108px | Newsreader | chapter/section opener |
| `display-quote` | 97px | Newsreader | pull-quote body |
| `headline-index` | 92px | Newsreader | index section header |
| `headline` | 89px | Newsreader | data/table section header |
| `ed-callout` | 50px | Newsreader | editorial subtitle under a hero |
| `row-headline` | 38px | Newsreader | per-row headline in an index |
| `table-name` | 28px | Newsreader | per-row name in a ledger |
| `body-lede` | 18px | Hanken 400 | lead paragraph |
| `body-stat` | 17px | Hanken 400 | paragraph beside a stat |
| `body` | 15px | Hanken 400 | standard paragraph |
| `micro-strong` | 16px | Hanken 600 | largest uppercase kicker, 0.18em |
| `micro` | 14px | Hanken 600 | standard uppercase label, 0.16em |
| `micro-sm` | 12px | Hanken 600 | table header label, 0.18em |
| `mono-tag` | 15px | DM Mono | catalogue tag, index num-tag, 0.04em |
| `mono-tick` | 14px | DM Mono | chart tick, vstack entry, 0.04em |
| `mono-chrome` | 13px | DM Mono | page number, meta, 0.06em |

All display sizes carry negative letter-spacing. Line-height collapses at the top — 1.02 on hero, 0.92 on the numeral, 1.0 on chapter, 1.5 on body. That tight-display / open-body contrast is the trend-report rhythm.

**Why the hero is 1.02 and not 0.92.** The source sets the hero at 0.92, and at 194px that puts the baselines 178px apart. Newsreader's descenders drop about 41px below the baseline and its ascenders — including the tittle on a lowercase `i` — rise about 142px, so two stacked lines need roughly 183px of baseline separation to clear each other. At 0.92 any hero whose first line ends in a descender above a second line starting with an ascender **collides**: `Day One / Skills` overlaps the `y` into the `i`. 1.02 gives about 17px of daylight and still reads as tight display leading.

The numeral keeps 0.92 because Newsreader's lining figures have no descenders, so the collision cannot occur there. `.cg-closing` (0.96), `.cg-h-index` and `.cg-h` (0.95) are already above the ~0.94 collision threshold at their sizes.

**Body copy really is 15px on a 1920px slide.** That is what the source's clamp resolves to at this width, and the density is deliberate — this is an editorial system built to be filled.

## Layout

- **Frame size:** 1920×1080.
- **Density: medium to dense.** The graph paper actively wants to be filled; sparse slides leave too much grid showing and read as wireframe. Choose density by layout: chapter, manifesto, quote and colophon are sparse; index, data and table are dense.

| Token | Value | Use |
|---|---|---|
| `edge` | 69px | standard edge inset for content, hairlines, page number |
| `edge-inner` | 154px | tighter inset for centred manifesto statements |
| `pad-top` | 86px | top padding inside the content frame |
| `pad-bottom` | 108px | bottom padding inside the content frame |
| `gap-lg` | 56px | between major regions |
| `gap-md` | 24px | standard inter-element spacing |
| `gap-sm` | 17px | tight spacing |
| `gap-xs` | 13px | smallest gap, vstack rows |

**Zero rounded corners.** Every shape is a strict rectangle; the system has no circular elements. No shadows, no elevated cards, no gradients — depth is entirely structural: 1.5px cobalt rules, 1px faint dividers, the grid, and the glitch patches.

The one shadow-like effect in the system is the QR block's 1.5px paper-coloured outset, which is functional: it pushes the grid and scanlines away so the mosaic stays readable.

### The universal chrome frame

Every slide carries four pieces, and they are **not** optional:

1. **Top hairline** — 1.5px cobalt, 28px from top, inset 69px left/right.
2. **Bottom hairline** — 1.5px cobalt, 22px from bottom, same insets.
3. **Page number** — DM Mono cobalt, bottom-right, 52px from bottom so it clears the hairline.
4. **Graph-paper grid** — 42px squares at 10% cobalt, behind everything.

## The eight layouts

The source template ships eight slide archetypes. Treat them as a working set:

| Layout | Register | Composition |
|---|---|---|
| **Cover** | sparse | Huge hero title left, 32%-width pixel-glitch column right, QR patch top-right, vertical mono stack on the right edge, two-column footer credits |
| **Manifesto** | sparse | Centred statement at `edge-inner`, italic with `.roman` non-italic pull moments, 1px cobalt rule above a who-tag + meta-tag |
| **Index** | dense | Topbar + rule, then a 2×3 grid of numbered rows — mono num-tag, Newsreader row-headline, Hanken paragraph, faint dividers |
| **Chapter** | sparse | Display-chapter title over a glitch background with a lede paragraph |
| **Data** | dense | Two columns — a vbig numeral with label and description, beside an 8-track pixel-stack bar chart with a mono tick axis |
| **Quote** | sparse | Hanken kicker, display-quote pull, 1px cobalt attribution rule, compact 16%-width glitch column right at 0.6 opacity |
| **Table** | dense | Ledger of 5-column rows — num-tag / name / description / mood-tag / delta-tag with ↑ ↓ — arrows |
| **Colophon** | sparse | Right-aligned closing title, glitch column on the **left** edge mirroring the cover, 3–4 column credit grid |

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, `background: "#F0EBDE"` on both `display` and each frame, and everything below in `shared.head`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=Hanken+Grotesk:wght@400;600&family=Newsreader:wght@400;600&display=block');




:root{
  --paper:#F0EBDE; --paper-2:#E6E0CE; --ink:#1F2BE0; --ink-soft:#5560E5;
  --grid:rgba(31,43,224,0.10); --ink-faint:rgba(31,43,224,0.18);
  --serif:'Newsreader',Georgia,serif;
  --sans:'Hanken Grotesk','Helvetica Neue',sans-serif;
  --mono:'DM Mono',ui-monospace,monospace;
  --edge:69px; --edge-inner:154px; --pad-top:86px; --pad-bottom:108px;
  --gap-lg:56px; --gap-md:24px; --gap-sm:17px; --gap-xs:13px;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

/* stage — cream canvas + permanent graph paper */
.cg{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--paper);color:var(--ink);font-family:var(--sans);}
.cg::before{content:'';position:absolute;inset:0;pointer-events:none;z-index:1;
  background-image:
    linear-gradient(to right,var(--grid) 1px,transparent 1px),
    linear-gradient(to bottom,var(--grid) 1px,transparent 1px);
  background-size:42px 42px;}

/* chrome: top + bottom hairlines */
.cg::after{content:'';position:absolute;left:var(--edge);right:var(--edge);
  top:28px;height:1.5px;background:var(--ink);z-index:4;pointer-events:none;}
.cg-rule-b{position:absolute;left:var(--edge);right:var(--edge);bottom:22px;
  height:1.5px;background:var(--ink);z-index:4;pointer-events:none;}
.cg-pagenum{position:absolute;right:46px;bottom:52px;font-family:var(--mono);
  font-size:13px;color:var(--ink);letter-spacing:0.06em;z-index:9;}

/* type */
.cg-hero{font-family:var(--serif);font-weight:400;font-size:194px;
  line-height:1.02;letter-spacing:-0.008em;}
.cg-numeral{font-family:var(--serif);font-weight:400;font-size:194px;
  line-height:0.92;letter-spacing:-0.015em;}
.cg-closing{font-family:var(--serif);font-weight:400;font-size:151px;
  line-height:0.96;letter-spacing:-0.005em;}
.cg-manifesto{font-family:var(--serif);font-weight:400;font-size:119px;
  line-height:1.05;letter-spacing:-0.005em;}
.cg-chapter{font-family:var(--serif);font-weight:400;font-size:108px;
  line-height:1;letter-spacing:-0.005em;}
.cg-quote{font-family:var(--serif);font-weight:400;font-size:97px;
  line-height:1.05;letter-spacing:-0.005em;}
.cg-h-index{font-family:var(--serif);font-weight:400;font-size:92px;line-height:0.95;}
.cg-h{font-family:var(--serif);font-weight:400;font-size:89px;line-height:0.95;}
.cg-callout{font-family:var(--serif);font-weight:400;font-size:50px;line-height:1.1;}
.cg-rowhead{font-family:var(--serif);font-weight:400;font-size:38px;line-height:1.05;}
.cg-tname{font-family:var(--serif);font-weight:400;font-size:28px;line-height:1.15;}
.cg-body{font-family:var(--sans);font-weight:400;font-size:15px;line-height:1.5;}
.cg-lede{font-family:var(--sans);font-weight:400;font-size:18px;line-height:1.5;}
.cg-stat-desc{font-family:var(--sans);font-weight:400;font-size:17px;line-height:1.5;max-width:30ch;}
.cg-micro{font-family:var(--sans);font-weight:600;font-size:14px;line-height:1;
  text-transform:uppercase;letter-spacing:0.16em;}
.cg-micro-strong{font-family:var(--sans);font-weight:600;font-size:16px;line-height:1;
  text-transform:uppercase;letter-spacing:0.18em;}
.cg-micro-sm{font-family:var(--sans);font-weight:600;font-size:12px;line-height:1;
  text-transform:uppercase;letter-spacing:0.18em;}
.cg-mono{font-family:var(--mono);font-size:15px;line-height:1;letter-spacing:0.04em;}
.cg-mono-tick{font-family:var(--mono);font-size:14px;line-height:1;letter-spacing:0.04em;}
.cg-mono-chrome{font-family:var(--mono);font-size:13px;line-height:1;letter-spacing:0.06em;}

/* content frame for index / data / table / chapter */
.cg-frame{position:absolute;inset:var(--pad-top) var(--edge) var(--pad-bottom);
  z-index:5;display:flex;flex-direction:column;gap:var(--gap-md);}

/* topbar + 1.5px rule — the universal section header */
.cg-topbar{display:flex;align-items:end;justify-content:space-between;gap:30px;
  border-bottom:1.5px solid var(--ink);padding-bottom:15px;}
.cg-topbar .lab{font-family:var(--sans);font-weight:600;font-size:14px;
  text-transform:uppercase;letter-spacing:0.18em;text-align:right;}

/* index list — 2 x 3 */
.cg-list{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr;
  gap:22px 56px;flex:1;}
.cg-row{display:grid;grid-template-columns:56px 1fr;gap:22px;
  border-bottom:1px solid var(--ink-faint);padding-bottom:15px;}
.cg-row .num{font-family:var(--mono);font-size:15px;letter-spacing:0.04em;padding-top:6px;}

/* pixel-stack bar chart */
.cg-bars{display:grid;grid-template-columns:repeat(8,1fr);gap:18px;
  align-items:end;height:100%;min-height:410px;}
.cg-stack{display:flex;flex-direction:column-reverse;gap:3px;height:100%;}
.cg-cell{flex:1 1 0;min-height:6px;background:var(--grid);}
.cg-cell.on{background:var(--ink);}
.cg-ticks{display:grid;grid-template-columns:repeat(8,1fr);gap:18px;
  border-top:1.5px solid var(--ink);padding-top:11px;}
.cg-ticks span{font-family:var(--mono);font-size:14px;letter-spacing:0.04em;text-align:center;}

/* ledger table */
.cg-ledger-row{display:grid;grid-template-columns:76px 0.6fr 1.4fr 0.7fr 0.5fr;
  gap:28px;border-bottom:1px solid var(--ink-faint);padding:14px 0;align-items:baseline;}
.cg-ledger-head{border-bottom:1.5px solid var(--ink);}
.cg-delta{font-family:var(--mono);font-size:15px;letter-spacing:0.04em;}
.cg-delta.up::before{content:'↑ ';}
.cg-delta.down::before{content:'↓ ';opacity:0.6;}
.cg-delta.flat::before{content:'— ';opacity:0.6;}

/* decorations */
.cg-glitch{position:absolute;pointer-events:none;z-index:3;}
.cg-glitch svg{display:block;width:100%;height:100%;}
.cg-qr{position:absolute;pointer-events:none;z-index:5;display:grid;
  grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(8,1fr);gap:1.5px;
  background:var(--paper);padding:4px;box-shadow:0 0 0 1.5px var(--paper);}
.cg-qr i{display:block;background:var(--paper);}
.cg-qr i.on{background:var(--ink);}
.cg-vstack{position:absolute;right:60px;top:50%;transform:translateY(-50%);z-index:5;
  display:flex;flex-direction:column;gap:13px;align-items:end;}
.cg-vstack .v{font-family:var(--mono);font-size:15px;line-height:1;letter-spacing:0.04em;
  writing-mode:vertical-rl;text-orientation:mixed;}
.cg-attr{border-top:1px solid var(--ink);padding-top:13px;margin-top:32px;
  display:flex;gap:24px;align-items:center;}
</style>
```

### Components

**Pixel-glitch column** — the signature decoration. Stair-stepped rectangles filled with a vertical-scanline pattern, stretched with `preserveAspectRatio="none"`:

```html
<div class="cg-glitch" style="top:65px;right:69px;width:560px;bottom:130px;">
  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="vs-cover" width="2.4" height="100" patternUnits="userSpaceOnUse">
        <line x1="0.5" y1="0" x2="0.5" y2="100" stroke="#1F2BE0" stroke-width="1.0"/>
      </pattern>
    </defs>
    <rect x="36" y="0"  width="38" height="14" fill="url(#vs-cover)"/>
    <rect x="22" y="14" width="50" height="12" fill="url(#vs-cover)"/>
    <rect x="34" y="26" width="46" height="11" fill="url(#vs-cover)"/>
    <rect x="16" y="37" width="60" height="13" fill="url(#vs-cover)"/>
    <rect x="28" y="50" width="48" height="11" fill="url(#vs-cover)"/>
    <rect x="18" y="61" width="62" height="14" fill="url(#vs-cover)"/>
    <rect x="34" y="75" width="44" height="12" fill="url(#vs-cover)"/>
    <rect x="22" y="87" width="50" height="13" fill="url(#vs-cover)"/>
  </svg>
</div>
```

**Give every `<pattern>` a frame-unique id.** All frames share one DOM in the editor, so a repeated `id="vs1"` makes every glitch reference whichever definition loaded first. Suffix it per slide (`vs-cover`, `vs-quote`, …).

Sizes: 560px wide as the signature cover decoration, 280px at 0.6 opacity as compact secondary use. Anchor right, except on the colophon where it mirrors to the left.

**QR block** — 64 cells, `.on` for cobalt. The paper fill and outset are required; without them the scanlines bleed through and the mosaic loses its shape:

```html
<div class="cg-qr" style="top:65px;right:154px;width:81px;height:81px;">
  <i class="on"></i><i></i><i class="on"></i><i class="on"></i><i></i><i class="on"></i><i></i><i class="on"></i>
  <i></i><i class="on"></i><i></i><i></i><i class="on"></i><i></i><i class="on"></i><i></i>
  <i class="on"></i><i></i><i class="on"></i><i></i><i></i><i class="on"></i><i class="on"></i><i></i>
  <i></i><i class="on"></i><i></i><i class="on"></i><i class="on"></i><i></i><i></i><i class="on"></i>
  <i class="on"></i><i></i><i></i><i class="on"></i><i></i><i class="on"></i><i class="on"></i><i></i>
  <i></i><i class="on"></i><i class="on"></i><i></i><i class="on"></i><i></i><i></i><i class="on"></i>
  <i class="on"></i><i></i><i class="on"></i><i></i><i></i><i class="on"></i><i></i><i class="on"></i>
  <i></i><i class="on"></i><i></i><i class="on"></i><i class="on"></i><i></i><i class="on"></i><i></i>
</div>
```

**Chrome** — every frame ends with these two:

```html
<div class="cg-rule-b"></div>
<div class="cg-pagenum">03 / 08</div>
```

### Cover frame

```html
<div class="cg">
  <div style="position:absolute;left:69px;top:97px;z-index:5;max-width:60%;">
    <h1 class="cg-hero">Index<br>2026</h1>
    <div style="margin-top:24px;display:flex;flex-direction:column;gap:6px;">
      <div class="cg-micro-strong">Field Office Quarterly · Volume IV</div>
      <div class="cg-callout">A field report on the state of things.</div>
    </div>
  </div>

  <div class="cg-glitch" style="top:65px;right:69px;width:560px;bottom:130px;">…svg…</div>
  <div class="cg-qr" style="top:65px;right:154px;width:81px;height:81px;">…64 cells…</div>

  <div class="cg-vstack">
    <div class="v">issue.04</div>
    <div class="v">spring 2026</div>
    <div class="v">field-office.co</div>
  </div>

  <div style="position:absolute;left:69px;right:768px;bottom:86px;display:flex;gap:56px;align-items:end;z-index:5;">
    <div class="cg-body">
      <div class="cg-micro-sm" style="margin-bottom:4px;">Edited by</div>
      Field Office Editorial · Lin Ito &amp; Anya Mehrotra
    </div>
    <div class="cg-body">
      <div class="cg-micro-sm" style="margin-bottom:4px;">Distributed</div>
      To subscribers &amp; the open web · twice a year
    </div>
  </div>

  <div class="cg-rule-b"></div>
  <div class="cg-pagenum">01 / 08</div>
</div>
```

Note the footer's `right:768px` — it is deliberately constrained to the left half so it never runs under the glitch column.

### Index frame

```html
<div class="cg">
  <div class="cg-frame">
    <div class="cg-topbar">
      <div class="cg-h-index">Six shifts<br>worth watching</div>
      <div class="lab">Trend index / 2026</div>
    </div>
    <div class="cg-list">
      <div class="cg-row">
        <div class="num">01</div>
        <div>
          <h3 class="cg-rowhead" style="margin-bottom:6px;">Slow software</h3>
          <p class="cg-body" style="max-width:92%;">Teams are trading feature velocity for systems that stay legible a year later.</p>
        </div>
      </div>
      <!-- five more rows -->
    </div>
  </div>
  <div class="cg-rule-b"></div>
  <div class="cg-pagenum">03 / 08</div>
</div>
```

## Do's and Don'ts

**Do** — set every Newsreader element at weight 400 in cobalt; track every Hanken label at 0.16em+ uppercase at 600; track every mono element 0.04–0.08em; keep the grid on every slide; keep both hairlines with the page number clear above the bottom one; use the pixel-glitch on declarative slides and pair it with a QR patch when the composition needs a discrete anchor; use topbar-plus-rule as the standard section header; use faint dividers between dense rows; render charts as pixel-stack cells.

**Don't** — set the hero below 1.02 line-height, or let any multi-line display element run tighter than ~0.95 (descenders collide with the next line's ascenders); introduce a second ink colour; render Newsreader at 600 or 700; disable the grid; suppress the hairlines; round any corner; add shadows, cards or gradients; use Hanken caps without tracking; sit the page number on the bottom hairline; drop the QR's paper fill; crowd the manifesto, quote or colophon.

## Fonts

All four faces — Newsreader 400, Hanken Grotesk 400 and 600, DM Mono 400 — are hosted in the workspace asset library and wired into the `@font-face` block above. No setup needed.

Do not restore the source's Google Fonts `<link>`: Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. All four families are OFL-licensed, so self-hosting is permitted.

Newsreader **italic** is not hosted. The source loads a 300/400/500 italic axis and uses it for the manifesto's italic body and inline `<em>`. Synthetic obliquing will stand in until an italic `.woff2` is uploaded; if the manifesto layout matters, add it.

## Notes on the port

The source is a different shape from the other themes in this folder — a complete, self-contained 8-slide HTML deck plus a design specification, rather than a component sheet. Five deliberate departures:

1. **The fluid type scale was resolved to fixed pixels.** Every size in the source is a `clamp()` against `vw`/`vh`. In a Studiograph frame those units resolve against the browser viewport, not the 1920×1080 frame, so a `vh`-based headline would resize as the editor window changes and would not match the frame it sits in. Every value in the tables above is the source's own clamp evaluated at exactly 1920×1080 — `display-hero` resolves through `min(11vw, 18vh)` to 194px, `edge` to 69px, and so on. The numbers are the template's, just frozen.
2. **The navigation layer was removed.** The source ships a vanilla-JS stepper (arrow keys, space, Home/End, touch swipe) driving `.slide` / `.slide.active` opacity transitions. Studiograph steps frames itself and hand-rolling a stepper inside one frame is wrong, so all of it is gone: the script, the `.deck`/`.stage` wrappers, the absolute-positioned `.slide` machinery, and the `position:fixed` nav hint. The eight slides become eight frames.
3. **The chrome frame changed pseudo-elements.** The source hangs the grid on `.stage::before` and both hairlines on `.hairlines::before` / `::after`. With one stage per frame, the grid takes `.cg::before` and the top hairline takes `.cg::after`; the bottom hairline needs a real element (`.cg-rule-b`) since both pseudo slots are used.
4. **Pattern ids must be per-frame.** Not a source issue — a consequence of frames sharing one DOM. See the glitch component note.
5. **The colophon and table layouts are documented from the specification**, not transcribed rule-by-rule from the stylesheet. Their structure (5-column ledger grid, delta arrow prefixes, right-aligned closing with mirrored left glitch, 3–4 column credits) is captured, but if you want them pixel-exact, read `templates/cobalt-grid/template.html` in the source repo.
6. **The hero line-height was raised from the source's 0.92 to 1.02.** This is the one type value here that is *not* the source's own. At the source's fluid sizes the hero rarely reached 194px, so 0.92 held; frozen at 1920×1080 it does not, and a two-line hero with a descender over an ascender overlaps. See the Typography note for the arithmetic. Every other size and leading in this skill is the template's value, resolved.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/cobalt-grid` — `design.md`, `template.html`, `template.json`.

The source also carries a CJK section (recommended Chinese pairing, mixed-content strategy, a known gap around vertical CJK) that is not reproduced here. If you need a Chinese-language Cobalt Grid deck, read that section in the original `design.md`.
