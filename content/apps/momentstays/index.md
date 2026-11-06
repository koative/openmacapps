---
name: "MomentStays"
summary: "Converts Android Motion Photos to Apple Live Photos and back, keeping the chosen cover frame and the original video and audio."
category: "Media"
tags:
  - android
  - conversion
  - live-photo
  - local-first
repository: "https://github.com/LinoFish/MomentStays"
website: "https://momentstays.linofish.com/"
license: "GPL-3.0-only"
licenseUrl: "https://github.com/LinoFish/MomentStays/blob/main/LICENSE"
download: "https://github.com/LinoFish/MomentStays/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/LinoFish/MomentStays"
  - "https://github.com/LinoFish/MomentStays/blob/main/LICENSE"
  - "https://github.com/LinoFish/MomentStays/releases"
  - "https://momentstays.linofish.com/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/LinoFish/MomentStays/main/apple/ios/MomentStays/Assets.xcassets/AppIcon.appiconset/AppIcon.png"
    credit: "Lino"
    license: "GPL-3.0-only; upstream app icon, trademarks retained"
---

MomentStays converts Android Motion Photos into Apple Live Photos, and Live Photos back into Motion Photos, without re-encoding the original video or audio. It keeps the cover frame you chose and can add the results straight to a Photos album or write files to a folder. It is for people who move photos between Android phones, iPhones and Apple Photos and want the original streams and HDR gain maps kept intact.

Requires macOS 12 or later; the release is a universal build. The DMG and zip are not notarized: they are ad-hoc signed and Gatekeeper rejects them, so the first launch must be allowed in System Settings. The README says runtime checks so far ran on Intel under macOS 12 and that Apple silicon is still to be validated. The v1.7.2 notes say Apple HDR recognition of converted photos is not yet verified, and vendor support covers only the layouts the parser can validate.
