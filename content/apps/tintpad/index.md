---
name: "Tintpad"
summary: "Opens your terminal at a repository you pick from the notch, with a coding agent such as Claude Code already running."
category: "AI"
tags: ["notch", "terminal", "coding-agents", "keyboard-shortcuts"]
repository: "https://github.com/sorkila/tintpad"
website: "https://tintpad.com"
license: "MIT"
licenseUrl: "https://github.com/sorkila/tintpad/blob/main/LICENSE"
download: "https://github.com/sorkila/tintpad/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/sorkila/tintpad", "https://github.com/sorkila/tintpad/blob/main/LICENSE", "https://github.com/sorkila/tintpad/releases", "https://raw.githubusercontent.com/sorkila/tintpad/main/README.md", "https://tintpad.com", "https://github.com/sorkila/tintpad/releases/tag/v0.4.4"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/sorkila/tintpad/main/Sources/Tintpad/Resources/appicon.png", "credit": "Erik Nielsen (Sörkila)", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Press Option-Command-Space anywhere and Tintpad drops a black panel out of the MacBook notch, listing your repositories. Type a few letters, press Return, and your own terminal opens at that repository with Claude Code, Codex or another agent CLI already running. On a Mac without a notch, the panel hangs below the menu bar.

Two chips in the panel show which agent and which permission mode Return will launch. Tab cycles the agent and Shift-Tab the mode. A mode that skips the agent's permission checks turns red and can ask for confirmation before it runs.

- Repositories you open often move to the top, and each remembers the agent and mode you used last.
- Control-W creates a fresh worktree with an agent inside, and Control-Return runs an agent in the background with an alert when it finishes.
- Any agent with a command line can be added as a one-line template, such as `claude {mode} {prompt}`.
- A prompt library, per-repository presets, GitHub import and Command-Return to open the repository in your editor round out the panel.

It works with Ghostty, iTerm2, kitty, WezTerm, Alacritty, Terminal and Warp, and which macOS permission it asks for depends on your terminal. Ghostty needs Accessibility, because Tintpad types the command into it. Terminal and iTerm2 are driven through AppleScript and need Automation, and kitty, Alacritty and WezTerm need neither. Warp opens at the repository with the command left on your clipboard.

You install the agent CLIs yourself. Tintpad needs macOS 14 or later, and the 0.4.4 app is built for Apple silicon only, signed with a Developer ID and notarized. It has no account and no paid version, and the developer says nothing leaves your Mac.
