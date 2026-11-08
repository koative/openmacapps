---
name: "Kaset"
summary: "An unofficial Mac player for YouTube Music and YouTube with media keys, lyrics and a play queue."
category: "Media"
tags: ["music", "video", "streaming", "youtube", "music-player"]
repository: "https://github.com/sozercan/kaset"
website: "https://sozercan.github.io/kaset/"
license: "MIT"
licenseUrl: "https://github.com/sozercan/kaset/blob/main/LICENSE"
download: "https://github.com/sozercan/kaset/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/sozercan/kaset", "https://github.com/sozercan/kaset/blob/main/LICENSE", "https://github.com/sozercan/kaset/releases", "https://github.com/sozercan/kaset/blob/main/README.md", "https://sozercan.github.io/kaset/", "https://github.com/sozercan/kaset/releases/tag/v0.14.2"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/sozercan/kaset/main/Sources/Kaset/Resources/kaset.icns", "credit": "sozercan and Kaset contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Kaset plays YouTube Music and YouTube in a Mac window with a sidebar and a player bar, and a switch at the bottom of the sidebar flips between the two. DRM-protected YouTube Music tracks play through your own Premium subscription, and signing in with a Google account personalizes both services.

On the music side:

- Synced lyrics highlight line by line when the song has timing data.
- A six-band equalizer with presets works on the audio output.
- The queue can be reordered, shuffled or cleared, and smart shuffle mixes in suggested tracks.
- You can browse your playlists, liked songs and podcasts, create playlists, and open Explore for new releases and charts.

The YouTube side covers recommendations, subscriptions, Shorts, Watch Later, history and comments, with captions, quality selection and picture in picture.

Kaset shows up in Now Playing in Control Center, answers media keys and keeps playing after you close the window. AppleScript, Shortcuts actions, a `kaset://` URL scheme and keyboard shortcuts let you drive it from elsewhere. Playback runs in WebKit, which can load Web Extensions such as uBlock Origin Lite and SponsorBlock if you add them. On macOS 26, Apple Intelligence explains lyrics and takes requests in plain language.

Kaset needs macOS 15.4 or later and ships as a Universal disk image. It is not signed with a Developer ID or notarized. A manual download therefore needs Open Anyway in Privacy & Security, while the Homebrew tap clears the quarantine flag for you. Kaset is an unofficial app with no ties to Google or YouTube.
