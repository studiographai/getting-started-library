---
entity_type: app
entity_id: freelancer-landing-app
created_at: '2026-08-14T23:12:52.686Z'
updated_at: '2026-08-17T01:42:17.922Z'
created_by: bella-corbin
updated_by: christian-marc-schmidt
date: '2026-08-14'
name: Freelancer Landing (Responsive App)
status: draft
---
{
  "artifactId": "freelancer-landing-app",
  "title": "Freelancer Landing (Responsive App)",
  "frames": [
    {
      "id": "app",
      "title": "Freelancer Landing — Responsive",
      "geometry": {
        "width": "fill",
        "height": "fill"
      },
      "content": "<div class=\"fl\"><nav class=\"fl-nav\"><div class=\"fl-logo\">Jordan Ellis</div><div class=\"fl-links\"><a>About</a><a>Skills</a><a>Work</a><a>Contact</a></div></nav><section class=\"fl-hero\"><div class=\"fl-avatar\">JE</div><h1>Jordan Ellis</h1><p class=\"fl-role\">Product Designer &amp; Frontend Developer</p><p class=\"fl-bio\">I help small teams design and build products people actually enjoy using, from first sketch to shipped code.</p><div class=\"fl-social\">● ● ● ●</div></section><section class=\"fl-skills\"><div class=\"fl-grid-3\"><div class=\"fl-skill\"><div class=\"fl-icon\">◆</div><h3>Design</h3><p>Interface and interaction design for web and mobile.</p></div><div class=\"fl-skill\"><div class=\"fl-icon\">◇</div><h3>Code</h3><p>React, TypeScript, and modern CSS, end to end.</p></div><div class=\"fl-skill\"><div class=\"fl-icon\">◈</div><h3>Strategy</h3><p>Turning a rough idea into a shippable v1.</p></div></div></section><section class=\"fl-work\"><h2>Selected Work</h2><div class=\"fl-grid-4\"><div class=\"fl-tile\" style=\"background:#DCEEE4;\"><div class=\"fl-tile-overlay\"><span>Habit Tracker App</span></div></div><div class=\"fl-tile\" style=\"background:#F6DEDE;\"><div class=\"fl-tile-overlay\"><span>Studio Website</span></div></div><div class=\"fl-tile\" style=\"background:#DCE8F6;\"><div class=\"fl-tile-overlay\"><span>Dashboard Redesign</span></div></div><div class=\"fl-tile\" style=\"background:#F6ECDC;\"><div class=\"fl-tile-overlay\"><span>Brand Identity</span></div></div></div></section><section class=\"fl-contact\"><h2>Let’s work together</h2><p>Have a project in mind? I’d love to hear about it.</p><a class=\"fl-cta\">Say Hello</a></section><footer class=\"fl-footer\"><p>© 2026 Jordan Ellis</p></footer></div>",
      "background": "#FFFFFF"
    }
  ],
  "shared": {
    "head": "<style>@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600&display=block');*{box-sizing:border-box;margin:0;padding:0;}html,body{width:100%;min-height:100%;}:root{--fl-teal:#17A398;--fl-coral:#FF6B57;--fl-ink:#24292E;--fl-muted:#6B7280;--fl-sans:'Hanken Grotesk',system-ui,sans-serif;}.fl{width:100%;min-height:100%;background:#fff;font-family:var(--fl-sans);color:var(--fl-ink);overflow-x:hidden;}.fl-nav{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:14px;padding:20px clamp(20px,5vw,80px);}.fl-logo{font-weight:600;font-size:18px;}.fl-links{display:flex;flex-wrap:wrap;gap:12px 28px;justify-content:center;}.fl-links a{color:var(--fl-ink);text-decoration:none;font-size:14px;opacity:0.75;}.fl-hero{text-align:center;padding:clamp(40px,8vw,60px) clamp(20px,6vw,80px) clamp(56px,10vw,100px);}.fl-avatar{width:clamp(90px,14vw,120px);height:clamp(90px,14vw,120px);border-radius:50%;background:var(--fl-teal);color:#fff;display:flex;align-items:center;justify-content:center;margin:0 auto 28px;font-weight:600;font-size:clamp(28px,4vw,36px);}.fl-hero h1{font-weight:600;font-size:clamp(28px,5vw,40px);margin-bottom:8px;}.fl-role{font-size:clamp(15px,2.4vw,18px);color:var(--fl-teal);font-weight:600;margin-bottom:20px;}.fl-bio{max-width:560px;margin:0 auto 28px;font-size:16px;line-height:1.6;color:var(--fl-muted);}.fl-social{font-size:18px;letter-spacing:12px;color:var(--fl-teal);}.fl-skills{background:rgba(23,163,152,0.08);padding:clamp(48px,9vw,80px) clamp(20px,6vw,80px);}.fl-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;text-align:center;}.fl-icon{font-size:26px;color:var(--fl-teal);margin-bottom:14px;}.fl-skill h3{font-weight:600;font-size:19px;margin-bottom:8px;}.fl-skill p{font-size:14px;color:var(--fl-muted);line-height:1.5;}.fl-work{padding:clamp(56px,10vw,96px) clamp(20px,6vw,80px);text-align:center;}.fl-work h2{font-weight:600;font-size:clamp(22px,4vw,30px);margin-bottom:clamp(28px,6vw,48px);}.fl-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}.fl-tile{position:relative;height:220px;border-radius:8px;overflow:hidden;}.fl-tile-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(255,107,87,0.82);color:#fff;font-weight:600;font-size:15px;text-align:center;padding:16px;}.fl-contact{background:var(--fl-teal);color:#fff;text-align:center;padding:clamp(48px,9vw,80px) clamp(20px,6vw,80px);}.fl-contact h2{font-weight:600;font-size:clamp(22px,4vw,30px);margin-bottom:12px;}.fl-contact p{font-size:16px;opacity:0.9;margin-bottom:28px;}.fl-cta{display:inline-block;background:#fff;color:var(--fl-teal);padding:14px 32px;border-radius:999px;font-weight:600;text-decoration:none;}.fl-footer{text-align:center;padding:32px;font-size:13px;color:var(--fl-muted);}@media (max-width:900px){.fl-grid-4{grid-template-columns:repeat(2,1fr);}}@media (max-width:700px){.fl-grid-3{grid-template-columns:1fr;}}@media (max-width:520px){.fl-grid-4{grid-template-columns:1fr;}}</style>"
  }
}
