---
name: "ActivityWatch"
summary: "Logs the apps, window titles and browser tabs you use and charts them in a local web dashboard on your computer."
category: "Productivity"
tags: ["time-tracking", "privacy", "local-first", "cross-platform"]
alternativeTo: ["rescuetime", "manictime"]
repository: "https://github.com/ActivityWatch/activitywatch"
website: "https://activitywatch.net"
license: "MPL-2.0"
licenseUrl: "https://github.com/ActivityWatch/activitywatch/blob/master/LICENSE.txt"
download: "https://github.com/ActivityWatch/activitywatch/releases"
freeDownload: true
homebrew: "activitywatch"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/ActivityWatch/activitywatch", "https://github.com/ActivityWatch/activitywatch/blob/master/LICENSE.txt", "https://github.com/ActivityWatch/activitywatch/releases", "https://github.com/ActivityWatch/media", "https://raw.githubusercontent.com/ActivityWatch/activitywatch/master/README.md", "https://activitywatch.net/", "https://docs.activitywatch.net/en/latest/getting-started.html", "https://docs.activitywatch.net/en/latest/faq.html", "https://github.com/ActivityWatch/activitywatch/releases/tag/v0.14.1", "https://www.rescuetime.com/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/ActivityWatch/media/master/logo/logo.png", "credit": "ActivityWatch contributors", "license": "MPL-2.0 (ActivityWatch media repository); trademarks retained"}]
screenshots: []
---

ActivityWatch records how you spend time at the computer by logging the active app, its window title and whether you are at the keyboard. Once it is running, you open `localhost:5600` in a browser to see timelines, daily activity and totals by category.

Collection is split across watchers:

- The window watcher reads the active app and window title. It needs the Accessibility permission, and Screen Recording and Full Disk Access are not used.
- The AFK watcher uses keyboard and mouse activity to mark when you are away.
- Browser extensions for Chrome and Firefox add the active tab's title and URL.
- Editor plugins log time spent writing code.

The developers say the data stays on your device and is never uploaded. That data includes every window title and URL the watchers see.

RescueTime also tracks app and site use, but its client sends the activity to RescueTime's servers to build its reports, and it moves to a paid subscription after a trial. ActivityWatch keeps the raw events on your machine and is free under the MPL 2.0. Sync between devices is still in development.

Since version 0.14 there are separate downloads for Apple silicon and Intel, as DMG or ZIP, and macOS 12 Monterey is the minimum. The Apple silicon DMG of 0.14.1 is Developer ID-signed and notarized. Each release also offers aw-tauri, an alternative build based on Tauri, next to the default aw-qt. Turn on start at login in only one of them, since both use the same port.
