---
entity_type: skill
entity_id: x-post
created_at: '2026-08-16T23:17:20.381Z'
updated_at: '2026-08-16T23:17:53.414Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - social-media
  - template
  - x
  - marketing
name: X Post
description: >-
  A 1600×900 landscape card carrying one claim or one statistic, sized to stay
  readable inline in an X timeline.
applies_to:
  - social-media
  - artboard
  - marketing
loading: on-demand
status: draft
---
# X Post

A landscape card built around a single sentence. The whole graphic is one claim — a mono kicker to place it, a serif line to say it, a hairline footer to attribute it. Nothing else competes. Reach for it when a post needs a visual anchor in the timeline but the words are doing the work.

## When to use

Use it for a single claim, a headline finding, one statistic with its label, a launch announcement, or a quotable line from a longer piece. One idea per card. If you have three ideas, make three cards.

Do not use it for anything with structure — a comparison, a list, a process, a chart. Those need a template that can express relationship, not a card designed to hold one sentence. Do not use it as a screenshot substitute for a paragraph of body copy: past roughly 40 words the card stops being readable inline, which defeats the entire point. And do not use it where a plain text post would land harder — a card adds friction, so it should add meaning too.

## Canvas & legibility

**1600 × 900** (16:9). X renders an in-feed card at roughly 500–600px wide on desktop and 340–400px on mobile — call it a **3× to 4× reduction** from the canvas. Anything below about 24px on the canvas disappears at that size, which is why the smallest type here is the 16px mono footer and it is set in caps with wide tracking to survive.

There is **no fold**. Unlike a document, a social canvas is taken in as a single glance — every element is competing for that glance the moment the card loads. That is the argument for the low element count: kicker, headline, optional one-line support, footer. Four zones, and only one of them is loud.

**Word budget:**

| Zone | Budget | Hard cap |
|---|---|---|
| Kicker | 2–5 words | 40 characters |
| Headline | 8–14 words | 26 characters per line, 3 lines |
| Support line | 0–18 words | 52 characters per line, 2 lines |
| Footer | handle + source | 30 characters per side |
| **Whole card** | **under 40 words** | — |

If the headline does not fit in three lines at 76px, the sentence is too long — cut it rather than shrinking the type. Shrinking is what breaks it at mobile size.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | headline, numerals |
| muted | #4f5d75 | kicker, support line, footer |
| accent | #eb6c36 | the top rule, or the lead numeral — never both |
| hairline | #d5d8e0 | footer rule |

The accent marks **one** element. On a claim-led card that is the short rule above the kicker; on a stat-led card the numeral takes the accent and the rule drops to ink. A card with a coral rule *and* a coral numeral *and* a coral underline has no emphasis left to spend.

## Typography

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| kicker | 'JetBrains Mono', ui-monospace, monospace | 17px, 500, 0.18em caps | topic / date line |
| headline | 'Source Serif 4', Georgia, serif | 76px, 400, −0.02em | the claim |
| numeral | 'Source Serif 4', Georgia, serif | 220px, 400, −0.03em | stat-led variant |
| stat label | 'Source Serif 4', Georgia, serif | 52px, 400, −0.02em | what the numeral counts |
| support | 'DM Sans', system-ui, sans-serif | 26px, 400 | one line of context |
| footer | 'JetBrains Mono', ui-monospace, monospace | 16px, 0.14em caps | handle, source |

Mono sizes scale with the canvas, not with a habit — 17px here is the equivalent of 11px on a 1000px-wide diagram. Set the eyebrow relative to the frame width every time you retarget this layout.

## Layout

A single column at 96px side padding. The kicker sits top-left under a short accent rule; the headline block is vertically centred in the remaining space; the footer pins to the bottom behind a hairline, handle left and source right. The stat variant swaps the headline for a two-column grid — numeral left, label right, optically centred on the numeral.

### `<style>`

