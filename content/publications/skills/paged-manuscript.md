---
entity_type: skill
entity_id: paged-manuscript
created_at: '2026-08-14T22:02:17.483Z'
updated_at: '2026-08-16T22:50:34.203Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - publication
  - template
  - book
  - manuscript
  - editorial
name: Paged Manuscript
description: >-
  A book-style manuscript page — drop-cap chapter openers, a running header
  carrying the chapter title, folio numbers, and justified serif body text, in
  the tradition demonstrated by Paged.js, the open-source CSS Paged Media
  engine. Use for long-form manuscripts, novellas, and any content meant to read
  like a printed book.
applies_to:
  - publication
  - document
  - report
license: MIT
loading: on-demand
source: 'github.com/pagedjs/pagedjs (MIT License, Adam Hyde / pagedjs)'
status: draft
---
# Paged Manuscript

A printed-book page in the tradition demonstrated by **Paged.js**, the open-source engine that turns styled HTML into paginated, printable books using real CSS Paged Media rules (running headers, footnotes, page counters). This template borrows its book-design conventions: a drop-cap chapter opener, a running header carrying the chapter title, and centered folio numbers.

## When to use

Long-form manuscripts, novellas, essays collections, any content meant to read like a printed book rather than a business document — a considered, literary register. Also a good fit for a "letter from the founder" or similar reflective long-form piece that wants that literary weight.

Avoid it for reference material that needs to be scanned rather than read start to finish — the drop caps and justified serif column assume a linear reader.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #FAF7F2 | warm ivory |
| ink | #201C16 | body text |
| muted | #8A7F6D | running header, folio |
| rule | #D8CFC0 | thin chapter-opener rule |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| chapter-num | Cormorant Garamond Italic | 20px | "Chapter One" kicker |
| chapter-title | Newsreader | 34px | chapter title |
| drop-cap | Cormorant Garamond Italic | 72px | first letter of chapter |
| body | Newsreader | 12pt / 1.6, justified | main text |
| running-head | Newsreader Italic | 9pt | header chapter title |
| folio | Newsreader | 9pt | page number |

## Layout & pagination

Page size **816×1056**. Chapter openers start on a fresh page (force with `style="break-before:column"`), with the chapter kicker and title centered near the top and a large drop cap opening the first paragraph. Every other page carries a running header (chapter title, small caps/italic) and a centered folio at the bottom — set both via the publication frame's `pagination.furniture` and `pagination.pageNumbers`.

## Building it in Studiograph

Create a **publication** entry with a **single frame at 816×1056** — US Letter at 96dpi. A book is not one frame per page. The frame is paginated, so Studiograph pours the whole manuscript through that page box and breaks it into however many pages the text needs. Insert a paragraph in chapter two and every folio after it renumbers itself.

Set the frame's `background` to `#FAF7F2`. The warm ivory has to be on the frame, not just in CSS, or the canvas paints white behind the page and the register is gone before a word is read.

**The measure is 520px, held by `max-width`.** The content box is 816 − 96 − 96 = 624px, and `.pm-doc` caps at 520px and centers inside it. That gives roughly 65 characters at 12pt — the classic book measure, and short enough that justification does not open rivers.

### `shared.head`

```html
<style>
/* Fonts — see the Fonts section below. Until Newsreader and Cormorant Garamond
   Italic are uploaded to the workspace and declared with @font-face, both
   stacks fall back to Georgia. */

*{box-sizing:border-box;}

/* ---- the text block: 520px measure, justified serif ---- */
.pm-doc{
  font-family:'Newsreader',Georgia,serif;
  color:#201C16;
  font-size:12pt;
  line-height:1.6;
  max-width:520px;
  margin:0 auto;
}

/* ---- chapter opener: centered, with air below the title ---- */
.pm-chapter-open{text-align:center;margin-bottom:40px;}
.pm-chapter-kicker{
  font-family:'Cormorant Garamond',Georgia,serif;
  font-style:italic;
  font-size:20px;
  color:#8A7F6D;
  margin:0 0 10px;
}
.pm-chapter-title{font-size:34px;font-weight:400;margin:0 0 40px;}

/* ---- body: justified, spaced (not indented) ---- */
.pm-p{text-align:justify;margin:0 0 16px;}

/* The first paragraph of a chapter is flush left, NOT justified. A 72px
   floated cap leaves so little room on the first three lines that justifying
   them tears word spacing apart. This one override is the whole trick. */
.pm-first{text-align:left;}

/* ---- drop cap: one letter, italic, floated ---- */
.pm-dropcap{
  font-family:'Cormorant Garamond',Georgia,serif;
  font-style:italic;
  font-size:72px;
  line-height:0.75;
  float:left;
  padding-right:8px;
  padding-top:4px;
  color:#201C16;
}
</style>
```

