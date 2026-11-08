---
name: "SystemEQ"
summary: "A system-wide parametric equaliser with AutoEQ headphone presets, calibration tools and a visualiser."
category: "Media"
tags: ["audio", "equalizer", "menu-bar"]
repository: "https://github.com/denzam/SystemEQ-for-Mac"
website: "https://denzam.github.io/SystemEQ-for-Mac/"
license: "GPL-3.0"
licenseUrl: "https://github.com/denzam/SystemEQ-for-Mac/blob/main/LICENSE"
download: "https://github.com/denzam/SystemEQ-for-Mac/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/denzam/SystemEQ-for-Mac", "https://github.com/denzam/SystemEQ-for-Mac/blob/main/LICENSE", "https://github.com/denzam/SystemEQ-for-Mac/releases", "https://denzam.github.io/SystemEQ-for-Mac/", "https://raw.githubusercontent.com/denzam/SystemEQ-for-Mac/main/README.md", "https://github.com/denzam/SystemEQ-for-Mac/releases/tag/v1.4.9"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/denzam/SystemEQ-for-Mac/main/SystemEQ%20for%20Mac/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "denzam", "license": "GPL-3.0 repository asset; trademarks retained"}]
---

SystemEQ puts a parametric equaliser on your Mac's system output, so Spotify, YouTube and Apple Music all play through it. You pick your speakers or headphones in its Routing view, click Enable EQ, and shape the sound with 10 or 31 bands.

- The AutoEQ database covers 8,665 headphone models with correction presets from measurers such as oratory1990 and Crinacle, searchable offline and imported with one click.
- A calibration mode compares test tones against a 1 kHz reference, so you can save a profile matched to your own hearing and A/B it against others.
- Room tuning by ear and a sine-sweep resonance finder help track down boomy or ringing frequencies.
- The saved preset can be re-applied automatically when you change the output device, and an auto-preamp guards against clipping.

The 1.4.9 disk image and the app inside it are notarized, and the app is Universal for Apple silicon and Intel, needing macOS 13. The developer says the app sends no telemetry. Update checks are off by default and, when on, contact GitHub with the app version.

How audio reaches the EQ depends on the macOS version. On macOS 14.4 and later, the Automatic backend captures system audio through a process tap, with about 11 ms of latency, and BlackHole stays available as a fallback. On macOS 13 to 14.3 it needs the BlackHole 2ch driver set as the system output, and latency rises to about 25 ms. Either way, you still grant the audio permission the app asks for. A DAW that sends audio straight to an interface skips the EQ unless you set its output to BlackHole 2ch.
