---
name: "Cerebro"
summary: "A keyboard launcher for apps, files, web searches and calculations, extended through community plugins."
category: "Productivity"
tags: ["launcher", "search", "plugins", "cross-platform"]
alternativeTo: ["alfred"]
repository: "https://github.com/cerebroapp/cerebro"
website: "https://www.cerebroapp.com"
license: "MIT"
licenseUrl: "https://github.com/cerebroapp/cerebro/blob/master/LICENSE"
download: "https://github.com/cerebroapp/cerebro/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/cerebroapp/cerebro", "https://github.com/cerebroapp/cerebro/blob/master/LICENSE", "https://github.com/cerebroapp/cerebro/releases", "https://raw.githubusercontent.com/cerebroapp/cerebro/master/README.md", "https://www.cerebroapp.com", "https://github.com/cerebroapp/cerebro/releases/tag/v0.11.0", "https://www.alfredapp.com/", "https://www.alfredapp.com/powerpack/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/cerebroapp/cerebro/master/build/icon.png", "credit": "Alexandr Subbotin and Cerebro contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Cerebro opens a search bar when you press Control-Space and answers what you type there. Type an app name to launch it, a path such as `~/Documents/report.pdf` to see the file with a preview, a sum to calculate it, or an amount like `100 eur in gbp` to convert it. Anything else can go to your web search engine.

Plugins add the rest. Type `plugins` followed by a name in the same bar to find, install and manage them, and the community keeps a list of plugins on GitHub. Keyboard shortcuts cover the results: Control-1 to 9 picks an item, Control-C copies it, and Control with H, J, K and L moves through the list in Vim style.

Settings open from the menu bar icon or by typing `Cerebro Settings`, where you can switch between the light and dark themes. Everything is also stored in `config.json` under Application Support, which the README warns can break the app if edited badly.

Alfred covers the same ground of apps, files, web search and calculations. Its clipboard history, snippets and workflows come with the paid Powerpack. Cerebro is an MIT-licensed Electron app that gets its extras from community plugins.

The latest release, 0.11.0, dates from February 2023, although the code still gets commits. Its Mac build contains only Intel code, so Apple silicon Macs need Rosetta 2 to run it. It has a minimum of macOS 10.13 and is not signed. Builds for Windows and Linux are on the same releases page.
