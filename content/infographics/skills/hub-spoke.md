---
entity_type: skill
entity_id: hub-spoke
created_at: '2026-08-16T17:04:07.710Z'
updated_at: '2026-08-16T17:04:07.710Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - infographic
  - template
  - radial
  - hub-spoke
  - ecosystem
  - social
  - marketing
name: Hub & Spoke
description: >-
  A central hub node with 4–6 satellites radiating out on connector lines, each
  carrying a short label and one line of context. Use for ecosystem maps, "one
  platform, many uses", and stakeholder maps.
applies_to:
  - infographic
  - artboard
  - social-media
  - marketing
  - presentation
loading: on-demand
status: draft
---
# Hub & Spoke

One thing in the middle, and everything that hangs off it arranged around a circle. A central hub node, 4–6 satellites on evenly spaced radii, a thin connector line to each, and one short label plus one line of context per satellite. The geometry does the arguing: the hub is what everything shares, and no satellite outranks another.

## When to use

Reach for Hub & Spoke when one central thing serves several peers: ecosystem maps, "one platform, many uses", integration overviews, stakeholder maps, a service and the audiences it reaches, a research question and its workstreams.

Avoid it when the satellites are *not* peers — a radial layout flattens hierarchy by construction, so a genuine ranking is better as a Stat Row List. Avoid it when the satellites connect to each other as well as to the hub; that is a network diagram, and drawing satellite-to-satellite lines here turns the graphic into spaghetti. Avoid it above six satellites — the labels stop fitting between radii long before the circles do — and below four, where a simple row of cards is honest and this looks pretentious.

Conventions worth keeping: keep every context line to about **30 characters**, since the safe label width is roughly 220px. Give the hub the only accent; satellites stay tonal. Trim each connector so it starts at the hub's edge and stops at the satellite's edge — lines that run under circles read as sloppy. And never route a label across a connector: see the placement rule below.

## Palette

| Role | Value | Notes |
|---|---|---|
| paper | #f5f5f5 | canvas |
| ink | #2d3142 | satellite labels, figures |
| muted | #4f5d75 | eyebrow, deck, context lines, footer |
| accent | #eb6c36 | hub circle stroke + hub tint — nothing else |
| hairline | #d5d8e0 | footer rule |

Satellites are tonal, not coloured: `rgba(45,49,66,0.05)` fill with a `rgba(45,49,66,0.28)` stroke, and connectors on that same `rgba(45,49,66,0.28)`. The hub gets `rgba(235,108,54,0.06)` fill and a 1.5px accent stroke. Do not tint satellites differently to "code" them — that is what the labels are for.

## Typography

No external fonts — Studiograph frames are sandboxed and cannot fetch Google Fonts, so every stack falls back locally.

| Token | Family | Weight/Size | Use |
|---|---|---|---|
| eyebrow | 'JetBrains Mono', ui-monospace, monospace | 11px, 500, 0.18em caps | kicker |
| headline | 'Source Serif 4', Georgia, serif | 42px, 400, −0.02em | title |
| deck | 'DM Sans', system-ui, sans-serif | 17px, muted | one-sentence setup |
| hub name | 'Source Serif 4', Georgia, serif | 26px, 400 | what sits in the middle |
| hub sub | 'JetBrains Mono', ui-monospace, monospace | 9px, 0.14em caps, muted | what the hub *is* |
| satellite figure | 'Source Serif 4', Georgia, serif | 26px, 400 | the number inside each circle |
| satellite label | 'DM Sans', system-ui, sans-serif | 20px, 600 | satellite name |
| satellite note | 'DM Sans', system-ui, sans-serif | 13px, muted | one line, ≤ ~30 characters |
| footer | 'JetBrains Mono', ui-monospace, monospace | 10px, 0.14em caps, muted | attribution / legend |

## Layout

Default canvas **1080 × 1080** (square). A padded header block (eyebrow + headline + deck), a full-bleed inline SVG at `viewBox="0 0 1080 760"`, and a mono footer strip pushed down with `margin-top:auto`.

