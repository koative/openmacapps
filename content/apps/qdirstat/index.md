---
name: "QDirStat"
summary: "A disk usage analyzer that shows folders as a sortable size tree and a colour treemap, with built-in cleanup actions."
category: "Utilities"
tags:
  - disk-usage
  - storage
  - visualization
  - cleanup
  - cross-platform
alternativeTo:
  - daisydisk
repository: https://github.com/shundhammer/qdirstat
website: https://github.com/jesusha123/qdirstat-macos
license: "GPL-2.0"
licenseUrl: https://github.com/shundhammer/qdirstat/blob/master/LICENSE
download: https://github.com/jesusha123/qdirstat-macos/releases
homebrew: "qdirstat"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/shundhammer/qdirstat
  - https://github.com/shundhammer/qdirstat/blob/master/LICENSE
  - https://github.com/jesusha123/qdirstat-macos
  - https://github.com/jesusha123/qdirstat-macos/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/shundhammer/qdirstat/master/src/icons/qdirstat.svg
    credit: "QDirStat contributors"
    license: "GPL-2.0; upstream project asset, trademarks retained"
---

QDirStat scans a folder or a whole disk and shows where the space went in two linked views: a tree sorted by size, and a treemap where every file is a rectangle sized by how much it takes up and coloured by file type. Clicking a rectangle jumps to that file in the tree, and configurable cleanup actions can move items to the trash or run your own commands on them.

It is the Qt successor of KDirStat, written by the same author for Linux and other Unix-like systems. The upstream project does not build Mac binaries itself; the author approved and links the separate qdirstat-macos repository, where Jesus Herrera Arroyo publishes notarized DMG builds of each release.

macOS asks for permission before QDirStat can read protected folders, and scanning system folders may prompt again each time. Granting Full Disk Access in System Settings avoids the repeated prompts.
