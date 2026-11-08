---
name: "Pi Stats"
summary: "A menu bar monitor for Pi-hole that shows blocking statistics and can pause filtering on one or more servers."
category: "Utilities"
tags:
  - menu-bar
  - network
  - monitoring
  - dns
repository: https://github.com/Bunn/PiStats
website: https://github.com/Bunn/PiStats
license: "BSD-2-Clause"
licenseUrl: https://github.com/Bunn/PiStats/blob/master/LICENSE
download: https://apps.apple.com/us/app/pi-stats/id1514075262
freeDownload: false
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/Bunn/PiStats
  - https://github.com/Bunn/PiStats/blob/master/LICENSE
  - https://apps.apple.com/us/app/pi-stats/id1514075262
  - https://raw.githubusercontent.com/Bunn/PiStats/master/README.md
  - https://github.com/Bunn/PiStats/releases/tag/5.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Bunn/PiStats/master/images/icon.png
    credit: "Fernando Bunn"
    license: "BSD-2-Clause repository asset; app name and icon retained by the author"
---

Pi Stats watches your Pi-hole from the Mac menu bar. Click the icon to see live blocking statistics with charts, and turn blocking off or back on from the same place.

You can add more than one Pi-hole and follow them all from the same menu. Each one signs in with the password you already use for its web interface, and Pi Stats keeps that password in the Keychain. The app can also show each server's temperature, uptime, CPU load and memory use. Those numbers come from Pi-hole's authenticated API, so you install nothing extra on the server and open no additional port.

Current versions need Pi-hole 6 and macOS 15.2 Sequoia or later. Because Pi-hole 6 limits concurrent API sessions, Pi Stats can fail to connect while other clients get through. Raising `webserver.api.max_sessions`, in `/etc/pihole/pihole.toml` or under the web interface's expert settings, fixes that.

The code is under the BSD 2-Clause license, and the same repository holds an iPhone and iPad version with widgets. The developer distributes the Mac app through the Mac App Store.
