---
entity_type: skill
entity_id: freelancer-landing
created_at: '2026-08-14T22:24:59.724Z'
updated_at: '2026-08-17T01:44:32.887Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - landing-page
  - template
  - portfolio
  - personal
  - resume
name: Freelancer Landing
description: >-
  A flat, friendly one-page personal portfolio — avatar hero, a skills row, a
  project grid whose coral caption overlays are always visible (no hover
  required), and a simple contact CTA, in a teal-and-coral palette. Use for
  individual freelancers, consultants, and personal brand sites.
applies_to:
  - landing-page
  - artboard
  - marketing
  - website
license: MIT
loading: on-demand
source: >-
  github.com/StartBootstrap/startbootstrap-freelancer (MIT License, Start
  Bootstrap LLC)
status: draft
---
# Freelancer Landing

A flat, friendly personal portfolio built on the composition of **Start Bootstrap's Freelancer** theme — an avatar-led hero, a skills row, a project grid under always-on caption overlays, and a simple contact call-to-action.

## When to use

Individual freelancers, consultants, designers, developers — anyone whose landing page is a personal brand rather than a company. It reads warm and approachable rather than corporate, and assumes one person's face and story are the centerpiece.

Avoid it for a company or team site — use Agency instead, which is built for a multi-person, multi-service story.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #FFFFFF | canvas |
| ink | #24292E | body text |
| teal | #17A398 | primary accent, skills band |
| coral | #FF6B57 | portfolio caption overlay (always visible), CTA |
| muted | #6B7280 | secondary copy |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| name | Hanken Grotesk SemiBold | 40px | hero name |
| role | Hanken Grotesk | 18px | hero role/tagline |
| h2 | Hanken Grotesk SemiBold | 28px | section heading |
| body | Hanken Grotesk | 11pt / 1.6 | paragraphs |

## Sections

Minimal nav (name + anchor links) → hero (circular avatar placeholder, name, role, short bio, social icon row) → teal-tinted "Skills" band (3-up icon cards) → white "Work" section (4-up project grid, each tile under an always-visible coral overlay carrying the project title) → centered "Let's work together" contact CTA → minimal footer.

## Building it in Studiograph

A landing page is an **app** entry, not a fixed-size board. Create one app entry with a single frame whose geometry is `{width: "fill", height: "fill"}`, so the frame adopts whatever viewport it is opened in and the page reflows like a real site. A fixed 1440px board would letterbox on a laptop and force sideways scrolling on a phone.

Put the stylesheet in the bundle's **shared head**, and set the frame `background` to `#FFFFFF` so the canvas behind the page matches the paper.

The sizes in the Typography table are *upper* bounds — each is authored as a `clamp()`, so 40px is what the name reaches on a wide desktop, not what it always is.

This template is the flattest of the three landing pages: one font family, no shadows, no gradients, and the entire visual system carried by two accent colours and one border radius. Keep it that way; the friendliness comes from the restraint.

### The stylesheet

