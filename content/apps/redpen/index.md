---
name: "Redpen"
summary: "Menu bar screenshot markup: circle an area, speak your note, and the transcript appears in red pen beside it."
category: "Productivity"
tags:
  - screenshots
  - annotation
  - voice-typing
  - notes
repository: "https://github.com/HMDRAMS-DEV/redpen"
website: "https://redpen.ramihmd.com"
license: "MIT"
licenseUrl: "https://github.com/HMDRAMS-DEV/redpen/blob/main/LICENSE"
download: "https://github.com/HMDRAMS-DEV/redpen/releases/latest/download/Redpen.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/HMDRAMS-DEV/redpen"
  - "https://github.com/HMDRAMS-DEV/redpen/blob/main/LICENSE"
  - "https://github.com/HMDRAMS-DEV/redpen/releases"
  - "https://redpen.ramihmd.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/HMDRAMS-DEV/redpen/main/Redpen/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Rami Alhamad"
    license: "MIT; upstream app icon, trademarks retained"
---

Redpen marks up screenshots the way a teacher marks a page. You circle part of an image, and it starts listening; the words you say appear beside the circle in red pen, and longer notes move under the image as numbered callouts. It finds new screenshots through Spotlight, can ask once after a burst whether to mark them up, and also opens files, drops and Photos picks. Copy puts the marked-up PNG on the clipboard for a chat with a model, and Save All writes a numbered set to a folder. It is for people who send screenshots to a model or a colleague and want to explain what is wrong with them.

Requires macOS 15 or later. The README says the app is signed with a Developer ID and notarized by Apple. Voice uses the Parakeet models by default, which download once, or Apple's speech recognizer, or you can type notes. On first run it asks for microphone, notification and Photos access; Photos is only needed to find screenshots taken on iPhone and iPad that reach the Mac through iCloud Photos. Redpen is not sandboxed, because it reads screenshots wherever macOS saves them.
