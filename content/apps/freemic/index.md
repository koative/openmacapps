---
name: "FreeMic"
summary: "Menu bar app that shows your headphones and input devices and switches the microphone in one click."
category: "Utilities"
tags:
  - menu-bar
  - audio
  - microphone
  - bluetooth
repository: "https://github.com/dy1945/FreeMic"
website: "https://github.com/dy1945/FreeMic"
license: "MIT"
licenseUrl: "https://github.com/dy1945/FreeMic/blob/master/LICENSE"
download: "https://github.com/dy1945/FreeMic/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/dy1945/FreeMic"
  - "https://github.com/dy1945/FreeMic/blob/master/LICENSE"
  - "https://github.com/dy1945/FreeMic/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/dy1945/FreeMic/releases/download/v0.0.7/FreeMic-v0.0.7.zip"
    credit: "yang"
    license: "MIT; upstream app icon, trademarks retained"
---

FreeMic is a menu bar app for Bluetooth headphones. When a call or meeting app opens the headset microphone, macOS switches the headphones to a phone-quality mode, and it often stays there afterwards. FreeMic keeps the microphone input on the built-in mic and shows the current output device and whether the headphones are in high-quality or call mode. You can switch inputs with one click, and optionally block Bluetooth microphones or switch back to the built-in mic when a call ends. It is for people who use Bluetooth headphones on a Mac for calls and music.

It needs macOS 13 or later and runs as a universal binary on Apple silicon and Intel. The zip is ad-hoc signed and is not notarized, so macOS blocks the first launch: Control-click the app and choose Open, or allow it under System Settings › Privacy & Security. The README is in Chinese, with an English version alongside it. Microphone permission is not needed because the app only changes the default input device.
