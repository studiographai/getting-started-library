---
entity_type: skill
entity_id: replit
created_at: '2026-08-14T18:40:55.387Z'
updated_at: '2026-08-15T00:31:46.257Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - light
  - developer
  - design-system
name: Replit
description: >-
  Light warm-cream developer deck theme inspired by the Replit IDE — dot-grid
  halftone texture, off-canvas orange glow, IDE window chrome for code, Space
  Grotesk headlines and IBM Plex Mono labels. Use for developer-facing decks,
  platform and tooling pitches, engineering talks, or any presentation that
  should feel like a bright, terminal-adjacent product page.
applies_to:
  - deck
  - slides
  - presentation
  - artifact-canvas
  - theme
loading: on-demand
status: draft
source: github.com/1weiho/open-slide @ dad4c24 — apps/demo/themes/replit.md
---
# Replit

A light, warm-cream developer aesthetic drawn from the Replit IDE: a soft cream canvas, near-black warm ink, and a single orange-red accent carrying all the energy. Space Grotesk headlines give editorial weight; IBM Plex Mono grounds every label in the terminal tradition.

## When to use

Reach for Replit when the deck is developer-facing but should stay bright — platform and tooling pitches, engineering talks, DX or API decks, launch presentations for technical products. The IDE window chrome makes it especially strong for anything that shows code or terminal output.

It sits between the other two themes in this folder: `aurora` is dark and restrained, `bright-sans` is neutral and product-friendly, Replit is warm and opinionated. Do not mix them in one deck.

## Palette

| Role | Value | Notes |
|---|---|---|
| `bg` | `#FAF6F1` | warm-cream page background |
| `text` | `#2F3034` | near-black warm ink |
| `accent` | `#FF3C00` | Replit orange-red — callouts, eyebrows, key numbers |
| `surface` | `#FFFFFF` | card / panel / code-window background |
| `panel` | `#F3EDE5` | window title bar, recessed surface |
| `border` | `rgba(47,48,52,0.10)` | hairline border on light surfaces |
| `muted` | `#6E6F77` | secondary copy, labels, footer |
| `subtle` | `rgba(47,48,52,0.55)` | body secondary copy on cream |
| `onAccent` | `#FAF6F1` | text and marks placed on orange fills |
| `glow` | `rgba(255,60,0,0.16)` | orange radial glow overlay |

One accent, used often. Orange is the theme's entire colour story — headlines, eyebrows, key numbers, the logo mark.

## Typography

- **Display:** `"Space Grotesk", system-ui, -apple-system, sans-serif` — 700–800 for headlines.
- **Body:** `"IBM Plex Sans", system-ui, -apple-system, sans-serif` — 400–500.
- **Mono:** `"IBM Plex Mono", ui-monospace, Menlo, monospace` — 400–500, for eyebrows, labels, and code.

| Element | Size | Detail |
|---|---|---|
| Hero title | 164px | weight 700, letter-spacing −0.04em, line-height 0.96 |
| Section heading | 80px | weight 700, letter-spacing −0.03em, line-height 1.06 |
| Body | 34–40px | |
| Eyebrow / label | 22px | mono, uppercase, letter-spacing 0.16em |
| Footer | 22px | mono, letter-spacing 0.04em |

## Layout

- **Frame size:** 1920×1080.
- **Padding:** 120–140px from the canvas edges.
- **Alignment:** left-aligned single column for hero pages; a two-column grid (`1fr 1fr`, 72px gap) for feature pages.
- **Cards:** `22px 28px` padding, 10px radius. Never exceed 10px.

## Motion

Philosophy: subtle — elements fade and drift up on entry. Stagger delays run `0.05s`, `0.12s`, `0.22s`, `0.32s`, `0.40s`, and **never exceed 0.5s** on any element.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, with everything below in the bundle's `shared.head` so all slides inherit it.

### `shared.head`

