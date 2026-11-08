---
name: "Hex Fiend"
summary: "A fast hex editor that handles very large files, compares binaries and decodes structures with templates."
category: "Developer tools"
tags:
  - hex-editor
  - inspection
  - files
repository: https://github.com/HexFiend/HexFiend
website: https://hexfiend.com/
license: "BSD-2-Clause"
licenseUrl: https://github.com/HexFiend/HexFiend/blob/master/License.txt
download: https://github.com/HexFiend/HexFiend/releases
freeDownload: true
homebrew: "hex-fiend"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/HexFiend/HexFiend
  - https://github.com/HexFiend/HexFiend/blob/master/License.txt
  - https://github.com/HexFiend/HexFiend/releases
  - https://hexfiend.com/
  - https://github.com/HexFiend/HexFiend/blob/master/README.md
  - https://github.com/HexFiend/HexFiend/releases/tag/v2.18.1
  - https://github.com/HexFiend/HexFiend/tree/master/templates
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/HexFiend/HexFiend/master/app/resources/hex_icon.icns
    credit: "Peter Ammon and Hex Fiend contributors"
    license: "BSD-2-Clause; upstream app icon, trademarks retained"
---

Hex Fiend opens a file of any size, shows its bytes in hex, and lets you edit them in place or change the file's length. Files are read from disk as needed instead of being loaded into memory, and the project says huge files open and scroll instantly. The project says it has been tested with a 118 GB file.

- You can insert and delete bytes as well as overwrite them, and copy or move ranges around.
- Copy, paste and search stay quick on very large files.
- Opening two files and choosing File > Compare shows their differences, taking inserted and deleted bytes into account.
- The data inspector reads the selected bytes as signed or unsigned integers or floating-point numbers, in big- or little-endian order.
- Binary templates, small Tcl scripts, describe a file format and show each field of the structure next to the bytes.

Saving writes only the regions that changed, and it does not need temporary disk space, so a huge file can be saved on a nearly full disk. The hex and data views also ship as a framework under the same two-clause BSD license, so other Mac apps can embed them.

Version 2.18.1 needs macOS 10.14.6 or later. The DMG on the releases page holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.
