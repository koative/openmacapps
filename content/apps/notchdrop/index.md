---
name: NotchDrop
summary: Turns the MacBook notch into a temporary file shelf with an AirDrop shortcut.
category: Utilities
tags:
  - notch
  - files
  - drag-and-drop
repository: https://github.com/Lakr233/NotchDrop
website: https://github.com/Lakr233/NotchDrop
license: MIT
licenseUrl: https://github.com/Lakr233/NotchDrop/blob/main/LICENSE
download: https://apps.apple.com/app/notchdrop/id6529528324
freeDownload: true
featured: false
added: 2026-10-17
verified: 2026-11-08
sources:
  - https://github.com/Lakr233/NotchDrop
  - https://github.com/Lakr233/NotchDrop/blob/main/LICENSE
  - https://github.com/Lakr233/NotchDrop/blob/main/README.md
  - https://apps.apple.com/app/notchdrop/id6529528324
  - https://github.com/Lakr233/NotchDrop/releases
  - https://github.com/Lakr233/NotchDrop/blob/main/NotchDrop.xcodeproj/project.pbxproj
assets:
  - path: ./assets/icon.png
    source: https://github.com/Lakr233/NotchDrop/blob/e70b3d715a99e47de6eb823540282eafc7401a3a/NotchDrop/Assets.xcassets/AppIcon.appiconset/icon-256.png
    credit: NotchDrop contributors
    license: MIT; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/Lakr233/NotchDrop/blob/e70b3d715a99e47de6eb823540282eafc7401a3a/Resources/%E6%88%AA%E5%B1%8F2024-07-08%2003.14.34.png
    credit: NotchDrop contributors
    license: MIT; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: NotchDrop file shelf expanded beneath the MacBook notch.
    source: https://github.com/Lakr233/NotchDrop/blob/e70b3d715a99e47de6eb823540282eafc7401a3a/Resources/%E6%88%AA%E5%B1%8F2024-07-08%2003.14.34.png
    credit: NotchDrop contributors
icon: ./assets/icon.png
---

NotchDrop turns the area around a MacBook's notch into a short-term shelf for files. You drag a file onto the notch, it waits there while you move between apps, and a click opens it when you need it.

- Dropped files are kept for one day by default, and you can change that period in the settings.
- An AirDrop shortcut sits on the notch itself.
- Holding Option and clicking the x mark on a file removes it from the shelf.
- The developer says it should work alongside menu bar managers.

The Mac App Store version is free and lists macOS 13 or later. The project's GitHub releases page also carries builds, most recently 2.16.42 from November 2024. You can build the app yourself with Xcode, too. The README gives an `xcodebuild` command that produces an ad-hoc signed copy, which macOS may block on first launch until you right-click it and choose Open.

The code is MIT-licensed, and the developer calls the project privacy-focused. NotchDrop took its first inspiration from NotchNook, with fewer settings to configure. Developers who want a similar notch in their own apps can use NotchNotification, a separate package from the same author that is built on NotchDrop.
