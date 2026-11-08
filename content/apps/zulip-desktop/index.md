---
name: "Zulip Desktop"
summary: "The official desktop client for Zulip team chat, with multiple organizations, notifications and inline replies."
category: "Internet"
tags:
  - chat
  - messaging
  - notifications
  - cross-platform
alternativeTo:
  - slack
repository: https://github.com/zulip/zulip-desktop
website: https://zulip.com/apps/
license: "Apache-2.0"
licenseUrl: https://github.com/zulip/zulip-desktop/blob/main/LICENSE
download: https://zulip.com/help/desktop-app-install-guide
freeDownload: true
homebrew: "zulip"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/zulip/zulip-desktop
  - https://github.com/zulip/zulip-desktop/blob/main/LICENSE
  - https://formulae.brew.sh/cask/zulip
  - https://github.com/zulip/zulip-desktop/blob/main/README.md
  - https://github.com/zulip/zulip-desktop/releases/tag/v5.14.2
  - https://zulip.com/help/desktop-app-install-guide
  - https://zulip.com/apps/
  - https://zulip.com/help/introduction-to-topics
  - https://zulip.com/help/connect-through-a-proxy
  - https://slack.com/features/channels
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/zulip/zulip-desktop/main/build/icon-macos.png
    credit: "Kandra Labs and Zulip contributors"
    license: "Apache-2.0 repository asset; Zulip name and logo trademarks retained by their owner"
---

Zulip Desktop puts your Zulip organizations in their own Mac app, so team chat lives outside a browser tab. Most of its code is shared with the Zulip web app, and the developers send problems inside an organization's window to the web app project. Around that, the desktop client adds a few things of its own:

- Signing in to several organizations.
- Desktop notifications you can reply to inline.
- Integration with the Dock and the tray.
- A spell checker that works in several languages.

If your organization sits behind a company proxy, the app can follow the system proxy settings or use a proxy you enter by hand. Installed from the disk image, Zulip Desktop updates itself to new versions. With the Homebrew cask, `brew upgrade zulip` gets you the newest release right away.

Version 5.14.2 comes as separate builds for Apple silicon and Intel. The Apple silicon app needs macOS 13 or later and is signed by Kandra Labs and notarized by Apple. Windows and Linux builds come from the same Apache-2.0 source.

Zulip itself is built around topics. Conversations in a channel are labeled with a topic, so you can see at a glance which ones are going on and read them one at a time. Slack also organizes chat into channels and threads, while Zulip makes the topic label the unit the whole design rests on.
