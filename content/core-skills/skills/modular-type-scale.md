---
entity_type: skill
entity_id: modular-type-scale
created_at: '2026-08-14T23:02:16.486Z'
updated_at: '2026-08-14T23:02:16.486Z'
created_by: bella-corbin
updated_by: bella-corbin
date: '2026-08-14'
tags:
  - typography
  - type-scale
  - design-systems
  - foundational
name: Modular Type Scale
description: >-
  Build a consistent, harmonious set of type sizes from a base size and a single
  ratio, instead of picking headline/subhead/body sizes by eye. Use when setting
  up typography for a new deck, publication, or artboard template.
applies_to:
  - presentations
  - publications
  - artboards
  - landing-pages
license: MIT
loading: on-demand
source: 'github.com/modularscale/modularscale-sass (MIT License, verified 2026-08-14)'
status: draft
---

# Modular Type Scale

A method for generating a consistent, harmonious set of type sizes from one base size and one ratio, rather than picking headline/subhead/body/caption sizes by eye and hoping they relate to each other. Adapted from the modular-scale concept implemented in [modularscale-sass](https://github.com/modularscale/modularscale-sass) (MIT License).

## The core idea

Pick a base font size (commonly 16-18px for body text) and a ratio, then generate every other size in the system by multiplying or dividing by that ratio repeatedly. The result is a set of sizes that feel related to each other the same way musical intervals do — because that's literally where the common ratios come from.

**Common ratios and their character:**
- **1.125 (major second)** — very tight, subtle size jumps; good for dense interfaces or data-heavy reports where you want hierarchy without much visual weight difference.
- **1.2 (minor third)** — a safe, versatile default for most decks and publications; noticeable hierarchy without huge jumps.
- **1.25 (major third)** — a bit more contrast; good when you want headlines to feel clearly dominant.
- **1.333 (perfect fourth)** — bold, editorial hierarchy; good for magazine-style layouts and statement-driven decks.
- **1.618 (golden ratio)** — dramatic jumps, best used sparingly (e.g., one big cover headline vs. everything else), since applied across many steps it gets unwieldy fast.

## Building the scale

From a base of 16px at ratio 1.25: step up gives 20px, 25px, 31px, 39px — and stepping down gives 12.8px. In practice, round to clean numbers once you've generated the scale (20px stays 20px; 31.25px becomes 32px) — the ratio is a generative tool, not a precision requirement, and legibility beats mathematical purity at the small end.

A typical five-step assignment: base (16-18px) for body text, one step up for lead paragraphs or captions-with-emphasis, two steps up for subheads, three-to-four steps up for section headlines, and the top of the scale reserved for a single cover/hero moment.

## Why this beats picking sizes by eye

Ad hoc sizing (making a headline "look about right" against a subhead) tends to drift inconsistently across a document — the gap between H1 and H2 on page one ends up different from the gap on page four, because each decision was made independently. A ratio-driven scale guarantees every size relationship in the document is the same relationship, which is what actually reads as "designed" rather than "assembled."

## Applying this in Studiograph

When setting up a new deck theme, publication template, or artboard system, decide the base size and ratio once, at the start, as CSS custom properties (`--type-base`, `--type-ratio` or simply the computed pixel values) — then pull every text size in the piece from that scale rather than choosing sizes per-element as you go.
