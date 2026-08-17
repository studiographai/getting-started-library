---
entity_type: skill
entity_id: instagram-post
created_at: '2026-08-16T23:18:48.784Z'
updated_at: '2026-08-17T01:43:13.284Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - social-media
  - template
  - instagram
  - marketing
name: Instagram Post
description: >-
  A 1080×1080 square canvas for Instagram feed posts — one quote or one idea,
  set confidently enough to stay readable at grid-thumbnail size.
applies_to:
  - social-media
  - artboard
  - marketing
loading: on-demand
status: draft
---
# Instagram Post

A square canvas carrying one quote or one idea. The serif runs large and the margins run wide, so the graphic holds its shape whether it is filling a phone screen or sitting three-across in a profile grid. No decoration, no background image, no gradient — the confidence comes from the size of the type and the amount of paper around it.

## When to use

Use it for a pull-quote from a longer piece, a single claim, a definition worth stating plainly, or one number with its clause. It is also the right unit for a carousel where each card makes one point — build several squares from this template rather than one crowded square.

Skip it when the idea genuinely needs two columns, a chart, or a sequence — the square is the least forgiving of the three social formats and content that does not reduce to one sentence will look cramped no matter how the type is tuned. Skip it too when the post is really a LinkedIn post: the 4:5 portrait gives you a third more height for the same idea, so if the platform is not fixed, prefer the taller canvas.

## Canvas & safe areas

**1080 × 1080 px (1:1).** Instagram serves feed images at 1080px wide, so building at exactly that avoids a resample. The square is what the profile grid shows, and it is the one ratio that survives every surface Instagram will put it on.

**Safe box: 88px on all four sides → an 880 × 880 live area.** Instagram does not lay chrome over a feed image, so this margin is compositional rather than protective. It still matters: type running closer than about 80px to the edge reads as an accident of export rather than a decision.

Two crops worth planning for. The profile grid shows the full square but at roughly 360px, and when someone reshares the post into their story it is scaled down and centred on a 9:16 background — so anything essential stays inside the central 880px box and nothing load-bearing touches a corner.

**Thumbnail legibility.** The real test for a square is the profile grid and the feed scroll, both of which can put this at 150px wide. Check it there. The quote should be at least 60px (about 5.5% of canvas width) and the big numeral at least 160px. Fine detail — thin rules, 14px captions, a logo with a wordmark — disappears entirely at that size, so it should not be carrying meaning in the first place.

**No fold.** The whole canvas arrives at once. There is no "below" to demote something to: an element you are ambivalent about is competing with your headline from the first frame. Cut it rather than shrink it.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | quote, numerals, names |
| muted | #4f5d75 | eyebrow, support copy, role line |
| accent | #eb6c36 | the top rule, plus at most one other mark |
| hairline | #d5d8e0 | rule above the attribution block |

One or two accented elements, never three. In the quote variant the accent is the top rule alone and the serif stays ink. In the stat variant the numeral takes the accent and the rule keeps it — that is the ceiling.

## Typography

| Token | Family | Weight / Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 13px, 500, 0.18em caps | kicker at the top |
| quote | 'Source Serif 4', Georgia, serif | 68px, 400, −0.02em | the pull-quote or claim |
| stat | 'Source Serif 4', Georgia, serif | 200px, 400, −0.03em | the one number |
| lede | 'DM Sans', system-ui, sans-serif | 30px, 500 | clause completing a stat |
| support | 'DM Sans', system-ui, sans-serif | 21px, 400 | one or two lines of context |
| name | 'DM Sans', system-ui, sans-serif | 20px, 500 | attribution |
| role / tag | 'DM Sans' 17px · 'JetBrains Mono' 13px | 400 | role line, right-hand tag |

The quote is not set in italics and not wrapped in decorative quotation marks. If it needs to be signalled as speech, the attribution at the foot does that job.

## Layout

Same three-part column as the rest of the family: fixed head (accent rule + mono eyebrow), a flexible body that centres vertically, a fixed foot on a hairline. Because the body centres itself, a four-line quote and a seven-line quote both sit correctly without retuning padding.

Keep the measure between 16 and 20 characters. Wider than that and the square starts to read as a paragraph; narrower and it turns into a column of ragged fragments.

A working example canvas lives at `social-media/examples/instagram-post-preview`.

### `<style>`

