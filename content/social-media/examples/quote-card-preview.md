---
entity_type: artboard
entity_id: quote-card-preview
created_at: '2026-08-16T23:21:26.631Z'
updated_at: '2026-08-16T23:22:18.222Z'
created_by: christian-marc-schmidt
updated_by: christian-marc-schmidt
date: '2026-08-16'
name: Quote Card (Preview)
status: draft
---
{
  "artifactId": "quote-card-preview",
  "title": "Quote Card (Preview)",
  "frames": [
    {
      "id": "square",
      "title": "Square",
      "geometry": {
        "width": 1080,
        "height": 1080
      },
      "content": "<div class=\"qc\">\n  <div class=\"qc-body\">\n    <div class=\"qc-mark\">&ldquo;</div>\n    <p class=\"qc-quote\">We stopped asking what the numbers were and started asking what we would do differently if they changed.</p>\n  </div>\n  <div class=\"qc-attr\">\n    <div class=\"qc-name\">Dana Whitfield</div>\n    <div class=\"qc-role\">VP Operations &middot; Halcyon Freight</div>\n  </div>\n</div>",
      "background": "#f5f5f5"
    }
  ],
  "shared": {
    "head": "<style>\n:root{\n  --qc-paper:#f5f5f5; --qc-ink:#2d3142; --qc-muted:#4f5d75;\n  --qc-accent:#eb6c36; --qc-hairline:#d5d8e0;\n  --qc-serif:'Source Serif 4',Georgia,serif;\n  --qc-sans:'DM Sans',system-ui,sans-serif;\n  --qc-mono:'JetBrains Mono',ui-monospace,monospace;\n}\n*{box-sizing:border-box;margin:0;padding:0;}\n.qc{width:1080px;height:1080px;background:var(--qc-paper);color:var(--qc-ink);\n  font-family:var(--qc-sans);padding:96px 92px;display:flex;flex-direction:column;}\n.qc-mark{font-family:var(--qc-serif);font-size:150px;font-weight:400;\n  line-height:.78;height:92px;margin-bottom:8px;color:var(--qc-accent);}\n.qc-body{flex:1;display:flex;flex-direction:column;justify-content:center;}\n.qc-quote{font-family:var(--qc-serif);font-size:54px;font-weight:400;\n  line-height:1.3;letter-spacing:-.02em;max-width:30ch;}\n.qc-attr{border-top:1px solid var(--qc-hairline);padding-top:28px;}\n.qc-name{font-size:26px;font-weight:500;line-height:1.3;}\n.qc-role{font-family:var(--qc-mono);font-size:15px;letter-spacing:.16em;\n  text-transform:uppercase;color:var(--qc-muted);margin-top:12px;}\n</style>"
  }
}
