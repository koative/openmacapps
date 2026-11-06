---
name: "Quosparr"
summary: "Menu bar tracker for Codex, Claude Code and Grok quotas, reset times, API-equivalent cost and account switching."
category: "AI"
tags:
  - usage-tracking
  - coding-agents
  - menu-bar
  - cross-platform
repository: "https://github.com/Licoy/Quosparr"
website: "https://quosparr.com"
license: "AGPL-3.0"
licenseUrl: "https://github.com/Licoy/Quosparr/blob/main/LICENSE"
download: "https://github.com/Licoy/Quosparr/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Licoy/Quosparr"
  - "https://github.com/Licoy/Quosparr/blob/main/LICENSE"
  - "https://github.com/Licoy/Quosparr/releases"
  - "https://quosparr.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Licoy/Quosparr/main/Resources/AppIcon.png"
    credit: "Quosparr contributors"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

Quosparr sits in the menu bar and shows how much subscription quota remains for Codex, Claude Code and Grok, including the 5-hour and weekly windows, reset times and reset credits. It estimates API-equivalent cost and token use from local session logs, lets you keep several accounts per provider and switch between them, and shows a per-provider view of skills, MCP server entries and recent sessions. It suits people who run more than one coding agent and want their limits in one place.

The macOS build needs macOS 12 or later, and desktop widgets need macOS 14. The Apple silicon DMG is signed with a Developer ID certificate and notarized. The same codebase also ships for Windows and Linux. Some Claude usage figures come from an undocumented endpoint rather than a public billing API, and binding a Claude Desktop profile is still awaiting real-device acceptance on each platform. Quosparr is not on Homebrew yet.
