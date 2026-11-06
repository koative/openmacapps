---
name: "brb"
summary: "Claude Code plugin and menu bar app that offers a break while Claude works and calls you back when it finishes."
category: "Developer tools"
tags:
  - claude-code
  - coding-agents
  - menu-bar
  - notifications
repository: "https://github.com/usebrb/brb"
website: "https://usebrb.github.io"
license: "MIT"
licenseUrl: "https://github.com/usebrb/brb/blob/main/LICENSE"
download: "https://github.com/usebrb/brb/releases/latest/download/brb.app.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/usebrb/brb"
  - "https://github.com/usebrb/brb/blob/main/LICENSE"
  - "https://github.com/usebrb/brb/releases/latest"
  - "https://usebrb.github.io"
---

brb is a Claude Code plugin plus a small macOS menu bar app. When a Claude turn runs for a while, it shows a break panel with sites you can pick, such as X, Reddit or Hacker News. When Claude finishes, a card brings you back to the terminal. It uses Claude Code's lifecycle hooks rather than scraping terminal output, and it also alerts you when Claude is waiting on a permission prompt. It suits people who run long Claude Code tasks and step away while they work.

Requires macOS 14 or later. The plugin downloads the menu bar app from the latest release on your next Claude Code session. The app is ad-hoc signed and not notarized: a Gatekeeper check of the release zip is rejected, so the first launch has to be allowed in System Settings. The project says brb reads hook events on your machine and sends no code or prompts anywhere; its only network requests fetch break-site icons, which can be turned off.