```html
<style>
/* ---- reset ---- */
*{box-sizing:border-box;margin:0;padding:0;}
html,body{width:100%;min-height:100%;}

/* ---- tokens: two accents, one family ---- */
:root{
  --fl-teal:#17A398; --fl-coral:#FF6B57;
  --fl-ink:#24292E; --fl-muted:#6B7280;
  --fl-sans:'Hanken Grotesk',system-ui,sans-serif;
}

/* ---- page root ---- */
.fl{width:100%;min-height:100%;background:#fff;
  font-family:var(--fl-sans);color:var(--fl-ink);overflow-x:hidden;}

/* ---- nav: no bar, no background — just a wrapping row ---- */
.fl-nav{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;
  gap:14px;padding:20px clamp(20px,5vw,80px);}
.fl-logo{font-weight:600;font-size:18px;}
.fl-links{display:flex;flex-wrap:wrap;gap:12px 28px;justify-content:center;}
.fl-links a{color:var(--fl-ink);text-decoration:none;font-size:14px;opacity:0.75;}

/* ---- hero: avatar-led, centred, fluid ---- */
.fl-hero{text-align:center;
  padding:clamp(40px,8vw,60px) clamp(20px,6vw,80px) clamp(56px,10vw,100px);}
.fl-avatar{width:clamp(90px,14vw,120px);height:clamp(90px,14vw,120px);border-radius:50%;
  background:var(--fl-teal);color:#fff;display:flex;align-items:center;justify-content:center;
  margin:0 auto 28px;font-weight:600;font-size:clamp(28px,4vw,36px);}
.fl-hero h1{font-weight:600;font-size:clamp(28px,5vw,40px);margin-bottom:8px;}
.fl-role{font-size:clamp(15px,2.4vw,18px);color:var(--fl-teal);font-weight:600;margin-bottom:20px;}
.fl-bio{max-width:560px;margin:0 auto 28px;font-size:16px;line-height:1.6;color:var(--fl-muted);}
.fl-social{font-size:18px;letter-spacing:12px;color:var(--fl-teal);}

/* ---- skills band: teal at 8%, the only tinted surface ---- */
.fl-skills{background:rgba(23,163,152,0.08);
  padding:clamp(48px,9vw,80px) clamp(20px,6vw,80px);}
.fl-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;text-align:center;}
.fl-icon{font-size:26px;color:var(--fl-teal);margin-bottom:14px;}
.fl-skill h3{font-weight:600;font-size:19px;margin-bottom:8px;}
.fl-skill p{font-size:14px;color:var(--fl-muted);line-height:1.5;}

/* ---- work: 4-up project tiles with a coral caption plate ---- */
.fl-work{padding:clamp(56px,10vw,96px) clamp(20px,6vw,80px);text-align:center;}
.fl-work h2{font-weight:600;font-size:clamp(22px,4vw,30px);margin-bottom:clamp(28px,6vw,48px);}
.fl-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
.fl-tile{position:relative;height:220px;border-radius:8px;overflow:hidden;}
.fl-tile-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  background:rgba(255,107,87,0.82);color:#fff;font-weight:600;font-size:15px;
  text-align:center;padding:16px;}

/* ---- contact: full teal, the one inverted band ---- */
.fl-contact{background:var(--fl-teal);color:#fff;text-align:center;
  padding:clamp(48px,9vw,80px) clamp(20px,6vw,80px);}
.fl-contact h2{font-weight:600;font-size:clamp(22px,4vw,30px);margin-bottom:12px;}
.fl-contact p{font-size:16px;opacity:0.9;margin-bottom:28px;}
.fl-cta{display:inline-block;background:#fff;color:var(--fl-teal);padding:14px 32px;
  border-radius:999px;font-weight:600;text-decoration:none;}
.fl-footer{text-align:center;padding:32px;font-size:13px;color:var(--fl-muted);}

/* ---- breakpoints ---- */
@media (max-width:900px){
  .fl-grid-4{grid-template-columns:repeat(2,1fr);}
}
@media (max-width:700px){
  .fl-grid-3{grid-template-columns:1fr;}
}
@media (max-width:520px){
  .fl-grid-4{grid-template-columns:1fr;}
}
</style>
```

### How it reflows

**`clamp()` carries everything continuous.** Section padding is `clamp(20px,6vw,80px)` horizontally throughout, so the gutter slides smoothly from 80px to a 20px floor. Vertical padding varies by section weight — the work section is the tallest at `clamp(56px,10vw,96px)`, the skills band `clamp(48px,9vw,80px)`. Type is fluid too: the name `clamp(28px,5vw,40px)`, the role `clamp(15px,2.4vw,18px)`, section headings `clamp(22px,4vw,30px)`.

