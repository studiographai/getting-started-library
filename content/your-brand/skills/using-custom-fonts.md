---
entity_type: skill
entity_id: using-custom-fonts
created_at: '2026-08-16T22:29:46.733Z'
updated_at: '2026-09-26T00:00:00.000Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - fonts
  - typography
  - custom-fonts
  - brand
  - how-to
name: Using Custom Fonts
description: >-
  How to install a licensed or custom brand typeface in Studiograph: upload the
  files to a folder shared with everyone and name the family. Weights, italics
  and name variants are read from the files themselves. Covers licensing, fonts
  kept in other folders, fallback stacks and portability.
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
# Using Custom Fonts

Most brands run on a licensed typeface — a foundry font, a bespoke commission, or a customised cut. This is how you install one so every deck, document and page in your workspace uses it.

For an open font, [[using-google-fonts]] is simpler: nothing to upload. A licensed face has to live in your workspace, which brings licensing into it.

## Before you upload: check the licence

A desktop licence — the kind that lets you install a font on your Mac — **does not** usually permit web embedding. Uploading a font to a workspace where it is served to browsers is web use, and if the piece is shared publicly it may also be distribution.

Check your licence for:

- **Web/webfont rights** — the permission you actually need. Often sold separately from desktop.
- **Pageview or domain limits** — some foundries cap either.
- **Redistribution** — a shared link or exported HTML sends the font file to the viewer. PDF export instead *embeds a subset*, which most licences treat more permissively.

If you only hold a desktop licence, you have two honest options: buy the web licence, or pick an open substitute and note the substitution in your brand skill. Do not upload it and hope.

> This applies to your own workspace only. Fonts uploaded here should **never** be seeded into another organisation's workspace — see *Portability* at the end.

## Install it: upload the files

Upload every cut you use — typically regular, medium, bold and their italics — to your library. `woff2`, `woff`, `ttf` and `otf` all work. If the foundry supplies a variable font, prefer it: one file covers the whole weight axis, with a separate file for italics.

**Where you put them matters.** Keep brand fonts in a folder shared with everyone. A font there, or in the same top-level folder as the artifact using it, is applied automatically wherever its family is named.

That is the whole install. Studiograph reads each file's own metadata — its family, weight and italic — so `font-weight: 700` gets the real bold cut rather than a synthesised one, and a foundry's name variants (`Acme Grotesk Black` as well as `Acme Grotesk` at 900) resolve too. There is nothing to write: no `@font-face` block, and no separate entry holding the declarations. An earlier version of this guide had you build a "font kit" entry for that; the product retired it, so don't create one.

## Use it

Name the family in `font-family`, followed by a fallback stack (below). Your brand skill should name it too — see [[brand-skill-template]], which has a Typography section for exactly this. Other skills name the family the same way; none of them needs to carry the font's CSS.

## A font kept in another folder

A font in any other folder is not applied automatically. Either move it to a folder shared with everyone, or declare it in the artifact itself: open the font in the library, use **Copy @font-face**, and put the rule in the artifact's shared head. A font declared that way travels with the artifact, like an image.

If you write the rules by hand, give every cut its own `@font-face` with the same `font-family` and its real weight and style, and copy the asset URL exactly as given — filenames with spaces are URL-encoded (`Acme%20Grotesk-Bold.woff2`).

## Always write a fallback stack

Even with the font installed, name what comes after it:

```css
--sans: 'Acme Grotesk', 'Helvetica Neue', Arial, sans-serif;
```

Pick a fallback with similar proportions so a failure degrades gracefully rather than reflowing every line. And remember the fallback is what a *reader* sees if the asset ever fails to load — worth looking at once on purpose.

## Portability — the part people miss

Asset URLs are **workspace-specific**. `/api/assets/<asset-id>/...` resolves in the workspace that holds the file and nowhere else.

That matters in three places:

- **Sharing a template with another organisation.** The CSS travels; the font does not. They see fallbacks.
- **Seeded or copied workspaces.** A template carrying hard-coded asset URLs from a different workspace renders in fallbacks with no error message.
- **Any skill meant to be portable.** Write it with a plain fallback stack and a note naming the intended font, rather than a hard-coded URL that only works in one place.

The rule of thumb: **the fonts belong to a workspace; a template should survive without them.** Templates name families and provide fallbacks; each workspace supplies the files.

## Asking for it

```text
I've uploaded six cuts of Acme Grotesk to our shared brand folder.
Make it the body font in our brand skill.
```

## Checking it worked

Ask for a render and look at it. The reliable tells that a real cut is loading rather than a synthesised one:

- **Bold** has genuinely different letterforms, not just thicker strokes.
- **Italic** shows true italic construction (a single-storey *a*, entry and exit strokes), not a slanted roman.
- Weight steps look distinct rather than collapsing into two.

If any of those look wrong, a cut is missing from the library and the browser is faking it.
