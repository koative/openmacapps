---
name: "Engram"
summary: "Local-first shared memory for AI assistants: import past chats once, then let MCP clients recall them."
category: "AI"
tags:
  - mcp
  - local-ai
  - local-first
repository: "https://github.com/albertofettucini/Engram"
website: "https://github.com/albertofettucini/Engram"
license: "MIT"
licenseUrl: "https://github.com/albertofettucini/Engram/blob/main/LICENSE"
download: "https://github.com/albertofettucini/Engram/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/albertofettucini/Engram"
  - "https://github.com/albertofettucini/Engram/blob/main/LICENSE"
  - "https://github.com/albertofettucini/Engram/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/albertofettucini/Engram/releases/download/v0.1.1/Engram-0.1.1.zip
    credit: Engram contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Engram keeps your context in one private memory on your Mac. You import a ChatGPT or Claude export, Markdown, text, JSON or a pasted block, and each conversation is stored as a plain Markdown file. Any assistant that speaks the Model Context Protocol, such as Claude Desktop or Claude Code, can then recall that memory through the `engram-mcp` server, and the desktop app lets you browse, edit and import memories. Recall runs locally using Apple's Natural Language embeddings. It suits people who want the same background about them in several AI tools.

The desktop app needs macOS 14 or later, and building it needs Xcode 26 or newer; the command-line tools run on macOS 13 or later. The app is not notarized, so on first launch you need System Settings → Privacy & Security → Open Anyway. Network use is opt-in, according to the README's privacy notes: a manual update check, an optional local Ollama distiller, and a one-time on-device model download.
