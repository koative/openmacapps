---
name: "Stargate"
summary: "An all-in-one digital audio workstation with built-in instruments, effects, a wave editor and a track routing matrix."
category: "Media"
tags:
  - music
  - audio
  - sequencer
  - plugins
  - audio-editor
  - daw
alternativeTo:
  - garageband
  - logic-pro
  - reaper
  - fl-studio
  - ableton-live
  - bitwig-studio
  - cubase
  - pro-tools
  - fender-studio-pro
repository: "https://github.com/stargatedaw/stargate"
website: "https://github.com/stargatedaw/stargate"
license: "GPL-3.0"
licenseUrl: "https://github.com/stargatedaw/stargate/blob/main/LICENSE"
download: "https://github.com/stargatedaw/stargate/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release since January 2024 and no commit since June 2024."
icon: ./assets/icon.png
sources:
  - "https://github.com/stargatedaw/stargate"
  - "https://github.com/stargatedaw/stargate/blob/main/LICENSE"
  - "https://github.com/stargatedaw/stargate/releases"
  - "https://raw.githubusercontent.com/stargatedaw/stargate/main/README.md"
  - "https://github.com/stargatedaw/stargate/releases/tag/release-24.02.2"
  - "https://github.com/stargatedaw/stargate/commits/main"
  - "https://www.reaper.fm/"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/stargatedaw/stargate/main/src/macos/stargate.icns"
    credit: "Stargate DAW contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Stargate bundles a digital audio workstation with its own instrument and effect plugins, meant to cover a whole production in one package, with a focus on electronic dance music. You arrange tracks in a pattern-based sequencer and build sounds from the plugins it ships with.

- A routing matrix connects tracks and keeps sidechaining simple.
- Mixer channels are themselves plugins, chosen per track send, so you can combine them or leave them out.
- A basic wave editor handles audio files.
- Audio and MIDI hardware support comes from PortAudio and PortMidi.

The project puts weight on low CPU use. Its suggested minimum hardware is a Raspberry Pi 4, or a dual-core laptop around 15 years old with 1 GB of RAM and a 720p display. Displays from 720p to 4K and above are supported. Demo projects, instruments for its Sampler1 plugin and a public-domain sample pack are separate downloads. On macOS it can also run from a portable flash drive.

The last release, 24.02.2 from January 2024, has separate disk images for Apple silicon and Intel, alongside Windows and Linux builds. The source is mirrored on GitLab and Codeberg, while releases and issues stay on GitHub.

REAPER covers multitrack audio and MIDI recording, editing, mixing and mastering, hosts thousands of third-party plugin effects and instruments, and can be extended and scripted. It is sold as a license after a 60-day evaluation. Stargate keeps everything inside one free package, so there is nothing else to install.
