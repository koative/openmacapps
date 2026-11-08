---
name: "Edmund"
summary: "A lightweight Markdown editor with inline live preview that opens plain .md files from anywhere."
category: "Writing"
tags:
  - markdown
  - text-editor
  - markdown-editor
alternativeTo:
  - typora
repository: https://github.com/I7T5/Edmund
website: https://edmund.md
license: "Apache-2.0"
licenseUrl: https://github.com/I7T5/Edmund/blob/main/LICENSE
download: https://github.com/I7T5/Edmund/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/I7T5/Edmund
  - https://github.com/I7T5/Edmund/blob/main/LICENSE
  - https://github.com/I7T5/Edmund/releases
  - https://raw.githubusercontent.com/I7T5/Edmund/main/README.md
  - https://edmund.md
  - https://github.com/I7T5/Edmund/releases/tag/v0.8.4
  - https://typora.io/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/I7T5/Edmund/main/docs/assets/AppIcon/AppIcon_512x512.png
    credit: "I7T5 and Edmund contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Edmund opens a `.md` file from wherever it sits and lets you edit it with inline live preview, so the Markdown renders in the same view you type in. There is no vault or library folder to set up, so it works alongside an existing notes folder or on a single file.

The app is written in Swift on AppKit and TextKit 2, and the developer says it handles files of one to two megabytes without trouble. Math and Obsidian-style syntax are opt-in. The project's screenshots show inline and display math, Mermaid diagrams, editing inside table cells, find and replace, an outline in the inspector, a read mode and a plain source mode, plus several editor themes.

Edmund works offline by default. You can also block external links and have HTML sanitized.

The project is in beta. Edmund requires macOS 14, and the 0.8.4 DMG contains an Apple silicon build only. It is not signed with an Apple Developer ID, so macOS can report the app as damaged on first launch. Open Anyway in Privacy & Security settings, or the `xattr` command in the README, gets past that. After installation, Edmund checks for updates on its own.

The developer credits Typora, along with Obsidian, for much of Edmund's vision. Typora's own site sells it after a 15-day trial for macOS, Windows and Linux, while Edmund is free under the Apache license and runs only on the Mac.
