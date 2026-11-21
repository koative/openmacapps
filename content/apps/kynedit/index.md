---
name: "kYNEDIT"
summary: "Browses, tags and transcodes video footage, copies camera cards with checksums, and exports clips to editing apps."
category: "Media"
tags: ["video", "video-converter", "metadata", "tagging", "trimming", "backup"]
repository: "https://github.com/starbudweiser/KyNEDIT"
website: "https://github.com/starbudweiser/KyNEDIT"
license: "MIT"
licenseUrl: "https://github.com/starbudweiser/KyNEDIT/blob/main/LICENSE"
download: "https://github.com/starbudweiser/KyNEDIT/releases/latest"
macos: "14"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: "2026-11-21"
verified: "2026-11-21"
sources: ["https://github.com/starbudweiser/KyNEDIT", "https://github.com/starbudweiser/KyNEDIT/blob/main/LICENSE", "https://github.com/starbudweiser/KyNEDIT/releases/tag/v1.0.1", "https://github.com/starbudweiser/KyNEDIT/blob/main/README.md"]
screenshots: [{"src": "./assets/screenshot.png", "alt": "The kYNEDIT Convert tab: three clips queued on the left and, on the right, the ProRes 422 HQ preset with format, color, audio, burn-in and output settings.", "source": "https://github.com/starbudweiser/KyNEDIT/blob/main/docs/screenshot.png", "credit": "kYNEDIT authors"}]
assets: [{"path": "./assets/screenshot.png", "source": "https://github.com/starbudweiser/KyNEDIT/blob/main/docs/screenshot.png", "credit": "kYNEDIT authors", "license": "MIT (kYNEDIT repository)"}, {"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/KyNEDIT/blob/main/assets/icon-1024.png", "credit": "kYNEDIT authors", "license": "MIT (kYNEDIT repository)"}]
icon: ./assets/icon.png
---

kYNEDIT browses folders of footage and turns clips into the files an edit needs. It indexes a folder into a local SQLite catalogue with full-text search, thumbnails and grid or list views. Ratings, colour labels, keywords, notes, markers and subclips you add are all stored in that catalogue rather than in the media. Source files stay untouched.

Four areas of the window handle the rest.

- Convert queues clips against about 60 presets for editing, proxies, Avid, delivery and dailies, or your own. Outputs include every ProRes variant, DNxHR and DNxHD in MOV or MXF, H.264 and H.265. A job can also resize, change frame rate, pick audio tracks, apply a LUT or a log to Rec.709 transform, burn in timecode or a logo, and rename files from a template.
- Workshop trims clips without re-encoding: set in and out points with I and O, collect trims in a list and export them, or pull a still frame or the audio.
- Offload copies a camera card to up to four destinations, checks every copy with MD5 and writes an MHL hash list.
- The browser filters by resolution and frame rate, renames files in batches and exports a CSV shot list or marker stills.

Clips and markers go to DaVinci Resolve and Final Cut Pro as FCPXML 1.11. Premiere Pro gets an xmeml file, though its import into Premiere is still untested. Blackmagic RAW and RED R3D files decode through the makers' own SDKs, on the CPU or with Metal. Because the compiled app embeds those libraries, it ships under an end user license agreement, while the source code is MIT. The SDKs are not in the repository, so a build without them lists RAW files but cannot decode them.

The design borrows from Kyno and EditReady, and kYNEDIT is not affiliated with either. Its interface is in French, English, Spanish and Italian, and it updates from GitHub releases. The release is built for Apple silicon, requires macOS 14, and is Developer ID signed and notarized.
