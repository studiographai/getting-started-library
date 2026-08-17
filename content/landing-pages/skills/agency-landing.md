---
entity_type: skill
entity_id: agency-landing
created_at: '2026-08-14T22:24:50.447Z'
updated_at: '2026-08-17T01:44:15.634Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - landing-page
  - template
  - agency
  - startup
  - marketing
name: Agency Landing
description: >-
  A confident, colorful one-page agency/startup site — full-height navy hero, a
  services grid, a portfolio showcase, and a bold call-to-action band. Use for
  agencies, studios, and B2B startups that want to look established and
  full-service.
applies_to:
  - landing-page
  - artboard
  - marketing
  - website
license: MIT
loading: on-demand
source: >-
  github.com/StartBootstrap/startbootstrap-agency (MIT License, Start Bootstrap
  LLC)
status: draft
---
# Agency Landing

A confident one-page agency site built on the composition of **Start Bootstrap's Agency** theme — a full-height hero, a services grid, a portfolio showcase, and a bold call-to-action band, all in a navy-and-amber palette.

## When to use

Agencies, consultancies, design/dev studios, B2B startups selling a service rather than a self-serve product — anything that needs to look established, full-service, and ready to take on a serious engagement. The portfolio section assumes you have real project work to show.

Avoid it for a self-serve SaaS product (use New Age or a simpler product page instead) or a single-person portfolio (use Freelancer, which is built for exactly that scale).

## Palette

| Role | Value | Notes |
|---|---|---|
| navy | #0B1F3A | hero, footer, dark bands |
| paper | #FFFFFF | light section backgrounds |
| amber | #F2A93B | primary CTA, accents |
| ink | #1A1A1A | body text on light sections |
| muted | #6B7280 | secondary copy |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| nav-logo | Outfit ExtraBold | 20px | wordmark |
| hero-title | Outfit ExtraBold | 56px | hero headline |
| h2 | Outfit ExtraBold | 32px | section heading |
| body | DM Sans | 11pt / 1.6 | paragraphs |
| card-title | Outfit ExtraBold | 18px | service/portfolio card title |

## Sections

Sticky nav (logo + links + CTA) → full-height navy hero (headline, subcopy, amber button, scroll cue) → white "Services" section (4-up icon cards) → navy-tinted "Portfolio" section (3-up project tiles with hover overlay) → amber CTA band → navy footer (social row + copyright).

## Building it in Studiograph

A landing page is an **app** entry, not a fixed-size board. Create one app entry with a single frame whose geometry is `{width: "fill", height: "fill"}` — the frame then adopts the viewport it is opened in and the page reflows the way a real site does. A board with a hard 1440px width would letterbox on a laptop and force a horizontal scrollbar on a phone; `fill` avoids both.

Put the stylesheet in the bundle's **shared head** so it applies to the frame, and set the frame's `background` to `#FFFFFF` so the canvas behind the page matches the paper sections.

The sizes in the Typography table above are the *upper* bounds. Every one of them is authored as a `clamp()` in the stylesheet, so 56px is what the hero headline reaches on a wide desktop, not what it always is.

### The stylesheet

