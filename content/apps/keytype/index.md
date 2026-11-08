---
name: 'KeyType'
summary: 'System-wide tab autocomplete for macOS that suggests the next few words with a local language model.'
category: 'AI'
tags:
  - local-ai
  - keyboard
  - language-models
repository: https://github.com/johnbean393/KeyType
website: https://github.com/johnbean393/KeyType
license: 'MIT'
licenseUrl: https://github.com/johnbean393/KeyType/blob/main/LICENSE
download: https://github.com/johnbean393/KeyType/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/johnbean393/KeyType
  - https://github.com/johnbean393/KeyType/blob/main/LICENSE
  - https://github.com/johnbean393/KeyType/releases
  - https://raw.githubusercontent.com/johnbean393/KeyType/main/README.md
  - https://github.com/johnbean393/KeyType/releases/tag/v1.8.0
  - https://github.com/johnbean393/KeyType/releases/tag/v1.7.0
  - https://github.com/johnbean393/KeyType/releases/tag/v1.6.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/johnbean393/KeyType/main/.github/images/app-icon.png
    credit: 'Xi Nai Lai (johnbean393)'
    license: 'MIT repository asset; project name and icon retained by the author'
---

KeyType offers the next few words as you type, in whichever Mac app has focus. It reads the focused text field, predicts a short continuation at the cursor and draws it there as ghost text. Press Tab to accept it.

The suggestions come from a language model that runs on the Mac through llama.cpp. The README describes KeyType as an MIT-licensed alternative to Cotypist. Version 1.7 added typo and grammar correction, plus a larger model, LFM2.5-8B-A1B, meant for Macs with a lot of memory.

Setup is short. Drag the app from the DMG into Applications, open it and follow the onboarding; afterwards it runs from the menu bar. KeyType needs macOS 14 Sonoma, and the release notes recommend an Apple silicon Mac for on-device inference. The 1.8 DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.

Placing ghost text inside other apps' fields takes per-app work, and the source has a separate package for per-app overrides. Releases 1.6 and 1.8 consist almost entirely of fixes for where the ghost text lands in particular apps, among them Xcode, Microsoft Word, Mail, Safari, Chrome and Visual Studio Code.
