---
entity_type: skill
entity_id: youtube-thumbnail
created_at: '2026-08-16T23:19:09.634Z'
updated_at: '2026-08-16T23:19:43.257Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - social-media
  - template
  - youtube
  - marketing
name: YouTube Thumbnail
description: >-
  A 1280×720 thumbnail built for maximum legibility at browse size — four to six
  words of very large serif type, high contrast, nothing else.
applies_to:
  - social-media
  - artboard
  - marketing
loading: on-demand
status: draft
---
# YouTube Thumbnail

A 1280×720 card with one job: be readable when it is 168 pixels wide. Four to six words of very large serif type, one small mono tag, one short accent mark, and a great deal of empty paper. Every design decision here is downstream of the reduction.

## When to use

Use it for video thumbnails, and for any other surface where the graphic will be seen at browse size before it is seen at full size — a card in a content grid, a link preview in a chat client, a tile in a resource library.

Do not use it as a title card inside a video: at full-screen size this type is enormous and the restraint reads as emptiness rather than confidence. Do not use it when the promise of the video genuinely needs a sentence — rewrite the promise into four words, or pick a different format. And do not use it for a thumbnail that is meant to carry a face or a product shot; this is a typographic template, and adding a photograph behind the words will cost exactly the contrast the words depend on.

## Canvas & legibility

**1280 × 720** (16:9). This is the constraint that matters: **YouTube renders thumbnails at roughly 168 × 94px** in sidebar and mobile browse positions — around **210 × 118px** in a desktop grid. That is an **8× reduction**. A 20px label on this canvas becomes 2.6px. It is not small; it is gone.

So the type is sized backwards from the destination. The headline is **148px**, which survives the reduction at about 19px — comfortably readable. Nothing else on the canvas goes below 20px, and the two small elements (tag and byline) are there to be recognised as texture at browse size and read only when someone opens the video page.

**No fold, and less time than usual.** A thumbnail is scanned in a grid alongside a dozen competitors, in well under a second. There is no second glance to design for. Everything on the canvas competes immediately, which is the argument for having almost nothing on it.

**Word budget:**

| Zone | Budget | Hard cap |
|---|---|---|
| Headline | **4–6 words** | 14 characters per line, 2 lines |
| Tag | 1–3 words | 24 characters |
| Byline | 2–4 words | 28 characters |

Six words is the ceiling, not the target. Four is better. If the headline needs a third line at 148px, the copy is too long — cut it. Do not drop to 110px to buy a third line; you will have traded the one property the template exists to protect.

**Check it before shipping.** View the rendered canvas at 13% zoom, or scale the screenshot to 168px wide. If you cannot read the headline in one pass at that size, make the type bigger and cut words. That test is the whole quality bar.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | headline, byline |
| muted | #4f5d75 | tag |
| accent | #eb6c36 | one emphasised word, or the bar — never both |
| hairline | #d5d8e0 | rarely needed; omit if it does not survive reduction |

Ink on paper is roughly an 11:1 contrast ratio, which is what carries the type down to 168px. Resist tinting the background: every step the paper takes toward mid-grey costs headline contrast, and contrast is legibility at this size.

The accent marks **one** thing — either a single emphasised word in the headline or the short bar beside the byline. A coral word and a coral bar and a coral tag is three focal points in a graphic that has room for one.

**Dark variant.** Inverting to ink paper (`#2d3142`) with paper-coloured type is equally legible and useful when a series needs to alternate. Invert the whole system at once — background, type, and accent — rather than tinting one element.

## Typography

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| tag | 'JetBrains Mono', ui-monospace, monospace | 20px, 500, 0.18em caps | topic / series label |
| headline | 'Source Serif 4', Georgia, serif | 148px, 400, −0.03em | the promise, 4–6 words |
| numeral | 'Source Serif 4', Georgia, serif | 240px, 400, −0.04em | number-led variant |
| byline | 'DM Sans', system-ui, sans-serif | 24px, 500 | show name / episode |

The mono tag is 20px because the canvas is 1280 wide — size the eyebrow to the frame, never to a remembered 11px. Below 20px here, the tag stops being legible even at full size on a phone.

Set the headline at 400 weight, not bold. Size is doing the work; adding weight at 148px closes up the counters and actually costs legibility at reduction.

## Layout

Three bands at 80px side padding: tag top-left, headline optically centred in the middle band with a 14ch measure, byline bottom-left behind a short accent bar. The headline is the only large object, and the empty right column is deliberate — it gives the type an edge to read against in a crowded grid.

