---
entity_type: skill
entity_id: aurora
created_at: '2026-08-14T18:30:03.313Z'
updated_at: '2026-08-15T00:31:24.267Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - dark
  - design-system
name: Aurora
description: >-
  Dark developer-doc deck theme — near-black canvas, a single violet glow,
  rounded card shells with hairline borders, and monospace metadata. Use when a
  deck should read like a polished documentation site at 2 a.m.: release notes,
  engineering updates, product/technical decks, or any presentation that wants a
  dark, restrained, developer-native feel.
applies_to:
  - deck
  - slides
  - presentation
  - artifact-canvas
  - theme
loading: on-demand
status: draft
source: github.com/1weiho/open-slide @ dad4c24 — apps/demo/themes/aurora.md
---
# Aurora

A dark developer-doc deck theme: near-black canvas, one violet light source, rounded card shells with hairline borders, monospace for anything that names a file, a path, or a number.

## When to use

Reach for Aurora when the deck should feel engineered rather than marketed — release notes, technical updates, product or platform decks, internal engineering reviews. If a page could pass for a screenshot of a well-made docs site late at night, it is on theme.

Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides` for those. Aurora is a self-contained theme and does not mix with the Schema deck chrome.

## Palette

| Role | Value | Notes |
|---|---|---|
| `bg` | `#0E0E0E` | near-black canvas |
| `surface` | `#161616` | card / pill background |
| `surfaceHi` | `#1F1F1F` | code blocks, hover states |
| `border` | `#2A2A2A` | hairline edge on every surface |
| `text` | `#F5F5F5` | primary copy |
| `muted` | `#8B8B8B` | secondary copy, paths, page numbers |
| `accent` | `#A78BFA` | violet — glows, dots, one mark per page |
| `accentSoft` | `rgba(167, 139, 250, 0.14)` | accent at low opacity (rings, tags) |

One accent mark per page. The violet is a light source, not a highlighter.

## Typography

- **Display / body:** `-apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', system-ui, sans-serif` — 600 for display, 400 for body, 500 for emphasis.
- **Mono:** `'SF Mono', 'JetBrains Mono', 'Menlo', monospace` — paths, file names, page numbers, eyebrow tags.

| Element | Size | Detail |
|---|---|---|
| Hero title | 116px | line-height 1.05, letter-spacing −0.02em, weight 600 |
| Page heading | 56px | weight 600 |
| Body | 26px | line-height 1.5 |
| Eyebrow / tag | 18px | mono, uppercase, letter-spacing 0.18em |
| Footer / counter | 22px | mono |
| Stat number | 96px | weight 600, letter-spacing −0.03em |

## Layout

- **Frame size:** 1920×1080.
- **Padding:** 120px horizontal, 100px vertical.
- **Alignment:** cover and closing are vertically centred; interior pages are left-aligned with content stacked top-down.
- **Surfaces:** 16px radius, 1px `border` outline, and an inset highlight `box-shadow: 0 0 0 1px rgba(255,255,255,0.03) inset`. No solid drop shadows.
- **Glow:** at most one large radial halo in `accent` per page, blurred 40px, opacity ≤ 0.2, placed off-centre so it never sits behind type.

## Motion

Philosophy: rich. `au-fadeUp` on the hero block and on each card; `au-glow` on the radial halo.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, with everything below in the bundle's `shared.head` so all slides inherit it.

### `shared.head`

```html
<style>
:root{
  --au-bg:#0E0E0E; --au-surface:#161616; --au-surface-hi:#1F1F1F;
  --au-border:#2A2A2A; --au-text:#F5F5F5; --au-muted:#8B8B8B;
  --au-accent:#A78BFA; --au-accent-soft:rgba(167,139,250,0.14);
  --au-sans:-apple-system,BlinkMacSystemFont,'Inter','SF Pro Display',system-ui,sans-serif;
  --au-mono:'SF Mono','JetBrains Mono','Menlo',monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.au{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--au-bg);color:var(--au-text);font-family:var(--au-sans);
  padding:100px 120px;}
.au.center{display:flex;flex-direction:column;justify-content:center;gap:32px;}
.au.stack{display:flex;flex-direction:column;gap:40px;}

/* type */
.au-title{font-size:116px;font-weight:600;line-height:1.05;letter-spacing:-0.02em;}
.au-heading{font-size:56px;font-weight:600;line-height:1.15;}
.au-body{font-size:26px;line-height:1.5;color:var(--au-muted);max-width:1180px;}
.au-body strong{font-weight:500;color:var(--au-text);}
.au-stat{font-size:96px;font-weight:600;letter-spacing:-0.03em;}
.au-mono{font-family:var(--au-mono);}

/* eyebrow pill with glowing dot */
.au-eyebrow{display:inline-flex;align-items:center;gap:12px;padding:10px 18px;
  border-radius:999px;border:1px solid var(--au-border);background:var(--au-surface);
  font-family:var(--au-mono);font-size:18px;letter-spacing:0.18em;
  text-transform:uppercase;color:var(--au-muted);align-self:flex-start;}
.au-eyebrow::before{content:'';width:8px;height:8px;border-radius:50%;
  background:var(--au-accent);box-shadow:0 0 12px var(--au-accent);}

/* card shell */
.au-card{background:var(--au-surface);border:1px solid var(--au-border);
  border-radius:16px;padding:40px;
  box-shadow:0 0 0 1px rgba(255,255,255,0.03) inset;}
.au-card.hi{background:var(--au-surface-hi);}
.au-tag{display:inline-block;padding:6px 14px;border-radius:999px;
  background:var(--au-accent-soft);color:var(--au-accent);
  font-family:var(--au-mono);font-size:18px;letter-spacing:0.18em;text-transform:uppercase;}

/* footer */
.au-footer{position:absolute;left:120px;right:120px;bottom:56px;
  display:flex;justify-content:space-between;align-items:center;
  font-family:var(--au-mono);font-size:22px;letter-spacing:0.04em;color:var(--au-muted);}
.au-footer .dim{opacity:0.4;}

/* glow — one per page, off-centre */
.au-glow{position:absolute;width:900px;height:900px;border-radius:50%;
  transform:translate(-50%,-50%);pointer-events:none;filter:blur(40px);opacity:0.2;
  background:radial-gradient(circle,var(--au-accent) 0%,rgba(167,139,250,0) 70%);
  animation:au-glow 6s ease-in-out infinite;}

@keyframes au-fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
@keyframes au-glow{0%,100%{opacity:0.55;}50%{opacity:0.9;}}
.au-fade{animation:au-fadeUp .6s ease both;}
.au-fade:nth-child(2){animation-delay:.06s;}
.au-fade:nth-child(3){animation-delay:.12s;}
.au-fade:nth-child(4){animation-delay:.18s;}
</style>
```

