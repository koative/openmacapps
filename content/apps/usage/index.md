---
name: "usage"
summary: "Shows Claude Code, Codex, Antigravity, Grok CLI and Muse Code quota limits and reset countdowns in the menu bar."
category: "Developer tools"
tags:
  - menu-bar
  - monitoring
  - language-models
  - cross-platform
repository: https://github.com/aqua5230/usage
website: https://aqua5230.github.io/usage/
license: "AGPL-3.0"
licenseUrl: https://github.com/aqua5230/usage/blob/main/LICENSE
download: https://github.com/aqua5230/usage/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/aqua5230/usage
  - https://github.com/aqua5230/usage/blob/main/LICENSE
  - https://github.com/aqua5230/usage/releases
  - https://github.com/aqua5230/usage/blob/main/README.md
  - https://aqua5230.github.io/usage/
  - https://github.com/aqua5230/usage/releases/tag/v0.34.15
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/aqua5230/usage/main/assets/usage_icon.png
    credit: "lollapalooza (aqua5230)"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

usage puts your AI coding quota in the menu bar: how much of each limit is gone and how long until it resets. A figure turns red as it nears its limit. It covers five-hour and weekly limits for Claude Code, Codex, Antigravity and Muse Code, plus Grok CLI's weekly credit. Clicking the item opens a per-project breakdown.

Most numbers come from local logs, which give token counts and cost for Codex, Claude Code, Muse Code and Grok CLI. For Claude Code you click Set Up Status Line to install a hook, then restart Claude Code. Antigravity quota comes from its own CLI, or from Google's quota endpoint using the sign-in that CLI stored. Muse quota costs one small model call.

The Claude Code status line also warns as the context window fills. Further helpers stay off until you enable them:

- Token Saver gets Claude Code and Codex to reply more briefly, leaving code and error messages untouched.
- Progress Concierge hands a new session your last request, uncommitted changes and open todos.
- A side pane lists quotas, other conversations and background jobs.
- Quota-Aware Mode has Claude say what is left before a large task once a quota runs low.

Reports chart tokens and cost by day, week and project, and export to HTML, CSV or PNG offline. The command `usage status --json` hands the quota figures to Starship, tmux or your own scripts.

The app needs macOS 12 or later. The release ZIP holds a Universal app with only an ad hoc signature, so macOS blocks the first launch until you allow it in Privacy & Security settings. A Windows tray build is also published.

Other network traffic covers outage reports from the Claude and Codex status pages, published model prices for cost estimates, and update checks on GitHub.
