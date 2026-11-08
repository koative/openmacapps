---
name: "LimeChat"
summary: "Keeps several IRC servers and their channels in one window, with keyboard shortcuts for moving between them."
category: "Internet"
tags:
  - chat
  - messaging
  - keyboard-shortcuts
repository: "https://github.com/psychs/limechat"
website: "https://github.com/psychs/limechat"
license: "GPL-2.0"
licenseUrl: "https://github.com/psychs/limechat/blob/master/GPL.txt"
download: "https://apps.apple.com/app/limechat/id414030210"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No App Store update since June 2020 and no commit to the repository since November 2021."
icon: ./assets/icon.png
sources:
  - "https://github.com/psychs/limechat"
  - "https://github.com/psychs/limechat/blob/master/GPL.txt"
  - "https://apps.apple.com/app/limechat/id414030210"
  - "https://raw.githubusercontent.com/psychs/limechat/master/README.md"
  - "https://raw.githubusercontent.com/psychs/limechat/master/web/index.html"
  - "https://itunes.apple.com/lookup?id=414030210&country=us"
  - "https://github.com/psychs/limechat/commits/master"
  - "https://github.com/psychs/limechat/blob/master/Classes/IRC/IRCClientConfig.m"
  - "https://github.com/psychs/limechat/blob/master/Classes/IRC/IRCClientConfig.h"
  - "https://github.com/psychs/limechat/blob/master/Classes/IRC/IRCChannelConfig.h"
  - "https://github.com/psychs/limechat/blob/master/Classes/Preferences/Preferences.m"
  - "https://github.com/psychs/limechat/blob/master/Classes/Preferences/ViewTheme.m"
  - "https://github.com/psychs/limechat/tree/master/Resources/Themes"
  - "https://github.com/psychs/limechat/blob/master/Classes/Dialogs/ServerDialog.m"
  - "https://raw.githubusercontent.com/Codeux-Software/Textual/master/README.md"
  - "https://github.com/psychs/limechat/blob/master/Classes/Controllers/AppController.m"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/psychs/limechat/master/Resources/icon/application.iconset/icon_256x256.png"
    credit: "Satoshi Nakagawa (icon by Yohei Endo)"
    license: "LimeChat app icon; trademarks retained, distributed in the GPL-2.0 repository"
---

LimeChat puts every IRC server you connect to, along with its channels, in a single window, and you move between them mostly from the keyboard. Tab completes a nickname. Option-Space jumps to the next channel with unread messages, Command-1 through Command-0 pick one of the first ten channels on the current server, and Control-Return sends a notice.

Each server keeps its own connection settings:

- SSL, with an option to verify the server's certificate.
- SASL login once you set a nickname password. Saved passwords go into the macOS Keychain.
- A SOCKS4 or SOCKS5 proxy, or the system SOCKS setting.
- Commands sent after login, channels joined automatically, and a main and a fallback text encoding.

Themes control how the window looks. Each one pairs a CSS file for the chat log with a YAML file that sets fonts and colors for the input field, member list and server tree, plus an optional JavaScript file. Limelight is the default, and Deep Ocean and Spring Night come with it. You can add highlight keywords beyond your own nickname and set a hotkey that shows or hides LimeChat from any app. Transcripts can be saved to a folder in Documents, though logging is off by default.

The free Mac App Store build needs macOS 10.13 or later. Its latest version, 2.47 from June 2020, fixed scrolling and added Option-Shift-Up and Option-Shift-Down for unread channels. The source is on GitHub under the GPL version 2. Its last commits, in 2021, added Libera Chat to the server list and adjusted SASL PLAIN login.

Textual, another Mac IRC client, began in 2010 as a fork of LimeChat.
