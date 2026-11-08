---
name: "Cutter"
summary: "A reverse engineering platform built on rizin, with disassembly, graphs, a decompiler, debugging and Python or C++ plugins."
category: "Developer tools"
tags:
  - reverse-engineering
  - disassembler
  - debugging
  - security
  - cross-platform
repository: https://github.com/rizinorg/cutter
website: https://cutter.re
license: "GPL-3.0"
licenseUrl: https://github.com/rizinorg/cutter/blob/dev/COPYING
download: https://github.com/rizinorg/cutter/releases/latest
homebrew: "cutter"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/rizinorg/cutter
  - https://github.com/rizinorg/cutter/blob/dev/COPYING
  - https://github.com/rizinorg/cutter/releases
  - https://cutter.re
  - https://raw.githubusercontent.com/rizinorg/cutter/dev/README.md
  - https://github.com/rizinorg/cutter/releases/tag/v2.5.0
  - https://cutter.re/docs/user-docs/menus.html
  - https://cutter.re/docs/user-docs/menus/disassembly-context-menu.html
assets:
  - path: ./assets/icon.png
    source: https://github.com/rizinorg/cutter/blob/dev/dist/macos/cutter.icns
    credit: "Cutter contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Cutter opens an executable as disassembly, a control-flow graph or raw bytes, and you rename functions and add comments as you work out what the code does. It is a graphical front end to rizin, the reverse engineering framework, and its built-in rizin console takes rizin commands directly.

- Release builds include Ghidra's decompiler as a native plugin, so no Java install is needed.
- The hex editor lets you change any byte, and patching works on bytes or whole instructions.
- Emulation steps through code for automation, crypto routines or malware analysis.
- The debugger handles local and remote targets, including kernel debugging, and is still marked beta.
- Python scripts automate repeated steps, and plugins in Python or C++ add features.

Version 2.5.0 has separate disk images for Apple silicon and Intel Macs on GitHub, and Homebrew installs Cutter as a cask. The Apple silicon app in that release is signed with a Developer ID and notarized, though the disk image around it is unsigned. Cutter is licensed under the GPLv3 and also runs on Linux and Windows.

Other views list strings, imports, types and structures, and a search widget looks through the binary. A mini-graph overview lets you move around a function graph quickly. Four themes ship with the app, and a theme editor lets you build your own. The project keeps a list of official and community plugins on GitHub.

