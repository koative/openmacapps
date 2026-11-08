---
name: Knuff
summary: Sends test push notifications to Apple devices through APNs using certificates
  from your keychain.
category: Developer tools
tags:
- notifications
- debugging
- testing
repository: https://github.com/KnuffApp/Knuff
website: https://github.com/KnuffApp/Knuff
license: MIT
licenseUrl: https://github.com/KnuffApp/Knuff/blob/master/LICENSE
download: https://github.com/KnuffApp/Knuff/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release since May 2020."
icon: ./assets/icon.png
sources:
- https://github.com/KnuffApp/Knuff
- https://github.com/KnuffApp/Knuff/blob/master/LICENSE
- https://github.com/KnuffApp/Knuff/releases
- https://raw.githubusercontent.com/KnuffApp/Knuff/master/README.markdown
- https://github.com/KnuffApp/Knuff/releases/tag/v1.3
- https://github.com/KnuffApp/Knuff-Framework
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/KnuffApp/Knuff/master/Knuff/Images.xcassets/AppIcon.appiconset/icon_256x256%402x.png
  credit: Bowtie AB and Knuff contributors
  license: MIT; upstream project asset, trademarks retained
---

Knuff sends a test push notification to an app on an Apple device through the Apple Push Notification service (APNs). Pick a certificate from your keychain, enter the device token, write a JSON payload and send it.

- It detects whether the certificate belongs to the development or the production environment.
- Universal certificates work, and APNs error responses are shown.
- A token and payload can be saved as a document and opened again later.
- Command-E exports an identity to PEM format.

Knuff talks to APNs over HTTP/2, and the 1.3 app declares macOS 10.12 as its minimum. Version 1.3, from May 2020, is the latest release, and no release or commit has followed it. It is Intel-only. The ZIP holds an app signed with Bowtie AB's Developer ID.

Without help, getting the device token means logging it from your app and copying it over by hand. Add the Knuff-Framework to your iOS app and Knuff picks the token up on its own, which helps most outside sandbox mode. The developers also published an iOS companion app for getting started with APNs.
