---
name: FreeCAD
summary: "Parametric 3D modeler that turns constrained 2D sketches into solid parts and production drawings."
category: Design
tags:
  - cad
  - 3d-modeling
  - parametric
alternativeTo:
  - autodesk-fusion
  - autocad
  - sketchup
repository: https://github.com/FreeCAD/FreeCAD
website: https://www.freecad.org/
license: "LGPL-2.1-or-later"
licenseUrl: https://github.com/FreeCAD/FreeCAD/blob/main/LICENSE
download: https://github.com/FreeCAD/FreeCAD/releases
freeDownload: true
homebrew: "freecad"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/FreeCAD/FreeCAD", "https://github.com/FreeCAD/FreeCAD/blob/main/LICENSE", "https://github.com/FreeCAD/FreeCAD/blob/main/README.md", "https://github.com/FreeCAD/FreeCAD/releases", "https://www.freecad.org/downloads.php", "https://raw.githubusercontent.com/FreeCAD/FreeCAD/main/src/App/Document.cpp", "https://github.com/FreeCAD/FreeCAD/releases/tag/1.1.4", "https://www.sketchup.com/en/plans-and-pricing", "https://www.freecad.org/"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/FreeCAD/FreeCAD/blob/main/src/Gui/Icons/freecad.svg", "credit": "FreeCAD contributors", "license": "LGPL-2.1-or-later; project trademarks remain with their owners"}]
icon: "./assets/icon.svg"
---

FreeCAD builds 3D models from a history of features. You sketch a 2D shape, constrain its lines and dimensions, and turn it into a solid. Change a parameter later and the model rebuilds from it. Finished parts become production drawings.

Tools are grouped into workbenches for jobs such as product design, mechanical engineering and architecture. Extra workbenches and macros install from inside the app through the Addon Manager. A Python API and macro recording let you script repeated steps.

Files move in and out through open formats, including STEP, IGES, STL, SVG, DXF, OBJ, IFC and DAE. Geometry comes from the OpenCASCADE kernel, and the interface is built with Qt.

Version 1.1.4 is the last planned maintenance release of the 1.1 series. It fixes two vulnerabilities triggered by opening a crafted FCStd file, so update before you open models from unknown sources. Separate disk images are published for Apple silicon and Intel, and macOS 12 Monterey is the minimum. Weekly development builds let you try new work early, but the project says they are not fit for production use, so back up your files.

The website promises no sign-up and no paywall. SketchUp's desktop app comes with its paid annual plans, and its Go plan runs only on iPad and the web. FreeCAD is free on the desktop under the LGPL 2.1 or later.
