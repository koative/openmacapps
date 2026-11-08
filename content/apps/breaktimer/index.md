---
name: "BreakTimer"
summary: "A break reminder that schedules regular pauses as notifications or fullscreen prompts, within your working hours."
category: "Productivity"
tags:
  - breaks
  - wellbeing
  - timer
  - menu-bar
  - cross-platform
repository: https://github.com/tom-james-watson/breaktimer-app
website: https://breaktimer.app
license: "GPL-3.0"
licenseUrl: https://github.com/tom-james-watson/breaktimer-app/blob/master/LICENSE.md
download: https://github.com/tom-james-watson/breaktimer-app/releases
freeDownload: true
homebrew: "breaktimer"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/tom-james-watson/breaktimer-app
  - https://github.com/tom-james-watson/breaktimer-app/blob/master/LICENSE.md
  - https://github.com/tom-james-watson/breaktimer-app/releases
  - https://formulae.brew.sh/cask/breaktimer
  - https://raw.githubusercontent.com/tom-james-watson/breaktimer-app/master/README.md
  - https://github.com/tom-james-watson/breaktimer-app/releases/tag/v2.1.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/tom-james-watson/breaktimer-app/master/resources/icon.png
    credit: "Tom James Watson and BreakTimer contributors"
    license: "GPL-3.0 repository asset; BreakTimer name and icon retained by the author"
---

BreakTimer interrupts long stretches at the computer with breaks on a schedule you set, to help against RSI and eye strain. You choose how often breaks come and how long they last, and the app runs from the menu bar on the Mac.

- Each reminder can be a simple notification or a break window that fills the screen.
- Working hours keep it quiet outside the times you set.
- A notice before each break lets you skip or snooze it when the timing is bad.
- The messages and colours shown during a break are yours to change.
- It can restart the countdown when it sees you have been away from the computer.

The same app also runs on Windows and Linux. On the Mac it comes as a Universal DMG for Apple silicon and Intel, from GitHub releases or the breaktimer Homebrew cask.

If a bug leaves the interface in a state it cannot recover from, quitting the app and deleting `~/Library/Application Support/BreakTimer` resets it. The log for bug reports lives at `~/Library/Logs/BreakTimer/main.log`, and the developer says it holds no personally identifying information. The README also says the project gives no support for enterprise or commercial deployment and is provided as is.
