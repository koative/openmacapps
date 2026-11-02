---
name: "Creality Print"
summary: "Creality's open-source FDM slicer with printer profiles, calibration tools and Klipper support, derived from OrcaSlicer."
category: "Design"
tags:
  - 3d-printing
  - slicer
  - calibration
repository: https://github.com/CrealityOfficial/CrealityPrint
website: https://www.creality.com/pages/download-software
license: "AGPL-3.0"
licenseUrl: https://github.com/CrealityOfficial/CrealityPrint/blob/master/LICENSE.txt
download: https://github.com/CrealityOfficial/CrealityPrint/releases/latest
homebrew: "creality-print"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/CrealityOfficial/CrealityPrint
  - https://github.com/CrealityOfficial/CrealityPrint/blob/master/LICENSE.txt
  - https://github.com/CrealityOfficial/CrealityPrint/releases/latest
  - https://www.creality.com/pages/download-software
assets:
  - path: ./assets/icon.png
    source: https://github.com/CrealityOfficial/CrealityPrint/blob/master/resources/Icon.icns
    credit: "Creality"
    license: "AGPL-3.0 repository asset; Creality trademarks retained"
---

Creality Print turns 3D models into G-code for filament (FDM) printers. You arrange parts on the build plate, choose printer, filament and process profiles, add supports, and preview each layer's toolpaths before sending the job to a printer or saving it to a file. It includes automatic calibration routines, a sandwich wall-ordering mode, polyhole conversion and support for Klipper-based printers.

Creality, the printer maker, publishes it and tunes it for its own machines, but other brands' profiles are included. The code is a fork of OrcaSlicer, which descends from Bambu Studio, PrusaSlicer and Slic3r, and keeps their AGPL-3.0 license. An optional networking plugin for Bambu Lab printers is based on non-free libraries.

macOS builds come as separate DMGs for Apple silicon and Intel.
