---
name: "AB Download Manager"
summary: "Catches downloads from your browser and runs them in queues with schedules and speed limits."
category: "Internet"
tags:
  - download-manager
  - downloads
  - cross-platform
repository: https://github.com/amir1376/ab-download-manager
website: https://abdownloadmanager.com
license: "Apache-2.0"
licenseUrl: https://github.com/amir1376/ab-download-manager/blob/master/LICENSE
download: https://github.com/amir1376/ab-download-manager/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/amir1376/ab-download-manager", "https://github.com/amir1376/ab-download-manager/blob/master/LICENSE", "https://raw.githubusercontent.com/amir1376/ab-download-manager/master/README.md", "https://raw.githubusercontent.com/amir1376/ab-download-manager-browser-integration/master/README.md", "https://github.com/amir1376/ab-download-manager/releases", "https://github.com/amir1376/ab-download-manager/releases/tag/v1.11.4", "https://abdownloadmanager.com"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/amir1376/ab-download-manager/master/desktop/app/icons/icon.icns
    credit: "AB Download Manager contributors"
    license: "Apache-2.0 repository asset; name and logo retained by the project"
---

AB Download Manager takes file downloads out of the browser and runs them in its own window. Links come in from the browser extension or by hand, and each file is fetched over several connections at once.

- Queues run downloads one after another, and a scheduler starts and stops each queue at set times.
- A speed limiter caps download speed so the rest of the connection stays usable.
- The browser extension, kept in a separate repository, adds a "Download With AB DM" item to the context menu and catches download links as you click them.
- Selecting part of a page that contains links brings up a "Download Selected" popup for grabbing them in one go.
- Several themes are included, among them dark, light and black.

For the Mac, each GitHub release has separate disk images and tar archives for Apple silicon and Intel. The 1.11.4 Apple silicon image is about 88 MB and declares macOS 10.13 or later. You can also install it with Homebrew from the developer's own tap.

The same app runs on Windows, Linux and Android, with translations handled on Crowdin. The project warns that copies in Google Play or other app stores it does not list are not its own, and it treats them as unsafe.
