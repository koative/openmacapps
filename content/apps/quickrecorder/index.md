---
name: QuickRecorder
summary: Records screens, windows and apps with audio and presenter controls.
category: Media
tags:
  - screen-recording
  - audio
  - presentations
  - screen-recorder
repository: https://github.com/lihaoyun6/QuickRecorder
website: https://lihaoyun6.github.io/quickrecorder/
license: AGPL-3.0
licenseUrl: https://github.com/lihaoyun6/QuickRecorder/blob/main/LICENSE
download: https://github.com/lihaoyun6/QuickRecorder/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: 2026-11-08
sources:
  - https://github.com/lihaoyun6/QuickRecorder
  - https://github.com/lihaoyun6/QuickRecorder/blob/main/LICENSE
  - https://github.com/lihaoyun6/QuickRecorder/blob/main/README.md
  - https://github.com/lihaoyun6/QuickRecorder/releases
  - https://lihaoyun6.github.io/quickrecorder/
  - https://github.com/lihaoyun6/QuickRecorder/releases/tag/1.6.9
assets:
  - path: ./assets/icon.png
    source: https://github.com/lihaoyun6/QuickRecorder/blob/e82051787f013ec2e811fcceab2d7de80e9d4dbe/QuickRecorder/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: QuickRecorder contributors
    license: AGPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

QuickRecorder records what is on your Mac's screen. You pick a whole display, a single window or one app, and it can also record an iPhone or iPad at the same time as the Mac's own screen. The recorder is built on Apple's ScreenCaptureKit.

- On macOS 13 and later it records sound from any app without installing an audio driver.
- On macOS 14 it supports Presenter Overlay, which places your camera image over the recording live. macOS 12 and 13 get a floating camera window instead.
- It can highlight the mouse pointer and magnify part of the screen.
- It can save HEVC with Alpha, a format that keeps transparency. The developer says only iMovie and Final Cut Pro read it for now.

By default the microphone is mixed into the main audio track when recording ends. If you plan to edit, turn off "Record Microphone to Main Track" in settings, and the system sound and the microphone arrive as two tracks you can adjust separately. If you close the main panel, clicking the Dock or menu bar icon brings it back.

QuickRecorder needs macOS 12.3 or later, and the DMG on the releases page holds a Universal app for Apple silicon and Intel. The developer states the app is not notarized by Apple. It is not sandboxed either, since there are no plans for an App Store version. It can also be installed from the developer's Homebrew tap.
