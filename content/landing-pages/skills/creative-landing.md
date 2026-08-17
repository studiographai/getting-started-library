---
entity_type: skill
entity_id: creative-landing
created_at: '2026-08-14T22:25:20.549Z'
updated_at: '2026-08-17T01:44:47.680Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - landing-page
  - template
  - creative
  - portfolio
  - playful
name: Creative Landing
description: >-
  A bold, color-blocked one-page portfolio — skewed shapes behind the hero,
  color-tagged service cards, and a solid-color project grid. Use for design
  studios, creative freelancers, and brands that want to feel playful and
  visually loud.
applies_to:
  - landing-page
  - artboard
  - marketing
  - website
license: MIT
loading: on-demand
source: >-
  github.com/StartBootstrap/startbootstrap-creative (MIT License, Start
  Bootstrap LLC)
status: draft
---
# Creative Landing

A bold, color-blocked portfolio page built on the composition of **Start Bootstrap's Creative** theme — skewed shapes behind an oversized hero headline, color-tagged service cards, and a solid-color project grid standing in for photography.

## When to use

Design studios, creative freelancers, brand/marketing agencies — anything that wants to feel playful, visually loud, and unmistakably designed rather than corporate. The multi-color-block system is meant to be filled with a small, confident set of brand colors, not toned down to one.

Avoid it for content that needs to feel restrained or trustworthy in a conservative sense (finance, legal, healthcare) — use Grayscale or Agency instead.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #FFF8EE | warm cream canvas |
| ink | #141020 | body text, dark fourth work tile, CTA band, footer |
| violet | #7C5CFC | service/project color 1 |
| coral | #FF6B57 | service/project color 2 |
| mint | #2FBF8F | service/project color 3 |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| hero-title | Jost, weight 600 | 64px | hero headline |
| h2 | Jost, weight 600 | 34px | section heading |
| body | DM Sans | 11pt / 1.6 | paragraphs |
| tag | JetBrains Mono | 12px, uppercase | project category tag |

## Sections

Bold nav (color-block logo mark + links) → cream hero with skewed color shapes behind an oversized headline and CTA → 3-up color-blocked "Services" cards (violet/coral/mint, white text, icon+title+desc) → 4-up solid-color "Work" grid (color tile + mono category tag + project title, standing in for thumbnails) → bold color CTA band → cream footer with mono small print.

## Building it in Studiograph

Build this as an **app** entry, not a fixed-width board. Give the single frame `geometry: {width: "fill", height: "fill"}` so the page fills the viewport and reflows with it. A landing page pinned to 1440px is a screenshot of a website, not a website — and this template in particular depends on reflow, because its shape decorations are sized in `vw`.

Set the frame's `background` to `#FFF8EE` so the canvas behind the page matches the cream shell instead of flashing white past the last section.

The stylesheet below goes in the bundle's `shared.head`. The markup goes in the frame's content.

