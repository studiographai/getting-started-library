---
entity_type: skill
entity_id: vellum
created_at: '2026-08-14T20:27:35.801Z'
updated_at: '2026-08-14T20:27:35.801Z'
created_by: philip-kleemann
updated_by: philip-kleemann
date: '2026-08-14'
tags:
  - theme
  - deck
  - dark
  - editorial
  - scholarly
  - design-system
name: Vellum
description: >-
  Scholarly essay-on-a-wall deck theme — a single deep periwinkle navy field
  with warm chartreuse-yellow italic Cormorant Garamond floating centred on
  every slide, DM Sans body, and a dusty-teal Courier Prime pin-note in the
  bottom-left corner. One surface, no motion, deliberately still. Use for
  research findings, white papers, academic and policy briefs, advisory
  deliverables, literary pitches, founder reflections.
applies_to:
  - deck
  - slides
  - presentation
  - artifact-canvas
  - theme
loading: on-demand
status: draft
source: github.com/zarazhangrui/beautiful-html-templates @ e5e204f — templates/vellum
---
# Vellum

An essay pinned to a wall. Every slide is the same deep periwinkle navy field, with warm chartreuse-yellow italic Cormorant Garamond floating centred on it. DM Sans recedes into a supporting role. Courier Prime carries the signature: a small typed "pin-note" in dusty teal, sitting in the bottom-left corner of every slide like a label stuck beside a framed page.

Gallery exhibition wall meets archive folder. One colour, three typefaces, **zero motion**.

## When to use

Reach for Vellum when the deck should feel scholarly, literary, and quietly intelligent — research synthesis, white papers, academic and policy briefs, advisory deliverables, longform editorial pieces, founder reflections and vision decks. It works for tech, business or creator work too, whenever the goal is a calm, considered atmosphere rather than energetic visuals.

**Avoid it** for anything needing visual heat or pop. The navy-and-warm-yellow Cormorant aesthetic is intentionally low-tempo.

It is the only dark theme in this folder besides `aurora`, and it is nothing like it: Aurora is engineered and nocturnal, Vellum is handwritten and still. Do not use it for client proposals in the studio's own visual system — use `schema-slides` or `proposal-slides`.

## Palette

**One field, two accents.** There is no alternate surface, no light/dark theme, no second background.

| Role | Value | Notes |
|---|---|---|
| `navy` | `#2A3870` | deep periwinkle — every slide, the constant |
| `navy-alt` | `#343F80` | rare inset variation |
| `navy-deep` | `#1F2858` | left compare panel only |
| `navy-mid` | `#34407A` | right compare panel only |
| `yellow` | `#E8D85C` | warm chartreuse — all primary type |
| `yellow-2` | `rgba(232,216,92,0.62)` | secondary type |
| `yellow-3` | `rgba(232,216,92,0.32)` | tertiary type, default chart bars |
| `emphasis-yellow` | `#F5E168` | brighter yellow — `<em>` emphasis only |
| `teal` | `#3A7878` | dusty teal — the second accent |
| `border` | `rgba(232,216,92,0.20)` | every hairline |

**Teal appears in exactly five places** and nowhere else: the large quote-mark glyph, the pin-note, kickers, the 28px accent rule, and list counter markers. Substituting yellow into any of those flattens teal's role.

Even the compare layout uses two near-identical navy shades rather than contrasting backgrounds.

## Typography

Three families, strict roles. **Italic serif is the personality.**

- **Cormorant Garamond**, italic, weight 400 — every headline at every scale, plus quote text and stat values. The italic serif at display scale against the bold field is the system's identity.
- **DM Sans**, weight 400 — body and lead. Meant to recede so the serif leads the eye. Never italic.
- **Courier Prime** — the typed-annotation voice: chrome labels, slide counters, pin-notes, list counter markers, bar values.

| Token | Size | Family | Use |
|---|---|---|---|
| `display` | 211px | Cormorant italic | cover / closing hero (lh 0.92, −0.01em) |
| `h1` | 134px | Cormorant italic | section headline (lh 0.95, −0.01em) |
| `quote-mark` | 134px | Cormorant italic | the teal opening-quote glyph (lh 0.6) |
| `stat-value` | 106px | Cormorant italic | stat numeral (lh 1, −0.02em) |
| `h2` | 77px | Cormorant italic | content headline (lh 1.05) |
| `quote-text` | 61px | Cormorant italic | pull-quote body (lh 1.25) |
| `h3` | 46px | Cormorant italic 500 | sub-headline (lh 1.15) |
| `lead` | 29px | DM Sans | lead paragraph (lh 1.6) |
| `pin-note` | 22px | Courier Prime | **the signature annotation**, teal |
| `bar-val` | 21px | Courier Prime | chart value |
| `body` | 20px | DM Sans | body paragraph (lh 1.65) |
| `caption` | 16px | DM Sans | caption (lh 1.5) |
| `label` | 14px | Courier Prime | kicker, chrome label, 0.06em |

