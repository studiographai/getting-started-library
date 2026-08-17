---
entity_type: skill
entity_id: inclusive-design-principles
created_at: '2026-08-14T23:01:48.273Z'
updated_at: '2026-08-14T23:01:48.273Z'
created_by: bella-corbin
updated_by: bella-corbin
date: '2026-08-14'
tags:
  - accessibility
  - inclusive-design
  - review
  - foundational
name: Inclusive Design Principles
description: >-
  A mindset and checklist for designing content that works for people with a
  range of abilities, contexts, and constraints — recognize exclusion, provide
  text alternatives, don't rely on a single sense or ability. Use when reviewing
  any finished artboard, publication, or landing page before calling it done.
applies_to:
  - artboards
  - landing-pages
  - publications
  - presentations
license: BSD-3-Clause
loading: on-demand
source: >-
  github.com/inclusive-design/guide.inclusivedesign.ca (BSD 3-Clause License,
  OCAD University, verified 2026-08-14)
status: draft
---

# Inclusive Design Principles

A mindset and review checklist for making sure content works for people with a range of abilities, devices, and circumstances — adapted from the [Inclusive Design Guide](https://github.com/inclusive-design/guide.inclusivedesign.ca) (OCAD University's Inclusive Design Research Centre, BSD 3-Clause License).

## Recognize exclusion first

Inclusive design starts by asking who a given design choice leaves out, before asking how to add features for them. A low-contrast decorative caption excludes someone with low vision. A video with no captions excludes someone in a sound-off environment, not just someone deaf. A form that only works with a mouse excludes anyone navigating by keyboard or switch device. The habit worth building is noticing the exclusion at design time, not fixing it after a complaint.

## Solve for one, extend to many

A specific, well-understood constraint often produces a better general design than trying to design for "everyone" in the abstract. Curb cuts — the sloped sidewalk edges originally built for wheelchair users — turned out to help parents with strollers, delivery workers with hand trucks, and travelers with rolling luggage. When designing a piece of content, picking one concrete constraint (someone using a screen reader, someone on a slow connection, someone reading a translated version) and designing to make that work usually surfaces improvements that help everyone.

## Provide more than one way in

Don't make understanding depend on a single sense or a single format. If information is conveyed only through color, only through an image with no caption, or only through audio with no transcript, it has exactly one path to the reader — and that path fails for a meaningful fraction of any real audience. A chart needs a caption or summary that states the finding in words, not just the visual. An icon-only button needs a text label or accessible name, even if the label is visually hidden.

## Match reading order to visual order

Content should make sense in the order someone encounters it, not just the order it looks good in when laid out. Where visual layout diverges from natural reading order — a caption placed before the image it describes, a sidebar that visually appears mid-paragraph but belongs at the end — check that assistive technology and a plain top-to-bottom read both land in a sensible sequence.

## Applying this in Studiograph

Before marking an artboard, landing page, or publication finished, do one pass asking specifically: does anything here depend on color alone? Does every image or chart have a text equivalent that states its point? Would this still make sense read top-to-bottom with no visual layout at all? These three questions catch the majority of common exclusions in a few minutes, without needing a full accessibility audit.
