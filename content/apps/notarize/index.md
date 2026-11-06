---
name: "Notarize"
summary: "Shows the Apple notarization status of your builds for several developer accounts at once."
category: "Developer tools"
tags:
  - code-signing
  - notarization
  - developer-utilities
repository: "https://github.com/macmade/Notarize"
website: "https://xs-labs.com/en/apps/notarize/"
license: "MIT"
licenseUrl: "https://github.com/macmade/Notarize/blob/main/LICENSE"
download: "https://github.com/macmade/Notarize/releases/download/1.2.0/Notarize.app.zip"
freeDownload: true
maintenance: unmaintained
maintenanceNote: "No commit since February 2023 (checked 2026-11-06)."
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/macmade/Notarize"
  - "https://github.com/macmade/Notarize/blob/main/LICENSE"
  - "https://github.com/macmade/Notarize/releases/download/1.2.0/Notarize.app.zip"
  - "https://xs-labs.com/en/apps/notarize/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/macmade/Notarize/releases/download/1.2.0/Notarize.app.zip"
    credit: "Jean-David Gadina (XS-Labs)"
    license: "MIT; app icon, trademarks retained"
---

Notarize is a macOS tool for developers that monitors the Apple notarization status of their builds. It works with several developer accounts at once, so the status of submissions from different accounts appears in one place. The README describes it as a status monitor for people who submit builds to Apple.

The download is a universal build (arm64 and x86_64) with a minimum of macOS 11.3 according to its Info.plist. It is signed with a Developer ID and notarized, and Gatekeeper accepts it. The last commit is from February 2023.
