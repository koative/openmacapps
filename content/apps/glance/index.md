---
name: "Glance"
summary: "Notch panel with music, weather, calendar, a focus timer, clipboard history and a file shelf, opened on hover."
category: "Productivity"
tags:
  - notch
  - menu-bar
  - clipboard
  - widgets
repository: "https://github.com/glanceformac/glance"
website: "https://glanceformac.vercel.app"
license: "MIT"
licenseUrl: "https://github.com/glanceformac/glance/blob/main/LICENSE"
download: "https://github.com/glanceformac/glance/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/glanceformac/glance"
  - "https://github.com/glanceformac/glance/blob/main/LICENSE"
  - "https://github.com/glanceformac/glance/releases/tag/v1.1.0"
  - "https://glanceformac.vercel.app"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/glanceformac/glance/releases/download/v1.1.0/Glance.zip"
    credit: "Glance for Mac contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Glance adds a compact panel to the notch at the top of the screen. Hover over it to see what is playing, the weather, your next calendar event, a focus timer, recent clipboard items and a shelf where you can park files until you need them. It also shows Claude Code approval requests. It suits people who want quick status without opening another window, and it can float as a pill on a Mac without a notch.

Glance needs macOS 14 or later, and the release zip is a universal build. It is signed ad hoc and is not notarized by Apple, so the first launch has to be allowed: right-click Glance.app and choose Open, as the README describes. Some parts need extra setup. Cinema mode uses a small Chrome extension, Claude Code approvals need hooks that you add by hand because Glance never edits Claude settings, and football scores come from an unofficial ESPN feed. The Touch Bar and Now Playing features use private macOS frameworks that a system update could break.
