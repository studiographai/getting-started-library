---
entity_type: skill
entity_id: blue-professional
created_at: '2026-08-14T21:04:06.456Z'
updated_at: '2026-08-14T21:04:06.456Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - light
  - professional
  - consulting
  - design-system
name: Blue Professional
description: >-
  Consulting-grade deck theme — warm cream canvas with one saturated cobalt
  accent, softly tinted cards at 4% opacity with translucent borders and rounded
  corners, Space Grotesk headlines and Inter body. Measured, data-dense without
  crowding. Use for B2B SaaS pitches, consulting deliverables, advisory updates,
  investor reports and internal reviews.
applies_to:
  - deck
  - slides
  - presentation
  - artifact-canvas
  - theme
loading: on-demand
status: draft
source: >-
  github.com/zarazhangrui/beautiful-html-templates @ e5e204f —
  templates/blue-professional
---
# Blue Professional

A restrained, consulting-grade system on a warm cream canvas with a single saturated cobalt as the only accent. Space Grotesk carries headlines and numerical callouts; Inter handles body and chrome. Cards are cobalt-tinted at 4% with translucent borders and soft radii — quiet, never solid, never outlined in full colour.

Investment-research reports, quarterly briefings, contemporary financial dashboards. Measured, data-dense without feeling crowded, built for executive readability.

## When to use

Reach for Blue Professional when the deck should read modern-considered and lightly authoritative — B2B SaaS pitches, consulting deliverables, advisory updates, investor reports, internal reviews, research synthesis, brand work for service businesses. It is the "professional without going stiff" option.

**Avoid it** where the deck should feel hot, playful or intentionally informal. The cool electric-blue restraint reads as overly polished.

This is the most conventional theme in the folder, and deliberately so — it is the one to reach for when the others would read as too styled for the audience. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

One accent. Everything else is ink, greys, and cobalt at low opacities.

| Role | Value | Notes |
|---|---|---|
| `bg` | `#fdfae7` | warm cream paper |
| `primary` | `#1e2bfa` | electric cobalt — the only accent |
| `text` | `#111111` | ink |
| `text-muted` | `#6b6b6b` | body copy, secondary |
| `text-light` | `#9a9a9a` | tertiary, context notes |
| `card-bg` | `rgba(30,43,250,0.04)` | the card tint — 4% cobalt |
| `accent-light` | `rgba(30,43,250,0.08)` | pill fills, bar tracks |
| `accent-medium` | `rgba(30,43,250,0.15)` | stronger tint |
| `border` | `rgba(30,43,250,0.2)` | all card borders |
| `positive` | `#059669` | green — change chips only |
| `negative` | `#dc2626` | red — change chips only |

Green and red exist **solely** for inline positive/negative change chips in data. They are not general-purpose colours and never appear as fills or borders.

## Typography

Two families. Space Grotesk for anything structural or numeric; Inter for prose.

| Token | Size | Family | Weight | Use |
|---|---|---|---|---|
| `quote-mark` | 128px | Space Grotesk | 700 | decorative quote glyph at 15% opacity |
| `h1` | 67px | Space Grotesk | 700 | cover / section title (−0.02em) |
| `metric-value` | 48px | Space Grotesk | 700 | headline metric, cobalt |
| `h2` | 42px | Space Grotesk | 600 | slide headline (−0.02em) |
| `blockquote` | 38px | Space Grotesk | 500 | pull-quote |
| `stat-num` | 34px | Space Grotesk | 700 | stat figure, cobalt |
| `agenda-num` | 29px | Space Grotesk | 700 | agenda numeral, cobalt |
| `h3` / `split-highlight` | 24px | Space Grotesk | 500 | sub-heading / highlight |
| `step-circle-text` | 21px | Space Grotesk | 700 | numeral inside a step circle |
| `metric-label` | 18px | Inter | 600 | metric name |
| `step-title` | 18px | Space Grotesk | 600 | step heading |
| `body` | 17px | Inter | 400 | body copy (lh 1.6), muted |
| `h4-eyebrow` | 16px | Space Grotesk | 600 | **uppercase, 0.08em, cobalt** |
| `bar-label` | 16px | Inter | 500 | chart label |
| `bar-pct` | 15px | Space Grotesk | 600 | chart value, cobalt |
| `stat-name` | 15px | Inter | 500 | stat label |
| `metric-desc` | 14px | Inter | 400 | metric description |
| `metric-support` | 14px | Inter | 400 | supporting note |
| `counter` / `meta` | 13px | Space Grotesk | 400–500 | page counter, meta, 0.05em |
| `insight-num` / `cite` | 12.5px | Space Grotesk | 500–600 | insight counter, citation |
| `stat-context` / `tag` | 12px | Inter / Space Grotesk | 400–500 | context note, pill |