### `<style>`

```html
<style>
:root{
  --yt-paper:#f5f5f5; --yt-ink:#2d3142; --yt-muted:#4f5d75;
  --yt-accent:#eb6c36; --yt-hairline:#d5d8e0;
  --yt-serif:'Source Serif 4',Georgia,serif;
  --yt-sans:'DM Sans',system-ui,sans-serif;
  --yt-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.yt{width:1280px;height:720px;background:var(--yt-paper);color:var(--yt-ink);
  font-family:var(--yt-sans);padding:64px 80px;
  display:flex;flex-direction:column;justify-content:space-between;}
.yt-tag{font-family:var(--yt-mono);font-size:20px;font-weight:500;
  letter-spacing:.18em;text-transform:uppercase;color:var(--yt-muted);}
.yt-headline{font-family:var(--yt-serif);font-size:148px;font-weight:400;
  line-height:1.02;letter-spacing:-.03em;max-width:14ch;}
.yt-em{color:var(--yt-accent);}
.yt-num{display:flex;align-items:baseline;gap:28px;}
.yt-numeral{font-family:var(--yt-serif);font-size:240px;font-weight:400;
  line-height:.9;letter-spacing:-.04em;color:var(--yt-accent);}
.yt-numlabel{font-family:var(--yt-serif);font-size:96px;font-weight:400;
  line-height:1.05;letter-spacing:-.03em;max-width:8ch;}
.yt-foot{display:flex;align-items:center;gap:22px;}
.yt-bar{width:64px;height:4px;background:var(--yt-accent);}
.yt-bar--ink{background:var(--yt-ink);}
.yt-byline{font-size:24px;font-weight:500;color:var(--yt-ink);}
</style>
```

### Example — statement

```html
<div class="yt">
  <div class="yt-tag">Operations · Ep. 14</div>
  <h1 class="yt-headline">Stop shipping <span class="yt-em">dashboards</span></h1>
  <div class="yt-foot">
    <span class="yt-bar yt-bar--ink"></span>
    <span class="yt-byline">The Northbridge Review</span>
  </div>
</div>
```

### Example — number-led

```html
<div class="yt">
  <div class="yt-tag">Benchmarks · 2026</div>
  <div class="yt-num">
    <div class="yt-numeral">3</div>
    <div class="yt-numlabel">metrics that matter</div>
  </div>
  <div class="yt-foot">
    <span class="yt-bar"></span>
    <span class="yt-byline">The Northbridge Review</span>
  </div>
</div>
```

## Do's and Don'ts

**Do** design at 148px and verify at 168px wide. Both numbers matter, and only the second one is the customer.
**Do** cut to four words when you can. The shortest thumbnail in a grid is usually the most readable one.
**Do** keep the paper light and the ink dark — figure/ground separation is the mechanism, not a preference.
**Do** emphasise at most one word, and only when the emphasis changes the meaning.

**Don't** add a photo, a gradient, a texture, or a border behind the type. Each one lowers effective contrast at reduction.
**Don't** set the headline in bold or all-caps. Both close up letterforms that need their counters open at 19px.
**Don't** put anything below 20px on this canvas — it will not exist at browse size, so it is decoration you cannot see.
**Don't** centre the headline or fill the right column. The empty space is what lets the words read against a busy grid.

## Fonts

This template names three families with local fallback stacks, so it renders anywhere without a network request:

- Headline / numerals — `'Source Serif 4', Georgia, serif`
- Byline — `'DM Sans', system-ui, sans-serif`
- Tag — `'JetBrains Mono', ui-monospace, monospace`

A canvas cannot fetch fonts from Google Fonts or any other external host. If the first family is not installed and declared, the browser **falls back silently** to Georgia and your system sans — no warning, and at 148px the difference in fitting is very visible. Upload the font files into the workspace and declare them with `@font-face` in the shared head; see the `using-google-fonts` skill. Always re-check the rendered preview after a font change, because a fallback face sets wider and can push a two-line headline to three.

## Building it in Studiograph

Create an artboard entry with one frame at 1280×720, background `#f5f5f5`. Put the `<style>` block in the shared head and the `.yt` markup in the frame content. Keep the height fixed at 720 — if the content overflows, that is the template telling you the copy is too long, and auto height would hide it. See the working example at `social-media/examples/youtube-thumbnail-preview`.
