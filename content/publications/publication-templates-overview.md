---
entity_type: note
entity_id: publication-templates-overview
created_at: '2026-08-14T22:14:46.126Z'
updated_at: '2026-08-16T16:52:09.308Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
tags:
  - publication
  - template
  - overview
name: Publication Templates — Overview
---
# Publication Templates — Overview

Each document template in this folder is a **skill**. A skill is a document that tells the AI how something should look — here, that means the page design of a finished document: type, margins, running headers, page numbers. In this folder, "skill" and "document template" mean the same thing.

## 1. Pick a template

The example documents are in `publications` → `examples` — a real, fully designed document for every template.

| Template | Feel | Best for | Example |
|---|---|---|---|
| [[minimal-report]] | Stripped-back, quiet | Internal reports, memos, whitepapers | [[minimal-report-template]] |
| [[corporate-brochure]] | Bold cover, stat cards, brand bar | Annual reports, capability brochures | [[corporate-brochure-template]] |
| [[editorial-newsletter]] | Masthead, two-column bulletin | Company newsletters, event recaps | [[editorial-newsletter-template]] |
| [[tufte-essay]] | Scholarly, notes in the margin | Research essays, in-depth explainers | [[tufte-essay-template]] |
| [[latex-article]] | Academic paper, numbered sections | Research and technical papers | [[latex-article-template]] |
| [[paged-manuscript]] | Literary book page, drop caps | Long-form manuscripts | [[paged-manuscript-template]] |

Open a few and pick the feel that fits.

## 2. Ask for your document

```text
Write a document using the `minimal-report` skill.

Topic: Q3 performance summary
Audience: the leadership team, reading before the offsite
Length: about 4 pages

Use the notes I've pasted below. Show me an outline before you write it.
```

Name the skill exactly as it is written on its entry — `minimal-report`, `corporate-brochure`. That is what loads the design.

Pages take care of themselves — content flows across as many pages as it needs and numbers them automatically.

**Put it on your letterhead.** Upload your logo, then add one line to the request: *"Use our letterhead — logo top left on the first page, 'Acme Inc · 100 Main St · acme.com' in the footer of every page."*

Better still, put it in a brand skill once and never type it again — see [[your-brand-overview]].

## 3. Adjust

Ask by page or section: *"tighten the intro on page 2"*, *"give the table its own page."*

When it's ready, export it as a PDF to send it anywhere.

## Sources

Template provenance and licensing: [[sources-and-licenses]].
