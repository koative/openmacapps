---
name: "CCSwitcher"
summary: "Menu bar switcher for several Claude Code accounts that keeps a backup of each login."
category: "Developer tools"
tags:
  - coding-agents
  - menu-bar
  - usage-tracking
  - homebrew
repository: "https://github.com/XueshiQiao/CCSwitcher"
website: "https://github.com/XueshiQiao/CCSwitcher"
license: "MIT"
licenseUrl: "https://github.com/XueshiQiao/CCSwitcher/blob/main/LICENSE"
download: "https://github.com/XueshiQiao/CCSwitcher/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/XueshiQiao/CCSwitcher"
  - "https://github.com/XueshiQiao/CCSwitcher/blob/main/LICENSE"
  - "https://github.com/XueshiQiao/CCSwitcher/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/XueshiQiao/CCSwitcher/releases/download/v2.1.4/CCSwitcher.dmg"
    credit: "XueshiQiao"
    license: "MIT; upstream app icon, trademarks retained"
---

CCSwitcher is a menu bar app for developers who use several Claude Code accounts. It keeps a backup of each account's login and swaps the Claude Code keychain entry and the account block in `~/.claude.json` in one step, so you can switch back without signing in again. It also shows usage limits, daily cost and activity in the menu bar and in desktop widgets. When a token expires, it asks the official Claude CLI to refresh it.

The app needs macOS 14 or later. The DMG is signed with a Developer ID and notarized, and it updates itself with Sparkle. By default it sends one anonymous launch event to Aptabase; the switch is in Settings → About. The first time it reads the Claude Code keychain entry, macOS asks for permission, and choosing Always Allow avoids repeat prompts.
