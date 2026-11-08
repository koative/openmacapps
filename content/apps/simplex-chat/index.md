---
name: SimpleX Chat
summary: "Sends end-to-end encrypted messages to contacts you connect with by link or QR code, with no phone number or user ID."
category: Internet
tags:
  - messaging
  - encrypted-chat
  - privacy
repository: https://github.com/simplex-chat/simplex-chat
website: https://simplex.chat
license: AGPL-3.0
licenseUrl: https://github.com/simplex-chat/simplex-chat/blob/stable/LICENSE
download: https://github.com/simplex-chat/simplex-chat/releases
freeDownload: true
homebrew: "simplex"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/simplex-chat/simplex-chat", "https://github.com/simplex-chat/simplex-chat/blob/stable/LICENSE", "https://github.com/simplex-chat/simplex-chat/blob/stable/README.md", "https://github.com/simplex-chat/simplex-chat/blob/stable/docs/guide/making-connections.md", "https://github.com/simplex-chat/simplex-chat/blob/stable/docs/guide/chat-profiles.md", "https://github.com/simplex-chat/simplex-chat/blob/stable/docs/DOWNLOADS.md", "https://github.com/simplex-chat/simplex-chat/releases", "https://github.com/simplex-chat/simplex-chat/releases/tag/v7.1.2", "https://simplex.chat"]
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/simplex-chat/simplex-chat/stable/media-logos/simplex-app-icon-light.png
    credit: SimpleX Chat Ltd.
    license: "Trademark of SimpleX Chat Ltd., all rights reserved; not covered by the AGPL-3.0 code license (see docs/TRADEMARK.md and assets/ASSETS_LICENSE.md); official media logo, used unmodified (resized only) to identify the app in a non-commercial directory"
---

SimpleX Chat sends end-to-end encrypted messages between people who connect by link or QR code, with no phone number, username or other account ID. To start a conversation you share a one-time invitation link with a friend, or show the QR code during a video call or in person, and the connection is made when they open it.

Because there is no identifier to look you up by, nobody can reach you until you hand out a link. You can also create a long-term contact address to post publicly; requests through it arrive for you to accept or reject, and deleting the address later leaves the contacts you made with it in place. Messages use double ratchet encryption with an extra layer on top.

- You can keep as many chat profiles as you like, each stored only on your device.
- Incognito mode gives every new contact or group a random profile name.
- The chat database is encrypted and can be exported to move to another device.
- The desktop app can link to the phone app and use its profile, as long as both are on the same local network.

The Mac app comes as separate DMGs for Apple silicon and Intel, alongside iOS, Android, Windows and Linux apps. A terminal version for the Mac and other systems lets you chat from the command line instead.

The developer says the protocol protects metadata such as who talks to whom and when, and that servers do not store your contacts or groups.
