---
entity_type: skill
entity_id: minimal-report
created_at: '2026-08-14T22:02:05.764Z'
updated_at: '2026-08-17T01:42:12.173Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - publication
  - template
  - minimal
  - whitepaper
  - business
name: Minimal Report
description: >-
  A stripped-back single-column report — no rails, no color, just clean type,
  generous whitespace, and simple horizontal rules between sections. Use for
  whitepapers, internal memos, and any report where the content should carry all
  the weight.
applies_to:
  - publication
  - document
  - report
license: MIT
loading: on-demand
source: 'github.com/kognise/water.css (MIT License, Kognise)'
status: draft
---
# Minimal Report

A stripped-back single-column report built on **water.css**, an open-source classless stylesheet designed so plain HTML looks clean with no extra markup. No rails, no sidebar, no decoration — just well-set type, generous whitespace, and a thin rule between sections.

## When to use

Whitepapers, internal memos, policy documents, status reports — anything where the content itself should carry the weight and any visual flourish would read as padding. It's also the fastest template to fill: headings, paragraphs, and lists render well with zero extra classes.

Avoid it when you need a strong cover moment or a lot of visual hierarchy between sections — this template is deliberately quiet. Use Corporate Brochure instead for something with more visual presence.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #FFFFFF | canvas |
| ink | #1A1A1A | body text |
| muted | #666666 | captions, footer |
| rule | #E5E5E5 | section dividers |
| accent | #3273DC | links, optional emphasis (swap for brand) |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| title | DM Sans, weight 700 | 30px | report title |
| h2 | DM Sans, weight 700 | 20px | section heading |
| body | DM Sans | 11pt / 1.6 | main text |
| meta | DM Sans | 10pt, uppercase, 0.08em | date/author line |

## Layout & pagination

Page size **816×1056**. Single column, about 6in wide, centered, with a plain header (title + one-line meta) at the top of page 1 and a thin rule before each new `##` section. No running rail — just margins doing the work.

## Building it in Studiograph

Create a **publication** entry with a **single frame at 816×1056** — US Letter at 96dpi. You do not author one frame per page. The frame is paginated, which means Studiograph pours the entire document through that page box and breaks it into as many pages as the content needs. Add three paragraphs in the middle and everything after them reflows and renumbers on its own.

Set the frame's `background` to `#FFFFFF`.

**The measure is fixed, not derived.** The content box is 816 − 96 − 96 = 624px wide, but `.mr-doc` caps itself at 576px — exactly six inches — and centers inside that box. The 24px of slack on each side is deliberate: if someone widens the page margins later, the line length does not change, so the type rhythm survives the edit.

### `shared.head`

```html
<style>
/* Fonts — see the Fonts section below. Until DM Sans is uploaded to the
   workspace and declared with @font-face, this stack falls back to system-ui. */

*{box-sizing:border-box;}

/* ---- document column: one measure, held at 6in ---- */
.mr-doc{
  font-family:'DM Sans',system-ui,sans-serif;
  color:#1A1A1A;
  max-width:576px;
  margin:0 auto;
}

/* ---- title block: appears once, on page 1 ---- */
.mr-title{font-size:30px;font-weight:700;margin:0 0 8px;}
.mr-meta{
  font-size:10pt;
  text-transform:uppercase;
  letter-spacing:0.06em;
  color:#666;
  margin:0 0 36px;
}

/* ---- section heading: the rule IS the divider ----
   Each h2 carries its own top rule, so sections divide themselves and you
   never hand-place an <hr>. The :first-of-type reset suppresses it on the
   opening section — a rule directly under the meta line would box the title. */
.mr-h2{
  font-size:20px;
  font-weight:700;
  margin:32px 0 12px;
  padding-top:20px;
  border-top:1px solid #E5E5E5;
}
.mr-h2:first-of-type{border-top:none;padding-top:0;margin-top:0;}

/* ---- body ---- */
.mr-p{font-size:11pt;line-height:1.6;margin:0 0 14px;}
.mr-list{margin:0 0 14px 20px;padding:0;}
.mr-list li{font-size:11pt;line-height:1.6;margin-bottom:6px;}
</style>
```

### Pagination

Set the frame's `pagination` to:

```json
{
  "margins": { "top": 90, "right": 96, "bottom": 84, "left": 96 },
  "pageNumbers": {
    "position": "bottom-right",
    "format": "Page {n} of {m}"
  }
}
```

No `furniture` block. This template has no running header by design — the only page chrome is the folio, and `{m}` resolves to the final page count so a printed memo can be checked for missing pages.

### Example — title block

The report opens with a title and a single meta line, then goes straight into the first section. There is no cover page.

