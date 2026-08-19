---
entity_type: skill
entity_id: signal
created_at: '2026-08-14T21:27:08.159Z'
updated_at: '2026-08-14T21:27:08.159Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - dark
  - editorial
  - institutional
  - design-system
name: Signal
description: >-
  Institutional editorial deck theme — deep editorial navy and warm bone paper
  as equal first-class surfaces, joined by a single antique-gold accent. Source
  Serif 4 headlines mixing roman and italic-gold mid-sentence, DM Sans body, IBM
  Plex Mono chrome, and a near-invisible 80px grid texture on every dark slide.
  Use for investor decks, board presentations, consulting deliverables, legal
  and policy briefs, advisory pitches.
applies_to:
  - deck
  - slides
  - presentation
  - artifact-canvas
  - theme
loading: on-demand
status: draft
source: github.com/zarazhangrui/beautiful-html-templates @ e5e204f — templates/signal
---
# Signal

A literary editorial system in the spirit of a long-form magazine — *The Economist*'s restraint crossed with a private intelligence briefing. Source Serif 4 carries every headline, **mixing roman and italic mid-sentence with the italic in antique gold**. DM Sans steps back for body. IBM Plex Mono runs all the timestamps, kickers and chrome.

Two surfaces — warm bone paper and deep editorial navy — connected by one hot accent. A near-invisible 80px grid overlays every dark slide as a fingerprint. Sober, considered, and a little bit aristocratic.

## When to use

Reach for Signal when the deck should feel weighty and credibly institutional — investor decks, board presentations, consulting deliverables, legal and policy briefs, academic decks, advisory pitches. It also suits tech, research or brand work that wants to read as quietly authoritative rather than loud.

**Avoid it** where the deck should feel hot, fast or playful. The navy-and-gold restraint commits to a sober voice.

It is the most *institutional* theme in this folder. Where `blue-professional` is modern-consulting and `cartesian` is museum-quiet, Signal is board-room. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

**Neither surface is "the" background — navy and cream are both first-class, and the source says to alternate them freely across a deck.**

| Role | Value | Notes |
|---|---|---|
| `navy` | `#1C2644` | deep editorial navy |
| `navy-alt` | `#232F55` | layered navy regions |
| `cream` | `#F0ECE3` | warm bone paper |
| `cream-alt` | `#E6E0D4` | layered cream regions |
| `text-warm` | `#E2DCD0` | text on navy — **never pure white** |
| `text-muted-dark` / `text-hint-dark` | `#8A96A8` / `#4E5A6E` | secondary / tertiary on navy |
| `ink` | `#1A2030` | text on cream |
| `text-muted-light` / `text-hint-light` | `#5A6270` / `#9AA0A8` | secondary / tertiary on cream |
| `gold` | `#C8A870` | antique gold — the only accent |
| `border-dark` / `border-light` | `#2E3D5C` / `#CAC4B4` | hairlines per surface |

**Gold appears in exactly three places:** rules, italic emphasis, and numerical figures. Never on body text, never as a background fill.

**Never use pure white on navy.** The warm off-white is what keeps the system tied to its paper register.

## Typography

Three voices with a structural separation: **serif leads, sans supports, mono tags.**

| Token | Size | Family | Weight | Use |
|---|---|---|---|---|
| `display` | 182px | Source Serif 4 | 700 | cover display (lh 0.96, −0.02em) |
| `quote-mark` | 154px | Source Serif 4 | 300 | quote glyph (lh 0.6) |
| `stat-value` | 106px | Source Serif 4 | 600 | **gold** stat numeral (−0.02em) |
| `h1` | 100px | Source Serif 4 | 600 | primary headline (−0.01em) |
| `quote-text` | 69px | Source Serif 4 | 400 | pull-quote (−0.01em) |
| `h2` | 58px | Source Serif 4 | 600 | section headline |
| `editorial-headline` | 53px | Source Serif 4 | 600 | editorial-layout headline |
| `dense-headline` | 46px | Source Serif 4 | 600 | dense-layout headline |
| `h3` | 36px | Source Serif 4 | 500 | sub-headline |
| `lead` | 27px | DM Sans 400 | lead paragraph (lh 1.58) |
| `body` | 20px | DM Sans 400 | body (lh 1.65) |
| `caption` | 16px | DM Sans 400 | caption |
| `label` | 13px | IBM Plex Mono 500 | **uppercase, 0.14em** — all chrome |

### The Signal moment

**Mix roman and italic Source Serif 4 inside the same headline, with the italic in gold.** The source states the system *depends on it appearing throughout the deck* — it is not occasional decoration but the recurring gesture that identifies the theme.