```html
<style>
/* ---- reset ---- */
*{box-sizing:border-box;margin:0;padding:0;}
html,body{width:100%;min-height:100%;}

/* ---- tokens ---- */
:root{
  --ag-navy:#0B1F3A; --ag-paper:#FFFFFF; --ag-amber:#F2A93B;
  --ag-ink:#1A1A1A; --ag-muted:#6B7280;
  --ag-sans:'DM Sans',system-ui,sans-serif;
  --ag-display:'Outfit',sans-serif;
}

/* ---- page root: fills the frame, never scrolls sideways ---- */
.ag{width:100%;min-height:100%;background:var(--ag-paper);
  font-family:var(--ag-sans);color:var(--ag-ink);overflow-x:hidden;}

/* ---- nav ---- */
.ag-nav{display:flex;align-items:center;justify-content:space-between;
  flex-wrap:wrap;gap:16px;padding:20px clamp(20px,5vw,80px);background:var(--ag-navy);}
.ag-logo{font-family:var(--ag-display);font-weight:800;font-size:20px;color:#fff;}
.ag-nav-links{display:flex;flex-wrap:wrap;gap:14px 32px;justify-content:center;}
.ag-nav-links a{color:#fff;opacity:0.8;font-size:14px;text-decoration:none;}
.ag-nav-cta{background:var(--ag-amber);color:var(--ag-navy);padding:10px 22px;
  border-radius:4px;font-weight:600;font-size:14px;text-decoration:none;white-space:nowrap;}

/* ---- hero: fluid height, fluid type, centred column ---- */
.ag-hero{background:var(--ag-navy);color:#fff;min-height:clamp(420px,55vw,640px);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  text-align:center;position:relative;padding:clamp(48px,10vw,80px) clamp(20px,6vw,80px);}
.ag-hero-inner{max-width:760px;}
.ag-hero-title{font-family:var(--ag-display);font-weight:800;
  font-size:clamp(28px,6vw,56px);line-height:1.1;margin-bottom:24px;}
.ag-hero-sub{font-size:clamp(15px,2.4vw,19px);line-height:1.5;opacity:0.85;margin-bottom:36px;}
.ag-scroll-cue{position:absolute;bottom:24px;font-size:22px;opacity:0.6;}

/* ---- the one button shape, in two colourways ---- */
.ag-cta{display:inline-block;background:var(--ag-amber);color:var(--ag-navy);
  padding:16px 36px;border-radius:4px;font-weight:700;font-size:15px;text-decoration:none;}
.ag-cta.dark{background:var(--ag-navy);color:#fff;}

/* ---- section shell + heading pair ---- */
.ag-services,.ag-portfolio{padding:clamp(48px,10vw,96px) clamp(20px,6vw,80px);}
.ag-section-head{text-align:center;margin-bottom:clamp(32px,6vw,56px);}
.ag-section-head.light{color:#fff;}
.ag-section-head h2{font-family:var(--ag-display);font-weight:800;font-size:clamp(22px,4vw,32px);}
.ag-kicker{display:block;font-size:13px;font-weight:700;text-transform:uppercase;
  letter-spacing:0.14em;color:var(--ag-amber);margin-bottom:10px;}

/* ---- services: 4-up icon cards ---- */
.ag-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;}
.ag-card{text-align:center;padding:8px;}
.ag-icon{font-size:28px;color:var(--ag-amber);margin-bottom:16px;}
.ag-card h3{font-family:var(--ag-display);font-weight:800;font-size:18px;margin-bottom:10px;}
.ag-card p{font-size:14px;line-height:1.55;color:var(--ag-muted);}

/* ---- portfolio: 3-up tiles on a lifted navy ---- */
.ag-portfolio{background:#0E2A4D;}
.ag-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.ag-tile{position:relative;height:220px;border-radius:8px;overflow:hidden;}
.ag-tile-overlay{position:absolute;inset:0;display:flex;align-items:flex-end;padding:24px;
  background:linear-gradient(to top,rgba(0,0,0,0.55),transparent 60%);}
.ag-tile-overlay span{color:#fff;font-family:var(--ag-display);font-weight:700;font-size:18px;}

/* ---- closing bands ---- */
.ag-cta-band{background:var(--ag-amber);text-align:center;
  padding:clamp(40px,8vw,72px) clamp(20px,6vw,80px);}
.ag-cta-band h2{font-family:var(--ag-display);font-weight:800;
  font-size:clamp(22px,4vw,32px);color:var(--ag-navy);margin-bottom:28px;}
.ag-footer{background:var(--ag-navy);color:#fff;text-align:center;
  padding:clamp(24px,5vw,40px) clamp(20px,6vw,80px);}
.ag-social{font-size:20px;letter-spacing:14px;margin-bottom:16px;opacity:0.7;}
.ag-footer p{font-size:13px;opacity:0.6;}

/* ---- breakpoints ---- */
@media (max-width:900px){
  .ag-grid-4{grid-template-columns:repeat(2,1fr);}
}
@media (max-width:700px){
  .ag-nav{justify-content:center;text-align:center;}
  .ag-grid-3{grid-template-columns:1fr;}
  .ag-tile{height:200px;}
}
@media (max-width:520px){
  .ag-grid-4{grid-template-columns:1fr;}
}
</style>
```

