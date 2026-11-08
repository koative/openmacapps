---
name: "YT Music"
summary: "An unofficial standalone wrapper for YouTube Music with media keys, track notifications and Touch Bar controls."
category: "Media"
tags:
  - music
  - media-controls
  - notifications
  - music-player
repository: https://github.com/steve228uk/YouTube-Music
website: "https://github.com/steve228uk/YouTube-Music"
license: "MIT"
licenseUrl: https://github.com/steve228uk/YouTube-Music/blob/master/LICENSE
download: https://github.com/steve228uk/YouTube-Music/releases
freeDownload: true
homebrew: "yt-music"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release since May 2022 and no commit since August 2022 (checked 2026-11-08)."
icon: ./assets/icon.png
sources:
  - https://github.com/steve228uk/YouTube-Music
  - https://github.com/steve228uk/YouTube-Music/blob/master/LICENSE
  - https://github.com/steve228uk/YouTube-Music/releases
  - https://formulae.brew.sh/cask/yt-music
  - https://raw.githubusercontent.com/steve228uk/YouTube-Music/master/README.md
  - https://github.com/steve228uk/YouTube-Music/releases/tag/1.3.3
  - https://github.com/steve228uk/YouTube-Music/commits/master
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/steve228uk/YouTube-Music/master/YT%20Music/Supporting%20Files/Assets.xcassets/AppIcon.appiconset/Icon-MacOS-128x128@2x.png
    credit: "Cocoon Development Ltd."
    license: "Repository asset; based on the YouTube Music logo, a trademark of Google LLC, not covered by the MIT code license"
---

YT Music loads music.youtube.com in a WebKit view and runs it as a standalone process, so the player lives in its own app window instead of a browser tab. What you see inside is the YouTube Music site itself. The app adds the Mac controls around it.

- The keyboard's media keys play, pause and skip tracks.
- The app has its own keyboard shortcuts for playback.
- The current track shows up in the Now Playing widget in Notification Center.
- On a MacBook Pro with a Touch Bar, media controls and a scrubber appear there.
- A system notification announces each new track.

The latest release, 1.3.3, came out in May 2022. It is a ZIP holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and it asks for macOS 10.13 or later. You can also install it as the yt-music Homebrew cask, or build it yourself in Xcode after running CocoaPods.

YT Music is unofficial and has no connection to Google or YouTube. The ytmusic.app domain that once served as its website now hosts an unrelated gambling site, so get the app from the GitHub repository.
