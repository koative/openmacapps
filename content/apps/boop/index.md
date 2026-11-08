---
name: "Boop"
summary: "A scratchpad for developers that transforms pasted text with built-in and custom JavaScript scripts."
category: "Developer tools"
tags:
  - developer-utilities
  - scripting
  - converters
  - formatters
repository: https://github.com/IvanMathy/Boop
website: https://boop.okat.best/
license: "MIT"
licenseUrl: https://github.com/IvanMathy/Boop/blob/main/LICENSE
download: https://github.com/IvanMathy/Boop/releases
freeDownload: true
homebrew: "boop"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/IvanMathy/Boop
  - https://github.com/IvanMathy/Boop/blob/main/LICENSE
  - https://github.com/IvanMathy/Boop/releases
  - https://apps.apple.com/us/app/boop/id1518425043
  - https://github.com/IvanMathy/Boop/blob/main/README.md
  - https://github.com/IvanMathy/Boop/blob/main/Boop/Documentation/Readme.md
  - https://github.com/IvanMathy/Boop/blob/main/Boop/Documentation/CustomScripts.md
  - https://github.com/IvanMathy/Boop/tree/main/Boop/Boop/scripts
  - https://github.com/IvanMathy/Boop/releases/tag/1.4.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/IvanMathy/Boop/main/Boop/Boop/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Ivan Mathy"
    license: "MIT; upstream app icon, trademarks retained"
---

Boop gives you an empty text window to paste something into, then runs a script over it. Press Command-B to open the script picker, type a few letters and press Return. The script rewrites the text in place, or only the selection if you made one, and Shift-Command-B runs it again.

The built-in scripts cover small developer chores:

- formatting JSON, CSS, SQL and XML
- encoding and decoding Base64 and HTML entities
- changing case, for example to camelCase or lowercase
- counting characters, words and lines
- converting dates to timestamps and numbers between hex, decimal and binary

Searching for `*` in the picker lists every script. Boop has no Open or Save command. Text comes in by pasting and leaves by copying, and Command-N clears the window.

You can write your own scripts. Each one is a JavaScript file that starts with a JSON comment giving its name, description, icon and search tags, followed by a `main()` function that reads and replaces the editor text. Set a scripts folder in Preferences, and press Shift-Command-R to reload them while you work. The repository's Scripts folder collects more from other users.

The developer says the only network request is a check for a new version. Release 1.4.0, the latest, is a ZIP with a notarized Universal app for Apple silicon and Intel that runs on macOS 10.14 or later. The same app is on the Mac App Store.
