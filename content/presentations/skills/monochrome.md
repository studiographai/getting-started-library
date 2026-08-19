---
entity_type: skill
entity_id: monochrome
created_at: '2026-08-14T20:13:29.333Z'
updated_at: '2026-08-14T20:13:29.333Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - light
  - editorial
  - monochrome
  - design-system
name: Monochrome
description: >-
  Literary ivory-ledger deck theme — black ink on cream paper and nothing else.
  Ultra-light Jost carries every headline, Lora italic appears only in
  pull-quotes and insight-card titles, JetBrains Mono handles all structural
  chrome. No colour, no shadows, 1px hairline rules and generous whitespace. Use
  for research synthesis, white papers, longform reports, academic and policy
  briefs, advisory deliverables, or any deck that wants its words to be the only
  thing on the page.
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
  templates/monochrome
---
# Monochrome

A literary editorial system built on one material constraint: black ink on cream paper, and nothing else. Ultra-light Jost carries every headline and every paragraph. Lora italic appears in exactly two places. JetBrains Mono handles all the structural chrome. Depth comes from 1px hairlines and generous whitespace — there is nothing else.

The register is a printed research journal or a quiet monograph, not a presentation. The source calls this system "Ivory Ledger" internally; both names refer to the same thing.

## When to use

Reach for Monochrome when the words should be the only thing on the page — user research synthesis, white papers, longform reports, academic and policy briefs, advisory deliverables, bilingual EN/CN reports. It is equally good for a tech, design, or brand deck that wants to sound considered rather than sold.

**Avoid it** for decks that need visual personality or colour-led storytelling. The all-ink palette is intentionally austere.

Among the themes in this folder it is the most restrained: `cobalt-grid` is also editorial but keeps one electric accent and a permanent grid; Monochrome removes even that. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

Eight tokens, seven of which are tonal variations of cream or graphite. **There is no chromatic accent** — "accent" means darker ink.

| Role | Value | Notes |
|---|---|---|
| `cream-paper` | `#FAFADF` | the default surface — warm off-yellow, never white |
| `cream-paper-2` | `#F2F2D2` | slightly deeper cream for insets, barely perceptible |
| `cream-paper-3` | `#F0F0D4` | image-placeholder fill |
| `cream-warm` | `#F5F0E4` | insight / timeline slides — a warmer sub-aesthetic |
| `ink-black` | `#1A1A16` | all text, all rules, all borders — a dark olive-black, not pure black |
| `ink-graphite` | `#5E5E54` | secondary text, muted lead copy |
| `ink-graphite-light` | `#8A8A80` | tertiary — kickers, axis labels, source notes, bullet markers |

Headlines are always `ink-black`; they never take the graphite tones. Every divider is solid black — there is no muted border tone. Emphasis comes from typography or a rule, never from colour.

## Typography

Three voices with narrow, unmoving roles. Switching any one of them reads as a different design system.

- **Jost** (200 / 300 / 400) — every display, headline, body and caption. Quiet, geometric, almost mathematical at 200.
- **Lora** — **only** two moments: pull-quote body (italic) and insight-card title (roman). Wherever it appears, the tone shifts from analytical to lyrical.
- **JetBrains Mono** (400) — every structural marker: chrome labels, tags, version numbers, footers, axis labels, dates, bullet dashes. Always uppercase, always tracked 0.12em or wider.

| Token | Size | Family | Weight | Use |
|---|---|---|---|---|
| `display` | 163px | Jost | 200 | cover / opening hero, −0.02em |
| `stat-value` | 106px | Jost | 200 | large numeral in a stat cell, −0.03em |
| `h1` | 96px | Jost | 200 | chapter or section break, −0.01em |
| `flow-num` | 67px | Jost | 200 | step numeral in a process diagram, −0.02em |
| `h2` | 61px | Jost | 300 | **the standard content headline** |
| `quote-serif` | 61px | Lora *italic* | 400 | pull-quote body |
| `insight-serif` | 54px | Lora roman | 400 | insight-card title |
| `h3` | 38px | Jost | 400 | sub-headline, region heading |
| `lead` | 29px | Jost | 300 | lead paragraph, large bullet item |
| `body` | 21px | Jost | 300 | body paragraph |
| `caption` | 16px | Jost | 300 | caption, source note, fine print |
| `label` | 14px | JetBrains Mono | 400 | kicker, chrome label, axis, tag |