```html
<style>
/* Fonts must be self-hosted from the asset library — see "Fonts" below.
   An external Google Fonts import is blocked by the frame's CSP. */
:root{
  --rp-bg:#FAF6F1; --rp-text:#2F3034; --rp-accent:#FF3C00;
  --rp-surface:#FFFFFF; --rp-panel:#F3EDE5; --rp-border:rgba(47,48,52,0.10);
  --rp-muted:#6E6F77; --rp-subtle:rgba(47,48,52,0.55); --rp-on-accent:#FAF6F1;
  --rp-display:"Space Grotesk",system-ui,-apple-system,sans-serif;
  --rp-sans:"IBM Plex Sans",system-ui,-apple-system,sans-serif;
  --rp-mono:"IBM Plex Mono",ui-monospace,Menlo,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.rp{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--rp-bg);color:var(--rp-text);font-family:var(--rp-sans);}
.rp-pad{position:absolute;inset:0;padding:120px 140px;display:flex;flex-direction:column;}
.rp-pad.between{justify-content:space-between;}
.rp-pad.center{justify-content:center;gap:40px;}

/* type */
.rp-title{font-family:var(--rp-display);font-size:164px;font-weight:700;
  line-height:0.96;letter-spacing:-0.04em;}
.rp-heading{font-family:var(--rp-display);font-size:80px;font-weight:700;
  line-height:1.06;letter-spacing:-0.03em;}
.rp-body{font-size:40px;line-height:1.5;color:var(--rp-muted);max-width:1080px;}
.rp-body.sm{font-size:34px;}
.rp-accent{color:var(--rp-accent);}
.rp-eyebrow{font-family:var(--rp-mono);font-size:22px;letter-spacing:0.16em;
  text-transform:uppercase;color:var(--rp-accent);margin-bottom:24px;}
.rp-eyebrow.muted{color:var(--rp-subtle);}

/* dot-grid halftone — signature texture */
.rp-dots{position:absolute;inset:0;pointer-events:none;
  background-image:radial-gradient(circle,rgba(47,48,52,0.05) 1.5px,transparent 1.5px);
  background-size:52px 52px;}

/* off-canvas orange glow */
.rp-glow{position:absolute;width:680px;height:680px;pointer-events:none;
  background:radial-gradient(circle,rgba(255,60,0,0.16),transparent 65%);}
.rp-glow.tr{top:-120px;right:-120px;}
.rp-glow.tl{top:-160px;left:-160px;}
.rp-glow.br{bottom:-140px;right:-140px;}

/* logo mark */
.rp-logo{width:36px;height:36px;background:var(--rp-accent);border-radius:7px;flex-shrink:0;}

/* card */
.rp-card{background:var(--rp-surface);border:1px solid var(--rp-border);
  border-radius:10px;padding:22px 28px;}

/* IDE window chrome */
.rp-window{background:var(--rp-surface);border:1px solid var(--rp-border);
  border-radius:10px;overflow:hidden;}
.rp-window-bar{display:flex;align-items:center;gap:8px;padding:14px 20px;
  border-bottom:1px solid var(--rp-border);background:var(--rp-panel);}
.rp-window-bar i{width:12px;height:12px;border-radius:50%;display:block;}
.rp-window-bar .r{background:#FF5F57;} .rp-window-bar .y{background:#FEBC2E;}
.rp-window-bar .g{background:#28C840;}
.rp-window-bar span{margin-left:12px;font-family:var(--rp-mono);font-size:20px;
  color:var(--rp-subtle);letter-spacing:0.02em;}
.rp-window-body{padding:24px 28px;font-family:var(--rp-mono);font-size:24px;line-height:1.6;}
.tok-kw{color:#FF3C00;} .tok-id{color:#2F3034;} .tok-pun{color:#A8A096;}
.tok-str{color:#1A7F37;} .tok-com{color:#9A958C;}

/* footer */
.rp-footer{display:flex;justify-content:space-between;align-items:center;
  font-family:var(--rp-mono);font-size:22px;color:var(--rp-muted);letter-spacing:0.04em;}
.rp-footer .mark{display:flex;align-items:center;gap:12px;}
.rp-footer .sq{width:10px;height:10px;background:var(--rp-accent);border-radius:3px;}

@keyframes rp-fadeUp{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);}}
@keyframes rp-fadeIn{from{opacity:0;}to{opacity:1;}}
.rp-fadeUp{opacity:0;animation:rp-fadeUp .8s cubic-bezier(.2,.7,.2,1) forwards;}
.rp-fadeIn{opacity:0;animation:rp-fadeIn 1s ease forwards;}
</style>
```

### Components

**Dot grid + glow** — the two texture layers. Place both first, before the padded content:

```html
<div class="rp-dots"></div>
<div class="rp-glow tr"></div>
```

**Logo mark and eyebrow:**

```html
<div class="rp-logo"></div>
<div class="rp-eyebrow">Platform · 2026</div>
```

**IDE window** — the theme's most distinctive element; use it to frame code or terminal output:

```html
<div class="rp-window">
  <div class="rp-window-bar">
    <i class="r"></i><i class="y"></i><i class="g"></i><span>index.tsx</span>
  </div>
  <div class="rp-window-body">
    <span class="tok-kw">const</span> <span class="tok-id">app</span> <span class="tok-pun">=</span> <span class="tok-id">createApp</span><span class="tok-pun">(</span><span class="tok-str">'hello'</span><span class="tok-pun">)</span>
  </div>
</div>
```

**Footer** — the source is explicit that page numbers come from `useSlidePageNumber()` and must never be hardcoded props. Studiograph frames have no such hook, so the counter is written literally per slide and must be updated if the deck length changes:

```html
<div class="rp-footer">
  <div class="mark"><div class="sq"></div><span>REPLIT</span></div>
  <span>3 / 12</span>
</div>
```

### Cover frame

```html
<div class="rp">
  <div class="rp-dots"></div>
  <div class="rp-glow tr"></div>
  <div class="rp-pad between">
    <div class="rp-fadeIn" style="animation-delay:.05s;display:flex;align-items:center;gap:16px;">
      <div class="rp-logo"></div>
      <span style="font-family:var(--rp-mono);font-size:22px;color:var(--rp-muted);letter-spacing:0.04em;">Replit</span>
    </div>
    <div>
      <h1 class="rp-title rp-fadeUp" style="animation-delay:.1s;">Build anything.<br><span class="rp-accent">Ship anywhere.</span></h1>
      <p class="rp-body rp-fadeUp" style="animation-delay:.22s;margin-top:52px;">The complete platform for building, running, and deploying software — right from your browser.</p>
    </div>
    <div class="rp-footer">
      <div class="mark"><div class="sq"></div><span>REPLIT</span></div>
      <span>1 / 12</span>
    </div>
  </div>
</div>
```

