---
name: "Sonic Visualiser"
summary: "Shows waveforms, spectrograms and annotation layers for music recordings on one shared timeline."
category: "Media"
tags: ["audio", "analysis", "research"]
repository: "https://github.com/sonic-visualiser/sonic-visualiser"
website: "https://www.sonicvisualiser.org/"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/sonic-visualiser/sonic-visualiser/blob/default/COPYING"
download: "https://github.com/sonic-visualiser/sonic-visualiser/releases"
freeDownload: true
homebrew: "sonic-visualiser"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/sonic-visualiser/sonic-visualiser", "https://github.com/sonic-visualiser/sonic-visualiser/blob/default/COPYING", "https://github.com/sonic-visualiser/sonic-visualiser/blob/default/README.md", "https://github.com/sonic-visualiser/sonic-visualiser/releases", "https://github.com/sonic-visualiser/sonic-visualiser/releases/tag/sv_v5.2.1", "https://www.sonicvisualiser.org/", "https://www.sonicvisualiser.org/download.html"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/sonic-visualiser/sonic-visualiser/blob/default/icons/sv-icon.svg", "credit": "Sonic Visualiser contributors", "license": "GPL-2.0; project trademarks remain with their owners"}]
icon: "./assets/icon.svg"
---

Sonic Visualiser opens a music recording and lays waveforms, spectrograms and annotations over one shared timeline, so you can study what happens in the audio and when. It loads WAV, AIFF, Ogg, Opus, MP3 and other formats.

- Spectrograms and other views have display settings you adjust while you look.
- You annotate by adding labelled time points, segments, point values and curves.
- Vamp plugins calculate annotations automatically, for example beat positions or pitch.
- Annotations can be imported from text files and MIDI, and exported along with audio selections.

During playback Sonic Visualiser can play synthesized sounds for the annotations along with the audio, kept in step with the display. You can slow a passage down or speed it up and loop it, including loops built from several separate regions.

Chris Cannam developed most of the program, at Queen Mary University of London's Centre for Digital Music up to version 4.2 and at Particular Programs Ltd for 4.3 to 4.5; the Centre backed version 5.0 again. It is free under the GPL, version 2 or later. The 5.2.1 DMG holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized.

The download contains no analysis plugins. Fetch Vamp plugins separately from their own download page. For effects, it hosts LADSPA and DSSI plugins, but not VST, Audio Unit or LV2.
