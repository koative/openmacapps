---
name: "Pear Desktop"
summary: "An unofficial YouTube Music desktop app with a large set of built-in plugins, formerly known as th-ch/youtube-music."
category: "Media"
tags:
  - music
  - streaming
  - plugins
  - cross-platform
  - music-player
repository: https://github.com/pear-devs/pear-desktop
website: https://github.com/pear-devs/pear-desktop
license: MIT
licenseUrl: https://github.com/pear-devs/pear-desktop/blob/master/license
download: https://github.com/pear-devs/pear-desktop/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/pear-devs/pear-desktop"
  - "https://github.com/pear-devs/pear-desktop/blob/master/license"
  - "https://github.com/pear-devs/pear-desktop/releases"
  - "https://github.com/pear-devs/homebrew-pear"
  - "https://raw.githubusercontent.com/pear-devs/pear-desktop/master/README.md"
  - "https://github.com/pear-devs/pear-desktop/tree/master/src/plugins"
  - "https://raw.githubusercontent.com/pear-devs/pear-desktop/master/electron-builder.yml"
  - "https://github.com/pear-devs/pear-desktop/releases/tag/v3.12.0"
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/pear-devs/pear-desktop/master/assets/icon.png
    credit: "th-ch, pear-devs and Pear Desktop contributors"
    license: "MIT repository asset; name and logo retained by the project; YouTube Music is a trademark of Google LLC"
---

Pear Desktop wraps the YouTube Music web player in its own window and lets you switch on plugins that change how it plays and looks. The installed app is still called YouTube Music, and the project started life as `th-ch/youtube-music`; that old GitHub address now redirects here.

The plugins live in the source tree, one folder each, and you turn them on individually. Among them:

- Playback: crossfade, an equalizer, playback speed, precise volume, skipping silences and skipping disliked songs.
- Lyrics and video: synced lyrics, a captions selector, picture-in-picture and a video toggle.
- Outside services: SponsorBlock, Discord, a scrobbler and a downloader.
- Extras: Touch Bar controls, an ambient mode and a visualizer.

You can also load your own CSS themes under Options > Visual Tweaks > Themes. Writing a new plugin means adding a folder under `src/plugins` with a TypeScript entry file, and the README walks through the hooks it gets.

Release 3.12.0 carries two Mac DMGs, one for Apple silicon and one for Intel, and the app asks for macOS 12 or later. The builds are not signed. If macOS reports the app as damaged, the README gives an `xattr -cr` command to run in Terminal. Homebrew users can install it from the project's own tap with `brew install pear-devs/pear/pear-desktop`.

The volunteers behind it state that the project has no connection to Google or YouTube.