### Components

**Glow** — place before content, positioned off-centre:

```html
<div class="au-glow" style="left:78%;top:36%;"></div>
```

**Eyebrow** — the dot is drawn by CSS, so the element takes only its label:

```html
<div class="au-eyebrow au-fade">release notes · v3</div>
```

**Title:**

```html
<h1 class="au-title au-fade">Quiet, but built for the long run.</h1>
```

**Footer** — the original used a `useSlidePageNumber()` hook. Studiograph frames are standalone HTML with no such hook, so write the counter literally on each frame and update it if the deck length changes:

```html
<div class="au-footer">
  <span>/docs</span>
  <span>03 <span class="dim">/ 12</span></span>
</div>
```

**Card:**

```html
<div class="au-card au-fade">
  <span class="au-tag">shipped</span>
  <h3 class="au-heading" style="font-size:34px;margin:20px 0 12px;">Incremental sync</h3>
  <p class="au-body" style="font-size:22px;">Re-indexes only what changed, so large workspaces stay responsive.</p>
</div>
```

### Cover frame

```html
<div class="au center">
  <div class="au-glow" style="left:78%;top:36%;"></div>
  <div class="au-eyebrow au-fade">release notes · v3</div>
  <h1 class="au-title au-fade">Quiet, but built for the long run.</h1>
  <p class="au-body au-fade">Three changes that landed this quarter — none of them flashy, all of them load-bearing.</p>
  <div class="au-footer"><span>/docs</span><span>01 <span class="dim">/ 12</span></span></div>
</div>
```

### Interior frame

```html
<div class="au stack">
  <div class="au-glow" style="left:12%;top:88%;"></div>
  <div class="au-eyebrow">performance</div>
  <h2 class="au-heading">What got faster</h2>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px;">
    <div class="au-card au-fade"><div class="au-stat">2.4×</div><p class="au-body" style="font-size:22px;margin-top:12px;">median query time</p></div>
    <div class="au-card au-fade"><div class="au-stat">-38%</div><p class="au-body" style="font-size:22px;margin-top:12px;">cold start</p></div>
    <div class="au-card au-fade"><div class="au-stat">99.9%</div><p class="au-body" style="font-size:22px;margin-top:12px;">sync success</p></div>
  </div>
  <div class="au-footer"><span>/docs/performance</span><span>04 <span class="dim">/ 12</span></span></div>
</div>
```

## Aesthetic

Serious and late-night: generous bezels, rounded shells with hairline borders, one violet light warming the canvas. Sans for prose, mono for anything that names a file, a path, or a number.

**Avoid:** light backgrounds, multi-colour palettes, photography, decorative emoji, sharp 90° corners on cards, gradients beyond the single radial glow, and any shadow that isn't either the inset surface highlight or the soft halo.

## Notes on the port

Three things changed in moving this from its original framework into Studiograph, and they are the only deliberate departures from the source:

1. **React → HTML/CSS.** The source defined `Title`, `Footer`, and `Eyebrow` as TSX components for `@open-slide/core`. Studiograph presentation frames are plain HTML with shared CSS, so they became classes. Every value — sizes, colours, radii, letter-spacing, keyframes — is carried over unchanged.
2. **Page numbers are manual.** The footer relied on the `useSlidePageNumber()` hook for `current / total`. There is no equivalent in a standalone frame, so counters are written literally per slide.
3. **`Glow` was undefined in the source.** The example frame called `<Glow x="78%" y="36%" />` but the component was never specified. It is defined here from the layout rule it describes — a 900px radial halo in `accent`, blurred 40px, at ≤ 0.2 opacity, positioned off-centre — and wired to the `au-glow` keyframes.

Frame size was not stated in the source; 1920×1080 is assumed from the 120/100 padding and Studiograph's deck default.
