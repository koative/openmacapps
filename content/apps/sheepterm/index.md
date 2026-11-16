---
name: "SheepTerm"
summary: "Terminal for network engineers with SSH, Telnet, serial and local shells, vendor-aware highlighting and file transfer."
category: "Developer tools"
tags:
  - ssh
  - terminal
  - serial
  - network
alternativeTo:
  - mobaxterm
  - putty
repository: "https://github.com/bestonehxh/SheepTerm"
website: "https://sheepterm.com"
license: "MIT"
licenseUrl: "https://github.com/bestonehxh/SheepTerm/blob/main/LICENSE"
download: "https://github.com/bestonehxh/SheepTerm/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-16"
icon: "./assets/icon.png"
sources:
  - "https://github.com/bestonehxh/SheepTerm"
  - "https://github.com/bestonehxh/SheepTerm/blob/main/LICENSE"
  - "https://github.com/bestonehxh/SheepTerm/releases/latest"
  - "https://sheepterm.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/bestonehxh/SheepTerm/main/SheepTerm/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "bestonehxh"
    license: "MIT; upstream app icon, trademarks retained"
---

SheepTerm is a terminal for people who manage routers, switches and firewalls. It opens SSH, Telnet, serial and local shell sessions as tabs or split panes, and colours device output by vendor family (Cisco, Aruba, Juniper and others). A device's web interface can open in a tab beside its console.

Around the sessions it adds:

- SFTP, SCP, FTP and TFTP file transfer, plus small file servers you start from the bottom bar
- SSH port forwarding and a ping tab for many hosts at once
- saved snippets with variables, one line broadcast to several tabs, and up to 500 history entries per host

Passwords stay in the macOS Keychain. Sync is optional: after you sign in with Google, hosts, credentials, snippets and settings are encrypted with your passphrase and kept in your own Drive. The optional AI panel sends the output you choose to a Claude, ChatGPT or Gemini command-line tool, with secrets removed. It never runs commands.

On Windows, MobaXterm and PuTTY handle this mix of SSH, serial and file transfer. SheepTerm covers the same ground as a native Mac app.

The Mac version requires macOS 26.4 or later on Apple silicon. The DMG is signed with a Developer ID certificate and notarized, so it opens like other apps. Updates are checked against an Ed25519 signature and installed only when you press the button. The Windows and Linux editions are separate projects.
