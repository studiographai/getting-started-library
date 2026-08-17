---
entity_type: skill
entity_id: latex-article
created_at: '2026-08-14T21:24:06.137Z'
updated_at: '2026-08-16T22:50:23.732Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - publication
  - template
  - academic
  - paper
  - serif
name: LaTeX Article
description: >-
  Classic academic-paper layout — centered title block, abstract box, numbered
  section headings, and footnotes in a serif column that reads like a typeset
  LaTeX article. Use for research papers, technical reports, and white papers
  that should feel rigorously academic.
applies_to:
  - publication
  - document
  - report
license: MIT
loading: on-demand
source: 'github.com/vincentdoerig/latex-css (MIT License, Vincent Dörig)'
status: draft
---
# LaTeX Article

A single-column academic paper built on **latex.css**, an open-source stylesheet that makes plain HTML look like a typeset LaTeX article — centered title block, an indented abstract, numbered section headings, and a serif body column with the tight, formal rhythm of a conference paper.

## When to use

Research papers, technical reports, working papers, anything that should read as rigorously academic rather than designed-for-marketing. The numbered-section convention also makes it a good fit for specs and formal proposals that need addressable subsections ("see §3.2").

Avoid it for anything client-facing or casual — the format signals "peer review," not "pitch."

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #FFFFFF | canvas |
| ink | #1A1A1A | body text |
| muted | #555555 | captions, footnotes |
| rule | #000000 | thin rules under the title block |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| title | Source Serif 4, weight 600 | 26px | paper title |
| author-line | Source Serif 4 | 14px | author names |
| affiliation | Source Serif 4 Italic | 12px | affiliation, date |
| body | Source Serif 4 | 11pt / 1.5 | main text, justified |
| section | Source Serif 4, weight 600 | 15px | "1.", "2." section headings |
| subsection | Source Serif 4 Italic, weight 600 | 13px | "2.1" subsection headings |
| mono | JetBrains Mono | 9px / 9pt | footnote reference marks |

## Layout & pagination

Page size **816×1056**. Title block and abstract are centered at the top of page 1; body text runs single-column, justified, with numbered `##`/`###` headings (1, 1.1, 1.2 …). Footnotes anchor to the bottom of the page they're referenced on where possible — in the flowed Studiograph frame, keep them inline as numbered asides instead, since true per-page footnote placement isn't guaranteed across a reflow.

## Building it in Studiograph

Create a publication entry with a single frame at **816×1056** — US Letter at 96dpi. You write the whole paper as one continuous block of HTML; the frame's `pagination` setting flows it across as many pages as the argument needs, applying the margins and drawing the page numbers.

The margins are wider than the other publication templates — 96px left and right — giving a 624px live area. On top of that, `.la-doc` caps itself at `max-width:576px` with `margin:0 auto`. That double constraint is intentional: 576px at 11pt is roughly 66 characters, the measure academic typesetting has settled on. The extra 24px of slack on each side is what lets the centered title block breathe without touching the margin.

**Section numbers are literal text.** There is no CSS counter — you type `1. Introduction`, `2.1 Participants`. That is a feature, not an omission: it means a section keeps its number when you move it, so a cross-reference written as "see §3.2" cannot silently drift.

**Footnotes are inline, not page-anchored.** A superscript `.la-fn-ref` marks the reference and a `.la-footnote` paragraph follows the paragraph that cites it. Because the content reflows across pages, a note pinned to the bottom of the page is not guaranteed to stay on the page that references it — placing it immediately after the citing paragraph always is.

### `shared.head`

```html
<style>
/* ---- Fonts ------------------------------------------------------------
   Declare @font-face for Source Serif 4 (variable) and JetBrains Mono (400)
   here, pointing at the files uploaded to your workspace. See Fonts, below.
   Without them the stacks fall back to Georgia and the system mono. */

*{box-sizing:border-box;}

/* ---- Document shell — the measure cap is the whole layout ---- */
.la-doc{font-family:'Source Serif 4',Georgia,serif;color:#1A1A1A;
  font-size:11pt;line-height:1.5;max-width:576px;margin:0 auto;}

/* ---- Title block — centered, page 1 only ---- */
.la-titleblock{text-align:center;margin-bottom:28px;}
.la-title{font-size:26px;font-weight:600;line-height:1.25;margin:0 0 14px;}
.la-authors{font-size:14px;margin:0 0 4px;}
.la-affil{font-size:12px;font-style:italic;color:#555;margin:0 0 4px;}
.la-date{font-size:12px;color:#555;}

/* ---- Abstract — ruled top and bottom, the LaTeX signature ---- */
.la-abstract{border-top:1px solid #000;border-bottom:1px solid #000;
  padding:16px 0;margin-bottom:28px;}
.la-abstract-label{font-weight:600;font-style:italic;font-size:13px;margin:0 0 6px;}
.la-abstract-body{font-size:11pt;margin:0;}

/* ---- Headings — numbers are typed, not generated ---- */
.la-sec{font-size:15px;font-weight:600;margin:26px 0 10px;}
.la-subsec{font-size:13px;font-weight:600;font-style:italic;margin:18px 0 8px;}

/* ---- Body — justified, the academic default ---- */
.la-p{margin:0 0 12px;text-align:justify;}

/* ---- Footnotes — inline, marker in mono ---- */
.la-fn-ref{font-family:'JetBrains Mono',monospace;font-size:9px;
  vertical-align:super;color:#555;}
.la-footnote{font-size:9pt;color:#555;border-top:1px solid #ccc;
  padding-top:6px;margin:4px 0 12px;}
.la-fn-num{font-family:'JetBrains Mono',monospace;margin-right:4px;}

/* ---- References ---- */
.la-ref{font-size:10pt;margin:0 0 6px;}
</style>
```

