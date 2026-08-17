---
entity_type: publication
entity_id: latex-article-template
created_at: '2026-08-14T22:11:09.018Z'
updated_at: '2026-08-14T22:11:09.018Z'
created_by: bella-corbin
updated_by: bella-corbin
date: '2026-08-14'
name: LaTeX Article (Template)
status: draft
---
{
  "artifactId": "latex-article-template",
  "title": "LaTeX Article (Template)",
  "frames": [
    {
      "id": "pages",
      "title": "Article",
      "geometry": {
        "width": 816,
        "height": 1056
      },
      "content": "<div class=\"la-doc\"><div class=\"la-titleblock\"><h1 class=\"la-title\">A Framework for Evaluating Chart Legibility</h1><p class=\"la-authors\">Sample Author<sup>1</sup>, Another Author<sup>2</sup></p><p class=\"la-affil\"><sup>1</sup>Schema Design &middot; <sup>2</sup>Independent Researcher</p><p class=\"la-date\">August 2026</p></div><div class=\"la-abstract\"><p class=\"la-abstract-label\">Abstract</p><p class=\"la-abstract-body\">We propose a lightweight framework for evaluating whether a chart communicates its intended comparison without requiring a legend lookup. Across three studies, charts scored under the framework predicted reader accuracy better than chart type alone, suggesting legibility is a property of encoding choices rather than chart category.</p></div><h2 class=\"la-sec\">1. Introduction</h2><p class=\"la-p\">Two charts of the same nominal type can differ enormously in how quickly a reader extracts the intended comparison. A bar chart sorted by value reads in seconds; the same data unsorted can take considerably longer, even though both are, by any standard taxonomy, &ldquo;bar charts.&rdquo;</p><p class=\"la-p\">This suggests that legibility is not well predicted by chart type alone, and that a more granular framework is needed &mdash; one that scores the specific encoding choices made within a chart, independent of its category.</p><h2 class=\"la-sec\">2. Method</h2><p class=\"la-p\">We recruited participants across three studies and measured time-to-correct-answer against a rubric of six encoding properties: sort order, redundant encoding, label placement, color count, baseline alignment, and annotation density.</p><h3 class=\"la-subsec\">2.1 Participants</h3><p class=\"la-p\">Participants were shown one chart at a time and asked a single comparison question per chart, with response time and accuracy both recorded.</p><h2 class=\"la-sec\">3. Results</h2><p class=\"la-p\">The rubric score correlated with response accuracy more strongly than chart-type category did in every study<span class=\"la-fn-ref\">1</span>, with the largest gains coming from sort order and redundant encoding.</p><p class=\"la-footnote\"><span class=\"la-fn-num\">1</span>Full results tables are available in the supplementary materials.</p><h2 class=\"la-sec\">4. Conclusion</h2><p class=\"la-p\">Treating legibility as a function of encoding choices, rather than chart type, gives design teams a more actionable lever: the same chart type can be scored, and improved, without switching to a different visualization altogether.</p><h2 class=\"la-sec\">References</h2><p class=\"la-ref\">[1] Cleveland, W. &amp; McGill, R. (1984). Graphical perception: Theory, experimentation, and application. <em>JASA</em>.</p><p class=\"la-ref\">[2] Tufte, E. (1983). <em>The Visual Display of Quantitative Information</em>.</p></div>",
      "background": "#FFFFFF",
      "pagination": {
        "margins": {
          "top": 90,
          "right": 96,
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
    "head": "<style>@font-face{font-family:'Source Serif 4';font-weight:200 900;font-style:normal;src:url('/api/assets/{{ASSET_ID}}/SourceSerif4-Variable.woff2') format('woff2');}@font-face{font-family:'JetBrains Mono';font-weight:400;src:url('/api/assets/{{ASSET_ID}}/JetBrainsMono-Regular.woff2') format('woff2');}*{box-sizing:border-box;}.la-doc{font-family:'Source Serif 4',Georgia,serif;color:#1A1A1A;font-size:11pt;line-height:1.5;max-width:576px;margin:0 auto;}.la-titleblock{text-align:center;margin-bottom:28px;}.la-title{font-size:26px;font-weight:600;line-height:1.25;margin:0 0 14px;}.la-authors{font-size:14px;margin:0 0 4px;}.la-affil{font-size:12px;font-style:italic;color:#555;margin:0 0 4px;}.la-date{font-size:12px;color:#555;}.la-abstract{border-top:1px solid #000;border-bottom:1px solid #000;padding:16px 0;margin-bottom:28px;}.la-abstract-label{font-weight:600;font-style:italic;font-size:13px;margin:0 0 6px;}.la-abstract-body{font-size:11pt;margin:0;}.la-sec{font-size:15px;font-weight:600;margin:26px 0 10px;}.la-subsec{font-size:13px;font-weight:600;font-style:italic;margin:18px 0 8px;}.la-p{margin:0 0 12px;text-align:justify;}.la-fn-ref{font-family:'JetBrains Mono',monospace;font-size:9px;vertical-align:super;color:#555;}.la-footnote{font-size:9pt;color:#555;border-top:1px solid #ccc;padding-top:6px;margin:4px 0 12px;}.la-fn-num{font-family:'JetBrains Mono',monospace;margin-right:4px;}.la-ref{font-size:10pt;margin:0 0 6px;}</style>"
  }
}
