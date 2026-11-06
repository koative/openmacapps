---
name: "HyperCapslock"
summary: "Turns Caps Lock into a system-wide vim-style navigation and editing layer, and still toggles Caps Lock when tapped alone."
category: "Utilities"
tags:
  - keyboard
  - keyboard-customization
  - remapping
  - automation
repository: "https://github.com/XueshiQiao/HyperCapslock"
website: "https://github.com/XueshiQiao/HyperCapslock"
license: "GPL-3.0"
licenseUrl: "https://github.com/XueshiQiao/HyperCapslock/blob/main/LICENSE"
download: "https://github.com/XueshiQiao/HyperCapslock/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/XueshiQiao/HyperCapslock"
  - "https://github.com/XueshiQiao/HyperCapslock/blob/main/LICENSE"
  - "https://github.com/XueshiQiao/HyperCapslock/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/XueshiQiao/HyperCapslock/main/HyperCapslock/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "HyperCapslock contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

HyperCapslock remaps Caps Lock to a key that no physical keyboard has, so Caps plus another key triggers a mapping and never collides with system shortcuts. The default mappings put arrow keys on H, J, K and L, Home and End on A and E, 10-line jumps on U and D, and launch keys for a few apps. A mapping can send a key combination, run a shell command, hold a modifier while a key is held, or do something different in a specific app. A single tap of Caps Lock still toggles it as usual. Settings can be exported to and imported from a YAML file.

It needs macOS 14 or later and the Accessibility permission for its keyboard event tap; the README notes that Input Monitoring is not required. It ships as a native app with Sparkle updates and a Homebrew cask. The release DMG is notarized and universal. The source is GPL-3.0.
