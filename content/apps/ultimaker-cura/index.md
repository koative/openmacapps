---
name: UltiMaker Cura
summary: "Slices 3D models into G-code for a 3D printer, from recommended profiles or more than 400 detailed settings."
category: Design
tags:
  - 3d-printing
  - slicer
  - fabrication
repository: https://github.com/Ultimaker/Cura
website: https://ultimaker.com/software/ultimaker-cura/
license: LGPL-3.0
licenseUrl: https://github.com/Ultimaker/Cura/blob/main/LICENSE
download: https://github.com/Ultimaker/Cura/releases
freeDownload: true
homebrew: "ultimaker-cura"
featured: false
added: 2026-10-17
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/Ultimaker/Cura", "https://github.com/Ultimaker/Cura/blob/main/LICENSE", "https://raw.githubusercontent.com/Ultimaker/Cura/main/README.md", "https://ultimaker.com/software/ultimaker-cura/", "https://github.com/Ultimaker/Cura/releases/tag/5.14.0", "https://github.com/Ultimaker/Cura/wiki/Adding-new-machine-profiles-to-Cura"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/Ultimaker/Cura/blob/main/packaging/icons/cura-icon_256x256.png
    credit: UltiMaker Cura contributors
    license: LGPL-3.0; project trademarks remain with their owners
icon: ./assets/icon.png
---

Cura slices a 3D model into the layer-by-layer G-code that a printer follows. You load the model, pick your printer and a quality and speed, and the layer preview shows how each layer will print before you send the job.

Recommended profiles get a first print going in minutes. Intent profiles target a particular use at one click, and Custom mode opens more than 400 settings. Many printer profiles are managed by the community.

Version 5.14 added several changes you notice at once:

- painting support areas onto the model, to force, block or auto-generate supports
- distinct line colors for overhangs and bridges in the layer preview
- a tabbed layout for the settings panel
- start and end G-code templates that understand substring matches and lists

From the UltiMaker Marketplace you can download material profiles from other brands and plugins that change how prints are prepared. G-code files now record which CuraEngine plugins were active.

UltiMaker develops Cura and publishes it for free under the LGPL, version 3. Mac downloads come as a DMG or a PKG installer, each in separate builds for Apple silicon and Intel. The 5.14 release moved the interface to Qt 6.10, which gave the macOS version a new top bar.
