---
name: "Application Menu"
summary: "Lists your installed apps in a menu bar menu, so you can open one without Launchpad or Finder."
category: "Utilities"
tags:
  - launcher
  - menu-bar
repository: https://github.com/barseghyanartur/app-menu
website: https://github.com/barseghyanartur/app-menu
license: "MIT"
licenseUrl: https://github.com/barseghyanartur/app-menu/blob/main/LICENSE
download: https://github.com/barseghyanartur/app-menu/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/barseghyanartur/app-menu", "https://github.com/barseghyanartur/app-menu/blob/main/LICENSE", "https://raw.githubusercontent.com/barseghyanartur/app-menu/main/README.rst", "https://github.com/barseghyanartur/app-menu/releases", "https://github.com/barseghyanartur/app-menu/releases/tag/0.3"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/barseghyanartur/app-menu/main/ApplicationMenu/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Tabler Icons (via Application Menu)"
    license: "MIT; Tabler Icons artwork used as the Application Menu icon, as credited in the upstream README"
---

Application Menu puts your apps in a menu bar menu. Click its icon, choose an app, and it opens. Its README calls it the missing Applications menu for macOS.

Apps in the `Applications` folder inside your home folder are left out at first, because the app has no access to it. Grant access in the app's settings, then choose Refresh in the menu to add them.

The README lists macOS 13 Ventura through macOS 26 Tahoe. The 0.3 release, from June 2026, is a disk image of about 240 KB with a Universal app for Apple silicon and Intel. The recommended install is the developer's Homebrew tap. The icon comes from the MIT-licensed Tabler Icons set, and the app itself is MIT-licensed.

Earlier releases added a few options. Version 0.1.2 brought case-insensitive sorting, 0.1.4 began listing web apps created by Brave, Edge and Opera, and 0.2 added favourites.
