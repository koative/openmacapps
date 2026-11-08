---
name: Bambu Studio
summary: "Slices 3D models into printer files, with multi-plate projects, paint tools for multi-material prints and a G-code preview."
category: Design
tags:
  - 3d-printing
  - slicer
  - models
repository: https://github.com/bambulab/BambuStudio
website: https://bambulab.com/en/download/studio
license: AGPL-3.0
licenseUrl: https://github.com/bambulab/BambuStudio/blob/master/LICENSE
download: https://github.com/bambulab/BambuStudio/releases
freeDownload: true
homebrew: "bambu-studio"
featured: false
added: 2026-10-17
verified: "2026-11-08"
screenshots: []
sources:
  - https://github.com/bambulab/BambuStudio
  - https://github.com/bambulab/BambuStudio/blob/master/LICENSE
  - https://github.com/bambulab/BambuStudio/blob/master/README.md
  - https://github.com/bambulab/BambuStudio/releases
  - https://raw.githubusercontent.com/bambulab/BambuStudio/master/README.md
  - https://github.com/bambulab/BambuStudio/releases/tag/v02.09.01.70
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/bambulab/BambuStudio/master/resources/images/BambuStudio.icns
    credit: Bambu Lab; 256px PNG extracted from the upstream icns
    license: AGPL-3.0; upstream project asset, trademarks retained
---

Bambu Studio turns 3D models into print files. You load parts onto one or more build plates, set the material and print settings, slice, and check the result in the G-code viewer before printing.

Slicing settings can be set globally, per object or per part. The slicer can arrange and orient objects for you, and it generates normal, tree or hybrid supports, with custom supports as another option.

- Painting tools mark regions of a model for multi-material prints.
- STEP files can be imported, and assemblies can be shown in an exploded view.
- During a filament change, the transition material can be flushed into infill or into another object.
- Cooling logic controls fan speed and adjusts print speed, and brims are added automatically based on a mechanical analysis of the model.

Curved paths can be written as G2 and G3 arc moves.

The slicer is under the GNU AGPL 3.0 and builds on PrusaSlicer, which in turn comes from Slic3r. Releases include a macOS disk image next to Windows and Linux builds.

Bambu Lab's networking plugin, which adds extended network features, is optional and built on non-free libraries. Without it, you slice and then start the print from an SD card.