**Geometry.** Hub centre `(cx, cy) = (540, 370)`, orbit radius `R = 240`, hub radius `92`, satellite radius `50`. Satellites sit at `θ_k = θ₀ + k·(360/n)`, positioned with SVG's inverted Y axis:

```
x = cx + R · cos θ
y = cy − R · sin θ
```

Use `θ₀ = 45°` for four satellites, `54°` for five (a flat-top pentagon — one satellite lands at the bottom, none at the very top), `30°` for six.

**Connector trim.** With `u = (cos θ, −sin θ)`, draw the line from `(cx + 92·uₓ, cy + 92·u_y)` to `(x − 50·uₓ, y − 50·u_y)`. That leaves a clean gap at both ends.

**The label-placement rule** — this is the whole trick, and getting it wrong is how radial diagrams end up with text lying across lines. Every connector runs *inward* toward the hub, so:

- Satellite **above** the hub centre (`y < cy`) → its connector leaves downward, so put the label **above** the circle. Baselines at `y − 86` and `y − 64`.
- Satellite **at or below** the hub centre (`y ≥ cy`) → its connector leaves upward, so put the label **below** the circle. Baselines at `y + 80` and `y + 102`.

Never place a label radially outward on the horizontal axis: at `θ ≈ 180°` the satellite is only ~300px from the canvas edge, which is not enough room, and a right-anchored label there collides with its own spoke. All labels use `text-anchor="middle"` on the satellite's own `x`. Finally, check horizontally adjacent labels for collision: two upper satellites 282px apart give each about 220px of clear width, which is why the 30-character budget on context lines is a hard limit rather than a suggestion.

### `<style>`

```html
<style>
:root{
  --hs-paper:#f5f5f5; --hs-ink:#2d3142; --hs-muted:#4f5d75;
  --hs-accent:#eb6c36; --hs-hairline:#d5d8e0;
  --hs-serif:'Source Serif 4',Georgia,serif;
  --hs-sans:'DM Sans',system-ui,sans-serif;
  --hs-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;}
.hs{width:1080px;height:1080px;display:flex;flex-direction:column;padding:72px 0 56px;
  background:var(--hs-paper);color:var(--hs-ink);font-family:var(--hs-sans);}
.hs-head{padding:0 80px;margin-bottom:10px;}
.hs-eyebrow{font-family:var(--hs-mono);font-size:11px;font-weight:500;letter-spacing:.18em;
  text-transform:uppercase;color:var(--hs-muted);margin-bottom:10px;}
.hs-title{font-family:var(--hs-serif);font-size:42px;font-weight:400;letter-spacing:-.02em;
  line-height:1.12;margin-bottom:12px;}
.hs-deck{font-size:17px;line-height:1.55;color:var(--hs-muted);max-width:58ch;}
.hs svg{display:block;width:100%;}
.hs-footwrap{margin-top:auto;padding:0 80px;}
.hs-foot{display:flex;justify-content:space-between;padding-top:14px;
  border-top:1px solid var(--hs-hairline);font-family:var(--hs-mono);font-size:10px;
  letter-spacing:.14em;text-transform:uppercase;color:var(--hs-muted);}
/* SVG text classes */
.hs-fig{font-family:var(--hs-serif);font-size:26px;fill:var(--hs-ink);}
.hs-label{font-family:var(--hs-sans);font-size:20px;font-weight:600;fill:var(--hs-ink);}
.hs-note{font-family:var(--hs-sans);font-size:13px;fill:var(--hs-muted);}
.hs-hub{font-family:var(--hs-serif);font-size:26px;fill:var(--hs-ink);}
.hs-hubsub{font-family:var(--hs-mono);font-size:9px;letter-spacing:.14em;fill:var(--hs-muted);}
</style>
```

### Example

Five satellites at `θ = 54°, 126°, 198°, 270°, 342°`, coordinates pre-computed from the formulas above.

