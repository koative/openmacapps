---
name: "Spatial Slideshow"
summary: "Turns Photos albums into 3D spatial slideshows with Apple's own models, plus optional local edge expansion."
category: "Media"
tags:
  - photo-library
  - images
  - 3d
repository: "https://github.com/elliotttate/SpatialSlideshow"
website: "https://github.com/elliotttate/SpatialSlideshow"
license: "MIT"
licenseUrl: "https://github.com/elliotttate/SpatialSlideshow/blob/main/LICENSE"
download: "https://github.com/elliotttate/SpatialSlideshow/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/elliotttate/SpatialSlideshow"
  - "https://github.com/elliotttate/SpatialSlideshow/blob/main/LICENSE"
  - "https://github.com/elliotttate/SpatialSlideshow/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/elliotttate/SpatialSlideshow/main/Assets/SpatialSlideshow.iconset/icon_512x512%402x.png"
    credit: "Elliott Tate and Spatial Slideshow contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Spatial Slideshow builds slideshows from albums in Apple Photos and shows each photo with depth, using the spatial reframing model assets that macOS already provides. An optional edge-expansion step extends a picture's borders, either with the Clean Up assets in Photos or with a local FLUX model that the app downloads on first use. It is aimed at people who want their own albums shown with depth rather than as a flat slideshow.

The app requires an Apple silicon Mac running macOS 27; the release zip is arm64 only. Photos must have the spatial model assets for your Mac, and the app asks macOS for them. Optional local models need about 16 GB of free disk space. The developer says the Apple frameworks it relies on were verified only on one macOS 27 machine, and later system updates may break it. The release is notarized.
