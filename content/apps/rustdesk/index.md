---
name: "RustDesk"
summary: "A remote desktop application with an option to use your own connection infrastructure."
category: "Utilities"
tags: ["remote-desktop", "screen-sharing", "cross-platform"]
repository: "https://github.com/rustdesk/rustdesk"
website: "https://rustdesk.com"
license: "AGPL-3.0"
licenseUrl: "https://github.com/rustdesk/rustdesk/blob/master/LICENCE"
download: "https://github.com/rustdesk/rustdesk/releases"
freeDownload: true
homebrew: "rustdesk"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/rustdesk/rustdesk", "https://github.com/rustdesk/rustdesk/blob/master/LICENCE", "https://github.com/rustdesk/rustdesk/releases", "https://raw.githubusercontent.com/rustdesk/rustdesk/master/README.md", "https://rustdesk.com", "https://rustdesk.com/docs/en/client/mac/", "https://rustdesk.com/docs/en/self-host/", "https://rustdesk.com/pricing", "https://github.com/rustdesk/rustdesk/releases/tag/1.5.1"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/rustdesk/rustdesk/blob/master/flutter/assets/icon.svg", "credit": "RustDesk contributors", "license": "AGPL-3.0; project trademarks retained"}]
icon: "./assets/icon.svg"
---

RustDesk shows another computer's screen and passes your keyboard and mouse to it, so you can work on a machine in another room or help someone on theirs. Each running copy registers with an ID server. When you connect to another machine's ID, that server tries to link the two computers directly, and a relay server carries the session only when the direct link fails.

The client works with the project's public ID and relay servers without any setup. You can also run those two servers yourself and point the client at them, which keeps deployment data on machines you manage. The self-hosted server comes in a free open-source edition and a paid Server Pro edition. Pro adds a web console, OIDC and LDAP sign-in, two-factor authentication, access control and management of several relays.

Clients exist for Windows, macOS, Linux and Android, so a Mac can control a PC and the other way round. The developers say that RustDesk.com is their only official domain and ask you not to download the app from anywhere else. Version 1.5.1 comes as separate DMGs for Apple silicon and Intel, both signed with a Developer ID and notarized. The Apple silicon build requires macOS 12.3 or later, and the Intel build macOS 10.14.

To be controlled, a Mac needs RustDesk in the Applications folder with the Accessibility and Screen Recording permissions. Accessibility covers mouse and keyboard input, and Screen Recording covers capture of the display. On newer macOS versions the controlling Mac can also need Input Monitoring before local keystrokes reach the remote machine.