### Pagination

Set on the frame:

```json
{
  "margins": { "top": 90, "right": 96, "bottom": 84, "left": 96 },
  "pageNumbers": {
    "position": "bottom-center",
    "format": "{n}"
  }
}
```

No header or footer furniture is declared — a paper carries its identity in the title block, and a running header on an academic article is the journal's job, not the author's.

Note what is *absent*: there is no `showOnFirst: false`. Unlike the brochure and newsletter, which suppress the number on their cover page, this template numbers page 1 as well. That is the academic convention — the title page of a paper is page 1, not a cover — and `bottom-center` rather than `bottom-right` is the same convention showing up again.

### Example — title block and abstract

```html
<div class="la-doc">
  <div class="la-titleblock">
    <h1 class="la-title">A Framework for Evaluating Chart Legibility</h1>
    <p class="la-authors">Sample Author<sup>1</sup>, Another Author<sup>2</sup></p>
    <p class="la-affil"><sup>1</sup>Schema Design &middot; <sup>2</sup>Independent Researcher</p>
    <p class="la-date">August 2026</p>
  </div>

  <div class="la-abstract">
    <p class="la-abstract-label">Abstract</p>
    <p class="la-abstract-body">We propose a lightweight framework for evaluating whether a chart communicates its intended comparison without requiring a legend lookup. Across three studies, charts scored under the framework predicted reader accuracy better than chart type alone, suggesting legibility is a property of encoding choices rather than chart category.</p>
  </div>

  <!-- numbered sections follow -->
</div>
```

The abstract's two hairlines are the single most recognisable move in the whole template — they are what says "paper" before a word is read. The label is italic and bold at 13px, deliberately smaller than the body it introduces, because in this system a label ranks below the text it names.

Author superscripts key to the affiliation line with plain `<sup>` numerals, not the mono footnote class. Mono is reserved for footnote references so the two systems stay visually distinct.

### Example — a numbered section with a footnote and references

```html
<h2 class="la-sec">3. Results</h2>
<p class="la-p">The rubric score correlated with response accuracy more strongly than chart-type category did in every study<span class="la-fn-ref">1</span>, with the largest gains coming from sort order and redundant encoding.</p>
<p class="la-footnote"><span class="la-fn-num">1</span>Full results tables are available in the supplementary materials.</p>

<h3 class="la-subsec">3.1 Response accuracy</h3>
<p class="la-p">Participants were shown one chart at a time and asked a single comparison question per chart, with response time and accuracy both recorded.</p>

<h2 class="la-sec">References</h2>
<p class="la-ref">[1] Cleveland, W. &amp; McGill, R. (1984). Graphical perception: Theory, experimentation, and application. <em>JASA</em>.</p>
<p class="la-ref">[2] Tufte, E. (1983). <em>The Visual Display of Quantitative Information</em>.</p>
```

The footnote's `border-top:1px solid #ccc` is a lighter grey than the abstract's black rules — it separates a note from the text above it without competing with the structural rules. References use bracketed numerals as literal text for the same reason section numbers are literal: a citation key that survives reordering.

`References` is the one `.la-sec` heading with no number, matching the LaTeX convention where back matter falls outside the numbered sequence.

## Do's and Don'ts

**Do** — centre the title block and rule the abstract top and bottom. Justify body text; a ragged right edge undoes the typeset look this template exists to produce. Type section numbers by hand so they survive reordering. Use italic for subsection headings, for the abstract label, and for emphasis in running text. Keep footnote marks in mono at 9px so they read as references rather than exponents. Put references last, unnumbered, at 10pt.

**Don't** — widen `.la-doc` past 576px; the measure is the layout, and at the full 624px live area the justified lines start opening ugly word-spacing gaps. Don't use bold for emphasis inside body text — LaTeX emphasis is italic, and bold in a serif body column reads as a heading that lost its place. Don't add colour: the palette is ink, `#555` muted, and black rules, and a single accent would make the paper look like a brochure. Don't rely on footnotes landing at the foot of their page. Don't mix the mono footnote marker style into the author superscripts.

## Fonts

| Family | Weights | Role |
|---|---|---|
| Source Serif 4 | variable 200–900, roman and italic | title, headings, body, references — everything |
| JetBrains Mono | 400 | footnote reference marks only |

Use these stacks:

```css
font-family: 'Source Serif 4', Georgia, serif;   /* everything */
font-family: 'JetBrains Mono', monospace;        /* footnote marks */
```

Both families must be uploaded to the workspace and declared with `@font-face` in `shared.head` to render — see the **Using Google Fonts** skill for the pattern. Frames are sandboxed and cannot fetch `fonts.googleapis.com`, and the failure is silent: the page still renders, in Georgia and the system mono.

Italic matters here more than in most templates — subsection headings, the abstract label, the affiliation line and in-text emphasis all depend on it. Declare a real italic face rather than letting the browser synthesise an oblique, which on a transitional serif reads as a slanted roman rather than a true italic.

## See it rendered

Open [[latex-article-template]] — **LaTeX Article (Template)**, the companion `publication` entry in this folder's `examples` — to see the full paper live and paginated. Duplicate it and swap in real content.

## Source & license

Adapted from [latex.css](https://github.com/vincentdoerig/latex-css) by Vincent Dörig, MIT-licensed. License verified directly against the repository's `LICENSE` file on 2026-08-14. The academic type scale and section-numbering convention are the source's; the exact HTML/CSS and Studiograph pagination setup are an original adaptation.
