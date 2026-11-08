---
name: "Lan Mouse"
summary: "Shares one mouse and keyboard across Mac, Linux and Windows computers on the same local network."
category: "Utilities"
tags:
  - mouse
  - keyboard
  - network
  - cross-platform
repository: https://github.com/feschber/lan-mouse
website: https://github.com/feschber/lan-mouse
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/feschber/lan-mouse/blob/main/LICENSE
download: https://github.com/feschber/lan-mouse/releases/latest
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/feschber/lan-mouse
  - https://github.com/feschber/lan-mouse/blob/main/LICENSE
  - https://github.com/feschber/lan-mouse/blob/main/Cargo.toml
  - https://github.com/feschber/lan-mouse/releases/latest
  - https://raw.githubusercontent.com/feschber/lan-mouse/main/README.md
  - https://github.com/feschber/lan-mouse/releases/tag/v0.11.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/feschber/lan-mouse/main/lan-mouse-gtk/resources/de.feschber.LanMouse.svg
    credit: "Ferdinand Schober and Lan Mouse contributors"
    license: "GPL-3.0-or-later repository asset; name and icon retained by the Lan Mouse project"
---

Lan Mouse lets one keyboard and mouse drive several computers on the same network. Each other machine sits on the left, right, top or bottom, and pushing the pointer past that edge hands input to it, much like Universal Control between Apple devices.

Every computer runs its own copy. In the settings window you click Add and enter the other machine's hostname. On that machine, you then authorize yours by its fingerprint, shown under General. Lan Mouse uses UDP port 4242 by default, so the firewall has to let it through. All traffic is encrypted with DTLS, and the README notes that nothing yet guards against timing side-channel attacks.

Lan Mouse also runs on Windows and on Linux with GNOME 45 or later, KDE Plasma 6.1 or later and most wlroots compositors such as Sway and Hyprland. X11 sessions can only receive input. Clipboard sharing is on the roadmap and not available yet. Besides the GTK window there is a command-line interface and a daemon mode for running in the background.

Version 0.11.0 comes as separate ZIPs for Apple silicon and Intel Macs. After unzipping, the README has you clear the quarantine flag with `xattr` and grant the Accessibility permission. On the Mac it runs from the menu bar and keeps no Dock icon.

The project names Synergy and ShareMouse, as well as the open-source Deskflow and Input Leap, as the tools it sets out to replace.