Note what is *not* here: no paragraph indent. This template separates paragraphs with 16px of space rather than a first-line indent. That choice has a consequence — see the scene break below.

### Pagination

Set the frame's `pagination` to:

```json
{
  "furniture": {
    "header": {
      "first": "<div></div>",
      "middle": "<div style=\"text-align:center;font-family:'Newsreader',Georgia,serif;font-style:italic;font-size:9pt;color:#8A7F6D;\">The Long Way Round</div>",
      "last": "<div style=\"text-align:center;font-family:'Newsreader',Georgia,serif;font-style:italic;font-size:9pt;color:#8A7F6D;\">The Long Way Round</div>"
    }
  },
  "margins": { "top": 96, "right": 96, "bottom": 90, "left": 96 },
  "pageNumbers": { "showOnFirst": false, "position": "bottom-center", "format": "{n}",
                   "fontSize": 12, "color": "#8A7F6D" }
}
```

Four things are doing real work here.

**The folio is set to match the running head.** Left alone, a page number renders as a *folio* by default — the document's own family and weight, at 0.8× its body size and 0.6 of its ink. On this template that alone gets you close to the book treatment: Newsreader, a shade under 10pt, softened against the ivory. The two fields above take it the rest of the way, pinning it to the palette's muted `#8A7F6D` and an exact 9pt so the folio and the running head read as one pair of chrome rather than two near-misses. Both overrides are absolute — whatever you set renders exactly, at full strength — so this is also the pattern to copy whenever a house style dictates the numeral.

**`header.first` is an empty div, and `showOnFirst` is `false`.** A chapter-opening page carries neither a running head nor a folio — that is standard book practice, not an oversight. Crowning a chapter title with the same chapter title reads as a mistake, and the folio would compete with the drop cap for the reader's first glance. Use an empty `<div>` rather than omitting the slot, so the intent is explicit to the next person reading the JSON. It is not load-bearing for layout: **furniture is out-of-flow and never reserves space.** The text block starts at the same height on every page because `margins.top` is uniform, not because a header is present — which is also why a band taller than its margin runs into the body rather than pushing it down. If that ever happens, the render reports `furnitureOverflow` with the exact margin to set.

**Furniture is styled inline, not with classes.** The header renders outside `.pm-doc`, so none of the document's type rules reach it. Either write the styles inline, as above, or add unscoped classes to `shared.head`. Inline is safer: it survives being copied into a new publication that has a different stylesheet.

**Margins are asymmetric top-to-bottom** — 96 top, 90 bottom. The optical center of a page sits slightly above the geometric one, so an evenly-margined text block looks like it is sinking.

To force a new chapter onto a fresh page, put `style="break-before:column"` on the chapter opener.

### Example — chapter opening with drop cap

```html
<div class="pm-doc">
  <div class="pm-chapter-open">
    <div class="pm-chapter-kicker">Chapter One</div>
    <h1 class="pm-chapter-title">The Long Way Round</h1>
    <p class="pm-p pm-first"><span class="pm-dropcap">T</span>he house had stood empty for eleven years, and in that time the garden had made its own decisions about what to keep. Roses climbed where the fence had fallen; a stone path vanished under moss so complete it looked deliberate, an idea about paths rather than a path itself.</p>
    <p class="pm-p">Mara stood at the gate for a long moment before she let herself in. She had rehearsed this arrival a hundred times on the drive up, and none of the rehearsals had prepared her for how small the house looked now, after everything.</p>
  </div>

  <p class="pm-p">The key still worked, which surprised her more than it should have. Locks do not know about grief; they only know about metal, and the metal had not changed.</p>
</div>
```

The drop cap takes exactly one character, and the rest of the word stays in the paragraph — `<span class="pm-dropcap">T</span>he house`, not `<span>The</span> house`. Two capped letters break the float geometry and read as a typo.

`.pm-chapter-open` is `text-align:center`, and it wraps the first two paragraphs as well as the title. That is intentional: `.pm-p` re-declares its own alignment, so the paragraphs stay justified inside a centered block. Only add prose to that wrapper if you want it governed by the opener's 40px bottom margin.

