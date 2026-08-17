---
entity_type: skill
entity_id: instagram-story
created_at: '2026-08-16T23:20:14.579Z'
updated_at: '2026-08-17T01:43:14.323Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - social-media
  - template
  - instagram
  - marketing
name: Instagram Story
description: >-
  A 1080×1920 vertical canvas for Instagram Stories — full-bleed paper with a
  strict 250px top and bottom safe box that keeps every element clear of the
  platform's interface.
applies_to:
  - social-media
  - artboard
  - marketing
loading: on-demand
status: draft
---
# Instagram Story

A full-bleed 9:16 canvas built around a hard constraint: Instagram covers the top and bottom of every story with its own interface, so the usable area is a tall band in the middle. This template treats that band as the real page and lets the paper run to the edges behind it. One statement or one number, a line of support, an attribution at the foot of the safe box.

## When to use

Use it for a single announcement, a pull-quote, a number worth pausing on, or the cover frame of a multi-frame story sequence. Stories are watched, not read — a viewer gives each frame two or three seconds and taps. That budget buys one idea.

Do not use it for anything that needs reading: an agenda, a list of five features, a chart with a legend. If the content will not survive being glanced at while someone's thumb hovers over the screen, it belongs in a feed post the viewer can dwell on. Do not use it as a resize of a feed square either — a square scaled up to 9:16 leaves two dead bands and reads as a repost of someone else's graphic.

## Canvas & safe areas

**1080 × 1920 px (9:16).** The paper is full-bleed: the background runs corner to corner so there is no letterboxing when Instagram scales the frame to a taller or shorter phone.

**The safe box is the whole point.** Instagram lays its own interface over the frame — the profile chip, timeline bars and close button at the top; the reply field, share and menu controls at the bottom. Content underneath them is not just crowded, it is covered.

| Edge | Reserve | What sits there |
|---|---|---|
| top | 250px | progress bars, profile chip, close button |
| bottom | 250px | reply field, share and menu icons |
| left / right | 88px | editorial margin, plus room for taller phone crops |

**That leaves a live area of 904 × 1420 px — x from 88 to 992, y from 250 to 1670.** Every glyph, rule and logo lives inside it. The paper is the only thing allowed outside it.

Two extra notes. Interactive stickers (polls, questions, link) are dropped on by the person posting and typically land in the lower-middle — so if you plan to add one, leave the band from roughly y 1150 to 1550 free of type. And on very tall devices Instagram crops the sides slightly rather than the top and bottom, which is what the 88px side margin is buying you.

**Thumbnail legibility.** A story frame is watched at full screen, but it is also previewed as a small circle or card in highlights and shares. Set the statement at 70px or more (about 6.5% of canvas width) and the numeral at 200px or more. High contrast, no fine detail — a 1px hairline is fine as structure but must not be the thing carrying meaning.

**No fold.** Vertical does not mean scrollable. The viewer sees the entire frame at once and then taps. There is no "further down" to defer anything to, so the eyebrow, the statement and the attribution are all competing from the first instant. That is why the statement is the only thing set large and there is exactly one accent.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | full-bleed canvas, runs past the safe box to all four edges |
| ink | #2d3142 | statement, numerals, names |
| muted | #4f5d75 | eyebrow, support copy, role line |
| accent | #eb6c36 | the top rule, plus at most one other mark |
| hairline | #d5d8e0 | rule above the attribution block |

One or two accented elements. In the statement variant that is the rule alone; in the stat variant the rule plus the numeral.

## Typography

| Token | Family | Weight / Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 13px, 500, 0.18em caps | kicker at the top of the safe box |
| statement | 'Source Serif 4', Georgia, serif | 76px, 400, −0.02em | the one claim |
| stat | 'Source Serif 4', Georgia, serif | 240px, 400, −0.03em | the one number |
| lede | 'DM Sans', system-ui, sans-serif | 32px, 500 | clause completing a stat |
| support | 'DM Sans', system-ui, sans-serif | 24px, 400 | one or two lines of context |
| name | 'DM Sans', system-ui, sans-serif | 21px, 500 | attribution |
| role / tag | 'DM Sans' 18px · 'JetBrains Mono' 13px | 400 | role line, right-hand tag |

## Layout

The outer element is the full 1080 × 1920 paper, and its padding *is* the safe box — `padding: 250px 88px`. Inside it, the same three-part column as the rest of the family: fixed head, flexible body centred vertically, fixed foot on a hairline. Because the safe box is expressed as padding rather than as a nested wrapper, there is no way to accidentally place an element outside it.

If a design needs a full-bleed colour block or image, it goes behind this column as an absolutely positioned layer at the paper level — never as padding removed from the safe box.

A working example canvas lives at `social-media/examples/instagram-story-preview`.

### `<style>`

