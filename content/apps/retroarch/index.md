---
name: "RetroArch"
summary: "Runs emulators, game engines and media players as libretro cores behind one game-library menu and one set of settings."
category: "Games"
tags: ["emulation", "game-library", "libretro"]
repository: "https://github.com/libretro/RetroArch"
website: "https://www.retroarch.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/libretro/RetroArch/blob/master/COPYING"
download: "https://www.retroarch.com/?page=platforms"
freeDownload: true
homebrew: "retroarch"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/libretro/RetroArch", "https://github.com/libretro/RetroArch/blob/master/COPYING", "https://www.retroarch.com/?page=platforms", "https://www.retroarch.com/", "https://raw.githubusercontent.com/libretro/RetroArch/master/README.md", "https://apps.apple.com/us/app/retroarch/id6499539433", "https://buildbot.libretro.com/stable/1.22.2/apple/osx/universal/RetroArch_Metal.dmg"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/libretro/RetroArch/master/pkg/apple/OSX/Media.xcassets/AppIcon.appiconset/mac256.png", "credit": "RetroArch contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

RetroArch runs classic games through cores, plug-in emulators and game engines that all share one menu and one set of settings. You download the cores you need, scan your game collection, and RetroArch sorts it by system with thumbnails, so controls and video options are configured once for everything.

- Shaders filter and restyle the picture.
- Netplay lets you play over the network with someone else.
- Rewind steps back through gameplay, and run-ahead cuts input and video latency.
- Machine translation and accessibility features for blind players are built in.

It can also run games from original CDs. Media players and game engines load as cores too, so the frontend covers more than consoles.

The full desktop download is the one with every capability and the built-in updater for cores. RetroArch is also free on the Apple App Store and on Steam. Store versions may lack some capabilities to comply with store rules. On Steam, for instance, cores come from Steam itself and there is no automatic core updater.

RetroArch is open source under the GPL version 3. For Macs, the current stable release, 1.22.2, is a Universal Metal build for Apple silicon and Intel on macOS 10.13 or later. Separate Intel-only builds serve macOS 10.12 and earlier, including a version with Cg shader support, and a PowerPC build is still offered.