The avatar is the clearest case for `clamp()` on this page. It is `clamp(90px,14vw,120px)` square with a matching `clamp(28px,4vw,36px)` for its initials — width, height and the type inside all scale together, so the circle stays a circle and the initials stay centred in it at every size. A fixed 120px avatar would swallow a 375px viewport.

**Media queries handle the column counts**, which `clamp()` cannot express:

| Breakpoint | What changes |
|---|---|
| **≤ 900px** | Work grid steps 4-up → 2-up. Four 220px-tall tiles below this width become slivers. |
| **≤ 700px** | Skills grid steps 3-up → 1-up. It goes straight to one column rather than via two, because a 3-column grid halved leaves an orphan card in the second row — one column reads better than 2+1. |
| **≤ 520px** | Work grid steps 2-up → 1-up. |

Note the two grids step at different widths and by different amounts. That is deliberate: the work tiles are image blocks that survive being narrow, while the skill cards are text and need full width sooner.

Two structural guards: `.fl` carries `overflow-x:hidden`, and both `.fl-nav` and `.fl-links` carry `flex-wrap:wrap` so the link row breaks to a second line before it ever overflows. The nav has no background bar and no breakpoint of its own — wrapping alone is enough because it has only a name and four links.

### Example — the avatar hero

```html
<div class="fl">
  <nav class="fl-nav">
    <div class="fl-logo">Jordan Ellis</div>
    <div class="fl-links">
      <a>About</a><a>Skills</a><a>Work</a><a>Contact</a>
    </div>
  </nav>

  <section class="fl-hero">
    <div class="fl-avatar">JE</div>
    <h1>Jordan Ellis</h1>
    <p class="fl-role">Product Designer &amp; Frontend Developer</p>
    <p class="fl-bio">I help small teams design and build products people actually enjoy using, from first sketch to shipped code.</p>
    <div class="fl-social">● ● ● ●</div>
  </section>
</div>
```

The avatar is an initials circle, not an image — it renders with no asset at all, which is what makes this template work on first paste. To use a real photo, keep the class and add `background:url(...) center/cover;` inline and drop the initials text; the `border-radius:50%` and the `clamp()` sizing keep doing their job.

`.fl-bio` caps at 560px and centres with `margin:0 auto` — tighter than the agency hero's 760px, because this is a personal paragraph rather than a headline, and a short measure is what keeps it feeling like a note rather than marketing copy.

### Example — the skills row

```html
<section class="fl-skills">
  <div class="fl-grid-3">
    <div class="fl-skill">
      <div class="fl-icon">◆</div>
      <h3>Design</h3>
      <p>Interface and interaction design for web and mobile.</p>
    </div>
    <div class="fl-skill">
      <div class="fl-icon">◇</div>
      <h3>Code</h3>
      <p>React, TypeScript, and modern CSS, end to end.</p>
    </div>
    <div class="fl-skill">
      <div class="fl-icon">◈</div>
      <h3>Strategy</h3>
      <p>Turning a rough idea into a shippable v1.</p>
    </div>
  </div>
</section>
```

The band is teal at 8% opacity — `rgba(23,163,152,0.08)` — not a separate grey. Deriving the tint from the accent rather than adding a neutral is why the page holds together on two colours. This is the only tinted surface between the white hero and the full-teal contact band, so it reads as one gentle step, not a new colour.

The section has no heading of its own. Three labelled cards are self-explanatory, and a heading here would compete with the hero directly above it.

### Example — the project tile grid

```html
<section class="fl-work">
  <h2>Selected Work</h2>
  <div class="fl-grid-4">
    <div class="fl-tile" style="background:#DCEEE4;">
      <div class="fl-tile-overlay"><span>Habit Tracker App</span></div>
    </div>
    <div class="fl-tile" style="background:#F6DEDE;">
      <div class="fl-tile-overlay"><span>Studio Website</span></div>
    </div>
    <div class="fl-tile" style="background:#DCE8F6;">
      <div class="fl-tile-overlay"><span>Dashboard Redesign</span></div>
    </div>
    <div class="fl-tile" style="background:#F6ECDC;">
      <div class="fl-tile-overlay"><span>Brand Identity</span></div>
    </div>
  </div>
</section>
```

