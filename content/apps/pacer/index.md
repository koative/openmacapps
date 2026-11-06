---
name: "Pacer"
summary: "Menu bar rings comparing weekly Claude and Codex limit use with your plan, warning when you will run out early."
category: "Utilities"
tags:
  - usage-tracking
  - coding-agents
  - menu-bar
  - monitoring
repository: "https://github.com/HMDRAMS-DEV/pacer"
website: "https://pacer.ramihmd.com"
license: "MIT"
licenseUrl: "https://github.com/HMDRAMS-DEV/pacer/blob/main/LICENSE"
download: "https://github.com/HMDRAMS-DEV/pacer/releases/latest/download/Pacer.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/HMDRAMS-DEV/pacer"
  - "https://github.com/HMDRAMS-DEV/pacer/blob/main/LICENSE"
  - "https://github.com/HMDRAMS-DEV/pacer/releases"
  - "https://pacer.ramihmd.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/HMDRAMS-DEV/pacer/main/Pacer/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Rami Alhamad"
    license: "MIT; upstream app icon, trademarks retained"
---

Pacer shows how much of each weekly limit you have used for Claude and Codex. You give it a finish day, a target percentage, how the budget should be spread, and your working hours. The menu bar shows one ring per tool, with a notch where your plan says you should be; a ring turns orange when that tool will run out before the finish day. The popover shows what you can still use today and a week chart of planned against actual use. Nudges to ease off or lean in arrive at most once per tool per day, during working hours. It is for people who want to pace a paid Claude or Codex plan across the week.

Requires macOS 15 or later. The app reads the sign-in that Claude Code keeps in your Keychain and the one Codex stores in `~/.codex/auth.json`, and it calls usage endpoints that the README describes as undocumented and liable to change. If a sign-in expires, run `claude` or `codex` once to refresh it. Pacer is not sandboxed, so it is not sold through the Mac App Store, and it has no account, server or analytics. The disk image is Developer ID signed and notarized by Apple.
