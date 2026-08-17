---
entity_type: note
entity_id: sources-and-licenses
created_at: '2026-08-16T15:11:01.157Z'
updated_at: '2026-08-16T23:18:19.883Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - sources
  - licenses
  - provenance
name: Sources & Licenses
---
# Sources & Licenses

Provenance and licensing for everything seeded in this folder. Every source is a real, actively referenced open-source project or public-domain text, and every license was verified by reading the project's actual license file — not inferred from a README badge, reputation, or an "open source" claim. In short: everything here is MIT, public-domain/CC0, BSD-3-Clause, or CC-BY 4.0 — no copyleft, no commercial restrictions.

## Presentations

The deck themes are adapted from two open-source repositories, both MIT licensed:

- [zarazhangrui/beautiful-html-templates](https://github.com/zarazhangrui/beautiful-html-templates) at `e5e204f` — fifteen templates
- [1weiho/open-slide](https://github.com/1weiho/open-slide/tree/dad4c240136a640cb5cebf1e29b1e394ab0c62de/apps/demo/themes) at `dad4c24` — aurora, bright-sans, replit, sticker-pop

## Publications

Each template is adapted from a different real, actively-referenced open-source project, chosen so the set covers genuinely distinct visual registers rather than one framework reskinned six times:

| Template | Source | License |
|---|---|---|
| Tufte Essay | [tufte-css](https://github.com/edwardtufte/tufte-css) (Dave Liepmann) | MIT |
| LaTeX Article | [latex.css](https://github.com/vincentdoerig/latex-css) (Vincent Dörig) | MIT |
| Minimal Report | [water.css](https://github.com/kognise/water.css) (Kognise) | MIT |
| Paged Manuscript | [Paged.js](https://github.com/pagedjs/pagedjs) (Adam Hyde / pagedjs) | MIT |
| Corporate Brochure | [Bootstrap](https://github.com/twbs/bootstrap) (The Bootstrap Authors) | MIT |
| Editorial Newsletter | [Skeleton](https://github.com/dhg/Skeleton) (Dave Gamache) | MIT |

Every license was verified by reading the project's actual `LICENSE` (or `LICENSE.md`) file directly on 2026-08-14 — plain MIT text in each case, no dual-licensing or additional restrictions. Two other candidates were considered and **rejected** specifically because they turned out not to be MIT once checked: **Awesome-CV** (a well-known LaTeX résumé template) is actually licensed under the **LaTeX Project Public License (LPPL) 1.3c**, not MIT, despite its popularity; **electricbookworks/paged-design** (customizable Paged.js book designs) is **CC0**, which is public-domain-equivalent but not literally MIT. Both were dropped rather than substituted loosely, per the "MIT required" instruction.

**On "adapted":** none of these projects ship a folder of ready-made HTML pages that could be copy-pasted in — they're stylesheets/engines meant to be applied to your own markup (Tufte CSS and water.css are drop-in stylesheets, latex.css and Skeleton are small CSS frameworks, Bootstrap is a full framework, Paged.js is a pagination *engine*, not a stylesheet at all). What's reused from each is its documented type scale, layout convention, and visual philosophy; the actual HTML/CSS and the Studiograph `pagination`/`furniture`/`margins` wiring in each template were newly authored for this workspace. No external CSS/JS is loaded at runtime — Studiograph frames can't fetch external stylesheets, so every convention is reproduced directly in each template's own `shared.head`.

**Build verification:** all six templates use the same **816×1056 (US Letter)** page box and Studiograph's `pagination` mechanism — content flows across as many pages as it needs, numbered automatically, rather than being split into one frame per page. Each `-template` example is filled with representative sample content (a real, if invented, essay, paper, report, chapter, brochure, and newsletter issue — not lorem ipsum) so the template's actual rhythm is visible. Every one was rendered and inspected via `inspect_artifact` on 2026-08-14 to confirm no content overflow and no failed asset requests.

## Landing pages

All six sources are StartBootstrap templates (Start Bootstrap LLC), each independently confirmed **MIT licensed** by reading the project's `LICENSE` file on GitHub on 2026-08-14:

| Template | Source repo | License | Verified |
|---|---|---|---|
| Agency Landing | github.com/StartBootstrap/startbootstrap-agency | MIT | 2026-08-14 |
| Freelancer Landing | github.com/StartBootstrap/startbootstrap-freelancer | MIT (org page explicitly states "MIT licensed") | 2026-08-14 |
| Grayscale Landing | github.com/StartBootstrap/startbootstrap-grayscale | MIT | 2026-08-14 |
| Creative Landing | github.com/StartBootstrap/startbootstrap-creative | MIT | 2026-08-14 |
| New Age Landing | github.com/StartBootstrap/startbootstrap-new-age | MIT | 2026-08-14 |
| Coming Soon Landing | github.com/StartBootstrap/startbootstrap-coming-soon | MIT | 2026-08-14 |

**How these were built:** for each template, the source project's section structure (nav, hero, services/skills, work/portfolio grid, CTA band, footer) was studied as a reference for composition and flow only. Every pixel of HTML/CSS in the Studiograph skill was authored fresh — original class names, original copy, and hosted variable fonts already available in this folder's asset library (Outfit, DM Sans, Hanken Grotesk, Source Serif 4, Jost, JetBrains Mono, Newsreader) rather than the source project's own web fonts or Bootstrap CSS.

**Responsive build notes:** the `examples` subfolder holds a live, responsive build of each landing page as an **app**-type canvas (`geometry: {width:"fill", height:"fill"}`) rather than a fixed-width artboard. Each reuses the exact section markup and palette from its skill, with `clamp()`-based fluid type and spacing, CSS Grid columns that step down as width decreases (4-up → 2-up → 1-up), and layout reflow at key breakpoints — New Age's split hero stacks under 900px, Grayscale's alternating rows collapse to a single column under 800px, Coming Soon's countdown wraps to 2×2 with a stacked form under 480px. Every example was tested at 1440px, 768px, and 375px with no horizontal overflow, and rendered clean via `inspect_artifact`. The earlier fixed-width artboard previews were retired in favor of these responsive versions; they remain recoverable from file history.

## Infographics

Six of the nine templates — stat row list, timeline flow, comparison split, funnel flow, ranked pyramid, and SWOT quadrant — follow template categories catalogued in [antvis/Infographic](https://github.com/antvis/Infographic), MIT licensed (license verified against the repository's `LICENSE` file on 2026-08-14). AntV Infographic defines its layouts as a declarative JSON spec rendered by its own engine; no code is reused, only the layout concepts and category names.

The remaining three — bento grid, iceberg, and hub & spoke — are common infographic shapes catalogued in the layout taxonomy of [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills), MIT licensed (verified 2026-08-16). Only the layout names and concepts are shared: that project is a raster image-generation pipeline that explicitly does not emit HTML or SVG, so there is no code to reuse. Its visual style presets (claymation, corporate-memphis, cyberpunk-neon and similar) were deliberately not adopted.

All nine templates were restyled on 2026-08-16 onto the same editorial skin as the Diagrams folder — paper #f5f5f5, ink #2d3142, muted #4f5d75, a single accent #eb6c36, serif headlines, tonal ink ramps in place of multiple saturated fills — so graphics and diagrams read as one system. The HTML and CSS in every template is original work authored for Studiograph, with no external font or stylesheet fetches.

## Diagrams

Adapted from [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design), MIT licensed — a 27-type editorial diagram system built as an agent skill (self-contained HTML + inline SVG, no build step, no external dependencies). License verified by reading the repository's `LICENSE` file on 2026-08-16 — plain MIT text (Copyright 2025 Cathryn Lavery), no additional restrictions. The project's bundled third-party icon sets (Tabler Icons MIT, Simple Icons CC0, log-z/logos MIT, Devicon MIT) are documented in its `THIRD_PARTY_LICENSES.md` and are not used in the templates seeded here.

Eight of the 27 types were curated for onboarding: flowchart, process, org chart, Gantt, architecture, quadrant, layer stack, and Venn. The layout conventions, default palette, and editorial philosophy (accent on 1–2 focal nodes, target density 4/10) follow the source; the HTML/CSS was re-authored for Studiograph canvases, with the folder's hosted fonts in place of the project's Google Fonts (which sandboxed frames cannot fetch).

## Social media and data

The social media templates and the chart templates in Working with Data are original layouts authored for Studiograph in the house editorial skin — no external source project.

The multi-series chart palette (`#2a78d6, #eb6834, #1baf7a, #eda100, #e87ba4, #008300, #4a3aa7, #e34948`) is the validated default from the `dataviz` skill's reference palette. It was re-validated against this folder's surface (#f5f5f5) on 2026-08-16 and passes every hard gate: lightness band, chroma floor, colour-vision-deficiency separation (worst adjacent ΔE 9.1, target ≥8), and normal-vision separation (worst adjacent ΔE 19.6, floor ≥15). The contrast check returns a relief warning — three hues sit below 3:1 against this surface — which is why every chart template ships direct labels or a table view rather than relying on colour alone.

## Core skills

Every skill traces to a specific, real open-source repository (or, for Elements of Style, a public-domain text still actively packaged for present-day use). Each ports the source's underlying method into original, self-contained guidance written for Studiograph work rather than reproducing the source verbatim.

| Skill | Source | License |
|---|---|---|
| [[prompt-engineering-fundamentals]] | dair-ai/Prompt-Engineering-Guide | MIT |
| [[chart-choice-guide]] | holtzy/data_to_viz | MIT |
| [[diagramming-with-mermaid]] | mermaid-js/mermaid | MIT |
| [[clear-concise-writing]] | Strunk & White, *The Elements of Style* (1918) | Public Domain |
| [[plain-language-content-design]] | 18F/content-guide | CC0 1.0 |
| [[accessible-color-contrast]] | LeaVerou/color.js | MIT |
| [[inclusive-design-principles]] | inclusive-design/guide.inclusivedesign.ca | BSD-3-Clause |
| [[reproducible-documentation]] | the-turing-way/the-turing-way | CC-BY 4.0 |
| [[modular-type-scale]] | modularscale/modularscale-sass | MIT |

For each source, the actual license file was read directly before it was used:

- **MIT** confirmed by reading the LICENSE file or rendered license text at the repo: Prompt-Engineering-Guide, data_to_viz, mermaid, color.js, modularscale-sass.
- **CC0 1.0 (public domain dedication)** confirmed for 18F/content-guide, a U.S. federal government open-source project.
- **CC-BY 4.0** confirmed for The Turing Way's content (the project dual-licenses: CC-BY 4.0 for the book/content, MIT for its software tooling — the content license is the relevant one here).
- **BSD-3-Clause** confirmed for the Inclusive Design Guide.
- **Public domain** for Strunk's 1918 *The Elements of Style* — the original text's copyright has long expired; the reference packaging (obra/the-elements-of-style) is a modern wrapper built specifically to make the text usable by AI agents.
