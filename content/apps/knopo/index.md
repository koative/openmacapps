---
name: "Knopo"
summary: "A block-based outliner for linked notes and journals that stores everything as plain Markdown files."
category: "Productivity"
tags: ["outliner", "notes", "markdown", "local-first", "knowledge-base", "note-taking"]
alternativeTo: ["obsidian"]
repository: "https://github.com/alkalim/Knopo"
website: "https://github.com/alkalim/Knopo"
license: "AGPL-3.0"
licenseUrl: "https://github.com/alkalim/Knopo/blob/main/LICENSE"
download: "https://github.com/alkalim/Knopo/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/alkalim/Knopo", "https://github.com/alkalim/Knopo/blob/main/LICENSE", "https://github.com/alkalim/Knopo/releases", "https://raw.githubusercontent.com/alkalim/Knopo/main/README.md", "https://github.com/alkalim/Knopo/releases/tag/v0.9.0", "https://obsidian.md/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/alkalim/Knopo/main/Icon/AppIcon.svg", "credit": "Knopo contributors", "license": "AGPL-3.0; upstream project asset, trademarks retained; rendered from the upstream SVG"}]
screenshots: []
---

Knopo edits notes as an outline of blocks and saves them as plain Markdown files in a folder you choose. Each line is a block: Return splits it, Tab and Shift-Tab indent and outdent, clicking a bullet zooms in and clicking the triangle folds it.

- Pages link with double brackets, and renaming a page rewrites every link to it.
- A block can be referenced or embedded elsewhere by its ID.
- Live queries collect blocks by tag, page link, task state or property.
- A daily journal is the home page, and Command-K searches the whole graph.

A block you have not touched is written back exactly as it was, so editing does not reshuffle your files. Beside the notes, a `.knopo` folder holds a SQLite index and settings; delete it and Knopo rebuilds it. The editor uses AppKit and SwiftUI, and the block you type in is a standard macOS text view. Graphs open in their own windows or tabs.

The README calls Knopo early and warns that on-disk conventions may still change. Version 0.9.0 is an Apple silicon build for macOS 14 or later. It is not notarized, so Gatekeeper stops the app the first time a downloaded copy opens; clearing the quarantine flag or clicking Open Anyway in Privacy & Security lets it run.

Obsidian also keeps notes as local files in open formats, and it adds thousands of plugins and themes, a graph view and a canvas. Knopo has no plugins and structures every page as a tree of blocks, the model Logseq uses.
