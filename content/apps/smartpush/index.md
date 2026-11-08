---
name: SmartPush
summary: Sends test push notifications to iOS devices through Apple Push Notification service, using a push certificate.
category: Developer tools
tags:
- ios
- notifications
- testing
- debugging
repository: https://github.com/shaojiankui/SmartPush
website: https://github.com/shaojiankui/SmartPush
license: MIT
licenseUrl: https://github.com/shaojiankui/SmartPush/blob/master/LICENSE
download: https://github.com/shaojiankui/SmartPush/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release or commit since February 2024."
icon: ./assets/icon.png
sources:
- https://github.com/shaojiankui/SmartPush
- https://github.com/shaojiankui/SmartPush/blob/master/LICENSE
- https://github.com/shaojiankui/SmartPush/releases
- https://raw.githubusercontent.com/shaojiankui/SmartPush/master/README.md
- https://github.com/shaojiankui/SmartPush/releases/tag/3.4
- https://github.com/shaojiankui/SmartPush/commits/master
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/shaojiankui/SmartPush/master/SmartPush/Images.xcassets/AppIcon.appiconset/ico_128@2x.png
  credit: Jakey Shao (shaojiankui)
  license: MIT repository asset; SmartPush name and icon retained by the author
---

SmartPush sends a test push notification from your Mac to an iOS device. Its README, written in Chinese, describes it as an Apple push testing program and an APNs tool for Mac OS. The one English line calls it an "iOS Push Notification Debug App". The author says SmartPush was made by modifying PushMeBaby and thanks that project's author.

The latest release, 3.4 from February 2024, fixes a bug that came up when no certificate was selected. It is a ZIP holding a Universal app for Apple silicon and Intel that declares macOS 11 as its minimum. The repository has had no commits since then.

The README sets out its usage as seven numbered steps:

1. Drag a .cer certificate from any location onto the certificate picker, choose a push certificate from the list control, or browse to one stored anywhere.
2. Enter the matching device token, which the README notes differs between environments.
3. Type a payload or pick one.
4. Choose the environment the push goes to.
5. Connect to the push server.
6. Send the push.
7. The phone receives the push message.
