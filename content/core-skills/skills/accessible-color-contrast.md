---
entity_type: skill
entity_id: accessible-color-contrast
created_at: '2026-08-14T23:01:34.098Z'
updated_at: '2026-08-14T23:01:34.098Z'
created_by: bella-corbin
updated_by: bella-corbin
date: '2026-08-14'
tags:
  - color
  - accessibility
  - contrast
  - foundational
name: Accessible Color & Contrast
description: >-
  Practical rules for choosing color pairings that meet WCAG contrast standards
  and remain legible for colorblind viewers — text-to-background ratios, when
  color alone isn't enough to convey meaning, and quick ways to sanity-check a
  palette. Use when picking colors for any artboard, publication, or
  presentation.
applies_to:
  - artboards
  - publications
  - presentations
  - dataviz
license: MIT
loading: on-demand
source: >-
  github.com/LeaVerou/color.js (MIT License, Lea Verou & Chris Lilley, verified
  2026-08-14)
status: draft
---

# Accessible Color & Contrast

Practical rules for choosing legible, inclusive color pairings — grounded in the color-science concepts implemented by [Color.js](https://github.com/LeaVerou/color.js) (Lea Verou & Chris Lilley, MIT License), a library built around accurately computing contrast and color differences rather than eyeballing them.

## The contrast ratios that matter

WCAG defines minimum contrast ratios between text and its background: **4.5:1** for normal body text, **3:1** for large text (24px+ or 18.5px+ bold) and for meaningful UI elements like icons and borders. These aren't arbitrary — they're calibrated to what's legible for readers with low vision, and they hold up better than intuition: a color pairing that "looks fine" on a bright monitor can fail badly on a dim screen, printed output, or for a reader with reduced contrast sensitivity.

A fast manual check: convert both colors to grayscale (relative luminance) — if they look similar in grayscale, they'll fail contrast in color too, regardless of how different the hues feel. Light gray text on a white background is the most common failure in polished-looking designs, because it reads as "elegant and subtle" to a designer with full-contrast vision while being nearly unreadable to many others.

## Don't rely on color alone

Roughly 1 in 12 men and 1 in 200 women have some form of color vision deficiency, most commonly red-green. Any place where color is the *only* signal — a red vs. green status dot, a legend distinguished purely by hue — should also carry a second cue: a label, an icon, a pattern, or a position. This matters most in dataviz legends and status indicators, where color-only encoding is the single most common accessibility failure.

## Building a palette that holds together

Vary lightness and saturation, not just hue, between categories that need to be told apart — two colors of similar lightness but different hue (like a mid-saturation blue and green) can look nearly identical to colorblind viewers even though they look obviously different to most people. Reserve your highest-contrast, most saturated color for the single thing you most want noticed; if everything is loud, nothing reads as emphasized. For sequential data (low to high), use one hue that gets darker/lighter with value rather than a rainbow — a rainbow scale has no inherent "more than" ordering the eye can read.

## Applying this in Studiograph

Before finalizing a palette for an artboard or publication, check the two highest-stakes pairings by eye: body text against its background, and any color-only status or category indicators. If a pairing is borderline, the fix is almost always to darken the darker color or lighten the lighter one rather than switching hues entirely — this preserves the palette's character while fixing the actual legibility problem.
