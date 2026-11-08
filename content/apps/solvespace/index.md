---
name: "SolveSpace"
summary: "Creates constrained sketches and parametric 3D parts in a compact CAD application."
category: "Design"
tags: ["cad", "parametric", "3d-modeling"]
alternativeTo: ["autodesk-fusion"]
repository: "https://github.com/solvespace/solvespace"
website: "https://solvespace.com/"
license: "GPL-3.0"
licenseUrl: "https://github.com/solvespace/solvespace/blob/master/COPYING.txt"
download: "https://github.com/solvespace/solvespace/releases"
freeDownload: true
homebrew: "solvespace"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/solvespace/solvespace", "https://github.com/solvespace/solvespace/blob/master/COPYING.txt", "https://github.com/solvespace/solvespace/blob/master/README.md", "https://github.com/solvespace/solvespace/releases", "https://solvespace.com/", "https://github.com/solvespace/solvespace/releases/tag/v3.3"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/solvespace/solvespace/blob/master/res/cocoa/AppIcon.iconset/icon_256x256.png", "credit": "SolveSpace contributors", "license": "GPL-3.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

SolveSpace is parametric CAD: you draw sketches, tie them down with dimensions and constraints, and a constraint solver works out the geometry that follows from them.

Sketches become 3D parts through extrude, revolve and helix operations, combined with Boolean union, difference and intersection. The output goes in several directions:

- Flat parts drawn as a single section export to DXF, PDF or SVG.
- 3D printing takes an STL or another triangle mesh.
- Laser and waterjet cutting take 2D vector art, and STEP or STL files go to separate CAM software for machining.
- Assemblies check that parts fit, and the same solver simulates linkages, flat or in 3D, joined by pins, ball joints or sliders.

The solver also handles plane and solid geometry problems. Draw the figure, set the known dimensions, and read the unknown ones off a live drawing in place of hand-worked trigonometry or a spreadsheet. The website has tutorials, a reference manual and a version that runs in the browser.

The 3.3 release for Mac is a DMG with a Universal app for Apple silicon and Intel, built for macOS 11 or later and notarized. Inside the app bundle sits `solvespace-cli`, a command-line companion.

Autodesk Fusion is another program for designing 3D parts. SolveSpace covers that job with the sketch-and-constrain workflow above, and its source is available under the GPLv3.
