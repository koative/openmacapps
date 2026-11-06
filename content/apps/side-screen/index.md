---
name: "Side Screen"
summary: "Turns an Android tablet into an extended display for your Mac over USB-C or Wi-Fi, with touch input and H.265 streaming."
category: "Utilities"
tags:
  - display
  - monitors
  - android
  - menu-bar
repository: "https://github.com/tranvuongquocdat/SideScreen"
website: "https://www.sidescreen.dev/"
license: "MIT"
licenseUrl: "https://github.com/tranvuongquocdat/SideScreen/blob/main/LICENSE"
download: "https://github.com/tranvuongquocdat/SideScreen/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/tranvuongquocdat/SideScreen"
  - "https://github.com/tranvuongquocdat/SideScreen/blob/main/LICENSE"
  - "https://github.com/tranvuongquocdat/SideScreen/releases"
  - "https://www.sidescreen.dev/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/tranvuongquocdat/SideScreen/main/MacHost/Resources/AppIcon.iconset/icon_512x512.png"
    credit: "Side Screen"
    license: "MIT; upstream app icon, trademarks retained"
---

Side Screen creates a virtual display on the Mac and streams it to an Android tablet running its companion app, so the tablet extends the desktop and you can drag windows onto it instead of mirroring the main screen. Video is encoded in hardware as H.265, the tablet's touchscreen controls the Mac, and the Mac app, which runs in the menu bar, sets resolution, frame rate, bitrate and an optional HiDPI mode.

It is for people with an Android tablet who want what Sidecar gives iPad owners. It can also drive a Mac with no display of its own, such as a Mac mini or a closed laptop, with the tablet as the only screen once the permissions have been granted.

The Mac app needs macOS 13 or later and is universal for Apple silicon and Intel. Version 1.1.0 is the first release that is signed and notarized and updates itself; older builds needed a Terminal command to open. The tablet needs Android 8.0 or later with a hardware H.265 decoder, and the client comes from Google Play or as an APK on the releases page. USB mode needs adb on the Mac (for example Homebrew's android-platform-tools) and USB debugging on the tablet; wireless mode pairs once by QR code, works best on 5 GHz Wi-Fi and adds some latency. The Mac app asks for Screen Recording and Accessibility permissions.
