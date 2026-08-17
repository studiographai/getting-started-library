---
entity_type: skill
entity_id: grayscale-landing
created_at: '2026-08-14T22:25:10.118Z'
updated_at: '2026-08-17T01:44:41.357Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - landing-page
  - template
  - editorial
  - photography
  - brand
name: Grayscale Landing
description: >-
  A moody, editorial one-page brand story — a full-bleed duotone photo masthead,
  alternating image/text showcase rows, and a single gold accent against black
  and white. Use for brand storytelling, studios, and products that want to feel
  considered rather than loud.
applies_to:
  - landing-page
  - artboard
  - marketing
  - website
license: MIT
loading: on-demand
source: >-
  github.com/StartBootstrap/startbootstrap-grayscale (MIT License, Start
  Bootstrap LLC)
status: draft
---
# Grayscale Landing

A moody, editorial brand page built on the composition of **Start Bootstrap's Grayscale** theme — a full-bleed duotone photo masthead, alternating image/text showcase rows, and exactly one accent color against an otherwise black-and-white palette.

## When to use

Brand storytelling, studios, architecture/design firms, premium products — anything that wants to feel considered and photography-led rather than loud or cluttered. The single-accent-color discipline is the point: resist adding a second one.

Avoid it if you don't have (or won't commission) real photography — the duotone masthead and showcase rows are built around imagery, and CSS-gradient placeholders only carry the template so far.

## Palette

| Role | Value | Notes |
|---|---|---|
| ink | #141414 | near-black, footer, overlays |
| paper | #FFFFFF | light section backgrounds |
| accent | #C9A227 | the one permitted color — rule, CTA, kicker |
| muted | #6B6459 | secondary copy |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| hero-title | Source Serif 4, weight 600 | 52px | masthead headline |
| h2 | Source Serif 4, weight 600 | 30px | section heading |
| body | DM Sans | 11pt / 1.6 | paragraphs |
| kicker | DM Sans, weight 600 | 13px, uppercase, 0.14em | small labels |

## Sections

Transparent-over-photo nav → full-bleed duotone masthead (dark overlay, centered serif headline, subcopy, gold-outline CTA button) → white "About" section (centered serif paragraph, gold rule) → "Services" icon row (4-up, black icons) → alternating image/text "Showcase" rows (image placeholder left/right, text opposite) → black CTA band with gold text → black footer.

## Building it in Studiograph

A landing page is an **app** entry, not a fixed-size board. Create one app entry with a single frame whose geometry is `{width: "fill", height: "fill"}`, so the frame takes the viewport it is opened in and the page reflows like a real site. That matters more here than on the other two templates: this design is built on a full-bleed masthead, and full-bleed is meaningless inside a fixed-width board.

Put the stylesheet in the bundle's **shared head** and set the frame `background` to `#FFFFFF`.

The sizes in the Typography table are *upper* bounds — each is a `clamp()`, so 52px is the masthead headline's desktop ceiling, not a constant.

Two structural ideas carry the whole design. The nav is pulled *inside* the masthead rather than sitting above it, so the page opens on unbroken imagery. And the showcase rows alternate direction with a `direction:rtl` flip rather than by reordering markup, so every row is written identically.

### The stylesheet

