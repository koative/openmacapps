---
name: "Headroom"
summary: "Native disk analyzer with a folder tree, treemap and cleanup view that labels what is safe to delete."
category: "Utilities"
tags:
  - disk-usage
  - cleanup
  - storage
alternativeTo:
  - daisydisk
repository: "https://github.com/Ryware/Headroom"
website: "https://ryware.github.io/Headroom/"
license: "MIT"
licenseUrl: "https://github.com/Ryware/Headroom/blob/main/LICENSE"
download: "https://github.com/Ryware/Headroom/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Ryware/Headroom"
  - "https://github.com/Ryware/Headroom/blob/main/LICENSE"
  - "https://github.com/Ryware/Headroom/releases"
  - "https://ryware.github.io/Headroom/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Ryware/Headroom/main/Assets/AppIcon-1024.png"
    credit: "Ryware"
    license: "MIT; upstream app icon, trademarks retained"
---

Headroom scans a folder or the startup disk and shows where the space went, as a folder tree, a treemap, file categories and a list of the largest files and bundles. Its Cleanup view gathers regenerable folders such as caches, DerivedData, node_modules and build output, and labels each one Safe, Usually safe, Caution or Never. A duplicate finder groups byte-for-byte identical files, and a menu bar ring shows free space with low-space alerts. Deleting goes to the Trash by default, with a permanent-delete mode available. It is for people who want to see what is filling a disk before removing anything.

It requires macOS 14 or later. The README describes a universal build for Apple silicon and Intel, and says it is signed and notarized by Apple. Analysis happens locally, with no account, analytics or cloud service. The README also describes optional Homebrew install and an MCP server for AI agents. Deletion is always started by you, and permanent delete cannot be undone. The project is free and MIT licensed.
