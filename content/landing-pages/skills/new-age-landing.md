---
entity_type: skill
entity_id: new-age-landing
created_at: '2026-08-14T22:25:30.410Z'
updated_at: '2026-08-16T22:50:42.691Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - landing-page
  - template
  - app
  - product
  - dark
name: New Age Landing
description: >-
  A dark, modern app-download landing page — split hero with a phone mockup,
  feature cards, and a download call-to-action band. Use for mobile apps,
  downloadable products, and tech products that want a sleek, modern-dark feel.
applies_to:
  - landing-page
  - artboard
  - marketing
  - website
license: MIT
loading: on-demand
source: >-
  github.com/StartBootstrap/startbootstrap-new-age (MIT License, Start Bootstrap
  LLC)
status: draft
---
# New Age Landing

A dark, modern app-download page built on the composition of **Start Bootstrap's New Age** theme — a split hero (copy left, phone mockup right), a feature grid, and a download call-to-action band, all in near-black with a single electric-blue accent.

## When to use

Mobile apps, downloadable desktop products, dev tools — anything whose primary call to action is "download" or "get started" rather than "contact us." The split hero with a device mockup assumes you have (or will build) a real product screen to show inside the phone frame.

Avoid it for a services business with no downloadable product — use Agency or Freelancer instead, which are built around a contact/hire CTA rather than a download CTA.

## Palette

| Role | Value | Notes |
|---|---|---|
| canvas | #0F1115 | hero, CTA band, footer |
| surface | #171A21 | feature card background |
| ink | #F5F6F8 | text on dark |
| muted | #8A8F98 | secondary copy |
| accent | #4F7CFF | buttons, icons, phone-screen glow |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| nav-logo | DM Sans, weight 800 | 20px | wordmark |
| hero-title | DM Sans, weight 800 | 48px | hero headline |
| h2 | DM Sans, weight 800 | 32px | section heading |
| body | DM Sans | 11pt / 1.6 | paragraphs |
| chrome | JetBrains Mono | 12px, uppercase | small labels, version tag |

## Sections

Dark transparent nav (logo + links + accent "Download" button) → split hero (headline, subcopy, two generic download buttons, CSS-drawn phone mockup with a gradient "screen") → "Features" section (3-up icon cards on a slightly lighter dark surface) → electric-blue download CTA band → near-black footer.

## Building it in Studiograph

Build this as an **app** entry, not a fixed-width board. Give the single frame `geometry: {width: "fill", height: "fill"}` so the page fills the viewport and reflows with it. That matters more here than in most templates: the whole design is a two-column hero that has to become a one-column hero, and a board frozen at 1440px can never demonstrate the move it is built around.

Set the frame's `background` to `#0F1115` so the canvas behind the page matches the near-black shell — on a dark page a white overscroll gutter is the most obvious tell there is.

The stylesheet below goes in the bundle's `shared.head`. The markup goes in the frame's content.

