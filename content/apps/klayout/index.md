---
name: "KLayout"
summary: "Views and edits integrated-circuit layouts with layer controls, geometry tools and scripting."
category: "Design"
tags: ["electronics", "layout", "engineering"]
repository: "https://github.com/KLayout/klayout"
website: "https://www.klayout.de/"
license: "GPL-3.0"
licenseUrl: "https://github.com/KLayout/klayout/blob/master/LICENSE"
download: "https://www.klayout.de/build.html"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/KLayout/klayout", "https://github.com/KLayout/klayout/blob/master/LICENSE", "https://github.com/KLayout/klayout/blob/master/README.md", "https://www.klayout.de/build.html", "https://www.klayout.de/intro.html"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/KLayout/klayout/blob/master/src/icons/images/logo%402x.png", "credit": "KLayout contributors", "license": "GPL-3.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

KLayout opens chip layout files in GDS and OASIS format so you can inspect, compare and edit them. Several layouts can be loaded into one window and stacked, which helps when the layers you need arrive in separate files.

- Layers can be grouped, renamed, made transparent, dimmed or animated to blink, with fill patterns and colors set per layer.
- Rulers, shape and instance browsers, bookmarks and a marker browser for error report files help with inspection.
- Editor mode draws and changes shapes and cells, with unlimited undo, boolean operations, sizing and parametrized cells (PCells).
- DRC and LVS functions, an XOR tool and a layout diff tool cover verification.

The Mac downloads are DMGs built for particular macOS releases. Apple silicon packages target Tahoe (26.1) and GoldenGate (27.2), and Intel packages target Sonoma and Sequoia. The ST variants embed Qt and use the Ruby and Python that ship with macOS, so they need the developer tools. The LW variants expect a matching MacPorts or Homebrew setup. Windows and several Linux distributions get their own packages.

Ruby and Python scripts can extend the program, and it includes a development environment for writing them. Add-ons install through a package manager called Salt.
