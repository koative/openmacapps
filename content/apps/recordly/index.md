---
name: "Recordly"
summary: "Records your screen and edits the footage into demo videos with automatic zooms, cursor smoothing and styled frames."
category: "Media"
tags: ["screen-recording", "video", "video-editor", "cross-platform", "screen-recorder"]
alternativeTo: ["screenflow", "camtasia", "screen-studio"]
repository: "https://github.com/webadderallorg/Recordly"
website: "https://www.recordly.dev"
license: "AGPL-3.0"
licenseUrl: "https://github.com/webadderallorg/Recordly/blob/main/LICENSE.md"
download: "https://github.com/webadderallorg/Recordly/releases"
freeDownload: true
homebrew: "recordly"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/webadderallorg/Recordly", "https://github.com/webadderallorg/Recordly/blob/main/LICENSE.md", "https://github.com/webadderallorg/Recordly/releases", "https://www.recordly.dev", "https://github.com/webadderallorg/Recordly/blob/main/README.md", "https://github.com/webadderallorg/Recordly/releases/tag/v1.4.0", "https://screen.studio/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/webadderallorg/Recordly/main/icons/icons/mac/icon.icns", "credit": "webadderall and Recordly contributors", "license": "AGPL-3.0; upstream project asset, trademarks retained"}]
---

Recordly captures a display or a single window, with microphone and system audio, and drops you into an editor when you stop. There you turn raw footage into a walkthrough: zooms land on the parts where the cursor is busy, and the frame gets a background and shadow.

- Zoom regions can be suggested from cursor activity or placed by hand, alongside trims, speed changes, crops and text, image and figure annotations.
- The rendered cursor can be resized, smoothed and given motion blur or a click bounce, and on macOS ScreenCaptureKit can leave the real cursor out of the capture.
- A webcam bubble sits over the recording with adjustable position, size, roundness and shadow, and can scale along with zooms.
- Frames take wallpapers, solid colors, gradients, blur, padding, rounded corners and aspect ratio presets.

Exports go to MP4 or GIF, with settings for quality, GIF frame rate, looping and output size. Work saves as a `.recordly` project file you can reopen later. Community extensions from the Recordly Marketplace add things like click sounds and device frames.

Screen Studio builds the same kind of auto-zoomed demo, but only for the Mac. Recordly also runs on Windows and Linux, and its source is under the AGPLv3.

On the Mac it records through ScreenCaptureKit and needs macOS 14 or later. Version 1.4.0 has separate Apple silicon and Intel downloads as DMG or ZIP. The project began as a fork of OpenScreen and has since diverged.
