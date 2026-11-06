---
name: "Mugshot"
summary: "Local face recognition for sudo and unlocking a locked session, with an animated HUD that opens from the camera notch."
category: "Privacy & security"
tags:
  - security
  - privacy
  - local-first
  - menu-bar
repository: "https://github.com/Lorenzo-Coslado/macos-faceid"
website: "https://github.com/Lorenzo-Coslado/macos-faceid"
license: "MIT"
licenseUrl: "https://github.com/Lorenzo-Coslado/macos-faceid/blob/main/LICENSE"
download: "https://github.com/Lorenzo-Coslado/macos-faceid/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Lorenzo-Coslado/macos-faceid"
  - "https://github.com/Lorenzo-Coslado/macos-faceid/blob/main/LICENSE"
  - "https://github.com/Lorenzo-Coslado/macos-faceid/releases/latest"
---

Mugshot checks your face through the webcam when sudo asks for a password. It can also unlock a session that is already logged in and locked. A HUD grows out of the camera notch while it scans and falls back to your password when recognition fails. Recognition runs on the Mac with OpenCV's YuNet and SFace models. Enrolled face data stays in `~/Library/Application Support/faceid`, and camera frames are not uploaded.

It requires an Apple Silicon Mac on macOS 14 or later, plus a webcam. Public releases are signed with a Developer ID and notarized according to the project's release procedure. A 2D webcam can be fooled by a photo or video, so this is a convenience, not a replacement for stronger authentication. Lock-screen unlock is off by default and stores your Mac login password in the Keychain. It cannot unlock FileVault or handle the first login after a restart. Setup needs camera and Accessibility approval and a privileged helper.