```html
<style>
/* ── reset + full-bleed root ───────────────────────────────── */
*{box-sizing:border-box;margin:0;padding:0;}
html,body{width:100%;min-height:100%;}

/* ── tokens ────────────────────────────────────────────────── */
:root{
  --na-bg:#0F1115;
  --na-surface:#171A21;
  --na-blue:#4F7CFF;
  --na-ink:#F5F6F8;
  --na-muted:#8A8F98;
  --na-sans:'DM Sans',system-ui,sans-serif;
  --na-mono:'JetBrains Mono',monospace;
}

/* ── page shell ────────────────────────────────────────────── */
.na{width:100%;min-height:100%;background:var(--na-bg);
  font-family:var(--na-sans);color:var(--na-ink);overflow-x:hidden;}

/* ── nav ───────────────────────────────────────────────────── */
.na-nav{display:flex;flex-wrap:wrap;gap:14px;align-items:center;
  justify-content:space-between;padding:20px clamp(20px,5vw,80px);}
.na-logo{font-weight:800;font-size:20px;}
.na-nav-links{display:flex;flex-wrap:wrap;gap:12px 28px;justify-content:center;}
.na-nav-links a{color:var(--na-muted);font-size:14px;text-decoration:none;}
.na-nav-cta{background:var(--na-blue);color:#fff;padding:10px 22px;
  border-radius:6px;font-weight:700;font-size:14px;
  text-decoration:none;white-space:nowrap;}

/* ── split hero ────────────────────────────────────────────── */
.na-hero{display:grid;grid-template-columns:1fr 1fr;gap:40px;
  align-items:center;
  padding:clamp(40px,8vw,80px) clamp(20px,6vw,80px) clamp(56px,10vw,100px);}
.na-chrome{display:inline-block;font-family:var(--na-mono);font-size:12px;
  color:var(--na-blue);background:rgba(79,124,255,0.12);
  padding:6px 14px;border-radius:100px;margin-bottom:24px;}
.na-hero-title{font-weight:800;font-size:clamp(28px,5.5vw,48px);
  line-height:1.12;margin-bottom:22px;}
.na-hero-sub{font-size:clamp(15px,2.4vw,17px);line-height:1.6;
  color:var(--na-muted);margin-bottom:32px;max-width:440px;}

/* ── buttons ───────────────────────────────────────────────── */
.na-buttons{display:flex;flex-wrap:wrap;gap:16px;}
.na-buttons.center{justify-content:center;}
.na-btn{background:var(--na-ink);color:var(--na-bg);padding:14px 28px;
  border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;}
.na-btn.outline{background:transparent;color:var(--na-ink);
  border:1px solid rgba(255,255,255,0.25);}
/* .dark inverts the pair for use on the blue CTA band */
.na-btn.dark{background:#0F1115;color:#fff;}
.na-btn.dark.outline{background:transparent;border:1px solid rgba(255,255,255,0.4);}

/* ── the CSS-drawn phone mockup ────────────────────────────── */
.na-hero-visual{display:flex;justify-content:center;}
.na-phone-frame{width:clamp(180px,22vw,260px);height:clamp(360px,44vw,520px);
  background:#000;border-radius:36px;padding:14px;
  box-shadow:0 40px 80px rgba(0,0,0,0.5);}
.na-phone-screen{width:100%;height:100%;border-radius:24px;
  background:linear-gradient(160deg,#4F7CFF,#7C5CFC 60%,#0F1115);
  padding:24px 18px;}
.na-phone-bar{width:60px;height:6px;background:rgba(255,255,255,0.4);
  border-radius:4px;margin:0 auto 40px;}
.na-phone-row{height:14px;background:rgba(255,255,255,0.25);
  border-radius:4px;margin-bottom:14px;}
.na-phone-row.short{width:60%;}

/* ── feature row ───────────────────────────────────────────── */
.na-features{background:var(--na-surface);
  padding:clamp(48px,10vw,96px) clamp(20px,6vw,80px);}
.na-section-head{text-align:center;margin-bottom:clamp(32px,6vw,56px);}
.na-kicker{display:block;font-family:var(--na-mono);font-size:12px;
  color:var(--na-blue);text-transform:uppercase;
  letter-spacing:0.14em;margin-bottom:10px;}
.na-section-head h2{font-weight:800;font-size:clamp(22px,4vw,32px);}
.na-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;}
.na-feature{text-align:center;padding:8px;}
.na-icon{font-size:26px;color:var(--na-blue);margin-bottom:16px;}
.na-feature h3{font-weight:800;font-size:18px;margin-bottom:10px;}
.na-feature p{font-size:14px;line-height:1.55;color:var(--na-muted);}

/* ── download CTA band + footer ────────────────────────────── */
.na-cta-band{background:var(--na-blue);text-align:center;
  padding:clamp(40px,8vw,72px) clamp(20px,6vw,80px);}
.na-cta-band h2{font-weight:800;font-size:clamp(22px,4vw,32px);
  color:#fff;margin-bottom:28px;}
.na-footer{text-align:center;
  padding:clamp(24px,5vw,40px) clamp(20px,6vw,80px);}
.na-footer p{font-size:13px;color:var(--na-muted);}

/* ── breakpoints ───────────────────────────────────────────── */
@media (max-width:900px){
  /* the split hero becomes a stack, phone first */
  .na-hero{grid-template-columns:1fr;text-align:center;}
  .na-hero-sub{margin-left:auto;margin-right:auto;}
  .na-hero-visual{order:-1;}
  .na-buttons{justify-content:center;}
}
@media (max-width:700px){
  .na-grid-3{grid-template-columns:1fr;}
}
</style>
```

