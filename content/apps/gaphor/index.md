---
name: "Gaphor"
summary: "A UML and SysML modeling application that keeps a real model behind its diagrams, not just drawings."
category: "Developer tools"
tags:
  - diagrams
  - modeling
  - cross-platform
repository: https://github.com/gaphor/gaphor
website: https://gaphor.org
license: "Apache-2.0"
licenseUrl: https://github.com/gaphor/gaphor/blob/main/LICENSES/Apache-2.0.txt
download: https://gaphor.org/download/
freeDownload: true
homebrew: "gaphor"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/gaphor/gaphor
  - https://github.com/gaphor/gaphor/blob/main/LICENSES/Apache-2.0.txt
  - https://github.com/gaphor/gaphor/blob/main/REUSE.toml
  - https://github.com/gaphor/gaphor/releases
  - https://formulae.brew.sh/cask/gaphor
  - https://raw.githubusercontent.com/gaphor/gaphor/main/README.md
  - https://gaphor.org
  - https://gaphor.org/download/
  - https://github.com/gaphor/gaphor/releases/tag/3.3.2
  - https://raw.githubusercontent.com/gaphor/gaphor/3.3.2/docs/exporting.md
  - https://docs.gaphor.org/en/latest/scripting.html
  - https://docs.gaphor.org/en/latest/merge_conflicts.html
  - https://docs.gaphor.org/en/latest/sphinx.html
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/gaphor/gaphor/main/_packaging/macos/gaphor.iconset/icon_256x256.png
    credit: "The Gaphor Development Team"
    license: "Apache-2.0; upstream project icon, trademarks retained"
---

Gaphor draws UML, SysML, RAAML and C4 diagrams on top of a real UML 2 model. When you click a Class in the toolbox and then on the canvas, the class lands on the diagram and in the Model Browser tree at once. Everything you model shows up in a diagram; there are no hidden property pages.

A new file starts from one of five templates: Generic, UML, SysML, RAAML or C4. The template picks a matching profile, and a button next to the Profile menu at the top of the window lets you pick another.

- Diagrams export as SVG, PNG, PDF or EPS, one at a time or all together, and `gaphor export` does the same from the command line.
- A built-in style sheet engine changes how diagrams look, and the app follows dark mode.
- Python scripts and Jupyter notebooks can load a model and change it through Gaphor's library.
- A Sphinx extension places diagrams from a model file straight into your documentation.
- When Git leaves conflict markers in a model file, Gaphor can open both versions in a Merge Editor, where you review the incoming changes and apply them.

Code generation is out of scope. Gaphor does not turn source code into diagrams or diagrams into code, and the README points to writing a plugin if you need that.

The macOS download comes as separate disk images for Apple silicon and Intel, and Gaphor needs macOS 10.15 or later. The Apple silicon app in release 3.3.2 is signed with a Developer ID and notarized. Builds for Windows and Linux exist too, and the project belongs to GNOME Circle.
