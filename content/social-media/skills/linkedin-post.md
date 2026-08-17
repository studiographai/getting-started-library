---
entity_type: skill
entity_id: linkedin-post
created_at: '2026-08-16T23:17:20.837Z'
updated_at: '2026-08-17T01:43:28.275Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - social-media
  - template
  - linkedin
  - marketing
name: LinkedIn Post
description: >-
  A 1200×1350 portrait canvas for LinkedIn feed posts — one statement or one
  statistic with attribution, set large enough to stay legible at thumbnail
  scale.
applies_to:
  - social-media
  - artboard
  - marketing
loading: on-demand
status: draft
---
# LinkedIn Post

A portrait 4:5 canvas that makes a single point well. One statement or one statistic, a line or two of support, and an attribution block on a hairline at the foot. Everything else is whitespace. The register is professional but not corporate — the same voice you would use in a well-edited industry newsletter.

## When to use

Reach for this when you have one idea worth a stranger's three seconds: a finding from your own data, a claim you are willing to defend, a line from a longer piece you want to pull forward. It works because the reader has to make exactly one decision — agree or don't — and the canvas gives them nothing else to look at.

Do not use it when the content is a list. Five bullets shrunk to fit a square is a worse post than five separate posts, and a genuine list belongs in a row-list template where each row gets room to breathe. Do not use it for charts with axes and legends — a feed image is seen at a glance and a chart needs study. And do not use it when the asset must also run as an Instagram square: the 4:5 crop is not square-safe, so build the square separately rather than centre-cropping this one.

## Canvas & safe areas

**1200 × 1350 px (4:5 portrait).** LinkedIn renders feed images up to 4:5 before it crops, so this is the tallest — and therefore the largest — footprint a single image can claim in the feed. A 1:1 square gives up roughly a quarter of that height for nothing.

**Safe box: 96px sides, 104px top and bottom → a 1008 × 1142 live area.** No platform chrome sits on top of a LinkedIn feed image, so this margin is editorial rather than defensive: it is what stops the type from reading as a poster print-out. Keep every glyph inside it.

One real crop to plan for: link-preview and notification surfaces re-crop to roughly 1.91:1 around the centre. Anything that must survive that — the headline, the number — should sit inside the middle band, y 300 to 930. Attribution at the foot is allowed to fall outside it.

**Thumbnail test.** Before you ship, view the canvas at 150px wide. The headline must still be readable as words, not texture. In practice that means the headline is at least 72px (6% of canvas width) and the big numeral is 180px or more. If you find yourself dropping to 48px to fit the copy, the copy is too long — cut it, do not shrink it.

**No fold.** A landing page reveals itself as you scroll; this does not. Eyebrow, headline, support line and attribution all arrive in the same instant and compete for the same attention. That is why there is only one accent and only one thing set large.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | headline, numerals, names |
| muted | #4f5d75 | eyebrow, support copy, role line |
| accent | #eb6c36 | the top rule and, at most, one other mark |
| hairline | #d5d8e0 | rule above the attribution block |

The accent marks one or two elements per graphic — the short top rule plus, in the stat-led variant, the numeral itself. If the numeral is coloured, nothing else may be. A canvas with three orange things has no emphasis, only decoration.

## Typography

| Token | Family | Weight / Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 14px, 500, 0.18em caps | kicker above the fold line |
| statement | 'Source Serif 4', Georgia, serif | 84px, 400, −0.02em | the one claim |
| stat | 'Source Serif 4', Georgia, serif | 220px, 400, −0.03em | the one number |
| lede | 'DM Sans', system-ui, sans-serif | 34px, 500 | the clause that completes a stat |
| support | 'DM Sans', system-ui, sans-serif | 24px, 400 | one or two lines of context |
| name | 'DM Sans', system-ui, sans-serif | 22px, 500 | attribution |
| role / tag | 'DM Sans' 19px · 'JetBrains Mono' 13px | 400 | role line, right-hand tag |

Size carries the emphasis, not weight. The serif stays at 400 even at 220px — a display sans at 800 would read as an advertisement, which is the register this template is trying to avoid.

## Layout

A column with three parts: a fixed head (accent rule + mono eyebrow), a flexible body that centres itself in whatever space is left, and a fixed foot separated by a hairline. Because the body is centred rather than top-aligned, a short statement and a long one both look composed without retuning the padding.

A working example canvas lives at `social-media/examples/linkedin-post-preview`.

### `<style>`

