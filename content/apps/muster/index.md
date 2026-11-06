---
name: "Muster"
summary: "Menu-bar alerts when a Claude Code, Codex or Cursor session waits for you, with answers from the keyboard."
category: "AI"
tags:
  - coding-agents
  - claude-code
  - menu-bar
  - developer-utilities
repository: "https://github.com/josefchen/muster"
website: "https://agentmuster.app"
license: "MIT"
licenseUrl: "https://github.com/josefchen/muster/blob/main/LICENSE"
download: "https://github.com/josefchen/muster/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/josefchen/muster"
  - "https://github.com/josefchen/muster/blob/main/LICENSE"
  - "https://github.com/josefchen/muster/releases"
  - "https://agentmuster.app"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/josefchen/muster/releases/download/v1.4.0/Muster.dmg"
    credit: "Josef Chen"
    license: "MIT; upstream app icon, trademarks retained"
---

Muster sits in the menu bar and tells you when a Claude Code, Codex or Cursor session is waiting for an answer. You can allow or deny a command, or pick one of the agent's options, with a shortcut and without switching to the app. It is for people who run several coding agents at once and lose track of the one that has been waiting. Switching and search work across sessions, and the app reads the session files each agent already writes.

The app needs macOS 14 or later and runs on Apple silicon or Intel; the DMG is a universal build. Liquid Glass styling needs macOS 26. The DMG is signed with Developer ID and notarized, so it opens without a Gatekeeper override. Answering prompts needs a hook in each agent's settings, which Muster adds and removes when you turn it off. Remote SSH monitoring is still in development in version 1.4.
