---
name: "EME"
summary: "Markdown editor with source, preview and split views, focus mode, math and export to HTML or PDF."
category: "Writing"
tags:
  - markdown
  - markdown-editor
  - text-editor
alternativeTo:
  - typora
repository: "https://github.com/egoist/eme"
website: "https://github.com/egoist/eme"
license: "MIT"
licenseUrl: "https://github.com/egoist/eme/blob/dev/LICENSE"
maintenance: "unmaintained"
maintenanceNote: "No release since July 2020 and no push since December 2022 (checked November 2026)."
download: "https://github.com/egoist/eme/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
sources:
  - "https://github.com/egoist/eme"
  - "https://github.com/egoist/eme/blob/dev/LICENSE"
  - "https://github.com/egoist/eme/releases"
  - "https://raw.githubusercontent.com/egoist/eme/dev/README.md"
  - "https://raw.githubusercontent.com/egoist/eme/dev/package.json"
  - "https://github.com/egoist/eme/releases/tag/v0.15.1"
  - "https://typora.io/"
---

EME edits Markdown and lets you choose what the window shows: the source, the rendered preview, or both at once. A focus mode clears everything else away while you write.

It typesets math formulas, and it exports a document to HTML or PDF. If you turn on Gist sync, each file you save is also uploaded to a GitHub Gist. The project wiki lists the key bindings.

EME is an Electron app, and the last release also has Linux packages. That release, 0.15.1 from July 2020, ships an Intel-only Mac DMG that needs macOS 10.10 or later, so Apple silicon Macs run it through Rosetta 2. The app has no code signature, and Gatekeeper rejects it.

Typora hides the Markdown syntax and renders it in place as you type. EME keeps the source visible and shows the formatted result in its own preview.
