---
name: "WolfClip"
summary: "Win+V style clipboard history for macOS: pick an earlier copy and it is pasted where you were typing."
category: "Utilities"
tags:
  - clipboard
  - menu-bar
  - keyboard-shortcuts
alternativeTo:
  - paste
repository: "https://github.com/RakushkaTOP/wolfclip"
website: "https://rakushkatop.github.io/wolfclip/"
license: "Apache-2.0"
licenseUrl: "https://github.com/RakushkaTOP/wolfclip/blob/main/LICENSE"
download: "https://github.com/RakushkaTOP/wolfclip/releases/latest/download/WolfClip-macOS.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/RakushkaTOP/wolfclip"
  - "https://github.com/RakushkaTOP/wolfclip/blob/main/LICENSE"
  - "https://github.com/RakushkaTOP/wolfclip/releases"
  - "https://rakushkatop.github.io/wolfclip/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/RakushkaTOP/wolfclip/main/macos/Resources/AppIcon.icns"
    credit: "RakushkaTOP"
    license: "Apache-2.0; upstream app icon (converted from .icns, resized), trademarks retained"
---

WolfClip keeps a history of what you copy. Press ⇧⌘V in any app, choose an earlier item and it is pasted where the cursor was. It stores text, links, colours, code, images and files, lets you pin items so they never expire, and skips passwords that password managers mark as secret. The history stays in a local file. It is for people who want the Windows Win+V flow on a Mac. The README also describes a Linux version.

It needs macOS 14 or later and Accessibility permission, which lets it press ⌘V for you and place the window at the text cursor. The app is not notarized by Apple, so the first launch must be allowed under System Settings → Privacy & Security → Open Anyway. The README says Homebrew installs handle this step. The only network request on macOS is the update check against GitHub Releases.
