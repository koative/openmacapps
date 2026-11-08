---
name: darktable
summary: Catalogues RAW photos in a lighttable and develops them in a darkroom
  with nondestructive edits.
category: Design
tags:
  - photography
  - raw-editor
  - color
  - photo-library
alternativeTo:
  - lightroom
  - capture-one
  - luminar-neo
  - acdsee
repository: https://github.com/darktable-org/darktable
website: https://www.darktable.org/
license: GPL-3.0-or-later
licenseUrl: https://github.com/darktable-org/darktable/blob/master/LICENSE
download: https://www.darktable.org/install/
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
screenshots: []
sources:
  - https://github.com/darktable-org/darktable
  - https://github.com/darktable-org/darktable/blob/master/LICENSE
  - https://github.com/darktable-org/darktable/blob/master/README.md
  - https://www.darktable.org/install/
  - https://raw.githubusercontent.com/darktable-org/darktable/master/README.md
  - https://raw.githubusercontent.com/darktable-org/darktable/master/src/common/darktable.c
  - https://github.com/darktable-org/darktable/releases/tag/release-5.6.2
assets:
  - path: ./assets/icon.png
    source: https://github.com/darktable-org/darktable/blob/master/data/pixmaps/dt_logo_128x128.png
    credit: darktable contributors
    license: GPL-3.0; project trademarks remain with their owners
icon: ./assets/icon.png
---

darktable keeps your RAW files in a database and splits the work between two views. The lighttable shows your images as a zoomable grid. In the darkroom you develop and enhance an image, then export the result to a folder on disk or to remote storage. Edits are nondestructive, so the raw file itself is never changed.

Freshly imported RAW files show the JPEG preview your camera embedded, because it loads faster. That preview carries the camera's own processing, so it can look different from the darkroom until you edit the image; after that the thumbnail matches. A preference in the lighttable settings turns the embedded previews off. Lens corrections come from Lensfun profiles, and scripting uses a Lua API with its own documentation.

The Mac download is a disk image for Apple silicon only, and the install page supports macOS 13.5 or later. The project recommends 8 GB of RAM. A GPU is optional but strongly recommended, and modules such as denoise, retouch and liquify slow to a crawl on light hardware. Development happens on Linux, and the developers warn that other platforms may have bugs the Linux version does not.

If you are moving from Adobe Lightroom, note that the README says plainly darktable is not a free Lightroom replacement.