Each tile's flat pastel is a placeholder for a project image: replace the inline `background` with `background:url(...) center/cover;` and nothing else changes.

**The coral overlay is always on, not hover-gated.** The source theme reveals it on hover; this version does not, for two reasons. Hover does not exist on touch, so a hover-only caption means a phone visitor sees four unlabelled colour blocks. And these frames are often read as a static page rather than clicked through. `rgba(255,107,87,0.82)` is opaque enough to guarantee white text passes over any image beneath, while still letting the image's composition show through. If you do add a hover reveal, give the tile a permanently visible caption underneath as well.

### Example — the contact band and footer

```html
<section class="fl-contact">
  <h2>Let’s work together</h2>
  <p>Have a project in mind? I’d love to hear about it.</p>
  <a class="fl-cta">Say Hello</a>
</section>

<footer class="fl-footer">
  <p>© 2026 Jordan Ellis</p>
</footer>
```

The contact band is the page's only inverted surface, and the pill button (`border-radius:999px`) is the only fully-round shape — both reserved for the one action the page is asking for. The footer stays on white and deliberately understated; the teal band is the ending, and a second dark band after it would blunt it.

## Do's and Don'ts

**Do** — keep the whole page on one type family and let weight (400 vs 600) carry the hierarchy; derive tinted surfaces from the accent (`rgba(23,163,152,0.08)`) rather than adding neutral greys; keep the avatar, its height and its initials all on matched `clamp()` values so the circle scales as one object; use `clamp()` for every section padding and heading size; give each grid its own breakpoint chosen for its own content — text cards need full width sooner than image tiles; keep `overflow-x:hidden` on `.fl` and `flex-wrap:wrap` on the nav; keep the tile caption visible without hover.

**Don't** — add a third accent colour, a shadow, or a gradient; use coral for anything other than tile captions and emphasis, or teal for anything other than the accent, the tinted band and the contact surface; leave `.fl-grid-4` at `repeat(4,1fr)` with no step-down — four 220px tiles below 900px are unusable; give the avatar a fixed pixel size; widen `.fl-bio` past 560px, which turns a personal note into a wall of text; add a second dark band after the teal contact section; scale the page for a team — if there is more than one person's work here, use Agency.

## Fonts

One family, two weights — the whole system.

| Family | Weights | Role |
|---|---|---|
| **Hanken Grotesk** | 400 (Regular), 600 (SemiBold) | everything — nav, name, role, body, headings, buttons |

Declared as a single token with a plain fallback stack:

```css
:root{
  --fl-sans:'Hanken Grotesk',system-ui,sans-serif;
}
```

The family must be uploaded to the workspace and declared with `@font-face` in the shared head to render — see the `using-google-fonts` skill for the pattern. Both weights matter here more than on most templates: the page has no second family to lean on, so a missing 600 collapses the entire hierarchy into one texture. Without the upload the page falls back to the stack above, which is legible but generic. Do not paste font URLs from another workspace — asset paths are workspace-specific, they will not resolve here, and the content security policy makes the failure silent rather than loud.

## See it rendered

Open [[freelancer-landing-app]] — **Freelancer Landing (Responsive App)**, the companion **app** entry in this folder's `examples` — for the live page with every section filled in. Drag the window narrower to watch it reflow. Duplicate it and swap in a real photo, bio, and your own project images.

## Source & license

Composition adapted from [Start Bootstrap's Freelancer theme](https://github.com/StartBootstrap/startbootstrap-freelancer), explicitly described by its author as "a flat design, one page, MIT licensed Bootstrap portfolio theme." License verified directly against the repository's `LICENSE` file on 2026-08-14. The section flow and flat, avatar-led hero are the source's; the palette, type, and exact HTML/CSS here are an original adaptation for Studiograph.
