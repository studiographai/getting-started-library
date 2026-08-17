---
entity_type: skill
entity_id: brand-skill-template
created_at: '2026-08-16T16:51:19.274Z'
updated_at: '2026-08-16T22:29:57.055Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - brand
  - template
  - identity
  - voice
  - starter
name: Brand Skill Template
description: >-
  Fill-in-the-blanks template for capturing your organisation's colours,
  typography, logo, and voice as a reusable skill. Duplicate it, replace the
  placeholders, and name it in any request to brand decks, documents, pages,
  diagrams and graphics.
applies_to:
  - presentation
  - publication
  - landing-page
  - infographic
  - diagram
  - any-canvas
loading: on-demand
status: template
---
# Brand Skill Template

**This is a template, not a finished skill.** Duplicate it into your own folder, rename it after your organisation (`acme-brand`), and replace everything in `[SQUARE BRACKETS]`. Delete any section you do not need — a short, accurate brand skill beats a long, half-guessed one.

Once saved, name it in any request: *"Build the deck with `signal`, styled with `acme-brand`."*

---

## Identity

**Organisation:** `[ACME INC]`
**What we do, in one line:** `[[ONE SENTENCE — used for footers, about blocks, and meta descriptions]]`
**Audience:** `[WHO READS OUR WORK — e.g. enterprise IT buyers, museum visitors, prospective students]`

## Colours

Give every colour a role, not just a name. Roles are what get applied; hex values are what they resolve to.

| Role | Hex | Where it goes |
|---|---|---|
| ink | `[#1A1A1A]` | body text, headlines |
| paper | `[#FFFFFF]` | page and slide backgrounds |
| muted | `[#6B7280]` | captions, secondary text, axis labels |
| accent | `[#E4572E]` | the one thing that should draw the eye |
| line | `[#E5E7EB]` | rules, borders, gridlines |

**Rules worth stating:**
- The accent marks one or two elements per piece. `[IF IT IS ON FIVE THINGS, IT MARKS NOTHING.]`
- `[ANY FORBIDDEN COMBINATION — e.g. never accent on dark backgrounds; never our red and green adjacent.]`

## Typography

| Role | Family | Weight / size | Notes |
|---|---|---|---|
| headline | `[ARCHIVO]` | `[700, 40–56px]` | `[TIGHT TRACKING, SENTENCE CASE]` |
| body | `[INTER]` | `[400, 16–18px]` | `[LINE HEIGHT 1.5]` |
| caption / label | `[INTER]` | `[500, 12–14px, UPPERCASE 0.08em]` | |
| numerals | `[SAME AS BODY, TABULAR]` | | `[FOR CHARTS AND TABLES]` |

**Fallbacks:** `[GEORGIA, SERIF]` / `[SYSTEM-UI, SANS-SERIF]` — used when the licensed font is not available in a sandboxed page.

> **Fonts must be uploaded to this workspace to render.** Upload your `.woff2` files as assets first, then name them here. Without that, pages fall back to the stack above — silently, with no error. See [[using-google-fonts]] for a free font, or [[using-custom-fonts]] for a licensed one. If you cannot licence a font for web use, choose the closest open equivalent and say so here.

**Font kit:** `[LINK THE FONT KIT ENTRY HOLDING THE @font-face DECLARATIONS, IF YOU HAVE ONE]`

## Logo

**Files:** `[ATTACH OR NAME THE UPLOADED ASSETS — primary, reversed/white, and mark-only]`
**Clear space:** `[MINIMUM SPACE AROUND IT — e.g. the height of the M on all sides]`
**Minimum size:** `[E.G. 24PX TALL ON SCREEN, 12MM IN PRINT]`
**Placement:** `[E.G. TOP LEFT ON DOCUMENTS, BOTTOM RIGHT ON SLIDES]`
**Never:** `[E.G. RECOLOUR, STRETCH, ADD EFFECTS, PLACE ON A BUSY PHOTO]`

## Letterhead and furniture

For documents, this is what appears on every page:

**Header:** `[LOGO TOP LEFT, FIRST PAGE ONLY]`
**Footer:** `[ACME INC · 100 MAIN ST, CITY · acme.com]`
**Page numbers:** `[BOTTOM RIGHT, "PAGE N OF M", NOT ON THE COVER]`
**Margins:** `[TOP 96 / SIDES 72 / BOTTOM 84]`

## Voice

**We sound:** `[PLAIN, CONFIDENT, SPECIFIC]`
**We never sound:** `[BREATHLESS, JARGON-HEAVY, SALESY]`
**Person and tense:** `[FIRST PERSON PLURAL — "WE BUILD" NOT "ACME BUILDS"; PRESENT TENSE]`

**Words we use:** `[PARTNER, CRAFT, EVIDENCE]`
**Words we avoid:** `[LEVERAGE, SYNERGY, REVOLUTIONARY, GAME-CHANGING]`

**Punctuation and format:** `[NO EXCLAMATION MARKS. SENTENCE CASE HEADLINES. OXFORD COMMA. NUMERALS FOR 10+.]`

**Before / after:**

> ✗ `[Our revolutionary platform leverages cutting-edge AI to transform your workflow!]`
> ✓ `[Our platform automates the reporting work your team does by hand each month.]`

Two or three of these pairs teach tone faster than any list of adjectives.

## Applying this

When this skill is named alongside a template:

- **Colours and type** replace the template's neutral defaults.
- **Layout** stays with the template unless it directly conflicts.
- **Voice** governs every word written into the piece.
- **Logo and letterhead** apply to documents and decks automatically.

If a template's look and these rules genuinely conflict, the request wins — say which you want: *"keep the template's dark theme, use our accent."*

## Fill this in for you

Rather than typing it all, point at what exists:

```text
Fill in `brand-skill-template` from the attached brand guidelines.
Ask me about anything the document doesn't cover, and flag anything
you had to guess.
```

Sources that work well: a brand guidelines PDF, your website, a deck that already looks right, or a logo file plus a few sentences about tone.
