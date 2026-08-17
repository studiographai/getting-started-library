---
entity_type: skill
entity_id: tufte-essay
created_at: '2026-08-14T21:23:54.499Z'
updated_at: '2026-08-16T22:50:51.584Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - publication
  - template
  - essay
  - scholarly
  - sidenotes
name: Tufte Essay
description: >-
  Scholarly essay layout with running sidenotes and margin asides in the
  tradition of Edward Tufte's book design — a wide right margin carries
  citations, asides, and small notes alongside the main text column, so asides
  never interrupt the argument. Use for research essays, in-depth explainers,
  and analytical reports.
applies_to:
  - publication
  - document
  - report
license: MIT
loading: on-demand
source: 'github.com/edwardtufte/tufte-css (MIT License, Dave Liepmann)'
status: draft
---
# Tufte Essay

A scholarly essay page modeled on **Tufte CSS**, the open-source stylesheet that recreates the sidenote-and-margin-figure typography of Edward Tufte's books in plain HTML. The main column carries the argument; a wide right margin carries citations, asides, and small figures that would otherwise interrupt the flow as footnotes.

## When to use

Research essays, in-depth explainers, analytical or research-adjacent reports, anything with a lot of "by the way" asides, citations, or small supporting figures that shouldn't break the reader's momentum. It reads as serious and unhurried — closer to a printed monograph than a business memo.

Avoid it for short, punchy content or anything meant to be skimmed fast — the wide margin and long-form serif body assume a reader settling in, not scanning.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #FFFFF8 | warm off-white — Tufte's own signature background |
| ink | #111111 | body text |
| muted | #666666 | sidenotes, captions, page numbers |
| rule | #CCCCCC | thin section rules |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| title | Lora | 40px | essay title |
| subtitle | Lora Italic | 20px | subtitle/dek |
| body | Lora | 15px / 1.6 | main column |
| sidenote | Lora | 11px / 1.4 | margin notes |
| h2 | Lora Italic | 22px | section heading |

## Layout & pagination

Page size **816×1056** (US Letter). Main text column runs about 4.6in wide on the left, with a narrower note column beside it carrying asides level with the paragraph they annotate. The note column lives *inside* the text block, not in the page margin — so keep the page margins asymmetric with a **narrow** right margin, which is what leaves the block wide enough to hold both columns.

## Building it in Studiograph

Create a **publication** entry with a **single frame at 816×1056** — US Letter at 96dpi. Do not author a frame per page. The frame is paginated: Studiograph pours the whole essay through that page box and breaks it into as many pages as the argument needs, renumbering as you edit.

Set the frame's `background` to `#FFFFF8`. The warm off-white is Tufte's own, and it has to be on the frame — pure white behind the page reads as a web article rather than a monograph.

**The arithmetic that makes the layout work.** The content box is 816 − 96 (left) − 40 (right) = **680px**. Inside it, `.te-row` splits into a 440px body column, a 28px gutter, and a 212px note column. That is the whole geometry, and every number in the CSS follows from it.

### `shared.head`