**Defaults:** the canonical pairing is `h2` (61px, weight 300) for the headline plus one `lead` paragraph. Do not reach for `h1` on a standard content slide — that size is for chapter breaks. The narrow weight gap is correct; this system does not lean on weight contrast.

**Non-optional treatments:**

- Every Jost display/h1/h2/h3 is **mixed case** — never uppercase. Uppercase belongs to mono alone.
- Every label, kicker, tag, footer, axis label and source note is **JetBrains Mono uppercase, tracked ≥ 0.12em** (most 0.14–0.18em). Mono in sentence case does not exist here.
- The pull-quote body is **always Lora italic**. A pull-quote in Jost is a different system.
- The insight-card title is **always Lora roman**, not italic.
- The bullet marker is **always an em-dash** in `ink-graphite-light` via JetBrains Mono. Never a dot, check, arrow or numeral.
- Display, stat and flow numerals are Jost 200 with negative tracking. That combination is the display signature.

## Layout

- **Frame size:** 1920×1080.
- **Padding:** 65px vertical, 154px horizontal — plus an extra 67px on the left (the reserved sidebar gutter), so total left padding is ~221px. This is the most generous gutter in the source library and it is load-bearing.
- **Density: sparse.** Content should sit in the middle 60–70% of the canvas. A slide filling 80% reads as cramped and breaks the editorial reading. Leave the space.

| Token | Value | Use |
|---|---|---|
| `pad-x` | 154px | horizontal padding |
| `pad-y` | 65px | vertical padding |
| `gap-lg` | 54px | between major sections |
| `gap-md` | 32px | between related elements |
| `gap-sm` | 16px | between tightly related elements |

**Radius:** 0 everywhere, except **16px on insight cards only** (the single structural soft edge) and true circles for dots and the donut chart. No pills.

**Borders:** 1px solid `ink-black` universally. The only exception is a 2px left edge on the pyramid-bar. No thicker, no dashed, no coloured borders. **Zero box-shadows anywhere.**

### Chrome frame

Most content slides carry a header and foot band — each a `space-between` row of two mono labels, separated from the body by a 1px black rule. **Cover, chapter, quote and closing slides suppress both entirely.**

## The sixteen layouts

The source ships these slide archetypes: cover, chapter, statement, split, stats, list, compare, quote, dense, chart, diagram, pie, vtimeline, cycle, pyramid, end.

Signature components across them:

- **36px short rule** — a 36×1px black mark. The system's punctuation: under a chapter number, beside a kicker, as a section break.
- **Insight card** — 16px radius on cream-warm, a Lora roman title and a Jost body block pushed to the bottom. Identified by radius and serif title, *not* by colour contrast.
- **Stat cell** — 1px black top rule, a 106px Jost-200 numeral, a Jost label, a mono source note. Three side by side is canonical.
- **Timeline dot** — 8px black circle with a 2px cream-warm ring, punching through a horizontal connector rule.
- **Vertical timeline spine** — 1px vertical black line with 9px dots at each entry.
- **Pie / donut** — a 454px circle with a same-colour `::after` cutout. The cutout must match the slide surface.
- **Pyramid bar** — 2px black left edge, fill via `color-mix(in srgb, ink-black N%, cream-paper)` with N from 4% to 55%, widths stepping 36% → 100%.
- **Vertical bar chart** — graphite bars at 50% opacity, the highlighted bar solid black; 1px axis and baseline.
- **Image placeholder** — 1px-bordered cream-paper-3 rectangle with a centred mono label.
- **Process flow with no arrows** — whitespace implies sequence. The source is explicit about this.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, `background: "#FAFADF"` on both `display` and each frame, and everything below in `shared.head`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&family=Jost:wght@200..600&family=Lora:ital,wght@0,400;1,400&display=block');




