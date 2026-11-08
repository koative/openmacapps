---
name: draw.io Desktop
summary: Create flowcharts, architecture diagrams, and other visual documents in
  an offline desktop editor.
category: Design
tags:
  - diagrams
  - flowcharts
  - offline
repository: https://github.com/jgraph/drawio-desktop
website: https://www.drawio.com/
license: GPL-3.0
licenseUrl: https://github.com/jgraph/drawio-desktop/blob/dev/LICENSE
download: https://github.com/jgraph/drawio-desktop/releases
freeDownload: true
homebrew: "drawio"
featured: false
added: 2026-10-17
verified: "2026-11-08"
screenshots: []
sources:
  - https://github.com/jgraph/drawio-desktop
  - https://github.com/jgraph/drawio-desktop/blob/dev/LICENSE
  - https://github.com/jgraph/drawio-desktop/blob/dev/README.md
  - https://github.com/jgraph/drawio-desktop/releases
  - https://github.com/jgraph/drawio-desktop/releases/tag/v32.6.10
  - https://www.drawio.com/
assets:
  - path: ./assets/icon.png
    source: https://github.com/jgraph/drawio-desktop/blob/dev/build/icon.png
    credit: draw.io Desktop contributors
    license: GPL-3.0; project trademarks remain with their owners
icon: ./assets/icon.png
---

draw.io Desktop opens and saves diagram files on your Mac, so you can drag shapes onto a canvas, join them with connectors and keep the result as a local file. The editor inside is the same one that runs at draw.io in a browser, wrapped in an Electron app.

The developers say no diagram content or usage analytics is ever sent out. The Content Security Policy blocks remotely loaded JavaScript and limits the app's network connections to itself. The one exception is the update check: each day the app looks on GitHub for a new release and fetches it in the background. You can switch that off under draw.io > Check for Updates Automatically, or set `DRAWIO_DISABLE_UPDATE=true` for managed installs.

One gap remains. A diagram can point to an image, background or font at a web address, and the app fetches those when the file opens. A file from a stranger can therefore show that server your IP address, though not the diagram itself.

Each release ships three disk images for the Mac: Apple silicon, Intel and Universal. The app needs macOS 13 or later and is notarized by Apple. It is free under the GPL v3, and the draw.io site says it needs no sign-up.
