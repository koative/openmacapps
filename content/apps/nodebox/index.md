---
name: "NodeBox"
summary: "A node-based app for generative design and data visualization, built by connecting editable blocks of code."
category: "Design"
tags:
  - graphics
  - data-visualization
  - node-editor
  - scripting
  - cross-platform
repository: https://github.com/nodebox/nodebox
website: https://www.nodebox.net
license: "GPL-2.0"
licenseUrl: https://github.com/nodebox/nodebox/blob/master/LICENSE.txt
download: https://github.com/nodebox/nodebox/releases/latest
homebrew: "nodebox"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/nodebox/nodebox
  - https://github.com/nodebox/nodebox/blob/master/LICENSE.txt
  - https://github.com/nodebox/nodebox/releases/tag/v3.1.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/nodebox/nodebox/master/artwork/nodebox-icon.png
    credit: "NodeBox contributors"
    license: "GPL-2.0; upstream project asset, trademarks retained"
---

NodeBox builds graphics from a network of connected nodes. Each node is one operation, such as drawing a shape, repeating or transforming it, or reading rows from a CSV file, and the output updates as you change parameters. Because the whole network stays editable, a design can be reworked rather than redrawn, which suits generative art, data visualization and animation. Results can be exported to PDF or rendered as a movie.

The code behind every node can be opened and changed, and new nodes can be written in Python or Clojure. Version 3.1 runs natively on Apple silicon, needs macOS 12 or later, bundles its own Java runtime and is signed and notarized. It no longer runs on Intel Macs, which should stay on version 3.0.52. NodeBox is also available for Windows.
