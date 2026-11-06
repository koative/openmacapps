---
name: "sigstop"
summary: "Menu bar break reminder that waits for a natural pause in your work, using activity signals kept on your Mac."
category: "Productivity"
tags:
  - menu-bar
  - focus
  - timer
repository: "https://github.com/Mohamed-Elshesheny/sigstop"
website: "https://sigstop-app.vercel.app"
license: "GPL-3.0"
licenseUrl: "https://github.com/Mohamed-Elshesheny/sigstop/blob/main/LICENSE"
download: "https://github.com/Mohamed-Elshesheny/sigstop/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Mohamed-Elshesheny/sigstop"
  - "https://github.com/Mohamed-Elshesheny/sigstop/blob/main/LICENSE"
  - "https://github.com/Mohamed-Elshesheny/sigstop/releases"
  - "https://sigstop-app.vercel.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Mohamed-Elshesheny/sigstop/main/app/Resources/sigstop.icns"
    credit: "sigstop contributors"
    license: "GPL-3.0; upstream app icon, name and logo not covered by the code license (see TRADEMARK.md), trademarks retained"
---

sigstop lives in the menu bar and reminds you to take a break. It holds the reminder while you are on a call and waits for a pause in your work instead of firing on a timer. It recognizes editors, terminals, browsers, AI tools and Xcode, and it escalates from a gentle prompt to a full-screen stop if you keep working. It also keeps a daily view of active time, your longest unbroken stretch and the breaks you took. It is for developers who want breaks that do not land in the middle of a standup or a build.

Requires macOS 14 or later, on Apple silicon or Intel. The download is not notarized because the project has no paid Apple Developer ID, so the first launch has to be allowed under System Settings → Privacy & Security (Open Anyway), or cleared with the `xattr` command in the README. Basic features need no permissions; window titles and the git branch are optional. The only network request is the one you trigger with Check for updates. Focus and Do Not Disturb do not silence its own panels by default.
