---
name: "Claude Status Bar"
summary: "A menu bar indicator that shows whether Claude Code is working, running a tool, waiting for permission or done."
category: "Developer tools"
tags: ["menu-bar", "coding-agents", "status-indicator"]
repository: "https://github.com/m1ckc3s/claude-status-bar"
website: "https://github.com/m1ckc3s/claude-status-bar"
license: "MIT"
licenseUrl: "https://github.com/m1ckc3s/claude-status-bar/blob/main/LICENSE"
download: "https://github.com/m1ckc3s/claude-status-bar/releases/latest"
homebrew: "claude-status-bar"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/m1ckc3s/claude-status-bar", "https://github.com/m1ckc3s/claude-status-bar/blob/main/LICENSE", "https://github.com/m1ckc3s/claude-status-bar/releases", "https://github.com/m1ckc3s/claude-status-bar/blob/main/PRIVACY.md"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/m1ckc3s/claude-status-bar/blob/main/assets/AppIcon.icns", "credit": "Mick Cesanek", "license": "MIT; upstream project asset, trademarks retained"}]
---

Claude Status Bar adds a small indicator to the menu bar for Claude Code sessions. It animates while Claude is thinking, shows a short label when a tool runs, turns into a yellow dot when Claude is waiting for your permission, and can show how long the current turn has taken. With several sessions open, it surfaces the one that needs you first.

It follows the Claude Code command line, the Code tab of the Claude desktop app and the Claude Code extension in Cursor, but not ordinary chats. The app has no window: it starts when a Claude Code session begins and quits when none is left.

It needs macOS 12 or later, Claude Code and Node.js. On first launch it adds hooks to `~/.claude/settings.json`, backing the file up first; the project documents an uninstall script that removes them again. Its only network use is a daily update check against GitHub and Homebrew. Builds are signed and notarized. This is an unofficial project with no affiliation to Anthropic.
