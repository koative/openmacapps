---
name: "DatWeatherDoe"
summary: "Current weather for your location or chosen coordinates, shown in the menu bar."
category: "Utilities"
tags:
  - weather
  - menu-bar
repository: "https://github.com/inderdhir/DatWeatherDoe"
website: "https://github.com/inderdhir/DatWeatherDoe"
license: "Apache-2.0"
licenseUrl: "https://github.com/inderdhir/DatWeatherDoe/blob/main/LICENSE"
download: "https://github.com/inderdhir/DatWeatherDoe/releases"
freeDownload: true
homebrew: "datweatherdoe"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/inderdhir/DatWeatherDoe"
  - "https://github.com/inderdhir/DatWeatherDoe/blob/main/LICENSE"
  - "https://github.com/inderdhir/DatWeatherDoe/releases"
  - "https://raw.githubusercontent.com/inderdhir/DatWeatherDoe/main/README.md"
  - "https://github.com/inderdhir/DatWeatherDoe/releases/tag/5.6.2"
  - "https://github.com/inderdhir/DatWeatherDoe/releases/tag/5.6.0"
  - "https://github.com/inderdhir/DatWeatherDoe/releases/tag/5.4.0"
  - "https://github.com/inderdhir/DatWeatherDoe/releases/tag/5.2.0"
  - "https://raw.githubusercontent.com/inderdhir/DatWeatherDoe/main/screenshot_2.png"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/inderdhir/DatWeatherDoe/main/DatWeatherDoe/Resources/Assets.xcassets/AppIcon.appiconset/256.png"
    credit: "Inder Dhir and DatWeatherDoe contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

DatWeatherDoe shows the current weather in the macOS menu bar, so you can check the temperature and conditions without opening an app or a browser. It finds your position through Location Services, or you can enter a latitude and longitude, which is useful when you want the weather for a fixed place rather than wherever the Mac is.

You set how often it polls for new data, and it supports dark mode. Clicking the menu bar item shows the day's high and low, sunrise and sunset and the wind, and settings switch units or add humidity and condition text beside the temperature. Version 5.2.0 added UV index and air quality readings.

If you use your location, macOS has to give the app permission under Privacy settings for Location Services. Version 5.6.0 added retries for location lookups and fixed manual locations not being set, after 5.4.0 fixed latitude and longitude not saving.

DatWeatherDoe requires macOS 13 or later. The 5.6.2 release is a disk image containing a universal app for Apple silicon and Intel, Developer ID-signed and notarized. It is also available as the `datweatherdoe` Homebrew cask.

Weather data comes from WeatherAPI. The developer moved the app there when OpenWeatherMap ended support for its 2.5 API in June 2024. If you build it from source, you need your own WeatherAPI key in the project's `Config.xcconfig` file.
