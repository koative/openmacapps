---
name: "Wire"
summary: "The desktop client for Wire, an end-to-end encrypted messenger for chats, calls, video and file sharing."
category: "Internet"
tags:
  - messaging
  - encrypted-chat
  - collaboration
  - cross-platform
repository: https://github.com/wireapp/wire-desktop
website: https://wire.com
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/wireapp/wire-desktop/blob/dev/LICENSE
download: https://wire.com/en/app-download
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/wireapp/wire-desktop
  - https://github.com/wireapp/wire-desktop/blob/dev/LICENSE
  - https://wire.com/en/app-download
  - https://github.com/wireapp/wire-desktop/releases
  - https://apps.apple.com/app/wire/id931134707
  - https://raw.githubusercontent.com/wireapp/wire-desktop/dev/README.md
  - https://raw.githubusercontent.com/wireapp/wire-desktop/dev/electron/src/main.ts
  - https://wire.com/en/features
  - https://wire.com/en/pricing
  - https://github.com/wireapp/wire-desktop/releases/tag/macos%2F3.45.5499
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/wireapp/wire-web-config-wire/v0.34.6/wire-desktop/content/macos/logo.icns
    credit: "Wire Swiss GmbH"
    license: "Wire trademark and logo of Wire Swiss GmbH; the project grants no trademark license; shown unmodified only to identify the app"
---

Wire carries your end-to-end encrypted chats, voice and video calls and shared files, and this app brings those conversations into a Mac window. It is an Electron wrapper around Wire's web app, and you sign in with a Wire account. Personal accounts cover private use, and the free team plan takes up to five people. Paid plans add larger video conferences, single sign-on and admin controls.

- You can create groups, search conversations, add reactions, draw sketches and send recorded audio or video messages.
- A timer on a message deletes it from the conversation when it runs out, in one-to-one and group chats, and works for texts, pictures, documents and pings.
- In a conference call you can share your screen, and a group admin can right-click a participant to mute them or mute everyone else.
- Up to three accounts stay signed in at once, and you switch between them with the profile pictures in the left sidebar.

On a Mac, single sign-on opens in your default browser through Apple's web authentication session, with Safari as the fallback. Companies that manage Macs with MDM can set a managed preference that forces App-lock on.

Wire Swiss GmbH ships the Mac app through the Mac App Store, and some macOS releases on GitHub also carry a Wire.pkg installer. The source files are licensed under GPL version 3 or later. The company keeps the Wire name and logos, though, and its README attaches conditions to self-built clients that talk to Wire's servers, such as not weakening their security features.
