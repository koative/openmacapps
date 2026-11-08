---
name: LiveWallpaper
summary: Loops your own MP4 or MOV videos as an animated desktop wallpaper, with separate settings for each display.
category: Utilities
tags:
- wallpaper
- desktop
- video
- customization
alternativeTo:
- wallpaper-engine
repository: https://github.com/thusvill/LiveWallpaperMacOS
website: https://thusvill.github.io/LiveWallpaperMacOS/
license: GPL-3.0-or-later
licenseUrl: https://github.com/thusvill/LiveWallpaperMacOS/blob/SwiftUI/LICENSE
download: https://github.com/thusvill/LiveWallpaperMacOS/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/thusvill/LiveWallpaperMacOS
- https://github.com/thusvill/LiveWallpaperMacOS/blob/SwiftUI/LICENSE
- https://github.com/thusvill/LiveWallpaperMacOS/releases
- https://raw.githubusercontent.com/thusvill/LiveWallpaperMacOS/SwiftUI/README.md
- https://thusvill.github.io/LiveWallpaperMacOS/
- https://github.com/thusvill/LiveWallpaperMacOS/releases/tag/V2.3
- https://github.com/thusvill/LiveWallpaperMacOS/releases/tag/V2.2
- https://github.com/thusvill/LiveWallpaperMacOS/releases/tag/V2.1
- https://github.com/thusvill/LiveWallpaperMacOS/releases/tag/V2.0
- https://github.com/thusvill/LiveWallpaperMacOS/issues/62
- https://www.wallpaperengine.io/en
assets:
- path: ./assets/icon.png
  source: https://github.com/thusvill/LiveWallpaperMacOS/releases/download/V2.3/LiveWallpaper.dmg
  credit: Bios thusvill
  license: Official app icon extracted unmodified from the V2.3 release; name and icon retained by the author
---

LiveWallpaper plays a video file as your desktop background, behind your windows. Click the Open in Finder button in the app, drop MP4 or MOV clips into the folder it opens, then choose one. A file name can contain only one dot, the one before the extension.

- Each display keeps its own wallpaper configuration.
- Videos can fill, fit or stretch the screen, at resolutions up to 4K.
- Volume is set per wallpaper, and you can mute it completely.
- A random wallpaper can be chosen at startup or when you unlock the screen, and a rotation setting cycles through your wallpapers.
- A vignette effect can be switched on or off.

Playback pauses while the screen is locked. The lock screen shows a still image, because LiveWallpaper does not play video there. The developer says the app uses under 20 MB of memory and about 1% of the CPU.

The current release, V2.3, requires macOS 14.6 or later. Its DMG on GitHub holds a Universal app for Apple silicon and Intel, and the developer's Homebrew tap also installs LiveWallpaper as a cask. The V2.3 app is not notarized, so the README tells you to remove the quarantine attribute with `xattr` before the first launch.

Wallpaper Engine is a paid Windows app that animates your own images as well as videos and web pages, and it draws on hundreds of thousands of shared wallpapers from the Steam Workshop. LiveWallpaper plays only the video files you give it, on the Mac.
