---
name: "FrogDrop"
summary: "Menu bar app combining clipboard history, a drag-and-drop file shelf, image tools and a Pomodoro timer."
category: "Productivity"
tags:
  - clipboard
  - drag-and-drop
  - pomodoro
  - menu-bar
repository: "https://github.com/sarthak-SyntaxSamurai/FrogDrop"
website: "https://github.com/sarthak-SyntaxSamurai/FrogDrop"
license: "MIT"
licenseUrl: "https://github.com/sarthak-SyntaxSamurai/FrogDrop/blob/main/LICENSE"
download: "https://github.com/sarthak-SyntaxSamurai/FrogDrop/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/sarthak-SyntaxSamurai/FrogDrop"
  - "https://github.com/sarthak-SyntaxSamurai/FrogDrop/blob/main/LICENSE"
  - "https://github.com/sarthak-SyntaxSamurai/FrogDrop/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/sarthak-SyntaxSamurai/FrogDrop/releases/download/v2.2.0/FrogDrop.dmg
    credit: FrogDrop contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

FrogDrop puts several small utilities behind one menu bar icon. It keeps a searchable clipboard history with per-app ignore rules, offers a file shelf that appears when you shake the cursor during a drag, and converts or strips metadata from images. It also does on-device text recognition, merges PDFs, and has a Pomodoro timer with ambient sounds and a short task list. It suits people who want these tools in one app instead of several separate ones.

Requires macOS 14.0 or later, on Apple silicon or Intel. The DMG is not signed with a paid Developer ID or notarized, so the first launch needs the Open Anyway step or the `xattr` command in the README. Clipboard history and settings stay in Application Support on your Mac. Network use happens only when you trigger it, such as an upload, a link shortener or a manual update check.