### How it reflows

Two mechanisms, doing different jobs.

**`clamp()` handles everything continuous.** Section padding is `clamp(48px,10vw,96px)` vertical and `clamp(20px,6vw,80px)` horizontal, so the gutter slides from 80px on a wide desktop down to a 20px floor on a phone without a single media query. The hero headline is `clamp(28px,6vw,56px)`, subcopy `clamp(15px,2.4vw,19px)`, section headings `clamp(22px,4vw,32px)`. The hero's own height is `min-height:clamp(420px,55vw,640px)` — tall and cinematic on desktop, but never so tall on a phone that the services section is pushed out of reach. Nothing here is a fixed page width, which is why the same frame is legible at 1440, 768 and 375px.

**Media queries handle the discrete steps** — the moments where a column count has to change, which `clamp()` cannot express:

| Breakpoint | What changes |
|---|---|
| **≤ 900px** | Services grid steps 4-up → 2-up. Four icon cards at tablet width leave roughly 150px per card; two is the last readable count. |
| **≤ 700px** | The nav centres itself (`justify-content:center; text-align:center`) instead of splitting logo-left / CTA-right. Portfolio tiles step 3-up → 1-up — project tiles are the hero imagery of the page and are not worth halving. Tile height drops 220px → 200px. |
| **≤ 520px** | Services grid steps 2-up → 1-up. |

Two structural guards make the above safe. `.ag` carries `overflow-x:hidden`, so nothing can produce a sideways scrollbar. `.ag-nav` and `.ag-nav-links` both carry `flex-wrap:wrap`, so the link row breaks onto a second line before it ever overflows — the nav degrades on its own between breakpoints rather than only at them.

### Example — nav and hero

```html
<div class="ag">
  <nav class="ag-nav">
    <div class="ag-logo">Agency</div>
    <div class="ag-nav-links">
      <a>About</a><a>Services</a><a>Portfolio</a><a>Contact</a>
    </div>
    <a class="ag-nav-cta">Get in Touch</a>
  </nav>

  <section class="ag-hero">
    <div class="ag-hero-inner">
      <h1 class="ag-hero-title">We Build Brands That Move Markets</h1>
      <p class="ag-hero-sub">A full-service digital agency helping ambitious companies design, build, and grow.</p>
      <a class="ag-cta">Start a Project</a>
    </div>
    <div class="ag-scroll-cue">↓</div>
  </section>
</div>
```

The nav and the hero share the same navy, so they read as one continuous block with no seam — the amber nav button and the amber hero button are the only two things that break out of it. `.ag-hero-inner` caps the text column at 760px so the headline keeps a sane measure no matter how wide the viewport gets, while the hero band itself stays full-bleed.

### Example — the services grid

```html
<section class="ag-services">
  <div class="ag-section-head">
    <span class="ag-kicker">What we do</span>
    <h2>Services built to scale</h2>
  </div>
  <div class="ag-grid-4">
    <div class="ag-card">
      <div class="ag-icon">◆</div>
      <h3>Strategy</h3>
      <p>Positioning and roadmaps grounded in real research, not guesses.</p>
    </div>
    <div class="ag-card">
      <div class="ag-icon">✦</div>
      <h3>Design</h3>
      <p>Interfaces and identities that hold up at scale.</p>
    </div>
    <div class="ag-card">
      <div class="ag-icon">◈</div>
      <h3>Development</h3>
      <p>Production-grade builds, shipped in weekly increments.</p>
    </div>
    <div class="ag-card">
      <div class="ag-icon">▲</div>
      <h3>Growth</h3>
      <p>Measurement and iteration once the product is live.</p>
    </div>
  </div>
</section>
```

The kicker-plus-h2 pair is the section-head signature and every section uses it. Add `.light` to `.ag-section-head` when the section sits on navy. The icons here are glyphs rather than an icon font — no external asset to load, and they inherit the amber automatically.

### Example — the portfolio tiles

