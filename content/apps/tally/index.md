---
name: "Tally"
summary: "Notch panel for Claude Code and Codex session status and AI usage quotas, plus network, system stats and a file shelf."
category: "AI"
tags:
  - notch
  - coding-agents
  - usage-tracking
  - menu-bar
repository: "https://github.com/guokuaile/tally"
website: "https://github.com/guokuaile/tally"
license: "GPL-3.0"
licenseUrl: "https://github.com/guokuaile/tally/blob/main/LICENSE"
download: "https://github.com/guokuaile/tally/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/guokuaile/tally"
  - "https://github.com/guokuaile/tally/blob/main/LICENSE"
  - "https://github.com/guokuaile/tally/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/guokuaile/tally/releases/latest/download/Tally.dmg"
    credit: "guokuaile (Tally project)"
    license: "GPL-3.0; upstream app icon from AppIcon.icns in Tally.app, trademarks retained"
---

Tally puts a panel in the MacBook notch. Claude Code and Codex sessions are grouped as waiting for you, running or recent, using hooks it writes into each tool's settings (the originals are backed up first). The panel can jump to the terminal tab that owns a session and offer to resume a closed one. It shows usage and quotas for Claude, Codex, Cursor and Antigravity, with optional DeepSeek, Kimi, GLM and New API balances, alongside network throughput, CPU, memory, battery, running apps and a file shelf. It suits people who run several coding agents at once.

It needs macOS 15 or later on Apple silicon, and a MacBook with a notch to show the panel; the README says other Macs launch but show system notifications instead. Tally is not signed with an Apple Developer ID and is not notarized, so the first launch must be allowed in System Settings, or cleared with `xattr` in Terminal. The README says the Homebrew cask installs without that step. Administrator approval is only asked for if you enable keep-awake with the lid closed, and provider login tokens are read but not refreshed. The interface is in Simplified Chinese.
