---
name: Pareto Security
summary: Checks your Mac for common security misconfigurations such as disabled FileVault,
  firewall or automatic updates.
category: Privacy & security
tags:
- security
- menu-bar
- system-monitoring
repository: https://github.com/ParetoSecurity/pareto-mac
website: https://paretosecurity.com
license: GPL-3.0
licenseUrl: https://github.com/ParetoSecurity/pareto-mac/blob/main/LICENSE
download: https://github.com/ParetoSecurity/pareto-mac/releases
freeDownload: true
homebrew: "pareto-security"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/ParetoSecurity/pareto-mac
- https://github.com/ParetoSecurity/pareto-mac/blob/main/LICENSE
- https://github.com/ParetoSecurity/pareto-mac/releases
- https://paretosecurity.com
- https://raw.githubusercontent.com/ParetoSecurity/pareto-mac/main/README.md
- https://paretosecurity.com/mac
- https://paretosecurity.com/security-checks
- https://github.com/ParetoSecurity/pareto-mac/releases/tag/1.46.0
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/ParetoSecurity/pareto-mac/main/Pareto/Assets.xcassets/AppIcon.appiconset/icon_256x256%402x.png
  credit: Niteo and Pareto Security contributors
  license: GPL-3.0; upstream project asset, trademarks retained
---

Pareto Security checks whether the security settings macOS ships with are actually switched on. It lives in the menu bar, runs its checks regularly in the background, and shows which ones pass and which fail. Each check links to step-by-step fix instructions, and you can snooze the reminders.

There are 37 macOS checks, grouped by area:

- Access: automatic login is off, a password is asked for after inactivity, your daily account is not an administrator, and SSH keys have a passphrase.
- Updates: macOS and App Store apps update automatically, and package managers and code editor extensions wait seven days before installing new releases.
- Sharing: the firewall is on, AirDrop is limited to contacts, and Screen Sharing, File Sharing and Remote Login are off.
- System integrity: FileVault and Gatekeeper are on, Time Machine backups are encrypted, and the Mac has restarted within the past 14 days.

When a check fails, the app reminds you to deal with it. You can pick the set of checks a compliance framework such as CIS or SOC requires, or choose your own. The developer says the checks run locally on the Mac.

Version 1.46.0 needs macOS 13 or later. The DMG on GitHub holds a Universal app for Apple silicon and Intel that is Developer ID-signed and notarized. It is free under the GPL-3.0 license.

Pareto Desktop, as the company also calls the app, works on its own. Teams can link it to Pareto Cloud, a device monitoring service from Niteo, the company behind the app. According to the site, a linked app sends only the list of passed and failed checks, a device ID and name, the macOS and app versions and the time of the last check, and it opens no remote access. There are also versions for Linux and Windows.
