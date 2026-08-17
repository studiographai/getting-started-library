---
entity_type: skill
entity_id: studio
created_at: '2026-08-14T21:34:15.275Z'
updated_at: '2026-08-14T21:34:15.275Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - dark
  - graphic
  - high-contrast
  - design-system
name: Studio
description: >-
  Type-as-graphic-mass deck theme — a binary palette of near-black and acid
  yellow where each is both surface and type colour, with Barlow 900 uppercase
  at scales where type becomes shape. IBM Plex Mono for metadata only. No third
  colour, no shadows, no rounded corners. Use for design studio credentials,
  creative agency pitches, brand showcases, art-direction reviews, fashion and
  sneaker work.
applies_to:
  - deck
  - slides
  - presentation
  - artifact-canvas
  - theme
loading: on-demand
status: draft
source: github.com/zarazhangrui/beautiful-html-templates @ e5e204f — templates/studio
---
# Studio

A **type-as-graphic-mass** system in the register of contemporary design-studio decks — Pentagram, Anti, Order. The premise is reductive to the point of severity: one typeface, one weight, strict uppercase, at scales so large that type stops behaving like type and starts behaving like a shape.

**The headline IS the design.** Strip every other element from a Studio slide and it still reads as Studio.

## When to use

Reach for Studio when the deck should feel electric and design-led — studio credentials, creative agency pitches, brand showcases, art-direction reviews, fashion and sneaker work. It's a striking unexpected choice for tech, research or business decks where the speaker wants the deck to *be* a brand statement.

**Avoid it** for anything quiet or institutional. This is the loudest palette in the set.

It shares neo-brutalist DNA with `neo-grid-bold` and `creative-mode`, but is more reductive than either: no grid system, no four-colour palette, no shadows. Just two colours and enormous type. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

**Binary plus opacity.** The palette is not "a dark theme with a yellow accent" — it is two surfaces that swap roles.

| Role | Value | Notes |
|---|---|---|
| `near-black` | `#1C1C1C` | warm dark, not cold neutral |
| `near-black-alt` | `#242422` | image placeholders on dark |
| `acid-yellow` | `#F5D200` | **both the type colour on dark AND a full slide surface** |
| `acid-yellow-alt` | `#F0CC00` | image placeholders on yellow |
| `text-on-dark-2` / `-3` | yellow at 58% / 32% | secondary / tertiary on dark |
| `text-on-light-2` / `-3` | near-black at 62% / 35% | secondary / tertiary on yellow |
| `border-dark` | `#2E2E2C` | hairline on dark |
| `border-light` | near-black at 18% | hairline on yellow |

On dark slides, text is yellow. On yellow slides, text is near-black. **That is the entire colour system.**

**There are no greys.** Muted text is the same colour at reduced opacity — never a separate tone. Adding any third colour breaks the binary logic.

## Typography

One face carries everything except metadata.

| Token | Size | Family | Weight | Use |
|---|---|---|---|---|
| `display` | 230px | Barlow | 900 | cover display (lh 0.9, −0.02em) |
| `h1` | 144px | Barlow | 900 | statement headline (lh 0.92, −0.02em) |
| `stat-value` | 106px | Barlow | 900 | stat figure (lh 0.9, −0.03em) |
| `h2` | 92px | Barlow | 900 | section header (lh 0.95, −0.01em) |
| `quote-text` | 73px | Barlow | 900 | pull-quote (lh 1.05, −0.02em) |
| `h3` | 54px | Barlow | 700 | sub-header (lh 1.1) |
| `lead` | 31px | Barlow | 500 | lead paragraph (lh 1.45) |
| `body` | 22px | Barlow | 400 | body (lh 1.6) |
| `caption` | 16px | Barlow | 400 | caption |
| `label` | 14px | IBM Plex Mono | 500 | **metadata only**, 0.06em |

**Every Barlow 900 element runs uppercase — no exceptions.** Display is always 900; never 800 or 700 at display scale. All display type carries negative tracking of at least −0.01em.

