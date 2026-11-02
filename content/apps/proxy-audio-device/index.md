---
name: "Proxy Audio Device"
summary: "A virtual audio driver that forwards all output to another device, so macOS volume keys work with audio interfaces."
category: "Utilities"
tags:
  - audio
  - volume
  - routing
repository: https://github.com/briankendall/proxy-audio-device
website: https://github.com/briankendall/proxy-audio-device
license: "Unlicense"
licenseUrl: https://github.com/briankendall/proxy-audio-device/blob/master/LICENSE
download: https://github.com/briankendall/proxy-audio-device/releases
homebrew: "proxy-audio-device"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/briankendall/proxy-audio-device
  - https://github.com/briankendall/proxy-audio-device/blob/master/LICENSE
  - https://github.com/briankendall/proxy-audio-device/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/briankendall/proxy-audio-device/blob/master/ProxyAudioDeviceSettings/Assets.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: "Brian Kendall"
    license: "Unlicense; upstream project asset, trademarks retained"
---

Many external audio interfaces ignore the Mac's system volume, so the volume keys and the menu bar slider do nothing. Proxy Audio Device adds a virtual output device: you choose it as the system output, it passes the sound on to your real interface, and macOS volume controls work again.

A companion app, Proxy Audio Device Settings, sets the virtual device's name, which hardware output it forwards to and the size of its audio buffer. A buffer that is too small causes pops and crackles, so the project suggests raising it if you hear artifacts. It currently handles two channels and one proxy device.

The driver is a Core Audio HAL plug-in. Installing it by hand means copying it into `/Library/Audio/Plug-Ins/HAL` with an administrator password and restarting Core Audio or the Mac; removing it means deleting that bundle the same way.