**The emphasis mechanism is non-negotiable:** `<em>` inside an italic headline flips to **upright roman at weight 600 in `emphasis-yellow`**. Italic is the default; roman is the emphasis. This inversion is the system's cleverest move.

**Never set small text in italic serif.** Italic is display scale only — body and caption stay upright sans.

## Layout

- **Frame size:** 1920×1080.
- **Padding:** 115px horizontal, 65px vertical — increase 1.2–1.4× on quote slides.
- **Centre everything.** Text-align centre, items centred. Left-aligned headlines break the pinned-essay register. This is the layout rule that most distinguishes Vellum from the other editorial themes in this folder, which are all left-aligned.
- **Density: low.** Leave generous empty navy field around every content block. The emptiness is structural.

| Token | Value |
|---|---|
| `pad-x` | 115px |
| `pad-y` | 65px |
| `gap-lg` | 54px |
| `gap-md` | 32px |
| `gap-sm` | 16px |

**Severely flat:** no shadows, no rounded corners, no gradients. Every rule is 1px at 20% yellow.

### The pin-annotation

The system's signature, and it goes on **every** slide — chromed or chromeless. A small stack of Courier Prime lines in dusty teal, bottom-left, holding a slide counter (`03 / 09`), a short pinned label, and an optional second note. Max-width 422px, sitting ~58px from the bottom and 115px from the left.

Removing it breaks the system.

## The nine layouts

Cover, statement, text, stats, list, quote, compare, chart, end.

Notable components:

- **Quote mark** — a 134px teal italic Cormorant opening-quote glyph, centred above a centred pull-quote. The only large graphic accent in the system.
- **Numbered list** — CSS counters rendered in Courier Prime at label size in teal, with a 2em marker column. **Bullet dots and em-dashes do not exist here.**
- **Pin-stat** — a centred italic serif numeral above a mono caption, separated from its neighbours by a single 1px hairline; the last stat drops the border.
- **Compare panels** — `navy-deep` left, `navy-mid` right with a hairline left border.
- **Chart** — bars at `yellow-3` by default, full `yellow` for the highlighted bar, over a 1px hairline baseline, with Courier Prime values.
- **Image placeholder** — translucent navy fill with a 1px *dashed* border (the only dashed line in the system).

## Building it in Studiograph

Create the deck with `create_artifact` as a **presentation** entry: one frame per slide at 1920×1080, `background: "#2A3870"` on both `display` and every frame, and everything below in `shared.head`.

### `shared.head`

