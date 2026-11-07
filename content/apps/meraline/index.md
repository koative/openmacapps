---
name: "Meraline"
summary: "Floating panel for quick AI questions from a shortcut, with answers that stream in and chats kept only in memory."
category: "AI"
tags:
  - local-ai
  - chat
  - coding-agents
  - keyboard-shortcuts
repository: "https://github.com/Meldiron/meraline"
website: "https://github.com/Meldiron/meraline"
license: "MIT"
licenseUrl: "https://github.com/Meldiron/meraline/blob/main/LICENSE"
download: "https://github.com/Meldiron/meraline/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Meldiron/meraline"
  - "https://github.com/Meldiron/meraline/blob/main/LICENSE"
  - "https://github.com/Meldiron/meraline/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/Meldiron/meraline/releases/download/v1.14.0/Meraline-1.14.0.dmg
    credit: Meraline contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Meraline opens a small glass window over any app or full-screen space when you press a shortcut, streams the answer as it is written, and lets you ask follow-ups. It can use Apple Intelligence on a supported Mac, API-key providers such as Anthropic, OpenAI, Google Gemini and OpenRouter, local models through Ollama or LM Studio, and command-line agents such as Claude Code and Codex. It can attach selected text, files and screenshots, and a Decision mode answers yes/no or ranked questions. Chats are kept in memory and removed 30 minutes after the last message, which suits quick questions rather than long-term notes.

Requires macOS 26 or later. The project's release workflow signs the app with a Developer ID certificate, notarizes it and packages it in a disk image. Using a cloud provider means that provider's charges and data policy apply, and agent or screenshot features ask for macOS permissions such as Accessibility or Screen Recording. Meraline checks for updates every 15 minutes by default, and that check can be turned off in Settings.
