---
name: "Redlamp"
summary: "An alpha-stage RAW photo developer modelled on Lightroom’s Develop workspace, with masking and film looks."
category: "Design"
tags:
  - photography
  - raw-editor
  - images
alternativeTo:
  - lightroom
  - capture-one
repository: https://github.com/pdcgomes/redlamp
website: https://redlamp.app
license: "MPL-2.0"
licenseUrl: https://github.com/pdcgomes/redlamp/blob/main/LICENSE
download: https://github.com/pdcgomes/redlamp/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/pdcgomes/redlamp
  - https://github.com/pdcgomes/redlamp/blob/main/LICENSE
  - https://github.com/pdcgomes/redlamp/releases
  - https://raw.githubusercontent.com/pdcgomes/redlamp/main/README.md
  - https://github.com/pdcgomes/redlamp/releases/tag/v0.3.5-alpha
  - https://redlamp.app
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/pdcgomes/redlamp/main/docs/brand/images/app-icon.png
    credit: "Pedro Gomes and Redlamp contributors"
    license: "MPL-2.0 repository asset; Redlamp name and logo retained by the project"
---

Redlamp opens your RAW files from folders on your disk and develops them in a workspace laid out like Lightroom's Develop module, with the same panel order, slider names and single-key shortcuts. Edits go into small sidecar files beside each photo, so the originals stay untouched.

- Global panels cover tone curves, color grading and the color mixer, Basic tone with Texture, Clarity and Dehaze, sharpening and noise reduction, lens corrections, Effects, Upright and cropping.
- Masks combine gradients, brush strokes, color and luminance ranges, and on-device Subject, Sky, People and Objects selections, each with its own local adjustments.
- Heal, Clone and Remove clean up spots, and Remove can take out a whole person or object you click.
- Focus stacking spots bracketed frames in a folder and merges them into a result you keep editing like a raw.
- Base Looks and Recipes stand in for profiles and presets, including film simulations of 36 looks from 30 stocks.

The developer tests it with raw files from Canon (CR3), Fujifilm (RAF), Nikon (NEF) and Sony (ARW) cameras, plus Apple ProRAW and Pixel DNG, and it also opens JPEG, HEIC, TIFF and PNG. Albums from Apple Photos can sit in the library beside your folders.

The project is in alpha and changes quickly. It needs an Apple silicon Mac with macOS 26 or later. Releases come as a signed and notarized app on GitHub or through the project's own Homebrew tap, and they update themselves through Sparkle. Versions for iPad and iPhone are planned on the same engine.
