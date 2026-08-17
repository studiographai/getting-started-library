---
entity_type: skill
entity_id: corporate-brochure
created_at: '2026-08-14T22:02:28.274Z'
updated_at: '2026-08-17T01:41:58.818Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - publication
  - template
  - corporate
  - report
  - brochure
name: Corporate Brochure
description: >-
  A cover-plus-grid corporate report — a bold cover page, a colored section
  divider bar, and callout stat cards built on Bootstrap's grid and type scale.
  Use for annual reports, capability brochures, and client-facing reports that
  need a confident, structured, corporate feel.
applies_to:
  - publication
  - document
  - report
license: MIT
loading: on-demand
source: 'github.com/twbs/bootstrap (MIT License, The Bootstrap Authors)'
status: draft
---
# Corporate Brochure

A confident, structured corporate report built on **Bootstrap**'s grid, type scale, and card conventions — a full cover page, a colored brand bar marking each section, and callout stat cards for the numbers that matter.

## When to use

Annual reports, capability brochures, client-facing status reports, anything that needs to look like it came from an established firm rather than a scrappy team. The stat-card row is built in, so it's a natural fit for content that has real numbers to lead with.

Avoid it for long-form reading — the grid and cards create visual rhythm at the expense of a long unbroken reading column; use Minimal Report or LaTeX Article for prose-heavy content.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #FFFFFF | canvas |
| ink | #1A1A1A | body text |
| brand-bar | #0D6EFD | Bootstrap blue — swap for your own brand color |
| card-bg | #F8F9FA | stat card background |
| muted | #6C757D | captions, meta |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| cover-title | Hanken Grotesk SemiBold | 44px | report title on cover |
| h2 | Hanken Grotesk SemiBold | 22px | section heading |
| stat-num | Hanken Grotesk SemiBold | 32px | callout card number |
| body | DM Sans | 11pt / 1.55 | main text |

## Layout & pagination

Page size **816×1056**. Cover page: brand bar top, centered title block, report meta (client/date) near the bottom — no header/footer furniture on this page. Interior pages: a thin brand-colored rule under each `##` heading, a 3-up stat-card row where relevant, and two-column body text where the section is long.

## Building it in Studiograph

Create a publication entry with a single frame at **816×1056** — US Letter at 96dpi. You do not author one frame per page. You write the whole document as one continuous block of HTML, and the frame's `pagination` setting flows it across as many pages as the content needs, applying the margins and drawing the page numbers on each one.

The live text column is therefore **672px** wide (816 minus the 72px left and right margins). Every width in the stylesheet below is sized against that number — the three stat cards at `1fr` each land at roughly 213px, which is the narrowest a stat card reads well.

Force a page break with `break-before:column` on a block element. That is how the cover gets a page to itself: the cover `<div>` runs first, and the first interior `<div class="cb-page">` carries `style="break-before:column"` to push everything after it onto page 2.

### `shared.head`

```html
<style>
/* ---- Fonts ------------------------------------------------------------
   Declare @font-face for Hanken Grotesk (400, 600) and DM Sans here,
   pointing at the files uploaded to your workspace. See Fonts, below.
   Without them the stacks fall back to the system sans. */

*{box-sizing:border-box;}

/* ---- Document shell ---- */
.cb-doc{font-family:'DM Sans',system-ui,sans-serif;color:#1A1A1A;}

/* ---- Cover page ---- */
.cb-bar{height:10px;background:#0D6EFD;margin:0 0 60px;}
.cb-cover-inner{text-align:center;padding-top:120px;}
.cb-cover-kicker{font-family:'Hanken Grotesk',sans-serif;font-weight:600;font-size:14px;
  text-transform:uppercase;letter-spacing:0.14em;color:#6C757D;margin:0 0 20px;}
.cb-cover-title{font-family:'Hanken Grotesk',sans-serif;font-weight:600;font-size:44px;
  line-height:1.15;margin:0 0 24px;}
.cb-cover-meta{font-size:12pt;color:#6C757D;}

/* ---- Section heading — the brand rule is the section marker ---- */
.cb-h2{font-family:'Hanken Grotesk',sans-serif;font-weight:600;font-size:22px;
  border-bottom:3px solid #0D6EFD;padding-bottom:10px;margin:0 0 24px;}

/* ---- Stat cards — 3-up grid, the one rounded element in the system ---- */
.cb-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:28px;}
.cb-stat{background:#F8F9FA;border-radius:8px;padding:20px;}
.cb-stat-num{font-family:'Hanken Grotesk',sans-serif;font-weight:600;font-size:32px;
  color:#0D6EFD;margin:0 0 4px;}
.cb-stat-label{font-size:10pt;color:#6C757D;}

/* ---- Body ---- */
.cb-p{font-size:11pt;line-height:1.6;margin:0 0 14px;}
</style>
```

### Pagination

Set on the frame:

