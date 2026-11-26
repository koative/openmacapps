---
name: "mSOUND"
summary: "Converts audio files from the Finder's right-click menu and edits them in a waveform editor."
category: "Media"
tags: ["audio", "audio-converter", "audio-editor", "waveform", "finder-extension", "flac", "mp3"]
repository: "https://github.com/starbudweiser/mSOUND"
website: "https://starbudweiser.github.io/wshowcase/#mSOUND"
license: "MIT"
licenseUrl: "https://github.com/starbudweiser/mSOUND/blob/main/LICENSE"
download: "https://github.com/starbudweiser/mSOUND/releases/latest"
macos: "14"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: "2026-11-27"
verified: "2026-11-27"
sources: ["https://github.com/starbudweiser/mSOUND", "https://github.com/starbudweiser/mSOUND/blob/main/LICENSE", "https://github.com/starbudweiser/mSOUND/releases/tag/v1.3.0", "https://github.com/starbudweiser/mSOUND/blob/main/README.md"]
screenshots: [{"src": "./assets/screenshot.png", "alt": "The mSOUND waveform editor with an audio file, two markers and a blue selection, a toolbar with edit and effect buttons, and an inspector listing the markers and file details.", "source": "https://github.com/starbudweiser/mSOUND/blob/main/docs/screenshot.png", "credit": "mSOUND authors"}]
assets: [{"path": "./assets/screenshot.png", "source": "https://github.com/starbudweiser/mSOUND/blob/main/docs/screenshot.png", "credit": "mSOUND authors", "license": "MIT (mSOUND repository)"}, {"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/mSOUND/blob/main/assets/mSOUND_1024.png", "credit": "mSOUND authors", "license": "MIT; upstream app icon, trademarks retained"}]
icon: ./assets/icon.png
---

mSOUND converts and edits audio files. Right-click audio files in the Finder and pick a target format straight from the menu, without a submenu. It converts between MP3, AAC (M4A), FLAC, WAV, AIFF and ALAC, and a selection of mixed formats goes to one target format. A progress gauge appears on the file icon in the Finder while it works.

- The waveform editor is non-destructive and has unlimited undo.
- It cuts, copies and pastes, sets markers, normalizes, applies fades and changes the gain, then exports.
- An overview strip shows the whole file, and silence detection finds the quiet parts.
- It records from the microphone into a new timeline, with level meters.

The workflow is inspired by Fission and Sound Studio, and mSOUND is not affiliated with Rogue Amoeba or Felt Tip. The Finder extension must be turned on in System Settings, under Extensions and Finder. The interface is in French, English, Spanish and Italian, and the app checks GitHub releases for updates and verifies their signature. The release is built for Apple silicon, requires macOS 14, and is Developer ID signed and notarized.
