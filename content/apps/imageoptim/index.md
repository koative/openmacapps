---
name: ImageOptim
summary: "Shrinks image files by running several optimizers on them and stripping private metadata."
category: Media
tags:
  - images
  - compression
  - optimization
repository: https://github.com/ImageOptim/ImageOptim
website: https://imageoptim.com/mac
license: GPL-2.0-or-later
licenseUrl: https://github.com/ImageOptim/ImageOptim/blob/main/LICENSE
download: https://imageoptim.com/mac
freeDownload: true
homebrew: "imageoptim"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/ImageOptim/ImageOptim", "https://github.com/ImageOptim/ImageOptim/blob/main/LICENSE", "https://github.com/ImageOptim/ImageOptim/blob/main/README.md", "https://imageoptim.com/mac"]
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ImageOptim/ImageOptim/main/imageoptim/ImageOptim.icns
    credit: Kornel Lesiński and ImageOptim contributors; 512px icns image downscaled to 256px PNG
    license: GPL-2.0-or-later; upstream project asset, trademarks retained
screenshots: []
---

Drag images onto ImageOptim's window and it runs several optimizers on each file and combines their results into the smallest file. By default the image looks exactly the same afterwards.

The optimizers include Zopfli, PNGOUT, OxiPNG, AdvPNG, Pngcrush, JPEGOptim, Jpegtran, Guetzli, Gifsicle, SVGO and svgcleaner. PNGOUT is bundled with its author's permission and is not covered by the GPL. On large PNG files, turning off PNGOUT and Zopfli in Preferences speeds things up at a small cost in size.

ImageOptim also strips EXIF data such as GPS position and camera serial number, along with embedded thumbnails, comments and unneeded color profiles. You can keep the metadata by unchecking Strip JPEG metadata.

- Lossy minification trades a little quality for much smaller JPEG, PNG, SVG and animated GIF files.
- Files dropped on the Dock icon are processed the same way.
- The Services menu in Finder sends images to it.
- A command-line interface and a Sketch plugin cover scripted and design workflows.

ImageOptim is not sold on the App Store, and the developer warns that copies there are knock-offs. The official download is a .tbz2 archive from imageoptim.com. The site lists macOS 11 or later, and version 1.9.3 inside is a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.
