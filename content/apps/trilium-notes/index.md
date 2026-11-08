---
name: "Trilium Notes"
summary: "Keeps notes in a tree as deep as you need, with rich text, code, diagrams and per-note encryption."
category: "Writing"
tags: ["notes", "knowledge-base", "self-hosted", "note-taking"]
alternativeTo: ["obsidian", "evernote"]
repository: "https://github.com/TriliumNext/Trilium"
website: "https://triliumnotes.org/"
license: "AGPL-3.0-or-later"
licenseUrl: "https://github.com/TriliumNext/Trilium/blob/main/LICENSE"
download: "https://github.com/TriliumNext/Trilium/releases"
freeDownload: true
homebrew: "trilium-notes"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/TriliumNext/Trilium", "https://github.com/TriliumNext/Trilium/blob/main/LICENSE", "https://github.com/TriliumNext/Trilium/blob/main/README.md", "https://github.com/TriliumNext/Trilium/releases", "https://github.com/TriliumNext/Trilium/releases/tag/v0.106.1", "https://github.com/TriliumNext/Trilium/blob/main/docs/User%20Guide/User%20Guide/Installation%20%26%20Setup/Data%20directory.md", "https://obsidian.md/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/TriliumNext/Trilium/blob/main/apps/client/src/assets/icon.png", "credit": "Trilium Notes contributors", "license": "AGPL-3.0-or-later; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

Trilium Notes files every note somewhere in a tree, nested as deeply as you like. One note can also be cloned into several branches, so a meeting note can sit under both the project and the person. Text notes open in a WYSIWYG editor with tables, images and math, and Markdown syntax you type turns into formatting.

- Code notes get syntax highlighting.
- Attributes on a note drive organization, saved queries and scripts, and a REST API exposes the same data to automation.
- Canvas notes are Excalidraw sketches. Mind maps and relation maps chart ideas and links, and geo maps pin places and show GPX tracks.
- Protected notes are encrypted one at a time, and every note keeps a revision history.
- Evernote exports and Markdown files can be imported, and notes export back to Markdown.

Full-text search and note hoisting, which narrows the tree to one branch, help once the collection grows.

On the Mac everything lives in one `trilium-data` folder in Application Support, with the notes in a single `document.db` database file. Backing up that folder saves the whole collection. Reaching your notes from a second computer or a phone browser means running a Trilium sync server, on your own machine or with a hosting service.

Obsidian works on a folder of plain Markdown files that other editors can open as they are. Trilium's notes stay inside its database and leave it through export.

Each release has separate DMG and ZIP downloads for Apple silicon and Intel Macs.