```html
<div class="hs">
  <div class="hs-head">
    <p class="hs-eyebrow">Ecosystem map · Meridian</p>
    <h1 class="hs-title">One platform, five teams</h1>
    <p class="hs-deck">Every team runs a different job on the same operations layer.</p>
  </div>

  <svg viewBox="0 0 1080 760" xmlns="http://www.w3.org/2000/svg" role="img"
       aria-label="Five teams connected to one central operations platform">
    <!-- connectors first, behind the nodes -->
    <g stroke="rgba(45,49,66,0.28)" stroke-width="1.2">
      <line x1="486" y1="296" x2="428" y2="216"/>
      <line x1="594" y1="296" x2="652" y2="216"/>
      <line x1="628" y1="398" x2="721" y2="429"/>
      <line x1="540" y1="462" x2="540" y2="560"/>
      <line x1="453" y1="398" x2="359" y2="429"/>
    </g>

    <!-- hub -->
    <circle cx="540" cy="370" r="92" fill="rgba(235,108,54,0.06)" stroke="#eb6c36" stroke-width="1.5"/>
    <text class="hs-hub" x="540" y="364" text-anchor="middle">Meridian</text>
    <text class="hs-hubsub" x="540" y="390" text-anchor="middle">OPERATIONS PLATFORM</text>

    <!-- satellites -->
    <g fill="rgba(45,49,66,0.05)" stroke="rgba(45,49,66,0.28)">
      <circle cx="399" cy="176" r="50"/><circle cx="681" cy="176" r="50"/>
      <circle cx="768" cy="444" r="50"/><circle cx="540" cy="610" r="50"/>
      <circle cx="312" cy="444" r="50"/>
    </g>
    <g text-anchor="middle">
      <text class="hs-fig" x="399" y="185">26</text>
      <text class="hs-label" x="399" y="90">Marketing</text>
      <text class="hs-note" x="399" y="112">Campaigns and spend.</text>

      <text class="hs-fig" x="681" y="185">42</text>
      <text class="hs-label" x="681" y="90">Sales</text>
      <text class="hs-note" x="681" y="112">Pipeline and forecasts.</text>

      <text class="hs-fig" x="768" y="453">18</text>
      <text class="hs-label" x="768" y="524">Finance</text>
      <text class="hs-note" x="768" y="546">Close and approvals.</text>

      <text class="hs-fig" x="540" y="619">61</text>
      <text class="hs-label" x="540" y="690">Support</text>
      <text class="hs-note" x="540" y="712">Ticket routing and SLAs.</text>

      <text class="hs-fig" x="312" y="453">34</text>
      <text class="hs-label" x="312" y="524">Product</text>
      <text class="hs-note" x="312" y="546">Roadmap and releases.</text>
    </g>
  </svg>

  <div class="hs-footwrap">
    <div class="hs-foot"><span>Meridian Operations</span><span>Figures are active seats · Aug 2026</span></div>
  </div>
</div>
```

## Building it in Studiograph

Create with `create_artifact` as an **artboard** entry: one frame, geometry 1080 × 1080, background `#f5f5f5`. Put the `<style>` block in `shared.head` and the `.hs` markup in the frame content. The SVG is full-bleed — it sits outside `.hs-head`'s padding so the orbit can use the whole 1080px width.

Changing the satellite count means recomputing every coordinate; do the trigonometry rather than nudging numbers by eye, and re-derive the connector endpoints from the same unit vectors so the gaps stay even. Then verify with `inspect_artifact`: SVG text never triggers `framesOverflowing`, so overlap is invisible to the checker — **look at the screenshot** and confirm that no label touches a connector, no two labels collide, and nothing runs past the canvas edge. See the working example artboard at `infographics/examples/hub-spoke-preview`.

## Source & license

The *hub and spoke* (radial / central-node) arrangement is a common infographic and diagram layout shape, and is catalogued as a named layout type in open-source layout taxonomies, including the layout-type catalog in [baoyu-skills](https://github.com/JimLiu/baoyu-skills) (MIT License). Only the layout **name and concept** are shared: that project is a raster/image-generation pipeline, so there is no code in common and none was copied.

The SVG, HTML, CSS, geometry formulas, label-placement rule, palette, and type scale documented here are original work authored for Studiograph in the house infographic skin.
