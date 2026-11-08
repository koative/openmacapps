---
name: "Tabby"
summary: "A terminal workspace for local shells, SSH connections, and serial devices."
category: "Developer tools"
tags: ["terminal", "ssh", "serial", "terminal-emulator"]
alternativeTo: ["termius", "putty", "mobaxterm"]
repository: "https://github.com/Eugeny/tabby"
website: "https://tabby.sh"
license: "MIT"
licenseUrl: "https://github.com/Eugeny/tabby/blob/master/LICENSE"
download: "https://github.com/Eugeny/tabby/releases"
freeDownload: true
homebrew: "tabby"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Eugeny/tabby", "https://github.com/Eugeny/tabby/blob/master/LICENSE", "https://github.com/Eugeny/tabby/releases", "https://raw.githubusercontent.com/Eugeny/tabby/master/README.md", "https://github.com/Eugeny/tabby/releases/tag/v1.0.238", "https://www.chiark.greenend.org.uk/~sgtatham/putty/", "https://mobaxterm.mobatek.net/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/Eugeny/tabby/blob/master/build/icons/256x256.png", "credit": "Tabby contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

Tabby opens local shells, SSH sessions, Telnet and serial connections as tabs in one window. SSH and Telnet hosts go into a built-in connection manager, and custom profiles set up the local shells you open.

- Panes split and nest, tabs can sit on any side of the window, and Tabby reopens your tabs after a restart.
- The SSH client handles X11 and port forwarding, jump hosts, agent forwarding and login scripts.
- Serial sessions save their settings, reconnect on their own and can show input and output as hex bytes.
- An optional dockable window drops down from the top of the screen with a global hotkey.

Secrets and configuration can live in an encrypted vault inside the app. Files move to and from SSH hosts over Zmodem. Shortcuts are fully configurable, including multi-chord ones, and plugins and themes install from the Settings view. A Docker plugin, for example, connects to containers.

Tabby's own README says it is not lightweight, so expect it to use more memory than a minimal terminal.

Each release has separate Apple silicon and Intel downloads for the Mac, as a DMG or ZIP. The code is under the MIT license.

PuTTY covers SSH and Telnet as well, but its official builds target Windows and Unix. MobaXterm adds an X server and network tools in a single Windows application. Tabby has builds for macOS, Windows and Linux, and its README names PuTTY among the programs it is meant to replace.