```html
<style>
:root{
  --ig-paper:#f5f5f5; --ig-ink:#2d3142; --ig-muted:#4f5d75;
  --ig-accent:#eb6c36; --ig-hairline:#d5d8e0;
  --ig-serif:'Source Serif 4',Georgia,serif;
  --ig-sans:'DM Sans',system-ui,sans-serif;
  --ig-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.ig{width:1080px;height:1080px;background:var(--ig-paper);color:var(--ig-ink);
  font-family:var(--ig-sans);padding:88px;display:flex;flex-direction:column;}
.ig-rule{width:44px;height:3px;background:var(--ig-accent);margin-bottom:24px;}
.ig-eyebrow{font-family:var(--ig-mono);font-size:13px;font-weight:500;
  text-transform:uppercase;letter-spacing:.18em;color:var(--ig-muted);}
.ig-body{flex:1;display:flex;flex-direction:column;justify-content:center;}
.ig-quote{font-family:var(--ig-serif);font-weight:400;font-size:68px;line-height:1.18;
  letter-spacing:-.02em;max-width:18ch;}
.ig-stat{font-family:var(--ig-serif);font-weight:400;font-size:200px;line-height:.92;
  letter-spacing:-.03em;color:var(--ig-accent);}
.ig-lede{font-size:30px;font-weight:500;line-height:1.35;max-width:20ch;margin-top:26px;}
.ig-support{font-size:21px;line-height:1.55;color:var(--ig-muted);max-width:40ch;margin-top:22px;}
.ig-foot{border-top:1px solid var(--ig-hairline);padding-top:26px;
  display:flex;justify-content:space-between;align-items:flex-end;gap:28px;}
.ig-name{font-size:20px;font-weight:500;line-height:1.4;}
.ig-role{font-size:17px;color:var(--ig-muted);line-height:1.45;}
.ig-tag{font-family:var(--ig-mono);font-size:13px;letter-spacing:.18em;
  text-transform:uppercase;color:var(--ig-muted);white-space:nowrap;}
</style>
```

### Example — quote-led

The serif carries the whole square; the accent stays on the rule.

```html
<div class="ig">
  <div>
    <div class="ig-rule"></div>
    <div class="ig-eyebrow">In conversation</div>
  </div>
  <div class="ig-body">
    <h1 class="ig-quote">Good research doesn’t tell you what to build. It tells you what to stop arguing about.</h1>
  </div>
  <div class="ig-foot">
    <div>
      <div class="ig-name">Dana Whitfield</div>
      <div class="ig-role">Principal, Northbridge Research</div>
    </div>
    <div class="ig-tag">Episode 14</div>
  </div>
</div>
```

### Example — stat-led

The numeral takes the accent, the sans clause completes its sentence, and one line of support gives it provenance.

```html
<div class="ig">
  <div>
    <div class="ig-rule"></div>
    <div class="ig-eyebrow">Benchmark · Q2 2026</div>
  </div>
  <div class="ig-body">
    <div class="ig-stat">3.4×</div>
    <div class="ig-lede">more revenue per head at teams with a written decision log.</div>
    <p class="ig-support">Across 240 mid-market operators surveyed this spring.</p>
  </div>
  <div class="ig-foot">
    <div>
      <div class="ig-name">Northbridge Research</div>
      <div class="ig-role">Operations Benchmark</div>
    </div>
    <div class="ig-tag">northbridge.co</div>
  </div>
</div>
```

## Do's and Don'ts

**Do** keep the quote to roughly 20 words. A square has less room than it looks like it has.
**Do** attribute quotes. An unattributed line of serif on paper reads as a stock motivational graphic.
**Do** view it at 150px before publishing, and at 360px for the grid.
**Do** build a carousel as several of these rather than one dense square.

**Don't** add quotation marks, italics and an attribution — pick one signal.
**Don't** centre-align the text. Left-aligned ragged-right is what makes it read as editorial rather than as a poster.
**Don't** put a photograph behind the type. This template has no scrim, and paper-on-photo at 150px is unreadable.
**Don't** add a second stat. Two numbers at the same size is a comparison the square cannot support.
**Don't** fill the empty lower third. That space is why the quote reads as considered.

## Fonts

Three families, each with a local fallback so the canvas never renders blank:

- **Source Serif 4** — `'Source Serif 4', Georgia, serif` — quotes and numerals
- **DM Sans** — `'DM Sans', system-ui, sans-serif` — body, labels, attribution
- **JetBrains Mono** — `'JetBrains Mono', ui-monospace, monospace` — eyebrows and tags

These are named, not fetched. A canvas cannot pull fonts from Google Fonts or any other external host at render time, so unless the font files have been uploaded to the workspace and declared with an `@font-face` rule in the shared head, the browser will silently fall back to Georgia, system-ui and ui-monospace. Nothing errors and nothing warns — the square just looks more ordinary than intended. See the `using-google-fonts` skill for the upload-and-declare steps; once done, every canvas built from this template picks the real faces up.
