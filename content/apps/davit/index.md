---
name: Davit
summary: 'A desktop app for Apple''s container platform: run, inspect and build Linux containers, images, volumes and networks.'
category: Developer tools
tags:
- containers
- docker
- menu-bar
repository: https://github.com/wouterdebie/davit
website: https://github.com/wouterdebie/davit
license: MIT
licenseUrl: https://github.com/wouterdebie/davit/blob/main/LICENSE
download: https://github.com/wouterdebie/davit/releases
freeDownload: true
homebrew: "davit"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/wouterdebie/davit
- https://github.com/wouterdebie/davit/blob/main/LICENSE
- https://github.com/wouterdebie/davit/releases
- https://raw.githubusercontent.com/wouterdebie/davit/main/README.md
- https://github.com/wouterdebie/davit/releases/tag/v0.1.39
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/wouterdebie/davit/main/icon/icon_1024.png
  credit: Wouter de Bie
  license: MIT-licensed repository asset; no separate icon terms stated
---

Davit gives Apple's open-source container tool, which runs each Linux container in its own lightweight virtual machine, a window and a menu bar extra. You pull an image, start a container with ports, environment variables and mounts, and then watch its logs, CPU and memory from the same window instead of typing `container` commands.

- Each container has tabs for an overview, streaming logs, live charts, raw JSON and a file browser that can upload and download files.
- Edit & Recreate opens the run form filled in with a container's settings and replaces it, since containers on this platform cannot be changed in place.
- Images can be built from a Dockerfile for arm64 or amd64, and a Compose file can be previewed and then started as a stack.
- Registry sign-in covers Docker Hub, ghcr.io and other registries, and Docker credential helpers are used when configured.
- Command-K opens a search across containers, images, volumes, networks and machines.

If Apple's platform is missing, Davit offers to download Apple's signed installer and set it up in its own folder without an administrator password. The app talks to the platform's services directly over XPC rather than calling the CLI, and the same binary works as a command-line tool with `run`, `compose`, `build` and `exec` subcommands.

Davit needs an Apple silicon Mac with macOS 15 or later; the project recommends macOS 26. The DMG for version 0.1.39 is arm64-only and is Developer ID-signed and notarized. It is also in the developer's Homebrew tap.
