---
name: "Claude God"
summary: "A menu bar monitor for Claude plan quotas, Claude Code costs, burn rate and per-project usage."
category: "AI"
tags:
  - menu-bar
  - coding-agents
  - usage-tracking
  - monitoring
repository: https://github.com/Lcharvol/Claude-God
website: https://claudegod.app
license: "MIT"
licenseUrl: https://github.com/Lcharvol/Claude-God/blob/main/LICENSE
download: https://github.com/Lcharvol/Claude-God/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/Lcharvol/Claude-God
  - https://github.com/Lcharvol/Claude-God/blob/main/LICENSE
  - https://github.com/Lcharvol/Claude-God/releases
  - https://raw.githubusercontent.com/Lcharvol/Claude-God/main/README.md
  - https://github.com/Lcharvol/Claude-God/releases/tag/v2.27.0
  - https://claudegod.app
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Lcharvol/Claude-God/main/Sources/Assets.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: "Lucas Charvolin"
    license: "MIT; upstream project asset, trademarks retained"
---

Claude God shows how much of your Claude plan you have used, from the menu bar. It reads the login that `claude login` already stored, so you need no API key, and draws your session, weekly, Sonnet and Opus quotas as bars or rings, each with a countdown to its reset. A burn-rate estimate predicts when you will hit the limit at your current pace.

The menu bar icon and its text turn green, orange or red according to the tightest quota, and Option-Command-C opens the popover. Notifications can fire at a usage threshold you set, or when a quota resets.

For Claude Code it also parses the session files in `~/.claude/projects` and works out costs from Anthropic's published prices:

- daily, weekly and monthly costs, split by model and by project
- a session timeline with each session's project, duration, cost and model
- a usage trend chart over 7, 14 or 30 days, and a daily budget target
- CSV export and a one-click copy of your stats

Other tabs browse and install Claude Code plugins, and an optional helper prints your usage inside the Claude Code status line. The developer says credentials stay on the Mac and that there is no telemetry.

Claude God needs macOS 13. The DMG holds a Universal app for Apple silicon and Intel. That build is not signed with a Developer ID, so the README has you clear its quarantine flag with `xattr -cr` before the first launch. Homebrew users can install it from the developer's tap.
