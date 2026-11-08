---
name: "Open in Code"
summary: "A Finder toolbar button that opens the current folder, or the selected item, in Visual Studio Code."
category: "Developer tools"
tags:
  - finder
  - developer-utilities
repository: https://github.com/sozercan/OpenInCode
website: https://github.com/sozercan/OpenInCode
license: "MIT"
licenseUrl: https://github.com/sozercan/OpenInCode/blob/master/LICENSE
download: https://github.com/sozercan/OpenInCode/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/sozercan/OpenInCode
  - https://github.com/sozercan/OpenInCode/blob/master/LICENSE
  - https://github.com/sozercan/OpenInCode/releases
  - https://raw.githubusercontent.com/sozercan/OpenInCode/master/README.md
  - https://github.com/sozercan/OpenInCode/releases/tag/v2.0.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/sozercan/OpenInCode/master/docs/assets/open-in-code-icon.png
    credit: "Sertac Ozercan"
    license: "MIT repository asset; the icon depicts the Visual Studio Code logo, a trademark of Microsoft"
---

Open in Code sits in the Finder toolbar and opens Visual Studio Code on the folder you are looking at. Click it and VS Code opens with the right workspace, with no Terminal command and no browsing to the folder a second time.

What opens depends on what Finder shows:

- A selected folder opens as itself.
- A selected file or package opens its enclosing folder.
- With several items selected, the first one decides.
- With nothing selected, the front Finder window's folder opens.

To set it up, open the Applications folder and Command-drag the app into the Finder toolbar. Command-dragging the button again moves or removes it. The first click makes macOS ask whether Open in Code may control Finder, which it needs to read the selection. If you refused, turn it back on under Privacy & Security, Automation on macOS 13 or later, or under Security & Privacy on macOS 12.

You need Visual Studio Code or VS Code Insiders installed. The app prefers the stable editor and uses Insiders when only that one is present.

Version 2.0 requires macOS 12 or later and is a Universal app for Apple silicon and Intel. It comes as a ZIP from GitHub releases or as a cask from the author's Homebrew tap. The code is MIT-licensed.
