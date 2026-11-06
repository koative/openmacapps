---
name: "JackMate"
summary: "Native macOS app to start and configure the JACK audio server, with a visual patchbay and saved studio sessions."
category: "Media"
tags:
  - audio
  - menu-bar
  - native
repository: "https://github.com/zinc75/JackMate"
website: "https://jackmate.app"
license: "MIT"
licenseUrl: "https://github.com/zinc75/JackMate/blob/main/LICENSE"
download: "https://github.com/zinc75/JackMate/releases/download/v2.1.1/JackMate-2.1.1-Installer.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/zinc75/JackMate"
  - "https://github.com/zinc75/JackMate/blob/main/LICENSE"
  - "https://github.com/zinc75/JackMate/releases"
  - "https://jackmate.app"
---

JackMate is a front end for the JACK audio server. It starts and stops the server with the sample rate, buffer size and devices you choose, shows the exact command it runs, and provides a visual patchbay for client connections, plus transport controls. Studio presets save and restore the whole session, including clients and connections. It suits musicians and audio engineers who already use JACK and prefer a window or menu bar item to the command line.

The README says the app runs on macOS 15 or later, on Intel and Apple silicon, and that it is signed and notarized. JACK2 must be installed separately, because libjack is not bundled. Routing native apps such as Safari or Music into JACK uses JackMoebius, a separate driver with a 14-day free trial and a one-time purchase; the core app does not need it.
