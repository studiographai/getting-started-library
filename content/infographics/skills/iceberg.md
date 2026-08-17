---
entity_type: skill
entity_id: iceberg
created_at: '2026-08-16T17:01:05.776Z'
updated_at: '2026-08-16T17:02:40.470Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - infographic
  - template
  - metaphor
  - iceberg
  - hidden-cost
  - social
  - marketing
name: Iceberg
description: >-
  The visible-vs-hidden metaphor — a small labelled tip above a waterline rule,
  and a much larger submerged mass below holding 3–5 stacked hidden factors. Use
  for "what people see vs what it takes", cost breakdowns, and skill or effort
  explainers.
applies_to:
  - infographic
  - artboard
  - social-media
  - marketing
  - presentation
loading: on-demand
status: draft
---
# Iceberg

The oldest visible-vs-hidden metaphor there is, drawn straight: a small tip above a waterline rule, and a submerged mass below it many times the size, holding the 3–5 things nobody sees. The whole argument is made by proportion — the tip must look almost trivially small next to the mass, or the graphic says nothing.

## When to use

Reach for Iceberg when the point is that the visible thing is a fraction of the real thing: "what the client sees vs what the project takes", true cost of ownership, the practice behind a skill, the operational work behind a launch, hidden line items in a budget.

Avoid it when the hidden items are *not* subordinate to the visible one — if the parts are peers, that's a Bento Grid or a Stat Row List. Avoid it when there is no genuine asymmetry to show: if the hidden work is only slightly larger than the visible work, the metaphor overclaims and the reader will notice. And avoid it for more than five submerged items; the mass becomes a list with a shape drawn around it, which is worse than an honest list.

Conventions worth keeping: give the tip **one** label and **one** line, never a stack — its smallness is the argument. Quantify the split somewhere on the waterline ("≈ 15% of the hours") so the proportion is a claim rather than a vibe. Keep the submerged rows parallel in construction: mono tag, label, one line of context, each. Let the taper at the bottom stay empty except for a single closing line — resist filling it. Density stays around 4/10.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas, sky above the waterline |
| ink | #2d3142 | headline, tip outline, row labels |
| muted | #4f5d75 | deck, mono tags, context lines |
| accent | #eb6c36 | the waterline rule and its two mono labels — nothing else |
| hairline | #d5d8e0 | (unused in the default build; reserve for a footer rule) |

The submerged mass is a tonal ink ramp — `rgba(45,49,66,0.08)` fill with `rgba(45,49,66,0.14)` row dividers — not a blue "water" colour. The tip is white with a `rgba(45,49,66,0.35)` outline. Depth is conveyed by value, not hue.

## Typography

No external fonts — Studiograph frames are sandboxed and cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | kicker |
| headline | 'Source Serif 4', Georgia, serif | 44px, 400, −0.02em | title |
| deck | 'DM Sans', system-ui, sans-serif | 17px, muted | one-sentence setup under the title |
| tip label | 'DM Sans', system-ui, sans-serif | 20px, 600 | what the reader sees |
| tip note | 'DM Sans', system-ui, sans-serif | 15px, muted | one line, above the triangle |
| waterline | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.16em caps, accent | rule labels + the proportion figure |
| row tag | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.16em caps, muted | submerged item category |
| row label | 'DM Sans', system-ui, sans-serif | 19px, 600 | submerged item name |
| row note | 'DM Sans', system-ui, sans-serif | 14px, muted | one line of context |

## Layout

Default canvas **1080 × 1350** (portrait — carousel and story friendly). Five stacked blocks in a fixed-height flex column: header, tip, waterline, mass (`flex:1`), and the mass's own closing line.

The mass is a plain `<div>` with a `clip-path` polygon, so ordinary HTML rows flow inside it:

```
polygon(24% 0, 76% 0, 100% 9%, 100% 78%, 70% 100%, 30% 100%, 0 78%, 0 9%)
```

The shape is full width between 9% and 78% of its height — that is the **safe band**, and every row must sit inside it. Give the mass a `padding-top` that clears the 9% shoulder (about 96px on an 800px-tall mass) and stop the rows before the 78% taper. Below the taper only one short centred line is safe: at 90% height the shape is roughly 60% of full width, so cap that line at about `max-width: 300px`.

The tip is a small inline SVG triangle whose base sits flush on the waterline. The waterline itself is a flex row — mono label, a `flex:1` accent rule, mono figure — so the labels never sit on top of the line.

### `<style>`

