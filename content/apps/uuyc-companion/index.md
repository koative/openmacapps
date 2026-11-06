---
name: "UUyc Companion"
summary: "Adds a virtual screen matching your tablet's resolution to the Mac UU Remote host, and can switch off other displays."
category: "Utilities"
tags:
  - remote-desktop
  - screen-sharing
  - display
repository: "https://github.com/aoyamashou/UUyc-companion"
website: "https://github.com/aoyamashou/UUyc-companion"
license: "MIT"
licenseUrl: "https://github.com/aoyamashou/UUyc-companion/blob/master/LICENSE"
download: "https://github.com/aoyamashou/UUyc-companion/releases/download/v1.1.3/UUyc-companion-1.1.3.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/aoyamashou/UUyc-companion"
  - "https://github.com/aoyamashou/UUyc-companion/blob/master/LICENSE"
  - "https://github.com/aoyamashou/UUyc-companion/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/aoyamashou/UUyc-companion/master/Assets/AppIcon/AppIcon-1024.png"
    credit: "AoyamaShou"
    license: "MIT; upstream app icon, trademarks retained"
---

UUyc Companion runs on a Mac that is being controlled through the UU Remote app. When a tablet or phone connects, it creates a virtual display with the device's resolution, so the remote picture fills the screen without black bars and text stays sharp. Optionally, it turns off the Mac's own and external displays for the session so that the Dock and windows do not end up off-screen. When the session ends, it restores the screens and window layout. It is for people who control a Mac from an iPad or phone with UU Remote.

It requires macOS 14 Sonoma or later and UU Remote installed on the Mac being controlled. The author tests on Apple silicon with macOS 27. The build is signed with the author's own certificate and is not notarized by Apple, so macOS may refuse the first launch; the README explains how to clear the quarantine flag. Caveats: it relies on macOS interfaces that are not public, which may stop working after a major macOS update; the author reports that rapidly adding and removing displays once logged the Mac out, so save work before remoting; it reads device names from the UU Remote window; and it is not affiliated with NetEase. The README says it makes no network connections and collects no data.
