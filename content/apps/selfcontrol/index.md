---
name: SelfControl
summary: "Blocks websites and mail servers for a set time, with no way to end the block early."
category: Productivity
tags:
  - focus
  - website-blocking
  - distraction-free
repository: https://github.com/SelfControlApp/selfcontrol
website: https://selfcontrolapp.com/
license: GPL-3.0
licenseUrl: https://github.com/SelfControlApp/selfcontrol/blob/master/COPYING
download: https://selfcontrolapp.com/
freeDownload: true
homebrew: "selfcontrol"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - "https://github.com/SelfControlApp/selfcontrol"
  - "https://github.com/SelfControlApp/selfcontrol/blob/master/COPYING"
  - "https://github.com/SelfControlApp/selfcontrol/blob/master/README.md"
  - "https://selfcontrolapp.com/"
  - "https://raw.githubusercontent.com/SelfControlApp/selfcontrol/master/README.md"
  - "https://github.com/SelfControlApp/selfcontrol/wiki/FAQ"
  - "https://downloads.selfcontrolapp.com/SelfControl-4.0.2.zip"
assets:
  - path: ./assets/icon.png
    source: https://github.com/SelfControlApp/selfcontrol/blob/34774c413013f903dce00c4f5cb17bc8d3a3c273/SelfControlIcon.png
    credit: SelfControl contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/SelfControlApp/selfcontrol/blob/34774c413013f903dce00c4f5cb17bc8d3a3c273/.github/docs/screenshot.png
    credit: SelfControl contributors
    license: GPL-3.0; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: SelfControl window with the block duration slider and blocklist controls.
    source: https://github.com/SelfControlApp/selfcontrol/blob/34774c413013f903dce00c4f5cb17bc8d3a3c273/.github/docs/screenshot.png
    credit: SelfControl contributors
icon: ./assets/icon.png
---

SelfControl blocks your own access to websites, mail servers or other internet hosts for a set time. You add domain names to a blocklist, set the duration, and press Start. Until the timer runs out, those hosts stay unreachable, even if you restart the Mac or delete the app.

There is no way to end a block early. Deleting the app does not lift it and can stop the block from ending at the right time, so the FAQ suggests testing a short block before a long one. Blocking a domain also blocks other sites served from the same servers or domain, and `google.com`, for example, covers many Google services. Gmail needs `mail.google.com` on the list.

A few setups make blocks unreliable. A VPN keeps SelfControl from blocking properly, and partial VPN clients for corporate or university networks can bring an old block back when they disconnect. In Firefox, DNS over HTTPS can make a block fail unless you restart the browser after each start. Blocks longer than 24 hours are possible, but the app hides that option and the FAQ explains how to set one up.

SelfControl 4.0.2 runs on Mac OS X 10.10 or later, and 3.0.3 remains on the site for 10.8 and 10.9. The 4.0.2 ZIP holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. The app comes in 12 languages.
