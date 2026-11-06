---
name: "Poli"
summary: "Menu bar writing tool that proofreads, rewrites, summarizes and translates selected text in any app, on-device."
category: "Writing"
tags:
  - writing
  - menu-bar
  - local-ai
  - keyboard-shortcuts
repository: "https://github.com/luchi0208/Poli"
website: "https://luchi0208.github.io/Poli/"
license: "MIT"
licenseUrl: "https://github.com/luchi0208/Poli/blob/main/LICENSE"
download: "https://github.com/luchi0208/Poli/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/luchi0208/Poli"
  - "https://github.com/luchi0208/Poli/blob/main/LICENSE"
  - "https://github.com/luchi0208/Poli/releases/latest"
  - "https://luchi0208.github.io/Poli/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/luchi0208/Poli/releases/download/v1.0/Poli.dmg"
    credit: "Luan Nguyen"
    license: "MIT; upstream app icon, trademarks retained"
---

Poli works on selected text in any app, including Electron chat apps. Select text, press Control-Option-C, pick a style such as proofread, a tone rewrite, summary, key points or one of six translations, and review a word-level diff before the result replaces your selection. It can save up to ten custom instructions and keeps a history of past transformations. Processing uses Apple's on-device foundation models, so no API key or account is needed.

It suits people who write many short messages and emails across apps and want fixes without pasting text into a chatbot.

Requires macOS 26.0 or later on an Apple silicon Mac, plus Accessibility permission so it can read the selection and replace it. The DMG is Developer ID signed and notarized. The README says the app runs without the App Sandbox, which cross-app Accessibility needs. Accessibility permission is tied to the app's path, so replacing the app bundle means granting it again.
