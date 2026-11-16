---
name: mTAPES
summary: "Records a screen, window, app or zone with separate sound tracks and turns the take into an edited demo video."
category: Media
tags:
  - screen-recorder
  - demo
  - video-editing
  - mcp
  - menu-bar
  - desktop-mac-toolkit
alternativeTo:
  - screen-studio
repository: https://github.com/starbudweiser/mTAPES
website: https://github.com/starbudweiser/mTAPES
license: MIT
licenseUrl: https://github.com/starbudweiser/mTAPES/blob/main/LICENSE
download: "https://github.com/starbudweiser/mTAPES/releases/latest"
freeDownload: true
featured: false
added: '2026-11-16'
verified: '2026-11-16'
sources:
  - https://github.com/starbudweiser/mTAPES
  - https://github.com/starbudweiser/mTAPES/blob/main/LICENSE
  - https://github.com/starbudweiser/mTAPES/releases
  - https://raw.githubusercontent.com/starbudweiser/mTAPES/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mTAPES/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mTAPES/releases/download/v1.0.0/mTAPES-1.0.0-macOS-arm64.zip
    credit: mTAPES contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "The mTAPES library with a take selected, showing its details, export buttons and the editing panel with automatic zooms."
    source: https://github.com/starbudweiser/mTAPES/blob/main/docs/screenshot.png
    credit: Starbudweiser
---
mTAPES records your screen and edits the result into a demo you can publish. You start a take from the menu bar or with ⌥⌘R, choosing a whole screen, one window, one application or a zone you draw.

The Mac's sound and the microphone are saved as separate tracks, and the raw video is never changed. Editing works on top of the take:

- zooms that follow your clicks;
- dead time sped up, with sound muted during the fast parts so voices are not distorted;
- captions, a smoothed cursor, a frame and a background;
- export as a GIF for a README, a 1080p MP4 for a release, or a vertical MP4 for short videos.

You can adjust zooms, speeds and captions by hand with a live preview. An MCP server with ten tools lets an AI assistant start a take, mark each action it performs and edit the result, so a demo can be produced while the assistant works.

Compared with Screen Studio, the editing plan can come from an AI agent and the whole app is open source. HDR screens are filmed in SDR, and automatic editing needs a connected AI. A window filmed while it grows larger than its starting size is cropped. Releases are arm64 builds for macOS 15 or later, notarized, in four languages, with automatic updates.
