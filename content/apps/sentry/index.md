---
name: "Sentry"
summary: "Watches lid, network and power state while you step away, then records camera video and sounds an alarm on change."
category: "Privacy & security"
tags:
  - security
  - monitoring
  - camera
  - privacy
repository: "https://github.com/Lakr233/Sentry"
website: "https://github.com/Lakr233/Sentry"
license: "MIT"
licenseUrl: "https://github.com/Lakr233/Sentry/blob/main/LICENSE"
download: "https://github.com/Lakr233/Sentry/releases/download/1.3.13/Sentry-v1.3.13.zip"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Lakr233/Sentry"
  - "https://github.com/Lakr233/Sentry/blob/main/LICENSE"
  - "https://github.com/Lakr233/Sentry/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Lakr233/Sentry/main/Sentry/Assets.xcassets/AppIcon.appiconset/icon-512%402x.png"
    credit: "Lakr Aream"
    license: "MIT; upstream app icon, trademarks retained"
---

Sentry is meant for a Mac left alone for a few minutes, such as a laptop on a café table. In Sentry mode it watches the lid, network connectivity and power connection. When something changes, it records video clips with the camera and can sound an alarm or send a push notification through Bark. The README asks users to watch only their own devices and to follow local recording laws.

It requires macOS 13 or later and camera permission. The GitHub release zip is Developer ID signed and notarized. The README points to a paid Mac App Store build and says a source build is free. The Mac must stay awake when its lid closes, so the README suggests SleepHoldService or `sudo pmset -a disablesleep 1`. The latest release is 1.3.13, from June 2025.
