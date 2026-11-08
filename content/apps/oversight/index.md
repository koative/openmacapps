---
name: OverSight
summary: "Alerts you when the microphone or camera turns on, and names the process that switched it on."
category: Privacy & security
tags:
  - security
  - microphone
  - camera
repository: https://github.com/objective-see/OverSight
website: https://github.com/objective-see/OverSight
license: GPL-3.0
licenseUrl: https://github.com/objective-see/OverSight/blob/main/LICENSE.md
download: https://github.com/objective-see/OverSight/releases
freeDownload: true
homebrew: "oversight"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources:
  - https://github.com/objective-see/OverSight
  - https://github.com/objective-see/OverSight/blob/main/LICENSE.md
  - https://github.com/objective-see/OverSight/blob/main/README.md
  - https://github.com/objective-see/OverSight/releases
  - https://github.com/objective-see/OverSight/releases/tag/v2.4.0
  - https://objective-see.org/products/oversight.html
assets:
  - path: ./assets/icon.png
    source: https://github.com/objective-see/OverSight/blob/58e4a643a32018b861d378ac8b51f4662328f5af/Application/Application/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: OverSight contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

OverSight watches your Mac's microphone and webcam and shows an alert each time one of them turns on or off. The alert names the device and the process behind it, such as Zoom, with its process ID. From the alert you allow that app once, allow it always, or block it, which terminates the process.

Its target is malware that records quietly. A camera light shows that a session started, but it says nothing about a second program joining a call that is already running. OverSight reports that access too. When it cannot work out which process is responsible, it shows a more generic alert.

The status menu icon opens settings. You can ignore external mics and cameras, silence the alerts for a device turning off, or hide the icon while the monitor keeps running. Apps you allowed always appear in a list, where you can remove them again. An Action setting runs a script or program of your choice on each event and can pass it the device and process, for example to switch on an "on air" lamp.

OverSight needs macOS 12 or later and an administrator account. It comes as a ZIP holding an installer app, Universal for Apple silicon and Intel, Developer ID-signed and notarized. Alerts only appear if you allow its notifications and set their style to Alerts, and Do Not Disturb hides them. Older versions for macOS 10.15 to 11 and earlier remain available but unsupported.