```html
<style>
/* ── reset + full-bleed root ───────────────────────────────── */
*{box-sizing:border-box;margin:0;padding:0;}
html,body{width:100%;min-height:100%;}

/* ── tokens ────────────────────────────────────────────────── */
:root{
  --cr-cream:#FFF8EE;
  --cr-violet:#7C5CFC;
  --cr-coral:#FF6B57;
  --cr-mint:#2FBF8F;
  --cr-ink:#141020;
  --cr-sans:'DM Sans',system-ui,sans-serif;
  --cr-display:'Jost',sans-serif;
  --cr-mono:'JetBrains Mono',monospace;
}

/* ── page shell ────────────────────────────────────────────── */
/* overflow-x:hidden is load-bearing — the hero shapes are
   positioned past the left and bottom edges and would otherwise
   create a horizontal scrollbar. */
.cr{width:100%;min-height:100%;background:var(--cr-cream);
  font-family:var(--cr-sans);color:var(--cr-ink);
  position:relative;overflow-x:hidden;}

/* ── nav ───────────────────────────────────────────────────── */
.cr-nav{display:flex;flex-wrap:wrap;align-items:center;
  justify-content:space-between;gap:14px;
  padding:20px clamp(20px,5vw,80px);position:relative;z-index:2;}
.cr-logo{display:flex;align-items:center;gap:10px;
  font-family:var(--cr-display);font-weight:600;font-size:20px;}
.cr-logo-block{width:16px;height:16px;background:var(--cr-violet);
  display:inline-block;border-radius:3px;}
.cr-nav-links{display:flex;flex-wrap:wrap;gap:12px 28px;justify-content:center;}
.cr-nav-links a{color:var(--cr-ink);opacity:0.75;font-size:14px;text-decoration:none;}
.cr-nav-cta{background:var(--cr-ink);color:#fff;padding:10px 22px;
  border-radius:100px;font-size:14px;text-decoration:none;
  font-weight:600;white-space:nowrap;}

/* ── hero + the skewed shapes ──────────────────────────────── */
.cr-hero{position:relative;text-align:center;
  padding:clamp(56px,10vw,100px) clamp(20px,6vw,80px) clamp(72px,12vw,120px);}
.cr-shape{position:absolute;border-radius:50%;opacity:0.85;}
.cr-shape-1{width:clamp(140px,24vw,340px);height:clamp(140px,24vw,340px);
  background:var(--cr-violet);top:-60px;left:-40px;transform:skewX(-8deg);}
.cr-shape-2{width:clamp(110px,18vw,260px);height:clamp(110px,18vw,260px);
  background:var(--cr-coral);bottom:-60px;right:20px;}
.cr-shape-3{width:clamp(80px,12vw,180px);height:clamp(80px,12vw,180px);
  background:var(--cr-mint);top:80px;right:100px;}
/* z-index:2 lifts the copy above the shapes; the shapes stay at auto */
.cr-hero-inner{position:relative;z-index:2;max-width:820px;margin:0 auto;}
.cr-hero-title{font-family:var(--cr-display);font-weight:600;
  font-size:clamp(30px,7vw,64px);line-height:1.08;margin-bottom:28px;}
.cr-underline{display:block;width:120px;height:8px;background:var(--cr-coral);
  margin:20px auto 0;border-radius:4px;}
.cr-hero-sub{font-size:clamp(15px,2.6vw,19px);line-height:1.5;opacity:0.8;
  margin:0 auto 36px;max-width:560px;}

/* ── buttons ───────────────────────────────────────────────── */
.cr-cta{display:inline-block;background:var(--cr-ink);color:#fff;
  padding:16px 36px;border-radius:100px;font-weight:700;
  font-size:15px;text-decoration:none;}
.cr-cta.light{background:#fff;color:var(--cr-ink);}

/* ── section scaffolding ───────────────────────────────────── */
.cr-services,.cr-work{padding:clamp(48px,10vw,96px) clamp(20px,6vw,80px);
  position:relative;z-index:2;}
.cr-section-head{text-align:center;margin-bottom:clamp(32px,6vw,56px);}
.cr-kicker{display:block;font-family:var(--cr-mono);font-size:12px;
  font-weight:500;text-transform:uppercase;letter-spacing:0.14em;
  color:var(--cr-coral);margin-bottom:10px;}
.cr-section-head h2{font-family:var(--cr-display);font-weight:600;
  font-size:clamp(22px,4.5vw,34px);}

/* ── colour-blocked service cards ──────────────────────────── */
.cr-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.cr-card{padding:32px 28px;border-radius:16px;color:#fff;}
.cr-card.violet{background:var(--cr-violet);}
.cr-card.coral{background:var(--cr-coral);}
.cr-card.mint{background:var(--cr-mint);}
.cr-card h3{font-family:var(--cr-display);font-weight:600;
  font-size:21px;margin-bottom:12px;}
.cr-card p{font-size:14.5px;line-height:1.55;opacity:0.92;}

/* ── work tiles + mono tags ────────────────────────────────── */
.cr-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
.cr-tile{height:200px;border-radius:12px;display:flex;
  align-items:flex-end;padding:20px;}
.cr-tag{font-family:var(--cr-mono);font-size:12px;color:#fff;
  background:rgba(0,0,0,0.25);padding:6px 12px;
  border-radius:100px;letter-spacing:0.04em;}

/* ── closing band + footer ─────────────────────────────────── */
.cr-cta-band{background:var(--cr-ink);text-align:center;
  padding:clamp(48px,9vw,80px) clamp(20px,6vw,80px);
  position:relative;z-index:2;}
.cr-cta-band h2{font-family:var(--cr-display);font-weight:600;
  font-size:clamp(22px,4.5vw,34px);color:#fff;margin-bottom:28px;}
.cr-footer{background:var(--cr-ink);text-align:center;
  padding:32px clamp(20px,6vw,80px) 48px;position:relative;z-index:2;}
.cr-footer p{font-family:var(--cr-mono);font-size:12px;
  color:rgba(255,255,255,0.55);letter-spacing:0.04em;}

/* ── breakpoints ───────────────────────────────────────────── */
@media (max-width:900px){
  .cr-grid-4{grid-template-columns:repeat(2,1fr);}
}
@media (max-width:700px){
  .cr-grid-3{grid-template-columns:1fr;}
  .cr-shape-2,.cr-shape-3{opacity:0.5;}
}
@media (max-width:520px){
  .cr-grid-4{grid-template-columns:1fr;}
}
</style>
```