```html
<style>
/* Fonts — see the Fonts section below. Until Lora (roman AND italic) is
   uploaded to the workspace and declared with @font-face, this stack falls
   back to Georgia. */

*{box-sizing:border-box;}

:root{
  --te-paper:#FFFFF8;
  --te-ink:#111111;
  --te-muted:#666666;
  --te-rule:#CCCCCC;
  --te-serif:'Lora',Georgia,serif;
}

.te-doc{font-family:var(--te-serif);color:var(--te-ink);}

/* ---- masthead: kicker, title, dek, byline ----
   The byline's bottom border is the only horizontal rule in the template.
   It closes the masthead; everything after it is the essay. */
.te-kicker{
  font-size:12px;text-transform:uppercase;letter-spacing:0.14em;
  color:var(--te-muted);margin-bottom:8px;
}
.te-h1{font-size:40px;font-weight:400;line-height:1.1;margin:0 0 10px;}
.te-subtitle{font-style:italic;font-size:20px;color:var(--te-muted);margin:0 0 14px;}
.te-byline{
  font-size:13px;color:var(--te-muted);
  margin:0 0 36px;padding-bottom:20px;border-bottom:1px solid var(--te-rule);
}

/* ---- body: the 440px measure, declared on the paragraph itself ---- */
.te-p{font-size:15px;line-height:1.6;max-width:440px;margin:0 0 18px;}

/* ---- the sidenote mechanism ----
   A two-column grid: a FIXED 440px body column and whatever is left for the
   note. Fixed, not 1fr, because plain .te-p outside a row is also capped at
   440px — so the measure is identical whether a paragraph has a note or not.
   A fractional column would make the body jog wider on unannotated rows.
   align-items:start tops the note level with the paragraph's first line. */
.te-row{
  display:grid;
  grid-template-columns:440px 1fr;
  column-gap:28px;
  margin-bottom:18px;
  align-items:start;
}
.te-row .te-p{margin-bottom:0;}   /* the row owns the 18px gap, not the p */
.te-note{font-size:11px;line-height:1.45;color:var(--te-muted);margin:0;padding-top:2px;}

/* ---- epigraph ---- */
.te-epigraph{
  max-width:440px;font-style:italic;font-size:17px;line-height:1.5;
  padding-left:20px;border-left:2px solid var(--te-rule);
  margin:28px 0;color:var(--te-ink);
}
.te-attr{display:block;font-style:normal;font-size:12px;color:var(--te-muted);margin-top:8px;}

/* ---- section heading: italic is the ONLY signal ----
   No weight change, no color change, barely a size jump. */
.te-h2{font-style:italic;font-weight:400;font-size:22px;margin:32px 0 14px;}

.tok{background:transparent;}
</style>
```

### Pagination

Set the frame's `pagination` to:

```json
{
  "margins": { "top": 90, "right": 40, "bottom": 84, "left": 96 },
  "pageNumbers": { "position": "bottom-center", "format": "{n}" }
}
```

**The 40px right margin is the single most important number in this template, and it is counter-intuitive.** The instinct is to set a *wide* right margin "to leave room for the notes." That is backwards. The notes are grid siblings inside the text block, so a wide right page margin shrinks the text block and squeezes the note column to nothing. The narrow right margin is what gives the notes their 212px.

No `furniture`. There is no running head — the byline rule at the top of page one is the only chrome besides the folio.

### How the sidenote actually works

It is not a float, not a footnote, and not absolutely positioned. `.te-row` is a two-column CSS grid holding exactly one `.te-p` and one `.te-note`. The note sits beside that paragraph and nowhere else.

Three consequences worth knowing before you write:

- **The note aligns to the paragraph, not to a line.** `align-items:start` levels the note's top with the paragraph's first line. You cannot anchor a note to the fourth sentence. If a note needs to land lower, split the paragraph.
- **One note per row.** Two `.te-note` elements in one `.te-row` will stack into the same grid cell and overlap. Use a second row.
- **A row breaks as a unit's start.** If a `.te-row` crosses a page boundary the note stays with the top of its paragraph, which may leave it stranded at the foot of a page. Keep annotated paragraphs to four or five lines.

### Example — a paragraph with a margin sidenote

```html
<div class="te-row">
  <p class="te-p">This is easy to forget from inside a design team, where every option feels equally available and equally considered. It rarely is, outside the room.</p>
  <p class="te-note">A default is not a neutral starting point — it is itself a design choice, and often the most consequential one a team makes.</p>
</div>
```

Unannotated paragraphs need no wrapper — just a bare `.te-p`, which carries the same 440px measure:

```html
<p class="te-p">The convenient path — the one requiring no decision at all — tends to win by default, regardless of whether it best serves the person using the product.</p>
```

Keep notes to two or three lines. At 11px in a 212px column, four lines of note beside three lines of body inverts the visual weight and the aside starts reading as the main argument.

### Example — masthead, epigraph and section heading

```html
<div class="te-doc">
  <div class="te-kicker">Essay</div>
  <h1 class="te-h1">The Cost of Convenience</h1>
  <p class="te-subtitle">A short case for slower defaults</p>
  <p class="te-byline">By <span class="tok">Sample Author</span> · August 2026</p>

  <p class="te-p">Every product decision is, in some sense, a decision about defaults. When a settings panel ships with a value already selected, most people never touch it again, which means the default is not a starting point so much as the final answer for the overwhelming majority of users.</p>

  <blockquote class="te-epigraph">&ldquo;We shape our tools, and thereafter our tools shape us.&rdquo;<span class="te-attr">— often attributed to Marshall McLuhan</span></blockquote>

  <h2 class="te-h2">Why defaults are sticky</h2>
  <p class="te-p">Three forces keep a default in place long after it stops serving anyone well: the effort of finding the setting, the risk of breaking something by changing it, and simple unawareness that an alternative exists at all.</p>
</div>
```

