---
name: "JSON Model Generator"
summary: "Turns a sample JSON payload into model classes using editable templates for Swift, Kotlin, Dart, C# and Python."
category: "Developer tools"
tags:
  - code
  - developer-utilities
  - conversion
repository: https://github.com/chanonly123/Json-Model-Generator
website: https://github.com/chanonly123/Json-Model-Generator
license: "MIT"
licenseUrl: https://github.com/chanonly123/Json-Model-Generator/blob/master/LICENSE
download: https://github.com/chanonly123/Json-Model-Generator/releases
freeDownload: true
maintenance: "unmaintained"
maintenanceNote: "No release or commit since December 2021."
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/chanonly123/Json-Model-Generator
  - https://github.com/chanonly123/Json-Model-Generator/blob/master/LICENSE
  - https://github.com/chanonly123/Json-Model-Generator/releases
  - https://github.com/chanonly123/Json-Model-Generator/blob/master/README.md
  - https://github.com/chanonly123/Json-Model-Generator/releases/tag/v1.5
  - https://github.com/chanonly123/Json-Model-Generator/commits/master
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/chanonly123/Json-Model-Generator/master/JsonToModel/Assets.xcassets/AppIcon.appiconset/512.png
    credit: "Chandan Karmakar"
    license: "MIT; upstream project asset, trademarks retained"
---

JSON Model Generator reads a sample of JSON and writes model classes that match its structure. The app itself is called JsonToModel. Its output comes from templates, so one sample can become code for several languages and parsing libraries:

- Swift with Codable, ObjectMapper or Gloss;
- Java or Kotlin with GSON;
- Dart for Flutter;
- C# with Newtonsoft;
- Python dataclasses.

You can also write your own templates, for another language or for a house style the built-in ones do not match.

Version 1.5 from December 2021 is the last release, and the repository has had no commits since. The download is a ZIP holding a Universal app for Apple silicon and Intel that asks for macOS 10.13 or later. It is signed only with a development certificate and is not notarized, so macOS blocks the first launch. The README shows the Open Anyway button in security settings that lets it run.