**Mono is the spec-sheet voice and lives only in metadata** — chrome labels, slide counters, chapter numbers, the cover lockup, stat notes. Never headlines, never body. Conversely, never set chrome in Barlow; it reads as content rather than spec.

## Layout

- **Frame size:** 1920×1080.
- **Padding:** 96px horizontal, 54px vertical — **deliberately tighter than the other editorial themes here**, because the type itself runs near the edge. The heading is the spatial fill, not the margin. Generous padding breaks the scale effect.
- **Density: low and deliberate.** A statement slide is one headline filling most of the canvas with empty surface above and below. The correct register is *"one massive thing, said once, in 900 weight uppercase."*

| Token | Value |
|---|---|
| `pad-x` | 96px |
| `pad-y` | 54px |
| `gap-lg` | 38px |
| `gap-md` | 22px |
| `gap-sm` | 11px |

**Flat and severe.** No shadows, no gradients, no rounded corners. Borders are 1px hairlines on chrome; **2px** on stat-card tops, chart baselines and compare dividers — that weight difference is what separates "anchor" elements from chrome.

### Components

- **Chrome / foot bars** — mono label left, mono counter right, hairline rule.
- **Cover-meta lockup** — the signature pattern: a three-column mono footer over the cover image (studio × client + date / presentation title / studio name), with a top rule at 25% yellow.
- **Stat card** — 2px top rule, value at 900 in the surface's foreground, label and mono note beneath.
- **Bullet** — an em-dash in the surface accent. Never dots, never circles.
- **Cover image area** — a placeholder filling the entire slide behind the type; the display word sits on top.
- **Bars** — muted surface text colour by default, full foreground for the highlighted bar, over a 2px baseline.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080. Set each frame's `background` to match its surface — `#1C1C1C` or `#F5D200` — and `display.background` to `#1C1C1C`.

### `shared.head`

