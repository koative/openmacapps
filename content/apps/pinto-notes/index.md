---
name: "Pinto Notes"
summary: "Notes app for Mac and iPhone that ChatGPT, Claude and Codex can read and edit, with every AI edit tinted and undoable."
category: "Productivity"
tags:
  - note-taking
  - notes
  - sync
  - encryption
repository: "https://github.com/pinto-notes/pinto-notes"
website: "https://pintonotes.com"
license: "MIT"
licenseUrl: "https://github.com/pinto-notes/pinto-notes/blob/main/LICENSE"
download: "https://pintonotes.com/download"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/pinto-notes/pinto-notes"
  - "https://github.com/pinto-notes/pinto-notes/blob/main/LICENSE"
  - "https://github.com/pinto-notes/pinto-notes/releases/latest"
  - "https://pintonotes.com"
  - "https://pintonotes.com/download"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/pinto-notes/pinto-notes/main/Pane/Resources/Assets.xcassets/AppIcon.appiconset/icon-mac-512%402x.png"
    credit: "Emil Wagman"
    license: "MIT; upstream app icon, trademarks retained"
---

Pinto Notes is a notes app styled after Apple Notes, with folders, checklists, tables and sub-notes. Its distinguishing feature is that AI assistants can work on the same notes: you connect ChatGPT, Claude, Claude Code, Codex or Gemini CLI to its MCP server, approve the connection in the app and choose read-only or read-and-edit. Each change an assistant makes is tinted, labelled with its name and kept as a previous version, so one tap undoes it. Notes sync between the Mac and iPhone, and the app can import from Apple Notes, Evernote, Google Keep and Markdown folders.

Sign in with Apple or email is required. The README says the iPhone app is not yet on the App Store. By default the server holds a copy of the key that opens your notes so a new device can sign in; the Advanced protection setting removes that copy, and the project documents the trade-off in its privacy notes. The app sends error reports and a few usage counts, and one switch turns that off. Building from source needs macOS 26 and Xcode 26; the README does not give a minimum macOS version for the download.
