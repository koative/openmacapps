---
name: "Beagle IM"
summary: "An XMPP chat client for the Mac with group chats, file transfer, calls and OMEMO end-to-end encryption."
category: "Internet"
tags:
  - messaging
  - chat
  - encrypted-chat
repository: https://github.com/tigase/beagle-im
website: https://beagle.im
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/tigase/beagle-im/blob/master/LICENSE
download: https://github.com/tigase/beagle-im/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/tigase/beagle-im
  - https://github.com/tigase/beagle-im/blob/master/LICENSE
  - https://github.com/tigase/beagle-im/releases
  - https://github.com/tigase/homebrew-tigase
  - https://beagle.im
  - https://raw.githubusercontent.com/tigase/beagle-im/master/README.md
  - https://apps.apple.com/us/app/beagleim-by-tigase-inc/id1445349494
  - https://github.com/tigase/beagle-im/releases/tag/6.0.1
  - https://raw.githubusercontent.com/tigase/beagle-im/master/BeagleIM/AppDelegate.swift
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/tigase/beagle-im/master/BeagleIM/Assets.xcassets/AppIcon.appiconset/256.png
    credit: "Tigase, Inc."
    license: "GPL-3.0 repository asset; Beagle IM name and logo retained by Tigase"
---

Beagle IM signs in to XMPP, the chat protocol once called Jabber, so you can talk to people who use other XMPP servers and clients. Add an existing account in Preferences, or create one on a server that supports in-band registration, and start chatting.

- Several accounts can be signed in at the same time.
- You can join or create group chats, and history comes from the server's message archive.
- Photos and other files can be shared in one-to-one and group chats, including with people on other clients.
- Calls are available when you would rather talk than type.
- Messages accept Markdown formatting.
- OMEMO end-to-end encryption can be turned on for private conversations.

Conversations read as one column, with every message aligned to the left in place of chat bubbles on both sides. Your status updates by itself when the Mac sleeps or you step away, and the app follows the system's light or dark appearance or a fixed one.

Tigase builds Beagle IM on its TigaseSwift XMPP library. Version 6.0.1 on GitHub is a ZIP with a Universal app for Apple silicon and Intel that needs macOS 11 or later and is Developer ID-signed and notarized. The same app is free on the Mac App Store and installable from Tigase's Homebrew tap.
