---
name: mORTEX
summary: "Manages Skyrim mods on a Mac and deploys them into the game's CrossOver bottle, from a macOS port of Vortex."
category: Games
tags:
  - skyrim
  - modding
  - mod-manager
  - crossover
  - nexus-mods
repository: https://github.com/starbudweiser/mORTEX
website: https://skyrimtools.com
license: GPL-3.0
licenseUrl: https://github.com/starbudweiser/mORTEX/blob/main/LICENSE.md
download: https://github.com/starbudweiser/mORTEX/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
sources:
  - https://github.com/starbudweiser/mORTEX
  - https://github.com/starbudweiser/mORTEX/blob/main/LICENSE.md
  - https://github.com/starbudweiser/mORTEX/releases
  - https://raw.githubusercontent.com/starbudweiser/mORTEX/main/README.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mORTEX/releases/download/v2.0.0/mORTEX-2.0.0-mac-arm64.zip
    credit: Starbudweiser
    license: GPL-3.0; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

mORTEX lets you install, sort and enable Skyrim Special Edition mods from macOS, then writes the result into the CrossOver bottle where the game runs. It is a fork of Vortex, the Nexus Mods manager, rebuilt and packaged for Apple silicon Macs.

The parts of Vortex that modders rely on are kept:

- Mod Manager Download links from Nexus Mods open straight in the app.
- FOMOD installers run with their options and images.
- LOOT sorts the load order, and profiles keep separate mod sets per playthrough.
- Deployment copies the enabled mods into the bottle's Data folder and can be reverted to the last deployment.

On top of that, a DXMT Workshop handles the graphics layers a Mac setup needs. It can install the mDLSS bridge, which DLSS requires under DXMT to avoid a black screen, and keeps any other d3d11.dll, such as ENBSeries, so you can undo the change. The mod list has a Conflicts tab that only shows file conflicts without a rule.

The game itself still needs CrossOver. mORTEX can sit in the menu bar, the Dock or both, and the interface is in English, French, Spanish and Italian. Releases are arm64 builds for macOS 13 or later, signed with a Developer ID and notarized.

The code keeps Vortex's GPL-3.0 license. mORTEX is unofficial and not affiliated with Nexus Mods.
