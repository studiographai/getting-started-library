---
entity_type: skill
entity_id: bento-grid
created_at: '2026-08-16T16:58:55.606Z'
updated_at: '2026-08-16T16:58:55.606Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - infographic
  - template
  - grid
  - bento
  - summary
  - social
  - marketing
name: Bento Grid
description: >-
  A modular grid of unequal tiles — one hero tile plus supporting tiles of
  varying span, each holding a stat, a label, and an optional line of context.
  Use for "everything about X at a glance" summaries, product feature roundups,
  and year-in-review posts.
applies_to:
  - infographic
  - artboard
  - social-media
  - marketing
  - presentation
loading: on-demand
status: draft
---
# Bento Grid

A modular grid of unequal tiles, borrowed from the compartmented Japanese lunch box: one hero tile carrying the headline number, and a handful of supporting tiles of varying span around it. Every tile is the same object — a mono tag, a serif stat, a label, and optionally one line of context — so the only thing that varies is how much room each one gets. Span is the hierarchy.

## When to use

Reach for Bento Grid when the content is a *set of unrelated-but-related facts about one subject* and the reader should be able to take it all in without reading in order: year-in-review recaps, "everything about X at a glance" summaries, product feature roundups, quarterly business snapshots, launch-day fact cards.

Avoid it when the items form a sequence, a hierarchy, or a comparison — a bento grid deliberately flattens relationships, so a process becomes unreadable in it. Avoid it too when every fact is equally important: with no legitimate hero, the layout has nothing to organise around and a Stat Row List will serve better. And avoid it for one long argument — tiles hold fragments, not prose.

Conventions worth keeping: exactly **one** hero tile, never two competing ones. Keep the total to **5–7 tiles** — past seven the grid turns into wallpaper and the density budget (~4/10) blows out. Let the grid rows divide evenly (`grid-template-rows: repeat(3, 1fr)` inside a flex-filled container) so tiles never have to be hand-measured. Push the stat to the bottom of each tile with `margin-top:auto` — a common baseline across differently-sized tiles is what makes the grid read as one object rather than six cards. Accent marks the hero tile only.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | stats, labels |
| muted | #4f5d75 | tags, context lines, footer |
| accent | #eb6c36 | hero stat + hero top rule — nothing else |
| hairline | #d5d8e0 | tile borders, footer rule |

Tile fills are tonal ink ramps, not colors: `rgba(45,49,66,0.04)` for supporting tiles, `rgba(45,49,66,0.08)` for the hero. Never give tiles different hues to distinguish them — span already does that job.

## Typography

No external fonts — Studiograph frames are sandboxed and cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | kicker above the headline |
| headline | 'Source Serif 4', Georgia, serif | 46px, 400, −0.02em | title |
| tile tag | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | metric name, top of each tile |
| hero stat | 'Source Serif 4', Georgia, serif | 92px, 400, −0.02em | the one number that matters |
| tile stat | 'Source Serif 4', Georgia, serif | 46px, 400, −0.02em | supporting numbers |
| tile label | 'DM Sans', system-ui, sans-serif | 16px, 600 (hero 22px) | what the number means |
| tile note | 'DM Sans', system-ui, sans-serif | 13px (hero 15px) | one line of context |

## Layout

Default canvas **1080 × 1080** (square — feed-friendly). Header block (eyebrow + serif headline) at the top, a 4-column × 3-row grid filling the remaining height, and a mono footer strip above a hairline. The hero tile spans 2 columns × 2 rows; the other tiles take 1 or 2 columns of a single row. Twelve cells in total, so the spans must sum to 12 — for example hero (4) + wide (2) + small (1) + small (1) + wide (2) + wide (2).

**Widescreen variant:** for a 1600 × 900 canvas, switch to `grid-template-columns: repeat(6, 1fr)` and `grid-template-rows: repeat(2, 1fr)` with the hero at `span 2 / span 2`; drop the headline to 40px and put the eyebrow and headline on one baseline to buy back vertical room. Everything else — tile anatomy, tonal ramp, single accent — is unchanged.

### `<style>`

