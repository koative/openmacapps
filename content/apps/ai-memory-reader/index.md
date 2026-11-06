---
name: "AI Memory Reader"
summary: "Native viewer for the memory files and session transcripts that AI coding agents such as Claude Code leave on disk."
category: "AI"
tags:
  - coding-agents
  - markdown
  - files
repository: "https://github.com/nvwalj/ai-memory-reader"
website: "https://github.com/nvwalj/ai-memory-reader"
license: "GPL-3.0"
licenseUrl: "https://github.com/nvwalj/ai-memory-reader/blob/main/LICENSE"
download: "https://github.com/nvwalj/ai-memory-reader/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/nvwalj/ai-memory-reader"
  - "https://github.com/nvwalj/ai-memory-reader/blob/main/LICENSE"
  - "https://github.com/nvwalj/ai-memory-reader/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/nvwalj/ai-memory-reader/main/AIMemoryReader/Sources/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png"
    credit: "AI Memory Reader contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

AI Memory Reader opens the files AI coding agents keep on disk: `CLAUDE.md`, `AGENTS.md`, memory notes and the session transcripts written by Claude Code, Codex, Gemini, Cursor and several other tools. It renders Markdown, pretty-prints JSON and JSONL session logs in chunks, follows links and wiki links between files, reloads when an agent changes a file, and lets you edit and save. It suits people who want to read, search and tidy their agent instructions and memory in one native window.

It requires macOS 15.0 or later. The release zip is a universal build for Apple silicon and Intel. The README says the app is signed with a Developer ID and notarized by Apple. It makes no network calls except one daily check for new GitHub releases, which can be skipped. The author's separate website sells paid reviews; the app itself is free and open source under GPL-3.0.
