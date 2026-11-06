---
name: "Echo"
summary: "Menu bar clipboard history with Markdown paste, inline calculation and optional DeepSeek questions."
category: "Productivity"
tags:
  - clipboard
  - clipboard-manager
  - markdown
  - menu-bar
alternativeTo:
  - paste
repository: "https://github.com/akira82-ai/echo-app"
website: "https://github.com/akira82-ai/echo-app"
license: "MIT"
licenseUrl: "https://github.com/akira82-ai/echo-app/blob/main/LICENSE"
download: "https://github.com/akira82-ai/echo-app/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/akira82-ai/echo-app"
  - "https://github.com/akira82-ai/echo-app/blob/main/LICENSE"
  - "https://github.com/akira82-ai/echo-app/releases/latest"
---

Echo is a clipboard panel for the menu bar. It keeps recent text, images and Finder files, opens with ⌘\, pastes copied rich text as Markdown, combines several text clips into one paste, and calculates expressions that start with `!`. Typing `@` sends a question to DeepSeek with your own API key. History is not restored after a restart, so Echo works as a scratchpad rather than a long-term archive. It suits people who want quick recall and paste rather than a full clipboard database.

It requires macOS 13 Ventura or later. Prebuilt releases are for Apple silicon only; Intel Macs need a source build. Releases use a self-signed certificate rather than Apple notarization, so the first launch has to be allowed in System Settings. Auto Paste and browser URL capture need Accessibility permission. Quick questions send your text, your system prompt and any search queries to DeepSeek; clipboard history is not sent automatically.