```json
{
  "margins": { "top": 90, "right": 72, "bottom": 84, "left": 72 },
  "pageNumbers": {
    "showOnFirst": false,
    "position": "bottom-right",
    "format": "{n}"
  }
}
```

No header or footer furniture is declared. That is deliberate: a brochure cover carrying a running header reads like a memo, and `showOnFirst: false` is what keeps the page number off the cover too. If you add a running header for a long report, declare it in `furniture` rather than putting a header `<div>` at the top of each section — hand-placed headers drift as soon as the content reflows.

The bottom margin is larger than the top on interior pages (84 vs 90 is near-even, but the page number sits inside that bottom band) so the number never crowds the last line of body text.

### Example — the cover block

`class="tok"` marks the placeholder text you swap per report.

```html
<div class="cb-doc">
  <div class="cb-cover">
    <div class="cb-bar"></div>
    <div class="cb-cover-inner">
      <div class="cb-cover-kicker">Annual Report</div>
      <h1 class="cb-cover-title">Building Steady<br>Momentum</h1>
      <p class="cb-cover-meta"><span class="tok">Client Name</span> · Fiscal Year 2026</p>
    </div>
  </div>
  <!-- interior pages follow, each starting with break-before:column -->
</div>
```

The bar is flush to the top of the live area and full-bleed across it. The 120px `padding-top` on the inner block is what floats the title into the upper third rather than centering it — a centered cover title reads as a title slide, not a report.

### Example — a section with a stat-card row

```html
<div class="cb-page" style="break-before:column">
  <h2 class="cb-h2">Year in review</h2>
  <div class="cb-stats">
    <div class="cb-stat">
      <div class="cb-stat-num">42%</div>
      <div class="cb-stat-label">Revenue growth YoY</div>
    </div>
    <div class="cb-stat">
      <div class="cb-stat-num">18</div>
      <div class="cb-stat-label">Markets entered</div>
    </div>
    <div class="cb-stat">
      <div class="cb-stat-num">96</div>
      <div class="cb-stat-label">Team members</div>
    </div>
  </div>
  <p class="cb-p">This year we expanded into eighteen new markets while holding onto the discipline that got us here: ship in small batches, measure honestly, and never let a good quarter talk us out of a hard look at what isn’t working.</p>
  <p class="cb-p">The team grew by nearly a third, and for the first time crossed into three time zones working the same roadmap.</p>
</div>
```

The stat row sits directly under the heading, before the prose. That order is the point of the template — the reader gets the numbers before the narrative, and the narrative explains them.

## Do's and Don'ts

**Do** — give the brand color all four of its jobs and no more: the 10px cover bar, the 3px rule under every `##`, the stat numerals, and nothing else. Keep stat rows to exactly three cards. Set every label and caption in muted `#6C757D` at 10pt so the numerals carry the contrast alone. Force the cover onto its own page with `break-before:column`. Keep body at 11pt / 1.6 — the grid already fragments the page, so the reading column needs the leading back.

**Don't** — put the brand color on body text; it is a structural marker, not emphasis. Don't run four or more stat cards in a row: at 672px live width the `1fr` columns fall under 160px and the numerals wrap. Don't use the card background `#F8F9FA` as a full-width band — it is a card fill, and stretched across the measure it reads as a broken background. Don't add a page number or running header to the cover. Don't set several pages of unbroken prose in this template; that is what Minimal Report and LaTeX Article are for.

## Fonts

| Family | Weights | Role |
|---|---|---|
| Hanken Grotesk | 400, 600 | cover title, kicker, section headings, stat numerals |
| DM Sans | variable 100–1000 | body text, labels, meta |

Use these stacks:

```css
font-family: 'Hanken Grotesk', sans-serif;   /* display */
font-family: 'DM Sans', system-ui, sans-serif; /* body */
```

Both families must be uploaded to the workspace and declared with `@font-face` in `shared.head` to render — see the **Using Google Fonts** skill for the pattern. Frames are sandboxed and cannot fetch `fonts.googleapis.com`, and the failure is silent: without the upload the page still renders, just in the fallback stack, and the 44px cover title loses the tight geometric set that carries it.

## See it rendered

Open [[corporate-brochure-template]] — **Corporate Brochure (Template)**, the companion `publication` entry in this folder's `examples` — to see the cover and interior pages live and paginated. Duplicate it and swap in real content and your own brand color.

## Source & license

Adapted from [Bootstrap](https://github.com/twbs/bootstrap) by The Bootstrap Authors, MIT-licensed. License verified directly against the repository's `LICENSE` file on 2026-08-14. The grid proportions, card, and type-scale conventions come from Bootstrap's design system; the exact HTML/CSS and Studiograph pagination setup are an original adaptation (no Bootstrap CSS/JS is loaded — the conventions are reproduced directly in the frame's own stylesheet, since Studiograph frames can't fetch external stylesheets).