### Two-column feature frame

```html
<div class="rp">
  <div class="rp-dots"></div>
  <div class="rp-glow br"></div>
  <div class="rp-pad between">
    <div>
      <div class="rp-eyebrow rp-fadeIn" style="animation-delay:.05s;">Developer experience</div>
      <h2 class="rp-heading rp-fadeUp" style="animation-delay:.12s;">From prompt to production</h2>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;">
      <p class="rp-body sm rp-fadeUp" style="animation-delay:.22s;">No setup, no local toolchain. The environment is the same one your teammates and your CI already run.</p>
      <div class="rp-window rp-fadeUp" style="animation-delay:.32s;">
        <div class="rp-window-bar"><i class="r"></i><i class="y"></i><i class="g"></i><span>deploy.sh</span></div>
        <div class="rp-window-body">
          <span class="tok-com"># one command</span><br>
          <span class="tok-id">replit</span> <span class="tok-kw">deploy</span> <span class="tok-pun">--</span><span class="tok-id">prod</span>
        </div>
      </div>
    </div>
    <div class="rp-footer">
      <div class="mark"><div class="sq"></div><span>REPLIT</span></div>
      <span>4 / 12</span>
    </div>
  </div>
</div>
```

## Aesthetic

Bright and airy, but unmistakably a developer tool. White cards with hairline borders sit on the cream canvas, framed by dot-grid halftone texture and off-canvas orange radial glows — depth without clutter.

**Avoid:** shadows, heavy gradients, corner radii beyond 10px, decorative emoji, and any colour outside the palette. Multi-colour syntax highlighting inside a code window is the single exception.

## Fonts

**Space Grotesk is load-bearing.** Without it, headlines fall back to `system-ui` and the theme loses the editorial weight it is built on — the cream canvas and orange accent alone do not carry it.

The source supplies a Google Fonts import URL. **It does not work in a Studiograph frame.** Frames run under a Content Security Policy of `style-src 'unsafe-inline'`, which permits inline CSS but blocks stylesheets from any external host. Verified by test render on 2026-08-14: the request fails with `errorText: "csp"`, the console logs a CSP violation, and Space Grotesk renders pixel-identical to a `system-ui` control. The failure is silent in the output — the deck simply looks wrong.

To get the real faces, self-host them:

1. Upload the `.woff2` files to the workspace asset library (`create_asset_upload` → `finalize_asset_upload`, or `upload_asset_inline`).
2. Add an `@font-face` block to the top of `shared.head`, pointing at the asset URLs:

```css
@font-face{font-family:'Space Grotesk';font-weight:700;font-display:swap;
  src:url('/api/assets/<asset-id>/SpaceGrotesk-Bold.woff2') format('woff2');}
@font-face{font-family:'IBM Plex Mono';font-weight:400;font-display:swap;
  src:url('/api/assets/<asset-id>/IBMPlexMono-Regular.woff2') format('woff2');}
```

The `--rp-display` / `--rp-sans` / `--rp-mono` stacks already name these families first, so the variables need no change once the faces are registered.

Until that is done the deck still renders — cleanly, in system fonts — so this is a quality gate, not a blocker. Both source families are open-licensed (SIL OFL), so self-hosting is permitted.

## Notes on the port

Four deliberate departures from the source; every value otherwise carries over unchanged:

1. **React → HTML/CSS.** `DotGrid`, `OrangeGlow`, `WindowShell`, `Title`, `Footer`, `Eyebrow`, and `LogoMark` were TSX components for `@open-slide/core`. Studiograph frames are plain HTML with shared CSS, so they became classes. Component props became modifiers: `corner` → `.tr` / `.tl` / `.br` on the glow, `muted` → `.muted` on the eyebrow.
2. **Page numbers are manual.** The source explicitly forbids hardcoding them, requiring `useSlidePageNumber()`. There is no equivalent in a standalone frame, so counters are written literally per slide — this is the one place the port cannot honour the source's instruction, and it needs a pass whenever slides are added or removed.
3. **Fixed values where props were parametric.** `DotGrid` took an `opacity` prop (default 0.05) and `LogoMark` a `size` prop (default 36px, radius `size × 0.19`). Both are baked to their defaults; override inline if a slide needs a different value.
4. **Frame size assumed.** The source states the 1920×1080 canvas in its layout notes, which matches Studiograph's deck default, so nothing changed here — noted only for completeness.

5. **The Google Fonts import was dropped.** See "Fonts" below — it does not work here, and leaving it in produces a silent failure plus a console error on every slide.

The source also references a `slide-authoring` skill for baseline type-scale defaults, which does not exist in this workspace. Only the overrides it listed are captured here, so the table above is the complete scale rather than a diff.
