---
entity_type: note
entity_id: your-brand-overview
created_at: '2026-08-16T16:50:44.049Z'
updated_at: '2026-08-16T22:29:53.119Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - brand
  - skill
  - onboarding
  - overview
name: Your Brand — Overview
---
# Your Brand — Overview

Every template in this workspace is deliberately neutral. This folder is where you make it yours: a **brand skill** that holds your colours, fonts, logo and voice in one place, so you never have to describe them again.

Write it once. From then on, name it in any request and everything comes out looking like you.

## 1. Fill in the template

Open [[brand-skill-template]]. It is a fill-in-the-blanks skill with every field a template needs, and notes on what to put where.

Two ways to fill it in:

**Have it done for you.** Point at what you already have:

```text
Create our brand skill from the attached brand guidelines PDF.
Use `brand-skill-template` as the structure. Ask me about anything the
document doesn't cover.
```

Our website, a logo file, a deck that already looks right — any of these work as a starting point.

**Do it by hand.** Duplicate [[brand-skill-template]] into your own folder, rename it (`acme-brand`), and type your values over the placeholders.

Not sure how much detail to give? [[example-brand-northwind]] is the template filled in by a (fictional) design studio — it shows the level that actually works.

## 2. Use it

Name it alongside any template:

```text
Build a deck with the `signal` skill, styled with `acme-brand`.
```

```text
Write a Q3 report using `minimal-report` and `acme-brand`,
on our letterhead.
```

The template supplies the layout; your brand skill supplies the colours, type, logo and tone. When they disagree, say which wins: *"keep Signal's layout but use our accent colour throughout."*

## 3. Install your fonts

Colours apply themselves. Fonts need one extra step: a canvas cannot fetch fonts from the internet, so the font file has to live in your workspace. Skipping this fails silently — the piece renders in a fallback and looks almost right.

- Using a free font from Google Fonts? → [[using-google-fonts]]
- Using a licensed or custom brand typeface? → [[using-custom-fonts]]

Both cover the upload, the `@font-face` pattern, and how to check it actually worked.

## 4. Keep it current

A brand skill is a living entry, not a one-time setup. When something changes — a new colour, a font swap, a phrase you have banned — edit the entry and every future request picks it up.

## What else is worth capturing

Brand is the first skill most teams write. These are the ones worth writing next:

| Skill | What it holds | Write it when… |
|---|---|---|
| Voice | How you sound — person, tense, words you avoid | your team argues about wording in reviews |
| Letterhead | Logo placement, footer text, margins | you send documents outside the company |
| Report format | Standard sections, in order | the same report is written every month |
| Review checklist | What "done" means before something ships | work goes out with the same mistakes |

Ask for any of them the same way: *"Create a skill called `acme-voice` that captures…"* — see [[core-skills-overview]] for the general pattern.
