---
entity_type: skill
entity_id: reproducible-documentation
created_at: '2026-08-14T23:02:02.441Z'
updated_at: '2026-08-14T23:02:02.441Z'
created_by: bella-corbin
updated_by: bella-corbin
date: '2026-08-14'
tags:
  - documentation
  - research
  - reports
  - foundational
name: Reproducible Documentation
description: >-
  Principles for writing reports and analyses a stranger could follow and trust
  — document sources and assumptions, separate raw data from interpretation, and
  make methodology visible, not just conclusions. Use when building any
  publication, report, or data-backed deliverable.
applies_to:
  - publications
  - reports
  - research
  - data-analysis
license: CC-BY 4.0
loading: on-demand
source: >-
  github.com/the-turing-way/the-turing-way (Creative Commons Attribution 4.0,
  The Turing Way Community, verified 2026-08-14)
status: draft
---

# Reproducible Documentation

Principles for writing reports and analyses that a stranger — or you, in six months — could follow, check, and trust. Adapted from [The Turing Way](https://github.com/the-turing-way/the-turing-way), an open, community-maintained handbook for reproducible, ethical, and collaborative data science (The Turing Way Community, CC-BY 4.0).

## Show the methodology, not just the conclusion

A report that states "engagement increased 20%" without saying over what period, compared to what baseline, and measured how, is asking the reader to trust a black box. State the source of every figure, the date range it covers, and any filtering or exclusion applied before the number was calculated — in a footnote or methodology callout if not in the main flow. This isn't pedantry; it's what lets a reader (or a future version of you) tell the difference between a real finding and an artifact of how the data was cut.

## Separate the raw material from the interpretation

Keep "what the data shows" distinct from "what we think it means." A results section that states the numbers, followed by a clearly separate analysis section that interprets them, lets a skeptical reader check your logic against the underlying facts. When these are blended together sentence by sentence, the reader can't tell whether they're evaluating your evidence or just your opinion.

## Write the summary a stranger needs, not the one you'd write for yourself

You already know the context — what the project was for, why this analysis exists, what decision it's meant to inform. A reader picking up the document cold doesn't. Open any report with a short, plain statement of what this document is, who it's for, and what question it answers, before diving into findings. This single paragraph is what makes a document usable months later by someone who wasn't in the room when it was made.

## Version and date everything

Note the date data was pulled, the date the document was last updated, and — for anything likely to be revised — a simple version marker. Without this, a reader has no way to know whether a number reflects last week's reality or last quarter's, and outdated reports silently get treated as current.

## Name things consistently

Use the same term for the same concept throughout a document (don't alternate between "customers," "users," and "clients" for the same group), and use the same file/section naming convention across a series of related documents. Inconsistent naming is a small thing per instance but compounds into real confusion across a long or multi-part document.

## Applying this in Studiograph

For any publication or report built from real data, include a one-line source-and-date note near the data (a footer, a footnote, or a small caption) even when the main narrative doesn't need it — it costs almost nothing to add and is the difference between a document that can be checked and one that has to be taken on faith.
