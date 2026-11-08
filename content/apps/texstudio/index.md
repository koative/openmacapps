---
name: "TeXstudio"
summary: "Edits LaTeX documents with command completion, live reference checks and a built-in PDF viewer."
category: "Writing"
tags: ["latex", "editor", "research"]
repository: "https://github.com/texstudio-org/texstudio"
website: "https://www.texstudio.org/"
license: "GPL-3.0"
licenseUrl: "https://github.com/texstudio-org/texstudio/blob/master/COPYING"
download: "https://github.com/texstudio-org/texstudio/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/texstudio-org/texstudio", "https://github.com/texstudio-org/texstudio/blob/master/COPYING", "https://github.com/texstudio-org/texstudio/blob/master/README.md", "https://github.com/texstudio-org/texstudio/releases", "https://raw.githubusercontent.com/texstudio-org/texstudio/master/README.md", "https://texstudio-org.github.io/getting_started.html", "https://texstudio-org.github.io/compiling.html", "https://texstudio-org.github.io/viewing.html", "https://github.com/texstudio-org/texstudio/releases/tag/4.9.9"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/texstudio-org/texstudio/blob/master/images/appicon.png", "credit": "TeXstudio contributors", "license": "GPL-3.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

TeXstudio edits LaTeX source and shows you the compiled result. You type in an editor that highlights syntax and suggests commands as you go, press Build & View, and the PDF opens in a viewer beside the text or in its own window.

- LaTeX commands are completed and their syntax checked, references are checked live, and citations are checked and completed.
- A structure view outlines the current file and, globally, the whole project.
- Spelling and grammar are checked inside the editor, and parts of a document can be previewed inline.
- Forward and inverse search jump between a spot in the PDF and the line that produced it, once SyncTeX is enabled.
- The Quick Start wizard writes the setup code for a typical new document.

Build & View runs LaTeX and, when needed, BibTeX, sometimes several times, until the final PDF is ready, and the log panel highlights the important messages from the run. A Clean command deletes the auxiliary files a compilation leaves behind but keeps the PDF.

TeXstudio does not include LaTeX itself, so you install a TeX distribution separately before compiling. Version 4.9.9 comes as separate downloads for Apple silicon and Intel Macs, each built for macOS 14.4 or later, alongside builds for Windows and Linux.