```html
<style>
/* ---- reset ---- */
*{box-sizing:border-box;margin:0;padding:0;}
html,body{width:100%;min-height:100%;}

/* ---- tokens: two neutrals, one accent, two families ---- */
:root{
  --gs-ink:#141414; --gs-paper:#FFFFFF;
  --gs-gold:#C9A227; --gs-muted:#6B6459;
  --gs-serif:'Source Serif 4',Georgia,serif;
  --gs-sans:'DM Sans',system-ui,sans-serif;
}

/* ---- page root ---- */
.gs{width:100%;min-height:100%;background:var(--gs-paper);color:var(--gs-ink);
  font-family:var(--gs-sans);overflow-x:hidden;}

/* ---- nav: transparent, white, stacked above the masthead ---- */
.gs-nav{display:flex;flex-wrap:wrap;gap:14px;justify-content:space-between;align-items:center;
  padding:20px clamp(20px,5vw,80px);position:relative;z-index:2;}
.gs-logo{font-family:var(--gs-serif);font-weight:600;font-size:18px;
  letter-spacing:0.06em;color:#fff;}
.gs-links{display:flex;flex-wrap:wrap;gap:12px 28px;justify-content:center;}
.gs-links a{color:#fff;opacity:0.85;font-size:14px;text-decoration:none;}

/* ---- masthead: pulls itself up under the nav ---- */
.gs-masthead{position:relative;min-height:clamp(420px,55vw,620px);
  margin-top:-76px;padding-top:76px;
  display:flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,#3a3a3a,#0a0a0a);color:#fff;text-align:center;}
.gs-masthead-overlay{position:absolute;inset:0;background:rgba(0,0,0,0.25);}
.gs-masthead-inner{position:relative;z-index:1;max-width:640px;padding:0 clamp(24px,6vw,40px);}
.gs-masthead-inner h1{font-family:var(--gs-serif);font-weight:600;
  font-size:clamp(28px,6vw,52px);margin-bottom:18px;}
.gs-masthead-inner p{font-size:clamp(14px,2.2vw,17px);opacity:0.85;margin-bottom:32px;}

/* ---- the accent: kicker, rule, outline button — nothing else ---- */
.gs-kicker{display:block;font-size:13px;font-weight:600;text-transform:uppercase;
  letter-spacing:0.16em;color:var(--gs-gold);margin-bottom:14px;}
.gs-rule{width:60px;height:2px;background:var(--gs-gold);margin:36px auto 0;}
.gs-cta{display:inline-block;border:1px solid var(--gs-gold);color:var(--gs-gold);
  padding:14px 32px;font-size:14px;letter-spacing:0.06em;text-decoration:none;}
.gs-cta.outline{color:#fff;border-color:#fff;}

/* ---- about: a single italic serif statement ---- */
.gs-about{text-align:center;
  padding:clamp(56px,10vw,96px) clamp(24px,10vw,200px) clamp(40px,8vw,64px);}
.gs-about-text{font-family:var(--gs-serif);font-size:clamp(17px,3vw,24px);
  line-height:1.5;font-style:italic;}

/* ---- services: 4-up glyph row ---- */
.gs-services{padding:0 clamp(20px,6vw,80px) clamp(56px,10vw,96px);}
.gs-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;text-align:center;}
.gs-icon{font-size:22px;margin-bottom:12px;}
.gs-service h3{font-family:var(--gs-serif);font-size:18px;font-weight:600;}

/* ---- showcase: alternating image/text rows via direction flip ---- */
.gs-showcase{padding:0 clamp(20px,6vw,80px) clamp(56px,10vw,96px);}
.gs-row{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,5vw,48px);
  align-items:center;margin-bottom:clamp(40px,8vw,64px);}
.gs-row.reverse{direction:rtl;}
.gs-row.reverse > *{direction:ltr;}
.gs-row-image{height:clamp(220px,32vw,320px);border-radius:2px;}
.gs-row-text h2{font-family:var(--gs-serif);font-weight:600;
  font-size:clamp(22px,4vw,28px);margin:8px 0 12px;}
.gs-row-text p{font-size:15px;line-height:1.6;color:var(--gs-muted);max-width:420px;}

/* ---- closing bands ---- */
.gs-cta-band{background:var(--gs-ink);color:#fff;text-align:center;
  padding:clamp(48px,9vw,72px) clamp(20px,6vw,80px);}
.gs-cta-band h2{font-family:var(--gs-serif);font-weight:600;
  font-size:clamp(22px,4vw,30px);margin-bottom:28px;}
.gs-footer{background:var(--gs-ink);color:#fff;text-align:center;
  padding:32px;font-size:13px;opacity:0.6;}

/* ---- breakpoints ---- */
@media (max-width:800px){
  .gs-row{grid-template-columns:1fr;}
  .gs-row.reverse{direction:ltr;}
  .gs-row-image{order:-1;}
}
@media (max-width:700px){
  .gs-grid-4{grid-template-columns:repeat(2,1fr);}
}
</style>
```

### How it reflows

**`clamp()` carries everything continuous.** Horizontal gutters are `clamp(20px,6vw,80px)` on the services and showcase sections; the about section is deliberately tighter at `clamp(24px,10vw,200px)`, which squeezes the single statement paragraph into a narrow column on desktop and releases it to near-full width on a phone. Vertical rhythm is `clamp(56px,10vw,96px)`. Type is fluid throughout: the masthead headline `clamp(28px,6vw,52px)`, the about statement `clamp(17px,3vw,24px)`, section headings `clamp(22px,4vw,28px)`.

Two heights are also fluid rather than fixed. The masthead is `min-height:clamp(420px,55vw,620px)` — cinematic on desktop without eating a whole phone screen. Showcase images are `height:clamp(220px,32vw,320px)`, so they stay proportionate to the text beside them as the row narrows.

