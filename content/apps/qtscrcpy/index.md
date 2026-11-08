---
name: "QtScrcpy"
summary: "Mirrors and controls Android phones from your Mac over USB or Wi-Fi, with keyboard mapping and group control."
category: "Utilities"
tags:
  - android
  - screen-mirroring
  - cross-platform
repository: https://github.com/barry-ran/QtScrcpy
website: https://github.com/barry-ran/QtScrcpy
license: Apache-2.0
licenseUrl: https://github.com/barry-ran/QtScrcpy/blob/dev/LICENSE
download: https://github.com/barry-ran/QtScrcpy/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/barry-ran/QtScrcpy
  - https://github.com/barry-ran/QtScrcpy/blob/dev/LICENSE
  - https://github.com/barry-ran/QtScrcpy/releases
  - https://raw.githubusercontent.com/barry-ran/QtScrcpy/dev/README.md
  - https://github.com/barry-ran/QtScrcpy/releases/tag/v4.2.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/barry-ran/QtScrcpy/dev/QtScrcpy/res/QtScrcpy.icns
    credit: "Barry and QtScrcpy contributors"
    license: "Apache-2.0 repository asset; name and logo retained by the project"
---

QtScrcpy puts an Android phone's screen in a window on your Mac, and your mouse and keyboard drive the phone from there. Turn on USB debugging, plug the phone in, click USB connect, then start the service. The phone needs Android 5.0 or later, and it does not need root.

For a cable-free session, the main window reads the phone's IP address, starts adbd on it and connects over the local network. After that the USB cable can come out.

- Dropping an APK on the mirror window installs it, and dropping other files sends them to the phone.
- Recording saves the screen to a video file, with an option to record in the background without showing the window.
- The clipboard syncs in both directions, and shortcuts cover Home, Back, volume and power.
- Group control lets you operate all your connected phones at the same time.
- Sound from the phone plays on the Mac through sndcpy, on Android 10 or later.

Key-mapping scripts turn keys and mouse moves into touches. Scripts for TikTok and some games ship with the app, and pressing the tilde key toggles mapping mode.

QtScrcpy is built on Genymobile's scrcpy, and swaps its SDL interface for a Qt window with a button for each connection step.

The release page offers separate disk images for Apple silicon and Intel, each with ADB and its other dependencies bundled. The Apple silicon app is ad hoc signed and not notarized, so Gatekeeper rejects it on first open.
