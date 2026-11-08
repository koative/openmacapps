---
name: "LMMS"
summary: "Arranges patterns, piano-roll melodies and samples into songs, with built-in synthesizers and an effects mixer."
category: "Media"
tags: ["music", "synthesizer", "sequencer", "daw"]
alternativeTo: ["garageband", "fl-studio"]
repository: "https://github.com/LMMS/lmms"
website: "https://lmms.io/"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/LMMS/lmms/blob/master/LICENSE.txt"
download: "https://github.com/LMMS/lmms/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/LMMS/lmms", "https://github.com/LMMS/lmms/blob/master/LICENSE.txt", "https://github.com/LMMS/lmms/blob/master/README.md", "https://github.com/LMMS/lmms/releases", "https://raw.githubusercontent.com/LMMS/lmms/master/src/core/Song.cpp", "https://lmms.io/", "https://lmms.io/download", "https://github.com/LMMS/lmms/releases/tag/v1.3.0-alpha.2", "https://github.com/LMMS/lmms/releases/tag/v1.2.2", "https://www.apple.com/mac/garageband/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/LMMS/lmms/blob/master/data/themes/default/icon.png", "credit": "LMMS contributors", "license": "GPL-2.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

LMMS builds songs out of patterns. You program a beat in the Pattern Editor, play or draw a melody in the Piano Roll, and then lay patterns, samples and automation out along the Song Editor's timeline. Notes can come from a MIDI keyboard or from the computer keyboard.

- 16 built-in synthesizers, among them emulations of the Roland TB-303, the Commodore 64 SID chip, the NES and Game Boy, and the Yamaha OPL2, plus an embedded ZynAddSubFX.
- Sampled instruments in SoundFont 2, Giga (GIG) and GUS patch formats.
- A mixer with unlimited channels and any number of effects on each, with a compressor, delay, reverb, equalizers and a spectrum analyzer built in.
- Track-based automation of parameters, which controllers such as an LFO can also drive.
- Import and export of MIDI files, and import of Hydrogen projects.

LADSPA effects can be dropped in. VST effect plug-ins are supported on Linux and Windows only, and in 1.2.2 Windows VST plug-ins (.dll files) do not work on the Mac.

The last stable version, 1.2.2 from 2020, comes only as Intel builds, one for macOS 10.13 and another for 10.14 or later. Version 1.3.0-alpha.2, from September 2026, adds an Apple silicon build for macOS 11 or later, along with a strum tool, pitch bending inside the Piano Roll, microtonal tunings and detachable windows. Projects saved in the alpha cannot be reopened in older versions. Before the first launch, the download page has you run a Terminal command that removes the quarantine flag from LMMS.app.

GarageBand is aimed at recording: you plug in a guitar or microphone, play through modeled amps, and let a virtual session drummer play along. LMMS centres on sequencing synthesizers and samples, and it also runs on Linux and Windows.
