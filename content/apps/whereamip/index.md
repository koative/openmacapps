---
name: "WhereAmIP"
summary: "Menu bar flag for your exit IP's country, with warnings for VPN routing, IPv6 and DNS leaks, and Private Relay."
category: "Internet"
tags:
  - vpn
  - network
  - privacy
  - menu-bar
repository: "https://github.com/frinsen/whereamip"
website: "https://frinsen.github.io/whereamip/"
license: "MIT"
licenseUrl: "https://github.com/frinsen/whereamip/blob/main/LICENSE"
download: "https://github.com/frinsen/whereamip/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/frinsen/whereamip"
  - "https://github.com/frinsen/whereamip/blob/main/LICENSE"
  - "https://github.com/frinsen/whereamip/releases/latest"
  - "https://frinsen.github.io/whereamip/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/frinsen/whereamip/releases/latest/download/WhereAmIP.app.zip"
    credit: "frinsen"
    license: "MIT; upstream app icon from AppIcon.icns in WhereAmIP.app, trademarks retained"
---

WhereAmIP shows the flag of the country your traffic exits from in the menu bar, and checks whether the connection is actually reachable rather than just connected. When a VPN takes over the default route, the flag changes. The dropdown shows the public IP, city, ISP and the VPN interface, and warns about IPv6 leaks, DNS resolvers and iCloud Private Relay splits. It suits people who use VPNs and want to confirm where their traffic really goes. The same project also includes a command-line tool and a Linux panel version.

It needs macOS 13 or later. The README's install path is the Homebrew formula in `frinsen/tap`, which builds from source with the Xcode command line tools. The release zip is not signed or notarized, so its first launch must be allowed in System Settings. Lookups go to public geolocation services and to ipify for the IPv6 check, and the optional DNS check sends TXT queries to `test.dnscheck.tools`. The update check contacts GitHub at most every six hours and can be turned off. There are no accounts, no analytics and no log files.
