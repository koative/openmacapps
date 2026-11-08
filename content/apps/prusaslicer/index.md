---
name: PrusaSlicer
summary: "Turns 3D models into print files for filament and resin printers, with printer profiles and a layer-by-layer preview."
category: Design
tags:
  - 3d-printing
  - slicer
  - fabrication
repository: https://github.com/prusa3d/PrusaSlicer
website: https://www.prusa3d.com/page/prusaslicer_424/
license: AGPL-3.0
licenseUrl: https://github.com/prusa3d/PrusaSlicer/blob/master/LICENSE
download: https://github.com/prusa3d/PrusaSlicer/releases
freeDownload: true
homebrew: "prusaslicer"
featured: false
added: 2026-10-17
verified: "2026-11-08"
screenshots: []
sources:
  - https://github.com/prusa3d/PrusaSlicer
  - https://github.com/prusa3d/PrusaSlicer/blob/master/LICENSE
  - https://github.com/prusa3d/PrusaSlicer/blob/master/README.md
  - https://github.com/prusa3d/PrusaSlicer/releases
  - https://raw.githubusercontent.com/prusa3d/PrusaSlicer/master/README.md
  - https://github.com/prusa3d/PrusaSlicer/releases/tag/version_2.9.7
  - https://www.prusa3d.com/page/prusaslicer_424/
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/prusa3d/PrusaSlicer/master/resources/icons/PrusaSlicer.icns", "credit": "PrusaSlicer contributors", "license": "AGPL-3.0; upstream project asset, trademarks retained"}]
---

PrusaSlicer turns a 3D model into the print instructions a printer follows, then sends the result to the machine. It handles both filament (FDM) printers and resin (mSLA) printers, and ships profiles for printers from many manufacturers besides Prusa.

You can set print parameters for the whole job or change them for single layers. Before slicing, objects can be painted, cut and arranged on the bed. Three modes, Simple, Advanced and Expert, decide how many settings the interface shows.

- One session can hold several projects, each with several beds that keep their own settings.
- Multi-material printing is supported.
- A 3D preview shows the generated toolpaths layer by layer before you print.
- A command-line interface runs slicing without the GUI, for scripted setups.

Slicing runs on the Mac and needs no account. Print files can go to a printer over the local network, and the optional PrusaConnect and Printables integrations add online services for those who want them. Profiles for Prusa printers and filaments update through the built-in updater.

The program grew out of Slic3r and is developed by Prusa Research under the AGPL-3.0. The GitHub DMG holds a Universal app for Apple silicon and Intel, signed and notarized, with macOS 10.13 set as its minimum version.
