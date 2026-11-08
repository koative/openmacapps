---
name: "GIMP"
summary: "Retouch photographs and build layered images with selection, painting, and editing tools."
category: "Design"
tags: ["image-editor", "photography", "graphics"]
alternativeTo: ["photoshop", "pixelmator-pro", "affinity", "photoshop-elements", "paint-net"]
repository: "https://github.com/GNOME/gimp"
website: "https://www.gimp.org/"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/GNOME/gimp/blob/master/COPYING"
download: "https://www.gimp.org/downloads/"
freeDownload: true
homebrew: "gimp"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/GNOME/gimp", "https://github.com/GNOME/gimp/blob/master/COPYING", "https://github.com/GNOME/gimp/blob/master/README", "https://raw.githubusercontent.com/GNOME/gimp/master/app/main.c", "https://www.gimp.org/", "https://www.gimp.org/about/", "https://www.gimp.org/downloads/", "https://www.gimp.org/release-notes/gimp-3.2.html", "https://docs.gimp.org/3.2/en/gimp-tools-selection.html"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://gitlab.gnome.org/GNOME/gimp-data/-/raw/main/images/logo/gimp-logo-macos.svg", "credit": "Aryeom, GIMP logo author; rendered to a 256px PNG from the upstream SVG", "license": "CC-BY-SA-4.0; https://creativecommons.org/licenses/by-sa/4.0/"}]
---

GIMP lets you retouch photos, combine images into composites and paint or draw from scratch, working in layers with selections and filters. Select part of an image and only that part changes.

Version 3.2 widens the set of layers you can keep editing later without reaching for Undo:

- Text layers, the one kind GIMP already had, stay editable.
- Link layers place an external file in the composition and update when that file changes in another editor.
- Vector layers turn a path into a shape with its own stroke and fill, and you can rotate, scale and transform them non-destructively.
- Filters can be applied non-destructively to layers, layer groups and channels. A filter on an empty group in pass-through mode affects everything below it, much like an adjustment layer.

Painting needs pixels. To paint over one of these layers you first rasterize it, and Revert Rasterize brings the editable version back. The MyPaint Brush tool sits beside GIMP's own brush engine, and an Overwrite paint mode suits pixel art.

Set against Photoshop, the difference GIMP itself can show is its license. The source is free software under the GPL, so you can change it and distribute your changes.

The macOS downloads are separate DMGs for Apple silicon and Intel and need macOS 11 Big Sur or newer. The GIMP team publishes nothing on the App Store. Any GIMP listing there comes from a third party unconnected to the project.
