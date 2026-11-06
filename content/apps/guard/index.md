---
name: "Guard"
summary: "Camera monitor that freezes camera-using apps you own with SIGSTOP until you allow or block them, all locally."
category: "Privacy & security"
tags:
  - camera
  - security
  - privacy
  - menu-bar
repository: "https://github.com/FaisalFehad/Guard"
website: "https://guard-app.net"
license: "MIT"
licenseUrl: "https://github.com/FaisalFehad/Guard/blob/main/LICENSE"
download: "https://github.com/FaisalFehad/Guard/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/FaisalFehad/Guard"
  - "https://github.com/FaisalFehad/Guard/blob/main/LICENSE"
  - "https://github.com/FaisalFehad/Guard/releases/latest"
  - "https://guard-app.net"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/FaisalFehad/Guard/main/Resources/AppIcon.icns"
    credit: "Faisal Fehad"
    license: "MIT; upstream app icon, trademarks retained"
---

Guard sits in the menu bar and watches the camera. When a process starts using it, Guard sends SIGSTOP to freeze that process and asks whether to allow it, block it, or always block it. Apps you have blocked before can be blocked automatically, and every access is logged with the process name, PID and bundle ID. It suits people who want to know which app is using the webcam and stop unexpected ones. Guard makes no network calls, and its log stays in `~/Library/Application Support/Guard/`.

It needs macOS 14 or later. The release DMG contains an arm64-only binary, so it will not run on Intel Macs, although the README mentions Intel. The DMG is not notarized and Gatekeeper rejects it, so allow the first launch in System Settings → Privacy & Security. Guard detects camera use after about 500 ms, so it reacts rather than prevents, it identifies the process with a heuristic, and it can only freeze processes you own; root-owned processes need sudo.
