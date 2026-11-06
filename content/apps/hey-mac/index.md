---
name: "Hey Mac"
summary: "Face unlock for the Mac lock screen and per-app locking, with face matching run on-device through Core ML."
category: "Privacy & security"
tags:
  - face-unlock
  - biometrics
  - lock-screen
  - privacy
repository: "https://github.com/iharshitmaurya/HeyMac"
website: "https://heymacapp.com"
license: "MIT"
licenseUrl: "https://github.com/iharshitmaurya/HeyMac/blob/main/LICENSE"
download: "https://github.com/iharshitmaurya/HeyMac/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/iharshitmaurya/HeyMac"
  - "https://github.com/iharshitmaurya/HeyMac/blob/main/LICENSE"
  - "https://github.com/iharshitmaurya/HeyMac/releases"
  - "https://heymacapp.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/iharshitmaurya/HeyMac/main/packaging/AppIcon.png"
    credit: "Harshit Maurya"
    license: "MIT; upstream app icon, trademarks retained"
---

Hey Mac unlocks the Mac lock screen with your face and can require a face check before chosen apps open. Each app can get its own relock rule, such as immediately on launch, after a set number of minutes, or when you switch away from it, and a blur can hide the window until you are verified. Face matching runs on-device with Core ML. The app stores a numeric face embedding encrypted on the Mac, with the key kept in the macOS Keychain, and the README says it does not save photos of your face.

It requires macOS 14 or later on Apple silicon; the binary is arm64 only. The app is not notarized, so macOS may block the first launch. Allow it under System Settings > Privacy & Security > Open Anyway. It uses the Mac's regular camera rather than a depth sensor, and the README advises keeping a strong password as a fallback. Quitting a protected app requires biometric approval, and a launch agent restarts the app after an unexpected exit.
