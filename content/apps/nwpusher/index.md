---
name: "NWPusher"
summary: "Sends test push notifications straight to Apple's APNs from a Mac, using your push certificate and a device token."
category: "Developer tools"
tags:
  - push-notifications
  - testing
  - apns
repository: "https://github.com/noodlewerk/NWPusher"
website: "https://github.com/noodlewerk/NWPusher"
license: "BSD-2-Clause"
licenseUrl: "https://github.com/noodlewerk/NWPusher/blob/master/LICENSE.txt"
download: "https://github.com/noodlewerk/NWPusher/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
maintenance: unmaintained
maintenanceNote: "No release since April 2017 and no commit since January 2018."
sources:
  - "https://github.com/noodlewerk/NWPusher"
  - "https://github.com/noodlewerk/NWPusher/blob/master/LICENSE.txt"
  - "https://github.com/noodlewerk/NWPusher/releases"
---

NWPusher, distributed as Pusher.app, sends push notifications directly to Apple's Push Notification service, so you do not need your own server. You load an APNs certificate and key from the keychain or a PKCS #12 file, paste a device token, edit the JSON payload and send it. It reports the errors Apple returns and can read the feedback service for invalid tokens. It suits iOS and macOS developers who want to test pushes without building a sending service first.

The app bundle declares macOS 10.7 as its minimum. It is ad hoc signed and Gatekeeper rejects it, so it is not notarized: the first launch has to be allowed in System Settings. The last release, 0.7.5, is from April 2017, and the repository has no commits after January 2018, so treat it as unmaintained.
