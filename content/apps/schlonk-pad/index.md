---
name: "schlonk-pad"
summary: "Native macOS app that wraps yt-dlp to download social media videos, then lets you drag them into chats or folders."
category: "Media"
tags:
  - video
  - downloads
  - download-manager
repository: "https://github.com/crux/schlonk-pad"
website: "https://github.com/crux/schlonk-pad"
license: "MIT"
licenseUrl: "https://github.com/crux/schlonk-pad/blob/main/LICENSE"
download: "https://github.com/crux/schlonk-pad/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/crux/schlonk-pad"
  - "https://github.com/crux/schlonk-pad/blob/main/LICENSE"
  - "https://github.com/crux/schlonk-pad/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/crux/schlonk-pad/main/app/SchlonkPad/Assets.xcassets/AppIcon.appiconset/icon_512x512.png"
    credit: "Dirk Lüsebrink"
    license: "MIT; upstream app icon, trademarks retained"
---

schlonk-pad is a small window for saving videos from social media posts. You paste a post's URL, it downloads the video with yt-dlp, and you can drag the file into a chat, a post composer or any folder, so the recipient gets the video itself. Downloads are saved to `~/Downloads/schlonk-pad/`. It suits people who want to share a clip without sending the recipient to the original site.

It needs macOS 13 or later and is a universal build. The app is not notarized, and the project says so on purpose, so the first launch has to be allowed in System Settings (the Homebrew cask removes the quarantine flag for you). ffmpeg is not bundled yet, so sites that need separate video and audio streams merged may produce lower quality or fail, and the App Sandbox is disabled.
