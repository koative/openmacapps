---
name: "UEFITool"
summary: "A viewer for UEFI firmware images that parses them into a tree, checks their integrity and extracts individual components."
category: "Developer tools"
tags:
  - firmware
  - inspection
  - hardware
  - cross-platform
repository: https://github.com/LongSoft/UEFITool
website: https://github.com/LongSoft/UEFITool
license: "BSD-2-Clause"
licenseUrl: https://github.com/LongSoft/UEFITool/blob/new_engine/LICENSE.md
download: https://github.com/LongSoft/UEFITool/releases
homebrew: "uefitool"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/LongSoft/UEFITool
  - https://github.com/LongSoft/UEFITool/blob/new_engine/LICENSE.md
  - https://github.com/LongSoft/UEFITool/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/LongSoft/UEFITool/blob/new_engine/UEFITool/icons/uefitool.icns
    credit: "Nikolaj Schlej and UEFITool contributors"
    license: "BSD-2-Clause; upstream project asset, trademarks retained"
---

UEFITool opens BIOS and UEFI firmware images, such as a dump of a motherboard's flash chip, and shows them as a tree of regions, volumes, files and sections. It checks the image's integrity, labels components using a bundled database of known UEFI GUIDs, and lets you extract any element for closer study.

The current releases use the project's "new engine" parser, which handles newer firmware formats but cannot yet rebuild a modified image, so editing is limited for now. Two command-line companions, UEFIExtract and UEFIFind, are published as separate downloads.

The macOS build is a universal disk image for Apple silicon and Intel Macs.
