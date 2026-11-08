---
name: "Stringz"
summary: "An editor for the localization files in Xcode projects, showing every language side by side."
category: "Developer tools"
tags:
  - localization
  - xcode
  - translation
repository: https://github.com/heysem-useinsider/Stringz
website: https://github.com/heysem-useinsider/Stringz
license: GPL-3.0
licenseUrl: https://github.com/heysem-useinsider/Stringz/blob/main/LICENSE
download: https://github.com/heysem-useinsider/Stringz/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
maintenance: "unmaintained"
maintenanceNote: "No release since December 2022."
icon: ./assets/icon.png
sources:
  - https://github.com/heysem-useinsider/Stringz
  - https://github.com/heysem-useinsider/Stringz/blob/main/LICENSE
  - https://github.com/heysem-useinsider/Stringz/releases
  - https://formulae.brew.sh/cask/stringz
  - https://raw.githubusercontent.com/heysem-useinsider/Stringz/main/README.md
  - https://github.com/heysem-useinsider/Stringz/releases/tag/v0.7.5
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/heysem-useinsider/Stringz/main/Stringz/Assets.xcassets/AppIcon.appiconset/app_icon%40256x1.png
    credit: "Heysem Katibi and Stringz contributors"
    license: "GPL-3.0 repository asset; name and logo retained by the project"
---

Stringz edits the translations of an Xcode app in one window. You open the `.xcodeproj` file, Stringz crawls the project for localizable files and lists them in a sidebar, and each file opens as a table with one column per language.

- Plain `.strings` files, storyboards, XIBs and `Info.plist` all appear in that table, so an app's name and permission prompts can be translated next to its interface text.
- Missing translations are highlighted, and repeated values get a warning.
- You can add, change or delete strings, add a new language, and localize files that the project never set up for translation.
- Undo and redo cover your edits.

The 0.7.5 disk image holds a Universal app for Apple silicon and Intel that needs macOS 10.15 or later and is notarized. It is also available as the `stringz` Homebrew cask. That release dates from December 2022, and the repository moved from its original `mohakapt/Stringz` address, which now redirects here.

Changes save automatically as you type. Because Xcode reloads a file each time it changes on disk, autosave can be turned off in preferences, which also hold the import and export options. The repository includes the sample app the developer tested Stringz against; running Stringz on it shows how the app should normally behave before you open your own project. Projects are opened through the XcodeEditor library.
