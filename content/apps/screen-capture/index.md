---
name: "Screen Capture"
summary: "Native screenshot tool with region annotation and scrolling long capture, built on ScreenCaptureKit."
category: "Utilities"
tags:
  - screenshots
  - screenshot-tool
  - native
alternativeTo:
  - cleanshot
repository: "https://github.com/nasadunadu/screen-capture-macos"
website: "https://nasadunadu.github.io/screen-capture-macos/"
license: "Apache-2.0"
licenseUrl: "https://github.com/nasadunadu/screen-capture-macos/blob/main/LICENSE"
download: "https://github.com/nasadunadu/screen-capture-macos/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/nasadunadu/screen-capture-macos"
  - "https://github.com/nasadunadu/screen-capture-macos/blob/main/LICENSE"
  - "https://github.com/nasadunadu/screen-capture-macos/releases/latest"
  - "https://nasadunadu.github.io/screen-capture-macos/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/nasadunadu/screen-capture-macos/releases/latest/download/ScreenCapture-0.5.0-macos-arm64.dmg"
    credit: "nasadunadu"
    license: "Apache-2.0; upstream app icon from AppIcon.icns in ScreenCapture.app, trademarks retained"
---

Screen Capture takes region screenshots with an inline annotation toolbar (Command-4 by default) and scrolling long captures (Command-5). The scrolling mode stitches a page as it scrolls and trims sticky headers and footers from the result. It is for people who want a small, fast native tool for screenshots and markup without subscriptions or accounts. The README says it makes no network connections and has no analytics.

It needs macOS 14.0 or later on Apple silicon; the README points Intel users to the older universal v0.4.14 release. The DMG is signed with a Developer ID and notarized, so it opens without a Gatekeeper workaround. The first capture asks for Screen Recording permission. Shortcuts can be changed in Settings.
