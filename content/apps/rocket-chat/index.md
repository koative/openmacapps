---
name: "Rocket.Chat Desktop"
summary: "The official desktop client for Rocket.Chat team chat servers, with several workspaces in one window."
category: "Internet"
tags:
  - chat
  - messaging
  - self-hosted
  - cross-platform
alternativeTo:
  - slack
repository: https://github.com/RocketChat/Rocket.Chat.Electron
website: https://rocket.chat
license: "MIT"
licenseUrl: https://github.com/RocketChat/Rocket.Chat.Electron/blob/dev/LICENSE
download: https://github.com/RocketChat/Rocket.Chat.Electron/releases
freeDownload: true
homebrew: "rocket-chat"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/RocketChat/Rocket.Chat.Electron
  - https://github.com/RocketChat/Rocket.Chat.Electron/blob/dev/LICENSE
  - https://github.com/RocketChat/Rocket.Chat.Electron/releases
  - https://formulae.brew.sh/cask/rocket-chat
  - https://apps.apple.com/app/rocket-chat/id1086818840
  - https://github.com/RocketChat/Rocket.Chat.Electron/blob/dev/README.md
  - https://github.com/RocketChat/Rocket.Chat.Electron/releases/tag/4.19.1
  - https://www.rocket.chat/
  - https://slack.com/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/RocketChat/Rocket.Chat.Electron/dev/build/icon.icns
    credit: "Rocket.Chat Technologies Corp."
    license: "Trademark of Rocket.Chat Technologies Corp.; not covered by the MIT code license"
---

Rocket.Chat Desktop gathers your Rocket.Chat workspaces in one Mac window, with every server you add listed in a sidebar. The app is an Electron shell around Rocket.Chat's web client, so you need an account on a Rocket.Chat server, whether your organisation runs it or the vendor hosts it.

Much of the README is aimed at administrators who roll the app out to a team:

- A `servers.json` file, bundled with the installer or placed in the user preferences folder, fills in the server list and skips the Connect to server screen.
- A settings file can block adding servers, so users only see the servers listed in `servers.json`.
- Other settings turn off update checks, error reporting or the tray icon.
- Video calls can open in an internal window, and notifications on macOS can carry an inline reply field.

The desktop client's code is MIT-licensed and lives apart from the server. The Mac build is a Universal app for Apple silicon and Intel that needs macOS 12 or later, offered as a DMG, PKG or ZIP and on the Mac App Store.

Slack offers Canvas docs, Lists, Workflow Builder and an AI assistant called Slackbot. Rocket.Chat differs in where the server can live. The vendor offers cloud hosting and also supports on-premises and air-gapped installations, and its server can federate with Matrix and XMPP.
