---
name: "KStars"
summary: "Maps the night sky and helps you plan observing sessions, in a desktop astronomy application."
category: "Education"
tags: ["astronomy", "planetarium", "observing"]
repository: "https://github.com/KDE/kstars"
website: "https://kstars.kde.org/"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/KDE/kstars/blob/master/LICENSES/GPL-2.0-or-later.txt"
download: "https://kstars.kde.org/download/macos/"
freeDownload: true
homebrew: "kstars"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/KDE/kstars", "https://github.com/KDE/kstars/blob/master/LICENSES/GPL-2.0-or-later.txt", "https://github.com/KDE/kstars/blob/master/README.md", "https://kstars.kde.org/download/macos/", "https://github.com/KDE/kstars/blob/master/org.kde.kstars.appdata.xml", "https://kstars.kde.org/features/", "https://raw.githubusercontent.com/KDE/kstars/master/kstars/main.cpp"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/KDE/kstars/master/kstars/icons/256-apps-kstars.png", "credit": "KStars developers", "license": "GPL-2.0-or-later; upstream project asset, trademarks retained"}]
---

KStars draws the sky for any place and time you choose, with the planets, Jupiter's moons, comets, asteroids and up to 100 million stars. Change your location to see how latitude alters the view, or run the clock fast and watch a planet trace its retrograde loop.

- The observation planner sorts your list of targets into observing order and caches Digitized Sky Survey images for sites with poor or no internet.
- Printed star charts serve as finder charts where you cannot take a laptop, and field-of-view markers follow from the focal lengths of your telescope and eyepieces.
- What's Up Tonight lists what is visible, Altitude vs Time helps you pick observing times, and the Sky Calendar shows how the planets move across the sky over long periods.
- Through INDI, KStars drives mounts, focusers, filter wheels and cameras, and its Ekos suite covers polar alignment, focusing, guiding and capture.

The default catalog holds stars to magnitude 8 and about 10,000 NGC and IC objects. Extra catalogs take that to 100 million stars down to magnitude 16, and you can import your own. Observation logs use the OAL XML format, though the project says logging still needs polish.

KDE publishes version 3.8.5 as two disk images: one for Apple silicon on macOS 11 or later, and one for Intel on macOS 10.15 or later, each with a SHA256 checksum. The project README also links a Mac App Store listing.

Students get a built-in reference too. Underlined technical terms open explanations from AstroInfo, a set of pages in the KStars handbook, and the Astrocalculator handles coordinate conversions.
