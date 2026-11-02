---
name: "Token Monitor"
summary: "Tracks token usage, costs and plan limits across dozens of AI coding tools in a menu bar, notch and widget dashboard."
category: "AI"
tags:
  - coding-agents
  - usage-tracking
  - menu-bar
  - notch
  - widgets
  - cross-platform
repository: https://github.com/Javis603/token-monitor
website: https://javis-ai.com/token-monitor/
license: "MIT"
licenseUrl: https://github.com/Javis603/token-monitor/blob/main/LICENSE
download: https://github.com/Javis603/token-monitor/releases
homebrew: "token-monitor"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/Javis603/token-monitor
  - https://github.com/Javis603/token-monitor/blob/main/LICENSE
  - https://github.com/Javis603/token-monitor/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Javis603/token-monitor/main/assets/icon.png
    credit: "Javis"
    license: "MIT; upstream project asset, trademarks retained"
---

Token Monitor reads the local logs and databases of AI coding tools such as Claude Code, Codex, Cursor, GitHub Copilot and OpenCode, and shows how many tokens you have used, what that would cost, and how close each account is to its session, weekly or credit limits. Usage can be broken down by tool, model, project, session or device, with a year of history and per-prompt detail for supported tools.

On the Mac it shows live figures in the menu bar, in a panel beside the notch, in an edge dock and in desktop widgets on macOS 14 or later; the app itself needs macOS 13. Several machines can share totals through a hub you host yourself or through iCloud Drive; only summaries are synced, and prompts and code stay local. For some providers, limits are fetched with your existing sign-in, a session cookie or an API key, in a few cases through undocumented endpoints.

The Mac DMGs for Apple silicon and Intel are signed and notarized. The project is young and releases very frequently.
