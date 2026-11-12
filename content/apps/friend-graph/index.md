---
name: "Friend Graph"
summary: "Draws charts of who you talk to most from the message and call history your Mac already keeps."
category: "Utilities"
tags:
  - visualization
  - statistics
  - privacy
  - apple-intelligence
repository: "https://github.com/Zesty0wl/friend-graph"
website: "https://github.com/Zesty0wl/friend-graph"
license: "Apache-2.0"
licenseUrl: "https://github.com/Zesty0wl/friend-graph/blob/main/LICENSE"
download: "https://github.com/Zesty0wl/friend-graph/releases/latest"
freeDownload: true
featured: false
added: "2026-11-11"
verified: "2026-11-11"
icon: "./assets/icon.png"
screenshots:
  - src: "./assets/circle.webp"
    alt: "The My circle view with sample people placed in inner circle, friends and people I know rings, and a side panel of message counts and busiest days."
    source: "https://github.com/Zesty0wl/friend-graph/blob/b894a82fc7a35c489bf43b3a8aae9672e4a34f9a/docs/circle.png"
    credit: "Neil Johnson"
  - src: "./assets/person.webp"
    alt: "One sample person selected in the circle, with reply times, who sends more, calls and a month-by-month chart in the side panel."
    source: "https://github.com/Zesty0wl/friend-graph/blob/b894a82fc7a35c489bf43b3a8aae9672e4a34f9a/docs/person.png"
    credit: "Neil Johnson"
sources:
  - "https://github.com/Zesty0wl/friend-graph"
  - "https://github.com/Zesty0wl/friend-graph/blob/main/LICENSE"
  - "https://github.com/Zesty0wl/friend-graph/releases/latest"
  - "https://github.com/Zesty0wl/friend-graph/releases/tag/v0.3.1"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Zesty0wl/friend-graph/blob/b894a82fc7a35c489bf43b3a8aae9672e4a34f9a/design/icon-mac.png"
    credit: "Neil Johnson"
    license: "Apache-2.0; upstream app icon, trademarks retained"
  - path: "./assets/circle.webp"
    source: "https://github.com/Zesty0wl/friend-graph/blob/b894a82fc7a35c489bf43b3a8aae9672e4a34f9a/docs/circle.png"
    credit: "Neil Johnson"
    license: "Apache-2.0; upstream README screenshot with sample data, trademarks retained"
  - path: "./assets/person.webp"
    source: "https://github.com/Zesty0wl/friend-graph/blob/b894a82fc7a35c489bf43b3a8aae9672e4a34f9a/docs/person.png"
    credit: "Neil Johnson"
    license: "Apache-2.0; upstream README screenshot with sample data, trademarks retained"
---

Friend Graph reads the record your Mac keeps of who you message and call, and draws who is closest to you. It looks at who and when, never at what was said. Messages, WhatsApp and the Mac's own record of who you talk to feed four views:

- My circle places people nearer the centre the more you talk.
- My year is a moving timeline of who was around, back as far as your messages go.
- Week by week shows a year of conversation as one line per person.
- What my Mac knows lists what macOS stores about you and how much each part holds.

A side panel picks out figures such as reply times, who sends more and your longest run of days in contact. With Apple Intelligence turned on, it adds a short note written on the Mac. My Film turns the year into a video with music for sharing.

Closeness is a score built from reply speed, balance, calls, and how long and how steadily you have talked. The scoring code is in the repository with tests.

Before any picture appears, you confirm who each person is, and you can mark someone as in memory or leave them out. Shared pictures start with names and photos hidden. A button fills the views with made-up people, so you can look before granting access. The developer says nothing is uploaded and the app makes no network requests.

It needs macOS 27 or later and Full Disk Access, which the first launch walks you through. Because it reads files Apple does not document, a macOS update can break it, and it is not sandboxed. Releases are signed, notarized pkg installers built for Apple silicon.
