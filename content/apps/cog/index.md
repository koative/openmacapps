---
name: "Cog"
summary: "An audio player for lossless, lossy, tracker, MIDI and video game music formats, with ReplayGain and EQ."
category: "Media"
tags:
  - audio-player
  - music
  - audio
  - music-player
repository: https://github.com/losnoco/Cog
website: https://cog.losno.co
license: "GPL-2.0"
licenseUrl: https://github.com/losnoco/Cog/blob/main/COPYING
download: https://cog.losno.co
freeDownload: true
homebrew: "cog-app"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/losnoco/Cog
  - https://github.com/losnoco/Cog/blob/main/COPYING
  - https://cog.losno.co
  - https://apps.apple.com/us/app/cog-kode54/id1630499622
  - https://github.com/losnoco/Cog/blob/main/README.md
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/losnoco/Cog/main/CogAssets.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: "Christopher Snowhill and Cog contributors"
    license: "GPL-2.0; upstream project asset, trademarks retained"
---

Cog plays your music from a playlist window, and its plugins open far more than MP3 and FLAC. Tracker modules, video game rips and MIDI files play in the same list as AAC, Opus, WavPack and anything Core Audio or FFmpeg can decode.

- Game music comes through Game_Music_Emu, vgmstream and libvgm, along with C64 SID files, AdLib tunes and the PSF family.
- MIDI plays through built-in SoundFont, OPL3 FM or Roland SC-55 synthesizers, the last using a ROM set you supply, or through Audio Unit instruments.
- Cue sheets, M3U and PLS playlists, files inside archives, and HTTP or HLS streams open directly.
- ReplayGain works by album or track with clipping prevention, and an equalizer has presets.
- Speed and pitch shift with time-stretching from Rubber Band or Signalsmith Stretch. A plain varispeed mode changes both together, like a turntable.

An exclusive mode takes over the output device and switches it to each track's sample rate. Cog also shows synced lyrics, read from tags or fetched from LRCLIB, and scrobbles to Last.fm and ListenBrainz. With Remote Control turned on, on macOS 13 or later, the bundled `cog-mcp` tool lets MCP clients run playback and the playlist.

Because the app is sandboxed, it reads only folders you grant. Music, Downloads and Movies are allowed from the start. Add other music folders under Settings, General.

Cog needs macOS 12 or later. The direct download from cog.losno.co is a ZIP holding a notarized Universal app that updates itself with Sparkle, and a Mac App Store edition is also available. Christopher Snowhill forked the player in 2013 after its original development stopped and has maintained it since.
