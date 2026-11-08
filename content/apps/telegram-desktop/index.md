---
name: Telegram Desktop
summary: A desktop Telegram client for conversations, groups, channels, and file
  sharing.
category: Internet
tags:
  - messaging
  - chat
  - cross-platform
repository: https://github.com/telegramdesktop/tdesktop
website: https://desktop.telegram.org
license: GPL-3.0
licenseUrl: https://github.com/telegramdesktop/tdesktop/blob/dev/LICENSE
download: https://desktop.telegram.org
freeDownload: true
homebrew: "telegram-desktop"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/telegramdesktop/tdesktop
  - https://github.com/telegramdesktop/tdesktop/blob/dev/LICENSE
  - https://desktop.telegram.org
  - https://raw.githubusercontent.com/telegramdesktop/tdesktop/dev/README.md
  - https://telegram.org/faq
  - https://github.com/telegramdesktop/tdesktop/releases/tag/v7.4.1
assets:
  - path: ./assets/icon.png
    source: https://github.com/telegramdesktop/tdesktop/blob/dev/Telegram/Resources/art/icon256.png
    credit: Telegram Desktop contributors
    license: GPL-3.0; project trademarks retained
icon: ./assets/icon.png
---

Telegram Desktop puts your Telegram account on the Mac. You sign in with the phone number of the account, and your cloud chats, groups and channels sync from Telegram's servers, so a conversation started on your phone continues here. Files you send can be up to 2 GB each.

Telegram publishes two Mac apps. This one is the cross-platform client built from the tdesktop repository, the same code that runs on Windows and Linux. The other is a separate macOS-only app, and both sign in to the same account.

Secret chats behave differently from cloud chats. They are end-to-end encrypted and tied to the device where they began, so a secret chat started on your phone never shows up in the desktop app.

Day-to-day tasks follow the desktop layout. The menu button in the top-left corner starts a new group, the "…" button inside a group leads to its administrators, and right-clicking a message lets you report it.

The current release supports macOS 10.13 and later, and version 4.9.9 remains for macOS 10.12. The download page offers a DMG and a Mac App Store build. The source is published under GPLv3 with an OpenSSL exception.
