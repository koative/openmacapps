---
name: "Rascal"
summary: "Keyboard-first Finder replacement with dual panes, a command palette, vim keys, a disk treemap and an inline terminal."
category: "Utilities"
tags:
  - file-manager
  - keyboard-shortcuts
  - finder
repository: "https://github.com/chang-07/rascal"
website: "https://chang-07.github.io/rascal/"
license: "MIT"
licenseUrl: "https://github.com/chang-07/rascal/blob/main/LICENSE"
download: "https://github.com/chang-07/rascal/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/chang-07/rascal"
  - "https://github.com/chang-07/rascal/blob/main/LICENSE"
  - "https://github.com/chang-07/rascal/releases/tag/v0.1.6"
  - "https://chang-07.github.io/rascal/"
---

Rascal is a file manager for macOS that is built around the keyboard. It offers dual and multi-pane layouts, a fuzzy command palette on Command-Shift-P, vim-style navigation, a live treemap of the folder you are in, and a terminal drawer that follows the active pane. It reads and writes the same Finder tags as Finder, and version 0.1.6 added SFTP browsing of remote servers. It is plain AppKit with no third-party Swift packages, and the project states that it has no telemetry and no accounts.

It suits people who would rather move files with the keyboard than with the mouse, and who already know their way around vim-style keys. Apple silicon and Intel builds are published as separate DMG files. The builds are ad-hoc signed and not notarized, so the first launch has to be opened from the context menu in Finder; if macOS reports the app as damaged, the README suggests clearing the quarantine attribute with `xattr -cr`.
