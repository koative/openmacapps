---
name: "LyricGlow"
summary: "Synced, word-by-word lyrics for Spotify and Apple Music in the menu bar or a floating window, with translation."
category: "Media"
tags: ["music", "menu-bar", "lyrics"]
repository: "https://github.com/ateymoori/lyricglow"
website: "https://github.com/ateymoori/lyricglow"
license: "MIT"
licenseUrl: "https://github.com/ateymoori/lyricglow/blob/main/LICENSE"
download: "https://github.com/ateymoori/lyricglow/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/ateymoori/lyricglow", "https://github.com/ateymoori/lyricglow/blob/main/LICENSE", "https://github.com/ateymoori/lyricglow/releases", "https://raw.githubusercontent.com/ateymoori/lyricglow/main/README.md", "https://raw.githubusercontent.com/ateymoori/lyricglow/main/CHANGELOG.md", "https://raw.githubusercontent.com/ateymoori/lyricglow/main/package.json", "https://github.com/ateymoori/lyricglow/releases/tag/v0.8.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/ateymoori/lyricglow/main/build/icon.png", "credit": "AmirHossein Teymoori", "license": "MIT repository asset; trademarks retained"}]
---

Play a song in the Spotify or Apple Music desktop app and LyricGlow shows its lyrics in time with the music, lighting up each word as it is sung. The current line also appears in the menu bar beside the clock, which keeps it visible with the window closed. Command-L shows or hides the window from any app.

- A three-line view shows the previous, current and next line, and clicking a line jumps playback to that point.
- A full-lyrics view scrolls along with the song until you scroll it yourself.
- Floating Lyrics shrinks the window to one large line on the desktop that clicks pass through, and it stays above full-screen apps.
- Each line can carry a translation into one of 43 languages, with right-to-left text for Arabic, Persian and Hebrew.
- Album art, an artist biography and artist images fill the rest of the window. Each section can be hidden in settings.

Lyrics come from LRCLIB. Only time-synced lyrics are shown, so a track LRCLIB has no synced version of gets a not-found message. Lines are translated by Google Translate, and Lingva Translate steps in when Google fails. All of this needs an internet connection; lyrics, artwork and translations are cached on disk for seven days and stay available offline. The developer says the app has no analytics or tracking and needs no account.

Track detection runs through AppleScript, which is why macOS prompts on first launch to let LyricGlow control Spotify or Music under Automation. It runs from the menu bar without a Dock icon, is built with Electron and requires macOS 11 or later. Each release has separate disk images for Apple silicon and Intel, and in version 0.8.0 the app in both is signed with a Developer ID and notarized. The developer's Homebrew tap carries it as a cask.