The `tok` span marks a fill-in placeholder and is styled to be invisible. The `.te-attr` inside the epigraph resets `font-style` back to normal — an italic attribution under an italic quote would read as part of the quotation.

Note that `.te-h2` is distinguished from body text almost entirely by being italic. There is no bold, no color shift, no rule. That restraint is the template: hierarchy comes from style and size, never from weight or color.

### Example — a full-width figure with caption

The one element permitted to break the 440px measure. Because it spans the entire 680px text block — body column plus gutter plus note column — it reads as a deliberate widening rather than an image that overflowed.

Add these rules to `shared.head`:

```html
<style>
/* 680px = the content box: 816 − 96 left margin − 40 right margin.
   If you change the page margins, change this number to match. */
.te-figure{width:680px;margin:28px 0;}
.te-figure img{width:100%;display:block;}
.te-figcaption{
  font-size:11px;line-height:1.45;color:var(--te-muted);
  margin-top:8px;max-width:440px;
}
</style>
```

```html
<figure class="te-figure">
  <img src="/api/assets/YOUR-ASSET-ID/defaults-chart.png" alt="Share of users who never change a default setting, by product category">
  <figcaption class="te-figcaption">Across eleven consumer products, between 78% and 94% of users never changed the shipped default. The variance says less about the users than about how visible each setting was.</figcaption>
</figure>
```

The caption stays at 440px even though the figure is 680px. A caption set to full width would out-measure the body text, and a caption that reads wider than the argument it supports looks like a mistake. Caption type matches `.te-note` exactly — 11px, `--te-muted` — so every piece of secondary text in the essay is the same voice.

## Do's and Don'ts

**Do** — keep the body at 440px, always; use `.te-row` for asides instead of burying them in parentheticals, which is the entire reason to choose this template; keep notes to two or three lines; let italic Lora carry every heading and the subtitle; keep the paper at `#FFFFF8`; hold all secondary text — notes, captions, byline, attribution — at `--te-muted`; let the byline rule and the epigraph border be the only rules on the page.

**Don't** — set a wide right page margin to "make room" for notes, which does the exact opposite; widen the body past 440px; put two notes in one `.te-row`; use bold anywhere, since the palette and type scale offer no bold and hierarchy comes from italic and size; add an accent color — this palette deliberately has none, and a single colored heading collapses the register; give a figure caption the figure's full width; use pure white paper.

## Fonts

**Lora** is the only family, in two cuts: roman and italic.

```css
--te-serif: 'Lora', Georgia, serif;
```

Lora must be uploaded to the workspace and declared with `@font-face` before it renders — see the `using-google-fonts` skill for the pattern. Until then the page falls back silently to Georgia. Nothing warns you: frames run under a content-security policy that blocks external stylesheets, so a Google Fonts `<link>` will neither load nor report an error.

**The italic cut is load-bearing, more so than in any other template here.** Three of the five type roles are italic — the subtitle, every `<h2>`, and the epigraph — and italic is the *only* thing distinguishing a section heading from body text, since there is no weight change and no color change. If the italic face is missing, the browser synthesises an oblique by shearing the roman. On Lora, a transitional serif, that produces a slanted roman rather than a true italic: the letterforms are wrong, the color on the page is wrong, and the heading hierarchy flattens into "body text at a slight angle." Upload the italic file as its own `@font-face` declaration with `font-style:italic` — declaring one file for both styles is what causes the synthesis.

## See it rendered

Open [[tufte-essay-template]] — **Tufte Essay (Template)**, the companion `publication` entry in this folder's `examples` — to see this layout live, paginated, with sample sidenotes in place. Duplicate that entry and replace the sample copy to start a real essay.

## Source & license

Adapted from [Tufte CSS](https://github.com/edwardtufte/tufte-css) by Dave Liepmann, MIT-licensed. License verified directly against the repository's `LICENSE` file on 2026-08-14. The sidenote/margin-figure technique and type scale are the source's; fonts, exact measurements, and the Studiograph pagination wiring (furniture, margins, page numbers) are an original adaptation for this workspace.
