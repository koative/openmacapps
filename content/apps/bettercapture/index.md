---
name: BetterCapture
summary: A menu bar screen recorder with ProRes, HEVC and H.264 output, system audio plus microphone, and content filters.
category: Media
tags:
- screen-recording
- video
- menu-bar
- screen-recorder
repository: https://github.com/jsattler/BetterCapture
website: https://bettercapture.app/
license: MIT
licenseUrl: https://github.com/jsattler/BetterCapture/blob/main/LICENSE
download: https://github.com/jsattler/BetterCapture/releases
freeDownload: true
homebrew: "bettercapture"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/jsattler/BetterCapture
- https://github.com/jsattler/BetterCapture/blob/main/LICENSE
- https://github.com/jsattler/BetterCapture/releases
- https://raw.githubusercontent.com/jsattler/BetterCapture/main/README.md
- https://bettercapture.app/
- https://github.com/jsattler/BetterCapture/releases/tag/v2026.4
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/jsattler/BetterCapture/main/website/public/bettercapture-logo.png
  credit: Joshua Sattler
  license: MIT-licensed repository asset; no separate icon terms stated
---

BetterCapture records your screen from the menu bar. Click its icon, pick what to record in the system content picker or select an area, and the recording lands as a video file on your Mac, with no watermark.

- Output can be ProRes 422, ProRes 4444, HEVC or H.264, with alpha channel support for transparent footage and HDR capture.
- System audio and a microphone can be recorded at the same time.
- Content filters keep chosen windows out of the recording.
- A `bettercapture://` URL scheme lets Shortcuts, Raycast or Alfred start and stop a recording, copy the finished file to the clipboard or open the output folder.

BetterCapture requires macOS 15.2 or later. The download is a disk image named for arm64, but the app inside the 2026.4 release is Universal, running on Apple silicon and Intel, and it is signed with a Developer ID and notarized. Homebrew installs it with `brew install bettercapture`.

The app is written in SwiftUI on top of ScreenCaptureKit, the capture framework built into macOS, and it needs no account. The developer says it has no tracking or analytics and uploads nothing, so recordings stay on the Mac.