**Body copy really is 17px** on a 1920 slide — that is what the source's `clamp()` maxima resolve to, and the density is intentional. This is a read-at-a-table deck, not a projected keynote. If it will be projected, scale the whole stack up proportionally rather than adjusting individual sizes.

## Layout

- **Frame size:** 1920×1080.
- **Padding:** 67px top, 77px left/right, 92px bottom. The asymmetric bottom is deliberate — it originally cleared fixed navigation chrome, and it still reads as correct breathing room.

**Radii — this is the only theme in the folder that rounds things:**

| Value | Use |
|---|---|
| 100px | pills and CTA buttons (fully rounded) |
| 14px | large cards |
| 12px | medium cards |
| 10px | small cards, detail blocks |
| 6px | bar tracks and fills |
| 50% | step circles, accent dots, nav buttons |

**Cards are never solid-coloured and never outlined in full cobalt.** The signature is a 4% cobalt tint with a 20% cobalt border at 1–1.5px. That restraint is what separates this from a generic SaaS deck.

### Components

- **Accent line** — 60×4px cobalt bar, 2px radius. Sits above cover titles and as an eyebrow separator.
- **Tag pill** — 8%-cobalt fill, cobalt text, fully rounded, top-right of the slide header.
- **CTA button** — solid cobalt pill with cream text.
- **Bar chart** — 28px track at 8% cobalt with 6px radius; solid cobalt fill carrying the value.
- **Step circles** — 56px cobalt circles with cream numerals. **Sequential steps reduce opacity (1.0 → 0.85 → 0.7 → 0.55)** to suggest fading into the future. That gradient is the component's whole idea.
- **Change chips** — inline green/red text with an arrow glyph. No border, no fill.
- **Insight list** — numbered with `decimal-leading-zero` counters in cobalt, absolutely positioned in a 2.6rem left gutter.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, `background: "#fdfae7"` on both `display` and each frame, and everything below in `shared.head`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&display=block');


:root{
  --bg:#fdfae7; --primary:#1e2bfa; --text:#111111;
  --text-muted:#6b6b6b; --text-light:#9a9a9a;
  --accent-light:rgba(30,43,250,0.08); --accent-medium:rgba(30,43,250,0.15);
  --border:rgba(30,43,250,0.2); --card-bg:rgba(30,43,250,0.04);
  --positive:#059669; --negative:#dc2626;
  --display:'Space Grotesk',sans-serif;
  --body:'Inter',sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0;}

.bp{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--bg);color:var(--text);font-family:var(--body);
  padding:67px 77px 92px 77px;display:flex;flex-direction:column;}

/* type */
.bp-h1{font-family:var(--display);font-weight:700;font-size:67px;
  line-height:1.1;letter-spacing:-0.02em;}
.bp-h2{font-family:var(--display);font-weight:600;font-size:42px;
  line-height:1.1;letter-spacing:-0.02em;}
.bp-h3{font-family:var(--display);font-weight:500;font-size:24px;
  line-height:1.3;letter-spacing:-0.02em;}
.bp-eyebrow{font-family:var(--display);font-weight:600;font-size:16px;
  line-height:1.1;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);}
.bp-body{font-family:var(--body);font-weight:400;font-size:17px;
  line-height:1.6;color:var(--text-muted);}
.bp-quote{font-family:var(--display);font-weight:500;font-size:38px;
  line-height:1.35;color:var(--text);}
.bp-quote-mark{font-family:var(--display);font-weight:700;font-size:128px;
  line-height:0.5;color:var(--primary);opacity:0.15;}
.bp-highlight{font-family:var(--display);font-weight:500;font-size:24px;
  line-height:1.4;color:var(--text);}

/* numerics — always Space Grotesk, always cobalt */
.bp-metric{font-family:var(--display);font-weight:700;font-size:48px;
  line-height:1;color:var(--primary);}
.bp-stat-num{font-family:var(--display);font-weight:700;font-size:34px;
  line-height:1;color:var(--primary);}
.bp-agenda-num{font-family:var(--display);font-weight:700;font-size:29px;
  line-height:1;color:var(--primary);}
.bp-metric-label{font-family:var(--body);font-weight:600;font-size:18px;
  line-height:1.3;color:var(--text);}
.bp-metric-desc{font-family:var(--body);font-weight:400;font-size:14px;
  line-height:1.5;color:var(--text-muted);}
