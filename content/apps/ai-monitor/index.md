---
name: "AI Monitor"
summary: "Mac companion for a USB-connected ESP32 desk display that shows AI usage limits read through the CodexBar CLI."
category: "Utilities"
tags:
  - usage-tracking
  - hardware
  - monitoring
  - menu-bar
repository: "https://github.com/tobymarks/esp32-ai-monitor"
website: "https://tobymarks.github.io/esp32-ai-monitor/"
license: "MIT"
licenseUrl: "https://github.com/tobymarks/esp32-ai-monitor/blob/main/LICENSE"
download: "https://github.com/tobymarks/esp32-ai-monitor/releases/download/app-v1.32.0/AIMonitor.dmg"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/tobymarks/esp32-ai-monitor"
  - "https://github.com/tobymarks/esp32-ai-monitor/blob/main/LICENSE"
  - "https://github.com/tobymarks/esp32-ai-monitor/releases"
  - "https://tobymarks.github.io/esp32-ai-monitor/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/tobymarks/esp32-ai-monitor/releases/download/app-v1.32.0/AIMonitor.dmg
    credit: AI Monitor contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

AI Monitor is the Mac side of a desk display. It asks the local CodexBar CLI for usage limits from providers such as Claude, ChatGPT, Gemini, Copilot and Cursor, then sends a compact frame over USB to a Cheap Yellow Display or a Guition ESP32-S3 board, which draws the dashboard. It is for people who want their limits on a second screen instead of a browser tab. The app does not talk to any AI service directly; CodexBar does.

It is not useful on its own. You need an ESP32 display board, CodexBar installed with its providers set up, and a USB data cable. The Mac app is a universal build for macOS 14 or later. The newest GitHub release is a Windows build, so use the `app-v` release for the Mac DMG. The README marks the display plugin and Claude Code window features as in development.