Note this is a third variation on the `<em>` device across this folder: `vellum` flips italic→roman, `grove` adds italic *and* coral, `mat` switches colour while staying upright. Signal switches to italic *and* gold — and unlike the others, its stylesheet sets no `font-style` at all, relying on the browser's default italic for `<em>`. That is why a real italic cut is hosted rather than left to synthesis.

**Never bold inside body text for emphasis** — the font switch *is* the emphasis.

## Layout

- **Frame size:** 1920×1080.
- **Padding:** 144px horizontal, 59px vertical. Signal needs the breathing room; tight padding breaks the editorial restraint.
- **Density: high** — this is a dense briefing system, unlike most editorial themes here.

| Token | Value |
|---|---|
| `pad-x` | 144px |
| `pad-y` | 59px |
| `gap-lg` | 43px |
| `gap-md` | 27px |
| `gap-sm` | 13px |
| `grid-cell` | 80px |

**No shadows, no rounded chrome.** The system is flat-plus-hairline. The only round shapes are the donut chart and the 9px timeline dots.

### The grid texture — the fingerprint

Every dark slide carries an 80px grid at 3% white via `::before`. The source says it *should never be removed*.

```css
.sig.dark::before{content:'';position:absolute;inset:0;pointer-events:none;z-index:0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);
  background-size:80px 80px;}
.sig.dark > *{position:relative;z-index:1;}
```

That second rule is in the source — content must sit above the texture layer.

### Other components

- **Kicker** — mono uppercase gold, ≥0.14em, above a headline.
- **Short rule** — 36×1px gold. The chapter break and kicker separator.
- **Tag** — an outlined gold pill with a mono uppercase label.
- **Chrome / foot bars** — mono label and counter with a 1px hairline. **Non-negotiable**: chrome without a rule reads as floating text.
- **Stat card** — 1px top hairline, big gold serif numeral, sans label, mono note.
- **Bullet** — em-dash in mono gold. Standard dots break the register.
- **Timeline** — 1px vertical spine with 9px gold dots at each entry.
- **Pyramid band** — 3px gold left border with a `color-mix` gold-into-navy fill.
- **Bars** — muted slate by default; gold for the highlighted bar.

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080. Set each frame's `background` to match its surface — `#1C2644` or `#F0ECE3` — and `display.background` to `#1C2644`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&family=IBM+Plex+Mono:wght@500&family=Source+Serif+4:ital,wght@0,200..900;1,400..700&display=block');




:root{
  --navy:#1C2644; --navy-alt:#232F55; --cream:#F0ECE3; --cream-alt:#E6E0D4;
  --fg:#E2DCD0; --fg-2:#8A96A8; --fg-3:#4E5A6E;
  --ink:#1A2030; --ink-2:#5A6270; --ink-3:#9AA0A8;
  --gold:#C8A870; --border:#2E3D5C; --border-light:#CAC4B4;
  --serif:'Source Serif 4','Noto Serif SC',Georgia,serif;
  --sans:'DM Sans','Noto Sans SC',system-ui,sans-serif;
  --mono:'IBM Plex Mono','JetBrains Mono',monospace;
  --pad-x:144px; --pad-y:59px; --gap-lg:43px; --gap-md:27px; --gap-sm:13px;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

/* both surfaces are first-class */
.sig{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--navy);color:var(--fg);font-family:var(--sans);
  padding:var(--pad-y) var(--pad-x);display:flex;flex-direction:column;}
.sig.light{background:var(--cream);color:var(--ink);}

/* the 80px grid fingerprint — dark slides only */
.sig.dark::before{content:'';position:absolute;inset:0;pointer-events:none;z-index:0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);
  background-size:80px 80px;}
.sig.dark > *{position:relative;z-index:1;}

/* serif — leads */
.sig-serif{font-family:var(--serif);}
.sig-display{font-family:var(--serif);font-weight:700;font-size:182px;
  line-height:0.96;letter-spacing:-0.02em;}
.sig-h1{font-family:var(--serif);font-weight:600;font-size:100px;
  line-height:1.08;letter-spacing:-0.01em;}
.sig-h2{font-family:var(--serif);font-weight:600;font-size:58px;line-height:1.18;}
.sig-h3{font-family:var(--serif);font-weight:500;font-size:36px;line-height:1.3;}
.sig-editorial-h{font-family:var(--serif);font-weight:600;font-size:53px;line-height:1.2;}
.sig-dense-h{font-family:var(--serif);font-weight:600;font-size:46px;line-height:1.2;}
.sig-quote{font-family:var(--serif);font-weight:400;font-size:69px;
  line-height:1.28;letter-spacing:-0.01em;}
.sig-quote-mark{font-family:var(--serif);font-weight:300;font-size:154px;
  line-height:0.6;color:var(--gold);}
