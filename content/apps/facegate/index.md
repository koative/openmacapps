---
name: "FaceGate"
summary: "Locks chosen Mac apps behind face recognition, Touch ID or a password; face data is encrypted and stays on the Mac."
category: "Privacy & security"
tags:
  - privacy
  - security
  - encryption
repository: "https://github.com/dweep-desai/FaceGate-Mac"
website: "https://dweep-desai.github.io/FaceGate-web/"
license: "MIT"
licenseUrl: "https://github.com/dweep-desai/FaceGate-Mac/blob/main/LICENSE"
download: "https://github.com/dweep-desai/FaceGate-Mac/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/dweep-desai/FaceGate-Mac"
  - "https://github.com/dweep-desai/FaceGate-Mac/blob/main/LICENSE"
  - "https://github.com/dweep-desai/FaceGate-Mac/releases"
  - "https://dweep-desai.github.io/FaceGate-web/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/dweep-desai/FaceGate-Mac/releases/download/v1.2.1/FaceGate-v1.2.1.dmg"
    credit: "Dweep Desai"
    license: "MIT; upstream app icon, trademarks retained"
---

FaceGate locks individual Mac apps. When a locked app is opened, FaceGate holds it until you unlock with your face, Touch ID or a password. Face recognition runs on the Mac, and face embeddings are stored encrypted with the key in the Keychain. Up to three faces can be enrolled. Other options include session timers, locking when the Mac sleeps, scheduled locks and a menu bar control. It suits a shared Mac where particular apps should stay closed to other people.

FaceGate needs macOS 14.0 (Sonoma) or later, and a camera for face unlock. Touch ID is optional. The build is not notarized, so double-clicking the downloaded app does not open it; the README says to remove the quarantine attribute with `xattr -cr /Applications/FaceGate.app`, or to use its install script. The authors describe it as protection against casual physical access, not targeted attacks, because the built-in camera has no depth sensing. Apart from a daily update check, the app makes no network requests.
