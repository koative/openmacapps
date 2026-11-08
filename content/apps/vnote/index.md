---
name: "VNote"
summary: "Keeps notebooks of Markdown, Typst, mind-map and plain-text notes in local files, with an editor for each format."
category: "Writing"
tags: ["markdown", "notes", "editor", "note-taking"]
repository: "https://github.com/vnotex/vnote"
website: "https://github.com/vnotex/vnote"
license: "LGPL-3.0"
licenseUrl: "https://github.com/vnotex/vnote/blob/master/COPYING.LESSER"
download: "https://github.com/vnotex/vnote/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/vnotex/vnote", "https://github.com/vnotex/vnote/blob/master/COPYING.LESSER", "https://github.com/vnotex/vnote/blob/master/README.md", "https://github.com/vnotex/vnote/releases", "https://github.com/vnotex/vnote/releases/tag/v4.14.1", "https://docs.vnote.fun/", "https://docs.vnote.fun/getting-started/installation/", "https://docs.vnote.fun/editing/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/vnotex/vnote/blob/master/src/data/core/logo/256x256/vnote.png", "credit": "VNote contributors", "license": "LGPL-3.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

VNote is a note-taking app built on notebooks of local files. You sort notes into notebooks and folders, tag them, and find them again with the search panel. Because notebooks are ordinary files, you can back them up and move them with the tools you already use.

The documentation singles out Markdown as the format VNote suits best. You write and preview in one editor that handles math and diagrams, and it can hide formatting markers while you type. Other formats sit next to your Markdown notes:

- Typst documents have their own editor with a live PDF preview.
- Mind maps are drawn in a built-in editor, and a Markdown note's headings can be shown as a mind map and rearranged from there.
- Plain text, logs, source code and configuration files open in the same window.
- PDFs open in a built-in viewer.

Snippets, templates, a Vi mode, encrypted notes, export to other formats and custom keyboard shortcuts round out the editor. On macOS, VNote adds a Create Note in VNote entry to the Services menu, so text selected in another app can become a note. The documentation says there is no account to create.

VNote is written in C++ with Qt. Each release has a universal DMG for macOS 13 or later and a separate package for macOS 12.1. On first launch macOS may warn that the app comes from an unidentified developer; the documentation says to right-click it and choose Open.
