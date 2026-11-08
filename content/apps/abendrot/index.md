---
name: "Abendrot"
summary: "Warms each display around local sunset, with a hotkey that briefly shows true colour and a command-line tool."
category: "Utilities"
tags:
  - display
  - night-shift
  - menu-bar
alternativeTo:
  - f-lux
repository: https://github.com/matthewrball/abendrot
website: https://abendrot.app
license: "MIT"
licenseUrl: https://github.com/matthewrball/abendrot/blob/main/LICENSE
download: https://abendrot.app/download/
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/matthewrball/abendrot", "https://github.com/matthewrball/abendrot/blob/main/LICENSE", "https://raw.githubusercontent.com/matthewrball/abendrot/main/README.md", "https://abendrot.app", "https://abendrot.app/download/", "https://github.com/matthewrball/abendrot/releases", "https://github.com/matthewrball/abendrot/releases/tag/v1.1.6", "https://justgetflux.com/", "https://justgetflux.com/news/pages/eula/"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/matthewrball/abendrot/main/App/Resources/Colors.xcassets/AppIcon.appiconset/icon_512.png
    credit: "Matthew Ball"
    license: "MIT; upstream project asset, trademarks retained"
---

Abendrot shifts your screens toward warm light in the evening. In Sunset mode it starts around local sunset, worked out from your time zone or a city you pick; in Manual mode you set the warmth from the menu bar yourself.

Each connected display gets its own setting: Automatic, Screen tint, or Hardware control on monitors that support it. When direct warming is not available, the app falls back to a tint over the screen. Cozy mode pushes past the everyday range to the app's warmest, near-red setting.

Holding a global hotkey lifts the warmth for as long as you hold it. The bundled `abendrot` tool does the same from a shell, a `launchd` job or an AI coding assistant. `abendrot set warmth 0.8` sets the level, `abendrot reveal --hold 10` gives a short true-colour peek, and `--json` returns state for scripts. It talks only to the running app as the same user.

f.lux also warms the display by time of day, and it is free to download. Its license agreement forbids decompiling it or looking for its source. Abendrot's code is under the MIT license, and the developer says it sends no telemetry and contacts only GitHub, for update checks.

Abendrot needs macOS 12 or later. The 1.1.6 disk image holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.
