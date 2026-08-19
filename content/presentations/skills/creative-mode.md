---
entity_type: skill
entity_id: creative-mode
created_at: '2026-08-14T20:53:29.090Z'
updated_at: '2026-08-14T20:53:29.090Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - light
  - brutalist
  - creative
  - design-system
name: Creative Mode
description: >-
  Neo-brutalist creative deck theme — warm cream canvas, 4px ink borders, hard
  offset drop-shadows, and a four-accent palette of forest green, hot pink,
  burnt orange and sunshine yellow. Archivo Black display in pure uppercase,
  Space Grotesk body, JetBrains Mono labels. Use for creative agency pitches,
  design studio decks, ad shop credentials, brand and art-direction reviews.
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
  templates/creative-mode
---
# Creative Mode

A neo-brutalist editorial system: warm cream canvas, heavy 4px ink borders, hard offset drop-shadows, and a bold four-accent palette. Archivo Black runs every display moment in pure uppercase — aggressive, loud, zero softness. JetBrains Mono echoes a typesetting rule-sheet. Space Grotesk carries body.

Part Bauhaus grid, part punk zine, part Swiss editorial. Flat colour-blocking, no gradients, no rounded cards, no subtlety.

## When to use

Reach for Creative Mode when the deck should lead with taste — creative agency pitches, design studio decks, ad shop credentials, brand creative reviews, art-direction reviews, concept presentations. It's also a strong unexpected pick for a tech talk, research findings or finance review when the speaker wants to read design-led rather than conventional.

**Avoid it** where institutional restraint and quiet authority are needed. The saturated multi-accent palette reads expressive, not formal.

Note how it differs from `neo-grid-bold`, the other brutalist theme here: that one is monochrome-plus-one-neon on a strict 12×8 grid with **no shadows at all**. Creative Mode is four saturated accents, free composition, and **hard offset shadows are a defining feature**. Do not use either for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

| Role | Value | Notes |
|---|---|---|
| `cream` | `#EFE9D9` | the canvas — warm paper, never white |
| `cream-2` | `#E4DCC4` | table fill, deeper cream |
| `ink` | `#0F0F0F` | all borders, all structure, most text |
| `ink-2` | `#2A2A2A` | rare secondary ink |
| `green` | `#1F8A4C` | forest green — carries cream text |
| `green-dark` | `#136636` | green shadow / depth variant |
| `pink` | `#F06CA8` | hot pink — carries ink text |
| `pink-dark` | `#D14E8B` | pink depth variant |
| `orange` | `#E85A1F` | burnt orange — carries cream text |
| `yellow` | `#F5C518` | sunshine yellow — carries ink text |

**Use two or three accents per slide, never all four** — every accent on one slide is noise. **Reserve a green background for a single dominant slide**; its rarity is what gives it impact.

Never use pure white as a background. Cream is the canvas; white reads as blank.

## Typography

Three families, strict roles.

- **Archivo Black** — every display moment, **always uppercase**. Single weight (400 is its only cut; it is already black). Sentence case reads as a different brand.
- **Space Grotesk** — body only. Never labels.
- **JetBrains Mono** — all labels, metadata, indices, figure notes, axis text. Never body or headlines.

| Token | Size | Family | Use |
|---|---|---|---|
| `display-jumbo` | 220px | Archivo Black | largest poster moment |
| `display-hero` | 160px | Archivo Black | title slide |
| `display-xl` | 140px | Archivo Black | major headline |
| `step-num` | 140px | Archivo Black | process step numeral (lh 0.85) |
| `display-lg` | 100px | Archivo Black | section headline |
| `display-md` / `stat-num` | 96px | Archivo Black | headline / stat figure |
| `display-sm` | 84px | Archivo Black | smaller headline |
| `display-xs` | 72px | Archivo Black | smallest display (lh 0.95) |
| `stamp-num` | 64px | Archivo Black | stamp numeral |
| `marker-label` | 46px | Archivo Black | marker block label |
| `step-title` | 34px | Archivo Black | step card title |
| `badge-label` / `table-head` | 28px | Archivo Black | badge, table header |
| `body-lg` | 28px | Space Grotesk | body (lh 1.4) |
| `body-md` | 24px | Space Grotesk | secondary body (lh 1.3) |
| `mono-label` | 24px | JetBrains Mono | label, 0.06em |
| `mono-kicker` | 24px | JetBrains Mono | kicker, 0.14em |
| `mono-tag` | 24px | JetBrains Mono | tag, 0.1em |
| `mono-chart` | 24px | JetBrains Mono | axis text, 0.08em |

