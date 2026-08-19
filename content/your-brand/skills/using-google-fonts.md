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
  How to use a Google font in a Studiograph canvas. Canvases load
  fonts.googleapis.com directly, so one @import is usually all it takes.
  Includes the pattern, when to upload a font file instead, why you should never
  let the browser fake a weight, and how to pick a fallback stack.
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

Google Fonts are free, open-licensed, and cover most design needs. In a Studiograph canvas you can load them directly.

## The short version

Put one `@import` at the very top of the canvas's shared head, before any other CSS, and name a fallback after your font:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=block');

:root {
  --sans: 'Inter', system-ui, -apple-system, sans-serif;
}

body { font-family: var(--sans); }
```

That is the whole thing. `@import` has to come first — CSS ignores it anywhere else, and the failure is silent.

## What a canvas can and cannot load

Frames run under a strict content security policy. **`fonts.googleapis.com` and `fonts.gstatic.com` are permitted; other external stylesheets, scripts and CDNs are not.** So the Google Fonts snippet works, and a general-purpose CDN link still does nothing.

If a font is *not* on Google Fonts — a licensed or custom typeface — upload the file into the workspace instead and declare it with `@font-face`. Same craft rules below, different source. See [[using-custom-fonts]], and mind the redistribution rights.

## Building the URL

Ask for the weights you actually use. Each extra weight is more to download.

```css
/* variable font: one request covers the whole range */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=block');

/* static font: list only the weights you need */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=block');

/* roman and italic together */
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400..700;1,400..700&display=block');

/* several families in one request */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&family=Outfit:wght@800&display=block');
```

**Prefer the variable font** when one exists. A single request covers every weight, and you can use any value in between rather than only the handful the static cuts give you.

### Why `display=block` and not `swap`

`swap` renders the fallback first and swaps when the font arrives. For a canvas that gets exported or screenshotted, that swap can be caught mid-flight and bake the wrong font into a PDF. `block` waits for the real font. Use `block` here.

## Ask for the real cut, never a fake one

If you request only weight 400 and then set `font-weight: 700`, the browser synthesises a fake bold by smearing the strokes. Same with italic — a synthesised oblique is a slanted roman, not a real italic, and on a serif it looks obviously wrong.

Put every weight and style you intend to use into the URL. It costs one query parameter.

## Always write a fallback stack

Name a fallback after your font, always:

```css
--sans:  'Inter', system-ui, -apple-system, sans-serif;
--serif: 'Source Serif 4', Georgia, 'Times New Roman', serif;
--mono:  'JetBrains Mono', ui-monospace, 'SF Mono', monospace;
```

Pick a fallback with **similar proportions** so a failure degrades gracefully instead of reflowing the whole piece. A geometric sans falling back to Georgia will break every line length.

## Asking for it

You do not have to write any of this yourself:

```text
Use Inter for this deck, weights 400 and 700, with a system-ui fallback.
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

Ask for a render and look at it: *"Show me this rendered so I can check the font is loading."* If the type looks like Helvetica or Times when it should not, the `@import` is not the first rule in the stylesheet, or the family name in the URL does not match the name in `font-family`.

The reliable tell: a real variable font shows smooth weight differences between headings and body. A fallback shows the browser's two default weights and nothing in between.
