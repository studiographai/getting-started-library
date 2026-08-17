---
entity_type: skill
entity_id: bright-sans
created_at: '2026-08-14T18:39:52.351Z'
updated_at: '2026-08-15T00:31:38.486Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - light
  - product
  - design-system
name: Bright Sans
description: >-
  Friendly product deck theme — white canvas, one geometric sans, a rationed
  four-colour accent system, and soft flat cards with hairline borders. Use when
  a deck should feel like a clean product page: feature launches, product
  updates, roadmap or onboarding decks, or any presentation that wants to read
  bright, calm, and approachable.
applies_to:
  - deck
  - slides
  - presentation
  - artifact-canvas
  - theme
loading: on-demand
status: draft
source: github.com/1weiho/open-slide @ dad4c24 — apps/demo/themes/bright-sans.md
---
# Bright Sans

A friendly product-update deck theme: bright white canvas, generous breathing room, one calm geometric sans across the whole deck, and four accent colours rationed carefully across the slides.

## When to use

Reach for Bright Sans when the deck should feel like a well-made product page — feature launches, product updates, roadmaps, onboarding, or anything customer-facing that wants warmth without decoration. If a slide could sit above the fold of a clean product site, it is on theme.

It is the light counterpart to `aurora`. Aurora reads engineered and late-night; Bright Sans reads open and daylit. Do not mix them in one deck, and do not use either for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides` for those.

## Palette

Four accents. Blue leads. The other three appear **once each**, and never together on the same headline.

| Role | Value | Notes |
|---|---|---|
| `bg` | `#ffffff` | white canvas |
| `surface` | `#f7f9fc` | soft inset card |
| `text` | `#202124` | near-black ink |
| `accent` | `#1a73e8` | primary blue, default highlight |
| `accent2` | `#ea4335` | red — emphasis or warnings |
| `accent3` | `#fbbc04` | yellow — callouts |
| `accent4` | `#34a853` | green — confirmations |
| `muted` | `#5f6368` | secondary copy, captions |
| `hairline` | `#e8eaed` | dividers, card borders |

Yellow takes dark ink (`#202124`); the other three take white.

## Typography

- **Display:** `'Inter Tight', 'Inter', -apple-system, system-ui, sans-serif` — weight 600.
- **Body:** `'Inter', -apple-system, system-ui, sans-serif` — 400, with 500 for emphasis.

| Element | Size | Detail |
|---|---|---|
| Hero title | 132px | line-height 1.05, letter-spacing −0.02em, weight 600 |
| Page heading | 56px | weight 600 |
| Body | 32px | line-height 1.5 |
| Eyebrow | 16px | weight 600, letter-spacing 0.04em, **sentence case — not uppercase** |
| Footer | 18px | regular |

## Layout

- **Frame size:** 1920×1080.
- **Padding:** 120px horizontal, 100px vertical.
- **Alignment:** left, with generous white space. Body copy capped at `max-width: 1180px`.
- **Cards:** 24px radius, 36px padding, a 1px `hairline` border, and **no drop shadow**.

## Motion

Philosophy: subtle. A single `bs-fadeUp` on the hero block and on each card. The footer never animates.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, with everything below in the bundle's `shared.head` so all slides inherit it.

### `shared.head`

```html
<style>
:root{
  --bs-bg:#ffffff; --bs-surface:#f7f9fc; --bs-text:#202124;
  --bs-accent:#1a73e8; --bs-accent2:#ea4335; --bs-accent3:#fbbc04; --bs-accent4:#34a853;
  --bs-muted:#5f6368; --bs-hairline:#e8eaed;
  --bs-display:'Inter Tight','Inter',-apple-system,system-ui,sans-serif;
  --bs-sans:'Inter',-apple-system,system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0;}
.bs{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--bs-bg);color:var(--bs-text);font-family:var(--bs-sans);
  padding:100px 120px;}
.bs.center{display:flex;flex-direction:column;justify-content:center;gap:36px;}
.bs.stack{display:flex;flex-direction:column;gap:44px;}

/* type */
.bs-title{font-family:var(--bs-display);font-size:132px;font-weight:600;
  line-height:1.05;letter-spacing:-0.02em;}
.bs-heading{font-family:var(--bs-display);font-size:56px;font-weight:600;line-height:1.15;}
.bs-body{font-size:32px;line-height:1.5;color:var(--bs-muted);max-width:1180px;}
.bs-body strong{font-weight:500;color:var(--bs-text);}

/* eyebrow — solid pill, sentence case */
.bs-eyebrow{display:inline-flex;align-items:center;align-self:flex-start;
  padding:8px 18px;border-radius:999px;background:var(--bs-accent);color:#ffffff;
  font-size:16px;font-weight:600;letter-spacing:0.04em;}
.bs-eyebrow.red{background:var(--bs-accent2);}
.bs-eyebrow.green{background:var(--bs-accent4);}
.bs-eyebrow.yellow{background:var(--bs-accent3);color:var(--bs-text);}

/* card — flat, hairline only */
.bs-card{background:var(--bs-surface);border:1px solid var(--bs-hairline);
  border-radius:24px;padding:36px;}
.bs-card.plain{background:var(--bs-bg);}
.bs-rule{height:1px;background:var(--bs-hairline);}

/* footer — dot + label left, counter right */
.bs-footer{position:absolute;left:120px;right:120px;bottom:60px;
  display:flex;justify-content:space-between;align-items:center;
  font-size:18px;color:var(--bs-muted);}
.bs-footer .mark{display:inline-flex;align-items:center;gap:12px;}
.bs-footer .dot{width:10px;height:10px;border-radius:50%;background:var(--bs-accent);}

@keyframes bs-fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
.bs-fade{animation:bs-fadeUp .5s ease-out both;}
.bs-fade:nth-child(2){animation-delay:.05s;}
.bs-fade:nth-child(3){animation-delay:.10s;}
.bs-fade:nth-child(4){animation-delay:.15s;}
</style>
```

