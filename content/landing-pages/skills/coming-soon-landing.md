---
entity_type: skill
entity_id: coming-soon-landing
created_at: '2026-08-14T22:25:40.780Z'
updated_at: '2026-08-17T01:45:01.674Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - landing-page
  - template
  - waitlist
  - minimal
  - prelaunch
name: Coming Soon Landing
description: >-
  A minimal, single-screen pre-launch page — a wordmark, a big headline, a
  static countdown, and an email signup — with no navigation or scrolling. Use
  for waitlists, coming-soon pages, and early-access signups.
applies_to:
  - landing-page
  - artboard
  - marketing
  - website
license: MIT
loading: on-demand
source: >-
  github.com/StartBootstrap/startbootstrap-coming-soon (MIT License, Start
  Bootstrap LLC)
status: draft
---
# Coming Soon Landing

A minimal, single-screen pre-launch page built on the composition of **Start Bootstrap's Coming Soon** theme — a wordmark, a big headline, a static countdown, and an email signup, all in one centered screen with no navigation and nothing to scroll to.

## When to use

Waitlists, coming-soon pages, early-access signups, "we're rebuilding" holding pages — anywhere the entire job of the page is to collect an email address and communicate one date. Its power is restraint: no nav, no footer full of links, no competing CTAs.

Avoid it once you have real content to show — this is a placeholder page by design, meant to be replaced by a full landing page (Agency, New Age, etc.) at or before launch.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #FAF7F2 | warm cream canvas |
| ink | #2A231E | headline, body |
| accent | #E1573A | wordmark, countdown numerals, CTA button |
| muted | #8A7F76 | subcopy, labels |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| wordmark | DM Sans, weight 700, terracotta | 13px, uppercase, 0.24em | small logo/wordmark |
| headline | Newsreader, weight 500, italic | 52px | main headline |
| body | DM Sans | 13pt / 1.5 | subcopy |
| countdown-num | Newsreader, weight 600 | 34px | countdown digits |
| countdown-label | DM Sans | 12px, uppercase, 0.1em | "DAYS" / "HRS" / etc. |

## Sections

One centered section, no nav or footer: small wordmark at top → serif headline ("Something new is on the way") → one line of subcopy → a 4-box static countdown (Days / Hours / Min / Sec) → an email input with a filled CTA button → a small row of social icons at the very bottom.

## Building it in Studiograph

Build this as an **app** entry, not a fixed-width board. Give the single frame `geometry: {width: "fill", height: "fill"}` so the page fills the viewport and reflows with it. This template needs the fill geometry in both axes, not just width — the whole design is one block optically centred in the screen, and that centring only works if the shell knows how tall the viewport actually is. A board fixed at 1440×900 centres the content in a rectangle rather than in the window.

Set the frame's `background` to `#FAF7F2` so the canvas behind the page matches the cream.

Note the reset here is `html, body { height: 100% }`, not `min-height`. That is deliberate and it is the mechanism: the shell's own `min-height: 100%` needs a resolved parent height to measure against, and with `min-height` on the ancestors it would resolve to auto — the content-height of the block — and the page would sit at the top of the screen instead of the middle. `.cs` then does the centring with `display: flex; align-items: center; justify-content: center`.

The stylesheet below goes in the bundle's `shared.head`. The markup goes in the frame's content.

