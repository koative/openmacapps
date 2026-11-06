---
name: "Refill"
summary: "Menu bar tracker for AI subscription limits that announces when a window resets, through notch, notification or webhooks."
category: "Utilities"
tags:
  - usage-tracking
  - menu-bar
  - monitoring
  - coding-agents
repository: "https://github.com/StepanBlaha/Refill"
website: "https://stepanblaha.github.io/Refill/"
license: "MIT"
licenseUrl: "https://github.com/StepanBlaha/Refill/blob/main/LICENSE"
download: "https://github.com/StepanBlaha/Refill/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/StepanBlaha/Refill"
  - "https://github.com/StepanBlaha/Refill/blob/main/LICENSE"
  - "https://github.com/StepanBlaha/Refill/releases"
  - "https://stepanblaha.github.io/Refill/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/StepanBlaha/Refill/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Stepan Blaha"
    license: "MIT for the code; the app icon and Drip mascot are not covered by the MIT license; trademarks retained"
---

Refill sits in the menu bar and shows how much of each AI usage limit you have left. It reads the logins that already exist on your Mac for tools such as Claude Code, Codex CLI, GitHub Copilot, Cursor and Gemini CLI. When a window refills, it signals you through the notch, a notification, a sound, a shell hook, or integrations such as ntfy, Slack or Home Assistant. It is for people who run several AI subscriptions and want to know when capacity comes back. Usage history and settings stay in a folder in your home directory, with no account and no telemetry.

It requires macOS 14 or later. The release is not notarized: the disk image needs System Settings > Privacy & Security > Open Anyway, while the Homebrew cask and the one-line installer clear the quarantine flag. The usage data comes from provider endpoints that the README describes as undocumented, so they may change or be restricted. Refill is an independent app, and its name, mascot and icon are not licensed under the MIT code license.
