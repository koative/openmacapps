---
name: "Mac Vision Tools"
summary: "Menu bar app that runs Core ML and Vision models on the camera or screen: detection, emotion, privacy and focus."
category: "Utilities"
tags:
  - machine-learning
  - computer-vision
  - camera
  - menu-bar
repository: "https://github.com/christofilojohn/MacVisionTools"
website: "https://macvisiontools.pages.dev/"
license: "Apache-2.0"
licenseUrl: "https://github.com/christofilojohn/MacVisionTools/blob/main/LICENSE"
download: "https://github.com/christofilojohn/MacVisionTools/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/christofilojohn/MacVisionTools"
  - "https://github.com/christofilojohn/MacVisionTools/blob/main/LICENSE"
  - "https://github.com/christofilojohn/MacVisionTools/releases/latest"
  - "https://macvisiontools.pages.dev/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/christofilojohn/MacVisionTools/releases/download/1.0/MacVisionTools-1.0.0.zip"
    credit: "christofilojohn (Mac Vision Tools)"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Mac Vision Tools is a menu bar app that runs Core ML and Vision models on live camera or screen input. Its modes cover object detection with labelled boxes, emotion classification with recent history, a privacy guard that starts the screen saver when too many people are visible, and a focus timer that tracks head pose. You can also load your own `.mlmodel`, `.mlpackage` or `.mlmodelc` file. It suits people experimenting with on-device vision models.

It requires macOS 13 or later on Apple silicon or Intel; the README recommends macOS 14. Camera or screen recording permission is needed depending on the source. The build is signed with a development certificate and is not notarized, so the first launch has to be allowed in System Settings. Privacy Guard only locks the Mac if macOS requires a password as soon as the screen saver starts.