.bp-stat-name{font-family:var(--body);font-weight:500;font-size:15px;
  line-height:1.35;color:var(--text);}
.bp-stat-context{font-family:var(--body);font-weight:400;font-size:12px;
  line-height:1.4;color:var(--text-light);}

/* chrome */
.bp-header{display:flex;justify-content:space-between;align-items:flex-start;
  gap:32px;margin-bottom:27px;}
.bp-counter{position:absolute;left:58px;bottom:27px;font-family:var(--display);
  font-weight:500;font-size:13px;letter-spacing:0.05em;color:var(--text-muted);}
.bp-meta{font-family:var(--display);font-weight:400;font-size:13px;
  line-height:1.4;letter-spacing:0.05em;color:var(--text-light);}
.bp-cite{font-family:var(--display);font-weight:500;font-size:12.5px;
  line-height:1.4;letter-spacing:0.04em;text-transform:uppercase;color:var(--text-muted);}

/* the tinted card — never solid, never full-colour border */
.bp-card{background:var(--card-bg);border:1.5px solid var(--border);
  border-radius:14px;padding:24px 26px;}
.bp-card.md{border-width:1px;border-radius:12px;padding:22px 24px;}
.bp-card.sm{border-width:1px;border-radius:10px;padding:14px 16px;}
.bp-card.xs{border-width:1px;border-radius:10px;padding:14px 16px;}

/* marks */
.bp-accent-line{width:60px;height:4px;background:var(--primary);border-radius:2px;}
.bp-dot{width:8px;height:8px;background:var(--primary);border-radius:50%;
  display:inline-block;}
.bp-pill{display:inline-block;background:var(--accent-light);color:var(--primary);
  padding:6px 14px;border-radius:100px;font-family:var(--display);
  font-weight:500;font-size:12px;line-height:1;}
.bp-cta{display:inline-block;background:var(--primary);color:var(--bg);
  padding:14px 35px;border-radius:100px;font-family:var(--display);
  font-weight:600;font-size:15px;}

/* bars */
.bp-bar-track{height:28px;background:var(--accent-light);border-radius:6px;
  overflow:hidden;}
.bp-bar-fill{height:100%;background:var(--primary);border-radius:6px;}
.bp-bar-label{font-family:var(--body);font-weight:500;font-size:16px;
  line-height:1.3;color:var(--text);}
.bp-bar-pct{font-family:var(--display);font-weight:600;font-size:15px;color:var(--primary);}

/* steps — opacity ladder fades into the future */
.bp-step-circle{width:56px;height:56px;border-radius:50%;background:var(--primary);
  color:var(--bg);display:flex;align-items:center;justify-content:center;
  font-family:var(--display);font-weight:700;font-size:21px;line-height:1;}
.bp-step-circle.s2{opacity:0.85;} .bp-step-circle.s3{opacity:0.7;}
.bp-step-circle.s4{opacity:0.55;}
.bp-step-title{font-family:var(--display);font-weight:600;font-size:18px;line-height:1.2;}

/* change chips — the only non-cobalt colour in the system */
.bp-change{font-family:var(--display);font-weight:600;font-size:12.5px;}
.bp-change.up{color:var(--positive);}
.bp-change.down{color:var(--negative);}

/* numbered insight list */
.bp-insights{list-style:none;counter-reset:bp;}
.bp-insights li{counter-increment:bp;position:relative;padding-left:42px;
  margin-bottom:18px;}
.bp-insights li::before{content:counter(bp,decimal-leading-zero);
  position:absolute;left:0;top:2px;font-family:var(--display);font-weight:600;
  font-size:12.5px;line-height:1.7;letter-spacing:0.05em;color:var(--primary);}
</style>
```

### Cover frame

```html
<div class="bp" style="justify-content:center;">
  <div class="bp-accent-line" style="margin-bottom:32px;"></div>
  <h1 class="bp-h1" style="max-width:1200px;">Quarterly business review</h1>
  <p class="bp-body" style="margin-top:24px;max-width:760px;font-size:19px;">
    Performance, pipeline, and the three decisions we need from this session.
  </p>
  <div style="display:flex;gap:16px;margin-top:44px;">
    <span class="bp-pill">Q3 2026</span>
    <span class="bp-pill">Internal</span>
  </div>
  <div class="bp-counter">01 / 10</div>
