---
name: "App Reviews"
summary: "Menu bar app that alerts you when new App Store reviews arrive for your iPhone apps."
category: "Developer tools"
tags:
  - menu-bar
  - developer-utilities
  - notifications
maintenance: unmaintained
maintenanceNote: "No commits since January 2016 and no release since June 2015, as of 2026-11-06."
repository: "https://github.com/knutigro/AppReviews"
website: "https://knutigro.github.io/apps/app-reviews/"
license: "GPL-3.0"
licenseUrl: "https://github.com/knutigro/AppReviews/blob/develop/LICENSE"
download: "https://github.com/knutigro/AppReviews/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/knutigro/AppReviews"
  - "https://github.com/knutigro/AppReviews/blob/develop/LICENSE"
  - "https://github.com/knutigro/AppReviews/releases/latest"
  - "https://knutigro.github.io/apps/app-reviews/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/knutigro/AppReviews/releases/download/0.0.32/App_Reviews.zip"
    credit: "Knut Inge Grosland (App Reviews)"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

App Reviews runs in the status bar and notifies you when new user reviews arrive for your iPhone apps, so you can follow reviews without opening App Store Connect each time. It is aimed at developers who publish iPhone apps and want quick notice of new feedback.

The latest release, 0.0.32 from June 2015, is a Mac app that declares OS X 10.10 or later. Gatekeeper reports its Developer ID signature but does not report it as notarized, so macOS may need the first launch allowed in System Settings. The repository has had no commits since January 2016, and its source tree still includes the Crashlytics and Fabric frameworks. Expect no updates.
