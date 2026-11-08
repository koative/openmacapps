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
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/LongSoft/UEFITool
  - https://github.com/LongSoft/UEFITool/blob/new_engine/LICENSE.md
  - https://github.com/LongSoft/UEFITool/releases
  - https://github.com/LongSoft/UEFITool/blob/new_engine/README.md
  - https://github.com/LongSoft/UEFITool/releases/tag/A76
  - https://github.com/LongSoft/UEFITool/blob/new_engine/UEFITool/uefitool.ui
assets:
  - path: ./assets/icon.png
    source: https://github.com/LongSoft/UEFITool/blob/new_engine/UEFITool/icons/uefitool.icns
    credit: "Nikolaj Schlej and UEFITool contributors"
    license: "BSD-2-Clause; upstream project asset, trademarks retained"
---

UEFITool opens a BIOS or UEFI firmware image, such as one read from a motherboard's BIOS chip, and parses it into a tree you can browse element by element. It checks the image's integrity, and you can pick any element and extract it to a file for closer study. Each release refreshes the bundled database of known UEFI-related GUIDs, compiled with help from the Linux Vendor Firmware Service.

Editing is the big gap. The current releases use the rewritten "new engine" parser, which handles newer formats such as FFSv3 volumes but cannot rebuild a modified image yet. Only the outdated UEFITool 0.28 on the old_engine branch can edit, and the project no longer supports it. Restoring image reconstruction is its top open issue.

Some vendor update files open incorrectly or not at all, including encrypted HP updates and Dell HDR and EXE files. Reading the image from the BIOS chip avoids this, because the copy there is already decrypted and unpacked. Release A76 notes that parsing of AMD images is still switched off.

The Mac download is a Universal disk image for Apple silicon and Intel. In release A76 the app inside is Developer ID-signed and notarized, and its binary targets macOS 11 or later; the disk image itself carries no signature.

Two command-line tools share the parser and ship as separate downloads. UEFIExtract dumps a parsed image to disk as a folder tree, and UEFIFind searches its elements for a pattern.
