---
name: Neodisk
summary: "Maps disk usage as a treemap or sunburst, finds duplicates and compares saved scans."
category: Utilities
tags:
  - storage
  - disk-usage
  - visualization
alternativeTo:
  - daisydisk
repository: https://github.com/tkslucas/Neodisk
website: https://neodisk.app
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/tkslucas/Neodisk/blob/main/LICENSE
download: https://github.com/tkslucas/Neodisk/releases
freeDownload: true
homebrew: "neodisk"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/tkslucas/Neodisk", "https://github.com/tkslucas/Neodisk/blob/main/LICENSE", "https://github.com/tkslucas/Neodisk/blob/main/README.md", "https://github.com/tkslucas/Neodisk/releases", "https://github.com/tkslucas/Neodisk/releases/tag/v2.83.2", "https://neodisk.app", "https://daisydiskapp.com/"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/tkslucas/Neodisk/blob/1572007eef954e2b7993186bbb749120d1f601c9/Packaging/icon.png
    credit: Neodisk contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.webp
    source: https://github.com/tkslucas/Neodisk/blob/1572007eef954e2b7993186bbb749120d1f601c9/screenshots/sunburst.webp
    credit: Neodisk contributors
    license: GPL-3.0; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.webp
    alt: Neodisk disk-usage interface with a sunburst visualization and folder details.
    source: https://github.com/tkslucas/Neodisk/blob/1572007eef954e2b7993186bbb749120d1f601c9/screenshots/sunburst.webp
    credit: Neodisk contributors
icon: ./assets/icon.png
---

Neodisk scans a disk or folder and draws it as a treemap or a sunburst, so you can see which folders hold the space. Pinch to zoom the treemap or drill through the sunburst, and use the arrow keys to walk the folder tree in the list and both maps.

- Command-F runs a fuzzy search over the whole scan, and the space bar opens Quick Look.
- The duplicates view groups files with identical content, checked by hash, by how much space you would get back.
- Completed scans are saved, and the Changes tab shows new, deleted, renamed and resized items against the scan before.
- An age heatmap colors the treemap by last-modified date, and file type statistics break usage down by kind.

Scanning only reads. To free space you collect items in the Cleanup area of the sidebar, review them and confirm once, and they go to the Trash, where you can still get them back. Neodisk refuses to move system folders, volumes or your home folder and its standard folders. You can switch the cleanup tools off in Settings.

Neodisk needs macOS 14 or later. The 2.83.2 DMG holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized, and Sparkle keeps it updated. A Linux version covers the core views but lacks the duplicates and changes tabs.

DaisyDisk also draws a disk as rings, and Neodisk's README credits it as one of the sunburst viewers its own view follows. DaisyDisk is sold as a one-time purchase, and its site says it can now scan connected cloud storage. Neodisk is free under the GPL.
