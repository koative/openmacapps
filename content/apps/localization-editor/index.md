---
name: Localization Editor
summary: Shows every language of an iOS or macOS project's Localizable.strings side by side and flags missing translations.
category: Developer tools
tags:
- localization
- xcode
- editor
repository: https://github.com/igorkulman/iOSLocalizationEditor
website: https://github.com/igorkulman/iOSLocalizationEditor
license: MIT
licenseUrl: https://github.com/igorkulman/iOSLocalizationEditor/blob/master/LICENSE
download: https://github.com/igorkulman/iOSLocalizationEditor/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release since December 2023."
icon: ./assets/icon.png
sources:
- https://github.com/igorkulman/iOSLocalizationEditor
- https://github.com/igorkulman/iOSLocalizationEditor/blob/master/LICENSE
- https://github.com/igorkulman/iOSLocalizationEditor/releases
- https://github.com/igorkulman/iOSLocalizationEditor/releases/tag/v2.9.2
- https://github.com/igorkulman/iOSLocalizationEditor/blob/master/sources/LocalizationEditor/Providers/LocalizationProvider.swift
- https://github.com/igorkulman/iOSLocalizationEditor/blob/master/sources/LocalizationEditor/Providers/LocalizationsDataSource.swift
- https://github.com/igorkulman/iOSLocalizationEditor/blob/master/sources/LocalizationEditor/UI/WindowController.swift
- https://github.com/Homebrew/homebrew-cask/blob/main/Casks/l/localizationeditor.rb
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/igorkulman/iOSLocalizationEditor/master/sources/LocalizationEditor/Assets.xcassets/AppIcon.appiconset/icon_512x512%401x.png
  credit: Sergey Kushner for Localization Editor
  license: MIT-licensed repository asset; icon credited to Sergey Kushner in the README
---

Pick a folder from the File menu, and Localization Editor collects the .strings files under it into one table. Each language from an .lproj folder becomes a column, each key a row, so an untranslated string shows up as an empty cell. When you type in a cell, the app saves the change into that language's file.

You can open the root of an Xcode project instead of the localization folder, at the cost of a slower scan. The app ignores Pods, Carthage, build and framework folders. If the project has several strings tables, a toolbar menu switches between them.

Around the table:

- a Missing filter that keeps only keys lacking a translation in at least one language
- a search field that matches both keys and translated text
- a sheet for adding a key with an optional comment
- deletion of a key from every language at once
- Tab and Shift-Tab to step between translations

It reads only .strings files, so the newer .xcstrings String Catalogs from Xcode are out of reach.

Version 2.9.2 from December 2023 is the latest release. It runs on Intel and Apple silicon Macs with macOS 10.14.6 or later. The zip is signed only with a development certificate and is not notarized, so double-clicking the app the first time brings up a Gatekeeper warning instead of opening it. For the same reason Homebrew disabled the localizationeditor cask in September 2026, and the brew command in the README no longer installs it.
