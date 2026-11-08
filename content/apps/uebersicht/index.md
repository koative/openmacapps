---
name: Übersicht
summary: "Runs shell commands and shows their output as widgets on the desktop."
category: Productivity
tags:
  - widgets
  - desktop
  - customization
repository: https://github.com/felixhageloh/uebersicht
website: https://tracesof.net/uebersicht/
license: GPL-3.0-or-later
licenseUrl: https://github.com/felixhageloh/uebersicht/blob/master/LICENSE
download: https://tracesof.net/uebersicht/
freeDownload: true
homebrew: "ubersicht"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/felixhageloh/uebersicht
  - https://github.com/felixhageloh/uebersicht/blob/master/LICENSE
  - https://github.com/felixhageloh/uebersicht/blob/master/README.md
  - https://tracesof.net/uebersicht/
  - https://raw.githubusercontent.com/felixhageloh/uebersicht/master/README.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/felixhageloh/uebersicht/blob/859a7d70525949b8bdeec19d69a4766678ca3527/Uebersicht/Images.xcassets/AppIcon.appiconset/256.png
    credit: Übersicht contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Übersicht runs shell commands on a timer and draws their output on your desktop as small widgets. A widget can list the three processes using the most memory, or show anything else a command prints, in tables, charts or plain text.

Each widget is a single `.jsx` file in the widgets folder. It exports a `command` to run and a `refreshFrequency` in milliseconds, one second by default. A `className` holds the CSS that positions and styles it, and a `render` function draws it with React's JSX. Übersicht watches the folder, so saving a file redraws the widget at once and keeps its state.

Bigger widgets can split their code into modules and import node modules. They can also manage state with an `updateState` function, and an `init` function can open a WebSocket instead of polling a command. Older widgets written in CoffeeScript still run. The project's site links a collection of ready-made widgets to start from.

Übersicht needs macOS 12 or later and is free to download. The source is released under GPL-3.0 or later.
