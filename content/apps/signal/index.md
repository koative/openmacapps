---
name: Signal Desktop
summary: Signal's end-to-end encrypted messages and calls on the Mac, linked to the Signal app on your phone.
category: Internet
tags:
  - messaging
  - encrypted-chat
  - cross-platform
repository: https://github.com/signalapp/Signal-Desktop
website: https://signal.org
license: AGPL-3.0
licenseUrl: https://github.com/signalapp/Signal-Desktop/blob/main/LICENSE
download: https://signal.org/download
freeDownload: true
homebrew: "signal"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/signalapp/Signal-Desktop
  - https://github.com/signalapp/Signal-Desktop/blob/main/LICENSE
  - https://signal.org/download
  - https://raw.githubusercontent.com/signalapp/Signal-Desktop/main/README.md
  - https://support.signal.org/hc/en-us/articles/360007320551-Linked-Devices
  - https://updates.signal.org/desktop/latest-mac.yml
  - https://signal.org/
  - https://support.signal.org/hc/en-us/articles/360008216551-Installing-Signal
  - https://support.signal.org/hc/en-us/articles/360007060492-Voice-or-Video-Calling
  - https://support.signal.org/hc/en-us/articles/5369785769370-Calling-options-Switch-camera-microphone-or-view
  - https://support.signal.org/hc/en-us/articles/5369688043418-Screen-Sharing-with-Signal-Desktop-Calls
assets:
  - path: ./assets/icon.png
    source: https://github.com/signalapp/Signal-Desktop/blob/main/build/icons/png/256x256.png
    credit: Signal Desktop contributors
    license: AGPL-3.0; project trademarks retained
icon: ./assets/icon.png
---

Signal Desktop puts your Signal conversations on the Mac, where you can read and send messages and make voice and video calls. Signal says all Signal-to-Signal messages and calls are end-to-end encrypted, on linked devices just as on the phone. During a call you can share your whole screen or a single window if nobody else is presenting, and your own video stays hidden while you share.

It works only as a linked device, and Signal has to be installed on your Android phone or iPhone first. To link it, you open the Mac app, which shows a QR code, and scan that code from Settings > Linked devices on the phone. During linking you choose whether to transfer message history. With the transfer, the phone sends over every chat plus media from the past 45 days. Without it, getting them later means reinstalling the desktop app and linking again.

The link has limits. If the phone stays offline for more than 30 days, its linked devices are unlinked, and so is a desktop app nobody has used for 45 days. One account can have five linked devices. Relinking always needs the primary phone.

Signal Messenger publishes the source under the AGPLv3, and the same app runs on Windows and Linux. The download page offers a Universal DMG for Apple silicon and Intel. The current build requires macOS 13 or later, and the Apple silicon app from Signal's updater is Developer ID-signed and notarized.
