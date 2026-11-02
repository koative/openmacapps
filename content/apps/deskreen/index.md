---
name: "Deskreen"
summary: "Shares your Mac screen or a single window to any device with a web browser over Wi-Fi or LAN, turning it into a second screen."
category: "Utilities"
tags:
  - screen-sharing
  - display
  - cross-platform
repository: https://github.com/pavlobu/deskreen
website: https://deskreen.com
license: "AGPL-3.0"
licenseUrl: https://github.com/pavlobu/deskreen/blob/master/LICENSE
download: https://github.com/pavlobu/deskreen/releases
homebrew: "deskreen"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/pavlobu/deskreen
  - https://github.com/pavlobu/deskreen/blob/master/LICENSE
  - https://github.com/pavlobu/deskreen/releases
  - https://deskreen.com/download/compare/
  - https://deskreen.com/faq
assets:
  - path: ./assets/icon.png
    source: https://github.com/pavlobu/deskreen/blob/master/build/icon.icns
    credit: "Pavlo Buidenkov"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

Deskreen streams your screen to another device's web browser. The app shows a QR code or link; open it on a tablet, phone, laptop or smart TV on the same Wi-Fi or local network, approve the connection, and pick whether to share the whole screen or one app window. Nothing needs to be installed on the viewing device, and the stream uses WebRTC.

Mirroring works on its own. To use the other device as an extended desktop rather than a copy of an existing screen, the project's FAQ covers using a virtual display adapter, a small dummy plug that makes the Mac think a monitor is attached.

This listing covers Deskreen CE, the open-source Community Edition, which is free from GitHub releases in Apple silicon and Intel builds and allows one connected viewer. The developer also sells paid Pro and Teams plans with more viewers and extra features; those are not under the open-source license.