```html
<style>@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400..600&family=Courier+Prime:wght@400&family=DM+Sans:wght@100..1000&display=block');



:root{
  --navy:#2A3870; --navy-alt:#343F80; --navy-deep:#1F2858; --navy-mid:#34407A;
  --yellow:#E8D85C; --yellow-2:rgba(232,216,92,0.62); --yellow-3:rgba(232,216,92,0.32);
  --emphasis:#F5E168; --teal:#3A7878; --border:rgba(232,216,92,0.20);
  --f-serif:'Cormorant Garamond','Noto Serif SC',Georgia,serif;
  --f-sans:'DM Sans','Noto Sans SC',system-ui,sans-serif;
  --f-mono:'Courier Prime','Courier New',monospace;
  --pad-x:115px; --pad-y:65px; --gap-lg:54px; --gap-md:32px; --gap-sm:16px;
}
*{box-sizing:border-box;margin:0;padding:0;border-radius:0;}

/* the field — one surface, always */
.vl{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:var(--navy);color:var(--yellow);font-family:var(--f-sans);
  padding:var(--pad-y) var(--pad-x);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  text-align:center;gap:var(--gap-md);}
.vl.roomy{padding:calc(var(--pad-y)*1.3) calc(var(--pad-x)*1.3);}

/* display type — italic serif, always */
.vl-display{font-family:var(--f-serif);font-style:italic;font-weight:400;
  font-size:211px;line-height:0.92;letter-spacing:-0.01em;}
.vl-h1{font-family:var(--f-serif);font-style:italic;font-weight:400;
  font-size:134px;line-height:0.95;letter-spacing:-0.01em;}
.vl-h2{font-family:var(--f-serif);font-style:italic;font-weight:400;
  font-size:77px;line-height:1.05;}
.vl-h3{font-family:var(--f-serif);font-style:italic;font-weight:500;
  font-size:46px;line-height:1.15;}
.vl-quote{font-family:var(--f-serif);font-style:italic;font-weight:400;
  font-size:61px;line-height:1.25;}
.vl-stat{font-family:var(--f-serif);font-style:italic;font-weight:400;
  font-size:106px;line-height:1;letter-spacing:-0.02em;}

/* the emphasis inversion — italic flips to upright roman */
.vl-display em,.vl-h1 em,.vl-h2 em,.vl-h3 em,.vl-quote em{
  font-style:normal;font-weight:600;color:var(--emphasis);}

/* supporting type — upright sans, never italic */
.vl-lead{font-family:var(--f-sans);font-weight:400;font-size:29px;line-height:1.6;}
.vl-body{font-family:var(--f-sans);font-weight:400;font-size:20px;line-height:1.65;}
.vl-caption{font-family:var(--f-sans);font-weight:400;font-size:16px;line-height:1.5;
  color:var(--yellow-2);}
.vl-2{color:var(--yellow-2);} .vl-3{color:var(--yellow-3);}

/* mono — the typed voice */
.vl-label{font-family:var(--f-mono);font-weight:400;font-size:14px;letter-spacing:0.06em;}
.vl-kicker{font-family:var(--f-mono);font-weight:400;font-size:14px;
  letter-spacing:0.1em;color:var(--teal);}
.vl-rule{width:28px;height:1px;background:var(--teal);}

/* the pin-note — on every slide, bottom-left, teal */
.vl-pin{position:absolute;left:var(--pad-x);bottom:58px;max-width:422px;
  text-align:left;font-family:var(--f-mono);font-weight:400;font-size:22px;
  line-height:1.5;letter-spacing:0.01em;color:var(--teal);}

/* chrome bars */
.vl-chrome{width:100%;display:flex;justify-content:space-between;align-items:center;
  padding-bottom:var(--gap-sm);border-bottom:1px solid var(--border);
  margin-bottom:var(--gap-md);}
.vl-foot{width:100%;display:flex;justify-content:space-between;align-items:center;
  padding-top:var(--gap-sm);border-top:1px solid var(--border);
  margin-top:var(--gap-md);}

/* quote mark — the only large graphic accent */
.vl-qmark{font-family:var(--f-serif);font-style:italic;font-weight:400;
  font-size:134px;line-height:0.6;color:var(--teal);}

/* numbered list — mono counters in teal, never dots or dashes */
.vl-list{list-style:none;counter-reset:vl;display:flex;flex-direction:column;
  gap:var(--gap-md);text-align:left;}
.vl-list li{counter-increment:vl;display:grid;grid-template-columns:2em 1fr;
  gap:0.5em;align-items:baseline;}
.vl-list li::before{content:counter(vl,decimal-leading-zero);
  font-family:var(--f-mono);font-size:14px;color:var(--teal);}

/* pin-stats */
.vl-stats{display:grid;grid-template-columns:repeat(3,1fr);width:100%;}
.vl-pin-stat{border-right:1px solid var(--border);padding:var(--gap-md);
  display:flex;flex-direction:column;align-items:center;gap:12px;}
.vl-pin-stat:last-child{border-right:none;}
.vl-pin-stat .lab{font-family:var(--f-mono);font-size:16px;color:var(--yellow-2);}

/* compare panels — two near-identical navies */
.vl-compare{display:grid;grid-template-columns:1fr 1fr;width:100%;height:100%;}
.vl-panel-a{background:var(--navy-deep);padding:var(--gap-lg);}
.vl-panel-b{background:var(--navy-mid);border-left:1px solid var(--border);
  padding:var(--gap-lg);}

/* chart */
.vl-bars{display:flex;align-items:flex-end;justify-content:space-between;
  gap:32px;width:100%;height:340px;border-bottom:1px solid var(--border);}
.vl-bar{flex:1;background:var(--yellow-3);}
.vl-bar.on{background:var(--yellow);}
.vl-barval{font-family:var(--f-mono);font-size:21px;line-height:1;margin-bottom:12px;}

/* image slot — the only dashed line in the system */
.vl-img{background:rgba(42,56,112,0.12);border:1px dashed var(--border);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--f-mono);font-size:14px;color:var(--yellow-2);}
</style>
```

### Cover frame

```html
<div class="vl">
  <div class="vl-kicker">Research findings · 2026</div>
  <h1 class="vl-display">On the<br>quiet work</h1>
  <p class="vl-lead vl-2" style="max-width:900px;">A study of how teams keep what they know.</p>
  <div class="vl-pin">01 / 09<br>Field Office Research<br>Pinned, August 2026</div>
</div>
```

