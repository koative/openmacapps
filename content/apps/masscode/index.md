---
name: "massCode"
summary: "A local-first developer workspace for code snippets, notes, HTTP requests, and small developer utilities."
category: "Developer tools"
tags:
  - snippets
  - notes
  - markdown
  - http
  - local-first
repository: "https://github.com/massCodeIO/massCode"
website: "https://masscode.io"
license: "AGPL-3.0"
licenseUrl: "https://github.com/massCodeIO/massCode/blob/main/LICENSE"
download: "https://github.com/massCodeIO/massCode/releases"
freeDownload: true
homebrew: "masscode"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/massCodeIO/massCode"
  - "https://github.com/massCodeIO/massCode/blob/main/LICENSE"
  - "https://github.com/massCodeIO/massCode/releases"
  - "https://raw.githubusercontent.com/massCodeIO/massCode/main/README.md"
  - "https://masscode.io/"
  - "https://github.com/massCodeIO/massCode/releases/tag/v6.3.1"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/massCodeIO/massCode/main/build/icons/icon.icns"
    credit: "Anton Reshetov and massCode contributors"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

massCode keeps code snippets, Markdown notes, HTTP requests, calculations and sketches in one desktop app. Everything is saved as plain `.md` files with frontmatter in a vault folder, so you can put it under Git or in an iCloud, Dropbox or Syncthing folder, and the app picks up changes made outside it.

- Snippets sit in nested folders with tags and multiple fragments, highlighted in more than 160 languages and formatted with Prettier.
- Notes add task lists with due dates, internal links, a notes graph, Mermaid diagrams and a presentation mode.
- The HTTP client sends HTTP, GraphQL and WebSocket requests, runs JavaScript tests on responses and imports OpenAPI, Postman and Bruno collections.
- A math notebook handles unit, currency and date calculations in plain language, and an Excalidraw canvas holds diagrams you can embed in notes.
- Small developer tools cover JSON diffs, hashes, UUIDs, Base64 and case conversion.

Press Command-P to search across snippets, notes and requests from a command palette. Existing snippets can come in from VS Code, Raycast, SnippetsLab or GitHub Gists, and notes from an Obsidian folder.

An optional AI assistant works with your own provider account or a local model; cloud providers receive the context used for each task. A built-in MCP server lets coding agents such as Claude Code or Cursor read and save items in the vault.

GitHub releases carry macOS, Windows and Linux packages, with separate arm64 builds for Apple silicon. Each macOS download is over 250 MB.
