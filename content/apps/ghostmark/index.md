---
name: "Ghostmark"
summary: "Persistent watermark drawn on your desktop for screen recordings and calls, with live date, time and user tokens."
category: "Productivity"
tags:
  - watermark
  - screen-recording
  - overlay
  - desktop
repository: "https://github.com/markksantos/Ghostmark"
website: "https://nosleeplab.com/apps/ghostmark"
license: "MIT"
licenseUrl: "https://github.com/markksantos/Ghostmark/blob/main/LICENSE"
download: "https://github.com/markksantos/Ghostmark/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/markksantos/Ghostmark"
  - "https://github.com/markksantos/Ghostmark/blob/main/LICENSE"
  - "https://github.com/markksantos/Ghostmark/releases"
  - "https://nosleeplab.com/apps/ghostmark"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/markksantos/Ghostmark/main/AppIcon.icns"
    credit: "Mark Santos"
    license: "MIT; upstream app icon, trademarks retained"
---

Ghostmark keeps a tiled, customizable watermark on your desktop, so anything you record, share or teach with shows it live, with no export step. You set the text, an optional logo, font, opacity, rotation and layout, and choose whether the mark sits behind app windows, above them or above full-screen apps. It is for presenters, teachers and anyone who needs a visible mark on captured screens.

Requires macOS 26 or later on Apple silicon; the v1.0.0 binary is arm64. The app is ad-hoc signed and not notarized, so macOS may call it damaged. The README says to clear the quarantine flag once with `xattr -cr`, which keeps Gatekeeper on. It asks for no Accessibility or Screen Recording access and makes no network calls. On first launch macOS may ask about local networks; the README says choosing Don't Allow has no effect on the app.
