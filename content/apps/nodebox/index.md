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
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/nodebox/nodebox
  - https://github.com/nodebox/nodebox/blob/master/LICENSE.txt
  - https://github.com/nodebox/nodebox/releases/tag/v3.1.0
  - https://github.com/nodebox/nodebox/releases/tag/v3.2.0
  - https://www.nodebox.net
  - https://raw.githubusercontent.com/nodebox/nodebox/master/README.md
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/nodebox/nodebox/master/artwork/nodebox-icon.png
    credit: "NodeBox contributors"
    license: "GPL-2.0; upstream project asset, trademarks retained"
---

NodeBox builds graphics from a network of connected nodes. Each node does one thing, such as drawing a path, rotating or repeating it, reading rows from a spreadsheet or arranging points on a grid, and you tune it through its parameters. The network stays editable, so you can rework how a design is made and not only how it looks.

Typical work is generative art, typography and data visualization. Repetition, randomness and changing values turn one network into many variations, and the result exports as PDF files, image sequences or movies, with a choice of frame rate since version 3.2. Documents are saved as .ndbx files.

You can open the code behind any node and change it, and write new nodes in Python, Clojure or Java. Since 3.2, NodeBox caches each node's result and reruns it only when its inputs, parameters or code change, so dragging a parameter on a large network stays smooth. Custom Python or Clojure functions that read the clock, the network or unseeded random numbers need marking as time-dependent to run on every render.

NodeBox Live, from the same website, runs in a browser instead. It also builds designs from connected nodes, takes custom nodes in JavaScript and shares projects online, while NodeBox 3 is the installed app for Mac, Windows and Linux.

The current Mac build needs an Apple silicon Mac and macOS 12 or later, ships with its own Java runtime and is signed and notarized. Intel Macs stay on version 3.0.52.
