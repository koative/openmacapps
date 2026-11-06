---
name: "Overkill"
summary: "Background app that keeps iTunes from opening when an iPhone connects, with a list of other apps to stop."
category: "Utilities"
tags:
  - iphone
  - music
  - automation
repository: "https://github.com/KrauseFx/overkill-for-mac"
website: "https://github.com/KrauseFx/overkill-for-mac"
license: "MIT"
licenseUrl: "https://github.com/KrauseFx/overkill-for-mac/blob/master/LICENSE"
download: "https://github.com/KrauseFx/overkill-for-mac/releases/download/1.0/Overkill.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
maintenance: unmaintained
maintenanceNote: "No commit since April 2023 (checked 2026-11-06)."
icon: "./assets/icon.png"
sources:
  - "https://github.com/KrauseFx/overkill-for-mac"
  - "https://github.com/KrauseFx/overkill-for-mac/blob/master/LICENSE"
  - "https://github.com/KrauseFx/overkill-for-mac/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/KrauseFx/overkill-for-mac/master/Overkill/Assets.xcassets/AppIcon.appiconset/Full-1.png"
    credit: "Felix Krause"
    license: "MIT; upstream app icon, trademarks retained"
---

Overkill runs in the background and closes iTunes whenever it starts, so an iPhone connection does not interrupt your work. When you do want iTunes, you can pause Overkill from its menu. You can also add other Mac apps, such as Photos, to the list so they are stopped too. It suits people who sync an iPhone and do not want iTunes opening on its own.

The README points to a zip of version 1.0 and gives no macOS version and no signing or notarization details, so allow the first launch in System Settings if macOS blocks it. The author says the app has no analytics and does not poll. The last commit is from April 2023.