```html
<style>
:root{
  --xp-paper:#f5f5f5; --xp-ink:#2d3142; --xp-muted:#4f5d75;
  --xp-accent:#eb6c36; --xp-hairline:#d5d8e0;
  --xp-serif:'Source Serif 4',Georgia,serif;
  --xp-sans:'DM Sans',system-ui,sans-serif;
  --xp-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.xp{width:1600px;height:900px;background:var(--xp-paper);color:var(--xp-ink);
  font-family:var(--xp-sans);padding:80px 96px;display:flex;flex-direction:column;}
.xp-rule{width:56px;height:3px;background:var(--xp-accent);margin-bottom:24px;}
.xp-rule--ink{background:var(--xp-ink);}
.xp-kicker{font-family:var(--xp-mono);font-size:17px;font-weight:500;
  letter-spacing:.18em;text-transform:uppercase;color:var(--xp-muted);}
.xp-body{flex:1;display:flex;flex-direction:column;justify-content:center;}
.xp-headline{font-family:var(--xp-serif);font-size:76px;font-weight:400;
  line-height:1.14;letter-spacing:-.02em;max-width:26ch;}
.xp-sub{font-size:26px;line-height:1.5;color:var(--xp-muted);
  max-width:52ch;margin-top:30px;}
.xp-stat{display:grid;grid-template-columns:auto 1fr;gap:64px;align-items:center;}
.xp-numeral{font-family:var(--xp-serif);font-size:220px;font-weight:400;
  line-height:.86;letter-spacing:-.03em;color:var(--xp-accent);}
.xp-statlabel{font-family:var(--xp-serif);font-size:52px;font-weight:400;
  line-height:1.22;letter-spacing:-.02em;max-width:18ch;}
.xp-statnote{font-size:22px;line-height:1.5;color:var(--xp-muted);
  max-width:40ch;margin-top:18px;}
.xp-foot{display:flex;justify-content:space-between;align-items:baseline;
  border-top:1px solid var(--xp-hairline);padding-top:22px;
  font-family:var(--xp-mono);font-size:16px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--xp-muted);}
</style>
```

### Example — claim-led

```html
<div class="xp">
  <div>
    <div class="xp-rule"></div>
    <div class="xp-kicker">Field notes · Q3 2026</div>
  </div>
  <div class="xp-body">
    <h1 class="xp-headline">Most teams do not have a reporting problem. They have a decision problem.</h1>
    <p class="xp-sub">Dashboards multiplied. The number of decisions made per quarter did not.</p>
  </div>
  <div class="xp-foot">
    <span>@northbridge</span>
    <span>Operating Review 2026</span>
  </div>
</div>
```

### Example — stat-led

```html
<div class="xp">
  <div>
    <div class="xp-rule xp-rule--ink"></div>
    <div class="xp-kicker">Benchmark · 240 companies</div>
  </div>
  <div class="xp-body">
    <div class="xp-stat">
      <div class="xp-numeral">68%</div>
      <div>
        <div class="xp-statlabel">of weekly reports are read by fewer than three people</div>
        <p class="xp-statnote">Median across mid-market operations teams, surveyed May 2026.</p>
      </div>
    </div>
  </div>
  <div class="xp-foot">
    <span>@northbridge</span>
    <span>Source: internal survey</span>
  </div>
</div>
```

## Do's and Don'ts

**Do** keep the whole card under 40 words, and read it once at 25% zoom before shipping — that is the size it will actually be seen at.
**Do** let the headline break where the sentence breaks; a serif line ending on a preposition reads worse than an uneven ragged edge.
**Do** put the claim in the graphic and the nuance in the post text. The card is the hook, not the argument.
**Do** keep one accent element, and let the other rule fall back to ink.

**Don't** centre the type. Left-aligned ragged-right is the house setting, and it is what makes a 14-word headline scannable.
**Don't** add a logo lockup, a gradient, a drop shadow, or a border. Every one of them costs contrast the headline needs.
**Don't** shrink the headline to fit more words — cut words to fit the headline.
**Don't** use the support line to restate the headline. If it does not add a fact, delete it.

## Fonts

This template names three families with local fallback stacks, so it renders on any machine without a network request:

- Headline / numerals — `'Source Serif 4', Georgia, serif`
- Body and labels — `'DM Sans', system-ui, sans-serif`
- Kicker / footer — `'JetBrains Mono', ui-monospace, monospace`

A canvas cannot fetch fonts from Google Fonts or any other external host. If the first family in a stack is not installed and declared, the browser **falls back silently** — the layout still renders, just in Georgia and your system sans, and nothing warns you. To get the real faces, upload the font files into the workspace and declare them with `@font-face` in the shared head; see the `using-google-fonts` skill for that workflow. Check the rendered preview after any font change rather than trusting the markup.

## Building it in Studiograph

Create an artboard entry with one frame at 1600×900, background `#f5f5f5`. Put the `<style>` block in the shared head and the `.xp` markup in the frame content. Keep the frame at fixed height rather than auto — a social canvas is a fixed crop, and letting it grow hides the fact that your copy no longer fits. See the working example at `social-media/examples/x-post-preview`.
