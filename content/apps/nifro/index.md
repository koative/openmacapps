---
name: "Nifro"
summary: "Turns any website into a macOS desktop wallpaper, with per-display sites, playlists and cropping."
category: "Design"
tags:
  - wallpaper
  - desktop
  - live-wallpaper
repository: "https://github.com/PathGao/Nifro"
website: "https://github.com/PathGao/Nifro"
license: "MIT"
licenseUrl: "https://github.com/PathGao/Nifro/blob/main/license"
licenseNotes: "The LICENSE copyright line names Sindre Sorhus, author of Plash, which the README credits as inspiration, rather than the repository owner."
download: "https://github.com/PathGao/Nifro/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/PathGao/Nifro"
  - "https://github.com/PathGao/Nifro/blob/main/license"
  - "https://github.com/PathGao/Nifro/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/PathGao/Nifro/main/Sources/Nifro/Assets.xcassets/AppIcon.appiconset/icon_128x128%402x.png"
    credit: "Nifro contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Nifro shows a web page behind your windows as your Mac's desktop wallpaper: a nature film, a live camera, a map, a dashboard or a generative art site. Each display can show a different page, and pages can be grouped into playlists that advance in order, at random or by schedule. You can crop a page so only the part you want sits on the desktop. Holding a key lets you click, scroll and zoom the page, and letting go returns it to the background. It suits people who want a live background or an ambient dashboard, and it ships a gallery of pages chosen for desktop use. The interface is available in English and Simplified Chinese.

It requires macOS 15 or later, with separate DMGs for Apple silicon and Intel. The README says releases from v0.9.1 are signed with a Developer ID and notarized before publication. It also notes a known macOS bug in which a Dock set to stay visible can behave as if it were auto-hidden during full-screen video; running `killall Dock` restores it. Building from source needs Xcode 26 or later.
