---
name: "TeX Live Utility"
summary: "A native Mac front end for TeX Live Manager that updates, installs and removes TeX packages and manages backups."
category: "Writing"
tags:
  - latex
  - native
repository: https://github.com/amaxwell/tlutility
website: https://amaxwell.github.io/tlutility/
license: "BSD-3-Clause"
licenseUrl: https://github.com/amaxwell/tlutility/blob/master/LICENSE
download: https://github.com/amaxwell/tlutility/releases
homebrew: "tex-live-utility"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/amaxwell/tlutility
  - https://github.com/amaxwell/tlutility/blob/master/LICENSE
  - https://github.com/amaxwell/tlutility/releases
  - https://amaxwell.github.io/tlutility/
  - https://github.com/amaxwell/tlutility/blob/master/Credits.rtf
assets:
  - path: ./assets/icon.png
    source: https://github.com/amaxwell/tlutility/blob/master/TeXDistTool.icns
    credit: "Jérôme Laurens (icon design), distributed with TeX Live Utility by Adam Maxwell"
    license: "Distributed in the BSD-3-Clause TeX Live Utility repository; trademarks retained"
---

TeX Live Utility gives TeX Live's `tlmgr` package manager a Mac interface. It lists installed and available packages, updates everything or a selection, installs and removes packages, shows package details and documentation, sets the default paper size, chooses a download mirror, and restores packages from backups.

When TeX Live's own infrastructure needs updating, it runs the project's disaster-recovery script so `tlmgr` does not break while replacing itself. It is a front end only: TeX Live must already be installed, through MacTeX or the standard Unix installer.

The app runs on Apple silicon and 64-bit Intel Macs with macOS 10.9 or later, and is downloaded as a zipped app from the GitHub releases page. Beta builds are posted there as pre-releases.