```html
<style>
@font-face{font-family:'Barlow';font-style:normal;font-weight:400;font-display:block;
  src:url('/api/assets/{{ASSET_ID}}/Barlow-Regular.woff2') format('woff2');}
@font-face{font-family:'Barlow';font-style:normal;font-weight:500;font-display:block;
  src:url('/api/assets/{{ASSET_ID}}/Barlow-Medium.woff2') format('woff2');}
@font-face{font-family:'Barlow';font-style:normal;font-weight:700;font-display:block;
  src:url('/api/assets/{{ASSET_ID}}/Barlow-Bold.woff2') format('woff2');}
@font-face{font-family:'Barlow';font-style:normal;font-weight:900;font-display:block;
  src:url('/api/assets/{{ASSET_ID}}/Barlow-Black.woff2') format('woff2');}
@font-face{font-family:'IBM Plex Mono';font-style:normal;font-weight:500;font-display:block;
  src:url('/api/assets/{{ASSET_ID}}/IBMPlexMono-Medium.woff2') format('woff2');}
:root{
  --black:#1C1C1C; --black-alt:#242422;
  --yellow:#F5D200; --yellow-alt:#F0CC00;
  --on-dark-2:rgba(245,210,0,0.58); --on-dark-3:rgba(245,210,0,0.32);
  --on-light-2:rgba(28,28,28,0.62); --on-light-3:rgba(28,28,28,0.35);
  --border-dark:#2E2E2C; --border-light:rgba(28,28,28,0.18);
  --sans:'Barlow','Noto Sans SC',sans-serif;
  --mono:'IBM Plex Mono',monospace;
  --pad-x:96px; --pad-y:54px; --gap-lg:38px; --gap-md:22px; --gap-sm:11px;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

/* the two surfaces — each is both field and type colour */
.st{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--black);color:var(--yellow);font-family:var(--sans);
  padding:var(--pad-y) var(--pad-x);display:flex;flex-direction:column;}
.st.yellow{background:var(--yellow);color:var(--black);}

/* display — 900, uppercase, always */
.st-display{font-family:var(--sans);font-weight:900;font-size:230px;
  line-height:0.9;letter-spacing:-0.02em;text-transform:uppercase;}
.st-h1{font-family:var(--sans);font-weight:900;font-size:144px;
  line-height:0.92;letter-spacing:-0.02em;text-transform:uppercase;}
.st-h2{font-family:var(--sans);font-weight:900;font-size:92px;
  line-height:0.95;letter-spacing:-0.01em;text-transform:uppercase;}
.st-h3{font-family:var(--sans);font-weight:700;font-size:54px;
  line-height:1.1;text-transform:uppercase;}
.st-quote{font-family:var(--sans);font-weight:900;font-size:73px;
  line-height:1.05;letter-spacing:-0.02em;text-transform:uppercase;}
.st-stat{font-family:var(--sans);font-weight:900;font-size:106px;
  line-height:0.9;letter-spacing:-0.03em;text-transform:uppercase;}

/* body */
.st-lead{font-family:var(--sans);font-weight:500;font-size:31px;line-height:1.45;}
.st-body{font-family:var(--sans);font-weight:400;font-size:22px;line-height:1.6;}
.st-caption{font-family:var(--sans);font-weight:400;font-size:16px;line-height:1.5;}

/* muted = opacity, never a grey */
.st-muted{color:var(--on-dark-2);} .st.yellow .st-muted{color:var(--on-light-2);}
.st-faint{color:var(--on-dark-3);} .st.yellow .st-faint{color:var(--on-light-3);}

/* mono — metadata only */
.st-label{font-family:var(--mono);font-weight:500;font-size:14px;letter-spacing:0.06em;}

/* chrome */
.st-chrome{display:flex;justify-content:space-between;align-items:center;
  padding-bottom:var(--gap-sm);border-bottom:1px solid var(--border-dark);
  margin-bottom:var(--gap-md);
  font-family:var(--mono);font-weight:500;font-size:14px;letter-spacing:0.06em;}
.st-foot{margin-top:auto;padding-top:var(--gap-sm);border-top:1px solid var(--border-dark);
  display:flex;justify-content:space-between;align-items:center;
  font-family:var(--mono);font-weight:500;font-size:14px;letter-spacing:0.06em;}
.st.yellow .st-chrome{border-bottom-color:var(--border-light);}
.st.yellow .st-foot{border-top-color:var(--border-light);}

/* the signature cover lockup */
.st-cover-meta{display:grid;grid-template-columns:1fr 1fr 1fr;
  border-top:1px solid rgba(245,210,0,0.25);padding-top:var(--gap-sm);
  font-family:var(--mono);font-weight:500;font-size:14px;letter-spacing:0.06em;}
.st-cover-meta > :nth-child(2){text-align:center;}
.st-cover-meta > :nth-child(3){text-align:right;}
.st-cover-img{position:absolute;inset:0;background:var(--black-alt);z-index:0;}
.st > *{position:relative;z-index:1;}

/* stat card — 2px anchor rule */
.st-stat-card{border-top:2px solid var(--yellow);
  padding:var(--gap-md) var(--gap-md) var(--gap-md) 0;}
.st.yellow .st-stat-card{border-top-color:var(--black);}

/* em-dash bullets in the surface accent */
.st-list{display:flex;flex-direction:column;gap:var(--gap-sm);}
.st-li{display:grid;grid-template-columns:1.4em 1fr;align-items:baseline;}
.st-li::before{content:'—';font-family:var(--sans);font-weight:500;}

/* bars — 2px baseline */
.st-bars{display:flex;align-items:flex-end;gap:20px;height:100%;
  border-bottom:2px solid var(--on-dark-3);}
.st.yellow .st-bars{border-bottom-color:var(--border-light);}
.st-bar{flex:1;background:var(--on-dark-3);}
.st.yellow .st-bar{background:var(--on-light-3);}
.st-bar.on{background:var(--yellow);}
.st.yellow .st-bar.on{background:var(--black);}

/* compare divider — 2px */
.st-divider{border-right:2px solid var(--on-dark-3);}
.st.yellow .st-divider{border-right-color:var(--black);}

/* image placeholder */
.st-img{background:var(--black-alt);color:var(--on-dark-3);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--mono);font-weight:500;font-size:14px;letter-spacing:0.06em;}
.st.yellow .st-img{background:var(--yellow-alt);color:var(--on-light-3);
  border:1px solid var(--border-light);}
</style>
```

