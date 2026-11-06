---
name: "Lucid"
summary: "Menu bar app that enhances low-bitrate browser video on Apple silicon with on-device AI upscaling."
category: "Media"
tags:
  - video
  - menu-bar
  - local-ai
  - native
repository: "https://github.com/braedonsaunders/lucid"
website: "https://github.com/braedonsaunders/lucid"
license: "MIT"
licenseUrl: "https://github.com/braedonsaunders/lucid/blob/main/LICENSE"
download: "https://github.com/braedonsaunders/lucid/releases/download/v1.0.2/Lucid-1.0.2-Apple-Silicon.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/braedonsaunders/lucid"
  - "https://github.com/braedonsaunders/lucid/blob/main/LICENSE"
  - "https://github.com/braedonsaunders/lucid/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/braedonsaunders/lucid/main/Lucid/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Braedon Saunders"
    license: "MIT; upstream app icon, trademarks retained"
---

Lucid is a menu bar app that uses on-device AI to reconstruct detail and soften compression artifacts in low-bitrate video playing in Chrome and Edge. It works at 2× resolution and is meant for people who watch compressed browser streams on an Apple silicon Mac and want them to look cleaner without sending video to a cloud service. A companion extension for the browser is included.

Requires macOS 26 or later on Apple silicon. The app is Developer ID signed and notarized, so it does not need an Open Anyway step. Enhancement runs locally with no account, but it only works on streams and resolutions it supports; the release notes say unsupported source resolutions show a message instead. The project is MIT-licensed, with its source and model packages included.
