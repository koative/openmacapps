---
name: "TetherCam"
summary: "Uses an iPhone over USB as a Mac camera for video calls and OBS. Free apps, with no Wi-Fi, cloud or account."
category: "Media"
tags:
  - camera
  - iphone
  - video
  - streaming
repository: "https://github.com/Kanevry/tethercam"
website: "https://tethercam.app"
license: "MIT AND GPL-2.0-or-later"
licenseNotes: "The OBS plugin under obs-plugin/ is GPL-2.0-or-later because it links against libobs. The Mac app and the shared code are MIT."
licenseUrl: "https://github.com/Kanevry/tethercam/blob/main/LICENSE"
download: "https://github.com/Kanevry/tethercam/releases/latest/download/TetherCam-mac.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Kanevry/tethercam"
  - "https://github.com/Kanevry/tethercam/blob/main/LICENSE"
  - "https://github.com/Kanevry/tethercam/releases"
  - "https://tethercam.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Kanevry/tethercam/main/mac-app/App/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Bernhard Goetzendorfer"
    license: "MIT; upstream app icon, trademarks retained"
---

TetherCam makes an iPhone act as a camera for your Mac. The iPhone app captures video and sends it over the USB cable to a menu bar app on the Mac, which publishes it as a system camera named TetherCam. You can then pick it in Zoom, Teams, Google Meet, FaceTime and other apps. An OBS plugin is the alternative path, and it also brings the phone's microphone into OBS. It suits people who want to use an iPhone for calls or recordings without relying on Wi-Fi or a cloud service.

You need both free apps: the iPhone app (iOS 17 or later) and the Mac app (macOS 14 or later). The Mac app is signed and notarized, and macOS asks once that you allow the camera extension in System Settings. The OBS plugin needs macOS 12 or later and OBS Studio 30 or later. The phone serves one connection at a time, so only one receiver can run.