```html
<style>
:root{
  --st-paper:#f5f5f5; --st-ink:#2d3142; --st-muted:#4f5d75;
  --st-accent:#eb6c36; --st-hairline:#d5d8e0;
  --st-serif:'Source Serif 4',Georgia,serif;
  --st-sans:'DM Sans',system-ui,sans-serif;
  --st-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
/* padding IS the safe box: 250px top/bottom clears Instagram's chrome */
.st{width:1080px;height:1920px;background:var(--st-paper);color:var(--st-ink);
  font-family:var(--st-sans);padding:250px 88px;display:flex;flex-direction:column;}
.st-rule{width:44px;height:3px;background:var(--st-accent);margin-bottom:24px;}
.st-eyebrow{font-family:var(--st-mono);font-size:13px;font-weight:500;
  text-transform:uppercase;letter-spacing:.18em;color:var(--st-muted);}
.st-body{flex:1;display:flex;flex-direction:column;justify-content:center;}
.st-statement{font-family:var(--st-serif);font-weight:400;font-size:76px;line-height:1.18;
  letter-spacing:-.02em;max-width:17ch;}
.st-stat{font-family:var(--st-serif);font-weight:400;font-size:240px;line-height:.92;
  letter-spacing:-.03em;color:var(--st-accent);}
.st-lede{font-size:32px;font-weight:500;line-height:1.35;max-width:20ch;margin-top:28px;}
.st-support{font-size:24px;line-height:1.55;color:var(--st-muted);max-width:38ch;margin-top:32px;}
.st-foot{border-top:1px solid var(--st-hairline);padding-top:28px;
  display:flex;justify-content:space-between;align-items:flex-end;gap:28px;}
.st-name{font-size:21px;font-weight:500;line-height:1.4;}
.st-role{font-size:18px;color:var(--st-muted);line-height:1.45;}
.st-tag{font-family:var(--st-mono);font-size:13px;letter-spacing:.18em;
  text-transform:uppercase;color:var(--st-muted);white-space:nowrap;}
</style>
```

### Example — statement-led

```html
<div class="st">
  <div>
    <div class="st-rule"></div>
    <div class="st-eyebrow">Field Notes · 03</div>
  </div>
  <div class="st-body">
    <h1 class="st-statement">Most delays aren’t technical. They’re a decision nobody has been asked to make.</h1>
    <p class="st-support">From six months of delivery data across eleven product teams.</p>
  </div>
  <div class="st-foot">
    <div>
      <div class="st-name">Northbridge Research</div>
      <div class="st-role">Operations Benchmark</div>
    </div>
    <div class="st-tag">Swipe for the report</div>
  </div>
</div>
```

### Example — stat-led

```html
<div class="st">
  <div>
    <div class="st-rule"></div>
    <div class="st-eyebrow">Benchmark · Q2 2026</div>
  </div>
  <div class="st-body">
    <div class="st-stat">68%</div>
    <div class="st-lede">of operations teams still close the month by hand.</div>
    <p class="st-support">240 finance and operations leads, surveyed this spring.</p>
  </div>
  <div class="st-foot">
    <div>
      <div class="st-name">Northbridge Research</div>
      <div class="st-role">Operations Benchmark, second edition</div>
    </div>
    <div class="st-tag">northbridge.co</div>
  </div>
</div>
```

## Do's and Don'ts

**Do** keep the 250px reserves even when the frame looks empty without them. The emptiness is where the interface goes.
**Do** run the paper to all four edges so the frame never letterboxes.
**Do** check the frame in the Instagram composer before publishing a campaign — the chrome moves between app versions, and 250px is a working margin, not a guarantee for all time.
**Do** leave y 1150–1550 clear of type if a poll, question or link sticker is going on the frame.
**Do** build a sequence as several single-idea frames rather than one dense frame.

**Don't** centre the statement vertically by eye and let it drift into the top reserve — use the padding.
**Don't** put the logo or handle at the very bottom of the canvas. It will sit under the reply field.
**Don't** scale a feed square up to fill 9:16.
**Don't** add a "swipe up" arrow graphic; the platform draws its own affordance and yours will collide with it.
**Don't** exceed two accented elements, and don't set the serif in bold — increase the size instead.

## Fonts

Three families, each with a local fallback so the canvas never renders blank:

- **Source Serif 4** — `'Source Serif 4', Georgia, serif` — statements and numerals
- **DM Sans** — `'DM Sans', system-ui, sans-serif` — body, labels, attribution
- **JetBrains Mono** — `'JetBrains Mono', ui-monospace, monospace` — eyebrows and tags

These are named, not fetched. A canvas cannot pull fonts from Google Fonts or any other external host at render time, so unless the font files have been uploaded to the workspace and declared with an `@font-face` rule in the shared head, the browser falls back silently to Georgia, system-ui and ui-monospace. Nothing errors — the frame simply looks more ordinary than intended, and on a story that difference is easy to miss at a glance. See the `using-google-fonts` skill for the upload-and-declare steps; do it once and every canvas built from this template picks the real faces up.
