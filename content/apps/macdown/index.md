---
name: MacDown
summary: A Markdown editor with a live side-by-side preview, syntax highlighting and
  configurable rendering options.
category: Writing
tags:
- markdown
- text-editor
- previews
- markdown-editor
alternativeTo:
- typora
repository: https://github.com/MacDownApp/macdown
website: https://macdown.uranusjr.com
license: MIT
licenseUrl: https://github.com/MacDownApp/macdown/blob/master/LICENSE/macdown.txt
download: https://github.com/MacDownApp/macdown/releases
freeDownload: true
maintenance: "unmaintained"
maintenanceNote: "No release since February 2020 and no commit since April 2021."
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/MacDownApp/macdown
- https://github.com/MacDownApp/macdown/blob/master/LICENSE/macdown.txt
- https://github.com/MacDownApp/macdown/releases
- https://macdown.uranusjr.com
- https://raw.githubusercontent.com/MacDownApp/macdown/master/README.md
- https://macdown.uranusjr.com/features/
- https://macdown.uranusjr.com/faq/
- https://github.com/MacDownApp/macdown/releases/tag/v0.7.3
- https://github.com/MacDownApp/macdown/releases/tag/v0.7.2
- https://github.com/MacDownApp/macdown/commits/master
- https://typora.io/
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/MacDownApp/macdown/master/MacDown/Images.xcassets/AppIcon.appiconset/icon_256x256%402x.png
  credit: Tzu-ping Chung and MacDown contributors
  license: MIT; upstream project asset, trademarks retained
---

MacDown puts your Markdown source and its rendered preview side by side, and the preview redraws as you type. Rendering goes through the Hoedown library. The Markdown and Rendering preference panes switch each extension on or off, so you decide which non-standard syntax a document can use. Turn on tables, fenced code blocks, strikethrough, autolinks and task lists and the output comes close to GitHub Flavored Markdown.

- Fenced code blocks with a language identifier get syntax highlighting from Prism.
- The preview renders TeX-style math, Graphviz graphs and Jekyll front matter.
- Dropping an image into the editor inserts image syntax pointing at its local path.
- An option completes matching characters as you type, and auto-completion can be turned off.
- Documents export to HTML or PDF, and Copy HTML puts the rendered markup on the clipboard.

The developer started MacDown after Mou's author said he could not keep developing that editor, and it copies much of Mou's interface and behaviour. Many bundled editor themes and preview styles, Tomorrow, Writer, Clearness and GitHub among them, come from Mou.

The last stable release, 0.7.3, dates from January 2020, and a 0.8.0 pre-release followed a month later. That stable build needs OS X 10.8 or later and contains Intel code only, so Apple silicon Macs need Rosetta 2. It also has no code signature, because the developer holds no Apple developer certificate, so the first launch has to be approved in macOS security settings.

Typora drops the separate preview pane and hides the markup symbols, showing the text formatted where you type it. It is paid after a 15-day trial. MacDown keeps the raw Markdown in view beside the preview and is free under the MIT license.
