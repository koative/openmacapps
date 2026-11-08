---
name: "GitHub Stars Manager"
summary: "Syncs your GitHub stars, has an AI model summarise and categorise them, and tracks their releases in one timeline."
category: "Developer tools"
tags:
  - search
  - organization
  - language-models
  - cross-platform
repository: https://github.com/AmintaCCCP/GithubStarsManager
website: https://gsm.aminta.top
license: "MIT"
licenseUrl: https://github.com/AmintaCCCP/GithubStarsManager/blob/main/LICENSE
download: https://github.com/AmintaCCCP/GithubStarsManager/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/AmintaCCCP/GithubStarsManager
  - https://github.com/AmintaCCCP/GithubStarsManager/blob/main/LICENSE
  - https://github.com/AmintaCCCP/GithubStarsManager/releases
  - https://raw.githubusercontent.com/AmintaCCCP/GithubStarsManager/main/README.md
  - https://github.com/AmintaCCCP/GithubStarsManager/releases/tag/v0.9.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/AmintaCCCP/GithubStarsManager/main/assets/icon.png
    credit: "AmintaCCCP (tamina) and GitHub Stars Manager contributors"
    license: "MIT (repository license); upstream project asset"
---

Give GitHub Stars Manager a GitHub token and it pulls in every repository you have starred, then has a language model write summaries, tags and categories for them. The analysis runs in bulk, can pause and resume, and never overwrites a category you have locked. Categories can also sync both ways with GitHub Lists.

- Vector search finds repositories by meaning and can list starred projects similar to one you pick. It relies on Cloudflare Vectorize and a small Cloudflare Worker that you deploy.
- Release tracking gathers new versions from subscribed repositories in one timeline, filters assets by platform and file type, and downloads them in one click or through aria2.
- A question panel answers focused questions about a single repository, tied to one commit and showing its sources.
- A built-in MCP server lets agents such as Claude Code and Cursor search your enriched stars.
- Forks and Gists get their own views, with upstream sync and workflow triggers for forks.

Models come from OpenAI, Anthropic, an Ollama server or any OpenAI-compatible endpoint you configure, with your own keys where the provider needs one. WebDAV backup and an HTTP or SOCKS5 proxy are in settings.

The same project also serves a web interface from source or from Docker images, with an optional backend that syncs data between devices. The macOS client ships as DMGs. The 0.9.0 Apple silicon build needs macOS 13 or later, and Gatekeeper rejects it as downloaded.
