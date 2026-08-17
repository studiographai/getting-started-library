---
entity_type: skill
entity_id: chart-choice-guide
created_at: '2026-08-14T23:00:33.927Z'
updated_at: '2026-08-14T23:00:33.927Z'
created_by: bella-corbin
updated_by: bella-corbin
date: '2026-08-14'
tags:
  - dataviz
  - charts
  - infographics
  - foundational
name: Chart Choice Guide
description: >-
  A decision framework for picking the right chart type from what your data
  actually looks like — one number, a comparison, a distribution, an evolution,
  a ranking, or a part-of-a-whole — plus the most common chart mistakes to
  avoid. Use before building any infographic, dashboard, or dataviz element.
applies_to:
  - infographics
  - dataviz
  - dashboards
  - reports
license: MIT
loading: on-demand
source: 'github.com/holtzy/data_to_viz (MIT License, Yan Holtz, verified 2026-08-14)'
status: draft
---

# Chart Choice Guide

A decision framework for picking a chart type from the shape of your data, rather than from habit or what looks impressive. Adapted from the reasoning behind [data-to-viz.com](https://github.com/holtzy/data_to_viz) (Yan Holtz, MIT License), a widely-used open reference that organizes chart types by the question being asked of the data rather than by visual style.

## Start from the question, not the chart

Before picking a chart type, name what you're actually trying to show. Almost every chart falls into one of these questions:

**"How does this compare across categories?"** → Bar chart (horizontal if labels are long or categories exceed ~7). Sort by value, not alphabetically, unless the order itself is meaningful (like months).

**"How has this changed over time?"** → Line chart for continuous trends; a bar chart if you only have a few discrete time points (e.g., 4 quarters). Never use more than 4-5 lines on one chart — beyond that, small multiples (one mini-chart per series) read faster than an overlapping tangle.

**"What's the relationship between two numeric variables?"** → Scatter plot. Add a third dimension via point size (bubble chart) only if that third variable is genuinely part of the story, not decoration.

**"How does a whole break into parts?"** → A single stacked bar or a treemap, almost always — not a pie chart. Pie charts only work with 2-3 slices where one is clearly dominant; beyond that, human eyes can't compare angles accurately and a bar chart will always communicate faster.

**"What's the distribution or spread of a single variable?"** → Histogram for one distribution, box plots or violin plots for comparing spread across several groups.

**"What's the rank order, and how has rank changed?"** → A ranked bar chart for a snapshot; a bump chart (ranked lines) if you're showing how rank shifted over time.

**"Where does this happen?"** → A map only if location is the point of the story. If you're just using a map because the data happens to have place names, a sorted bar chart usually communicates the actual comparison better.

## Common mistakes to avoid

Pie charts with more than 4 slices — switch to a bar chart. Dual y-axes — they invite false correlations between two unrelated scales; use two small charts stacked instead. 3D charts of any kind — the extra dimension distorts perception and adds nothing. Donut charts as a pie substitute — same underlying problem, just with a hole in it. Truncated bar-chart axes that don't start at zero — this exaggerates differences and reads as manipulation, even by accident. Rainbow color scales on ordered/sequential data — use a single-hue gradient instead so the eye can read "more vs. less" at a glance.

## Applying this in Studiograph

When drafting an infographic or dashboard skill, name the underlying question in one sentence before choosing a template. If the honest answer is "I'm not sure what story this data tells yet," that's a sign to explore the data first (sort it, group it, look at the range) rather than defaulting to whatever chart type looks most polished.
