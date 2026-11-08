---
name: "Inkscape"
summary: "Draws vector illustrations, diagrams and logos and saves them as SVG files that scale to any size."
category: "Design"
tags: ["vector", "illustration", "svg"]
alternativeTo: ["affinity"]
repository: "https://gitlab.com/inkscape/inkscape"
website: "https://inkscape.org/"
license: "GPL-2.0-or-later"
licenseUrl: "https://gitlab.com/inkscape/inkscape/-/blob/master/COPYING"
download: "https://inkscape.org/release/"
freeDownload: true
homebrew: "inkscape"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://gitlab.com/inkscape/inkscape", "https://gitlab.com/inkscape/inkscape/-/blob/master/COPYING", "https://gitlab.com/inkscape/inkscape/-/raw/master/README.md", "https://inkscape.org/release/", "https://inkscape.org/release/inkscape-1.4.4/", "https://inkscape.org/release/inkscape-1.4.4/mac-os-x/", "https://www.affinity.studio/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://gitlab.com/inkscape/inkscape/-/raw/master/share/icons/application/256x256/org.inkscape.Inkscape.png", "credit": "Andrew Michael Fitzsimon, Inkscape logo author; Inkscape Project", "license": "CC-BY-SA-3.0; https://creativecommons.org/licenses/by-sa/3.0/; Inkscape trademark policy applies"}]
---

Inkscape draws with shapes, paths and text, and keeps the result as SVG, so a logo or diagram prints sharply at any size. You open a drawing, pull nodes around with the node editor, and save a file that web browsers can display directly.

- Layers and grouping keep a large drawing in order.
- Path operations combine, cut and subtract shapes from each other.
- Text can follow a path, and markers on lines help with diagrams and flowcharts.
- Gradients, clones, transparency and transforms come from SVG itself.
- A built-in XML editor lets you edit the SVG markup itself.

Imports cover EPS, PostScript, JPEG, PNG, BMP and TIFF. Exports include PNG and several vector formats. Many of those converters are Python extensions, and on macOS extensions stop working when Inkscape is launched from the command line, a known issue in release 1.4.4.

The macOS download page has two disk images, one for Apple silicon and one for Intel Macs. The source code is mostly GPL-2.0-or-later, and the complete binaries fall under GPL 3 or later because of bundled libraries.

Affinity combines vector design, photo editing and page layout in one app. Inkscape covers the vector part alone, with SVG as the file you keep.
