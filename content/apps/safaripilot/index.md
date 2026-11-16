---
name: "SafariPilot"
summary: "Local MCP server that lets AI agents browse in your signed-in Safari, in background tabs, while you keep using the Mac."
category: "AI"
tags:
  - mcp
  - safari
  - agents
  - browser
  - automation
repository: "https://github.com/johnsusek/SafariPilotMCP"
website: "https://github.com/johnsusek/SafariPilotMCP"
license: "MIT"
licenseUrl: "https://github.com/johnsusek/SafariPilotMCP/blob/main/LICENSE"
download: "https://github.com/johnsusek/SafariPilotMCP/releases/latest"
homebrew: "johnsusek/tap/safaripilot"
freeDownload: true
featured: false
added: "2026-11-16"
verified: "2026-11-16"
icon: ./assets/icon.png
screenshots:
  - src: ./assets/general.webp
    alt: SafariPilot's General pane with login, menu bar and update switches above the Accessibility, Safari extension and bridge status.
    source: https://github.com/johnsusek/SafariPilotMCP/blob/2b502adf5f37ed0d47b68dd08c62717d6561ba75/docs/screenshots/general.webp
    credit: SafariPilot contributors
  - src: ./assets/clients.webp
    alt: SafariPilot's Clients pane with set-up buttons for Claude Desktop, Claude Code, ChatGPT and Codex, Cursor, VS Code and LM Studio.
    source: https://github.com/johnsusek/SafariPilotMCP/blob/2b502adf5f37ed0d47b68dd08c62717d6561ba75/docs/screenshots/clients.webp
    credit: SafariPilot contributors
sources:
  - "https://github.com/johnsusek/SafariPilotMCP"
  - "https://github.com/johnsusek/SafariPilotMCP/blob/main/LICENSE"
  - "https://github.com/johnsusek/SafariPilotMCP/releases/latest"
  - "https://github.com/johnsusek/SafariPilotMCP/releases/tag/v0.2.3"
  - "https://github.com/johnsusek/homebrew-tap/blob/main/Casks/safaripilot.rb"
assets:
  - path: ./assets/icon.png
    source: https://github.com/johnsusek/SafariPilotMCP/blob/2b502adf5f37ed0d47b68dd08c62717d6561ba75/extension/icon-512.png
    credit: SafariPilot contributors
    license: MIT; upstream app icon, trademarks retained
  - path: ./assets/general.webp
    source: https://github.com/johnsusek/SafariPilotMCP/blob/2b502adf5f37ed0d47b68dd08c62717d6561ba75/docs/screenshots/general.webp
    credit: SafariPilot contributors
    license: MIT
  - path: ./assets/clients.webp
    source: https://github.com/johnsusek/SafariPilotMCP/blob/2b502adf5f37ed0d47b68dd08c62717d6561ba75/docs/screenshots/clients.webp
    credit: SafariPilot contributors
    license: MIT
---

SafariPilot is a menu bar app with a Safari extension that gives AI agents a browser: the Safari you already use, with your logins and cookies. An MCP client such as Claude Desktop, Claude Code, ChatGPT and Codex, Cursor, VS Code or LM Studio starts its local server. The agent can then open tabs, read pages, click, type, fill forms, upload files, take screenshots and read console and network logs. Safari can stay in the background. Your cursor does not move.

Clicks go through macOS Accessibility and keys are real key presses, so pages that ignore scripted events still respond. Hover never happens. Double, right and modifier clicks and drags are synthetic events that some pages ignore.

It sets a few limits on what an agent can reach:

- each new client has to be approved before it can use Safari
- an agent sees only the tabs it opened and the popups they open
- the extension, app and agent talk over loopback with a token that changes each launch
- passwords, card numbers, tokens and cookies are left out of page reads, URLs and network logs, but not out of screenshots, JavaScript results or page fetches

Apple's own Safari MCP server opens a separate window without your logins. SafariPilot works in your signed-in session instead, so an agent can act on any site you are logged in to.

The app needs macOS 26 or later and a logged-in desktop session, and the developer has tested it only with Safari 27. Version 0.2.3 is a universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and it checks for updates itself. It also installs with Homebrew from the developer's tap.
