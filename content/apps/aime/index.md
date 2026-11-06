---
name: "AIME"
summary: "Open-source Chinese input method for macOS built on RIME, local-first, with optional AI text actions."
category: "Productivity"
tags:
  - keyboard
  - local-first
  - offline
repository: "https://github.com/zoolapp/aime"
website: "https://aime.zool.app"
license: "MIT AND GPL-3.0"
licenseUrl: "https://github.com/zoolapp/aime/blob/main/LICENSE"
download: "https://github.com/zoolapp/aime/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/zoolapp/aime"
  - "https://github.com/zoolapp/aime/blob/main/LICENSE"
  - "https://github.com/zoolapp/aime/releases"
  - "https://aime.zool.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/zoolapp/aime/main/Apps/Shared/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "ZOOL LLC"
    license: "MIT; upstream app icon, trademarks retained"
---

AIME is an input method for macOS, built on the RIME engine with the Rime Ice scheme as its default. It offers full-pinyin and double-pinyin layouts, a visual settings app, subscriptions to RIME-compatible dictionaries, phrase lists, an emoji panel, and read-only import of an existing Squirrel setup. Translation, polishing and custom prompts run only when you ask for them, on Apple's on-device model where available or on an OpenAI-compatible endpoint you configure. It suits people who write in Chinese and want an open input method where typing stays on the Mac; AI actions leave it only when you ask, and only for an endpoint you configure.

AIME requires macOS 26 or later. The app runs on Apple silicon and Intel, while the aime command-line tool supports Apple silicon only. The installer is signed and notarized by Apple. The original code is MIT, but the installer bundles GPL-3.0 components, so the package as a whole is distributed under GPL-3.0 terms. The Apple on-device model is not available on devices or accounts in mainland China. This is an early 0.1.x release, and its features are still changing quickly.
