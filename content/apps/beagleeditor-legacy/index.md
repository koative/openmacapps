---
name: "BeagleEditor Legacy"
summary: "A Python-based code editor with syntax highlighting, autocomplete and plugins, now superseded by a newer BeagleEditor."
category: "Developer tools"
tags:
  - code-editor
  - cross-platform
  - customization
repository: "https://github.com/beagleeditor/legacy"
website: "https://beagleeditor.github.io/"
license: "MIT"
licenseUrl: "https://github.com/beagleeditor/legacy/blob/main/LICENSE"
maintenance: "unmaintained"
maintenanceNote: "Superseded by beagleeditor/editor (checked 2026-11-06)."
download: "https://github.com/beagleeditor/legacy/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-08"
sources:
  - "https://github.com/beagleeditor/legacy"
  - "https://github.com/beagleeditor/legacy/blob/main/LICENSE"
  - "https://github.com/beagleeditor/legacy/releases/latest"
  - "https://beagleeditor.github.io/"
  - "https://raw.githubusercontent.com/beagleeditor/legacy/main/README.md"
  - "https://github.com/beagleeditor/legacy/releases/tag/v2024.4.0.1"
  - "https://github.com/beagleeditor/editor"
---

BeagleEditor Legacy opens a source file for editing with syntax highlighting and autocomplete, and it runs Python files from inside the editor. It is the first BeagleEditor, a code editor written in Python. Its developers renamed it when they released a new BeagleEditor in a separate repository, beagleeditor/editor.

The README lists Python, C, C++, C#, CSS, HTML and JavaScript as the languages it works with. Plugins add features, and a terminal for the editor comes as one of them. The project wiki explains how plugins work.

On a Mac you can run it from source: install Python 3, install the requirements with pip, and start beagleeditor.py. The same steps work on Linux and Windows.

The last release, 2024.4.0.1 from February 2025, also ships a Mac DMG. The app inside is an Apple silicon build with only an ad hoc signature, and Gatekeeper rejects it, so you have to allow the first launch in System Settings. New work happens in beagleeditor/editor.