</div>
```

### Content slide with header, metrics and cards

```html
<div class="bp">
  <div class="bp-header">
    <div>
      <div class="bp-eyebrow" style="margin-bottom:12px;">Performance</div>
      <h2 class="bp-h2">Where the quarter landed</h2>
    </div>
    <span class="bp-pill">Section 02</span>
  </div>

  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:19px;">
    <div class="bp-card">
      <div class="bp-metric">$4.2M</div>
      <div class="bp-metric-label" style="margin-top:12px;">Net new ARR
        <span class="bp-change up">↑ 18%</span></div>
      <p class="bp-metric-desc" style="margin-top:8px;">Ahead of plan, driven by mid-market.</p>
    </div>
    <div class="bp-card">
      <div class="bp-metric">94%</div>
      <div class="bp-metric-label" style="margin-top:12px;">Gross retention
        <span class="bp-change down">↓ 2%</span></div>
      <p class="bp-metric-desc" style="margin-top:8px;">Two enterprise churns, both known risks.</p>
    </div>
    <div class="bp-card">
      <div class="bp-metric">18</div>
      <div class="bp-metric-label" style="margin-top:12px;">Days to close</div>
      <p class="bp-metric-desc" style="margin-top:8px;">Down from twenty-six last quarter.</p>
    </div>
  </div>

  <div class="bp-counter">03 / 10</div>
</div>
```

### Process steps with the opacity ladder

```html
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;">
  <div><div class="bp-step-circle">1</div>
    <div class="bp-step-title" style="margin-top:16px;">Diagnose</div></div>
  <div><div class="bp-step-circle s2">2</div>
    <div class="bp-step-title" style="margin-top:16px;">Design</div></div>
  <div><div class="bp-step-circle s3">3</div>
    <div class="bp-step-title" style="margin-top:16px;">Pilot</div></div>
  <div><div class="bp-step-circle s4">4</div>
    <div class="bp-step-title" style="margin-top:16px;">Scale</div></div>
</div>
```

## Do's and Don'ts

**Do** — keep cobalt as the only accent; tint cards at 4% with a 20% cobalt border; use Space Grotesk for headlines and every numeric, Inter for prose; set eyebrows uppercase at 0.08em in cobalt; use the accent line above cover titles; reserve green and red for inline change chips; run the step-circle opacity ladder in sequence.

**Don't** — fill a card with solid cobalt or outline it in full-opacity cobalt; introduce a second accent; use green or red as a fill, border or headline colour; set body copy in Space Grotesk or numerics in Inter; round inconsistently — use the radius scale as given.

## Fonts

Space Grotesk (variable 300–700) and Inter (variable 100–900) are already hosted in this folder's asset library — hosted originally for `neo-grid-bold` and `pink-script` — and are reused here. **No new fonts were needed for this theme.**

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. Both families are OFL-licensed.

## Notes on the port

Five departures. The second one would have produced a blank deck.

1. **The fluid type scale was resolved to fixed pixels.** Every size is a `clamp()` against `vw`, which in a Studiograph frame resolves against the browser viewport rather than the 1920×1080 frame. Each value in the table above is the source's own clamp evaluated at 1920 wide — `h1` resolves to its 67.2px ceiling, `body` to 16.8px, and so on. Padding likewise: `3.5vw 4vw 8.5vh` → 67px / 77px / 92px. `rem` values are resolved at the browser default of 16px, since the source never overrides the root font-size.
2. **The active-slide opacity machinery was removed.** The source sets `.slide { opacity: 0; pointer-events: none; transform: translateX(40px) }` and only reveals the current slide via `.slide.active`, applied by its inline keyboard handler. Carried over verbatim into Studiograph — which has no such handler — **every slide would render invisible**. All of it is dropped, along with `.slide.prev`.
3. **The navigation chrome is gone, but its space is kept.** The source has fixed `nav-controls` (circular arrow buttons) and a fixed `slide-counter`. The buttons are dropped since Studiograph navigates. The counter is kept as a per-frame absolute element, because it is a page number rather than a control. The asymmetric bottom padding that originally cleared this chrome is retained — it reads as correct composition regardless.
4. **Component class names are prefixed `bp-`** to avoid collisions with the other themes in this folder.
5. **Per-slide layouts became inline.** The source styles each slide by index class with layout baked in; here the cards, type and chrome are generic and each frame declares its own composition. Every value is the source's own.

**Note on scale:** this template targets a fluid viewport, so on a laptop its 16.8px body is comfortable reading size. Frozen at 1920×1080 it is proportionally small — correct for a document-style deck read at a table, tight for projection. Scale the whole stack together if you need the latter.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/blue-professional` — `design.md`, `template.html`, `template.json`.
