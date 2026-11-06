---
name: "ClaudeCodeNotify"
summary: "Menu bar app that shows a floating notification when Claude Code asks for permission, waits or finishes."
category: "Developer tools"
tags:
  - claude-code
  - notifications
  - menu-bar
  - terminal
repository: "https://github.com/narlei/claudecodenotify"
website: "https://claudecodenotify.narlei.com"
license: "MIT"
licenseUrl: "https://github.com/narlei/claudecodenotify/blob/main/LICENSE"
download: "https://github.com/narlei/claudecodenotify/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/narlei/claudecodenotify"
  - "https://github.com/narlei/claudecodenotify/blob/main/LICENSE"
  - "https://github.com/narlei/claudecodenotify/releases/latest"
  - "https://claudecodenotify.narlei.com"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/narlei/claudecodenotify/releases/download/v1.5.0/ClaudeCodeNotify.dmg"
    credit: "Narlei Moreira"
    license: "MIT; upstream app icon, trademarks retained"
---

ClaudeCodeNotify shows a notification in the middle of the screen when Claude Code asks for permission, is idle waiting for input, or finishes a task. Pressing Enter or clicking the card takes you to the terminal where that session runs. It does not approve or block anything: you still answer in the terminal. Connecting it installs hooks in ~/.claude/settings.json and keeps a backup of the file first. It suits people who leave Claude Code running in the background while they work on something else.

It needs macOS 12 or later and is a universal binary for Intel and Apple silicon. The app is unsigned and not notarized, so the first launch must be allowed in System Settings; the README gives right-click, Open as the simplest route.
