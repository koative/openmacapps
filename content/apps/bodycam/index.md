---
name: "bodycam"
summary: "Records the commands, file changes, secret reads and network connections of AI coding agents on your Mac, with a report."
category: "Privacy & security"
tags:
  - coding-agents
  - security
  - privacy
  - terminal
repository: "https://github.com/omlahore/bodycam"
website: "https://omlahore.github.io/bodycam/"
license: "MIT"
licenseUrl: "https://github.com/omlahore/bodycam/blob/main/LICENSE"
download: "https://github.com/omlahore/bodycam/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/omlahore/bodycam"
  - "https://github.com/omlahore/bodycam/blob/main/LICENSE"
  - "https://github.com/omlahore/bodycam/releases"
  - "https://omlahore.github.io/bodycam/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/omlahore/bodycam/main/app/Resources/AppIcon.png"
    credit: "omlahore"
    license: "MIT; upstream app icon, trademarks retained"
---

bodycam records what an AI coding agent does while it runs. Start an agent through it, for example `bodycam claude`, and when the agent exits you get a summary and a full Markdown report: the commands it ran, the files it changed, the credentials it used and the servers it connected to. The menu bar app does the same for every agent you start and notifies you when one reads a secret or changes your setup. It suits developers who run agents on their own Mac and want a record they can review or share, with key-like values masked.

The app's build settings require macOS 14.0 or later, while the README gives macOS 13 or later for the command-line download; both run on Apple silicon and Intel. The app is not notarized, so the first launch needs Open Anyway under Privacy & Security. Recording needs Full Disk Access for the app and your Mac password, because it reads Endpoint Security events through `eslogger`, which runs only as root. bodycam observes and reports; it does not block anything. The README notes that it checks network connections every two seconds, so short ones can be missed, and that it cannot see the contents of an agent's requests.
