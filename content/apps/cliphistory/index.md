---
name: "ClipHistory"
summary: "Free clipboard history for text and images, opened from one hotkey and stored encrypted on your Mac."
category: "Utilities"
tags:
  - clipboard
  - clipboard-manager
  - menu-bar
  - keyboard-shortcuts
alternativeTo:
  - paste
repository: "https://github.com/weiykong/ClipHistory"
website: "https://weiykong.github.io/ClipHistory/"
license: "MIT"
licenseUrl: "https://github.com/weiykong/ClipHistory/blob/main/LICENSE"
download: "https://github.com/weiykong/ClipHistory/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/weiykong/ClipHistory"
  - "https://github.com/weiykong/ClipHistory/blob/main/LICENSE"
  - "https://github.com/weiykong/ClipHistory/releases/latest"
  - "https://weiykong.github.io/ClipHistory/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/weiykong/ClipHistory/releases/download/v1.3.4/ClipHistory.dmg"
    credit: "weiykong (ClipHistory)"
    license: "MIT; upstream app icon, trademarks retained"
---

ClipHistory keeps a searchable history of the text and images you copy. A hotkey, Option-V by default, opens a popup at the cursor, where you can filter items, pin favourites and see which app each copy came from. Clipboard history is written to disk encrypted with AES-256-GCM, with the key kept in the Keychain. Items that password managers mark as concealed are skipped, and you can exclude any app from being recorded.

It suits people who want a fast, single-purpose clipboard manager without a subscription or telemetry. It needs macOS 14 or later and the Accessibility permission, which the onboarding screen asks for. The app is not notarized: its DMG is only ad hoc signed, so the first launch has to be allowed in System Settings, or the quarantine attribute removed as the README describes.
