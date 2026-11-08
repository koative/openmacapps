---
name: "Qingjian"
summary: "A Chinese pinyin input method that shows a translation in the language you are learning beside each candidate."
category: "Education"
tags:
  - input
  - languages
  - translation
  - learning
repository: https://github.com/qingjian-team/qingjian
website: https://qingjian.app
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/qingjian-team/qingjian/blob/main/LICENSE
download: https://qingjian.app/download
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/qingjian-team/qingjian
  - https://github.com/qingjian-team/qingjian/blob/main/LICENSE
  - https://qingjian.app/download
  - https://github.com/qingjian-team/qingjian/releases
  - https://qingjian.app
  - https://raw.githubusercontent.com/qingjian-team/qingjian/main/README.md
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/qingjian-team/qingjian/main/assets/icon/logo.png
    credit: "Qingjian team"
    license: "Qingjian name and logo are reserved by the project and not covered by the GPL-3.0-or-later code license"
---

Qingjian (青简) turns pinyin into Chinese characters, and next to each candidate it prints a short translation in a language you are learning. Type kaifa and the list shows 开发 with "v. develop" beside it, in a smaller, lighter line.

The input side comes first. Qingjian handles whole sentences, initials-only abbreviations, typo correction, fuzzy pinyin, shuangpin and wubi, and it learns from the words and sequences you pick. You choose the study language under General in its settings: English, Japanese, Spanish, Vietnamese or German, one at a time, or none. Translations you have seen only a few times appear in orange and turn grey once they are familiar. A Statistics page counts how much you typed today, over seven days and in total, and keeps a record of vocabulary.

The project says conversion, dictionary lookups and habit learning happen on the Mac, and that the statistics are not uploaded. Qingjian needs no account. Cloud suggestions are off by default; turned on, they send the current input and nearby text straight to an AI provider you set up yourself. The update check and the input log can both be switched off.

The macOS build is still a beta. It needs macOS 13 or later, and the download page offers separate packages for Apple silicon and Intel, each close to 100 MB. They carry no Apple developer signature, so the first launch has to be allowed in Privacy & Security. Versions for Windows, Linux and Android come from the same Rust core. The code is GPL-3.0-or-later; the name and logo are not covered by it.
