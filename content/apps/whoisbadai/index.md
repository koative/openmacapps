---
name: "whoisbadai"
summary: "Turns a left AirPod into a motion-sensing whip: a flick cracks an animated whip across the screen with a sound."
category: "Utilities"
tags:
  - airpods
  - motion
  - fun
repository: "https://github.com/pavloshargan/whoisbadai"
website: "https://github.com/pavloshargan/whoisbadai"
license: "MIT"
licenseUrl: "https://github.com/pavloshargan/whoisbadai/blob/main/LICENSE"
download: "https://github.com/pavloshargan/whoisbadai/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/pavloshargan/whoisbadai"
  - "https://github.com/pavloshargan/whoisbadai/blob/main/LICENSE"
  - "https://github.com/pavloshargan/whoisbadai/releases"
---

whoisbadai reads the motion sensor in your left AirPod. When you crack it like a whip, it draws a rope-physics whip across the screen with a sound, then fades the whip out. The whip is drawn in code with no image assets, and the README credits OpenWhip, a mouse-driven project, as its inspiration. It is a novelty for anyone who wants a playful desk toy rather than a serious tool.

It needs macOS 14 or later and AirPods Pro, AirPods 3rd generation, AirPods Max or Beats Fit Pro. In Bluetooth settings you turn off Automatic Ear Detection and set the microphone to always use the left AirPod, and on first launch you approve Motion & Fitness. The build is unsigned, so it is not notarized, and you must remove the quarantine flag with `xattr` before macOS will open it.
