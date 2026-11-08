---
name: KiCad
summary: "Draws electronic schematics, lays out printed circuit boards and shows the finished board in 3D."
category: Design
tags:
  - electronics
  - pcb
  - cad
repository: https://github.com/KiCad/kicad-source-mirror
website: https://www.kicad.org/
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/KiCad/kicad-source-mirror/blob/master/LICENSE
download: https://www.kicad.org/download/macos/
freeDownload: true
homebrew: "kicad"
featured: false
added: 2026-10-17
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/KiCad/kicad-source-mirror", "https://github.com/KiCad/kicad-source-mirror/blob/master/LICENSE", "https://raw.githubusercontent.com/KiCad/kicad-source-mirror/master/pcbnew/pcbnew.cpp", "https://www.kicad.org/", "https://www.kicad.org/download/macos/", "https://www.kicad.org/help/system-requirements/"]
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/KiCad/kicad-source-mirror/master/resources/bitmaps_png/png/icon_kicad_256.png
    credit: KiCad developers
    license: GPL-3.0; upstream project asset, trademarks retained
---

KiCad takes a circuit from schematic to a finished printed circuit board. You draw the schematic, lay out and route the board, and inspect the result in 3D, all inside one suite.

- The Schematic Editor handles anything from one sheet to a hierarchical design with hundreds of them. You can draw your own symbols or pick from the thousands in the official library.
- A built-in SPICE simulator and an electrical rules checker test the circuit before layout.
- The PCB Editor has an interactive router plus visualization and selection tools for complex boards.
- The 3D Viewer checks mechanical fit, and its raytracer renders realistic images of the board.
- A Gerber Viewer is included as well.

KiCad 10.0.8 supports macOS 12 and later. The project only supports the macOS versions Apple still updates, which in practice means the three newest. A bug seen on an older system has to be reproduced on a supported one before it gets looked at.

The macOS download comes from mirrors run by GitHub, CERN, MIT and others. Testing builds of the next bugfix release and nightly development builds sit on the same page. Nightlies can carry more bugs than usual.

KiCad also runs on Windows and Linux. The code is GPL, version 3 or later, and donations to the project can be made through The Linux Foundation.