### Responsive strategy

Fluid values do the continuous work. Horizontal padding is `clamp(20px, 5–6vw, 80px)` everywhere, section rhythm is `clamp(48px, 10vw, 96px)`, the hero headline runs `clamp(28px, 5.5vw, 48px)` and section headings `clamp(22px, 4vw, 32px)`. The phone mockup is fluid in both axes — `clamp(180px, 22vw, 260px)` wide by `clamp(360px, 44vw, 520px)` tall, deliberately the same `vw` ratio in each so the device keeps its 1:2 proportion at every width instead of distorting. The nav wraps on its own via `flex-wrap`.

Two breakpoints, and the first one is the important one:

| Breakpoint | What changes |
|---|---|
| **900px** | The split hero collapses. `grid-template-columns` goes `1fr 1fr` → `1fr`, the column text-aligns to centre, the subcopy picks up `margin: auto` to centre inside its 440px cap, the buttons centre — and `.na-hero-visual { order: -1 }` moves the **phone mockup above the copy**. |
| **700px** | The 3-up feature row stacks to a single column. |

That `order: -1` is the one non-obvious rule in the file, and it is worth understanding rather than copying. In source order the copy comes first, which is correct for a two-column desktop hero (copy left, device right) and correct for screen readers and search engines. But once the hero stacks, leading with a paragraph of text on a phone buries the product — the visual has to land first. `order` reorders the *visual* presentation only; the DOM order stays copy-first, so semantics and reading order are untouched. Reordering the markup instead would fix the phone view and break the desktop one.

The feature row holds three columns down to 700px rather than stepping through a 2-up. Three short icon cards survive at ~215px each; going 3→2 would leave one card orphaned on its own row, which reads as a mistake.

### Example — the split hero with the device mockup

The mono version chip above the headline is the template's signature chrome. Keep the copy block and the visual block as the grid's only two children — extra siblings break the two-column split.

```html
<div class="na">
  <nav class="na-nav">
    <div class="na-logo">NewAge</div>
    <div class="na-nav-links"><a>Features</a><a>Pricing</a><a>Support</a></div>
    <a class="na-nav-cta">Download</a>
  </nav>

  <section class="na-hero">
    <div class="na-hero-text">
      <span class="na-chrome">v4.2.0 — now available</span>
      <h1 class="na-hero-title">Your Music. Everywhere. Instantly.</h1>
      <p class="na-hero-sub">
        Stream, sync, and organize your entire library across every device you own.
      </p>
      <div class="na-buttons">
        <a class="na-btn">App Store</a>
        <a class="na-btn outline">Google Play</a>
      </div>
    </div>
    <div class="na-hero-visual">
      <div class="na-phone-frame">
        <div class="na-phone-screen">
          <div class="na-phone-bar"></div>
          <div class="na-phone-row"></div>
          <div class="na-phone-row"></div>
          <div class="na-phone-row short"></div>
        </div>
      </div>
    </div>
  </section>
</div>
```

The phone is drawn entirely in CSS: a black frame with a 36px radius, an inner screen carrying a blue-to-violet-to-black gradient, and four grey bars standing in for UI. Replace the `.na-phone-screen` children with a real screenshot when you have one — set it as the screen's `background-image` with `background-size: cover` and keep the 24px radius so it stays inside the frame's corners.

### Example — the feature row

Three cards, centred, icon-led. The icons are typographic glyphs (`◐ ◑ ◒`) rather than an icon font, so nothing external has to load.

