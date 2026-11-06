---
name: "Pinpoint"
summary: "Menu bar screenshot tool that adds numbered markers and copies an annotated image with a prompt for AI agents."
category: "Productivity"
tags:
  - screenshots
  - annotation
  - coding-agents
  - menu-bar
repository: "https://github.com/croustibat/Pinpoint"
website: "https://pinpoint-ashy.vercel.app"
license: "MIT"
licenseUrl: "https://github.com/croustibat/Pinpoint/blob/main/LICENSE"
download: "https://github.com/croustibat/Pinpoint/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/croustibat/Pinpoint"
  - "https://github.com/croustibat/Pinpoint/blob/main/LICENSE"
  - "https://github.com/croustibat/Pinpoint/releases/tag/v0.7.3"
  - "https://pinpoint-ashy.vercel.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/croustibat/Pinpoint/main/Pinpoint/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "Baptiste Bouillot"
    license: "MIT; upstream app icon, trademarks retained"
---

Pinpoint is a menu bar screenshot tool for explaining interface problems to an AI agent. Capture a region or a window, drop numbered markers, arrows and rectangles on it, and copy the annotated PNG together with text or JSON that describes each marker. Markers can also carry the accessibility label under them and any text that Pinpoint reads there with on-device OCR, and areas can be redacted before you share. It suits developers who use Claude Code, Codex or similar tools.

Pinpoint needs macOS 15 or later and runs on Apple silicon and Intel; the DMG is a universal build. It is signed with a Developer ID and notarized, so it opens without a workaround. Screen Recording permission is required to take captures, while Accessibility is optional and only adds interface details to markers. According to the README, captures, OCR and accessibility reads stay on the Mac.
