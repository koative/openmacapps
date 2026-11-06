---
name: "Vespertine"
summary: "Open-source Mac music player that switches the DAC to each track's native format and plays DSD, Atmos and DTS."
category: "Media"
tags:
  - music-player
  - audio
  - audio-player
repository: "https://github.com/szeremeta1/Vespertine"
website: "https://vespertineapp.com"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/szeremeta1/Vespertine/blob/main/LICENSE"
download: "https://github.com/szeremeta1/Vespertine/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/szeremeta1/Vespertine"
  - "https://github.com/szeremeta1/Vespertine/blob/main/LICENSE"
  - "https://github.com/szeremeta1/Vespertine/releases/latest"
  - "https://vespertineapp.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/szeremeta1/Vespertine/main/App/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Vespertine contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Vespertine plays a music library that mixes stereo files with disc images and surround formats: SACD ISO images, DVD-Video LPCM, DTS CDs, Dolby TrueHD, DTS-HD Master Audio, Atmos and plain FLAC. It changes the DAC's sample rate to match each track, shows every processing step between the file and the output so you can see whether playback is bit-perfect, and can measure a room with a USB microphone to correct each speaker. It is aimed at people with a large hi-res or surround collection and a DAC or AirPods Max to play it on.

The app needs macOS 14.4 or later and runs on Apple silicon and Intel; the author reports no Intel testing beyond running under Rosetta. Its releases are signed and notarized, so the first launch needs no override. Room correction is off by default and needs a calibrated USB microphone such as the UMIK-1. Dolby AC-4 and MPEG-H 3D Audio files are listed but not decoded, and TrueHD Atmos and DTS:X objects are not rendered.
