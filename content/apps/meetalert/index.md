---
name: "MeetAlert"
summary: "Menu bar meeting alerts with a popup that stays until you act, one-tap Join and optional phone push through ntfy."
category: "Productivity"
tags:
  - calendar
  - meetings
  - menu-bar
  - notifications
repository: "https://github.com/roypadina/MeetAlert"
website: "https://apps.roypadina.synology.me/apps/meetalert/"
license: "MIT"
licenseUrl: "https://github.com/roypadina/MeetAlert/blob/main/LICENSE"
download: "https://github.com/roypadina/MeetAlert/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/roypadina/MeetAlert"
  - "https://github.com/roypadina/MeetAlert/blob/main/LICENSE"
  - "https://github.com/roypadina/MeetAlert/releases"
  - "https://apps.roypadina.synology.me/apps/meetalert/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/roypadina/MeetAlert/main/AppIcon.icns"
    credit: "Roy Padina"
    license: "MIT; upstream app icon, trademarks retained"
---

MeetAlert reads the calendars macOS already syncs and raises a popup for each upcoming meeting, with a live countdown and a one-click Join for Zoom, Google Meet, Teams, Webex and similar links. The popup stays on screen until you act on it. An optional ntfy push sends the same alert to your phone and repeats it if the Mac is idle or locked. It is for people who miss the start of meetings. It needs no calendar API setup.

It requires macOS 14 or later, as a universal build for Apple silicon and Intel. The app is ad-hoc signed and not notarized, so approve the first launch in System Settings > Privacy & Security. It asks for Calendar access. The phone push needs the free ntfy app and a topic of your own. The project says it has no analytics; its update check runs only if you allow it when asked.