:root{
  --c-bg:#FAFADF; --c-bg-alt:#F2F2D2; --c-bg-deep:#F0F0D4; --c-bg-cream:#F5F0E4;
  --c-fg:#1A1A16; --c-fg-2:#5E5E54; --c-fg-3:#8A8A80;
  --c-border:#1A1A16; --c-accent:#1A1A16;
  --f-sans:'Jost','Noto Sans SC',system-ui,sans-serif;
  --f-serif:'Lora','Noto Serif SC',Georgia,serif;
  --f-mono:'JetBrains Mono',monospace;
  --pad-x:154px; --pad-y:65px; --gutter:67px;
  --gap-lg:54px; --gap-md:32px; --gap-sm:16px;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

/* slide base — 3-row grid: chrome / body / foot */
.mo{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--c-bg);color:var(--c-fg);font-family:var(--f-sans);
  padding:var(--pad-y) var(--pad-x) var(--pad-y) calc(var(--pad-x) + var(--gutter));
  display:grid;grid-template-rows:auto 1fr auto;}
.mo.cream{background:var(--c-bg-cream);}
.mo-body{min-height:0;}
.mo.center .mo-body{display:flex;flex-direction:column;justify-content:center;}
.mo.bottom .mo-body{display:flex;flex-direction:column;justify-content:flex-end;}

/* type */
.mo-display{font-family:var(--f-sans);font-size:163px;font-weight:200;
  line-height:0.96;letter-spacing:-0.02em;}
.mo-h1{font-family:var(--f-sans);font-size:96px;font-weight:200;
  line-height:1.1;letter-spacing:-0.01em;}
.mo-h2{font-family:var(--f-sans);font-size:61px;font-weight:300;line-height:1.2;}
.mo-h3{font-family:var(--f-sans);font-size:38px;font-weight:400;line-height:1.3;}
.mo-lead{font-family:var(--f-sans);font-size:29px;font-weight:300;line-height:1.65;}
.mo-body-tx{font-family:var(--f-sans);font-size:21px;font-weight:300;line-height:1.7;}
.mo-caption{font-family:var(--f-sans);font-size:16px;font-weight:300;line-height:1.55;}
.mo-label{font-family:var(--f-mono);font-size:14px;font-weight:400;
  letter-spacing:0.12em;text-transform:uppercase;}
.mo-muted{color:var(--c-fg-2);}
.mo-faint{color:var(--c-fg-3);}

/* the two Lora moments — and only these */
.mo-quote{font-family:var(--f-serif);font-style:italic;font-size:61px;font-weight:400;
  line-height:1.35;max-width:75%;}
.mo-insight-title{font-family:var(--f-serif);font-style:normal;font-size:54px;
  font-weight:400;line-height:1.15;}

/* rules */
.mo-rule{width:36px;height:1px;background:var(--c-accent);}
.mo-rule-full{width:100%;height:1px;background:var(--c-border);}

/* chrome header + foot */
.mo-chrome{display:flex;justify-content:space-between;align-items:center;
  padding-bottom:var(--gap-sm);border-bottom:1px solid var(--c-border);
  margin-bottom:var(--gap-md);}
.mo-foot{display:flex;justify-content:space-between;align-items:center;
  padding-top:var(--gap-sm);border-top:1px solid var(--c-border);
  margin-top:var(--gap-md);}

/* bordered tag */
.mo-tag{display:inline-block;border:1px solid var(--c-border);padding:0.3em 0.8em;
  font-family:var(--f-mono);font-size:14px;letter-spacing:0.12em;text-transform:uppercase;}

/* em-dash bullet list */
.mo-list{display:flex;flex-direction:column;gap:var(--gap-sm);}
.mo-li{display:grid;grid-template-columns:1.2em 1fr;gap:12px;align-items:baseline;}
.mo-li::before{content:'—';font-family:var(--f-mono);color:var(--c-fg-3);}

/* insight card */
.mo-card{background:var(--c-bg-cream);border-radius:16px;padding:32px 48px;
  display:flex;flex-direction:column;gap:16px;}
.mo-card .foot{margin-top:auto;}

/* stat cell */
.mo-stat{border-top:1px solid var(--c-border);padding:var(--gap-md) var(--gap-md) var(--gap-md) 0;}
.mo-stat-value{font-family:var(--f-sans);font-size:106px;font-weight:200;
  line-height:1;letter-spacing:-0.03em;}

