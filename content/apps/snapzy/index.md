---
name: "Snapzy"
summary: "Takes screenshots and screen recordings from the menu bar, then opens them in annotation and video editors."
category: "Media"
tags: ["screenshots", "screen-recording", "annotation", "menu-bar", "screenshot-tool", "screen-recorder"]
alternativeTo: ["cleanshot", "snagit"]
repository: "https://github.com/duongductrong/Snapzy"
website: "https://snapzy.app"
license: "BSD-3-Clause"
licenseUrl: "https://github.com/duongductrong/Snapzy/blob/master/LICENSE"
download: "https://github.com/duongductrong/Snapzy/releases"
freeDownload: true
homebrew: "snapzy"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/duongductrong/Snapzy", "https://github.com/duongductrong/Snapzy/blob/master/LICENSE", "https://github.com/duongductrong/Snapzy/blob/master/README.md", "https://github.com/duongductrong/Snapzy/releases", "https://github.com/duongductrong/Snapzy/releases/tag/v2.1.0", "https://snapzy.app"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/duongductrong/Snapzy/master/Snapzy/Resources/Assets.xcassets/AppIcon.appiconset/SnapzyIcon-macOS-256x256%401x.png", "credit": "Trong Duong Duc and Snapzy contributors", "license": "BSD-3-Clause; upstream project asset, trademarks retained"}]
screenshots: []
---

Snapzy binds its captures to the familiar shortcuts by default: Shift-Command-4 grabs an area and Shift-Command-3 the whole screen. Each capture lands on a floating card, where you copy it, drag it into another app, open it for markup or pin it above your other windows.

- Scrolling capture stitches a long page into one image and shows a preview while you scroll.
- Recordings can include system audio, the microphone and a camera overlay, and save as video or GIF. The video editor trims clips and adds zoom or speed segments.
- The annotation editor has arrows, shapes, text, blur and pixelation, and it can find sensitive data to redact on the Mac itself.
- Text recognition uses Apple's Vision framework, or an OpenAI-compatible endpoint you configure. A loupe copies any pixel's colour in formats from HEX to OKLCH.
- A history panel searches past screenshots, videos and GIFs by name, type or time.

Nothing is uploaded unless you ask. You can send a capture to Google Drive, Cloudflare R2 or an S3 bucket. The developer says files go straight to that provider, and that credentials stay in the Keychain. A `snapzy` command-line helper and a `snapzy://` URL scheme let scripts and launchers trigger captures.

The README names CleanShot X as the inspiration, and the capture, markup and recording mix follows it. Snapzy publishes its code under the BSD 3-Clause license, with build instructions in the repository.

Snapzy needs macOS 13 or later. The DMG holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. It runs outside the App Sandbox and asks for Screen Recording permission on first launch.
