---
entity_type: publication
entity_id: tufte-essay-template
created_at: '2026-08-14T22:10:52.368Z'
updated_at: '2026-08-14T22:10:52.368Z'
created_by: bella-corbin
updated_by: bella-corbin
date: '2026-08-14'
name: Tufte Essay (Template)
status: draft
---
{
  "artifactId": "tufte-essay-template",
  "title": "Tufte Essay (Template)",
  "frames": [
    {
      "id": "pages",
      "title": "Essay",
      "geometry": {
        "width": 816,
        "height": 1056
      },
      "content": "<div class=\"te-doc\"><div class=\"te-kicker\">Essay</div><h1 class=\"te-h1\">The Cost of Convenience</h1><p class=\"te-subtitle\">A short case for slower defaults</p><p class=\"te-byline\">By <span class=\"tok\">Sample Author</span> · August 2026</p><p class=\"te-p\">Every product decision is, in some sense, a decision about defaults. When a settings panel ships with a value already selected, most people never touch it again, which means the default is not a starting point so much as the final answer for the overwhelming majority of users.</p><div class=\"te-row\"><p class=\"te-p\">This is easy to forget from inside a design team, where every option feels equally available and equally considered. It rarely is, outside the room.</p><p class=\"te-note\">A default is not a neutral starting point — it is itself a design choice, and often the most consequential one a team makes.</p></div><p class=\"te-p\">The convenient path — the one requiring no decision at all — tends to win by default (the pun is unavoidable), regardless of whether it best serves the person using the product. Convenience is a force, not a value judgment, and it is remarkably indifferent to whether the thing it makes easy is good for you.</p><blockquote class=\"te-epigraph\">&ldquo;We shape our tools, and thereafter our tools shape us.&rdquo;<span class=\"te-attr\">— often attributed to Marshall McLuhan</span></blockquote><h2 class=\"te-h2\">Why defaults are sticky</h2><p class=\"te-p\">Three forces keep a default in place long after it stops serving anyone well: the effort of finding the setting, the risk of breaking something by changing it, and simple unawareness that an alternative exists at all.</p><div class=\"te-row\"><p class=\"te-p\">Of the three, unawareness is the most fixable, and the one product teams have the most leverage over — yet it is usually the one addressed last, if at all.</p><p class=\"te-note\">Surfacing a choice at the moment it matters costs almost nothing. Burying it in a settings menu costs a great deal, quietly, forever.</p></div><p class=\"te-p\">None of this is an argument against defaults — a product with no defaults is a product nobody can use. It is an argument for treating the choice of default with the same rigor as any other design decision, rather than letting it fall out of whatever the engineering path of least resistance happened to produce.</p><p class=\"te-p\">Slow down the default. Everything downstream moves faster for it.</p></div>",
      "background": "#FFFFF8",
      "pagination": {
        "margins": {
          "top": 90,
          "right": 40,
          "bottom": 84,
          "left": 96
        },
        "pageNumbers": {
          "position": "bottom-center",
          "format": "{n}"
        }
      }
    }
  ],
  "shared": {
    "head": "<style>@font-face{font-family:'Lora';font-weight:400;font-style:normal;src:url('/api/assets/{{ASSET_ID}}/Lora-Regular.woff2') format('woff2');}@font-face{font-family:'Lora';font-weight:400;font-style:italic;src:url('/api/assets/{{ASSET_ID}}/Lora-Italic.woff2') format('woff2');}*{box-sizing:border-box;}:root{--te-paper:#FFFFF8;--te-ink:#111111;--te-muted:#666666;--te-rule:#CCCCCC;--te-serif:'Lora',Georgia,serif;}.te-doc{font-family:var(--te-serif);color:var(--te-ink);}.te-kicker{font-size:12px;text-transform:uppercase;letter-spacing:0.14em;color:var(--te-muted);margin-bottom:8px;}.te-h1{font-size:40px;font-weight:400;line-height:1.1;margin:0 0 10px;}.te-subtitle{font-style:italic;font-size:20px;color:var(--te-muted);margin:0 0 14px;}.te-byline{font-size:13px;color:var(--te-muted);margin:0 0 36px;padding-bottom:20px;border-bottom:1px solid var(--te-rule);}.te-p{font-size:15px;line-height:1.6;max-width:440px;margin:0 0 18px;}.te-row{display:grid;grid-template-columns:440px 1fr;column-gap:28px;margin-bottom:18px;align-items:start;}.te-row .te-p{margin-bottom:0;}.te-note{font-size:11px;line-height:1.45;color:var(--te-muted);margin:0;padding-top:2px;}.te-epigraph{max-width:440px;font-style:italic;font-size:17px;line-height:1.5;padding-left:20px;border-left:2px solid var(--te-rule);margin:28px 0;color:var(--te-ink);}.te-attr{display:block;font-style:normal;font-size:12px;color:var(--te-muted);margin-top:8px;}.te-h2{font-style:italic;font-weight:400;font-size:22px;margin:32px 0 14px;}.tok{background:transparent;}</style>"
  }
}
