---
name: "Equinox"
summary: "Builds dynamic macOS wallpapers that change with the sun, the time of day, or light and dark appearance."
category: "Design"
tags:
  - desktop
  - customization
  - images
  - wallpaper
repository: "https://github.com/rlxone/Equinox"
website: "https://equinoxmac.com"
license: "MIT"
licenseUrl: "https://github.com/rlxone/Equinox/blob/main/LICENSE"
download: "https://github.com/rlxone/Equinox/releases"
freeDownload: true
homebrew: "equinox"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/rlxone/Equinox"
  - "https://github.com/rlxone/Equinox/blob/main/LICENSE"
  - "https://github.com/rlxone/Equinox/releases"
  - "https://apps.apple.com/us/app/equinox-create-wallpaper/id1591510203"
  - "https://equinoxmac.com"
  - "https://github.com/rlxone/Equinox/blob/main/README.md"
  - "https://github.com/rlxone/Equinox/releases/tag/v7.0"
  - "https://github.com/rlxone/Equinox/releases/tag/v6.0"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/rlxone/Equinox/main/Equinox/Equinox/Resources/AppIcon.xcassets/AppIcon.appiconset/icon512x2.png"
    credit: "Dmitry Meduho and Equinox contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Equinox builds the kind of wallpaper macOS uses for Dynamic Desktop and Light and Dark Desktop, from photos you supply. You choose one of three wallpaper types, drag your images into it, and export the wallpaper.

- Solar wallpapers pick the image from the sun's position, so the picture shown also follows the season.
- Time wallpapers switch images on a daily schedule you set.
- Appearance wallpapers need just two images, one shown in Light Mode and one in Dark Mode.
- The Solar calculator works out the sun's position for you. Give it the place, date and time a photo was taken, or slide along the sun timeline to match the sun's height in the shot, then drag the result onto the image.

To use the result, right-click the exported file and choose Services, then Set Desktop Picture. If the wallpaper then never changes, the README puts it down to a macOS issue. Its fix is to select any built-in Dynamic Desktop and set it to Dynamic first. Changing the clock in Date & Time settings is its suggested way to test the result.

Equinox 7.0 requires macOS 12 Monterey or later. Equinox 6.0 remains available for Mojave and Catalina. The v7.0 GitHub release is a DMG holding a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. The app is free and MIT-licensed, and the project also links a Mac App Store listing. The interface is available in ten languages, including French, German, Japanese, Korean and Turkish.