```html
<style>
/* ── reset ─────────────────────────────────────────────────── */
/* height:100% — NOT min-height. The shell's percentage
   min-height needs a resolved ancestor height to centre against. */
*{box-sizing:border-box;margin:0;padding:0;}
html,body{width:100%;height:100%;}

/* ── tokens ────────────────────────────────────────────────── */
:root{
  --cs-cream:#FAF7F2;
  --cs-terracotta:#E1573A;
  --cs-ink:#2A231E;
  --cs-muted:#8A7F76;
  --cs-serif:'Newsreader',serif;
  --cs-sans:'DM Sans',system-ui,sans-serif;
}

/* ── the single centred screen ─────────────────────────────── */
.cs{width:100%;min-height:100%;background:var(--cs-cream);
  font-family:var(--cs-sans);color:var(--cs-ink);
  display:flex;align-items:center;justify-content:center;
  padding:clamp(48px,10vw,100px) clamp(20px,6vw,80px);}
.cs-inner{max-width:680px;width:100%;text-align:center;margin:0 auto;}

/* ── type ──────────────────────────────────────────────────── */
/* the wordmark is sans + heavily tracked, against a serif headline */
.cs-wordmark{font-size:13px;font-weight:700;letter-spacing:0.24em;
  color:var(--cs-terracotta);margin-bottom:28px;}
.cs-headline{font-family:var(--cs-serif);font-weight:500;font-style:italic;
  font-size:clamp(28px,6vw,52px);line-height:1.16;margin-bottom:24px;}
.cs-sub{font-size:clamp(15px,2.4vw,17px);line-height:1.6;
  color:var(--cs-muted);margin-bottom:clamp(32px,6vw,48px);}

/* ── countdown ─────────────────────────────────────────────── */
.cs-countdown{display:flex;flex-wrap:wrap;justify-content:center;
  gap:16px;margin-bottom:clamp(32px,6vw,48px);}
.cs-cbox{width:100px;padding:20px 0;background:#fff;
  border-radius:12px;border:1px solid rgba(0,0,0,0.06);}
.cs-cnum{display:block;font-family:var(--cs-serif);font-size:34px;
  font-weight:600;color:var(--cs-terracotta);margin-bottom:6px;}
.cs-clabel{display:block;font-size:12px;text-transform:uppercase;
  letter-spacing:0.1em;color:var(--cs-muted);}

/* ── email capture ─────────────────────────────────────────── */
.cs-form{display:flex;flex-wrap:wrap;justify-content:center;
  gap:12px;margin-bottom:40px;}
.cs-input{width:280px;max-width:100%;padding:14px 18px;
  border-radius:100px;border:1px solid rgba(0,0,0,0.15);
  font-family:var(--cs-sans);font-size:14px;background:#fff;}
.cs-btn{background:var(--cs-terracotta);color:#fff;padding:14px 28px;
  border-radius:100px;border:none;font-weight:700;
  font-size:14px;cursor:pointer;}

/* ── social row ────────────────────────────────────────────── */
.cs-social{font-size:18px;letter-spacing:12px;
  color:var(--cs-terracotta);opacity:0.6;}

/* ── breakpoint ────────────────────────────────────────────── */
@media (max-width:480px){
  /* countdown becomes an exact 2×2; the form stacks */
  .cs-countdown{gap:12px;}
  .cs-cbox{width:calc(50% - 6px);}
  .cs-form{flex-direction:column;align-items:center;}
  .cs-input,.cs-btn{width:100%;max-width:280px;}
}
</style>
```

### Responsive strategy

This template needs only one media query, because almost everything about it is already fluid or already wraps.

The pads are `clamp(48px, 10vw, 100px)` vertical and `clamp(20px, 6vw, 80px)` horizontal. The headline runs `clamp(28px, 6vw, 52px)` — nearly a 2× range, the widest of the three landing templates, which is what lets one line of serif stay the dominant element from a phone to a desktop. Subcopy is `clamp(15px, 2.4vw, 17px)`, and the two big vertical gaps are `clamp(32px, 6vw, 48px)`. The content column is capped at `max-width: 680px`, so on a wide screen the page stops growing and simply centres — no breakpoint required to keep the measure readable.

The countdown and the form are both `flex-wrap: wrap`, so they degrade gracefully at any width without being told to.

| Breakpoint | What changes |
|---|---|
| **480px** | The countdown's four fixed 100px boxes become `width: calc(50% - 6px)` with a 12px gap, producing an exact **2×2 grid** — two boxes plus one gap is `(50% − 6px) × 2 + 12px = 100%`, so the rows fill edge to edge with no ragged remainder. At the same breakpoint the email form switches to `flex-direction: column`, and the input and button both go full-width capped at 280px, so they stack as two equal-width bars rather than a squeezed input beside a button. |

The `calc(50% - 6px)` is worth reading closely: it is derived from the gap, not guessed. If you change the mobile gap, change the subtrahend to half of it, or the second box wraps to its own row and you get a 1-column countdown four boxes tall.

### Example — the single-screen shell

The shell and its inner column are the whole layout. `.cs` centres; `.cs-inner` caps the measure and centres the text. Everything else drops inside `.cs-inner` in order.

```html
<div class="cs">
  <div class="cs-inner">
    <div class="cs-wordmark">COMING SOON</div>
    <h1 class="cs-headline">Something Beautiful Is On Its Way</h1>
    <p class="cs-sub">
      We’re putting the finishing touches on our new site. Leave your email
      and we’ll let you know the moment we launch.
    </p>
    <!-- countdown, form and social row go here -->
  </div>
</div>
```

The headline is set `font-style: italic` at weight 500 — italic is the default state of this headline, not an emphasis applied to part of it. Do not mix roman and italic inside it; the whole line leans, and that consistency is what stops the italic reading as a typo.

### Example — the countdown boxes

Four identical boxes, each a white card on the cream ground with a nearly invisible hairline. The numeral is serif and terracotta; the label is sans, uppercase and muted. That inversion — accent on the number, grey on the word — is what makes the countdown scan at a glance.

