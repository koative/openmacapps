---
name: "Pi Stats"
summary: "Menu bar dashboard for Pi coding agent usage: spend, models, languages, projects and tokens from local session logs."
category: "Developer tools"
tags:
  - menu-bar
  - coding-agents
  - usage-tracking
  - monitoring
repository: "https://github.com/phun333/pi-infobar"
website: "https://github.com/phun333/pi-infobar"
license: "MIT"
licenseUrl: "https://github.com/phun333/pi-infobar/blob/main/LICENSE"
download: "https://github.com/phun333/pi-infobar/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/phun333/pi-infobar"
  - "https://github.com/phun333/pi-infobar/blob/main/LICENSE"
  - "https://github.com/phun333/pi-infobar/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/phun333/pi-infobar/main/macos/Resources/AppIcon.icns"
    credit: "phun333"
    license: "MIT; upstream app icon, trademarks retained"
---

Pi Stats shows what your Pi coding agent sessions have cost and where the tokens went. It reads local session logs and breaks usage down by model, programming language and project, with a running spend total. The same repository includes a Windows system tray version. It suits people who run Pi agents and want their usage numbers on the Mac.

It requires macOS 14 or later and is a universal build for Apple silicon and Intel. The app is unsigned and not notarized: macOS may refuse to open it as damaged, and the README suggests removing the quarantine flag with `xattr` or allowing the app in System Settings. Data stays local by default; SSH sync from a remote Pi server is optional.
