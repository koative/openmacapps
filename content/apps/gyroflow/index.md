---
name: "Gyroflow"
summary: "Stabilizes video using the gyroscope data recorded by action cameras, drones, phones or an external logger."
category: "Media"
tags: ["video", "video-editing", "drones", "photography", "cross-platform"]
repository: "https://github.com/gyroflow/gyroflow"
website: "https://gyroflow.xyz"
license: "GPL-3.0"
licenseUrl: "https://github.com/gyroflow/gyroflow/blob/master/LICENSE"
download: "https://github.com/gyroflow/gyroflow/releases"
homebrew: "gyroflow"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/gyroflow/gyroflow", "https://github.com/gyroflow/gyroflow/blob/master/LICENSE", "https://github.com/gyroflow/gyroflow/releases", "https://apps.apple.com/us/app/gyroflow/id6447994244"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/gyroflow/gyroflow/blob/master/resources/icon_1024_mac.png", "credit": "Gyroflow contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

Gyroflow removes camera shake by reading the motion data that many cameras save alongside the video, from GoPro, Sony, Insta360, DJI and others, or from a separate gyro logger such as a drone flight controller's blackbox. Because it knows how the camera actually moved, it can correct shake and rolling-shutter wobble precisely instead of guessing from the image.

The app shows a live preview while you adjust smoothing, lens correction and keyframes, then renders through a queue to H.264, H.265, ProRes and other formats, using the GPU where possible. Separate plugins let editors such as Final Cut Pro, DaVinci Resolve and Premiere apply the stabilization directly.

The universal DMG runs natively on Apple silicon and Intel Macs with macOS 10.15 or later, and a free Mac App Store version is also available for macOS 14 or later. The GPL-3.0 license carries extra permissions that allow app store distribution and linking with the proprietary mdk-sdk playback library.