### Responsive strategy

Almost all of the adaptation happens without a media query. Every horizontal pad is `clamp(20px, 5–6vw, 80px)`, every vertical rhythm is `clamp(48px, 10vw, 96px)`, and the three headline sizes are fluid — the hero runs `clamp(30px, 7vw, 64px)`, section headings `clamp(22px, 4.5vw, 34px)`. The decorative shapes are fluid too (`clamp(140px, 24vw, 340px)` and down), so they shrink with the page instead of swallowing a phone screen. The nav is `flex-wrap: wrap`, so its three groups rewrap rather than overflow, with no breakpoint needed.

Three breakpoints handle what `clamp()` cannot — grid column counts, which have to step in whole numbers:

| Breakpoint | What changes |
|---|---|
| **900px** | The 4-up work grid drops to 2 columns. Tiles below ~330px wide stop reading as compositions. |
| **700px** | The 3-up service cards stack to a single column, and the coral and mint hero shapes drop to `opacity: 0.5`. On a narrow page the shapes crowd the headline; dimming them keeps the composition without letting them compete with the type. |
| **520px** | The work grid drops again to a single column. |

Note the service cards stack a full column count earlier than the work tiles do — at 700px they go 3→1 with no 2-up stage. That is deliberate: the cards carry a paragraph of copy each, and a two-up of text cards at 700px produces a 40-character measure. The work tiles carry only a tag, so they survive being narrow.

### Example — the skewed-shape hero

The three shapes are absolutely positioned siblings *before* the copy, and the copy sits on `z-index: 2` above them. Keep that order — reversing it puts the violet blob over the headline.

```html
<div class="cr">
  <nav class="cr-nav">
    <div class="cr-logo"><span class="cr-logo-block"></span>Creative</div>
    <div class="cr-nav-links">
      <a>Work</a><a>Services</a><a>About</a><a>Contact</a>
    </div>
    <a class="cr-nav-cta">Say Hello</a>
  </nav>

  <section class="cr-hero">
    <div class="cr-shape cr-shape-1"></div>
    <div class="cr-shape cr-shape-2"></div>
    <div class="cr-shape cr-shape-3"></div>
    <div class="cr-hero-inner">
      <h1 class="cr-hero-title">
        We Make Ideas Impossible to Ignore
        <span class="cr-underline"></span>
      </h1>
      <p class="cr-hero-sub">
        A creative studio for brands who want to stand out, not blend in.
      </p>
      <a class="cr-cta">View Our Work</a>
    </div>
  </section>
</div>
```

### Example — the colour-blocked feature section

One card per brand colour, white text on all three. The classes carry the colour, so re-ordering the cards re-orders the palette.

```html
<section class="cr-services">
  <div class="cr-section-head">
    <span class="cr-kicker">Capabilities</span>
    <h2>What we bring to the table</h2>
  </div>
  <div class="cr-grid-3">
    <div class="cr-card violet">
      <h3>Brand Identity</h3>
      <p>Logos, systems, and visual languages built to last.</p>
    </div>
    <div class="cr-card coral">
      <h3>Campaigns</h3>
      <p>Concept-driven work that gets people talking.</p>
    </div>
    <div class="cr-card mint">
      <h3>Digital Design</h3>
      <p>Sites and products with personality baked in.</p>
    </div>
  </div>
</section>
```

