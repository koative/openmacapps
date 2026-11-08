---
name: "MewNotch"
summary: "Turns the MacBook notch into a heads-up display for volume, brightness, power and now playing media."
category: "Utilities"
tags:
  - notch
  - menu-bar
  - volume
  - brightness
  - media-controls
repository: https://github.com/monuk7735/mew-notch
website: https://monuk7735.github.io/mew-notch/
license: "GPL-3.0"
licenseUrl: https://github.com/monuk7735/mew-notch/blob/main/LICENSE
download: https://github.com/monuk7735/mew-notch/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/monuk7735/mew-notch
  - https://github.com/monuk7735/mew-notch/blob/main/LICENSE
  - https://github.com/monuk7735/mew-notch/releases
  - https://raw.githubusercontent.com/monuk7735/mew-notch/main/README.md
  - https://github.com/monuk7735/mew-notch/releases.atom
  - https://github.com/monuk7735/mew-notch/releases/tag/2.4.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/monuk7735/mew-notch/main/MewNotch/Resources/Assets/MewAssets.xcassets/AppIcon.appiconset/MewNotch-512.png
    credit: "monuk7735 and MewNotch contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

MewNotch puts the volume and brightness feedback on a MacBook into the notch. When you press a volume or brightness key, or use the Touch Bar, the change shows on the notch itself. The stock macOS overlays can be switched off.

Hovering over the notch expands it, and the app adds more to the notch area:

- A shelf in the expanded notch where you drop files to keep them handy or send them with AirDrop. They stay there after a restart.
- Now-playing controls for whatever media is running.
- The current power source, with time remaining as an option.
- A mirror in the expanded notch that shows your camera image.
- The output of shell commands you define, with a title, alignment and click-to-copy.

The app needs macOS 14 or later, and the 2.4.0 DMG holds a Universal app for Apple silicon and Intel. It updates itself through Sparkle. The developer has no Apple Developer account, so the first launch is blocked until you allow it under Privacy & Security in System Settings. You can install it from the releases page or the developer's Homebrew tap.

Macs without a notch, and external displays, can still use it. You pick a simulated notch, a floating island or a HUD that appears only when needed, and choose which screens show it. BetterDisplay is supported. You can reorder the items, set the hover delay, turn animations off and give the lock screen its own size and default view.
