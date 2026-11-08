---
name: KeepingYouAwake
summary: "Stops your Mac from going to sleep from a menu bar switch, for a set time or until you turn it off."
category: Utilities
tags:
  - menu-bar
  - sleep
alternativeTo:
  - amphetamine
repository: https://github.com/newmarcel/KeepingYouAwake
website: https://keepingyouawake.app
license: MIT
licenseUrl: https://github.com/newmarcel/KeepingYouAwake/blob/main/LICENSE
download: https://github.com/newmarcel/KeepingYouAwake/releases
freeDownload: true
homebrew: "keepingyouawake"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/newmarcel/KeepingYouAwake", "https://github.com/newmarcel/KeepingYouAwake/blob/main/LICENSE", "https://raw.githubusercontent.com/newmarcel/KeepingYouAwake/main/README.md", "https://keepingyouawake.app", "https://github.com/newmarcel/KeepingYouAwake/releases", "https://github.com/newmarcel/KeepingYouAwake/releases/tag/1.6.8", "https://apps.apple.com/us/app/amphetamine/id937984704"]
assets:
  - path: ./assets/icon.svg
    source: https://github.com/newmarcel/KeepingYouAwake/blob/2be93dd7f390b23fbca934ff3b1ac03468a80077/KeepingYouAwake/AppIcon.icon/Assets/AppIcon.svg
    credit: KeepingYouAwake contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.svg
---

KeepingYouAwake stops your Mac from going to sleep for as long as you need it awake. Click its menu bar icon once and sleep is off until you click again. If you would rather it switch itself off, pick one of the preset durations instead. It can also turn itself off when the battery runs low.

Underneath, the app runs `caffeinate`, the command-line tool that current versions of macOS include. That also sets its limit. A MacBook with its lid closed still goes to sleep; only desktop Macs and open laptops stay awake.

Amphetamine adds triggers that start a session on their own, for example while an external display is connected, and it can keep a closed MacBook running. KeepingYouAwake has the switch and the timer and nothing else.

Version 1.6.8 supports macOS 10.13 High Sierra and later. Version 1.6.2 is kept for Sierra, and 1.5.2 for Yosemite and El Capitan. The download is a ZIP holding a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. The community has translated the app into several languages.

The code and the image assets are MIT-licensed. The author asks that forks not be redistributed under the same name and icon.
