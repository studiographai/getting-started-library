---
entity_type: skill
entity_id: editorial-newsletter
created_at: '2026-08-14T22:09:51.712Z'
updated_at: '2026-08-17T01:42:05.632Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - publication
  - template
  - newsletter
  - magazine
  - editorial
name: Editorial Newsletter
description: >-
  A multi-column newsletter/bulletin layout — a masthead, byline, pull quotes,
  and text set in newspaper-style columns, built on Skeleton's simple grid and
  type scale. Use for company newsletters, event recaps, and bulletin-style
  updates.
applies_to:
  - publication
  - document
  - report
license: MIT
loading: on-demand
source: 'github.com/dhg/Skeleton (MIT License, Dave Gamache)'
status: draft
---
# Editorial Newsletter

A multi-column bulletin built on **Skeleton**, an open-source micro-framework known for a simple, readable grid and type scale. A bold masthead runs across the top, and the body sets in newspaper-style columns with a pull quote breaking up the text.

## When to use

Company newsletters, event recaps, "what shipped this month" bulletins, community updates — anything editorial and recurring that benefits from a masthead identity. The two-column body reads faster than a single wide column, which suits shorter, punchier items.

Avoid it for a single long-form argument — column breaks interrupt a sustained train of thought. Use Tufte Essay or Minimal Report for that instead.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #FFFFFF | canvas |
| ink | #1A1A1A | body text |
| rule | #1A1A1A | masthead rule |
| accent | #B23A2E | pull-quote mark, byline accent — swap for brand |
| muted | #767676 | captions, issue line |

## Typography

| Token | Family | Size | Use |
|---|---|---|---|
| masthead | Outfit ExtraBold | 46px | publication name |
| issue-line | DM Sans | 11px, uppercase, 0.1em | issue/date under masthead |
| headline | Outfit ExtraBold | 22px | article headline |
| body | DM Sans | 10.5pt / 1.55 | column text |
| pull-quote | Outfit ExtraBold | 22px, accent | pulled quote |
| byline | DM Sans, weight 600 | 10pt, uppercase, accent | author credit |

## Layout & pagination

Page size **816×1056**. Masthead spans the full width with a thin rule beneath it; below that, the body runs in a 2-column CSS grid (`column-count:2` or a grid with a gutter) with a pull quote spanning both columns to break the text. Keep the masthead on page 1 only — interior pages (if the newsletter runs long) carry a slimmer running header instead via `pagination.furniture`.

## Building it in Studiograph

Create a publication entry with a single frame at **816×1056** — US Letter at 96dpi. You author the whole issue as one continuous block of HTML; the frame's `pagination` setting flows it across as many pages as it needs, applying the margins and drawing the page numbers.

The live area is **672px** wide (816 minus the 72px left and right margins). With `column-gap:32px`, each text column measures **320px** — around 45 characters at 10.5pt, which is the newspaper measure this template is tuned for. Widen the columns and the two-column device stops earning its place; you may as well set one column.

The masthead sits *outside* the multi-column container, so it spans the full width without needing any column rule. Everything inside `.en-body` that must break the columns — headline, byline, pull quote — uses `column-span:all`.

**One trap:** `break-before:column` is the page-break mechanism in other publication templates, but inside `.en-body` it breaks to the next *text* column, not the next page. If you need a hard page break in a multi-column issue, close `.en-body` and open a new one.

### `shared.head`

```html
<style>
/* ---- Fonts ------------------------------------------------------------
   Declare @font-face for Outfit (800) and DM Sans here, pointing at the
   files uploaded to your workspace. See Fonts, below. Without them the
   stacks fall back to the system sans. */

*{box-sizing:border-box;}

/* ---- Document shell ---- */
.en-doc{font-family:'DM Sans',system-ui,sans-serif;color:#1A1A1A;}

/* ---- Masthead — full width, outside the column flow ---- */
.en-masthead{border-bottom:3px solid #1A1A1A;padding-bottom:16px;margin:0 0 28px;}
.en-title{font-family:'Outfit',sans-serif;font-weight:800;font-size:46px;margin:0 0 6px;}
.en-issue{font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#767676;}

/* ---- The two-column body ---- */
.en-body{column-count:2;column-gap:32px;}

/* ---- Elements that break the columns ---- */
.en-headline{font-family:'Outfit',sans-serif;font-weight:800;font-size:22px;
  line-height:1.2;margin:0 0 8px;column-span:all;}
.en-byline{font-family:'DM Sans',sans-serif;font-weight:600;font-size:10pt;
  text-transform:uppercase;color:#B23A2E;margin:0 0 16px;column-span:all;}
.en-pull{font-family:'Outfit',sans-serif;font-weight:800;font-size:22px;line-height:1.3;
  color:#B23A2E;column-span:all;margin:20px 0;padding:16px 0;
  border-top:1px solid #1A1A1A;border-bottom:1px solid #1A1A1A;}

/* ---- Column text ---- */
.en-p{font-size:10.5pt;line-height:1.55;margin:0 0 14px;}
</style>
```

