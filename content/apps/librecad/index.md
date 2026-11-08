---
name: "LibreCAD"
summary: "Draws and edits 2D technical drawings in DXF, with layers, blocks, dimensions and snapping."
category: "Design"
tags: ["cad", "2d-drawing", "drafting"]
alternativeTo: ["autocad"]
repository: "https://github.com/LibreCAD/LibreCAD"
website: "https://librecad.org/"
license: "GPL-2.0-only"
licenseUrl: "https://github.com/LibreCAD/LibreCAD/blob/master/LICENSE"
download: "https://github.com/LibreCAD/LibreCAD/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/LibreCAD/LibreCAD", "https://github.com/LibreCAD/LibreCAD/blob/master/LICENSE", "https://github.com/LibreCAD/LibreCAD/blob/master/README.md", "https://github.com/LibreCAD/LibreCAD/releases", "https://github.com/LibreCAD/LibreCAD/releases/tag/v2.2.1.6", "https://librecad.org/", "https://librecad.readthedocs.io/en/latest/ref/tools.html", "https://librecad.readthedocs.io/en/latest/ref/widgets.html", "https://www.autodesk.com/products/autocad/overview"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/LibreCAD/LibreCAD/blob/master/desktop/media/icons/librecad_icon.svg", "credit": "LibreCAD contributors", "license": "GPL-2.0-only; project trademarks remain with their owners"}]
icon: "./assets/icon.svg"
---

LibreCAD draws and edits 2D technical drawings. You place lines, circles, arcs, ellipses, curves and polylines with snapping, add dimensions, and organize the result in layers and blocks. Commands come from menus and toolbars, or you type them into a command line.

It works with DXF files, and the libdxfrw library also lets it read DWG. ESRI Shapefiles import as native entities, with layers taken from the DBF data. The interface is translated into more than 30 languages.

The same program converts drawings without opening the editor. `librecad dxf2pdf -a` fits a drawing onto a PDF page, other commands write PNG or SVG, and several inputs can go into one PDF. Converting DWG files needs a build compiled with DWG support.

Version 2.2.1.6 has separate Mac DMGs for Apple silicon and Intel. They carry only an ad-hoc signature, so macOS blocks the first launch with a warning that it could not verify the app. Open LibreCAD once, dismiss the dialog, then click Open Anyway under Privacy & Security in System Settings.

AutoCAD, from Autodesk, covers 2D drafting and 3D modelling, adds AI-assisted tools and specialized toolsets, and is sold as a subscription. LibreCAD stays with 2D drafting under the GPLv2, with no trials, subscriptions or license fees. It descends from the community edition of QCAD.
