---
entity_type: skill
entity_id: quote-card
created_at: '2026-08-16T23:21:09.801Z'
updated_at: '2026-08-16T23:22:01.581Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - social-media
  - template
  - quote
  - marketing
name: Quote Card
description: >-
  A platform-agnostic pull-quote card — 1080×1080 square by default, with a
  1200×630 landscape variant — built around the quote mark, the measure, and a
  two-line attribution.
applies_to:
  - social-media
  - artboard
  - marketing
loading: on-demand
status: draft
---
# Quote Card

A pull-quote and who said it. Three decisions carry the whole design: the quote mark, the measure, and the attribution hierarchy. Get those right and the card needs nothing else — no portrait, no card border, no logo bar. It is the most reusable template in the set because a square card with a quote in it works on every platform.

## When to use

Use it for a pull-quote from a client, a line from a talk or podcast, a testimonial, a sentence worth lifting out of a longer piece, or a line from a press mention. It is the default when someone says "make a graphic of this quote."

Do not use it for something nobody said. A claim you wrote yourself is a statement, and it belongs in the X Post template — dressing an internal opinion in quote marks and attributing it to a company reads as manufactured. Do not use it for quotes over about 40 words: past that the type has to shrink below the point where the card is readable in-feed, and you should be posting an excerpt with a link instead. And do not stack multiple quotes on one card; two quotes is two cards.

## Canvas & legibility

**1080 × 1080** square by default. Square is the safe crop everywhere — it survives Instagram, LinkedIn, a Slack unfurl, and a slide. Feed rendering is roughly 400–500px wide, a **2× to 2.5× reduction**, which is gentler than the other social formats and is why this template can carry a full sentence.

**Landscape variant: 1200 × 630.** That is the Open Graph ratio — link previews on LinkedIn, Facebook, Slack, and most blog cards. Same content, wider measure, smaller type: quote drops to 44px with a 44ch measure, the mark drops to 110px, and padding goes to 72px vertical / 88px horizontal. Do not simply letterbox the square card — re-set the measure, or the quote will sit in a narrow column with two empty flanks.

**No fold.** The card is taken in as a single object, so the attribution is competing with the quote from the first instant. That is why the attribution is small and set below a hairline: it needs to be found second, not seen simultaneously.

**Word budget:**

| Zone | Budget | Hard cap |
|---|---|---|
| Quote (square, 54px) | 18–34 words | **28–34 characters per line**, 40 absolute; 6 lines |
| Quote (short variant, 64px) | 8–16 words | 22–26 characters per line; 4 lines |
| Quote (landscape, 44px) | 16–30 words | 40–46 characters per line; 5 lines |
| Name | — | 30 characters |
| Role + organisation | — | 40 characters |

## The measure

Measure is the one number that decides whether a quote card reads well. Too wide and the eye loses the line return; too narrow and a sentence shatters into fragments.

For display serif at this size the target is **28–34 characters per line** — set as `max-width:30ch` at 54px, which lands around 810px inside a 896px content width. Forty characters is the absolute ceiling. If the quote is short enough to run at 64px, tighten to `24ch` (roughly 22–26 characters) so the shorter lines still read as a block rather than a list.

Let the lines break naturally and accept a ragged right. Do not justify, and do not hand-break lines to make a shape — an even ragged edge is a byproduct of a correct measure, not something to force.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | quote, name |
| muted | #4f5d75 | role, organisation |
| accent | #eb6c36 | the quote mark, **or** the attribution rule — never both |
| hairline | #d5d8e0 | rule above the attribution |

The quote mark is the natural home for the accent: it is a single glyph, it sits at the entry point, and colouring it lets the quote itself stay ink. If you would rather mark the attribution, set the quote mark in ink and put a short coral rule above the name instead.

## Typography

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| quote mark | 'Source Serif 4', Georgia, serif | 150px, 400 | opening glyph |
| quote | 'Source Serif 4', Georgia, serif | 54px, 400, −0.02em | the sentence |
| quote (short) | 'Source Serif 4', Georgia, serif | 64px, 400, −0.02em | 8–16 word quotes |
| name | 'DM Sans', system-ui, sans-serif | 26px, 500 | who said it |
| role | 'JetBrains Mono', ui-monospace, monospace | 15px, 0.16em caps | title, organisation |

Attribution hierarchy is the second design decision. Three levels, and they must be clearly ranked: the quote is large serif, the name is mid-size sans at medium weight, the role is small mono in muted. Setting the name and the role at the same size — a common default — makes the reader do work to find out who is speaking. The mono role line also does quiet structural work: it visually terminates the card.

Set the quote in the serif at 400 weight. Italics are not needed; the quote mark already declares that this is speech, and italic at 54px costs readability.

## Layout

