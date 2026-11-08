---
name: "Cida"
summary: "Translates and rewrites selected text in any Mac app, using the large language model service you configure."
category: "Writing"
tags:
  - translation
  - writing
  - local-ai
repository: "https://github.com/Xuanwo/cida"
website: "https://cida.xuanwo.io"
license: "Apache-2.0"
licenseUrl: "https://github.com/Xuanwo/cida/blob/main/LICENSE"
download: "https://cida-releases.xuanwo.io/latest/Cida.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Xuanwo/cida"
  - "https://github.com/Xuanwo/cida/blob/main/LICENSE"
  - "https://github.com/Xuanwo/cida/releases/tag/v1.6.0"
  - "https://cida.xuanwo.io"
assets:
  - path: ./assets/icon.png
    source: https://github.com/Xuanwo/cida/releases/download/v1.6.0/Cida-1.6.0-222.dmg
    credit: Cida contributors
    license: Apache-2.0; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Cida (辞达 in its Chinese interface) works on selected text in any app. Option-A opens a panel that translates the selection, and Option-F rewrites it in place, with Command-Z to undo. Option-S translates text inside a captured screen region, and Option-D translates a paragraph in place; Shift-Option-D translates a whole window as it scrolls. You can add your own text actions as prompts. Cida sends text only to the model service you choose, which can be a hosted API or a local server, and it recognises screenshot text on the Mac with Apple's Vision framework. It also includes a command-line interface that shares the app's configuration.

It suits people who read and write across languages in many different apps and want a shortcut rather than a browser tab. The app itself is free, but the model calls are billed by the provider you pick.

Cida needs macOS 15 or later and an API key or a local model server. The DMG is signed with a Developer ID and notarized. Accessibility and Screen Recording are optional and enable some of the shortcuts; without them, parts of the in-place translation do not work. The README says the app keeps no history and collects no data beyond the requests sent to your chosen provider.
