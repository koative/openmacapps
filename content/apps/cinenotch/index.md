---
name: "CineNotch"
summary: "Docks the Picture in Picture video from Safari or Chrome into the MacBook notch, so it stops covering your work."
category: "Media"
tags:
  - notch
  - picture-in-picture
  - menu-bar
  - safari
  - google-chrome
repository: "https://github.com/NikOneZ1/cinenotch"
website: "https://cinenotch.cam/"
license: "GPL-3.0"
licenseUrl: "https://github.com/NikOneZ1/cinenotch/blob/main/LICENSE"
download: "https://github.com/NikOneZ1/cinenotch/releases/latest"
macos: "14"
arch: "both"
notarized: true
freeDownload: false
featured: false
added: "2026-11-25"
verified: "2026-11-25"
icon: "./assets/icon.png"
screenshots:
  - src: "./assets/screenshot.png"
    alt: "Two views of a browser window: the video tucked into the notch as a small pill, and the same video slid out below the notch at full size with playback controls."
    source: "https://github.com/NikOneZ1/cinenotch/blob/25edbf97f599a94233c700db17e503dfa77cb3ba/docs/screenshot.png"
    credit: "Nikita Verba (NikOneZ1)"
sources:
  - "https://github.com/NikOneZ1/cinenotch"
  - "https://github.com/NikOneZ1/cinenotch/blob/main/README.md"
  - "https://github.com/NikOneZ1/cinenotch/blob/main/LICENSE"
  - "https://github.com/NikOneZ1/cinenotch/blob/main/Resources/Info.plist"
  - "https://github.com/NikOneZ1/cinenotch/releases"
  - "https://cinenotch.cam/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/NikOneZ1/cinenotch/blob/25edbf97f599a94233c700db17e503dfa77cb3ba/Resources/AppIcon.icns"
    credit: "Nikita Verba (NikOneZ1)"
    license: "GPL-3.0; upstream app icon, trademarks retained"
  - path: "./assets/screenshot.png"
    source: "https://github.com/NikOneZ1/cinenotch/blob/25edbf97f599a94233c700db17e503dfa77cb3ba/docs/screenshot.png"
    credit: "Nikita Verba (NikOneZ1)"
    license: "GPL-3.0; upstream documentation screenshot, trademarks retained"
---

Start Picture in Picture on a video in Safari or Chrome, and CineNotch pulls that floating window up into the MacBook notch. There it shrinks to a black pill with a live thumbnail, the title and a progress ring. Hover the pill, or look at the camera, and the video slides down at full size. Look back at your work and it tucks away again while the sound keeps playing.

- The open video has buttons for play and pause, jumping 10 seconds either way, and returning to the browser tab.
- Scrolling over it with two fingers or a mouse wheel moves through the video in 10-second steps.
- Global shortcuts handle play, pause, seeking and the video size from any app, and Settings can turn them off.
- Optional camera features pause the video when you walk away and hide it when a second face appears behind you.

The glance control needs a short calibration and the camera. The developer says frames are analyzed on the Mac and never stored or sent anywhere, and the camera runs only while a video is docked. It is optional. The mouse works without it.

On Macs without a notch, the same pill is drawn in the menu bar. The project calls its status early. For now it handles Safari and Chrome on a single screen, and there is no close button for Chrome's video.

The signed and notarized download needs macOS 14 or later and runs on Apple silicon and Intel. It asks for Accessibility and Screen Recording permissions so it can find the Picture in Picture window and show it. Unlocking the signed build takes a one-time license, while the GPL-3.0 source can be built with Swift 5.9 or later at no cost.
