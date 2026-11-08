---
name: "Lepton"
summary: "A snippet manager that stores and organizes your code snippets as GitHub Gists."
category: "Developer tools"
tags:
  - snippets
  - github
  - cross-platform
repository: https://github.com/hackjutsu/Lepton
website: https://hackjutsu.com/Lepton
license: MIT
licenseUrl: https://github.com/hackjutsu/Lepton/blob/master/LICENSE
download: https://github.com/hackjutsu/Lepton/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/hackjutsu/Lepton
  - https://github.com/hackjutsu/Lepton/blob/master/LICENSE
  - https://github.com/hackjutsu/Lepton/releases
  - https://hackjutsu.com/Lepton
  - https://raw.githubusercontent.com/hackjutsu/Lepton/master/README.md
  - https://github.com/hackjutsu/Lepton/blob/master/wiki/faq.md
  - https://github.com/hackjutsu/Lepton/releases/tag/v2.0.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/hackjutsu/Lepton/master/build/icon.icns
    credit: "hackjutsu (CosmoX) and Lepton contributors"
    license: "MIT repository asset; name and logo retained by the project"
---

Lepton keeps your code snippets as GitHub gists, or as GitLab personal snippets, and gives them a desktop editor. Sign in to GitHub with OAuth or a personal access token, and your gists appear grouped by language and by tags. A title and tags go in the gist description, written as `[title] description #tag1 #tag2`.

- Snippets can be public or secret, with no limit on their number or on tags.
- Markdown and Jupyter notebook snippets are rendered.
- Shift-Space opens search across file names, languages and other fields.
- GitHub Enterprise and self-managed GitLab work, and a proxy can be set.

Searching inside the code of every snippet needs the `snippet.downloadAll` option turned on before syncing. Without it, content search covers only snippets already downloaded, such as those you opened in the session.

Lepton is an Electron app with no backend of its own. It talks to GitHub Gist directly, and the developer says it collects no user or usage data. Version 2.0.0 comes as separate DMG and ZIP downloads for Apple silicon and Intel, and the Apple silicon build requires macOS 12; Homebrew installs it as the `lepton` cask.

Settings live in a `.leptonrc` file in your home folder. It picks the theme, from Dracula and Solarized to Catppuccin, along with editor options, shortcuts and one of eight interface languages. The dashboard and an immersive mode toggle with Command-D and Command-I.
