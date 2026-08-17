---
entity_type: skill
entity_id: using-google-fonts
created_at: '2026-08-16T22:29:06.522Z'
updated_at: '2026-08-16T22:29:06.522Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - fonts
  - typography
  - google-fonts
  - how-to
name: Using Google Fonts
description: >-
  How to use a Google font in a Studiograph canvas. Sandboxed frames cannot
  fetch fonts.googleapis.com, so the font file must be uploaded to the workspace
  and declared with @font-face. Includes the working pattern, the failure mode,
  and how to pick a fallback stack.
applies_to:
  - presentation
  - publication
  - landing-page
  - infographic
  - diagram
  - any-canvas
loading: on-demand
status: draft
---
# Using Google Fonts

Google Fonts are free, open-licensed, and cover most design needs. Using one in Studiograph takes one extra step compared to a normal web page — and skipping that step fails silently, which is why this skill exists.

## The one thing to know

**A Studiograph canvas cannot fetch anything from the internet.** Frames run under a strict content security policy: no external stylesheets, no external font files, no CDNs. So the usual Google Fonts snippet does nothing:

```html
<!-- This does NOT work in a canvas. It fails silently. -->
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
```

There is no error. The text simply renders in the fallback font, which usually looks close enough that nobody notices until the piece is in front of a client.

**The fix:** upload the font file into your workspace, then point `@font-face` at the uploaded copy.

## Step 1 — Get the font file

On [fonts.google.com](https://fonts.google.com), find your family and download it. You will get `.ttf` files.

Convert them to **`.woff2`** before uploading — it is 30–50% smaller and every browser Studiograph runs in supports it. Any "ttf to woff2" converter works, or `fonttools` locally:

```bash
pip install fonttools brotli
fonttools ttLib.woff2 compress Inter-Variable.ttf
```

**Prefer the variable font** (usually named `-Variable` or `[wght]`) when one exists. A single file covers every weight from 100 to 900, so you upload once instead of six times.

## Step 2 — Upload it to the workspace

Upload the `.woff2` as an asset, the same way you would upload an image. Once uploaded it has a permanent URL of the form:

```
/api/assets/<asset-id>/Inter-Variable.woff2
```

Copy that URL — you need it in the next step. Ask for it directly if you cannot find it: *"What's the asset URL for the Inter font I just uploaded?"*

## Step 3 — Declare it

Put the `@font-face` block at the very top of the canvas's shared head, before any other CSS:

```css
@font-face {
  font-family: 'Inter';
  src: url('/api/assets/<asset-id>/Inter-Variable.woff2') format('woff2');
  font-weight: 100 900;   /* the full variable range, in one declaration */
  font-style: normal;
  font-display: block;
}

:root {
  --sans: 'Inter', system-ui, -apple-system, sans-serif;
}

body { font-family: var(--sans); }
```

For a **static** (non-variable) font, declare each weight separately, pointing at its own file:

```css
@font-face {
  font-family: 'Inter';
  src: url('/api/assets/<asset-id-regular>/Inter-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Inter';
  src: url('/api/assets/<asset-id-bold>/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: block;
}
```

**Never let the browser fake a weight or an italic.** If you declare only the regular file and then set `font-weight: 700`, the browser synthesises a fake bold by smearing the strokes. Same with italic — a synthesised oblique is a slanted roman, not a real italic, and on a serif it looks obviously wrong. Upload the real cut.

### `font-display`

Use `block` rather than `swap` for canvases that get exported or screenshotted. `swap` shows the fallback first and swaps when the font arrives — which can catch a PDF export mid-swap and bake in the wrong font. `block` waits.

## Step 4 — Always write a fallback stack

Name a fallback after your font, always:

```css
--sans: 'Inter', system-ui, -apple-system, sans-serif;
--serif: 'Source Serif 4', Georgia, 'Times New Roman', serif;
--mono: 'JetBrains Mono', ui-monospace, 'SF Mono', monospace;
```

Pick a fallback with **similar proportions** so a failure degrades gracefully instead of reflowing the whole layout. A geometric sans falling back to Georgia will break every line length in the piece.

## Asking for it

You do not have to write any of this yourself:

```text
I've uploaded Inter-Variable.woff2 to the workspace.
Set it up as the body font for this deck, with a system-ui fallback.
```

## Good open families to start from

All on Google Fonts, all open-licensed, all with variable versions:

| Family | Good for |
|---|---|
| Inter | UI, body copy, dense text |
| Source Serif 4 | editorial headlines, long-form reading |
| DM Sans | friendly, geometric body copy |
| JetBrains Mono | code, labels, eyebrows, data |
| Newsreader | magazine-register serif with a real italic |
| Archivo | strong condensed headlines |

## Checking it worked

Ask for a render and look at it: *"Show me this rendered so I can check the font is loading."* If the type looks like Helvetica or Times when it should not, the `@font-face` URL is wrong or the file never uploaded.

The reliable tell: a real variable font shows smooth weight differences between headings and body. A fallback shows the browser's two default weights and nothing in between.

## If your font is not on Google Fonts

Licensed or custom typefaces follow the same mechanics but need care about redistribution rights — see [[using-custom-fonts]].
