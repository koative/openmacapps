---
name: "FaceLock"
summary: "Checks the owner's face with the Mac camera when protected apps are opened, then locks the screen on a mismatch."
category: "Privacy & security"
tags:
  - security
  - privacy
  - camera
repository: "https://github.com/MaxSphinx/FaceLock"
website: "https://github.com/MaxSphinx/FaceLock"
license: "MIT"
licenseUrl: "https://github.com/MaxSphinx/FaceLock/blob/main/LICENSE"
download: "https://github.com/MaxSphinx/FaceLock/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/MaxSphinx/FaceLock"
  - "https://github.com/MaxSphinx/FaceLock/blob/main/LICENSE"
  - "https://github.com/MaxSphinx/FaceLock/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/MaxSphinx/FaceLock/releases/download/v1.1.0/FaceLock-macOS-arm64.zip"
    credit: "FaceLock Authors"
    license: "MIT; upstream app icon, trademarks retained"
---

FaceLock compares the camera image with the face you enrolled whenever you switch to a protected app or step away from the Mac. On a mismatch it shows a fullscreen lock, can take a photo of the person and send it to a Telegram chat through your own bot, and keeps an incident gallery and an audit log. Enrolled faces are stored as 128-value embeddings in a local JSON file, and the README says the camera frames are discarded after extraction.

It suits people who want a local, camera-based lock on an Apple silicon Mac that is used in shared or public places.

Requires macOS 14.0 or later on Apple silicon, and camera access. The download is ad-hoc signed and not notarized, so the first launch must be allowed in System Settings. Telegram alerts send photos off the Mac; the README says all other processing runs on the device.
