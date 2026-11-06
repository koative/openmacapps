---
name: "MacTap"
summary: "Menu bar app that runs shortcuts when you knock the MacBook case or desk; needs an M2 or later, or M1 Pro/Max/Ultra."
category: "Utilities"
tags:
  - automation
  - shortcuts
  - accessibility
  - sensors
repository: "https://github.com/jaskirat1616/mactap-app"
website: "https://mactap.vercel.app"
license: "MIT"
licenseUrl: "https://github.com/jaskirat1616/mactap-app/blob/main/LICENSE"
download: "https://github.com/jaskirat1616/mactap-app/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jaskirat1616/mactap-app"
  - "https://github.com/jaskirat1616/mactap-app/blob/main/LICENSE"
  - "https://github.com/jaskirat1616/mactap-app/releases"
  - "https://mactap.vercel.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/jaskirat1616/mactap-app/main/MacTap/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Jaskirat Singh"
    license: "MIT; upstream app icon, trademarks retained"
---

MacTap listens for one, two or three knocks on the laptop chassis, or on the desk beneath a closed laptop, and maps each pattern to an action such as copy, paste, Accept, a screenshot or a media key. The left and right edges can carry different actions, presets such as Daily, Coding and Media are included, and individual apps can have their own map. The README says taps are classified on the device and nothing is uploaded.

Requires macOS 14.6 or later and a MacBook whose motion sensor MacTap reads: M2 and later, or M1 Pro, Max or Ultra. The README says the original M1 MacBook Air and some other M1 models cannot detect knocks. Actions need Accessibility permission. The app is Developer ID signed and notarized according to the README, but the .dmg wrapper is not; the README recommends the zip if a tool blocks the disk image.
