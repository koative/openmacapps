---
name: "RuneLite"
summary: "A widely used open-source client for Old School RuneScape with GPU rendering, overlays, loot tracking and a plugin hub."
category: "Games"
tags:
  - games
  - mmorpg
  - plugins
  - cross-platform
repository: https://github.com/runelite/runelite
website: https://runelite.net
license: "BSD-2-Clause"
licenseUrl: https://github.com/runelite/runelite/blob/master/LICENSE
download: https://runelite.net
homebrew: "runelite"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/runelite/runelite
  - https://github.com/runelite/runelite/blob/master/LICENSE
  - https://github.com/runelite/launcher
  - https://github.com/runelite/launcher/blob/master/LICENSE
  - https://github.com/runelite/launcher/releases
  - https://runelite.net
assets:
  - path: ./assets/icon.png
    source: https://github.com/runelite/launcher/blob/master/osx/runelite.icns
    credit: "RuneLite contributors"
    license: "BSD-2-Clause; upstream project asset, trademarks retained"
---

RuneLite is a third-party game client for Old School RuneScape, used instead of the official desktop client. It adds GPU rendering for higher frame rates and draw distance, overlays for boosts, timers and enemy health, a loot tracker with drop prices, and Discord Rich Presence.

Features are organised as plugins you can switch on individually, and the Plugin Hub adds more written by the community. You still need an Old School RuneScape account to play.

The macOS app is a small launcher, published separately for Apple silicon and Intel, that downloads and updates the client itself when it starts. The launcher and the client live in two repositories, both under the BSD-2-Clause license.