### Example — running body with a scene break

Because paragraphs are separated by space rather than indented, a scene break needs a *visible* mark. Extra whitespace alone is invisible here — the reader cannot tell a scene change from a slightly loose paragraph gap, and if the break lands at a page boundary it disappears entirely.

Add this to `shared.head`. It uses the muted tone already in the palette, and the `text-indent` compensates for the trailing letter-space so the asterisks sit optically centered:

```html
<style>
.pm-break{
  text-align:center;
  color:#8A7F6D;
  font-size:14pt;
  letter-spacing:0.5em;
  text-indent:0.5em;
  margin:26px 0 22px;
}
</style>
```

```html
<p class="pm-p">Inside, dust sat over everything in a single even layer, like snow that had chosen to fall indoors instead of out. She found herself moving carefully, the way one moves through a room where a sound might wake someone &mdash; though there was no one left to wake.</p>

<p class="pm-break">* * *</p>

<p class="pm-p">By evening she had opened every window on the ground floor, and the house had begun, slowly, to remember how to be a house again. It was not forgiveness. It was closer to a truce.</p>
<p class="pm-p">She would stay the week, she told herself. She would decide the rest once the dust had somewhere to go.</p>
```

If you want the thin `#D8CFC0` rule from the palette instead of asterisks, swap the mark for `<div class="pm-break"><span style="display:inline-block;width:60px;height:1px;background:#D8CFC0;"></span></div>`. Either works; do not use both in one manuscript.

## Do's and Don'ts

**Do** — keep the body justified and the drop-cap paragraph flush left, which is what `.pm-first` exists for; hold the measure at 520px; give the drop cap exactly one letter; leave the chapter-opening page without running head or folio; reserve Cormorant Garamond Italic for the two display moments (kicker and drop cap); set the frame background to `#FAF7F2`; force chapter openers onto a fresh page with `break-before:column`; mark scene breaks visibly.

**Don't** — set body text in Cormorant, which is a display face and turns illegible at 12pt; justify the paragraph that carries the drop cap; add a third type size to the chapter opener (kicker and title are the full hierarchy); use pure white paper — the warm ivory is the register, and white makes the whole thing read as a Word document; start a chapter mid-page; indent paragraphs *and* space them, which double-marks every break; put a running head on the opening page.

## Fonts

Two families, sharply divided by job.

**Newsreader** — the reading face. Body, chapter title, and the running head. Regular weight throughout; there is no bold anywhere in this template.

**Cormorant Garamond Italic** — display only. The chapter kicker and the drop cap, and nothing else.

```css
/* body, chapter title, running head */
font-family:'Newsreader', Georgia, serif;

/* chapter kicker, drop cap */
font-family:'Cormorant Garamond', Georgia, serif; font-style:italic;
```

Both families must be uploaded to the workspace and declared with `@font-face` before they render — see the `using-google-fonts` skill for the pattern. Until then the page falls back silently to Georgia. The failure gives no warning: frames run under a content-security policy that blocks external stylesheets, so a Google Fonts `<link>` will neither load nor error.

**A real italic cut is not optional here.** Both display moments — the kicker and the 72px drop cap — are italic Cormorant Garamond, and the running head is italic Newsreader. If the italic face is missing, the browser synthesises an oblique by shearing the roman. On a sans that is merely ugly; on a Garamond it destroys the letterforms, because a true italic *a*, *e* and *g* are different shapes, not slanted ones. At 72px on a drop cap that difference is the first thing a reader sees. Upload the italic file as its own `@font-face` with `font-style:italic`.

One gap worth closing: the companion currently declares Newsreader Regular only, while the running-head furniture asks for Newsreader Italic. That head is therefore synthesised today. Upload the Newsreader italic cut and declare it alongside the roman.

## See it rendered

Open [[paged-manuscript-template]] — **Paged Manuscript (Template)**, the companion `publication` entry in this folder's `examples` — to see the chapter opener and a following page live and paginated. Duplicate it to start a real manuscript.

## Source & license

Adapted from [Paged.js](https://github.com/pagedjs/pagedjs), created by Adam Hyde and maintained by the pagedjs community, MIT-licensed. License verified directly against the repository's `LICENSE.md` file on 2026-08-14. The book-design conventions (running headers, drop caps, folios) are standard practice that Paged.js's own tooling and documentation exist to support; the exact HTML/CSS here is an original adaptation for Studiograph's pagination model.
