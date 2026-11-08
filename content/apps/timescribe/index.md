---
name: "TimeScribe"
summary: "An offline work-hours tracker with idle detection, projects, absences and PDF, Excel or CSV export."
category: "Productivity"
tags:
  - time-tracking
  - privacy
  - cross-platform
alternativeTo:
  - rescuetime
  - manictime
repository: https://github.com/WINBIGFOX/TimeScribe
website: https://timescribe.app
license: "GPL-3.0"
licenseUrl: https://github.com/WINBIGFOX/TimeScribe/blob/main/LICENSE
download: https://github.com/WINBIGFOX/TimeScribe/releases
freeDownload: true
homebrew: "timescribe"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/WINBIGFOX/TimeScribe
  - https://github.com/WINBIGFOX/TimeScribe/blob/main/LICENSE
  - https://github.com/WINBIGFOX/TimeScribe/releases
  - https://formulae.brew.sh/cask/timescribe
  - https://raw.githubusercontent.com/WINBIGFOX/TimeScribe/main/README.md
  - https://github.com/WINBIGFOX/TimeScribe/releases/tag/v1.18.0
  - https://timescribe.app/download/macos/arm64
  - https://www.rescuetime.com/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/WINBIGFOX/TimeScribe/main/public/icon.png
    credit: "WINBIGFOX and TimeScribe contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

TimeScribe records the hours you work so you can see your day, bill clients and fill in timesheets. You start, pause and stop the timer with one click, with a compact view in the menu bar, or let TimeScribe start and pause on its own based on screen time and whether you are idle.

- Time entries can be assigned to projects with descriptions and hourly rates, and TimeScribe calculates what to bill. Since version 1.18.0 you can mark single entries in a billable project as non-billable.
- An app usage view shows which programs you used and lets you label them as work or distraction.
- Holidays, vacation and sick leave go into an absence planner.
- Day and week views chart your working patterns, and reports export to PDF, Excel or CSV.

Links such as `timescribe://start/work`, `timescribe://start/break` and `timescribe://stop` control the timer, so Shortcuts, Alfred, Raycast or a script can drive it. You can also set your own keyboard shortcuts. The interface comes in a dozen languages, including right-to-left layouts for Arabic, Hebrew and Persian.

The developer says TimeScribe needs no registration and keeps data on your device, in a local SQLite database. It is built with Laravel and NativePHP on Electron and also runs on Windows. Mac builds are separate DMGs for Apple silicon and Intel, also available through Homebrew.

RescueTime also logs time on apps and websites automatically, and adds focus sessions plus a separate Timesheets tool for client and project hours. TimeScribe sticks to tracking your own hours and works without an account.