```html
<style>
:root{
  --ib-paper:#f5f5f5; --ib-ink:#2d3142; --ib-muted:#4f5d75;
  --ib-accent:#eb6c36; --ib-hairline:#d5d8e0;
  --ib-serif:'Source Serif 4',Georgia,serif;
  --ib-sans:'DM Sans',system-ui,sans-serif;
  --ib-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.ib{width:1080px;height:1350px;display:flex;flex-direction:column;padding:80px 80px 56px;
  background:var(--ib-paper);color:var(--ib-ink);font-family:var(--ib-sans);}
.ib-eyebrow{font-family:var(--ib-mono);font-size:11px;font-weight:500;letter-spacing:.18em;
  text-transform:uppercase;color:var(--ib-muted);margin-bottom:10px;}
.ib-title{font-family:var(--ib-serif);font-size:44px;font-weight:400;letter-spacing:-.02em;
  line-height:1.12;margin-bottom:14px;}
.ib-deck{font-size:17px;line-height:1.55;color:var(--ib-muted);max-width:60ch;margin-bottom:46px;}
.ib-tip{text-align:center;}
.ib-tip-label{font-size:20px;font-weight:600;}
.ib-tip-note{font-size:15px;line-height:1.5;color:var(--ib-muted);margin-bottom:14px;}
.ib-tip svg{display:block;margin:0 auto;}
.ib-water{display:flex;align-items:center;gap:18px;}
.ib-water span{font-family:var(--ib-mono);font-size:11px;font-weight:500;letter-spacing:.16em;
  text-transform:uppercase;color:var(--ib-accent);white-space:nowrap;}
.ib-water i{flex:1;height:1.5px;background:var(--ib-accent);}
.ib-mass{flex:1;display:flex;flex-direction:column;padding:96px 76px 0;
  background:rgba(45,49,66,0.08);
  clip-path:polygon(24% 0,76% 0,100% 9%,100% 78%,70% 100%,30% 100%,0 78%,0 9%);}
.ib-row{padding:20px 0;border-bottom:1px solid rgba(45,49,66,0.14);}
.ib-row:last-of-type{border-bottom:none;}
.ib-tag{display:block;font-family:var(--ib-mono);font-size:11px;font-weight:500;
  letter-spacing:.16em;text-transform:uppercase;color:var(--ib-muted);margin-bottom:6px;}
.ib-label{font-size:19px;font-weight:600;line-height:1.3;margin-bottom:4px;}
.ib-note{font-size:14px;line-height:1.45;color:var(--ib-muted);}
.ib-close{margin:auto auto 48px;max-width:300px;text-align:center;font-family:var(--ib-mono);
  font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ib-muted);
  line-height:1.7;}
</style>
```

### Example

```html
<div class="ib">
  <p class="ib-eyebrow">Anatomy of a project</p>
  <h1 class="ib-title">What a website redesign actually involves</h1>
  <p class="ib-deck">Clients approve the thing they can see. Most of the work happens underneath it.</p>

  <div class="ib-tip">
    <div class="ib-tip-label">What the client sees</div>
    <p class="ib-tip-note">A new website, live on a Tuesday.</p>
    <svg width="220" height="118" viewBox="0 0 220 118" xmlns="http://www.w3.org/2000/svg" role="img">
      <polygon points="110,4 216,116 4,116" fill="#ffffff" stroke="rgba(45,49,66,0.35)" stroke-width="1.2"/>
    </svg>
  </div>

  <div class="ib-water"><span>Launch day</span><i></i><span>≈ 15% of the hours</span></div>

  <div class="ib-mass">
    <div class="ib-row">
      <span class="ib-tag">Discovery</span>
      <div class="ib-label">Audit, interviews, analytics</div>
      <p class="ib-note">Six weeks finding out what the current site actually does.</p>
    </div>
    <div class="ib-row">
      <span class="ib-tag">Information architecture</span>
      <div class="ib-label">Sitemap, taxonomy, redirects</div>
      <p class="ib-note">1,400 URLs mapped down to 380, with a redirect for every one.</p>
    </div>
    <div class="ib-row">
      <span class="ib-tag">Content</span>
      <div class="ib-label">Writing, editing, migration</div>
      <p class="ib-note">Roughly 60% of the schedule, and almost none of it visible.</p>
    </div>
    <div class="ib-row">
      <span class="ib-tag">Governance</span>
      <div class="ib-label">Training, documentation, handover</div>
      <p class="ib-note">So the site still looks like this in eighteen months.</p>
    </div>
    <p class="ib-close">…plus everything not in the timeline</p>
  </div>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry: one frame, geometry 1080 × 1350, background `#f5f5f5`. Put the `<style>` block in `shared.head` and the `.ib` markup in the frame content. Never set the frame height to `"auto"` — the mass uses `flex:1` and percentage `clip-path`, both of which need a resolved height.

When you add or remove a submerged row, re-check the taper: rows must end before 78% of the mass height or their right-hand words will be clipped by the polygon. The quickest test is `inspect_artifact` — `framesOverflowing` catches vertical overflow, but clipping by `clip-path` is silent, so **look at the screenshot** and confirm no row text runs into the sloped edges. If rows crowd the taper, cut a row rather than shrinking the type. See the working example artboard at `infographics/examples/iceberg-preview`.

## Source & license

The *iceberg* is a common infographic layout shape — visible tip above a waterline, larger hidden mass below — and is catalogued as a named layout type in open-source layout taxonomies, including the layout-type catalog in [baoyu-skills](https://github.com/JimLiu/baoyu-skills) (MIT License). Only the layout **name and concept** are shared: that project is a raster/image-generation pipeline, so there is no code in common and none was copied.

The HTML, CSS, clip-path geometry, palette, type scale, and editorial conventions documented here are original work authored for Studiograph in the house infographic skin.
