---
name: "Spray Can"
summary: "Keyboard control for macOS: labels on every control, a screen grid for everything else and on-device OCR."
category: "Productivity"
tags:
  - keyboard
  - accessibility
  - ocr
  - keyboard-shortcuts
repository: "https://github.com/Kymer0615/spray_can"
website: "https://github.com/Kymer0615/spray_can"
license: "MIT"
licenseUrl: "https://github.com/Kymer0615/spray_can/blob/main/LICENSE"
download: "https://github.com/Kymer0615/spray_can/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Kymer0615/spray_can"
  - "https://github.com/Kymer0615/spray_can/blob/main/LICENSE"
  - "https://github.com/Kymer0615/spray_can/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Kymer0615/spray_can/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Spray Can contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Spray Can lets you click on screen without a mouse. Press Shift-Command-J and every button, link, row and field gets a short label beside its text; type the label, and the pointer moves there, with Return to click. A grid mode reaches any point on any display, and freestyle and scroll modes cover the rest. Optional on-device OCR labels text in apps that do not expose their controls well to Accessibility. It suits keyboard-first users who need to reach controls the keyboard cannot select.

The README says it runs on macOS 14 or later on Apple silicon and Intel. Releases are signed with the project's own certificate and are not notarized, so the first launch needs Open Anyway, though the same certificate keeps permissions across updates from 0.1.7. It asks for Accessibility, and for Screen Recording only if you use OCR. The README says testing with third-party apps, multiple displays and full screen is still in progress, and that building from source needs Xcode 26.