```html
<div class="cs-countdown">
  <div class="cs-cbox">
    <span class="cs-cnum">12</span><span class="cs-clabel">Days</span>
  </div>
  <div class="cs-cbox">
    <span class="cs-cnum">08</span><span class="cs-clabel">Hours</span>
  </div>
  <div class="cs-cbox">
    <span class="cs-cnum">45</span><span class="cs-clabel">Min</span>
  </div>
  <div class="cs-cbox">
    <span class="cs-cnum">30</span><span class="cs-clabel">Sec</span>
  </div>
</div>
```

Pad the numerals to two digits (`08`, not `8`). The boxes are a fixed width on desktop and a computed half on mobile, so a one-character numeral leaves a visible hole rather than narrowing its box. This countdown is static — the numbers are markup, not a running clock. Update them by hand, or drive them from a script if the page needs a live tick.

### Example — the email capture form

One input, one button, no label, no second field. Asking for a name here measurably costs signups, and the page has exactly one job.

```html
<form class="cs-form">
  <input type="email" placeholder="Enter your email" class="cs-input">
  <button class="cs-btn" type="button">Notify Me</button>
</form>
<div class="cs-social">● ● ● ●</div>
```

`type="email"` is doing real work: it brings up the email keyboard on a phone and gets free client-side validation. The button is `type="button"` so the unwired form cannot submit and reload the page — change it to `type="submit"` and give the form an `action` when you connect it to your mailing list. The social row is four bullet glyphs standing in for icons, spaced with a 12px `letter-spacing`; replace them with real marks, but keep them at 60% opacity so they stay subordinate to the CTA.

## Do's and Don'ts

**Do** — keep the page to one screen and one action; keep `html, body { height: 100% }` so the flex centring has a height to resolve against; keep the content column capped at 680px so it centres rather than stretching on a wide display; keep the countdown's mobile width tied to its gap (`calc(50% - gap/2)`) so it lands as a clean 2×2; pad countdown numerals to two digits; spend the terracotta on exactly three things — wordmark, numerals, button; set `type="email"` on the input; set the frame background to the cream.

**Don't** — add navigation, a footer of links, or a second call to action — the restraint *is* the design; add a second form field; let the countdown wrap unevenly by changing the gap without changing the `calc()`; mix roman and italic inside the headline; put the serif on the wordmark or the labels — the sans/serif contrast between the tracked wordmark and the big italic headline is the page's one typographic idea; make the box hairline darker, it is `rgba(0,0,0,0.06)` and meant to be felt rather than seen; leave this page up after launch.

## Fonts

Two families, in sharp contrast to each other.

| Family | Role |
|---|---|
| **Newsreader** | the headline (italic, weight 500) and the countdown numerals (weight 600) — the page's only serif, and the reason it reads as considered rather than generic |
| **DM Sans** | everything else — the tracked wordmark, subcopy, countdown labels, input and button |

Declare them as token values with a real fallback stack:

```css
--cs-serif:'Newsreader', Georgia, serif;
--cs-sans:'DM Sans', system-ui, sans-serif;
```

**Portability.** Naming a family is not the same as loading one. Each family must be uploaded to your workspace and declared with an `@font-face` rule pointing at that workspace's own asset — see the `using-google-fonts` skill for the pattern. Never copy an asset URL from another workspace: those identifiers do not resolve here, and because frames run under a strict content-security policy the failure is completely silent — the page simply renders in the fallback stack with no error anywhere.

Watch the italic specifically. If only a roman cut of Newsreader is uploaded, the browser will synthesise an oblique rather than fail visibly, and a slanted roman on a transitional serif at 52px is unmistakably wrong — it is the page's largest element. Upload the italic face and declare it with `font-style: italic`, or accept the Georgia fallback, which at least has a real italic.

## See it rendered

Open [[coming-soon-landing-app]] — **Coming Soon Landing (Responsive App)**, the companion **app** entry in this folder's `examples` — for the live single-screen page with every element filled in. Drag the window narrower to watch the countdown fold into a 2×2 and the form stack. Duplicate it, set a real target date, swap in your own wordmark and colours, and wire the form to your email list.

## Source & license

Composition adapted from [Start Bootstrap's Coming Soon theme](https://github.com/StartBootstrap/startbootstrap-coming-soon), MIT-licensed (Start Bootstrap LLC). License verified directly against the repository's `LICENSE` file on 2026-08-14. The single-screen, countdown-plus-signup structure is the source's; the palette, type, and exact HTML/CSS here are an original adaptation for Studiograph.