.sig-stat{font-family:var(--serif);font-weight:600;font-size:106px;
  line-height:1;letter-spacing:-0.02em;color:var(--gold);}

/* THE Signal moment — italic + gold, mid-sentence */
.sig-display em,.sig-h1 em,.sig-h2 em,.sig-h3 em,
.sig-editorial-h em,.sig-dense-h em,.sig-quote em{
  font-style:italic;color:var(--gold);}

/* sans — supports */
.sig-lead{font-family:var(--sans);font-weight:400;font-size:27px;line-height:1.58;}
.sig-body{font-family:var(--sans);font-weight:400;font-size:20px;line-height:1.65;}
.sig-caption{font-family:var(--sans);font-weight:400;font-size:16px;line-height:1.5;}
.sig-muted{color:var(--fg-2);} .sig.light .sig-muted{color:var(--ink-2);}
.sig-hint{color:var(--fg-3);} .sig.light .sig-hint{color:var(--ink-3);}

/* mono — tags */
.sig-label{font-family:var(--mono);font-weight:500;font-size:13px;
  letter-spacing:0.14em;text-transform:uppercase;}
.sig-kicker{font-family:var(--mono);font-weight:500;font-size:13px;
  letter-spacing:0.14em;text-transform:uppercase;color:var(--gold);}
.sig-tag{display:inline-block;border:1px solid var(--gold);color:var(--gold);
  padding:0.3em 0.8em;font-family:var(--mono);font-weight:500;font-size:13px;
  letter-spacing:0.14em;text-transform:uppercase;}

/* rules */
.sig-rule{width:36px;height:1px;background:var(--gold);}
.sig-rule-full{width:100%;height:1px;background:var(--border);}
.sig.light .sig-rule-full{background:var(--border-light);}

/* chrome — the hairline is non-negotiable */
.sig-chrome{display:flex;justify-content:space-between;align-items:center;
  padding-bottom:var(--gap-sm);border-bottom:1px solid var(--border);
  margin-bottom:var(--gap-md);
  font-family:var(--mono);font-weight:500;font-size:13px;
  letter-spacing:0.14em;text-transform:uppercase;}
.sig-foot{margin-top:auto;padding-top:var(--gap-sm);border-top:1px solid var(--border);
  display:flex;justify-content:space-between;align-items:center;
  font-family:var(--mono);font-weight:500;font-size:13px;
  letter-spacing:0.14em;text-transform:uppercase;}
.sig.light .sig-chrome{border-bottom-color:var(--border-light);}
.sig.light .sig-foot{border-top-color:var(--border-light);}

/* stat card */
.sig-stat-card{border-top:1px solid var(--border);
  padding:var(--gap-md) var(--gap-md) var(--gap-md) 0;}
.sig.light .sig-stat-card{border-top-color:var(--border-light);}

/* em-dash bullets in gold */
.sig-list{display:flex;flex-direction:column;gap:var(--gap-sm);}
.sig-li{display:grid;grid-template-columns:1.6em 1fr;align-items:baseline;}
.sig-li::before{content:'—';font-family:var(--mono);color:var(--gold);}

/* timeline */
.sig-vt{border-left:1px solid var(--border);padding-left:var(--gap-md);
  display:flex;flex-direction:column;gap:var(--gap-md);}
.sig-vt-item{position:relative;}
.sig-vt-item::before{content:'';position:absolute;left:calc(var(--gap-md) * -1 - 5px);
  top:8px;width:9px;height:9px;border-radius:50%;background:var(--gold);}

/* bars + pyramid */
.sig-bars{display:flex;align-items:flex-end;gap:20px;height:100%;}
.sig-bar{flex:1;background:var(--fg-3);}
.sig-bar.gold{background:var(--gold);}
.sig-pyr-band{border-left:3px solid var(--gold);padding:14px 48px;}

/* compare */
.sig-compare-divider{border-right:1px solid var(--border);}
.sig.light .sig-compare-divider{border-right-color:var(--border-light);}
</style>
```

### Cover frame (navy)

```html
<div class="sig dark" style="justify-content:center;">
  <div class="sig-kicker" style="margin-bottom:var(--gap-sm);">Board briefing · Q4 2026</div>
  <div class="sig-rule" style="margin-bottom:var(--gap-md);"></div>
  <h1 class="sig-display">The <em>quiet</em> case</h1>
  <p class="sig-lead sig-muted" style="margin-top:var(--gap-md);max-width:960px;">
    Why the position we hold is the one we should keep holding.
  </p>
