---
name: "AI Meter"
summary: "Menu bar gauge showing how much of the Claude Code or Codex usage window is left, and when it resets."
category: "AI"
tags:
  - coding-agents
  - usage-tracking
  - menu-bar
  - monitoring
repository: "https://github.com/getguruhat/ai-meter"
website: "https://guruhat.com/apps/ai-meter/"
license: "MIT"
licenseUrl: "https://github.com/getguruhat/ai-meter/blob/main/LICENSE"
download: "https://github.com/getguruhat/ai-meter/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/getguruhat/ai-meter"
  - "https://github.com/getguruhat/ai-meter/blob/main/LICENSE"
  - "https://github.com/getguruhat/ai-meter/releases"
  - "https://guruhat.com/apps/ai-meter/"
---

AI Meter shows how much of the current five-hour or weekly usage window is left for Claude Code or Codex, with the time it resets, and refreshes every five minutes. It uses the sign-in those tools already saved on the Mac: the Claude Code entry in the Keychain, or `~/.codex/auth.json` for Codex. The README says tokens are sent only to Anthropic's or OpenAI's usage endpoints, with no analytics. It is for people who want to see a limit before a long refactor runs into it.

Requires macOS 13 or later on Apple silicon. The DMG is not notarized yet, so the first launch has to be allowed under System Settings > Privacy & Security with Open Anyway. The first read of the Claude sign-in can trigger a Keychain prompt. If a provider changes its usage endpoint, the menu shows `AI —` until the app is updated.
