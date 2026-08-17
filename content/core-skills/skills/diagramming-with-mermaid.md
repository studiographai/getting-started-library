---
entity_type: skill
entity_id: diagramming-with-mermaid
created_at: '2026-08-14T23:00:48.256Z'
updated_at: '2026-08-14T23:00:48.256Z'
created_by: bella-corbin
updated_by: bella-corbin
date: '2026-08-14'
tags:
  - diagrams
  - flowcharts
  - planning
  - foundational
name: Diagramming with Mermaid Syntax
description: >-
  Sketch flowcharts, sequence diagrams, timelines, and hierarchies as plain text
  using Mermaid's diagram syntax — a fast way to think through structure before
  building a polished visual. Use when planning a process diagram, org chart, or
  flow, whether the final output is a markdown note or a hand-built artboard.
applies_to:
  - notes
  - documents
  - artboards
  - presentations
license: MIT
loading: on-demand
source: >-
  github.com/mermaid-js/mermaid (MIT License, Knut Sveidqvist, verified
  2026-08-14)
status: draft
---

# Diagramming with Mermaid Syntax

Mermaid ([github.com/mermaid-js/mermaid](https://github.com/mermaid-js/mermaid), MIT License) turns short text descriptions into diagrams — flowcharts, sequence diagrams, timelines, state machines, and mind maps — without a drawing tool. Even where a Studiograph artifact needs a hand-built SVG rather than a live Mermaid render, its syntax is still the fastest way to think through a diagram's structure before you draw it, and it renders natively in most markdown viewers (including GitHub) if you paste it straight into a note or document.

## The core syntax patterns

**Flowchart** — nodes and directional arrows, for a process or decision path:
```
flowchart TD
  A[Start] --> B{Decision point}
  B -->|Yes| C[Do the thing]
  B -->|No| D[Skip it]
```
`TD` (top-down) or `LR` (left-right) sets the flow direction. Square brackets `[ ]` are process steps, curly braces `{ }` are decisions, rounded `( )` are start/end points.

**Sequence diagram** — who talks to whom, in order, for a handoff or interaction:
```
sequenceDiagram
  Client->>Designer: Sends brief
  Designer->>Client: Shares first draft
  Client-->>Designer: Feedback
```

**Timeline** — dated milestones in a line, good for project histories:
```
timeline
  title Project Timeline
  Q1 : Kickoff : Discovery
  Q2 : First draft
  Q3 : Launch
```

**Mind map** — a central idea branching into related ones, for brainstorms or taxonomies:
```
mindmap
  root((Topic))
    Branch A
      Detail 1
    Branch B
```

## Diagram hygiene that applies regardless of tool

Pick one direction (top-down or left-right) and hold it for the whole diagram — mixing directions is the single most common source of confusing flowcharts. Keep node labels to a few words; if a step needs a paragraph of explanation, that's a sign it should be two steps, not one crowded box. Limit a single diagram to what fits on one screen without scrolling — past about 12-15 nodes, split into two connected diagrams instead of cramming.

## Applying this in Studiograph

Draft the diagram's structure in Mermaid syntax first, in a scratch note if needed — it forces you to be explicit about every node and every connection before you touch visual design. Once the structure is right, translate it into the artboard: each Mermaid node becomes a styled box or card, each arrow becomes a connecting line or numbered sequence, following whatever visual system the rest of the piece uses (palette, type scale, spacing). The Mermaid draft is disposable scaffolding — the point is that it's faster to fix a wrong connection in three lines of text than in a finished graphic.
