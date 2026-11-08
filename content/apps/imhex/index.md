---
name: ImHex
summary: A hex editor for reverse engineering, with a C++-like pattern language for
  decoding and highlighting binary formats.
category: Developer tools
tags:
- inspection
- debugging
- cross-platform
repository: https://github.com/WerWolv/ImHex
website: https://imhex.werwolv.net
license: GPL-2.0-only AND LGPL-2.1
licenseUrl: https://github.com/WerWolv/ImHex/blob/master/LICENSE
download: https://imhex.download
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/WerWolv/ImHex
- https://github.com/WerWolv/ImHex/blob/master/LICENSE
- https://github.com/WerWolv/ImHex/blob/master/lib/libimhex/LICENSE
- https://github.com/WerWolv/ImHex/releases
- https://imhex.download
- https://imhex.werwolv.net
- https://github.com/WerWolv/ImHex/blob/master/README.md
- https://github.com/WerWolv/ImHex/releases/tag/v1.38.1
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/WerWolv/ImHex/master/resources/dist/macos/AppIcon.icns
  credit: WerWolv and ImHex contributors
  license: GPL-2.0-only; upstream project asset, trademarks retained
---

ImHex opens files, raw disks, process memory and other data sources as hex, and lets you patch them byte by byte with unlimited undo and patch management. Its pattern language uses a C-like syntax to describe structs, unions, arrays, pointers and bitfields. When a pattern runs, ImHex parses the data and colours each field in the hex view, and patterns can load on their own by MIME type or magic value.

- A data inspector reads the bytes at the cursor as integers, floats, LEB128, strings, timestamps, GUIDs or colours, and can write new values back.
- A node-based data processor decrypts or decodes data for display without touching the source.
- Searches cover strings, byte sequences with wildcards, regular expressions and numeric ranges.
- A disassembler built on Capstone handles ARM, x86, MIPS, PowerPC and many other architectures.
- Diffing compares two data sources, and YARA rules highlight their matches.
- Hashes, entropy graphs and file-type detection are built in.

The macOS release needs macOS 15 or later. Apple silicon and Intel get separate disk images, plus a slower, software-rendered Intel variant labelled NoGPU for systems without OpenGL 3.0 graphics. None of them is signed, so you allow the app in Privacy & Security settings before it opens. Most of the code is GPL-2.0-only. The plugin library and the UI plugin are LGPL-2.1 so that plugins can be proprietary.

Besides files and disks, ImHex reads from a GDB server, Intel Hex or SREC files, and remote files over SFTP. A built-in content updater downloads pattern files, YARA rules, themes and other additions from the ImHex-Patterns database.
