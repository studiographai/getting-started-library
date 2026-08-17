---
entity_type: skill
entity_id: sticker-pop
created_at: '2026-08-14T18:59:49.390Z'
updated_at: '2026-08-15T00:31:55.550Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - playful
  - pastel
  - design-system
name: Sticker Pop
description: >-
  Playful pastel deck theme — warm peach paper, hot-pink and grape accents,
  chunky display type, hard black outlines with drop-stamp offsets, and
  hand-placed tilted stickers. Use for internal culture decks, team offsites,
  playful product launches, workshop or class material — anything that should
  feel screen-printed rather than corporate.
applies_to:
  - deck
  - slides
  - presentation
  - artifact-canvas
  - theme
loading: on-demand
status: draft
source: github.com/1weiho/open-slide @ dad4c24 — apps/demo/themes/sticker-pop.md
---
# Sticker Pop

A sticker book glued to a peach risograph print. Soft warm paper, hot-pink and grape doing all the punctuation, hard black outlines and chunky drop-stamps instead of soft shadows, and type that wants to be friendly — rounded, big, slightly tipped.

## When to use

Reach for Sticker Pop when the deck should feel handmade and cheerful — internal culture decks, team offsites, workshop and class material, playful launches, anything for an audience that would rather not sit through another grid of grey cards. If the slide could be screen-printed onto a tote bag, it is on theme.

It is the loudest theme in this folder. Do not use it for client proposals in the studio's own visual system (`schema-slides`, `proposal-slides`), and do not mix it with `aurora`, `bright-sans`, or `replit`.

## Palette

| Role | Value | Notes |
|---|---|---|
| `bg` | `#fff2e8` | warm peach paper |
| `surface` | `#ffe6d3` | deeper peach for cards and badges |
| `text` | `#2d1b4e` | deep grape, primary copy |
| `accent` | `#ff4d8d` | hot pink — the show-stopper |
| `accent2` | `#6d4cff` | electric purple, secondary callouts |
| `accent3` | `#ffd24c` | sunny yellow, highlights and dots |
| `muted` | `#9a8aa8` | captions, faded marks |
| `ink` | `#2d1b4e` | hand-drawn outlines, same as text |

Yellow stickers take grape ink; pink and purple take peach ink.

## Typography

- **Display:** `'Outfit', 'Inter', -apple-system, system-ui, sans-serif` — weight 800.
- **Body:** `'Inter', system-ui, sans-serif` — weight 500.

| Element | Size | Detail |
|---|---|---|
| Hero title | 152px | line-height 0.98, letter-spacing −0.025em, weight 800 |
| Page heading | 64px | weight 800 |
| Body | 34px | line-height 1.45 |
| Eyebrow / sticker | 22px | weight 700, letter-spacing 0.06em, **sentence case** |

## Layout

- **Frame size:** 1920×1080.
- **Padding:** 110px horizontal, 90px vertical.
- **Alignment:** left, but stickers carry a small rotation (`-3deg` / `+2deg`) so they feel hand-placed.
- **Radii:** generous — 24px on cards, 999px on pills.
- The cover often wears one big sticker badge in the top-right corner.

**The drop-stamp is the signature.** Every sticker and card sits on a hard offset shadow — `4px 4px 0 0 #2d1b4e` — with a 2px ink outline. Never a soft or blurred shadow.

## Motion

Philosophy: rich. `sp-pop` on stickers as they appear, `sp-bob` on decorative dots, `sp-wiggle` sparingly on a single mark. The tilt is passed through a `--sp-tilt` variable so the pop animation preserves each sticker's rotation instead of flattening it.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, with everything below in the bundle's `shared.head`.

### `shared.head`

