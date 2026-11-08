---
name: "Stretchly"
summary: "A break reminder that schedules short micro breaks and longer pauses throughout the working day."
category: "Productivity"
tags: ["breaks", "reminders", "menu-bar", "cross-platform"]
repository: "https://github.com/hovancik/stretchly"
website: "https://hovancik.net/stretchly"
license: "BSD-2-Clause"
licenseUrl: "https://github.com/hovancik/stretchly/blob/trunk/LICENSE"
download: "https://github.com/hovancik/stretchly/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/hovancik/stretchly", "https://github.com/hovancik/stretchly/blob/trunk/LICENSE", "https://github.com/hovancik/stretchly/releases", "https://raw.githubusercontent.com/hovancik/stretchly/trunk/README.md", "https://hovancik.net/stretchly", "https://github.com/hovancik/stretchly/releases/tag/v1.22.1", "https://formulae.brew.sh/cask/stretchly", "https://github.com/Homebrew/homebrew-cask/blob/main/Casks/s/stretchly.rb"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/hovancik/stretchly/trunk/build/icon.icns", "credit": "Jan Hovancik and Stretchly contributors", "license": "BSD-2-Clause; upstream project asset, trademarks retained"}]
screenshots: []
---

Stretchly reminds you to step away from the computer. It sits in the menu bar and, with the default settings, interrupts you for 20 seconds every 10 minutes (a Mini break) and for 5 minutes every 30 minutes (a Long break). Each break shows an idea for what to do during the pause, and a notification warns you shortly beforehand: 10 seconds ahead for the short one, 30 for the long one.

Once a break begins, a single postponement is allowed, by 2 minutes for a Mini break or 5 for a Long break. After a set time you can also skip it with Command-X or the link at the bottom of the window. Mini and Long breaks each have an optional strict mode. Breaks pause after 5 minutes of idle time and while Do Not Disturb is on.

Most settings live in the Preferences window, and the rest in a JSON file you can edit by hand. A `stretchly` command talks to a running instance from Terminal, and the README links to an Alfred workflow and a Raycast extension.

Stretchly is a cross-platform Electron app and requires macOS 13 Ventura or later. It is only ad-hoc signed, so the first launch needs approval in Privacy & Security, and the README gives an `xattr` command for Apple silicon Macs. The developer recommends installing it from the project's own Homebrew tap. The `stretchly` cask in Homebrew's main repository has been disabled since 1 September 2026 because the app fails Homebrew's Gatekeeper check.
