---
entity_type: note
entity_id: working-with-data-overview
created_at: '2026-08-16T23:18:08.546Z'
updated_at: '2026-08-16T23:35:09.004Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - data
  - charts
  - dashboard
  - overview
name: Working with Data — Overview
---
# Working with Data — Overview

Data lives in this workspace as a **sheet** — a table you can sort, filter, and ask questions about. From a sheet you can build charts, dashboards, and the figures that go into decks and reports.

This folder covers the whole path: get the data in, look at it, chart it, arrange it.

## 1. Get your data in

Upload a CSV or Excel file and it becomes a sheet. Nothing to configure — the first row becomes the column names.

You can also just describe what you have:

```text
Here are our signups by month for the last year — turn this into a sheet.
```

**Practice on ours first.** [[sample-quarterly-data]] is a small sheet — four quarters of signups, revenue and churn across four regions. Every example in this folder uses it, so you can follow along before pointing anything at your own numbers.

## 2. Ask questions of it

You do not have to write formulas. Ask:

```text
In `sample-quarterly-data`, which region grew fastest between Q1 and Q4?
```

```text
Add a column for revenue per signup, and sort by it.
```

Good questions to start with: *what changed, what's the outlier, what's the trend, what's the split.* The answers tell you which chart you need — which is the next step.

## 3. Chart it

Pick the shape that matches the question:

| Template | Answers | Example |
|---|---|---|
| [[stat-tiles]] | "What's the headline number?" | [[stat-tiles-preview]] |
| [[bar-chart]] | "How do these compare?" | [[bar-chart-preview]] |
| [[line-chart-template]] | "How has this changed over time?" | [[line-chart-preview]] |
| [[dashboard-layout]] | "Show me everything at once" | [[dashboard-layout-preview]] |

Then ask for it:

```text
Make a bar chart from `sample-quarterly-data` using the `bar-chart` skill.

Show Q4 revenue by region, highest first. Highlight North America.
```

Not sure which form fits? `chart-choice-guide` in [[core-skills-overview]] walks through it, and each template's "When to use" says plainly when a *different* template is the right answer.

**One number is often the honest answer.** If the point is "revenue grew 63%", a stat tile says it better than a chart. Reach for [[stat-tiles]] before you reach for axes.

## 4. Arrange it

Several charts about one subject belong on one canvas. [[dashboard-layout]] covers the grid, the reading order, and the consistency rules that make a set of panels read as one thing rather than four unrelated pictures.

## How these charts are designed

Every template here follows the same rules, and they are worth knowing because they are the difference between a chart that informs and one that misleads:

- **One vertical axis, always.** Two measures on two scales in one chart is the most common way to imply a relationship that isn't in the data. Two measures means two charts.
- **Colour carries identity, not decoration.** A single series is one ink-coloured mark with the accent reserved for the one thing you want seen. Multiple series use a fixed palette in a fixed order, so the same entity keeps the same colour everywhere — including across the panels of a dashboard.
- **The palette is checked, not eyeballed.** The multi-series colours were validated for colour-vision deficiency and contrast rather than chosen by taste.
- **Colour is never the only signal.** Series carry direct labels or a legend; deltas carry a sign or an arrow, not just red and green.
- **The accent and the palette don't mix.** Our accent is a coral that sits almost exactly on the palette's orange. On a single-series chart the accent marks the one thing that matters. On a multi-series chart it would read as "the orange series" instead — so emphasis there is carried by weight and ink against grey, never by the accent.
- **The marks are quiet.** Thin bars and lines, recessive gridlines, labels only where they earn their place.

Name your brand skill alongside any of these ([[your-brand-overview]]) to swap the accent for your own.

## Sources

Provenance and licensing: [[sources-and-licenses]].
