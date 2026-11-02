---
name: "VisualDiffer"
summary: "Compares two folders or files side by side, highlighting added, changed and missing items, with filters and a visdiff command."
category: "Developer tools"
tags:
  - diff
  - files
  - folders
  - native
repository: https://github.com/visualdiffer/visualdiffer
website: https://visualdiffer.com
license: "GPL-3.0"
licenseUrl: https://github.com/visualdiffer/visualdiffer/blob/main/LICENSE
download: https://github.com/visualdiffer/visualdiffer/releases/latest
homebrew: "visualdiffer"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/visualdiffer/visualdiffer
  - https://github.com/visualdiffer/visualdiffer/blob/main/LICENSE
  - https://github.com/visualdiffer/visualdiffer/releases
  - https://visualdiffer.com
assets:
  - path: ./assets/icon.png
    source: https://github.com/visualdiffer/visualdiffer/blob/main/images/vd.iconset/icon_512x512.png
    credit: "VisualDiffer contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

VisualDiffer puts two folders next to each other and marks which files are new, modified, identical or missing on either side. Filters keep version control folders, backups and other noise out of the comparison, and you can open any pair of files to see line-by-line differences before copying changes across.

A bundled `visdiff` command starts comparisons from Terminal, and the app can be driven from AppleScript. Because the app is sandboxed, the command is not added to your PATH automatically; the README shows the symlink to create.

This is a from-scratch Swift rewrite of an older Objective-C app, and the authors warn that regressions are possible. It needs macOS 13.5 or later, is notarized and sandboxed, and checks for updates when it starts.
