---
entity_type: note
entity_id: core-skills-overview
created_at: '2026-08-14T23:02:35.120Z'
updated_at: '2026-08-16T16:52:00.618Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - templates
  - core-skills
  - open-source
  - overview
name: Core Skills — Overview
---
# Core Skills — Overview

The skills in this folder are working techniques, not templates. Each one teaches the AI a method — how to choose a chart, edit a sentence, check a colour palette — that improves anything you make, in any folder.

## Use one

Name the skill in any request:

```text
Rewrite this page using the `clear-concise-writing` skill.
```

```text
Here's our signup data. Pick the right chart with `chart-choice-guide`,
and check the colours with `accessible-color-contrast`.
```

Skills combine — a deck can take its look from a presentation template and its words from `clear-concise-writing`.

## The set

| Skill | Reach for it when… |
|---|---|
| [[prompt-engineering-fundamentals]] | your requests aren't getting the results you want |
| [[clear-concise-writing]] | a headline or paragraph needs tightening |
| [[plain-language-content-design]] | copy needs to be scannable and plain |
| [[chart-choice-guide]] | you have data and don't know which chart |
| [[diagramming-with-mermaid]] | you need a flowchart, sequence, or timeline fast |
| [[accessible-color-contrast]] | choosing colours everyone can read |
| [[inclusive-design-principles]] | reviewing a finished piece for who it might exclude |
| [[modular-type-scale]] | text sizes feel arbitrary |
| [[reproducible-documentation]] | a report has to hold up to a stranger checking it |

`diagramming-with-mermaid` is for quick text sketches — for a designed, client-ready diagram, use the templates in [[diagram-templates-overview]].

## Create your own

The most valuable skill is the one only your team can write: your brand. A skill is just an entry that states the rules — ask for one:

```text
Create a skill called `acme-brand`.

Colors: ink #1A1A1A, paper #FAF8F4, accent #E4572E
Fonts: Archivo for headings, Inter for body
Voice: plain and confident; no exclamation marks
Logo: the attached SVG, on light backgrounds only
```

From then on, name it anywhere: *"Build the deck with `signal`, styled with `acme-brand`."*

The same move works for a team voice, a report format, a review checklist — anything you find yourself explaining twice.

For the brand skill specifically, [[your-brand-overview]] has a fill-in-the-blanks template and a worked example.

## Sources

Skill provenance and licensing: [[sources-and-licenses]].