```html
<style>
@font-face{font-family:'Outfit';font-style:normal;font-weight:800;font-display:block;
  src:url('/api/assets/{{ASSET_ID}}/Outfit-ExtraBold.woff2') format('woff2');}
:root{
  --sp-bg:#fff2e8; --sp-surface:#ffe6d3; --sp-text:#2d1b4e; --sp-ink:#2d1b4e;
  --sp-accent:#ff4d8d; --sp-accent2:#6d4cff; --sp-accent3:#ffd24c; --sp-muted:#9a8aa8;
  --sp-display:'Outfit','Inter',-apple-system,system-ui,sans-serif;
  --sp-sans:'Inter',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0;}
.sp{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--sp-bg);color:var(--sp-text);font-family:var(--sp-sans);
  font-weight:500;padding:90px 110px;}
.sp.center{display:flex;flex-direction:column;justify-content:center;gap:40px;align-items:flex-start;}
.sp.stack{display:flex;flex-direction:column;gap:44px;}

/* type */
.sp-title{font-family:var(--sp-display);font-size:152px;font-weight:800;
  line-height:0.98;letter-spacing:-0.025em;}
.sp-heading{font-family:var(--sp-display);font-size:64px;font-weight:800;line-height:1.1;}
.sp-body{font-size:34px;line-height:1.45;color:var(--sp-text);max-width:1200px;}
.sp-body .dim{color:var(--sp-muted);}

/* sticker pill — outline + hard drop-stamp + tilt */
.sp-sticker{display:inline-block;padding:10px 20px;border-radius:999px;
  border:2px solid var(--sp-ink);box-shadow:4px 4px 0 0 var(--sp-ink);
  background:var(--sp-accent);color:var(--sp-bg);
  font-family:var(--sp-sans);font-size:22px;font-weight:700;letter-spacing:0.06em;
  --sp-tilt:-3deg;transform:rotate(var(--sp-tilt));}
.sp-sticker.purple{background:var(--sp-accent2);}
.sp-sticker.yellow{background:var(--sp-accent3);color:var(--sp-ink);}
.sp-sticker.tilt-r{--sp-tilt:2deg;}
.sp-sticker.tilt-l{--sp-tilt:-4deg;}
.sp-sticker.flat{--sp-tilt:0deg;}

/* big corner badge for the cover */
.sp-badge{position:absolute;top:80px;right:96px;width:210px;height:210px;border-radius:999px;
  border:3px solid var(--sp-ink);box-shadow:6px 6px 0 0 var(--sp-ink);
  background:var(--sp-accent3);color:var(--sp-ink);
  display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;
  font-family:var(--sp-display);font-weight:800;font-size:34px;line-height:1.05;
  --sp-tilt:-8deg;transform:rotate(var(--sp-tilt));}

/* card — outlined, stamped */
.sp-card{background:var(--sp-surface);border:2px solid var(--sp-ink);border-radius:24px;
  padding:34px;box-shadow:6px 6px 0 0 var(--sp-ink);}
.sp-card.pink{background:var(--sp-accent);color:var(--sp-bg);}
.sp-card.purple{background:var(--sp-accent2);color:var(--sp-bg);}
.sp-card.yellow{background:var(--sp-accent3);}

/* decorative dots */
.sp-dot{position:absolute;border-radius:50%;border:2px solid var(--sp-ink);}

/* footer — three dots + stamped page chip */
.sp-footer{position:absolute;left:110px;right:110px;bottom:60px;
  display:flex;justify-content:space-between;align-items:center;
  font-size:18px;font-weight:600;color:var(--sp-muted);}
.sp-footer .marks{display:inline-flex;align-items:center;gap:10px;}
.sp-footer .marks i{width:12px;height:12px;border-radius:50%;display:block;}
.sp-footer .marks .p{background:var(--sp-accent);}
.sp-footer .marks .v{background:var(--sp-accent2);}
.sp-footer .marks .y{background:var(--sp-accent3);}
.sp-footer .marks span{margin-left:8px;}
.sp-footer .chip{background:var(--sp-ink);color:var(--sp-bg);padding:6px 14px;
  border-radius:999px;font-variant-numeric:tabular-nums;}

@keyframes sp-pop{
  0%{transform:scale(0.92) rotate(var(--sp-tilt,0deg));opacity:0;}
  60%{transform:scale(1.04) rotate(var(--sp-tilt,0deg));opacity:1;}
  100%{transform:scale(1) rotate(var(--sp-tilt,0deg));}
}
@keyframes sp-wiggle{0%,100%{transform:rotate(-3deg);}50%{transform:rotate(3deg);}}
@keyframes sp-bob{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
.sp-pop{animation:sp-pop .5s ease-out both;}
.sp-pop.d1{animation-delay:.08s;} .sp-pop.d2{animation-delay:.16s;} .sp-pop.d3{animation-delay:.24s;}
.sp-bob{animation:sp-bob 2.4s ease-in-out infinite;}
.sp-wiggle{animation:sp-wiggle 3s ease-in-out infinite;}
</style>
```

### Components

**Sticker** — pink by default; add `purple` / `yellow` for tone and `tilt-r` / `tilt-l` / `flat` for angle:

```html
<span class="sp-sticker sp-pop">chapter one</span>
<span class="sp-sticker purple tilt-r sp-pop d1">new</span>
```

