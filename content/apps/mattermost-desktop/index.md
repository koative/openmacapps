---
name: "Mattermost Desktop"
summary: "The desktop app for Mattermost team chat, with several servers in one window, notifications and unread badges."
category: "Internet"
tags:
  - chat
  - messaging
  - self-hosted
  - cross-platform
alternativeTo:
  - slack
repository: https://github.com/mattermost/desktop
website: https://mattermost.com
license: "Apache-2.0"
licenseUrl: https://github.com/mattermost/desktop/blob/master/LICENSE.txt
download: https://mattermost.com/apps/
homebrew: "mattermost"
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/mattermost/desktop
  - https://github.com/mattermost/desktop/blob/master/LICENSE.txt
  - https://mattermost.com/apps/
  - https://apps.apple.com/app/mattermost-desktop/id1614666244
  - https://github.com/mattermost/desktop/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/mattermost/desktop/blob/master/src/assets/icon.icns
    credit: "Mattermost, Inc."
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Mattermost Desktop wraps the Mattermost collaboration platform in a Mac app. A server menu switches between several Mattermost servers, channels, Boards and Playbooks get their own tabs, and the app shows desktop notifications and badges for unread channels and mentions while it keeps running in the background.

It is only a client: you need an account on an existing Mattermost server, usually one your organisation deploys and runs. Mattermost's download page sends Mac users to the free Mac App Store version and lists macOS 14 or later; DMG and ZIP builds for Intel and Apple Silicon are also published on GitHub.
