---
name: "horita"
summary: "Menu bar app that shows your next meeting with a countdown and joins the call in one click. Reads your Mac's calendars."
category: "Productivity"
tags:
  - menu-bar
  - meetings
  - calendar
repository: "https://github.com/cordwainersmith/horita"
website: "https://horita.app"
license: "MIT"
licenseUrl: "https://github.com/cordwainersmith/horita/blob/main/LICENSE"
download: "https://github.com/cordwainersmith/horita/releases/download/v0.2.0/Horita.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/cordwainersmith/horita"
  - "https://github.com/cordwainersmith/horita/blob/main/LICENSE"
  - "https://github.com/cordwainersmith/horita/releases"
  - "https://horita.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/cordwainersmith/horita/main/App/Assets.xcassets/AppIcon.appiconset/icon_512.png"
    credit: "Liran Baba"
    license: "Not covered by the MIT code license; name and logo reserved per the README; trademarks retained"
---

horita keeps your next meeting in the menu bar. When a meeting is close, a countdown appears; otherwise the item is just an icon. A click opens today's meetings in a dropdown, with a summary of how busy the day is, and one click joins Zoom, Google Meet or Microsoft Teams calls. It does not try to be a calendar app. It suits people who want a quiet menu bar item, and it can hide meeting titles while sharing a screen. Reminders are off by default.

The README says the app needs macOS 14 or later and is notarized by Apple. It reads the calendars already on your Mac, so calendar access is requested on first use, and it can also connect a Google account directly, with the sign-in token kept in the Keychain. Apart from those Google connections, the only online activity is update checks through dl.horita.app, which the README says keeps anonymous counts of version and download or update.
