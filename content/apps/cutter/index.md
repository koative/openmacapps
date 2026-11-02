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
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/rizinorg/cutter
  - https://github.com/rizinorg/cutter/blob/dev/COPYING
  - https://github.com/rizinorg/cutter/releases
  - https://cutter.re
assets:
  - path: ./assets/icon.png
    source: https://github.com/rizinorg/cutter/blob/dev/dist/macos/cutter.icns
    credit: "Cutter contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Cutter is a graphical front end to rizin, the reverse engineering framework forked from radare2. You load a binary and work through disassembly, control-flow graphs, hex views, strings, imports and cross-references, renaming functions and adding comments as your understanding grows.

Release builds include a native integration of Ghidra's decompiler that does not need Java. A debugger for local and remote targets is marked beta. Cutter can be extended with Python or native C++ plugins, and the project keeps a list of official and community ones.

Separate Apple silicon and Intel disk images are published with each release on GitHub.
