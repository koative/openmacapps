---
name: "Claude Usage Monitor"
summary: "Shows Claude.ai plan usage limits and reset times from a colour-coded menu bar icon."
category: "AI"
tags:
  - menu-bar
  - usage-tracking
repository: https://github.com/theDanButuc/Claude-Usage-Monitor
website: https://github.com/theDanButuc/Claude-Usage-Monitor
license: "MIT"
licenseUrl: https://github.com/theDanButuc/Claude-Usage-Monitor/blob/v2.2.1/LICENSE
download: https://github.com/theDanButuc/Claude-Usage-Monitor/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/theDanButuc/Claude-Usage-Monitor
  - https://github.com/theDanButuc/Claude-Usage-Monitor/blob/v2.2.1/LICENSE
  - https://github.com/theDanButuc/Claude-Usage-Monitor/releases
  - https://raw.githubusercontent.com/theDanButuc/Claude-Usage-Monitor/main/README.md
  - https://github.com/theDanButuc/Claude-Usage-Monitor/releases/tag/v2.2.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/theDanButuc/Claude-Usage-Monitor/v2.2.1/ClaudeUsageMonitor/Assets/AppIcon.icns
    credit: "Dan Butuc"
    license: "MIT; upstream project asset, trademarks retained"
---

Claude Usage Monitor shows how much of your Claude.ai plan allowance you have used, from a menu bar icon that turns from green to orange to red as you use more. The menu bar text gives an estimate of the time left at your current pace, falling back to the session percentage when you are idle, next to your weekly percentage.

Click the icon for bars covering the current session, weekly limits across all models and, on the Max plan, Sonnet usage, each with a reset countdown. If Extra Usage is turned on for your account, a fourth bar tracks monthly credit spend. Right-click for a quick summary and the refresh interval, from 30 seconds to 10 minutes.

- Notifications arrive at 75, 80, 90, 95 and 100 percent, and when the session resets.
- The icon turns grey with a warning when the data is more than 10 minutes old.
- A banner appears when a newer version is on GitHub.

There is no API key to enter. On first launch a login window opens; you sign in to Claude.ai, and the app keeps the session cookie for later requests. After that it reads your usage from Claude.ai's internal API with plain requests, without scraping the page.

The app needs macOS 13 and works with Free, Pro, Team and Max accounts. The DMG holds a Universal app for Apple silicon and Intel that is ad-hoc signed and not notarized, so you right-click and choose Open the first time. A Homebrew cask is available from the developer's tap.
