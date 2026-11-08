---
name: "BrewMate"
summary: "A desktop interface for Homebrew that searches, installs, upgrades and removes formulae and casks."
category: "Developer tools"
tags:
  - homebrew
  - package-manager
  - cross-platform
repository: https://github.com/romankurnovskii/BrewMate
website: https://brewmate-macos.web.app
license: "MIT"
licenseUrl: https://github.com/romankurnovskii/BrewMate/blob/main/LICENSE.md
download: https://github.com/romankurnovskii/BrewMate/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/romankurnovskii/BrewMate
  - https://github.com/romankurnovskii/BrewMate/blob/main/LICENSE.md
  - https://github.com/romankurnovskii/BrewMate/releases
  - https://raw.githubusercontent.com/romankurnovskii/BrewMate/main/README.md
  - https://github.com/romankurnovskii/BrewMate/releases/tag/1.0.41
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/romankurnovskii/BrewMate/main/build/icon.icns
    credit: "Roman Kurnovskii"
    license: "MIT repository asset; trademarks retained"
---

BrewMate gives Homebrew a window, so you can search formulae and casks, install, upgrade and uninstall them, and read the log of each install or removal without typing `brew` commands. It also lists what is already installed, shows Homebrew's top downloads, and manages brew services.

Homebrew has to be installed first, because BrewMate drives it. Alongside Homebrew's own catalogue, the app lists third-party apps from the author's awesome-brew tap. Two items on the feature list are still open: adding other third-party taps, and handling apps that ask for a password during installation or removal.

You can install it from the awesome-brew tap with `brew install --cask`, or download it from GitHub releases. The 1.0.41 Mac files are a DMG and a ZIP, both labelled universal, and BrewMate needs macOS 10.15 or later. The README tells you to open the app the first time with the Open command from its context menu, to get past the security warning.

The app is built on Electron and also runs on Linux with Homebrew installed there. Homebrew on Linux is mainly about formulae: BrewMate shows casks where they exist, but many casks are macOS-only and will not install.
