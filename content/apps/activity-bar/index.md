---
name: "Activity Bar"
summary: "Menu bar counter for keystrokes, clicks, scrolling and talk time, plus time spent in AI coding tools, kept on your Mac."
category: "Productivity"
tags:
  - menu-bar
  - monitoring
  - coding-agents
  - keyboard
repository: "https://github.com/SuveenE/activity-bar"
website: "https://github.com/SuveenE/activity-bar"
license: "MIT"
licenseUrl: "https://github.com/SuveenE/activity-bar/blob/main/LICENSE"
download: "https://github.com/SuveenE/activity-bar/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/SuveenE/activity-bar"
  - "https://github.com/SuveenE/activity-bar/blob/main/LICENSE"
  - "https://github.com/SuveenE/activity-bar/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/SuveenE/activity-bar/main/MacInputStats/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Suveen Ellawela"
    license: "MIT; upstream app icon, trademarks retained"
---

Activity Bar sits in the menu bar and tallies your keystrokes, clicks, scrolling, screen time per app and talk time from microphone activity. A range picker covers the last day, week, two weeks or month, and an all-time panel adds top apps and category totals. For Claude Code, Cursor and Codex it also measures how long those tools spend working, using hooks the app registers when you install it. It suits people who want to review their own work habits.

It needs macOS 14.0 or later and runs on Apple silicon and Intel. The release is notarized, so it opens normally after download, but the first run asks for Input Monitoring permission. The README says data is stored only in the app's preferences on your Mac and that no telemetry is sent. Coding-tool stats only appear for tools that are installed and have their hooks active.