```html
<section class="ag-portfolio">
  <div class="ag-section-head light">
    <span class="ag-kicker">Selected work</span>
    <h2>Recent projects</h2>
  </div>
  <div class="ag-grid-3">
    <div class="ag-tile" style="background:linear-gradient(135deg,#1F3A5F,#0B1F3A);">
      <div class="ag-tile-overlay"><span>Fintech Rebrand</span></div>
    </div>
    <div class="ag-tile" style="background:linear-gradient(135deg,#F2A93B,#C97F1F);">
      <div class="ag-tile-overlay"><span>Retail App Launch</span></div>
    </div>
    <div class="ag-tile" style="background:linear-gradient(135deg,#2F6F4E,#123822);">
      <div class="ag-tile-overlay"><span>Healthcare Platform</span></div>
    </div>
  </div>
</section>
```

The portfolio band sits on `#0E2A4D` — one step lighter than the navy of the nav, hero and footer. That small lift is what separates the middle of the page from its bookends without introducing a new colour.

Each tile's background is a per-tile inline gradient, which is exactly where a real project image goes: swap the `style` for `background:url(...) center/cover;` and everything else keeps working. The overlay is a dark-from-the-bottom gradient rather than a flat scrim, so the caption stays legible over a photograph of unknown brightness while the top of the image stays clean.

### Example — the closing bands

```html
<section class="ag-cta-band">
  <h2>Ready to start a project?</h2>
  <a class="ag-cta dark">Let’s Talk</a>
</section>

<footer class="ag-footer">
  <div class="ag-social">● ● ● ●</div>
  <p>© 2026 Agency. All rights reserved.</p>
</footer>
```

The CTA band inverts the page: amber becomes the field and navy becomes the button, via `.ag-cta.dark`. It is the only full-amber surface on the page, which is what makes it read as the destination.

## Do's and Don'ts

**Do** — alternate the surfaces in the order navy → white → lifted navy → amber → navy, so a short page still has rhythm; open every section with a kicker-and-h2 pair; keep the amber CTA to one per band; author every section padding and headline size as a `clamp()` so the page scales continuously instead of jumping at breakpoints; add a column-count media query for every multi-column grid — a `repeat(4,1fr)` with no step-down is unreadable below 900px; keep `overflow-x:hidden` on `.ag` and `flex-wrap:wrap` on the nav; fill all four service cards and all three portfolio tiles.

**Don't** — set a fixed page width or fixed frame geometry, which defeats the whole `fill` arrangement; use amber for body copy or for any fill other than the CTA band; put two amber buttons in the same band; give the hero a fixed `height` instead of `min-height` — long headlines will clip; round beyond 4px on buttons or 8px on tiles; introduce a third accent colour; drop the tile overlay gradient once real photography goes in, or captions will disappear against a light image.

## Fonts

Two families.

| Family | Weight | Role |
|---|---|---|
| **Outfit** | 800 (ExtraBold) | wordmark, hero headline, section headings, card titles — everything set in `--ag-display` |
| **DM Sans** | variable | body copy, nav links, kickers, captions |

They are declared as tokens with plain fallback stacks:

```css
:root{
  --ag-sans:'DM Sans',system-ui,sans-serif;
  --ag-display:'Outfit',sans-serif;
}
```

Both families must be uploaded to the workspace and declared with `@font-face` in the shared head to actually render — see the `using-google-fonts` skill for that pattern. Without it the page silently falls back to the stack shown above, which is legible but loses the heavy geometric voice Outfit gives the headlines. Do not paste font URLs from another workspace: asset paths are workspace-specific, they will not resolve here, and the content security policy makes the failure silent rather than loud.

## See it rendered

Open [[agency-landing-app]] — **Agency Landing (Responsive App)**, the companion **app** entry in this folder's `examples` — for the live page with every section filled in. Drag the window narrower to watch it reflow. Duplicate it and swap in real copy, images, and your own brand colors.

## Source & license

Composition adapted from [Start Bootstrap's Agency theme](https://github.com/StartBootstrap/startbootstrap-agency), MIT-licensed (Start Bootstrap LLC). License verified directly against the repository's `LICENSE` file on 2026-08-14. The section flow (hero → services → portfolio → CTA → contact) is the source's; the palette, type, and exact HTML/CSS here are an original adaptation built for Studiograph (no Bootstrap CSS/JS is loaded at runtime — Studiograph frames can't fetch external stylesheets, so the grid is reproduced directly).