### Pagination

Set on the frame:

```json
{
  "margins": { "top": 80, "right": 72, "bottom": 80, "left": 72 },
  "pageNumbers": {
    "showOnFirst": false,
    "position": "bottom-right",
    "format": "{n}"
  }
}
```

Margins are symmetric top and bottom at 80 — a bulletin wants an even band around a busy page, unlike a report where the eye should settle lower. No header or footer furniture is declared, because a one-page issue does not need one: the masthead *is* the header. Add a running header in `furniture` only when the issue actually runs past page 1, and keep the masthead itself on page 1 — repeating a 46px masthead on every page turns a newsletter into a stack of covers.

`showOnFirst: false` keeps the number off the masthead page.

### Example — the masthead

`class="tok"` marks the placeholder text you swap per issue.

```html
<div class="en-doc">
  <div class="en-masthead">
    <h1 class="en-title">The Weekly Signal</h1>
    <p class="en-issue">Issue 42 · August 2026</p>
  </div>
  <!-- .en-body follows -->
</div>
```

The 3px ink rule is what makes it a masthead rather than a heading. The issue line directly beneath it, at 11px with 0.1em tracking in muted grey, is the counterweight — the size contrast between 46px and 11px is the whole gesture, so do not split the difference with a mid-sized subtitle.

### Example — a two-column story with a pull quote

```html
<div class="en-body">
  <h2 class="en-headline">Three things worth your attention this week</h2>
  <p class="en-byline">By <span class="tok">Author Name</span></p>

  <p class="en-p">The team shipped incremental sync this week, and the change that seemed smallest on paper &mdash; caching diff state between sessions &mdash; turned out to be the one users actually noticed first.</p>
  <p class="en-p">Support tickets mentioning slow load times dropped by a third within four days, which is a faster signal than most launches get in a month.</p>

  <blockquote class="en-pull">&ldquo;It’s the first release where the changelog undersold what it felt like to use.&rdquo;</blockquote>

  <p class="en-p">Elsewhere, the design team wrapped a two-week sprint on the onboarding flow, cutting the number of required steps from nine to four without removing any of the underlying setup &mdash; it just asks for things when it needs them instead of all at once.</p>
  <p class="en-p">Next issue: a look at what changed in how we run standups, and why fewer of them turned out to mean better ones.</p>
</div>
```

Headline, byline and pull quote all carry `column-span:all`, so the text reflows around them as full-width bands. The pull quote's rules above and below are what let it interrupt the columns without looking like a mistake — a spanning element with no rules reads as a layout bug. Place it after two or three paragraphs, not first: it is a break in the reading, and there is nothing to break yet at the top.

## Do's and Don'ts

**Do** — keep the masthead outside `.en-body` so it spans naturally. Give the accent `#B23A2E` exactly two jobs: the byline and the pull quote. Set the issue line in muted `#767676` at 11px with 0.1em tracking. Rule the pull quote top and bottom in 1px ink. Span headline, byline and pull quote across both columns. Keep body at 10.5pt / 1.55 — at a 320px measure, tighter leading closes the column up.

**Don't** — let the headline sit inside a single column; without `column-span:all` it becomes a 320px-wide fragment and the story loses its top. Don't introduce a second accent — the system is ink, muted grey, and one red. Don't repeat the masthead on interior pages. Don't put the pull quote in the accent color *and* a background fill; the color plus the two rules is already the emphasis. Don't drop body below 10pt in these columns, and don't use `break-before:column` inside `.en-body` expecting a page break.

## Fonts

| Family | Weights | Role |
|---|---|---|
| Outfit | 800 (ExtraBold) | masthead, headlines, pull quotes |
| DM Sans | variable 100–1000 | body text, byline, issue line |

Use these stacks:

```css
font-family: 'Outfit', sans-serif;             /* display */
font-family: 'DM Sans', system-ui, sans-serif; /* body */
```

Both families must be uploaded to the workspace and declared with `@font-face` in `shared.head` to render — see the **Using Google Fonts** skill for the pattern. Frames are sandboxed and cannot fetch `fonts.googleapis.com`, and the failure is silent: the page still renders in the fallback stack. Outfit at weight 800 is the one that matters here — the masthead depends on its extra-bold geometric weight, and a fallback sans at 800 will be visibly lighter and wider.

## See it rendered

Open [[editorial-newsletter-template]] — **Editorial Newsletter (Template)**, the companion `publication` entry in this folder's `examples` — to see the masthead and column layout live and paginated. Duplicate it for a real issue.

## Source & license

Adapted from [Skeleton](https://github.com/dhg/Skeleton) by Dave Gamache, MIT-licensed. License verified directly against the repository's `LICENSE.md` file on 2026-08-14. The grid and type-scale proportions come from Skeleton's design system; the exact HTML/CSS and Studiograph pagination setup are an original adaptation (no Skeleton CSS/JS is loaded — the conventions are reproduced directly in the frame's own stylesheet, since Studiograph frames can't fetch external stylesheets).