```html
<style>
:root{
  --li-paper:#f5f5f5; --li-ink:#2d3142; --li-muted:#4f5d75;
  --li-accent:#eb6c36; --li-hairline:#d5d8e0;
  --li-serif:'Source Serif 4',Georgia,serif;
  --li-sans:'DM Sans',system-ui,sans-serif;
  --li-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.li{width:1200px;height:1350px;background:var(--li-paper);color:var(--li-ink);
  font-family:var(--li-sans);padding:104px 96px;display:flex;flex-direction:column;}
.li-rule{width:48px;height:3px;background:var(--li-accent);margin-bottom:26px;}
.li-eyebrow{font-family:var(--li-mono);font-size:14px;font-weight:500;
  text-transform:uppercase;letter-spacing:.18em;color:var(--li-muted);}
.li-body{flex:1;display:flex;flex-direction:column;justify-content:center;}
.li-stat{font-family:var(--li-serif);font-weight:400;font-size:220px;line-height:.92;
  letter-spacing:-.03em;color:var(--li-accent);}
.li-statement{font-family:var(--li-serif);font-weight:400;font-size:84px;line-height:1.14;
  letter-spacing:-.02em;max-width:16ch;}
.li-lede{font-size:34px;font-weight:500;line-height:1.35;max-width:22ch;margin-top:30px;}
.li-support{font-size:24px;line-height:1.55;color:var(--li-muted);max-width:42ch;margin-top:26px;}
.li-foot{border-top:1px solid var(--li-hairline);padding-top:30px;
  display:flex;justify-content:space-between;align-items:flex-end;gap:32px;}
.li-name{font-size:22px;font-weight:500;line-height:1.4;}
.li-role{font-size:19px;color:var(--li-muted);line-height:1.45;}
.li-tag{font-family:var(--li-mono);font-size:13px;letter-spacing:.18em;
  text-transform:uppercase;color:var(--li-muted);white-space:nowrap;}
</style>
```

### Example — stat-led

The number does the work; the sans clause finishes the sentence the number started.

```html
<div class="li">
  <div>
    <div class="li-rule"></div>
    <div class="li-eyebrow">Field Report · Q2 2026</div>
  </div>
  <div class="li-body">
    <div class="li-stat">68%</div>
    <div class="li-lede">of operations teams still close the month by hand.</div>
    <p class="li-support">We asked 240 finance and operations leads across mid-market manufacturing. The tooling has existed for a decade. The habit has not moved.</p>
  </div>
  <div class="li-foot">
    <div>
      <div class="li-name">Northbridge Research</div>
      <div class="li-role">Operations Benchmark, second edition</div>
    </div>
    <div class="li-tag">northbridge.co</div>
  </div>
</div>
```

### Example — statement-led

No numeral, so the accent stays on the rule alone and the serif carries the whole canvas.

```html
<div class="li">
  <div>
    <div class="li-rule"></div>
    <div class="li-eyebrow">Notes on practice</div>
  </div>
  <div class="li-body">
    <h1 class="li-statement">The fastest team we studied wasn’t the one that shipped most. It was the one that decided fastest.</h1>
    <p class="li-support">Six months of delivery data across eleven product teams. The strongest predictor of throughput was time-to-decision — not headcount, not tooling.</p>
  </div>
  <div class="li-foot">
    <div>
      <div class="li-name">Dana Whitfield</div>
      <div class="li-role">Principal, Northbridge Research</div>
    </div>
    <div class="li-tag">Essay · 6 min</div>
  </div>
</div>
```

## Do's and Don'ts

**Do** keep the headline under about 25 words. If it needs more, it is an article, not a post.
**Do** put the source in the attribution block. A statistic without a source reads as invented, and on LinkedIn it will be asked about in the comments.
**Do** check it at 150px before publishing.
**Do** let the body block sit off-centre vertically — the flex centring already gives it a slight optical lift, which is what you want.

**Don't** add a logo lockup, a headshot and a URL. Pick one identifier.
**Don't** colour more than two elements with the accent.
**Don't** set the serif in bold to "make it pop" — increase the size instead.
**Don't** fill the whitespace. The empty third of the canvas is doing work: it is what makes the one claim look considered rather than shouted.
**Don't** stack a second stat below the first. Two numbers of equal size means the reader has to choose, and they will choose neither.

## Fonts

Three families, each with a local fallback so the canvas never renders blank:

- **Source Serif 4** — `'Source Serif 4', Georgia, serif` — headlines, numerals
- **DM Sans** — `'DM Sans', system-ui, sans-serif` — body, labels, attribution
- **JetBrains Mono** — `'JetBrains Mono', ui-monospace, monospace` — eyebrows and tags

These are named, not fetched. A canvas cannot pull fonts from Google Fonts or any other external host at render time, so unless the font files have been uploaded to the workspace and declared with an `@font-face` rule in the shared head, the browser will quietly fall back to Georgia, system-ui and ui-monospace. Nothing errors — the layout simply looks a little more ordinary than intended, which is easy to miss. See the `using-google-fonts` skill for the upload-and-declare steps; do that once and every canvas built from this template picks the real faces up.
