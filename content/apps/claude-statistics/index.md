---
name: "Claude Statistics"
summary: "Tracks Claude Code, Codex and Gemini CLI sessions, quota use and costs from the menu bar and a notch overlay."
category: "Developer tools"
tags:
  - menu-bar
  - coding-agents
  - usage-tracking
  - notch
repository: https://github.com/sj719045032/claude-statistics
website: https://claudestatistics.vercel.app/
license: "MIT"
licenseUrl: https://github.com/sj719045032/claude-statistics/blob/main/LICENSE
download: https://github.com/sj719045032/claude-statistics/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/sj719045032/claude-statistics
  - https://github.com/sj719045032/claude-statistics/blob/main/LICENSE
  - https://github.com/sj719045032/claude-statistics/releases
  - https://claudestatistics.vercel.app/
  - https://raw.githubusercontent.com/sj719045032/claude-statistics/main/README.md
  - https://github.com/sj719045032/claude-statistics/releases/tag/v3.6.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/sj719045032/claude-statistics/main/ClaudeStatistics/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "tinystone (sj719045032)"
    license: "MIT repository asset; trademarks retained"
---

Claude Statistics reads the session logs that Claude Code, OpenAI's Codex CLI and Gemini CLI write to disk and turns them into searchable sessions, cost charts and quota readings. The menu bar holds one cell per enabled provider, showing its current quota use in orange at 50 percent and red at 80.

Click the menu bar item and a floating panel opens:

- Sessions, grouped by project, with tokens, cost, context use and model for each, plus actions to resume, delete or copy a session's path.
- A transcript viewer that searches messages and tool calls.
- Statistics with daily, weekly and monthly cost charts and a breakdown of cache tokens.
- Usage, with each provider's quota windows, reset countdowns and trend charts.

On a MacBook with a notch, a panel docked to the notch lists running sessions and shows Claude Code permission requests as Allow and Deny cards. Press Return on a card to jump to the terminal tab the session runs in. Macs without a notch get a pill at the top of the screen.

Claude Statistics needs macOS 14. The DMG holds a Universal app for Apple silicon and Intel. It is not notarized, so you may need to clear its quarantine flag or Control-click Open on first launch. Updates arrive through Sparkle.

Claude is built in. Codex, Gemini and other providers can be delivered as plugins, and a built-in catalog also offers third-party subscription endpoints such as GLM Coding Plan. The app includes the TelemetryDeck SDK, which the developer describes as anonymous usage analytics.
