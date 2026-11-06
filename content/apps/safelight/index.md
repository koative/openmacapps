---
name: "Safelight"
summary: "Menu bar app that puts the Mac's colour filter, brightness and Light/Dark appearance on one schedule, fading to deep red at night."
category: "Utilities"
tags:
  - night-shift
  - menu-bar
  - native
alternativeTo:
  - f-lux
repository: "https://github.com/mopfaff/Safelight"
website: "https://github.com/mopfaff/Safelight"
license: "GPL-3.0"
licenseUrl: "https://github.com/mopfaff/Safelight/blob/main/LICENSE"
download: "https://github.com/mopfaff/Safelight/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/mopfaff/Safelight"
  - "https://github.com/mopfaff/Safelight/blob/main/LICENSE"
  - "https://github.com/mopfaff/Safelight/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/mopfaff/Safelight/HEAD/docs/icon.png"
    credit: "mopfaff"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Safelight sets the Mac's display on one schedule. You choose how the screen should look at a few times of day, and it fades between them: plain white in the afternoon, warmer and dimmer after sunset, deep red late at night, and back to normal in the morning. It drives the Color Tint filter built into macOS, so the screen can go fully red, which Night Shift cannot. Each time of day can also set brightness for each display and the Light or Dark appearance, and wallpapers can change with it. It suits people who want the screen to change on its own through the day, and it lives in the menu bar.

Safelight requires macOS 15.5 or later, on Apple silicon or Intel. The app is not notarized by Apple, so the first launch has to be allowed in System Settings under Privacy & Security. Per-display brightness keys need Accessibility permission. The author says the system functions Safelight calls are not public Apple APIs, so a macOS update could change them, and for that reason the app is not on the Mac App Store.
