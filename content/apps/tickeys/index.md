---
name: "Tickeys"
summary: "Plays a short sound on each keystroke, with sound packs you can extend by editing a JSON file and adding WAV files."
category: "Utilities"
tags:
  - audio
  - keyboard
  - input
repository: "https://github.com/yingDev/Tickeys"
website: "https://yingdev.com/projects/tickeys"
license: "MIT"
licenseUrl: "https://github.com/yingDev/Tickeys/blob/master/LICENSE"
download: "https://github.com/yingDev/Tickeys/releases/download/0.5.0/Tickeys-0.5.0-yosemite.dmg"
freeDownload: true
maintenance: unmaintained
maintenanceNote: "No release since February 2016 and no commit since July 2020, as checked on 2026-11-06."
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/yingDev/Tickeys"
  - "https://github.com/yingDev/Tickeys/blob/master/LICENSE"
  - "https://github.com/yingDev/Tickeys/releases"
  - "https://github.com/yingDev/Tickeys/releases/download/0.5.0/Tickeys-0.5.0-yosemite.dmg"
  - "https://yingdev.com/projects/tickeys"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/yingDev/Tickeys/releases/download/0.5.0/Tickeys-0.5.0-yosemite.dmg"
    credit: "Tickeys contributors (YingDev)"
    license: "MIT; upstream app icon, trademarks retained"
---

Tickeys plays a short sound each time you press a key, which gives typing an instant audible response. It ships with sound packs stored in its data folder, including sets named bubble and mechanical. To add your own, copy a pack folder, add an entry to its schemes.json file and drop in WAV files. The app runs in the background without a Dock icon.

It has no declared minimum macOS version: the 0.5.0 app bundle omits that key, and the repository's Xcode project targets macOS 10.10. The app is notarized according to Gatekeeper, which accepted it when checked on 2026-11-06. The project is unmaintained: the last release is from February 2016 and the last commit from July 2020.
