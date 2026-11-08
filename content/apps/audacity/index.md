---
name: "Audacity"
summary: "Records and edits audio on a multitrack timeline, with built-in effects, spectrogram analysis and plugin support."
category: "Media"
tags: ["audio", "recording", "audio-editor"]
alternativeTo: ["adobe-audition"]
repository: "https://github.com/audacity/audacity"
website: "https://www.audacityteam.org/"
license: "GPL-3.0-only"
licenseUrl: "https://github.com/audacity/audacity/blob/master/LICENSE.txt"
download: "https://github.com/audacity/audacity/releases"
freeDownload: true
homebrew: "audacity"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/audacity/audacity", "https://github.com/audacity/audacity/blob/master/LICENSE.txt", "https://raw.githubusercontent.com/audacity/audacity/master/README.md", "https://github.com/audacity/audacity/releases", "https://github.com/audacity/audacity/releases/tag/Audacity-4.0.2", "https://www.audacityteam.org/", "https://www.audacityteam.org/download/mac/", "https://www.audacityteam.org/audacity-4/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/audacity/audacity/blob/master/share/icons/AppIcon/AU4_AppIcon_256x256.png", "credit": "Audacity contributors", "license": "GPL-3.0-only; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

Audacity records audio and edits it as clips on a multitrack timeline. You trim a clip with its top handle, stretch it with the bottom one, and zoom in far enough to drag individual samples with the mouse. Each track has a meter that shows the input level while you record and the playback level otherwise.

- Effects include a compressor, limiter, reverb, graphic EQ and filter curve, all rebuilt for version 4.
- Plugins load in LV2, VST3, Audio Units and Nyquist formats, though the Apple silicon-only DMG has no plugin support.
- The Spectrogram view and Vamp analyzers show what is happening in the frequencies of a recording.
- Labels mark points or regions on the timeline, and you can export audio split by those labels.

Workspaces change which tools sit in the toolbar and set the ruler to show either time or bars and beats. Classic, Music and Modern come built in, and you can build your own. Projects from Audacity 3 in `.aup3` format open in version 4 unchanged.

Audacity imports and exports WAV, MP3, FLAC and Ogg. WMA, M4A, AC3 and other formats need the separate FFmpeg library, which the project links from its download page. You can also save projects to audio.com, and Get Effects browses free and paid plugins, samples and one-shots from MuseHub.

The Mac download comes as a Universal DMG, an Apple silicon DMG and an Intel DMG. Audacity is tested on macOS 14 and 15, the 4.0.2 app needs macOS 13 or later, and the app inside the DMG is notarized by Apple.

Like Adobe Audition, Audacity records and edits audio. It is free and GPL-licensed, and it runs on macOS, Windows and Linux.