### Example — the work grid and its mono tags

The tile colour is inline because it is content, not structure — swap `background` for a `background-image` and the tag still floats correctly at the bottom-left, because the tile is a flex box aligned to `flex-end`.

```html
<section class="cr-work">
  <div class="cr-section-head">
    <span class="cr-kicker">Selected work</span>
    <h2>Recent projects</h2>
  </div>
  <div class="cr-grid-4">
    <div class="cr-tile" style="background:#7C5CFC;"><span class="cr-tag">Branding</span></div>
    <div class="cr-tile" style="background:#FF6B57;"><span class="cr-tag">Campaign</span></div>
    <div class="cr-tile" style="background:#2FBF8F;"><span class="cr-tag">Web</span></div>
    <div class="cr-tile" style="background:#141020;"><span class="cr-tag">Identity</span></div>
  </div>
</section>
```

The fourth tile is ink rather than a fourth hue. Three colours plus the ink is the system; a fourth colour breaks it.

### Example — the closing band and footer

Both are ink, so they read as one dark block that ends the page. The tag rounding stops here — the footer's small print is mono and flat.

```html
<section class="cr-cta-band">
  <h2>Got a project in mind?</h2>
  <a class="cr-cta light">Let’s Make Something</a>
</section>
<footer class="cr-footer">
  <p>© 2026 CREATIVE STUDIO — ALL RIGHTS RESERVED</p>
</footer>
```

## Do's and Don'ts

**Do** — hold the palette to violet, coral, mint and ink, and use each once per row; put the mono face on every kicker, tag and piece of small print, and nowhere else; keep the coral underline under the hero headline as the page's one hand-drawn gesture; keep every pad on a `clamp()` so the page breathes at 1440px and survives at 375px; keep `overflow-x: hidden` on the shell, or the off-canvas hero shapes will add a horizontal scrollbar; set the frame background to the cream so nothing flashes white; let the shapes fall behind `z-index: 2` copy rather than reordering the markup.

**Don't** — add a fourth accent colour, or tint the cream; put Jost on body copy — it is a display face and loses legibility below ~18px; give the service cards a shadow or a border, the colour block *is* the edge; set the work tiles to a fixed pixel width, which breaks the grid reflow at 900px and 520px; ship a 4-up work grid without the 900px and 520px column steps, or the tiles compress to unreadable slivers on a phone; use pure white as the page ground — the warm cream is what keeps the loud colours from feeling like a template.

## Fonts

Three families, each with exactly one job.

| Family | Role |
|---|---|
| **Jost** | display — logo wordmark, hero headline, section headings, card titles |
| **DM Sans** | body — nav links, paragraphs, buttons |
| **JetBrains Mono** | chrome — the coral kicker, the project tags, the footer small print |

Declare them as token values with a real fallback stack:

```css
--cr-display:'Jost', system-ui, sans-serif;
--cr-sans:'DM Sans', system-ui, sans-serif;
--cr-mono:'JetBrains Mono', ui-monospace, monospace;
```

**Portability.** Naming a family is not the same as loading one. Each family must be uploaded to your workspace and declared with an `@font-face` rule pointing at that workspace's own asset — see the `using-google-fonts` skill for the pattern. Never copy an asset URL from another workspace: those identifiers do not resolve here, and because frames run under a strict content-security policy the failure is completely silent — the page simply renders in the fallback stack with no error anywhere. Jost's geometric width does a lot of the work in this template, so a silent fall back to `system-ui` reads noticeably flatter than the preview.

## See it rendered

Open [[creative-landing-app]] — **Creative Landing (Responsive App)**, the companion **app** entry in this folder's `examples` — for the live page with every section filled in. Drag the window narrower to watch it reflow. The project tiles are solid-color placeholders; duplicate it and swap in real thumbnails, copy, and your own brand colors.

## Source & license

Composition adapted from [Start Bootstrap's Creative theme](https://github.com/StartBootstrap/startbootstrap-creative), MIT-licensed (Start Bootstrap LLC). License verified directly against the repository's `LICENSE` file on 2026-08-14. The bold hero-plus-portfolio-grid structure is the source's; the palette, type, and exact HTML/CSS here are an original adaptation for Studiograph.
