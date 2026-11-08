---
name: OpenSCAD
summary: Builds solid 3D CAD models from a script, so a part's dimensions can be changed by editing parameters.
category: Design
tags:
  - cad
  - 3d-modeling
  - parametric
repository: https://github.com/openscad/openscad
website: https://openscad.org/
license: GPL-2.0-or-later
licenseUrl: https://github.com/openscad/openscad/blob/master/COPYING
download: https://openscad.org/downloads.html
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
screenshots: []
sources:
  - https://github.com/openscad/openscad
  - https://github.com/openscad/openscad/blob/master/COPYING
  - https://github.com/openscad/openscad/blob/master/README.md
  - https://openscad.org/downloads.html
  - https://openscad.org/
  - https://raw.githubusercontent.com/openscad/openscad/master/src/openscad.cc
  - https://files.openscad.org/snapshots/.snapshots.js
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/openscad/openscad/master/resources/icons/openscad-macos.png", "credit": "OpenSCAD contributors", "license": "GPL-2.0; upstream project asset, trademarks retained"}]
---

OpenSCAD builds 3D models from code. You type a script in the editor on the left, press F5, and the rendered object appears in the viewer on the right. Change a number in the script, render again, and the part takes the new size.

That makes it a fit for machine parts and other designs defined by measurements, where you want to tweak any step or produce variants from configurable parameters. There is no dragging or sculpting of geometry by hand; the script is the model.

The language and file support cover:

- Constructive solid geometry: primitives such as cylinders and spheres are combined by union, intersection and difference.
- Transformations like translate, rotate and scale place each piece.
- Extrusion turns 2D outlines into solids, with DXF files as the exchange format for those outlines.
- DXF files can also supply design parameters, and STL and OFF files can be read and written.

The stable release on the downloads page is an Intel build for OS X 10.9 or later. Development snapshots are Universal apps for Apple silicon and Intel and need macOS 12 Monterey or later. The snapshot DMG is notarized, and in Preferences you can turn on the newer Manifold geometry engine for faster rendering. You can also install OpenSCAD through MacPorts, or the snapshot through Homebrew.

Source files carry the GPL version 2 or later, with an extra permission to link against the CGAL library.
