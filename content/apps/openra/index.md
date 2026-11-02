---
name: "OpenRA"
summary: "A free real-time strategy engine that rebuilds Red Alert, Tiberian Dawn and Dune 2000 with modern controls and online play."
category: "Games"
tags:
  - strategy
  - retro-games
  - game-engine
  - multiplayer
  - cross-platform
repository: https://github.com/OpenRA/OpenRA
website: https://www.openra.net
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/OpenRA/OpenRA/blob/bleed/COPYING
download: https://www.openra.net/download/
homebrew: "openra"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/OpenRA/OpenRA
  - https://github.com/OpenRA/OpenRA/blob/bleed/COPYING
  - https://github.com/OpenRA/OpenRA/releases
  - https://www.openra.net/download/
assets:
  - path: ./assets/icon.png
    source: https://github.com/OpenRA/OpenRA/blob/bleed/packaging/artwork/cnc_256x256.png
    credit: "OpenRA Developers and Contributors"
    license: "GPL-3.0-or-later; Tiberian Dawn mod icon from the OpenRA packaging artwork, trademarks retained"
---

OpenRA is an open-source engine that recreates the early Westwood real-time strategy games. Its three bundled mods reimagine Command & Conquer: Red Alert, Command & Conquer: Tiberian Dawn and Dune 2000, adding things like modern interface conventions, online multiplayer with a server browser, replays, observer mode and a map editor.

The engine does not include the original game data. The first time you start a mod it offers to download the required files or copy them from your own copy of the game; those files come from EA under its modding guidelines rather than the OpenRA license. EA does not endorse the project.

The macOS disk image installs one app per mod and is aimed at macOS 10.11 or later. Stable releases are recommended for online play, while more frequent playtest builds preview upcoming changes.
