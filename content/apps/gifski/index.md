---
name: Gifski
summary: "Turns video clips into animated GIFs, with controls for size, frame rate, quality and looping."
category: Media
tags:
  - gif
  - video
  - conversion
repository: https://github.com/sindresorhus/Gifski
website: https://sindresorhus.com/gifski
license: MIT
licenseUrl: https://github.com/sindresorhus/Gifski/blob/main/license
download: https://apps.apple.com/app/id1351639930
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/sindresorhus/Gifski
  - https://github.com/sindresorhus/Gifski/blob/main/license
  - https://github.com/sindresorhus/Gifski/blob/main/readme.md
  - https://apps.apple.com/app/id1351639930
  - https://raw.githubusercontent.com/sindresorhus/Gifski/main/readme.md
  - https://sindresorhus.com/gifski
assets:
  - path: ./assets/icon.png
    source: https://github.com/sindresorhus/Gifski/blob/e184b284886929b9401e2442629a57650d3231f4/Stuff/AppIcon-readme.png
    credit: Gifski contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Drop a video into Gifski, trim and crop it, and it turns the clip into an animated GIF. The app is a Mac front end for the gifski encoder, which uses pngquant to build palettes across frames and dithers over time. A single frame can therefore use thousands of colors, and gradients stay smooth.

- You set exact dimensions, speed and frame rate, up to 50 frames per second.
- The GIF can loop, bounce back and forth, or pause between loops. Bounce doubles the frames, and the file size with them.
- A quality slider, backed by gifsicle, trades detail for a smaller file.
- A preview shows the result before you convert.
- You can send a video to it through the Share menu, a system service or a Shortcuts action.

After a conversion, Command-C copies the GIF and Command-S saves it. Gifski reads the formats macOS itself can play, such as MP4 or MOV with H.264, HEVC or ProRes. QuickTime Animation and WebM are out; for transparent video, ProRes 4444 XQ is the suggested format. Rates above 50 frames per second are left out on purpose, because browsers slow such GIFs right down.

The current version needs macOS 26 and is free on the Mac App Store. Older builds remain available for macOS 10.13 through 13. A separate version outside the App Store, refreshed about once a year, covers people who cannot use the store. The developer says the app collects no personal data.
