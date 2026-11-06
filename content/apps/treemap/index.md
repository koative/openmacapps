---
name: "TreeMap"
summary: "Disk-space visualizer with a treemap and other views, a duplicate finder, scan history and a cleanup cart that uses the Trash."
category: "Utilities"
tags:
  - disk-usage
  - storage
  - cleanup
  - cross-platform
alternativeTo:
  - daisydisk
repository: "https://github.com/Prithvi-Web/TreeMap-Disk-Visualizer"
website: "https://tree-map-landing-page.vercel.app/"
license: "MIT"
licenseUrl: "https://github.com/Prithvi-Web/TreeMap-Disk-Visualizer/blob/main/LICENSE"
download: "https://github.com/Prithvi-Web/TreeMap-Disk-Visualizer/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Prithvi-Web/TreeMap-Disk-Visualizer"
  - "https://github.com/Prithvi-Web/TreeMap-Disk-Visualizer/blob/main/LICENSE"
  - "https://github.com/Prithvi-Web/TreeMap-Disk-Visualizer/releases"
  - "https://tree-map-landing-page.vercel.app/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Prithvi-Web/TreeMap-Disk-Visualizer/main/build/icon.png"
    credit: "Prithvi Vinay"
    license: "MIT; upstream app icon, trademarks retained"
---

TreeMap scans a disk or folder and shows every file as a rectangle sized by how much space it takes, with sunburst, circle, isometric "disk city" and grid layouts of the same data. Other views break down space by app and by game or media library, find exact duplicates by hash and similar images, chart how folders grow across scans, and explain the gap between used space and the files you can see.

Cleanup goes through a cart: you collect files, preview the result and move them to the Trash, and a separate vault can keep a verified copy for 30 days. It can also move files to another drive after checking each copy, keep cleanup rules running automatically, rescan on a schedule, and expose its scans to AI assistants through an MCP server. It is for anyone trying to find what is filling a drive. The desktop app is built with Electron and a Rust scanner, with no telemetry.

The macOS download is for Apple silicon only; Intel Macs can run the same app in a browser from source, which needs Node.js 20 or later. The build is not notarized, so the first launch has to be allowed in System Settings, and on macOS the updater only links to the next release instead of installing it. A Windows installer is also available.
