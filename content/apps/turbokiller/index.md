---
name: "TurboKiller"
summary: "Menu bar utility for Intel Macs that turns Turbo Boost off to reduce heat and fan noise, and back on when needed."
category: "Utilities"
tags:
  - menu-bar
  - cpu
  - power
repository: "https://github.com/nicotech-studio/turbo-killer"
website: "https://turbokiller.nicotech.cc"
license: "GPL-2.0"
licenseUrl: "https://github.com/nicotech-studio/turbo-killer/blob/main/LICENSE"
download: "https://github.com/nicotech-studio/turbo-killer/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/nicotech-studio/turbo-killer"
  - "https://github.com/nicotech-studio/turbo-killer/blob/main/LICENSE"
  - "https://github.com/nicotech-studio/turbo-killer/releases/latest"
  - "https://turbokiller.nicotech.cc"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/nicotech-studio/turbo-killer/main/TurboKiller/Assets.xcassets/AppIcon.appiconset/icon_512x512.png"
    credit: "NicoTech Studio"
    license: "GPL-2.0; upstream app icon, trademarks retained"
---

TurboKiller is a menu bar app for Intel Macs. It turns Turbo Boost off when you want a cooler, quieter machine, and back on when you need full speed. Disabling it can slow demanding work. Version 1.3.0 also shows the sampled CPU frequency and keeps up to an hour of history, with background shading for the Turbo Boost state. It suits Intel Mac owners who are bothered by heat, fan noise or throttling. The app talks to a privileged helper over XPC, and the helper loads a bundled legacy kernel extension, a historical copy of an upstream Turbo Boost kext. The bundled extension is checked against pinned SHA-256 hashes.

It requires an Intel Mac on macOS 13 or later; Apple silicon is not supported. The app is Developer ID signed but not notarized by Apple, so allow it in System Settings → Privacy & Security, approve its background item and any system extension prompt, and keep SIP enabled. The author calls it experimental and says it has been tested only on some Intel Macs. Download it only from the official repository.
