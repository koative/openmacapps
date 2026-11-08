---
name: "Jupyter Notebook Viewer"
summary: "A small Mac app for reading Jupyter notebooks without running Jupyter, with a Quick Look preview plug-in."
category: "Developer tools"
tags:
  - jupyter
  - quick-look
  - previews
repository: https://github.com/tuxu/nbviewer-app
website: https://github.com/tuxu/nbviewer-app
license: "MIT"
licenseUrl: https://github.com/tuxu/nbviewer-app/blob/master/LICENSE.md
download: https://github.com/tuxu/nbviewer-app/releases
freeDownload: true
maintenance: "unmaintained"
maintenanceNote: "No release since December 2023."
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/tuxu/nbviewer-app
  - https://github.com/tuxu/nbviewer-app/blob/master/LICENSE.md
  - https://github.com/tuxu/nbviewer-app/releases
  - https://formulae.brew.sh/cask/jupyter-notebook-viewer
  - https://formulae.brew.sh/api/cask/jupyter-notebook-viewer.json
  - https://github.com/tuxu/nbviewer-app/blob/master/README.md
  - https://github.com/tuxu/nbviewer-app/releases/tag/0.1.6
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/tuxu/nbviewer-app/master/Jupyter%20Notebook%20Viewer/Images.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Tino Wagner"
    license: "MIT; upstream project asset, trademarks retained"
---

Jupyter Notebook Viewer opens `.ipynb` files from Jupyter or IPython as rendered documents, so you can read a notebook someone sent you without starting a Jupyter server. The rendering comes from the bundled nbviewer.js library, which keeps the app self-contained.

Version 0.1.6 from December 2023 is the latest release, and the repository has had no commits since. The download is a ZIP holding a Universal app for Apple silicon and Intel that asks for macOS 10.15 or later. It has only an ad-hoc signature and is not notarized, so Gatekeeper rejects it until you allow it yourself.

Homebrew disabled the `jupyter-notebook-viewer` cask on 1 September 2026 because the app fails its Gatekeeper check, which leaves the GitHub release as the way to get it.

The app also carries a Quick Look generator, ipynb-quicklook, so a notebook selected in Finder can be previewed with the space bar. That preview is meant to work without setup. If it does not appear, running `qlmanage -m plugins | grep ipynb` in Terminal shows whether macOS has registered the plug-in.
