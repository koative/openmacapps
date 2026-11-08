---
name: "ZTools"
summary: "An open-source launcher modelled on uTools, with app search, clipboard history and a plugin market."
category: "Productivity"
tags:
  - launcher
  - plugins
  - clipboard
  - cross-platform
alternativeTo:
  - alfred
  - raycast
repository: https://github.com/ZToolsCenter/ZTools
website: https://github.com/ZToolsCenter/ZTools
license: "MIT"
licenseUrl: https://github.com/ZToolsCenter/ZTools/blob/main/LICENSE
download: https://github.com/ZToolsCenter/ZTools/releases/latest
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/ZToolsCenter/ZTools
  - https://github.com/ZToolsCenter/ZTools/blob/main/LICENSE
  - https://github.com/ZToolsCenter/ZTools/releases/latest
  - https://raw.githubusercontent.com/ZToolsCenter/ZTools/main/README.md
  - https://github.com/ZToolsCenter/ZTools/releases/tag/v3.2.0
  - https://www.alfredapp.com/powerpack/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ZToolsCenter/ZTools/main/build/icon.icns
    credit: "ZTools contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

ZTools opens a search window when you press Option-Z. Type an app name or a command, move through the results with the arrow keys, and press Return. The project calls itself an open-source take on uTools, which it credits as its inspiration.

- App search matches pinyin and regular expressions, remembers history and lets you pin apps.
- Plugins can show their own interface, even in a separate window, or run headless.
- A plugin market installs and manages plugins from inside the app.
- Clipboard history records text and images, and you can search it.
- Themes follow the system or stay light or dark, with six accent colours.

Writing a plugin starts with a plugin.json file. Plugin code reaches notifications, simulated input and storage through a global ztools object, and each plugin keeps its data apart from the others.

ZTools is built on Electron and also runs on Windows. Version 3.2.0 has separate Apple silicon and Intel downloads, and its Apple silicon build is notarized and needs macOS 12 or later.

Alfred sells clipboard history and workflows as part of its Powerpack. ZTools ships its clipboard history and plugin market in the same MIT-licensed app as the launcher.
