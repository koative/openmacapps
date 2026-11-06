---
name: "AudioMator"
summary: "Native macOS editor for audio file tags and artwork, with optional online lookups and track renumbering."
category: "Media"
tags:
  - audio
  - metadata
  - music
repository: "https://github.com/ChrisLloydME/AudioMator"
website: "https://github.com/ChrisLloydME/AudioMator"
license: "AGPL-3.0"
licenseUrl: "https://github.com/ChrisLloydME/AudioMator/blob/main/LICENSE"
download: "https://github.com/ChrisLloydME/AudioMator/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ChrisLloydME/AudioMator"
  - "https://github.com/ChrisLloydME/AudioMator/blob/main/LICENSE"
  - "https://github.com/ChrisLloydME/AudioMator/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ChrisLloydME/AudioMator/main/Docs/Images/AppIcon-1024x1024%401x.png"
    credit: "AudioMator contributors"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

AudioMator edits the tags of music files: common fields for one file or a selection, a raw TagLib view for everything else, track and disc numbers, and artwork from a local image or the clipboard. It can also convert between tags and file names, and it can watch folders for new files. It is for people with a local music library who want to fix metadata without relying on a streaming service.

It needs macOS 15.0 or later. The app is sandboxed and only sends requests when you start an online lookup to MusicBrainz, iTunes or LRCLIB. The README says the app has no telemetry. Builds are published on GitHub Releases, and its update check opens the releases page instead of installing an update. The README does not say whether builds are notarized.
