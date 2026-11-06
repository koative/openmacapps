---
name: "NotchMuse"
summary: "Synced lyrics for Spotify, Apple Music and NetEase or QQ Music, shown beside the notch, in the menu bar or above the Dock."
category: "Media"
tags:
  - lyrics
  - notch
  - media-controls
repository: "https://github.com/Xiye88/NotchMuse"
website: "https://notchmuse.com"
license: "MIT"
licenseUrl: "https://github.com/Xiye88/NotchMuse/blob/main/LICENSE"
download: "https://github.com/Xiye88/NotchMuse/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Xiye88/NotchMuse"
  - "https://github.com/Xiye88/NotchMuse/blob/main/LICENSE"
  - "https://github.com/Xiye88/NotchMuse/releases"
  - "https://notchmuse.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Xiye88/NotchMuse/main/MenuBarLyrics/Resources/AppIcon.icns"
    credit: "Carlos"
    license: "MIT; upstream app icon (converted from .icns, resized), trademarks retained"
---

NotchMuse shows time-synced lyrics for the song playing in Spotify, Apple Music, NetEase Cloud Music, QQ Music or Soda Music. The lyrics can sit in the menu bar, beside the notch, at the edge of the screen or above the Dock, and you can change their colours, background, opacity and width. It is for people who play music on the Mac and want lyrics without another window. It reads playback details only; the title, artist, album and duration go to a lyrics provider to find a match, and no audio is uploaded.

It needs macOS 14 or later on Apple silicon, and the README says Intel Macs are not supported. The build is ad-hoc signed and not notarized, so the first launch must be allowed under System Settings → Privacy & Security → Open Anyway. The v0.8.1 release is manual install only: the in-app updater does not deliver it, and the README says clean-Mac first-install checks have not been finished. Lyric coverage depends on third-party providers, so some songs will have none.
