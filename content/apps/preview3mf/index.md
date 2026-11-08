---
name: "Preview3MF"
summary: "Quick Look previews and Finder thumbnails for 3MF print files, rendered in 3D without opening a slicer."
category: "Utilities"
tags:
  - quick-look
  - 3d-printing
  - previews
  - finder
repository: https://github.com/cavoco/Preview3MF
website: https://cavoco.github.io/Preview3MF/
license: "MIT"
licenseUrl: https://github.com/cavoco/Preview3MF/blob/main/LICENSE
download: https://github.com/cavoco/Preview3MF/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/cavoco/Preview3MF
  - https://github.com/cavoco/Preview3MF/blob/main/LICENSE
  - https://github.com/cavoco/Preview3MF/releases
  - https://cavoco.github.io/Preview3MF/
  - https://raw.githubusercontent.com/cavoco/Preview3MF/main/README.md
  - https://github.com/cavoco/Preview3MF/releases/tag/v1.0.27
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/cavoco/Preview3MF/main/Preview3MF/Assets.xcassets/AppIcon.appiconset/3mf.png
    credit: "Cavan O'Connor and Preview3MF contributors"
    license: "MIT repository asset; name and logo retained by the author"
---

Preview3MF lets you press Space on a `.3mf` file in Finder and turn the model around in 3D without opening a slicer. A second extension draws Finder icons for those files, reusing the preview image a slicer embedded when one exists.

- The model spins on a turntable. A button pauses it, and you can orbit and zoom with a mouse or trackpad.
- An overlay gives triangle and object counts and the model's dimensions.
- Bambu Studio and OrcaSlicer projects sit on the printer's own bed in their filament colours, with printer, nozzle, layer height and infill listed. After slicing, the overlay adds estimated print time and filament weight.
- Projects with several plates show one plate at a time, with a control to page between them.
- Files with several mesh objects or component assemblies, from Bambu Studio, PrusaSlicer and others, are handled.

The brush tool's colour painting, applied to a region within one mesh, is not read yet; colours assigned per object are. Boolean negative parts are left out of the render.

After moving the app to Applications, open it once, then turn on PreviewExtension and ThumbnailExtension under Privacy & Security, Extensions, Quick Look in System Settings. If Quick Look ignores the files, `qlmanage -r` resets its cache. You can also drop a file onto the app window, where the arrow keys step between plates.

The release is a ZIP with a Universal app for Apple silicon and Intel, Developer ID-signed and notarized, and it needs macOS 13 or later. From version 1.0.18 the app updates itself through Sparkle and checks each download's signature before installing.
