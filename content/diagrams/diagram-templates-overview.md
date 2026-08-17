---
entity_type: note
entity_id: diagram-templates-overview
created_at: '2026-08-16T15:30:01.462Z'
updated_at: '2026-08-16T16:52:15.736Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
tags:
  - diagram
  - template
  - overview
name: Diagram Templates — Overview
---
# Diagram Templates — Overview

Each diagram template in this folder is a **skill**. A skill is a document that tells the AI how something should look — here, that means the shapes, lines, colours and type of a diagram. In this folder, "skill" and "diagram template" mean the same thing.

## 1. Pick a template

The example diagrams are in `diagrams` → `examples` — one for every template.

| Template | Shows | Best for | Example |
|---|---|---|---|
| [[flowchart-diagram]] | Decision logic with branches | "How do we decide…" questions, triage rules | [[flowchart-diagram-preview]] |
| [[process-diagram]] | A multi-step workflow across actors | Onboarding flows, approval chains, handoffs | [[process-diagram-preview]] |
| [[org-chart-diagram]] | Ownership and reporting lines | Team structures, escalation paths | [[org-chart-diagram-preview]] |
| [[gantt-diagram]] | Tasks and phases on a timeline | Project plans, launch schedules | [[gantt-diagram-preview]] |
| [[architecture-diagram]] | Components and their connections | System overviews, tool integrations | [[architecture-diagram-preview]] |
| [[quadrant-diagram]] | Items positioned on two axes | Prioritisation, competitive positioning | [[quadrant-diagram-preview]] |
| [[layer-stack-diagram]] | Stacked levels of abstraction | Tooling stacks, strategy layers | [[layer-stack-diagram-preview]] |
| [[venn-overlap-diagram]] | Overlap between sets | Shared responsibilities, market overlap | [[venn-diagram-preview]] |

## 2. Ask for your diagram

```text
Draw a diagram using the `flowchart-diagram` skill.

Topic: how a support ticket moves from intake to resolution
Detail: 8–10 steps, one decision point
Format: widescreen, for a slide

Show me the steps in text before you draw.
```

Name the skill exactly as it is written on its entry — `flowchart-diagram`, `org-chart-diagram`. That is what loads the design.

A good diagram is mostly deletion — every box earns its place, and the accent colour marks only the one or two things the reader should see first. If it needs more than nine boxes, it is probably two diagrams.

Name your brand skill alongside it ([[your-brand-overview]]) to swap the accent and type for your own.

Need a rough sketch rather than a designed diagram? `diagramming-with-mermaid` in [[core-skills-overview]] drafts one from text in seconds — these templates are for the version you would put in front of a client.

## 3. Adjust

Ask by part: *"make the decision box the focal point"*, *"drop the third branch"*, *"make it portrait for a document."*

## Sources

Template provenance and licensing: [[sources-and-licenses]].
