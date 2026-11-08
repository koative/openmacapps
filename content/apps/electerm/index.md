---
name: "electerm"
summary: "A terminal and remote access client covering SSH, SFTP, FTP, Telnet, serial ports, RDP, and VNC."
category: "Developer tools"
tags:
  - terminal
  - ssh
  - sftp
  - remote-desktop
  - cross-platform
  - terminal-emulator
alternativeTo:
  - termius
  - putty
  - mobaxterm
  - winscp
repository: "https://github.com/electerm/electerm"
website: "https://electerm.org"
license: "MIT"
licenseUrl: "https://github.com/electerm/electerm/blob/master/LICENSE"
download: "https://github.com/electerm/electerm/releases"
freeDownload: true
homebrew: "electerm"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/electerm/electerm"
  - "https://github.com/electerm/electerm/blob/master/LICENSE"
  - "https://github.com/electerm/electerm/releases"
  - "https://github.com/electerm/electerm-resource"
  - "https://raw.githubusercontent.com/electerm/electerm/master/README.md"
  - "https://electerm.org"
  - "https://github.com/electerm/electerm/releases/tag/v5.9.0"
  - "https://mobaxterm.mobatek.net/"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/electerm/electerm-resource/master/build/icons.icns"
    credit: "ZHAO Xudong and electerm contributors"
    license: "Official electerm icon from the electerm-resource repository, which states no license; shown only to identify the app, trademarks retained"
---

electerm keeps your local shells and remote connections in one tabbed window. You save a server as a bookmark, open it in a tab, and work in the terminal or browse remote files in the built-in SFTP file manager. A double-click on a small remote file opens it for editing.

- Protocols cover SSH, SFTP, FTP, Telnet, serial ports, RDP, VNC and Spice.
- SSH logins can use a public key, password, SSH agent, certificate or one-time code, with tunnels and connection hopping.
- Quick input sends the same keystrokes to one terminal or all of them.
- Bookmarks and settings can sync to a secret GitHub or Gitee gist, WebDAV, a custom server or electerm's own cloud.
- An optional AI assistant suggests and explains commands through OpenAI or Anthropic-style APIs you configure, and its agent mode can run them.

A global hotkey, Control-2 by default, shows and hides the window like a drop-down terminal. Links such as `ssh://user@host:22` open a connection directly, and themes, background images and transparent windows change the look.

The app is built on Electron. GitHub releases carry separate DMGs for Apple silicon and Intel, plus an Intel build marked mac10 for older systems. The Apple silicon app needs macOS 13 and is Developer ID-signed and notarized. It checks for updates at launch and offers an upgrade button.

MobaXterm puts the same mix of SSH, SFTP, RDP and VNC in one window, but it runs only on Windows. It also bundles an X11 server for remote graphical programs.
