---
name: "Tiny Image"
summary: "Compresses and converts PNG, JPEG and WebP images through the TinyPNG API when you drop them on its window."
category: "Design"
tags: ["images", "compression", "conversion"]
repository: "https://github.com/kyleduo/TinyPNG4Mac"
website: "https://github.com/kyleduo/TinyPNG4Mac"
license: "MIT"
licenseUrl: "https://github.com/kyleduo/TinyPNG4Mac/blob/master/LICENSE"
download: "https://github.com/kyleduo/TinyPNG4Mac/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/kyleduo/TinyPNG4Mac", "https://github.com/kyleduo/TinyPNG4Mac/blob/master/LICENSE", "https://github.com/kyleduo/TinyPNG4Mac/releases", "https://raw.githubusercontent.com/kyleduo/TinyPNG4Mac/master/README.md", "https://raw.githubusercontent.com/kyleduo/TinyPNG4Mac/master/CHANGE_LOG.md", "https://github.com/kyleduo/TinyPNG4Mac/releases/tag/v2.2.1"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/kyleduo/TinyPNG4Mac/master/TinyPNG4Mac/TinyPNG4Mac/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "kyleduo", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Tiny Image sends the PNG, JPEG and WebP images you drop on its window to TinyPNG and saves the smaller files it gets back. Single files and whole folders both work, dropped on the window or the Dock icon. In Finder, you can also right-click them and choose Services, then Compress with Tiny Image.

The compression happens on TinyPNG's servers, so every image is uploaded there. You need your own API key from tinypng.com/developers, pasted into Settings. The window counts the images compressed this month.

Settings decide what happens to the results:

- Overwrite mode replaces the originals but keeps them until you quit, so you can restore one image or all of them.
- Save As mode leaves the originals alone and writes the compressed copies to a folder you choose. A file with the same name there gets replaced.
- Conversion turns every image into PNG, JPEG, AVIF or WebP, or picks whichever of those comes out smallest.
- Copyright, creation and location metadata can be kept, a feature TinyPNG supports.
- You set how many images are processed at the same time.

Failed tasks can be retried one by one or all together, and a finished image can be compressed again.

Version 2 needs macOS 13 Ventura or later, and earlier releases remain for older systems. The DMG holds a Universal app for Apple silicon and Intel. It is not notarized, and the README points to the Security & Privacy page in System Settings if the app does not open. Until a rename, the app was called TinyPNG4Mac; the developer dropped that name because it contained the words TinyPNG and macOS.