```html
<section class="na-features">
  <div class="na-section-head">
    <span class="na-kicker">Why New Age</span>
    <h2>Built for how you actually listen</h2>
  </div>
  <div class="na-grid-3">
    <div class="na-feature">
      <div class="na-icon">◐</div>
      <h3>Offline Sync</h3>
      <p>Download once, listen anywhere — no connection required.</p>
    </div>
    <div class="na-feature">
      <div class="na-icon">◑</div>
      <h3>Smart Queue</h3>
      <p>Machine-tuned playlists that actually match your mood.</p>
    </div>
    <div class="na-feature">
      <div class="na-icon">◒</div>
      <h3>Cross-Device</h3>
      <p>Pick up exactly where you left off, on any screen.</p>
    </div>
  </div>
</section>
```

The section sits on `--na-surface` (`#171A21`), six points lighter than the page. That single step is the only thing separating it from the hero — no border, no shadow. On a dark page a surface shift is a stronger divider than a rule.

### Example — the download CTA band and footer

The band is the page's one field of saturated blue, and the buttons invert to `.dark` so they read against it. This is the same two-button pair as the hero, restated — repeat the CTA verbatim rather than inventing a second one.

```html
<section class="na-cta-band">
  <h2>Get the app today</h2>
  <div class="na-buttons center">
    <a class="na-btn dark">App Store</a>
    <a class="na-btn dark outline">Google Play</a>
  </div>
</section>
<footer class="na-footer">
  <p>© 2026 New Age. All rights reserved.</p>
</footer>
```

## Do's and Don'ts

**Do** — keep `#4F7CFF` as the only accent, and spend it on exactly four things: the nav button, the mono chip, the feature icons and the CTA band; separate sections with a surface step rather than a border; keep the phone frame fluid in both axes at matching `vw` rates so it never distorts; keep `order: -1` on the hero visual below 900px so the product leads on a phone; set weights to 800 on dark, not 700; set the frame background to `#0F1115`; repeat the same download CTA pair in the hero and the band.

**Don't** — reorder the hero markup to fix the mobile stack — that breaks desktop and reading order; give the phone a fixed pixel width, which will overflow the grid column below 900px; use pure white for body copy, the muted grey is what makes the ink text feel bright; add a second accent hue — the phone screen's violet is a gradient stop, not a token, and should not migrate into buttons or icons; ship the generic pill "App Store"/"Google Play" buttons to production — those are placeholders for the real trademarked badge assets; put a border or shadow on the feature cards, they are flat by design and the surface carries them.

## Fonts

Two families, and the type system is deliberately narrow — this template gets its voice from weight and colour, not from a display face.

| Family | Role |
|---|---|
| **DM Sans** | everything structural — wordmark, hero headline, section headings, feature titles, body copy, buttons, footer. Loaded as a variable font and used across 400–800. |
| **JetBrains Mono** | chrome only — the version chip and the section kicker |

Declare them as token values with a real fallback stack:

```css
--na-sans:'DM Sans', system-ui, sans-serif;
--na-mono:'JetBrains Mono', ui-monospace, monospace;
```

**Portability.** Naming a family is not the same as loading one. Each family must be uploaded to your workspace and declared with an `@font-face` rule pointing at that workspace's own asset — see the `using-google-fonts` skill for the pattern. Never copy an asset URL from another workspace: those identifiers do not resolve here, and because frames run under a strict content-security policy the failure is completely silent — the page simply renders in the fallback stack with no error anywhere. This template is the most exposed of the three to that failure, because it leans on DM Sans at weight 800; most `system-ui` stacks top out around 700, so a silent fallback quietly flattens every headline on the page.

## See it rendered

Open [[new-age-landing-app]] — **New Age Landing (Responsive App)**, the companion **app** entry in this folder's `examples` — for the live page with every section filled in. Drag the window narrower to watch the split hero stack and the phone mockup jump above the copy. Duplicate it and swap in real copy, a real product screenshot, and your own accent colour. The download buttons are generic pill buttons (not official App Store/Google Play badges) — swap in the real, trademarked badge assets before shipping.

## Source & license

Composition adapted from [Start Bootstrap's New Age theme](https://github.com/StartBootstrap/startbootstrap-new-age), MIT-licensed (Start Bootstrap LLC). License verified directly against the repository's `LICENSE` file on 2026-08-14. The split hero-with-device-mockup structure is the source's; the palette, type, and exact HTML/CSS here are an original adaptation for Studiograph.
