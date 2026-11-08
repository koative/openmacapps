---
name: OrcaSlicer
summary: "Slices 3D models for printing, with printer profiles, calibration tests and detailed settings."
category: Design
tags:
  - 3d-printing
  - slicer
  - calibration
repository: https://github.com/OrcaSlicer/OrcaSlicer
website: https://orcaslicer.com/
license: AGPL-3.0
licenseUrl: https://github.com/OrcaSlicer/OrcaSlicer/blob/main/LICENSE.txt
download: https://github.com/OrcaSlicer/OrcaSlicer/releases
freeDownload: true
homebrew: "orcaslicer"
featured: false
added: 2026-10-17
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/OrcaSlicer/OrcaSlicer", "https://github.com/OrcaSlicer/OrcaSlicer/blob/main/LICENSE.txt", "https://github.com/OrcaSlicer/OrcaSlicer/blob/main/README.md", "https://github.com/OrcaSlicer/OrcaSlicer/releases", "https://github.com/OrcaSlicer/OrcaSlicer/releases/tag/v2.5.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/OrcaSlicer/OrcaSlicer/main/resources/Icon.icns", "credit": "OrcaSlicer contributors", "license": "AGPL-3.0; upstream project asset, trademarks retained"}]
---

OrcaSlicer slices 3D models into print jobs. You drag a model onto the plate, choose one of the pre-made printer profiles and tune the settings.

- Calibration routines cover temperature towers, flow rate, retraction and more, with a calibration guide in the project wiki.
- Wall and seam controls include precise outer-wall spacing and scarf seams.
- Support placement and overhang settings are tunable, along with speed, layer height, pressure and temperature.
- Mouse-ear brims and adaptive bed meshing help with adhesion.
- Belt printers and IDEX or IQEX machines that print several copies at once are supported.

Supported printer brands include Bambu Lab, Prusa, Creality and Voron. Klipper, PrusaLink and OctoPrint printers can be controlled over the network. Bambu Lab owners can add an optional networking plugin, which is built on non-free libraries from Bambu Lab.

OrcaSlicer started from BambuStudio and PrusaSlicer, which in turn build on Slic3r. It is licensed under the AGPL v3.

The Mac download is a single DMG for Apple silicon and Intel, and the project code-signs its release and nightly builds. Nightly builds carry the newest changes for testing. Look-alike sites such as orca-slicer.com and orcaslicer.net are not official; the project's own site is orcaslicer.com.