### Content frame with chrome

```html
<div class="vl" style="justify-content:flex-start;">
  <div class="vl-chrome">
    <span class="vl-label">Section 02 · Findings</span>
    <span class="vl-label">03 / 09</span>
  </div>
  <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px;">
    <div class="vl-kicker">What we heard</div>
    <div class="vl-rule"></div>
    <h2 class="vl-h1">People keep what they<br>cannot <em>re-find</em></h2>
    <p class="vl-lead vl-2" style="max-width:1100px;">Filing is a response to distrust in retrieval, not a preference for order.</p>
  </div>
  <div class="vl-pin">03 / 09<br>Interview synthesis</div>
</div>
```

Note the `<em>` — it renders upright roman in brighter yellow against the surrounding italic. That contrast is the point.

### Quote frame

```html
<div class="vl roomy">
  <div class="vl-qmark">&ldquo;</div>
  <p class="vl-quote" style="max-width:1300px;">The archive is not where the work goes to rest. It is where the next piece of work begins.</p>
  <div class="vl-label vl-2" style="margin-top:32px;">Participant 07 · design lead</div>
  <div class="vl-pin">06 / 09<br>Pulled quote<br>40 min session</div>
</div>
```

## Do's and Don'ts

**Do** — fill every slide with navy; set every headline in italic Cormorant 400 in yellow; put a pin-annotation on every slide; use `<em>` as upright roman 600 in emphasis-yellow; keep teal to its five contexts; centre everything; number lists with mono counters in teal; leave generous empty field.

**Don't** — introduce a second background colour; render headlines upright roman; add shadows, rounded corners or gradients; colour the quote-mark or kickers yellow; use bullet dots or em-dashes; animate anything; omit the pin-annotation; introduce a third typeface; set small text in italic serif; crowd the slide edge-to-edge.

## Fonts

Cormorant Garamond (italic, variable 400–600), DM Sans (variable 100–1000) and Courier Prime (400) are hosted in this folder's asset library and wired into the `@font-face` block above.

**Only the italic cut of Cormorant is hosted** — deliberately. This system never sets the serif upright; roman appears only via the `<em>` mechanism, which the CSS renders with `font-style:normal` on a face that has no roman cut registered. In practice the browser synthesises an upright form, which is acceptable here because `<em>` runs are short and the weight shift to 600 plus the colour change carry the emphasis. If you want a true roman cut for `<em>`, upload Cormorant Garamond roman and add a matching `@font-face`.

Courier Prime ships only 400 and 700; the source asks for weight 500 on the pin-note, which resolves to 400. That is what the source renders too.

Do not restore the Google Fonts `<link>` — Studiograph frames run under a CSP of `style-src 'unsafe-inline'`, which blocks external stylesheets, and the failure is silent. All three families are OFL-licensed.

CJK fallbacks (Noto Serif SC, Noto Sans SC) are named in the stacks but not hosted.

## Notes on the port

Five departures:

1. **The fluid type scale was resolved to fixed pixels.** Every size in the source is a raw `vw`/`vh` value, which in a Studiograph frame resolves against the browser viewport rather than the 1920×1080 frame. Each number in the tables above is the source's own value evaluated at exactly 1920×1080 — `display` 11vw → 211px, `pad-x` 6vw → 115px, and so on.
2. **The navigation layer is gone.** The source ships a horizontal flex strip with an inline keyboard handler and nav dots. Studiograph steps frames itself; the nine slides become nine frames. There is no animation trap here — the source is explicitly motionless (`Don't motion the slides`), so nothing was keyed to an active-slide class.
3. **`.light` and `.dark` were dropped as dead classes.** Both resolve to identical background and colour, and the source says so in a comment: the `.light` class "is preserved for backwards compatibility but renders identically to `.dark` — no inverted theme." The slides in the template still carry these classes; they do nothing.
4. **The centred layout is baked into `.vl`.** The source applies centring per slide type; since the design rules require it on every slide ("left-aligned headlines break the pinned-essay register"), it lives on the base class here. Override per frame when a layout genuinely needs a different flow, as the chromed example does.
5. **Component class names are prefixed `vl-`** to avoid collisions with the other themes in this folder. Behaviour is unchanged.

**Also worth noting:** the source stylesheet contains a duplicated block — `.slide.dark` / `.slide.light` and the chrome rules appear twice with identical content. Harmless, and not reproduced here.

**Source:** `github.com/zarazhangrui/beautiful-html-templates` at commit `e5e204f`, `templates/vellum` — `design.md`, `template.html`, `template.json`.