/* timeline */
.mo-tl-track{position:relative;height:1px;background:var(--c-border);}
.mo-tl-dot{position:absolute;top:-4px;width:8px;height:8px;border-radius:50%;
  background:var(--c-fg);border:2px solid var(--c-bg-cream);}
.mo-vt{border-left:1px solid var(--c-border);padding-left:32px;
  display:flex;flex-direction:column;gap:var(--gap-md);}
.mo-vt-item{position:relative;}
.mo-vt-item::before{content:'';position:absolute;left:-36px;top:6px;
  width:9px;height:9px;border-radius:50%;background:var(--c-fg);}

/* bar chart */
.mo-bars{display:flex;align-items:end;gap:24px;height:100%;
  border-left:1px solid var(--c-border);border-bottom:1px solid var(--c-border);
  padding:0 16px;}
.mo-bar{flex:1;background:var(--c-fg-3);opacity:0.5;}
.mo-bar.on{background:var(--c-fg);opacity:1;}

/* pyramid */
.mo-pyr{display:flex;flex-direction:column;gap:8px;align-items:center;}
.mo-pyr-lvl{border-left:2px solid var(--c-border);padding:14px 20px;}

/* image placeholder */
.mo-img{border:1px solid var(--c-border);background:var(--c-bg-deep);
  color:var(--c-fg-2);display:flex;align-items:center;justify-content:center;
  font-family:var(--f-mono);font-size:14px;letter-spacing:0.12em;text-transform:uppercase;}
</style>
```

### Frames

**Cover** — bottom-anchored, no chrome, meta bar with a rule above:

```html
<div class="mo bottom">
  <div></div>
  <div class="mo-body">
    <div class="mo-label mo-faint" style="margin-bottom:32px;">Research synthesis · 2026</div>
    <h1 class="mo-display">The quiet<br>report</h1>
    <div style="display:flex;justify-content:space-between;align-items:flex-end;
                margin-top:54px;padding-top:16px;border-top:1px solid var(--c-border);">
      <div class="mo-label">Field Office Research</div>
      <div class="mo-label">v1.0 · August 2026</div>
    </div>
  </div>
  <div></div>
</div>
```

**Chapter** — centred, no chrome, number + 36px rule + headline:

```html
<div class="mo center">
  <div></div>
  <div class="mo-body">
    <div class="mo-label" style="letter-spacing:0.2em;margin-bottom:32px;">Chapter 01</div>
    <div class="mo-rule" style="margin-bottom:32px;"></div>
    <h2 class="mo-h1">What the<br>evidence says</h2>
  </div>
  <div></div>
</div>
```

**Standard content slide** — with chrome band, foot band, and the canonical h2 + lead pairing:

```html
<div class="mo">
  <div class="mo-chrome">
    <span class="mo-label mo-faint">Section 02 · Findings</span>
    <span class="mo-label mo-faint">03 / 16</span>
  </div>
  <div class="mo-body">
    <h2 class="mo-h2">Three patterns held<br>across every interview</h2>
    <p class="mo-lead mo-muted" style="margin-top:32px;max-width:60%;">
      The sample was small, but the agreement was unusually consistent.
    </p>
    <div class="mo-list" style="margin-top:54px;max-width:66%;">
      <div class="mo-li"><span class="mo-body-tx">People kept notes they never re-read.</span></div>
      <div class="mo-li"><span class="mo-body-tx">Everyone had a private naming scheme.</span></div>
      <div class="mo-li"><span class="mo-body-tx">Nobody trusted search enough to stop filing.</span></div>
    </div>
  </div>
  <div class="mo-foot">
    <span class="mo-label mo-faint">Field Office Research</span>
    <span class="mo-label mo-faint">Internal</span>
  </div>
</div>
```

**Quote** — no chrome, Lora italic, mono attribution:

```html
<div class="mo center">
  <div></div>
  <div class="mo-body">
    <p class="mo-quote">The workspace is not a filing cabinet. It is the material the work is made from.</p>
    <div style="margin-top:54px;">
      <div class="mo-label">Participant 07</div>
      <div class="mo-label mo-faint" style="margin-top:8px;">Design lead · 40 min session</div>
    </div>
  </div>
  <div></div>