**Line-height stays 0.92 on all display text.** Looser leading breaks the tight editorial register. **Never add letter-spacing to Archivo Black** beyond the encoded −0.01em — extra tracking destroys its density.

Body copy is always left-aligned. Centred body breaks the grid discipline.

## Layout

- **Frame size:** 1920×1080, authored in fixed pixels.
- **Content gutter:** 96px. **Chrome gutter:** 64px. Keep both consistent across every slide.
- Topbar sits at `top: 48px`, slide meta at `bottom: 40px`, both inset 64px.

| Token | Value |
|---|---|
| `slide-gutter` | 96px |
| `chrome-gutter` | 64px |
| `grid-gap` | 28px |
| `cell-pad` | 32px |
| `step-pad` | 28px |
| `table-cell-pad` | 18px 26px |

### The two defining treatments

**4px ink borders on every structural element.** Thinner looks soft; thicker looks like a web component.

**Hard offset shadows in exactly two sizes** — 24px for featured hero blocks, 18px for stacked diagram blocks. Never mix sizes, and never blur them. The featured shadow is a double stack that produces an outlined offset:

```css
box-shadow: 24px 24px 0 var(--orange), 24px 24px 0 4px var(--ink);
```

That second layer, offset by the same amount with a 4px spread in ink, draws the border around the shadow itself. It is the system's signature move.

**No rounded corners anywhere** — except the topbar pill, which is `border-radius: 999px`. That is the only exception in the system.

### Rotated elements

The **badge** sits at `rotate(-4deg)`, the **stamp** at `rotate(-6deg)` (a 340px pink circle-in-square with 4px cream borders). Do not soften these angles — the deliberate imperfection is the point.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, `background: "#EFE9D9"` on both `display` and each frame, and everything below in `shared.head`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=Archivo+Black:wght@400&family=JetBrains+Mono:wght@100..800&family=Space+Grotesk:wght@300..700&display=block');



:root{
  --cream:#EFE9D9; --cream-2:#E4DCC4; --ink:#0F0F0F; --ink-2:#2A2A2A;
  --green:#1F8A4C; --green-dark:#136636; --pink:#F06CA8; --pink-dark:#D14E8B;
  --orange:#E85A1F; --yellow:#F5C518;
  --display:'Archivo Black',sans-serif;
  --body:'Space Grotesk',system-ui,sans-serif;
  --mono:'JetBrains Mono',monospace;
  --gutter:96px; --chrome:64px; --gap:28px;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

.cm{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--cream);color:var(--ink);font-family:var(--body);}
.cm.green{background:var(--green);color:var(--cream);}

/* display — uppercase always, lh 0.92 always */
.cm-display{font-family:var(--display);text-transform:uppercase;
  letter-spacing:-0.01em;line-height:0.92;}
.cm-jumbo{font-size:220px;} .cm-hero{font-size:160px;} .cm-xl{font-size:140px;}
.cm-lg{font-size:100px;} .cm-md{font-size:96px;} .cm-sm{font-size:84px;}
.cm-xs{font-size:72px;line-height:0.95;}
.cm-stat{font-family:var(--display);font-size:96px;line-height:0.9;letter-spacing:0;}
.cm-step-num{font-family:var(--display);font-size:140px;line-height:0.85;letter-spacing:0;}
.cm-stamp-num{font-family:var(--display);font-size:64px;line-height:0.9;}
.cm-marker-label{font-family:var(--display);font-size:46px;line-height:1;
  text-transform:uppercase;}
.cm-step-title{font-family:var(--display);font-size:34px;line-height:1;
  text-transform:uppercase;}
.cm-badge-label{font-family:var(--display);font-size:28px;line-height:1;
  text-transform:uppercase;}

/* body — left aligned always */
.cm-body{font-family:var(--body);font-size:28px;font-weight:400;line-height:1.4;}
.cm-body-md{font-family:var(--body);font-size:24px;font-weight:400;line-height:1.3;}

/* mono — labels only */
.cm-mono{font-family:var(--mono);font-size:24px;font-weight:400;
  letter-spacing:0.06em;text-transform:uppercase;}
