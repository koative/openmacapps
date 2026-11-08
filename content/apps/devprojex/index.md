---
name: "DevProjex"
summary: "Select files from a project tree and export clean, redacted context for AI chats and coding agents."
category: "Developer tools"
tags:
  - language-models
  - coding-agents
  - privacy
  - cross-platform
repository: "https://github.com/Avazbek22/DevProjex"
website: "https://github.com/Avazbek22/DevProjex"
license: "Apache-2.0"
licenseUrl: "https://github.com/Avazbek22/DevProjex/blob/master/LICENSE"
download: "https://github.com/Avazbek22/DevProjex/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/Avazbek22/DevProjex"
  - "https://github.com/Avazbek22/DevProjex/blob/master/LICENSE"
  - "https://github.com/Avazbek22/DevProjex/releases"
  - "https://github.com/Avazbek22/DevProjex/blob/master/README.md"
  - "https://github.com/Avazbek22/DevProjex/blob/master/Docs/Installation.md"
  - "https://github.com/Avazbek22/DevProjex/releases/tag/v5.2"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/Avazbek22/DevProjex/master/Assets/AppIcon/MacOS/AppIconSet/256.png"
    credit: "Avazbek22 and DevProjex contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

DevProjex turns a folder or Git repository into text you can hand to a language model. You tick files and folders in a tree, watch a live preview with line, character and token counts, and copy the result or export it as ASCII, Markdown, JSON or XML. It can also write a separate copy of the selected files to a folder or ZIP archive.

- Hide Secrets masks API keys, tokens and connection strings in place with a placeholder, so the surrounding code stays readable. It uses a pinned Gitleaks rule set, and you can exclude a false positive from the preview.
- Hide private data, off by default, masks emails, IP and MAC addresses, phone numbers and user paths.
- Code compression trims code in 14 languages with Tree-sitter grammars and leaves a file whole when it cannot process it safely.
- Saved profiles keep filters and masking settings per project.

The same engine powers a terminal workspace, a CLI for scripts and CI, and a read-only MCP server for clients such as Claude Code, Codex and Cursor. In MCP mode secret masking cannot be switched off, and in Live Context mode the files you tick in the desktop app become the agent's focus. A local journal records each agent session's calls, paths and token totals, without file contents. The developer says the app does not upload project contents or collect telemetry, and warns that secret detection is heuristic, so a pack should be reviewed before it goes outside your environment.

The desktop app needs macOS 14 or newer and comes as separate Apple silicon and Intel app archives. The project says the bundle is unsigned and not notarized, so the first launch has to be allowed under Privacy & Security.
