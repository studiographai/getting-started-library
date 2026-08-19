---
entity_type: publication
entity_id: minimal-report-template
created_at: '2026-08-14T22:11:18.658Z'
updated_at: '2026-08-17T01:41:22.362Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
name: Minimal Report (Template)
status: draft
---
{
  "artifactId": "minimal-report-template",
  "title": "Minimal Report (Template)",
  "frames": [
    {
      "id": "pages",
      "title": "Report",
      "geometry": {
        "width": 816,
        "height": 1056
      },
      "content": "<div class=\"mr-doc\"><h1 class=\"mr-title\">Why Slow Software Wins</h1><p class=\"mr-meta\">Internal whitepaper · August 2026 · <span class=\"tok\">Author Name</span></p><h2 class=\"mr-h2\">The problem with fast</h2><p class=\"mr-p\">Every roadmap rewards shipping quickly, and almost none reward the quieter discipline of shipping something that still makes sense a year later. The two are not the same thing, and treating them as interchangeable is where most technical debt is born.</p><p class=\"mr-p\">Fast software optimizes for the sprint. Slow software &mdash; deliberately, not accidentally slow &mdash; optimizes for the system the sprint is part of.</p><h2 class=\"mr-h2\">What slow actually means</h2><p class=\"mr-p\">Slow does not mean sluggish, and it does not mean indecisive. It means the team spent time on the decisions that are expensive to reverse, and moved quickly through the ones that aren’t.</p><ul class=\"mr-list\"><li>Data models and schemas, which are expensive to change once other systems depend on them</li><li>Public APIs and integration contracts, which other teams build against</li><li>Naming and taxonomy, which quietly becomes load-bearing everywhere it appears</li></ul><h2 class=\"mr-h2\">What we recommend</h2><p class=\"mr-p\">Identify the handful of decisions on any given project that are genuinely expensive to reverse, and spend disproportionate time on exactly those. Let everything else move as fast as it wants to.</p></div>",
      "background": "#FFFFFF",
      "pagination": {
        "margins": {
          "top": 90,
          "right": 96,
          "bottom": 84,
          "left": 96
        },
        "pageNumbers": {
          "position": "bottom-right",
          "format": "Page {n} of {m}"
        }
      }
    }
  ],
  "shared": {
    "head": "<style>@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=block');*{box-sizing:border-box;}.mr-doc{font-family:'DM Sans',system-ui,sans-serif;color:#1A1A1A;max-width:576px;margin:0 auto;}.mr-title{font-size:30px;font-weight:700;margin:0 0 8px;}.mr-meta{font-size:10pt;text-transform:uppercase;letter-spacing:0.06em;color:#666;margin:0 0 36px;}.mr-h2{font-size:20px;font-weight:700;margin:32px 0 12px;padding-top:20px;border-top:1px solid #E5E5E5;}.mr-h2:first-of-type{border-top:none;padding-top:0;margin-top:0;}.mr-p{font-size:11pt;line-height:1.6;margin:0 0 14px;}.mr-list{margin:0 0 14px 20px;padding:0;}.mr-list li{font-size:11pt;line-height:1.6;margin-bottom:6px;}</style>"
  }
}
