---
name: "Halloy"
summary: "Connects to IRC networks with channels in split panes, a long list of IRCv3 features, and settings kept in one TOML file."
category: "Internet"
tags:
  - irc
  - chat
  - messaging
  - cross-platform
repository: https://github.com/squidowl/halloy
website: https://halloy.chat
license: "GPL-3.0"
licenseUrl: https://github.com/squidowl/halloy/blob/main/LICENSE
download: https://halloy.chat/installation.html
homebrew: "halloy"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-08"
sources: ["https://github.com/squidowl/halloy", "https://github.com/squidowl/halloy/blob/main/LICENSE", "https://halloy.chat/installation.html", "https://github.com/squidowl/halloy/releases", "https://raw.githubusercontent.com/squidowl/halloy/main/README.md", "https://halloy.chat/", "https://halloy.chat/configuration/pane.html", "https://halloy.chat/configuration/preview.html", "https://halloy.chat/configuration/file-transfer.html", "https://halloy.chat/guides/keyring.html", "https://github.com/squidowl/halloy/releases/tag/2026.10"]
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/squidowl/halloy/main/assets/logo-macos.png
    credit: "Rune Seir for the Halloy project"
    license: "Distributed in the GPL-3.0 Halloy repository; trademarks retained"
---

Halloy connects you to IRC networks and puts channels, private messages and server buffers into panes in one window. You can split those panes, and Halloy reopens the same layout the next time you launch it.

Its IRCv3 support is long. Chat history, replies, reactions, typing notices, read markers, message redaction, multiline messages and SASL login are among the capabilities it handles, along with the soju bouncer's network and file-host extensions.

Configuration lives in a `config.toml` file, edited by hand or in the built-in config editor. It covers servers, themes, fonts, notifications, highlights and keyboard shortcuts.

- Passwords can stay out of the file, stored in the macOS Keychain instead.
- Links show previews, which you can turn off or limit to URLs that match a pattern.
- File transfers can save to a set folder or ask each time.
- Logs, custom themes, proxies and a portable mode are documented on the project site.

Guides walk through connecting with the soju and ZNC bouncers. Halloy is built in Rust on the iced toolkit, and it also runs on Windows and Linux. Version 2026.10 comes as a DMG with a Universal app, Developer ID-signed and notarized, and Homebrew and MacPorts packages exist. The code is under the GPL version 3.
