---
name: "Twine"
summary: "A visual tool for writing interactive, branching stories and publishing them as playable HTML files."
category: "Writing"
tags:
  - interactive-fiction
  - writing
  - publishing
  - cross-platform
repository: https://github.com/klembot/twinejs
website: https://twinery.org
license: "GPL-3.0"
licenseUrl: https://github.com/klembot/twinejs/blob/develop/LICENSE
download: https://github.com/klembot/twinejs/releases
homebrew: "twine-app"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/klembot/twinejs
  - https://github.com/klembot/twinejs/blob/develop/LICENSE
  - https://github.com/klembot/twinejs/releases
  - https://twinery.org
assets:
  - path: ./assets/icon.png
    source: https://github.com/klembot/twinejs/blob/develop/icons/app-release.png
    credit: "Twine contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Twine is a long-running tool for writing interactive fiction and other nonlinear stories. A story is a map of passages on a canvas; you link passages to each other, and Twine draws the connections so the branching structure stays visible as it grows. A simple story needs no code at all.

When a story needs more, the chosen story format adds variables, conditional text, styling and JavaScript. Twine ships with Harlowe, SugarCube, Chapbook and Snowman, each with its own syntax and documentation. Finished stories are published as a single HTML file that runs in any browser, and the project states that whatever you make with it is yours to use, commercially or not.

The desktop app is built with Electron and saves each story as a file in a local Twine folder; the same editor is also available in a browser at twinery.org.
