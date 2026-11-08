---
name: "Tribler"
summary: "A BitTorrent client that routes downloads through its own onion-style relay network to keep peers anonymous."
category: "Internet"
tags: ["bittorrent", "privacy", "peer-to-peer", "downloads", "cross-platform"]
alternativeTo: ["utorrent"]
repository: "https://github.com/Tribler/tribler"
website: "https://www.tribler.org"
license: "GPL-3.0"
licenseUrl: "https://github.com/Tribler/tribler/blob/main/LICENSE.txt"
download: "https://github.com/Tribler/tribler/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Tribler/tribler", "https://github.com/Tribler/tribler/blob/main/LICENSE.txt", "https://github.com/Tribler/tribler/releases/tag/v8.4.3", "https://raw.githubusercontent.com/Tribler/tribler/main/README.rst", "https://www.tribler.org", "https://www.tribler.org/anonymity.html", "https://www.tribler.org/download.html", "https://www.tribler.org/macos.html", "https://raw.githubusercontent.com/Tribler/tribler/main/src/tribler/ui/public/locales/en_US.json", "https://github.com/Tribler/tribler/wiki/Anonymous-Downloading-and-Streaming-specifications", "https://www.utorrent.com/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Tribler/tribler/main/build/debian/tribler/usr/share/icons/hicolor/256x256/apps/org.tribler.Tribler.png", "credit": "Tribler contributors", "license": "GPL-3.0 repository asset; Tribler name and logo retained by the project"}]
screenshots: []
---

Add a torrent or magnet link to Tribler and it can download through one, two or three relays, so you never contact the BitTorrent swarm directly. Set the default number of hops in settings, or change it for a single download. Each extra hop makes you harder to find and the download slower, and zero hops turns the protection off.

The relays are other Tribler users, since everyone who downloads anonymously also relays for others. Tribler runs its own onion-routing network for torrents, modelled on Tor's protocol but incompatible with the Tor network and without a central directory server. Every layer adds encryption, so with three hops one dishonest relay can no longer see exactly what is going on. Hidden seeding, still experimental, protects uploads the same way, with content encrypted end to end for the downloader.

Search is built in. You look for content from inside the app, without a torrent website. The project has worked on Tribler since 2004, and its developers warn that the anonymity is not yet mature: it targets lawyer-based attacks and censorship, not government agencies.

Release 8.4.3 ships two macOS disk images, labelled arm and i386, and the download page lists macOS 12 or later. Its notes say the Mac app signing is broken. Before Tribler opens, you clear the app's quarantine flag with the `xattr` command given there.

µTorrent's Mac apps center on handling downloads: bandwidth and speed limits, scheduling, swarm health checks, and in µTorrent Web, playing a torrent while it downloads. Tribler's difference is the relay layer between you and other peers, paid for in speed.