**Media queries handle the two discrete changes:**

| Breakpoint | What changes |
|---|---|
| **≤ 800px** | Showcase rows collapse from `1fr 1fr` to a single column. The `direction:rtl` flip on `.gs-row.reverse` is reset to `ltr`, and `.gs-row-image` gets `order:-1` — together these force the image above the text in *every* row, alternating or not. Without the reset, reversed rows would stack text-then-image while normal rows stacked image-then-text, and the page would lose its rhythm exactly where it needs it most. |
| **≤ 700px** | Services grid steps 4-up → 2-up. |

Note what does *not* have a breakpoint. The services row stops at 2-up and stays there down to 375px — four short one-word labels under small glyphs still read fine side by side, and dropping to one column would stretch the section to five screens of nearly empty space. The nav never gets a breakpoint either; `flex-wrap:wrap` on both `.gs-nav` and `.gs-links` lets it break to a second line on its own. `.gs` carries `overflow-x:hidden` so nothing can produce a sideways scrollbar.

### Example — the full-bleed masthead

```html
<div class="gs">
  <nav class="gs-nav">
    <div class="gs-logo">STUDIO NOIR</div>
    <div class="gs-links">
      <a>About</a><a>Services</a><a>Work</a><a>Contact</a>
    </div>
  </nav>

  <section class="gs-masthead">
    <div class="gs-masthead-overlay"></div>
    <div class="gs-masthead-inner">
      <span class="gs-kicker">Est. 2015</span>
      <h1>Design With Intention</h1>
      <p>A studio built around one idea: fewer, better decisions.</p>
      <a class="gs-cta">View Our Work</a>
    </div>
  </section>
</div>
```

**The nav-over-photo trick is the one piece of this template to understand before editing it.** The nav is an ordinary block in document flow; the masthead then pulls itself up underneath it with `margin-top:-76px` and restores the lost space with `padding-top:76px`. The nav sits on top via `position:relative; z-index:2`. Net effect: the imagery runs to the very top of the page, and the nav floats on it, without any absolute positioning or a sticky bar.

That 76px is the nav's own rendered height. If you change the nav's padding or logo size, change both numbers together — they must stay equal, or the masthead's content will sit off-centre.

The nav's links and logo are **white with no dark background of their own**. They are only legible because the masthead behind them is dark. Swap in a light photograph and the nav disappears; that is what `.gs-masthead-overlay` — a flat `rgba(0,0,0,0.25)` scrim across the whole masthead — is there to prevent. Keep it.

To use a real photograph, replace the masthead's `background` gradient with `background:url(...) center/cover;`. The overlay and the `z-index:1` on `.gs-masthead-inner` keep the text readable over it.

### Example — an alternating image/text row

```html
<section class="gs-showcase">
  <div class="gs-row">
    <div class="gs-row-image" style="background:linear-gradient(135deg,#2b2b2b,#0a0a0a);"></div>
    <div class="gs-row-text">
      <span class="gs-kicker">Case Study</span>
      <h2>Harbor &amp; Co.</h2>
      <p>A full identity and packaging system for an independent roastery.</p>
    </div>
  </div>

  <div class="gs-row reverse">
    <div class="gs-row-image" style="background:linear-gradient(135deg,#3a3a3a,#141414);"></div>
    <div class="gs-row-text">
      <span class="gs-kicker">Case Study</span>
      <h2>Northline Studio</h2>
      <p>A quiet, editorial site for an architecture practice.</p>
    </div>
  </div>
</section>
```

Both rows have **identical markup** — image first, text second. The only difference is the `reverse` class, which applies `direction:rtl` to the grid so the columns lay out right-to-left, then restores `direction:ltr` on the children so the text inside reads normally. This is why you never reorder the markup to alternate: add `reverse` to every other row and stop thinking about it.

`.gs-row-text p` caps at 420px. In a half-width column on a wide screen that measure is what keeps the paragraph from stretching into an unreadable single line.

Swap each `.gs-row-image` inline gradient for `background:url(...) center/cover;` to use real photography — the `clamp()` height and 2px radius stay as they are.

### Example — the contact band and footer

```html
<section class="gs-cta-band">
  <h2>Let’s build something considered.</h2>
  <a class="gs-cta outline">Get in Touch</a>
</section>

<footer class="gs-footer">
  <p>© 2026 Studio Noir</p>
</footer>
```