```html
<style>
:root{
  --bn-paper:#f5f5f5; --bn-ink:#2d3142; --bn-muted:#4f5d75;
  --bn-accent:#eb6c36; --bn-hairline:#d5d8e0;
  --bn-serif:'Source Serif 4',Georgia,serif;
  --bn-sans:'DM Sans',system-ui,sans-serif;
  --bn-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.bn{width:1080px;height:1080px;display:flex;flex-direction:column;padding:72px;
  background:var(--bn-paper);color:var(--bn-ink);font-family:var(--bn-sans);}
.bn-eyebrow{font-family:var(--bn-mono);font-size:11px;font-weight:500;letter-spacing:.18em;
  text-transform:uppercase;color:var(--bn-muted);margin-bottom:10px;}
.bn-title{font-family:var(--bn-serif);font-size:46px;font-weight:400;letter-spacing:-.02em;
  line-height:1.1;margin-bottom:28px;}
.bn-grid{flex:1;display:grid;grid-template-columns:repeat(4,1fr);
  grid-template-rows:repeat(3,1fr);gap:14px;}
.bn-tile{display:flex;flex-direction:column;padding:26px 28px;border-radius:4px;
  background:rgba(45,49,66,0.04);border:1px solid var(--bn-hairline);}
.bn-tile--wide{grid-column:span 2;}
.bn-tile--hero{grid-column:span 2;grid-row:span 2;padding:36px 38px;
  background:rgba(45,49,66,0.08);border-top:2px solid var(--bn-accent);}
.bn-tag{font-family:var(--bn-mono);font-size:11px;font-weight:500;letter-spacing:.18em;
  text-transform:uppercase;color:var(--bn-muted);}
.bn-stat{font-family:var(--bn-serif);font-size:46px;font-weight:400;letter-spacing:-.02em;
  line-height:1;margin-top:auto;}
.bn-tile--hero .bn-stat{font-size:92px;color:var(--bn-accent);}
.bn-label{font-size:16px;font-weight:600;line-height:1.3;margin-top:10px;}
.bn-tile--hero .bn-label{font-size:22px;margin-top:16px;}
.bn-note{font-size:13px;line-height:1.45;color:var(--bn-muted);margin-top:6px;}
.bn-tile--hero .bn-note{font-size:15px;margin-top:10px;}
.bn-foot{display:flex;justify-content:space-between;margin-top:18px;padding-top:12px;
  border-top:1px solid var(--bn-hairline);font-family:var(--bn-mono);font-size:10px;
  letter-spacing:.14em;text-transform:uppercase;color:var(--bn-muted);}
</style>
```

### Example

```html
<div class="bn">
  <p class="bn-eyebrow">Year in review · 2026</p>
  <h1 class="bn-title">Northwind Analytics, at a glance</h1>
  <div class="bn-grid">
    <div class="bn-tile bn-tile--hero">
      <span class="bn-tag">Annual recurring revenue</span>
      <div class="bn-stat">$18.4M</div>
      <div class="bn-label">Up 62% year over year</div>
      <p class="bn-note">Net revenue retention held at 118% across all three tiers.</p>
    </div>
    <div class="bn-tile bn-tile--wide">
      <span class="bn-tag">Customers</span>
      <div class="bn-stat">2,940</div>
      <div class="bn-label">Paying teams</div>
      <p class="bn-note">Added 1,110 net new; churned 84.</p>
    </div>
    <div class="bn-tile">
      <span class="bn-tag">Uptime</span>
      <div class="bn-stat">99.98%</div>
      <div class="bn-label">Availability</div>
    </div>
    <div class="bn-tile">
      <span class="bn-tag">Team</span>
      <div class="bn-stat">148</div>
      <div class="bn-label">People, 11 countries</div>
    </div>
    <div class="bn-tile bn-tile--wide">
      <span class="bn-tag">Product</span>
      <div class="bn-stat">41</div>
      <div class="bn-label">Releases shipped</div>
      <p class="bn-note">Two majors, thirty-nine incremental.</p>
    </div>
    <div class="bn-tile bn-tile--wide">
      <span class="bn-tag">Support</span>
      <div class="bn-stat">4h 12m</div>
      <div class="bn-label">Median first response</div>
      <p class="bn-note">Down from 9h 40m in January.</p>
    </div>
  </div>
  <div class="bn-foot"><span>Northwind Analytics</span><span>Internal figures · Dec 2026</span></div>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry: one frame, geometry 1080 × 1080, background `#f5f5f5`. Put the `<style>` block in `shared.head` and the `.bn` markup in the frame content. Because `.bn` is a fixed-height flex column and `.bn-grid` takes `flex:1` with `1fr` rows, tiles resize themselves — never hard-code tile heights, and never set the frame to height `"auto"` (the point of the format is that it fills a square exactly).

If a tile's content overflows, shorten the copy rather than shrinking the type: labels want to stay under about 30 characters and notes under about 60. Verify with `inspect_artifact` and check `framesOverflowing` is empty. See the working example artboard at `infographics/examples/bento-grid-preview`.

## Source & license

The *bento grid* is a common infographic and dashboard layout shape — a modular grid of unequal tiles — and is catalogued as a named layout type in open-source layout taxonomies, including the layout-type catalog in [baoyu-skills](https://github.com/JimLiu/baoyu-skills) (MIT License). Only the layout **name and concept** are shared: that project is a raster/image-generation pipeline, so there is no code in common and none was copied.

The HTML, CSS, palette, type scale, and editorial conventions documented here are original work authored for Studiograph in the house infographic skin.
