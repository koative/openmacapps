---
name: "Jellyfin Desktop"
summary: "A desktop client for browsing and playing media from a Jellyfin server."
category: "Media"
tags: ["media-client", "jellyfin", "streaming", "video-player"]
alternativeTo: ["plex"]
repository: "https://github.com/jellyfin/jellyfin-desktop"
website: "https://jellyfin.org"
license: "GPL-2.0"
licenseUrl: "https://github.com/jellyfin/jellyfin-desktop/blob/master/LICENSE"
download: "https://github.com/jellyfin/jellyfin-desktop/releases"
freeDownload: true
homebrew: "jellyfin-media-player"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://www.plex.tv/", "https://github.com/jellyfin/jellyfin-desktop", "https://github.com/jellyfin/jellyfin-desktop/blob/master/LICENSE", "https://github.com/jellyfin/jellyfin-desktop/releases", "https://raw.githubusercontent.com/jellyfin/jellyfin-desktop/master/README.md", "https://github.com/jellyfin/jellyfin-desktop/releases/tag/v2.0.0", "https://formulae.brew.sh/cask/jellyfin-media-player", "https://jellyfin.org"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/jellyfin/jellyfin-desktop/blob/master/resources/images/icon.png", "credit": "Jellyfin Desktop contributors", "license": "GPL-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Jellyfin Desktop is the official desktop client for watching and listening to a Jellyfin server's library on your Mac. It wraps the familiar Jellyfin web interface in a Qt WebEngine window, but hands playback to libmpv instead of the browser's player. That gives you hardware decoding, audio passthrough to a receiver, and many formats that play directly rather than being transcoded by the server first.

You need a Jellyfin server running separately. The app connects to it on startup and keeps retrying until the server answers, and you can cancel that with Escape.

Version 2.0 renamed the app from Jellyfin Media Player, moved it to Qt 6 and added MPRIS media controls on Linux, early multi-profile support through command-line flags, and an option to fall back to the HTML5 player. Settings from Jellyfin Media Player are not carried over, so you will need to add your server again. Each profile keeps its settings in `~/Library/Application Support/Jellyfin Desktop`, and you can drop in an `mpv.conf` file to tune the player directly.

Plex works on the same model: a Plex Media Server holds your personal media, and Plex Pass is its premium subscription. The Jellyfin server Jellyfin Desktop talks to is also free software, so you can read or change the whole stack. The project currently points Mac users to development builds for Apple silicon and Intel, built from the latest code. The Homebrew cask still installs the older Jellyfin Media Player 1.12.0.
