---
name: "CodexIsland"
summary: "Shows remaining usage for AI coding subscriptions in a live overlay around the MacBook notch."
category: "Developer tools"
tags: ["notch", "menu-bar", "usage", "agents"]
repository: "https://github.com/ericjypark/codex-island"
website: "https://codexisland.com"
license: "MIT"
licenseUrl: "https://github.com/ericjypark/codex-island/blob/main/LICENSE"
download: "https://github.com/ericjypark/codex-island/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/ericjypark/codex-island", "https://github.com/ericjypark/codex-island/blob/main/LICENSE", "https://github.com/ericjypark/codex-island/blob/main/README.md", "https://github.com/ericjypark/codex-island/releases/tag/v0.4.3", "https://codexisland.com"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/ericjypark/codex-island/main/Assets/codexisland-app-icon-light.png", "credit": "Eric Park and CodexIsland contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

CodexIsland shows how much of your AI coding subscription is left, in a black pill over the MacBook notch. Hover over it to see the 5-hour percentage and reset time, and click to open a panel with every quota window the provider reports. Codex, Claude Code, Grok, Muse Code and Antigravity are supported, and up to two can share the island.

- The expanded panel swipes between Usage, Cost and Overview, the last a year-long activity calendar.
- Cost estimates spend and token counts by reading the session logs that Claude Code, Codex CLI and OpenCode leave on the Mac.
- Optional warning thresholds tint the island as a 5-hour window nears its limit.
- A share card turns a chosen period into a PNG with your estimated API value or token count.

It asks for no passwords or API keys. It reads the credentials the providers' command-line tools have already stored, such as `~/.codex/auth.json` or the Claude Code Keychain item, and queries each provider's own service. For Claude you have to log in with `claude` in Terminal first, because Claude Desktop alone does not create those credentials. Cost figures are estimates, not your bill. Polling runs every 5, 15 or 30 minutes. The developer says the app has no telemetry or crash reporting.

Version 0.4.3 is a DMG with a Universal app that needs macOS 13 or later. It is ad-hoc signed and not notarized, so you allow it under Privacy & Security or remove the quarantine flag. The Homebrew cask removes that flag for you, and Sparkle handles updates.

Macs without a notch get a menu bar pill, and the island can be pinned to any connected display. There is no Dock icon; a gear in the panel opens settings.