**Cover badge** — the big tilted corner stamp:

```html
<div class="sp-badge sp-pop">2026<br>edition</div>
```

**Decorative dot** — position it explicitly, and keep it clear of type:

```html
<div class="sp-dot sp-bob" style="width:64px;height:64px;background:var(--sp-accent3);left:1500px;top:760px;"></div>
```

**Footer** — the original used a `useSlidePageNumber()` hook. Studiograph frames are standalone HTML with no such hook, so the counter is written literally per slide and must be updated if the deck length changes:

```html
<div class="sp-footer">
  <span class="marks"><i class="p"></i><i class="v"></i><i class="y"></i><span>Sticker Pop</span></span>
  <span class="chip">3 / 12</span>
</div>
```

### Cover frame

```html
<div class="sp center">
  <div class="sp-badge sp-pop">2026<br>edition</div>
  <div class="sp-dot sp-bob" style="width:56px;height:56px;background:var(--sp-accent2);left:1480px;top:820px;"></div>
  <span class="sp-sticker sp-pop tilt-l">chapter one</span>
  <h1 class="sp-title sp-pop d1">Big things,<br>made tiny.</h1>
  <p class="sp-body sp-pop d2">A short, cheerful tour of the small ideas we have been having lately.</p>
  <div class="sp-footer">
    <span class="marks"><i class="p"></i><i class="v"></i><i class="y"></i><span>Sticker Pop</span></span>
    <span class="chip">1 / 12</span>
  </div>
</div>
```

### Interior frame

```html
<div class="sp stack">
  <span class="sp-sticker yellow tilt-r">three of them</span>
  <h2 class="sp-heading">What we shipped</h2>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;">
    <div class="sp-card sp-pop"><h3 class="sp-heading" style="font-size:38px;margin-bottom:12px;">Shared drafts</h3><p style="font-size:25px;line-height:1.45;">One version, visible to everyone.</p></div>
    <div class="sp-card pink sp-pop d1"><h3 class="sp-heading" style="font-size:38px;margin-bottom:12px;">Faster search</h3><p style="font-size:25px;line-height:1.45;">Results as you type.</p></div>
    <div class="sp-card purple sp-pop d2"><h3 class="sp-heading" style="font-size:38px;margin-bottom:12px;">Quiet hours</h3><p style="font-size:25px;line-height:1.45;">Notifications hold until you are back.</p></div>
  </div>
  <div class="sp-footer">
    <span class="marks"><i class="p"></i><i class="v"></i><i class="y"></i><span>Sticker Pop</span></span>
    <span class="chip">4 / 12</span>
  </div>
</div>
```

## Aesthetic

Warm paper, loud punctuation, hard edges. Outlines and drop-stamps do the work that shadows do elsewhere. Tilt is the personality — but only on stickers and badges, never on body copy or headings.

**Avoid:** gradients, glow, photography, glassmorphism, corporate four-grid card layouts, dark mode, and soft shadows of any kind.

## Fonts

Outfit ExtraBold is hosted in the workspace asset library and wired into the `@font-face` block above, so the display face renders correctly with no extra setup.

Body copy uses Inter, which is **not** hosted — it falls back to `-apple-system` / `system-ui`. That reads fine, since the theme's character lives in the display face. To make it exact, upload an Inter 500 `.woff2` and add a second `@font-face` rule.

Do not add a Google Fonts `@import`: Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets — the request fails and the font silently falls back.

## Notes on the port

Three deliberate departures from the source; every value otherwise carries over unchanged:

1. **React → HTML/CSS.** `Title`, `Footer`, and `Sticker` were TSX components for `@open-slide/core`. Studiograph frames are plain HTML with shared CSS, so they became classes. The sticker's `tone` prop became `purple` / `yellow` modifiers, and its numeric `tilt` prop became the `tilt-r` / `tilt-l` / `flat` classes, since arbitrary per-instance angles would need inline styles — set `--sp-tilt` inline if a specific angle is wanted.
2. **Page numbers are manual.** The footer relied on `useSlidePageNumber()`. There is no equivalent in a standalone frame, so counters are written literally per slide.
3. **The cover badge was described, not defined.** The layout notes say "the cover often wears one big sticker badge in the top-right corner", but no component was given. `.sp-badge` is built here from that description using the theme's existing tokens — outline, drop-stamp, tilt, yellow fill.

Frame size was not stated in the source; 1920×1080 follows from the 110/90 padding and Studiograph's deck default.
