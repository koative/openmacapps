---
name: "App Monitor"
summary: "Local dashboard for app usage, storage, updates, health warnings and uninstall impact, with reversible quarantine-first cleanup."
category: "Utilities"
tags:
  - usage-tracking
  - disk-usage
  - cleanup
repository: "https://github.com/jcranokc/app-monitor"
website: "https://github.com/jcranokc/app-monitor"
license: "MIT"
licenseUrl: "https://github.com/jcranokc/app-monitor/blob/main/LICENSE"
download: "https://github.com/jcranokc/app-monitor/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/jcranokc/app-monitor"
  - "https://github.com/jcranokc/app-monitor/blob/main/LICENSE"
  - "https://github.com/jcranokc/app-monitor/releases/tag/v1.2.0-beta.5"
---

App Monitor puts several app-related views in one SwiftUI dashboard. It tracks foreground app usage over time, scans each app's bundle and its support, cache, preference and container folders, flags health issues such as signing and Gatekeeper problems, and checks for updates across the Mac App Store, Homebrew, Sparkle feeds and Apple software update. Its uninstall planner lists the files an app leaves behind before moving the selected ones to the Trash. Cleanup candidates go to an app quarantine first, where you can restore them from History.

It suits people who want to see which apps they still use, what each one takes up, and what is left after an uninstall. The data stays in a local SQLite database, and the README states that there are no telemetry or accounts. Optional update checks do contact third-party update sources, or run local tools such as Homebrew, mas and softwareupdate.

The app needs macOS 14 or later. This release is a beta (v1.2.0-beta.5), and the README recommends reviewing cleanup and uninstall plans before applying them, especially for containers, preferences and Application Support data. The README does not say the release is notarized, and this could not be confirmed, so if macOS blocks the first launch, allow it under System Settings, Privacy & Security.