Single column at 92px side padding. The quote mark and the quote form one unit — mark directly above the sentence — vertically centred as a block in the space above the attribution, which pins to the bottom behind a hairline. Keeping the mark attached to the quote rather than parked in a top corner is what stops it reading as an orphaned ornament. No portrait, no card frame — the whitespace around the measure is the design.

### `<style>`

```html
<style>
:root{
  --qc-paper:#f5f5f5; --qc-ink:#2d3142; --qc-muted:#4f5d75;
  --qc-accent:#eb6c36; --qc-hairline:#d5d8e0;
  --qc-serif:'Source Serif 4',Georgia,serif;
  --qc-sans:'DM Sans',system-ui,sans-serif;
  --qc-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.qc{width:1080px;height:1080px;background:var(--qc-paper);color:var(--qc-ink);
  font-family:var(--qc-sans);padding:96px 92px;display:flex;flex-direction:column;}
.qc-mark{font-family:var(--qc-serif);font-size:150px;font-weight:400;
  line-height:.78;height:92px;margin-bottom:8px;color:var(--qc-accent);}
.qc-mark--ink{color:var(--qc-ink);}
.qc-body{flex:1;display:flex;flex-direction:column;justify-content:center;}
.qc-quote{font-family:var(--qc-serif);font-size:54px;font-weight:400;
  line-height:1.3;letter-spacing:-.02em;max-width:30ch;}
.qc-quote--lg{font-size:64px;line-height:1.26;max-width:24ch;}
.qc-attr{border-top:1px solid var(--qc-hairline);padding-top:28px;}
.qc-rule{width:48px;height:3px;background:var(--qc-accent);margin-bottom:22px;}
.qc-name{font-size:26px;font-weight:500;line-height:1.3;}
.qc-role{font-family:var(--qc-mono);font-size:15px;letter-spacing:.16em;
  text-transform:uppercase;color:var(--qc-muted);margin-top:12px;}
</style>
```

### Example — full sentence, accent mark

```html
<div class="qc">
  <div class="qc-body">
    <div class="qc-mark">&ldquo;</div>
    <p class="qc-quote">We stopped asking what the numbers were and started asking what we would do differently if they changed.</p>
  </div>
  <div class="qc-attr">
    <div class="qc-name">Dana Whitfield</div>
    <div class="qc-role">VP Operations · Halcyon Freight</div>
  </div>
</div>
```

### Example — short quote, accent on the attribution

```html
<div class="qc">
  <div class="qc-body">
    <div class="qc-mark qc-mark--ink">&ldquo;</div>
    <p class="qc-quote qc-quote--lg">The report was never the deliverable. The decision was.</p>
  </div>
  <div class="qc-attr">
    <div class="qc-rule"></div>
    <div class="qc-name">Marcus Reyes</div>
    <div class="qc-role">Head of Strategy · Ardent Group</div>
  </div>
</div>
```

## Do's and Don'ts

**Do** hold the measure between 28 and 34 characters, and check it by counting a middle line rather than trusting the look.
**Do** rank the three attribution levels by size, weight, and colour together — one axis of difference is not enough.
**Do** quote people accurately. Tighten with an ellipsis if you must, but never rewrite inside quote marks.
**Do** use the short variant when the quote is short. Running 12 words at 54px leaves a hole the card cannot fill.

**Don't** add a portrait, a rounded card, a drop shadow, or a coloured background block. Every one of them turns an editorial card into a testimonial widget.
**Don't** set the quote in italic, or in caps, or centred. All three fight a long serif measure.
**Don't** colour the quote mark *and* the rule *and* the name. One accent, chosen deliberately.
**Don't** let the attribution outgrow the quote — if the name needs to be big, the quote is not carrying the card.

## Fonts

This template names three families with local fallback stacks, so it renders anywhere without a network request:

- Quote mark and quote — `'Source Serif 4', Georgia, serif`
- Name — `'DM Sans', system-ui, sans-serif`
- Role — `'JetBrains Mono', ui-monospace, monospace`

A canvas cannot fetch fonts from Google Fonts or any other external host. If the first family is not installed and declared, the browser **falls back silently** to Georgia and your system sans — the card still renders, and nothing warns you. This matters more here than elsewhere: measure is set in `ch` units, so a fallback face with different metrics changes how many characters fit per line and can push a five-line quote to six. Upload the font files into the workspace and declare them with `@font-face` in the shared head; see the `using-google-fonts` skill. Re-check the rendered preview and re-count the measure after any font change.

## Building it in Studiograph

Create an artboard entry with one frame at 1080×1080, background `#f5f5f5`. Put the `<style>` block in the shared head and the `.qc` markup in the frame content. For the landscape variant add a second frame at 1200×630 with the adjusted sizes above rather than rescaling the square one. Keep both frames at fixed height — an overflowing quote is a signal to cut words, and auto height would hide it. See the working example at `social-media/examples/quote-card-preview`.
