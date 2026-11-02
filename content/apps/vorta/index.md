---
name: "Vorta"
summary: "A desktop backup app for BorgBackup with encrypted, deduplicated archives, schedules and file restore."
category: "Utilities"
tags:
  - backup
  - encryption
  - storage
  - cross-platform
repository: https://github.com/borgbase/vorta
website: https://vorta.borgbase.com
license: "GPL-3.0"
licenseUrl: https://github.com/borgbase/vorta/blob/master/LICENSE.txt
download: https://vorta.borgbase.com/install/macos/
homebrew: "vorta"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/borgbase/vorta
  - https://github.com/borgbase/vorta/blob/master/LICENSE.txt
  - https://vorta.borgbase.com/install/macos/
  - https://github.com/borgbase/vorta/releases
  - https://github.com/borgbase/vorta/blob/master/.github/workflows/build-macos.yml
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/borgbase/vorta/master/package/icon.icns
    credit: "Vorta contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Vorta is a graphical front end for BorgBackup. You set up profiles that pair source folders with a Borg repository and a schedule, and it runs encrypted, compressed and deduplicated backups in the background from the menu bar. Past archives can be browsed, compared and pruned, and single files restored.

A repository can live on a local or external drive, on any server you can reach over SSH, or on BorgBase, a paid Borg hosting service from the same team. The macOS downloads come as separate Apple silicon and Intel disk images that include Borg; the project notes the direct download usually works only on the latest macOS. Mounting an archive as a drive needs macFUSE installed separately.
