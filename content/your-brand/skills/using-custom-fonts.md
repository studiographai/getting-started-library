---
entity_type: skill
entity_id: using-custom-fonts
created_at: '2026-08-16T22:29:46.733Z'
updated_at: '2026-08-16T22:29:46.733Z'
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
  How to install a licensed or custom brand typeface in Studiograph as a
  reusable font kit — the @font-face pattern with full weight/style mapping, how
  to reference the kit from other skills, licensing caveats, and what to do when
  the font is not available.
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

Most brands run on a licensed typeface — a foundry font, a bespoke commission, or a customised cut. This is how you install one so every deck, document and page in your workspace uses it automatically.

The mechanics are the same as [[using-google-fonts]]: sandboxed canvases cannot fetch fonts from the internet, so the files must live in your workspace. What differs is licensing, and the fact that a real brand family has many cuts to map correctly.

## Before you upload: check the licence

A desktop licence — the kind that lets you install a font on your Mac — **does not** usually permit web embedding. Uploading a font to a workspace where it is served to browsers is web use, and if the piece is shared publicly it may also be distribution.

Check your licence for:

- **Web/webfont rights** — the permission you actually need. Often sold separately from desktop.
- **Pageview or domain limits** — some foundries cap either.
- **Redistribution** — a shared link or exported HTML sends the font file to the viewer. PDF export instead *embeds a subset*, which most licences treat more permissively.

If you only hold a desktop licence, you have two honest options: buy the web licence, or pick an open substitute and note the substitution in your brand skill. Do not upload it and hope.

> This applies to your own workspace only. A font kit built here should **never** be seeded into another organisation's workspace — see *Portability* at the end.

## Build a font kit

A **font kit** is one entry holding every cut of a family plus the CSS to use them. Write it once; every other skill references it instead of repeating the declarations.

### Step 1 — Convert and upload

Convert each cut to `.woff2` and upload them as workspace assets. A typical brand family needs 6–10 files: regular, medium, semibold, bold, and their italics. Upload only the weights you actually use.

If the foundry supplies a variable font, prefer it — one file covers the whole weight axis, with a separate file for italics.

### Step 2 — Write the kit entry

List the files, then give the complete CSS. This is the pattern:

```css
@font-face {
  font-family: 'Acme Grotesk';
  src: url('/api/assets/<asset-id>/AcmeGrotesk-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Acme Grotesk';
  src: url('/api/assets/<asset-id>/AcmeGrotesk-RegularItalic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
  font-display: block;
}

@font-face {
  font-family: 'Acme Grotesk';
  src: url('/api/assets/<asset-id>/AcmeGrotesk-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Acme Grotesk';
  src: url('/api/assets/<asset-id>/AcmeGrotesk-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: block;
}
```

**Every cut is its own `@font-face` block** with the same `font-family` name and a different weight/style pair. That is what lets you write `font-weight: 700` in your CSS and get the real bold cut instead of a synthesised one.

**Map weights honestly.** If the foundry calls it "Book" and it sits at 450, declare it where it actually falls — not wherever is convenient. A family whose weights are mislabelled produces layouts that look subtly wrong everywhere and are painful to debug later.

**Filenames with spaces must be URL-encoded** — `Acme%20Grotesk-Bold.woff2`. Copy the asset URL exactly as given rather than retyping it.

### Step 3 — Add aliases if the family uses name variants

Some brand systems refer to cuts by name rather than weight (`Acme Grotesk Black` rather than `font-weight: 900`). Declare those as additional families pointing at the same files, so both spellings work:

```css
@font-face {
  font-family: 'Acme Grotesk Black';
  src: url('/api/assets/<asset-id>/AcmeGrotesk-Black.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
  font-display: block;
}
```

### Step 4 — Say how to use it

End the kit with usage instructions, so any skill that references it knows what to do:

> When a skill uses this kit, include the CSS above **before** the template's own CSS.
> Then set `font-family: 'Acme Grotesk', system-ui, sans-serif;`

## Referencing the kit from other skills

Once the kit exists, other skills point at it rather than repeating the declarations:

```markdown
## Fonts

This template uses [[acme-grotesk-font-kit]]. Include its `@font-face`
block before the CSS below, then use `var(--sans)` throughout.
```

Your brand skill should name it too — see [[brand-skill-template]], which has a Typography section for exactly this.

Keeping declarations in one place means a font swap is a one-entry edit rather than a hunt through every template.

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

The rule of thumb: **a font kit belongs to a workspace; a template should survive without one.** Templates should name families and provide fallbacks; kits supply the real files locally.

## Asking for it

```text
I've uploaded six cuts of Acme Grotesk to the workspace.
Build a font kit entry for them — regular, medium, bold and their italics —
and wire it into our brand skill as the body font.
```

## Checking it worked

Ask for a render and look at it. The reliable tells that a real cut is loading rather than a synthesised one:

- **Bold** has genuinely different letterforms, not just thicker strokes.
- **Italic** shows true italic construction (a single-storey *a*, entry and exit strokes), not a slanted roman.
- Weight steps look distinct rather than collapsing into two.

If any of those look wrong, a cut is missing from the kit and the browser is faking it.
