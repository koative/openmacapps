---
name: "Sit Break"
summary: "Menu bar break timer that follows a fixed rhythm or a clock-based schedule and can play your own stretching video during breaks."
category: "Productivity"
tags:
  - breaks
  - reminders
  - timer
  - wellbeing
  - menu-bar
  - cross-platform
repository: "https://github.com/yuexiaoliang/sit-break"
website: "https://github.com/yuexiaoliang/sit-break"
license: "MIT"
licenseUrl: "https://github.com/yuexiaoliang/sit-break/blob/main/LICENSE"
download: "https://github.com/yuexiaoliang/sit-break/releases/latest"
freeDownload: true
featured: false
added: "2026-11-12"
verified: "2026-11-12"
screenshots:
  - src: "./assets/reminder.png"
    alt: "A break window in the Chinese interface, with a looping squat exercise video on the left and a one-minute countdown and written instructions on the right."
    source: "https://github.com/yuexiaoliang/sit-break/blob/72e84817a505287764546b50b46c84f8c898b332/docs/ui-design/app-refresh/reminder-video.png"
    credit: "yuexiaoliang"
  - src: "./assets/schedule.png"
    alt: "Dark settings window in the Chinese interface with Scheduled timer selected and a weekday schedule from 09:00 to 12:00 of 45-minute work and 5-minute break rounds."
    source: "https://github.com/yuexiaoliang/sit-break/blob/72e84817a505287764546b50b46c84f8c898b332/docs/ui-design/app-refresh/timer-mode-scheduled-dark.png"
    credit: "yuexiaoliang"
sources:
  - "https://github.com/yuexiaoliang/sit-break"
  - "https://github.com/yuexiaoliang/sit-break/blob/main/LICENSE"
  - "https://github.com/yuexiaoliang/sit-break/releases/latest"
  - "https://github.com/yuexiaoliang/sit-break/releases/tag/v0.6.0"
  - "https://github.com/yuexiaoliang/sit-break/blob/main/docs/schedules.en.md"
assets:
  - path: "./assets/reminder.png"
    source: "https://github.com/yuexiaoliang/sit-break/blob/72e84817a505287764546b50b46c84f8c898b332/docs/ui-design/app-refresh/reminder-video.png"
    credit: "yuexiaoliang"
    license: "MIT; upstream README screenshot with sample data, trademarks retained"
  - path: "./assets/schedule.png"
    source: "https://github.com/yuexiaoliang/sit-break/blob/72e84817a505287764546b50b46c84f8c898b332/docs/ui-design/app-refresh/timer-mode-scheduled-dark.png"
    credit: "yuexiaoliang"
    license: "MIT; upstream README screenshot with sample data, trademarks retained"
  - path: ./assets/icon.png
    source: https://github.com/yuexiaoliang/sit-break/releases/download/v0.6.0/Sit.Break_0.6.0_universal.dmg
    credit: yuexiaoliang
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Sit Break counts down your work time in the menu bar and, when it runs out, asks you to get up. The break countdown starts only after you choose Take a break, and Snooze puts the reminder off if you are in the middle of something.

There are two ways to time the day. Simple timer repeats one pair of lengths, 45 minutes of work and 5 of rest by default. Scheduled timer follows the clock instead: you set periods such as 09:00 to 12:00 and 13:30 to 18:00 on weekdays, and the gap for lunch stays quiet. Open the app late or wake the Mac, and it joins whichever round the schedule says is running. Single rounds can get their own lengths or break content.

Each break can show text you wrote, a video, or both. The app keeps its own copy of each imported MP4 or M4V file and loops it muted beside the countdown. Links and online videos are not supported. Settings stay on the Mac and no account is needed.

The interface is in English or Chinese, with light and dark themes. There is no Dock icon. A Windows version is built from the same code.

The app needs macOS 12 or later and is a universal build for Apple silicon and Intel. It is ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings under Privacy & Security.