.cm-kicker{font-family:var(--mono);font-size:24px;letter-spacing:0.14em;
  text-transform:uppercase;}
.cm-kicker-block{display:inline-block;background:var(--ink);color:var(--cream);
  font-family:var(--mono);font-size:24px;letter-spacing:0.14em;
  text-transform:uppercase;padding:8px 16px;}

/* chrome */
.cm-topbar{position:absolute;left:var(--chrome);right:var(--chrome);top:48px;
  display:flex;justify-content:space-between;align-items:center;
  font-family:var(--mono);font-size:24px;letter-spacing:0.08em;text-transform:uppercase;}
.cm-topbar .pill{border:2px solid var(--ink);padding:6px 14px;border-radius:999px;}
.cm-meta{position:absolute;left:var(--chrome);right:var(--chrome);bottom:40px;
  display:flex;justify-content:space-between;align-items:center;
  font-family:var(--mono);font-size:24px;letter-spacing:0.06em;text-transform:uppercase;}
.cm-meta .dot{width:10px;height:10px;background:var(--ink);border-radius:50%;
  display:inline-block;margin:0 14px;transform:translateY(-2px);}

/* blocks — 4px ink border is universal */
.cm-block{border:4px solid var(--ink);padding:28px 32px;}
.cm-block.green{background:var(--green);color:var(--cream);}
.cm-block.pink{background:var(--pink);color:var(--ink);}
.cm-block.orange{background:var(--orange);color:var(--cream);}
.cm-block.yellow{background:var(--yellow);color:var(--ink);}
.cm-block.cream{background:var(--cream);color:var(--ink);}

/* the two shadow sizes — never blurred, never mixed */
.cm-shadow-hero{box-shadow:24px 24px 0 var(--orange),24px 24px 0 4px var(--ink);}
.cm-shadow-stack{box-shadow:18px 18px 0 var(--ink);}

/* step card */
.cm-step{border:4px solid var(--ink);padding:28px;height:420px;
  display:flex;flex-direction:column;justify-content:space-between;}
.cm-step-arrow{width:0;height:0;border-top:18px solid transparent;
  border-bottom:18px solid transparent;border-left:24px solid var(--ink);}

/* rotated marks — do not soften */
.cm-badge{display:inline-block;background:var(--yellow);border:4px solid var(--ink);
  padding:12px 20px;transform:rotate(-4deg);}
.cm-stamp{width:340px;height:340px;background:var(--pink);border:4px solid var(--cream);
  transform:rotate(-6deg);display:flex;align-items:center;justify-content:center;}
.cm-stamp-inner{border:4px solid var(--cream);border-radius:50%;
  width:84%;height:84%;display:flex;flex-direction:column;
  align-items:center;justify-content:center;text-align:center;color:var(--cream);}

/* table */
.cm-table{border:4px solid var(--ink);background:var(--cream-2);display:grid;}
.cm-table .th{background:var(--ink);color:var(--cream);font-family:var(--display);
  font-size:28px;text-transform:uppercase;padding:18px 26px;
  border-right:3px solid var(--cream);}
.cm-table .th.last{border-right:none;}
.cm-table .td{padding:18px 26px;font-family:var(--body);font-size:24px;
  border-top:3px solid var(--ink);border-right:3px solid var(--ink);}
.cm-table .td.last{border-right:none;}
.cm-table .col-pink{background:var(--pink);color:var(--ink);}
.cm-table .col-green{background:var(--green);color:var(--cream);}
.cm-table .col-orange{background:var(--orange);color:var(--cream);}

/* bar chart */
.cm-chart{border-right:3px solid var(--ink);border-bottom:3px solid var(--ink);
  display:flex;align-items:flex-end;gap:28px;height:100%;padding:0 28px;}
.cm-bar{flex:1;border:3px solid var(--ink);}
</style>
```

### Title slide

```html
<div class="cm">
  <div class="cm-topbar">
    <span>Field Office</span>
    <span class="pill">Credentials 2026</span>
  </div>
  <h1 class="cm-display cm-hero" style="position:absolute;left:96px;top:50%;
      transform:translateY(-50%);width:900px;">Make<br>the<br>loud<br>thing</h1>
  <div class="cm-block green cm-shadow-hero" style="position:absolute;right:150px;
      top:180px;bottom:200px;width:700px;display:flex;align-items:center;justify-content:center;">
    <div class="cm-stamp">
      <div class="cm-stamp-inner">
        <span class="cm-stamp-num">08</span>
        <span class="cm-mono" style="font-size:18px;margin-top:8px;">Projects</span>
      </div>
    </div>
  </div>
  <div class="cm-meta">
    <span>Creative studio<span class="dot"></span>Est. 2019</span>
    <span>01 / 08</span>
  </div>