</div>
```

**Stats** — three rule-topped cells:

```html
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:54px;">
  <div class="mo-stat">
    <div class="mo-stat-value">68%</div>
    <div class="mo-body-tx" style="margin-top:16px;">kept notes they never re-read</div>
    <div class="mo-label mo-faint" style="margin-top:16px;">n = 25</div>
  </div>
  <!-- two more -->
</div>
```

**Insight card** — the only rounded thing in the system:

```html
<div class="mo-card">
  <div class="mo-insight-title">Filing is a<br>trust problem</div>
  <div class="foot">
    <p class="mo-body-tx">People file because they do not believe retrieval will work — not because filing helps.</p>
  </div>
</div>
```

## Do's and Don'ts

**Do** — use cream on every slide; set headlines in ink-black and let Jost 200 do the work; reserve Lora italic for pull-quotes and Lora roman for card titles; track every mono label ≥ 0.12em; render every divider as a 1px black rule; use the em-dash bullet; leave generous whitespace.

**Don't** — introduce any chromatic colour; use Jost 500+ for a headline; set a pull-quote in Jost; use box-shadow anywhere; give cards a contrasting fill; crowd a slide; bold body text for emphasis; substitute the em-dash marker; re-enable the disabled sidebar; round anything other than insight cards and true circles.

## Fonts

Jost (variable, 200–600), Lora roman, Lora italic and JetBrains Mono are hosted in this folder's asset library and wired into the `@font-face` block above. Jost ships as a single variable file covering the whole 200–600 range, so one `@font-face` serves display, body and label weights.

Both Lora cuts are hosted deliberately: this system uses roman **and** italic in distinct, non-interchangeable roles, so synthetic obliquing would collapse the distinction it depends on.

Do not restore the source's Google Fonts link — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. All three families are OFL-licensed.

The CJK fallbacks (Noto Sans SC, Noto Serif SC) are named in the stacks but **not hosted**. A Chinese-language deck will fall back to system CJK faces; see the source's CJK section if you need that properly.

## Notes on the port

Six departures from the source. The second is the one that would have broken the deck.

1. **The fluid type scale was resolved to fixed pixels.** Every size in the source is a raw `vw`/`vh` value. In a Studiograph frame those resolve against the browser viewport, not the 1920×1080 frame, so type would resize as the editor window changed. Every number in the tables above is the source's own value evaluated at exactly 1920×1080 — `display` 8.5vw → 163px, `pad-x` 8vw → 154px, and so on.
2. **The animation system was removed, not carried over.** The source sets `[data-anim]{opacity:0}` and only reveals elements via `.slide.is-active [data-anim]`, applied by its navigation engine. Studiograph has no such engine, so importing that CSS verbatim would render **every animated element permanently invisible** — a blank cream deck. The source's own Known Gaps section flags this. All `[data-anim]`, `[data-delay]` and keyframe rules are dropped; elements are visible by default.
3. **The navigation layer is gone.** The horizontal flex strip (`#deck` translated by JS), nav dots, slide counter and keyboard handler are all removed. Sixteen slides become sixteen frames.
4. **`.dark` is a dead class and was dropped.** The source marks the chapter and quote slides `dark`, but `.slide.dark` and `.slide.light` resolve to *identical* background and colour values (`--c-bg` and `--c-bg-light` are both `#FAFADF`). It is vestigial. The `cream` variant is real and is kept as `.mo.cream`.
5. **The sidebar was not ported.** The source defines `.slide-sidebar` (rotated mono labels in the left gutter) and then disables it with `display:none !important`, commenting that it reads as visual noise. The 67px left gutter it reserved **is** kept, because the generous asymmetric padding is part of the look. Do not re-enable the sidebar without a design rationale.
6. **The `.slide` 3-row grid is preserved.** Frames use `grid-template-rows: auto 1fr auto` for chrome / body / foot. On slides that suppress chrome (cover, chapter, quote, end), pass empty `<div></div>` elements in the first and third rows rather than removing them, so the body still centres correctly.

**Two source inconsistencies worth knowing.** `template.json` describes the system as "Lora serif headlines, Jost body" — that is backwards. `design.md` and the stylesheet agree that **Jost carries headlines** and Lora is restricted to two moments; I followed the stylesheet. And `template.json` claims 18 slides; the template actually contains 16.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/monochrome` — `design.md`, `template.html`, `template.json`.