### Components

**Eyebrow** — blue by default; add `red`, `yellow`, or `green` for the rationed accents:

```html
<span class="bs-eyebrow bs-fade">Spring update · 2026</span>
<span class="bs-eyebrow green">Now available</span>
```

**Title:**

```html
<h1 class="bs-title bs-fade">Built for the moments that matter.</h1>
```

**Footer** — the original used a `useSlidePageNumber()` hook. Studiograph frames are standalone HTML with no such hook, so write the counter literally on each frame and update it if the deck length changes:

```html
<div class="bs-footer">
  <span class="mark"><span class="dot"></span>Spring product update</span>
  <span>3 / 12</span>
</div>
```

**Card:**

```html
<div class="bs-card bs-fade">
  <h3 class="bs-heading" style="font-size:36px;margin-bottom:14px;">Shared drafts</h3>
  <p class="bs-body" style="font-size:26px;">Everyone sees the same version, so review stops happening in three places at once.</p>
</div>
```

### Cover frame

```html
<div class="bs center">
  <span class="bs-eyebrow bs-fade">Spring update · 2026</span>
  <h1 class="bs-title bs-fade">Built for the moments that matter.</h1>
  <p class="bs-body bs-fade">Four small features that make the next eight months of work feel a little easier.</p>
  <div class="bs-footer">
    <span class="mark"><span class="dot"></span>Spring product update</span>
    <span>1 / 12</span>
  </div>
</div>
```

### Interior frame

```html
<div class="bs stack">
  <span class="bs-eyebrow green">Now available</span>
  <h2 class="bs-heading">What shipped this quarter</h2>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px;">
    <div class="bs-card bs-fade"><h3 class="bs-heading" style="font-size:34px;margin-bottom:12px;">Shared drafts</h3><p class="bs-body" style="font-size:24px;">One version, visible to everyone on the file.</p></div>
    <div class="bs-card bs-fade"><h3 class="bs-heading" style="font-size:34px;margin-bottom:12px;">Faster search</h3><p class="bs-body" style="font-size:24px;">Results as you type, across every workspace.</p></div>
    <div class="bs-card bs-fade"><h3 class="bs-heading" style="font-size:34px;margin-bottom:12px;">Quiet hours</h3><p class="bs-body" style="font-size:24px;">Notifications hold until you are back.</p></div>
  </div>
  <div class="bs-footer">
    <span class="mark"><span class="dot"></span>Spring product update</span>
    <span>4 / 12</span>
  </div>
</div>
```

## Aesthetic

Bright, open, and rationed. One geometric sans carries the whole deck; colour arrives in small, deliberate doses. Cards are soft-cornered but flat — the only edge is a hairline.

**Avoid:** gradients, glow, dark mode, drop shadows, decorative emoji unrelated to a feature, photography that breaks the white canvas, and more than one accent colour on a single headline.

## Notes on the port

Three deliberate departures from the source, and nothing else changed — every size, colour, radius, and letter-spacing is carried over unmodified:

1. **React → HTML/CSS.** The source defined `Title`, `Footer`, and `Eyebrow` as TSX components for `@open-slide/core`. Studiograph presentation frames are plain HTML with shared CSS, so they became classes. The eyebrow's `tone` prop became the `red` / `yellow` / `green` modifier classes, including its ink-colour rule for yellow.
2. **Page numbers are manual.** The footer relied on `useSlidePageNumber()` for `current / total`. There is no equivalent in a standalone frame, so counters are written literally per slide.
3. **Frame size assumed.** The source never states one; 1920×1080 follows from the 120/100 padding and Studiograph's deck default.

## Fonts

Inter and Inter Tight are named in the source, but no `@font-face` rule or import is supplied — so as written, the deck renders in `-apple-system` / `system-ui`. That is close in feel and perfectly presentable; Inter Tight's tighter display cut is the main thing lost.

Do **not** try to fix this with a Google Fonts `@import`. Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks stylesheets from external hosts — verified by test render on 2026-08-14, where the request failed with `errorText: "csp"` and the webfont silently fell back to the system stack.

To get the real faces, self-host them: upload the `.woff2` files to the workspace asset library, then add an `@font-face` block to the top of `shared.head`:

```css
@font-face{font-family:'Inter Tight';font-weight:600;font-display:swap;
  src:url('/api/assets/<asset-id>/InterTight-SemiBold.woff2') format('woff2');}
```

The `--bs-display` / `--bs-sans` stacks already name these families first, so nothing else needs changing. Inter is open-licensed (SIL OFL), so self-hosting is permitted.