</div>
```

### Content frame with chrome, stats and the em switch

```html
<div class="sig dark">
  <div class="sig-chrome">
    <span>Meridian · Board briefing</span>
    <span>04 / 18</span>
  </div>
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
    <div class="sig-kicker" style="margin-bottom:var(--gap-sm);">Position</div>
    <h2 class="sig-h2" style="max-width:1300px;">
      The market rewarded <em>patience</em>, not activity
    </h2>
    <div class="sig-list" style="margin-top:var(--gap-lg);max-width:1100px;">
      <div class="sig-li"><span class="sig-body">Turnover fell to 0.4% and returns did not.</span></div>
      <div class="sig-li"><span class="sig-body">Two positions carried the year; nine did nothing.</span></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--gap-lg);
                margin-top:var(--gap-lg);">
      <div class="sig-stat-card">
        <div class="sig-stat">18.4<em>%</em></div>
        <div class="sig-body" style="margin-top:12px;">Net return</div>
        <div class="sig-label sig-hint" style="margin-top:8px;">Since inception</div>
      </div>
      <!-- two more -->
    </div>
  </div>
  <div class="sig-foot">
    <span>Confidential</span>
    <span>Meridian Partners</span>
  </div>
</div>
```

### Cream slide

```html
<div class="sig light">
  <div class="sig-chrome"><span>Meridian</span><span>09 / 18</span></div>
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
    <div class="sig-quote-mark">&ldquo;</div>
    <p class="sig-quote" style="max-width:1400px;margin-top:-16px;">
      We are paid to be <em>early</em> and to look wrong for a while.
    </p>
    <div class="sig-rule" style="margin-top:var(--gap-lg);"></div>
    <div class="sig-label sig-muted" style="margin-top:var(--gap-sm);">
      Investment committee · March 2026
    </div>
  </div>
  <div class="sig-foot"><span>Confidential</span><span>Meridian Partners</span></div>
</div>
```

## Do's and Don'ts

**Do** — mix roman and italic-gold serif inside headlines throughout the deck; use mono for every kicker, label, tag, counter and note; track kickers ≥0.14em; give every chrome bar its hairline; alternate navy and cream freely; colour every statistical numeral gold; use em-dash bullets in mono gold; use the 36px gold rule as the chapter break; apply the 80px grid to every dark slide; keep the generous padding.

**Don't** — use gold on body text or as a fill; use pure white on navy; add shadows or rounded chrome; put serif on body text; bold inside body copy; round corners on chrome, panels, stat tiles or image frames; introduce a second accent.

## Fonts

**Source Serif 4 italic and IBM Plex Mono are newly hosted.** The Source Serif 4 roman was already hosted for `editorial-forest`, and DM Sans for `vellum` — both reused.

The italic cut matters here specifically. `editorial-forest` uses the same serif but **forbids italic**, so only the roman was hosted then. Signal's defining gesture is italic-gold emphasis, and its stylesheet sets no `font-style` — it relies on the browser's default `<em>` italic. Without a real italic face the browser would synthesise an oblique, which on a transitional serif reads as a slanted roman rather than a true italic. The port declares `font-style: italic` explicitly *and* hosts the face.

IBM Plex Mono is hosted at weight 500, the only weight this system uses. Note the `replit` skill in this folder also names IBM Plex Mono — it can now use this asset.

The CJK fallbacks (Noto Serif SC, Noto Sans SC) are named but not hosted.

Do not restore the source's Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. All families are OFL-licensed.

## Notes on the port

Four departures. The second would have produced a blank deck.

1. **The fluid scale was resolved to fixed pixels.** Every size is a raw `vw`/`vh` value, resolving against the browser viewport rather than the 1920×1080 frame. Each value above is the source's own evaluated at 1920×1080 — `display` 9.5vw → 182px, `pad-x` 7.5vw → 144px, and so on.
2. **The animation system was removed.** The source sets `[data-anim] { opacity: 0 }` and reveals only via `.slide.is-active` — the **fifth** template in this folder with that trap. Carried across verbatim, every animated element would render invisible. Unlike `grove`, Signal's design notes do not claim animation as part of its identity, so the layer is dropped outright rather than ungated.
3. **The navigation layer is gone.** The inline keyboard handler and slide machinery are dropped; the eighteen slides become eighteen frames.
4. **Component class names are prefixed `sig-`** to avoid collisions with the other themes in this folder.

**The stacking fix is the source's own.** Unlike `mat`, where I had to add it, Signal already ships `.slide.dark > * { position: relative; z-index: 1 }` so content sits above the grid texture. Carried over as-is.

**Both surfaces are genuine and co-equal** — the source explicitly says to alternate them freely and that neither is "the" background. Set each frame's `background` to match, or the canvas paints navy behind a cream slide. The grid texture is correctly scoped to `.dark`, so cream slides have none.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/signal` — `design.md`, `template.html`, `template.json`.