### Cover frame — the signature lockup

```html
<div class="st">
  <div class="st-cover-img"></div>
  <div style="flex:1;display:flex;align-items:center;">
    <h1 class="st-display">Boring</h1>
  </div>
  <div class="st-cover-meta">
    <span>Boring Studios × Meridian · 2026</span>
    <span>Studio credentials</span>
    <span>Boring Studios</span>
  </div>
</div>
```

### Statement frame (yellow surface)

```html
<div class="st yellow">
  <div class="st-chrome"><span>Credentials</span><span>04 / 12</span></div>
  <div style="flex:1;display:flex;align-items:center;">
    <h2 class="st-h1" style="max-width:1500px;">We make the thing, not the deck about the thing</h2>
  </div>
  <div class="st-foot"><span>Boring Studios</span><span>Statement</span></div>
</div>
```

### Stats frame

```html
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--gap-lg);">
  <div class="st-stat-card">
    <div class="st-stat">48</div>
    <div class="st-h3" style="font-size:28px;margin-top:12px;">Projects</div>
    <div class="st-label st-muted" style="margin-top:8px;">Since 2019</div>
  </div>
  <!-- two more -->
</div>
```

## Do's and Don'ts

**Do** — set every headline in Barlow 900 uppercase with ≥ −0.01em tracking; alternate near-black and acid-yellow surfaces freely; colour headlines in the surface accent; keep mono for metadata only; use the three-column cover lockup; mute with opacity rather than grey; use 2px rules on stat tops, chart baselines and dividers; use em-dash bullets in the surface accent; pad tight so type runs near the edge; keep statement and chapter slides sparse.

**Don't** — lowercase a headline; use 700 or 800 at display scale; add a third colour; round any corner; add shadows or gradients; set chrome in Barlow; set headlines or body in mono.

## Fonts

**Barlow is a static family, not variable** — Google serves four separate files, all four of which this system uses (400 body, 500 lead, 700 h3, 900 display). All four are now hosted, so every weight resolves correctly. Without the 700, `h3` would fall through to 900 and the sub-header hierarchy would collapse.

IBM Plex Mono at weight 500 was hosted for `signal` and is reused.

The CJK fallback (Noto Sans SC) is named but not hosted.

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. Both families are OFL-licensed.

## Notes on the port

Four departures. The second would have produced a blank deck.

1. **The fluid scale was resolved to fixed pixels.** Every size is a raw `vw`/`vh` value resolving against the browser viewport rather than the frame. Each value above is the source's own evaluated at 1920×1080 — `display` 12vw → 230px, `pad-x` 5vw → 96px, and so on.
2. **The animation system was removed.** The source sets `[data-anim] { opacity: 0 }` and reveals only via `.slide.is-active` — the **sixth** template in this folder with that trap. Carried across verbatim, every animated element would render invisible.
3. **The navigation layer is gone.** The inline keyboard handler and nav dots are dropped; the twelve slides become twelve frames.
4. **Component class names are prefixed `st-`** to avoid collisions with the other themes in this folder.

**A stacking rule was added.** The cover's image area is `position:absolute; inset:0`, so this port adds `.st > * { position: relative; z-index: 1 }` to keep the display type and lockup above it — the same fix `signal` ships natively and `mat` needed.

**Both surfaces are genuinely co-equal.** The source says to alternate them freely and that the dark/yellow rhythm *is* the pacing. Set each frame's `background` to match its class, or the canvas paints black behind a yellow slide.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/studio` — `design.md`, `template.html`, `template.json`.