</div>
```

### Stat row

```html
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:28px;">
  <div class="cm-block green"><span class="cm-mono">Reach</span>
    <div class="cm-stat" style="margin-top:16px;">4.1M</div></div>
  <div class="cm-block pink"><span class="cm-mono">Awards</span>
    <div class="cm-stat" style="margin-top:16px;">12</div></div>
  <div class="cm-block cream"><span class="cm-mono">Clients</span>
    <div class="cm-stat" style="margin-top:16px;">38</div></div>
  <div class="cm-block orange"><span class="cm-mono">Years</span>
    <div class="cm-stat" style="margin-top:16px;">07</div></div>
</div>
```

### Process steps

```html
<div style="display:flex;align-items:center;gap:28px;">
  <div class="cm-step cream" style="flex:1;">
    <span class="cm-step-num">01</span>
    <div><h3 class="cm-step-title">Listen</h3>
      <p class="cm-body-md" style="margin-top:12px;">We start with the problem, not the deliverable.</p></div>
  </div>
  <div class="cm-step-arrow"></div>
  <div class="cm-step pink" style="flex:1;">…</div>
  <div class="cm-step-arrow"></div>
  <div class="cm-step yellow" style="flex:1;">…</div>
</div>
```

## Do's and Don'ts

**Do** — 4px ink borders on every structural element; hard offset shadows in exactly 24px and 18px; keep Archivo Black uppercase; use two or three accents per slide; reserve green backgrounds for one dominant slide; mono for all labels; line-height 0.92 on display; keep 96px content and 64px chrome gutters.

**Don't** — round card corners (except the topbar pill); use gradients, blurred shadows or glows; set Archivo Black in sentence case; add letter-spacing to Archivo Black; introduce a fifth accent; use pure white as a background; use Space Grotesk for labels; add a fourth typeface; centre-align body copy; soften the −4° and −6° rotations.

## Fonts

Archivo Black is hosted in this folder's asset library. Space Grotesk and JetBrains Mono were already hosted for other themes here and are reused — this skill points at the **variable** JetBrains Mono, the same file `neo-grid-bold` and `editorial-forest` use, not the static weight-400 cut that `monochrome` uses.

Archivo Black ships as a single weight (400 is its only cut — the face is already black). Do not attempt to bold it further; there is no heavier weight and synthetic bolding would smear it.

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. All three families are OFL-licensed.

## Notes on the port

Like `editorial-forest` and `neo-grid-bold`, this template is already authored at a fixed 1920×1080 canvas in real pixels with no animation layer, so it ported cleanly. Four departures:

1. **The `deck-stage` runtime is gone.** The source styles its slides via `deck-stage > section` and relies on the custom element for canvas scaling and navigation. That selector became the `.cm` class, and the eight slides become eight frames. The source's black page background — the colour behind the scaled slide — goes with it.
2. **Per-slide classes became composable ones.** The source addresses each slide positionally (`.s1 .title`, `.s3 .stat`, `.s6 .step`…) with absolute coordinates baked in per slide. Here the blocks, type and shadows are generic and each frame declares its own positioning. Every value is the source's own.
3. **Component class names are prefixed `cm-`** to avoid collisions with the other themes in this folder.
4. **The hero shadow is exposed as a utility.** The source hard-codes `box-shadow: 24px 24px 0 var(--orange), 24px 24px 0 4px var(--ink)` on one element; since it is the system's signature, it became `.cm-shadow-hero` alongside `.cm-shadow-stack` for the 18px variant. Change the first colour if a slide's accent pairing calls for it — but keep both layers, or the shadow loses its outline.

**Worth flagging:** this theme and `neo-grid-bold` are both neo-brutalist and both use ink-black structure on a warm ground, but they take opposite positions on shadows — Creative Mode's hard offsets are load-bearing, Neo-Grid Bold forbids shadows entirely and gets depth from colour adjacency. Do not cross-pollinate them.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/creative-mode` — `design.md`, `template.html`, `template.json`.
