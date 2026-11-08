---
name: Leader Key
summary: "Runs apps, links, folders and shell commands from short nested key sequences typed after one trigger key."
category: Productivity
tags:
  - launcher
  - keyboard-shortcuts
  - automation
repository: https://github.com/mikker/LeaderKey
website: https://mikkelmalmberg.com/apps
license: MIT
licenseUrl: https://github.com/mikker/LeaderKey/blob/main/LICENSE
download: https://github.com/mikker/LeaderKey/releases
freeDownload: true
homebrew: "leader-key"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/mikker/LeaderKey", "https://github.com/mikker/LeaderKey/blob/main/LICENSE", "https://raw.githubusercontent.com/mikker/LeaderKey/main/README.md", "https://raw.githubusercontent.com/mikker/LeaderKey/main/Leader%20Key/UserConfig.swift", "https://mikkelmalmberg.com/apps", "https://github.com/mikker/LeaderKey/releases/tag/v1.17.3", "https://github.com/mikker/LeaderKey/discussions/314"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/mikker/LeaderKey/blob/16bcb307dcc5309fbc3a00fe398d913e1f7ddc51/Leader%20Key/Assets.xcassets/AppIcon.appiconset/icon_256px-128pt%402x.png
    credit: Leader Key contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Leader Key waits for one trigger key, then reads the next few keys you press as a path to an action. Press the leader, then o and m, and Messages opens. Sequences nest into groups, so you can file shortcuts under letters that are easy to remember.

Each entry opens an app, a URL or a folder, or runs a shell command. You build the tree in the Config settings, and it is saved as config.json, which you can also edit by hand. Any key or combination works as the leader, such as F12 or Command-Space. A modifier key on its own does not.

Other tools can drive it through a leaderkey:// URL scheme. They can reload the config, show or hide the window, or walk a key path with or without running the action at the end. Shell commands run in a non-interactive shell, so your PATH has to be exported in ~/.zshenv for zsh or ~/.bash_profile for bash.

Version 1.17.3 is a universal app for macOS 13 or later, signed with a Developer ID and notarized, and it comes as a ZIP. Its developer now works mainly on Tuna, a separate launcher with Leader Key built in. He says Leader Key itself will stay free and open source.
