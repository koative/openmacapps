---
name: "Tameo"
summary: "Native clipboard manager with history search, on-device OCR for copied images, snippets and encrypted storage."
category: "Utilities"
tags:
  - clipboard-manager
  - ocr
  - snippets
  - privacy
alternativeTo:
  - paste
repository: "https://github.com/supergodak/tameo"
website: "https://tameo.ati-mirai.co.jp"
license: "MIT"
licenseUrl: "https://github.com/supergodak/tameo/blob/main/LICENSE"
download: "https://github.com/supergodak/tameo/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/supergodak/tameo"
  - "https://github.com/supergodak/tameo/blob/main/LICENSE"
  - "https://github.com/supergodak/tameo/releases"
  - "https://tameo.ati-mirai.co.jp"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/supergodak/tameo/main/Tameo/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "ATI Inc."
    license: "MIT; upstream app icon, trademarks retained"
---

Tameo keeps a clipboard history in the menu bar. Press ⌘⇧V to open a palette at the cursor, then press 1 to 0 to paste an item into the app you were using. History search works as you type, including Japanese input, and on-device Vision OCR makes text inside copied images and screenshots searchable and pasteable. Snippets are kept in folders, and Clipy snippets can be imported. It suits people who want clipboard history and image search without a cloud service. The README says there are no analytics or telemetry SDKs, the only network call is the Sparkle update check, and the history database is always encrypted with a key kept in the Keychain.

It requires macOS 14 or later, on Apple silicon or Intel, according to the README. Pasting into other apps needs Accessibility permission, which you grant once in System Settings. The release is signed with a Developer ID certificate, notarized by Apple and updated through Sparkle. The interface is in English; the README is also in Japanese.
