---
name: mABBAJACK
summary: "Installs and updates Wabbajack modlists for Skyrim and other games on a Mac, without Windows or a virtual machine."
category: Games
tags:
  - skyrim
  - modding
  - wabbajack
  - modlists
  - nexus-mods
repository: https://github.com/starbudweiser/mABBAJACK
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/mABBAJACK/blob/main/LICENSE
download: https://github.com/starbudweiser/mABBAJACK/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "The modlist gallery with game filters and modlist cards."
    source: https://github.com/starbudweiser/mABBAJACK/blob/main/docs/screenshots/gallery.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/mABBAJACK
  - https://github.com/starbudweiser/mABBAJACK/blob/main/LICENSE
  - https://github.com/starbudweiser/mABBAJACK/releases
  - https://raw.githubusercontent.com/starbudweiser/mABBAJACK/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mABBAJACK/blob/main/docs/screenshots/gallery.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mABBAJACK/releases/download/v2.0.0/mABBAJACK_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

mABBAJACK installs Wabbajack modlists on macOS. You pick a list in its gallery or drop a `.wabbajack` file on the window, choose the game and a target folder, and it downloads, extracts and assembles every mod the list asks for.

The gallery shows the official modlists, about 226 of them, filtered by game (Skyrim SE, AE and VR, Enderal and others), tags and size. Installation covers the steps Wabbajack performs on Windows:

- archive extraction, OctoDiff patches and BSA creation;
- texture conversion with texconv;
- zEdit merged patches;
- original game files copied as they are.

Downloads from Nexus Mods are automatic with a Premium account. With a free account, the Mod Manager Download button on Nexus sends each file to the app through `nxm://` links. Other sources such as the Wabbajack CDN, Google Drive, MediaFire, ModDB and Mega are handled too. The Nexus API key goes in the macOS Keychain.

Updating an installed list only reinstalls the files that changed and removes the ones the new version dropped. An optional Mac adaptation step (DXMT, ENB, DLSS) is announced before installation and can be undone afterwards.

The app is not affiliated with the Wabbajack project. Releases are arm64 builds for macOS 14 or later, notarized, with an interface in four languages.
