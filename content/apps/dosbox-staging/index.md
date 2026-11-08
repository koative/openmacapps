---
name: "DOSBox Staging"
summary: "A modern DOS environment for running classic DOS games on a Mac."
category: "Games"
tags: ["dos", "emulation", "retro-games"]
repository: "https://github.com/dosbox-staging/dosbox-staging"
website: "https://www.dosbox-staging.org"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/dosbox-staging/dosbox-staging/blob/main/LICENSE"
download: "https://www.dosbox-staging.org/download/macos/"
freeDownload: true
homebrew: "dosbox-staging-app"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/dosbox-staging/dosbox-staging", "https://github.com/dosbox-staging/dosbox-staging/blob/main/LICENSE", "https://www.dosbox-staging.org/download/macos/", "https://github.com/dosbox-staging/dosbox-staging/blob/main/README.md", "https://www.dosbox-staging.org/", "https://www.dosbox-staging.org/0.83/getting-started/introduction/", "https://www.dosbox-staging.org/0.83/getting-started/beneath-a-steel-sky/", "https://github.com/dosbox-staging/dosbox-staging/releases/tag/v0.83.0"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/dosbox-staging/dosbox-staging/blob/main/extras/icons/png/icon_256.png", "credit": "DOSBox Staging contributors", "license": "GPL-2.0-or-later; project trademarks retained"}]
icon: "./assets/icon.png"
---

DOSBox Staging emulates an old IBM PC, down to its graphics card and sound hardware, so DOS games and programs run on a Mac. It continues the original DOSBox, and existing DOSBox configuration files keep working in most cases.

Its defaults aim to need little setup. The picture goes through a CRT shader that the emulator picks for the emulated video mode and your display's resolution, from 720p to 4K. Beyond that, the feature list covers:

- Video hardware from Hercules and CGA through EGA, VGA and SVGA, plus low-level 3dfx Voodoo 1 and ReelMagic emulation.
- Roland MT-32 and SC-55 emulation, a built-in FluidSynth MIDI synth, Gravis UltraSound and the PC speaker.
- CD audio tracks stored as Opus, OGG/Vorbis, MP3 or FLAC files.
- Mouse integration with Windows 3.1, the host clipboard and physical CD-ROM drives.
- An HTTP API for controlling the emulator from other tools.

The current release, 0.83.0, needs macOS 12 Monterey or later. It comes as a Universal disk image for Apple silicon and Intel, and both the image and the app are Developer ID-signed and notarized. Older disk images stay on the download page for macOS versions back to 10.15, without help from the core team.

New users get a Getting Started guide that sets up real games, Prince of Persia and Beneath a Steel Sky among them, with the files provided. Games bought on GOG or Steam carry their own copy of DOSBox in the game folder, and installing DOSBox Staging leaves those copies alone.
