---
name: "Mimir"
summary: "Menu bar tracker for Claude, Codex and Antigravity usage limits, showing session and weekly quotas with reset countdowns."
category: "AI"
tags:
  - usage-tracking
  - menu-bar
  - coding-agents
repository: "https://github.com/erayendes/mimir"
website: "https://milowda.com/apps/mimir"
license: "MIT"
licenseUrl: "https://github.com/erayendes/mimir/blob/main/LICENSE"
download: "https://github.com/erayendes/mimir/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/erayendes/mimir"
  - "https://github.com/erayendes/mimir/blob/main/LICENSE"
  - "https://github.com/erayendes/mimir/releases/latest"
  - "https://github.com/erayendes/mimir/releases/tag/v3.1"
  - "https://milowda.com/apps/mimir"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/erayendes/mimir/main/Sources/Mimir/Resources/AppIcon.png"
    credit: "Eray Endes"
    license: "MIT; upstream app icon, trademarks retained"
---

Mimir sits in the menu bar and shows how much of your usage limit remains for Claude, Codex and Antigravity. Each service has a card with the five-hour session quota, the weekly quota, per-model rows where a service reports them, reset countdowns and green, amber or red status colours. There are also desktop widgets. It reads the local data those tools already keep, such as the Claude desktop session or Claude Code's OAuth token, and sends requests only to each provider's own endpoint. The project has no backend of its own.

It needs macOS 14 or later on Apple silicon; the release app is an arm64-only build. Sign in to each AI tool at least once so its local data exists. Reading Claude Code's token from the Keychain can prompt you, and a prompt-free tracking option avoids that. The release is notarized, so the first launch needs no workaround. Updates arrive through Sparkle, and an optional beta channel is available.
