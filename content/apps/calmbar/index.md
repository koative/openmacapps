---
name: "CalmBar"
summary: "Menu bar toolbox with fan and temperature readings, charge limits, per-app volume, clipboard history and screen recording."
category: "Utilities"
tags:
  - menu-bar
  - system-monitoring
  - clipboard
  - screen-recording
repository: "https://github.com/chao-eng/CalmBar"
website: "https://calmbar.bujic.cc"
license: "Apache-2.0"
licenseUrl: "https://github.com/chao-eng/CalmBar/blob/main/LICENSE"
download: "https://github.com/chao-eng/CalmBar/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/chao-eng/CalmBar"
  - "https://github.com/chao-eng/CalmBar/blob/main/LICENSE"
  - "https://github.com/chao-eng/CalmBar/releases"
  - "https://calmbar.bujic.cc"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/chao-eng/CalmBar/main/app/Resources/AppIcon.icns"
    credit: "CalmBar contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

CalmBar is a menu bar toolbox for everyday Mac chores. It reads CPU, GPU and battery temperatures and can run the fans in automatic, manual or curve modes. It limits charging to a chosen range between 70 and 100 percent, keeps the Mac awake, hides rarely used menu bar icons, sets per-app volume and output device, records the screen, runs OCR on screen text, keeps clipboard history, and cleans app leftovers and developer caches. It is meant for people who want these small utilities in one panel instead of several apps.

It requires macOS 14.0 or later, and per-app volume needs 14.4. The README says both Apple silicon and Intel Macs are supported. The DMG is ad-hoc signed and not notarized by Apple. On recent macOS versions the system blocks it before it mounts and offers no Open Anyway button, so the README recommends clearing the quarantine attribute with xattr before the first launch. The app also includes a tool that clears quarantine from other apps.
