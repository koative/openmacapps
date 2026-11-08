---
name: "Frpc-Desktop"
summary: "A desktop client for the frp reverse proxy that sets up tunnels and proxies through forms instead of config files."
category: "Internet"
tags:
  - tunneling
  - proxy
  - network
  - cross-platform
repository: https://github.com/luckjiawei/frpc-desktop
website: https://jwinks.com/p/frp/
license: "MIT"
licenseUrl: https://github.com/luckjiawei/frpc-desktop/blob/main/LICENSE
download: https://github.com/luckjiawei/frpc-desktop/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/luckjiawei/frpc-desktop
  - https://github.com/luckjiawei/frpc-desktop/blob/main/LICENSE
  - https://github.com/luckjiawei/frpc-desktop/releases/tag/v1.2.7
  - https://raw.githubusercontent.com/luckjiawei/frpc-desktop/main/README.md
  - https://jwinks.com/p/frp/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/luckjiawei/frpc-desktop/main/src-tauri/icons/128x128%402x.png
    credit: "刘嘉伟 (luckjiawei)"
    license: "MIT repository asset; trademarks retained"
---

frp lets a machine behind NAT or a firewall expose services through a public frp server, and Frpc-Desktop handles the client side of that setup in a window. You enter the server details, add proxies through forms, pick local ports and start or stop the connection, all without writing `frpc.toml` by hand.

- Proxy types include TCP, UDP, HTTP, STCP and XTCP, and TCP and UDP rules can cover a batch of ports.
- HTTP proxies support basic authentication and subdomains.
- The app downloads frp client releases itself, optionally through mirror sites, and can delete versions you no longer need.
- Whole configurations import and export, and an existing `frpc.toml` can be read in.
- Search, with card and list layouts, keeps long proxy lists manageable.

It can start when you log in, and its interface is available in more than one language, English included. The same author publishes Podux, a browser-based frpc manager, for people who would rather work in a web page. The documentation site is written in Chinese.

Mac downloads include Apple silicon and Universal builds, each as a DMG or ZIP. Version 1.2.7 for Apple silicon needs macOS 12 or later. If macOS says the app is damaged, the README's fix is to run `sudo xattr -cr Frpc-Desktop.app` in Terminal.
