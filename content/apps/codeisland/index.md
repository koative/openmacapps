---
name: "CodeIsland"
summary: "Shows AI coding agents in the MacBook notch, where you approve their tool calls or answer questions without switching windows."
category: "Developer tools"
tags: ["notch", "coding-agents", "menu-bar", "notifications"]
repository: "https://github.com/wxtsky/codeisland"
website: "https://github.com/wxtsky/codeisland"
license: "MIT"
licenseUrl: "https://github.com/wxtsky/codeisland/blob/main/LICENSE"
download: "https://github.com/wxtsky/codeisland/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/wxtsky/codeisland", "https://github.com/wxtsky/codeisland/blob/main/LICENSE", "https://github.com/wxtsky/CodeIsland/blob/main/README.md", "https://github.com/wxtsky/CodeIsland/releases/tag/v1.0.41"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/wxtsky/codeisland/main/logo.png", "credit": "wxtsky and CodeIsland contributors", "license": "MIT repository asset; trademarks retained"}]
screenshots: []
---

CodeIsland turns the MacBook notch into a status bar for your AI coding agents. Each session gets a card with its current tool, latest reply and task progress, so you can see which one is working, waiting or done without switching windows. When an agent asks for permission or poses a question, you answer on the card, or click once to jump to its terminal tab, IDE window or tmux pane.

- On launch it writes hooks into the config of each tool it detects, from Claude Code and Codex to Cursor, Gemini CLI and OpenCode, and each can be switched off.
- Optional global shortcuts approve, deny or skip a request; Command-Shift-I opens and closes the panel.
- Sessions on SSH hosts appear next to local ones after a small helper is installed on the server.
- Optional pushes go to services such as ntfy, Slack or Telegram, by default only while you are away from the Mac.

Some tools need a step of their own. Codex ignores new hooks until you review them with `/hooks`, and Hermes asks once per hook. Tools whose hooks cannot carry a decision, such as Google Antigravity, are shown read-only. Cowork sessions in Claude Desktop are read from local files, and their approvals stay in Claude Desktop.

The developer says events stay on the Mac unless you turn on plan-limit lookups, webhooks or pushes; Sparkle update checks are the only default network traffic.

CodeIsland needs macOS 14 or later and works on Macs without a notch too. Version 1.0.41 ships as a DMG holding a Universal app, Developer ID-signed and notarized, or as a cask from the developer's Homebrew tap.

A companion iPhone and Apple Watch app is on the App Store, with its source in the same repository.