```html
<div class="mr-doc">
  <h1 class="mr-title">Why Slow Software Wins</h1>
  <p class="mr-meta">Internal whitepaper · August 2026 · <span class="tok">Author Name</span></p>

  <h2 class="mr-h2">The problem with fast</h2>
  <p class="mr-p">Every roadmap rewards shipping quickly, and almost none reward the quieter discipline of shipping something that still makes sense a year later. The two are not the same thing, and treating them as interchangeable is where most technical debt is born.</p>
  <p class="mr-p">Fast software optimizes for the sprint. Slow software &mdash; deliberately, not accidentally slow &mdash; optimizes for the system the sprint is part of.</p>
</div>
```

The `tok` span marks a fill-in placeholder. It carries no visual style; it is there so a reader can see at a glance what still needs replacing.

### Example — a section with a list

Lists inherit the body size and line height exactly, so a list reads as continuous with the prose around it rather than as a callout.

```html
<h2 class="mr-h2">What slow actually means</h2>
<p class="mr-p">Slow does not mean sluggish, and it does not mean indecisive. It means the team spent time on the decisions that are expensive to reverse, and moved quickly through the ones that aren’t.</p>
<ul class="mr-list">
  <li>Data models and schemas, which are expensive to change once other systems depend on them</li>
  <li>Public APIs and integration contracts, which other teams build against</li>
  <li>Naming and taxonomy, which quietly becomes load-bearing everywhere it appears</li>
</ul>
```

### Example — a section with a data table

Tables are the one component this template does not ship. Add these rules to `shared.head` when you need one — they reuse the existing tokens rather than introducing new ones: the header row borrows the meta line's 10pt uppercase treatment, and every border is the same `#E5E5E5` rule that divides the sections.

```html
<style>
.mr-table{width:100%;border-collapse:collapse;font-size:11pt;margin:0 0 14px;}
.mr-table th{
  text-align:left;font-weight:700;
  font-size:10pt;text-transform:uppercase;letter-spacing:0.06em;color:#666;
  padding:0 12px 8px 0;border-bottom:1px solid #E5E5E5;
}
.mr-table td{padding:8px 12px 8px 0;border-bottom:1px solid #E5E5E5;line-height:1.4;}
/* numeric column: flush right, tabular figures so digits stack */
.mr-table th:last-child,.mr-table td:last-child{
  padding-right:0;text-align:right;font-variant-numeric:tabular-nums;
}
</style>
```

```html
<h2 class="mr-h2">Where the time went</h2>
<p class="mr-p">Across four projects last quarter, the decisions we spent longest on were not the ones that shipped slowest.</p>
<table class="mr-table">
  <thead>
    <tr><th>Decision</th><th>Cost to reverse</th><th>Days spent</th></tr>
  </thead>
  <tbody>
    <tr><td>Schema for the events table</td><td>Very high</td><td>11</td></tr>
    <tr><td>Public webhook payload</td><td>High</td><td>7</td></tr>
    <tr><td>Dashboard layout</td><td>Low</td><td>2</td></tr>
    <tr><td>Button copy</td><td>None</td><td>1</td></tr>
  </tbody>
</table>
```

Keep tables to four columns or fewer. At 576px there is no room for a fifth without dropping below the body size, and shrinking table type is the first step toward a document that looks like a spreadsheet screenshot.

## Do's and Don'ts

**Do** — let each `##` carry its own rule and never hand-place a divider; keep the measure at 576px so the line length survives a margin edit; put the meta line on page 1 only; reserve the accent (`#3273DC`) for links; use `#666` for anything secondary and `#1A1A1A` for everything else; set numeric table columns flush right with tabular figures; keep to two heading levels.

**Don't** — re-add a top rule on the first section, which boxes the title; introduce a second accent or any filled panel; narrow the margins to fit more text on a page (the whitespace is the design); bold inside body copy for emphasis, since the only weights here are 400 and 700 and 700 already means "heading"; center headings or body text — the column is centered, the text inside it is flush left; drop below 11pt anywhere.

## Fonts

**DM Sans** carries the whole template — title and headings at weight 700, body and meta at 400. It is the only family; there is no serif and no mono.

```css
font-family:'DM Sans', system-ui, sans-serif;
```

DM Sans must be uploaded to the workspace and declared with `@font-face` before it will render — see the `using-google-fonts` skill for the pattern. Until then the page silently falls back to `system-ui`, which is close enough in proportion that the layout holds but the type loses its character. The failure is silent because frames run under a content-security policy that blocks external stylesheets, so a Google Fonts `<link>` will not work and will not warn you.

The variable cut covers weights 100–1000 in one file, so a single `@font-face` declaration serves both 400 and 700.

## See it rendered

Open [[minimal-report-template]] — **Minimal Report (Template)**, the companion `publication` entry in this folder's `examples` — to see it live and paginated. Duplicate it and drop in real content.

## Source & license

Adapted from [water.css](https://github.com/kognise/water.css) by Kognise, MIT-licensed. License verified directly against the repository's `LICENSE.md` file on 2026-08-14. The restrained, classless type rhythm is the source's design philosophy; the exact HTML/CSS and Studiograph pagination setup are an original adaptation.