The CTA button uses the same `.gs-cta` outline shape as the masthead, but `.outline` swaps gold for white. That is the rule for the accent on this page: gold on light surfaces, white on the black bands. Gold-on-black would be legible but would put the accent on the same footing as the headline, and the accent is meant to be quieter than that.

The band and footer share `--gs-ink`, so they read as one closing block with the footer's `opacity:0.6` doing all the separation. No divider rule needed.

### Example — the about statement and services row

```html
<section class="gs-about">
  <p class="gs-about-text">We are a small studio that believes restraint is a design decision, not a limitation. Every project starts with the question of what to remove, not what to add.</p>
  <div class="gs-rule"></div>
</section>

<section class="gs-services">
  <div class="gs-grid-4">
    <div class="gs-service"><div class="gs-icon">■</div><h3>Brand</h3></div>
    <div class="gs-service"><div class="gs-icon">▲</div><h3>Web</h3></div>
    <div class="gs-service"><div class="gs-icon">●</div><h3>Editorial</h3></div>
    <div class="gs-service"><div class="gs-icon">◆</div><h3>Strategy</h3></div>
  </div>
</section>
```

The about section is one italic serif paragraph and a 60px gold rule — no heading, no kicker. After a full-bleed masthead the page needs a breath, and a section head here would be one element too many.

The services row is glyphs and one-word labels, with no descriptions. It is a list of capabilities, not a sales pitch; the showcase rows below it do the selling. Note the icons here are the only black glyphs on the page — they are *not* gold, which keeps the accent scarce enough to still register when it appears on the rule and the buttons.

## Do's and Don'ts

**Do** — keep the accent to exactly three places: the kicker, the 60px rule, and the outline button; keep `margin-top` and `padding-top` on `.gs-masthead` equal to the nav's real height; always keep `.gs-masthead-overlay`, since the white nav has no background of its own and depends entirely on a dark field behind it; alternate showcase rows with the `reverse` class rather than reordering markup; reset `direction` and set `order:-1` on the image whenever the rows collapse to one column, so the image always leads; set the showcase image height with `clamp()` so it stays proportionate to the text beside it; cap the row paragraph at 420px; commission real photography — this template is a frame for images.

**Don't** — introduce a second accent colour; use gold on the black bands (use `.outline` white instead); put gold on body text or as a fill; give the masthead a fixed `height` rather than `min-height:clamp(...)`; change the nav's padding without changing the masthead's negative offset to match; let the showcase rows stay two-column below 800px — a half-width paragraph at phone width is four words per line; force the services row down to one column, which stretches a compact capability list into dead space; add shadows, or round beyond the 2px on image blocks.

## Fonts

Two families, split by job: serif leads, sans supports.

| Family | Weights | Role |
|---|---|---|
| **Source Serif 4** | variable | logo, masthead headline, about statement (italic), section headings, service labels — everything in `--gs-serif` |
| **DM Sans** | variable | body copy, nav links, kickers, buttons, footer |

Declared as tokens with plain fallback stacks:

```css
:root{
  --gs-serif:'Source Serif 4',Georgia,serif;
  --gs-sans:'DM Sans',system-ui,sans-serif;
}
```

Both families must be uploaded to the workspace and declared with `@font-face` in the shared head to render — see the `using-google-fonts` skill for the pattern. The about statement is set in *italic* serif, so make sure the face you upload actually carries an italic (or a variable axis that produces one); a synthesised oblique on a transitional serif reads as a slanted roman, and that paragraph is the page's one moment of warmth. Without the upload the page falls back to Georgia and the system sans, which holds the layout but loses the editorial voice entirely. Do not paste font URLs from another workspace — asset paths are workspace-specific, they will not resolve here, and the content security policy makes the failure silent rather than loud.

## See it rendered

Open [[grayscale-landing-app]] — **Grayscale Landing (Responsive App)**, the companion **app** entry in this folder's `examples` — for the live page with every section filled in. Drag the window narrower to watch it reflow. The photo blocks are CSS-gradient placeholders; duplicate it and swap in real photography, copy, and your own accent colour.

## Source & license

Composition adapted from [Start Bootstrap's Grayscale theme](https://github.com/StartBootstrap/startbootstrap-grayscale), MIT-licensed (Start Bootstrap LLC). License verified directly against the repository's `LICENSE` file on 2026-08-14. The duotone-masthead, single-accent discipline is the source's signature; the palette, type, and exact HTML/CSS here are an original adaptation for Studiograph.
