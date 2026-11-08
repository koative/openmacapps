---
name: "Agent Teams AI"
summary: "Runs teams of AI coding agents on a kanban board, where they message each other and review each other's work."
category: "AI"
tags: ["coding-agents", "kanban", "cross-platform"]
repository: "https://github.com/777genius/agent-teams-ai"
website: "https://agentteams.live"
license: "AGPL-3.0"
licenseUrl: "https://github.com/777genius/agent-teams-ai/blob/main/LICENSE"
download: "https://github.com/777genius/agent-teams-ai/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/777genius/agent-teams-ai", "https://github.com/777genius/agent-teams-ai/blob/main/LICENSE", "https://raw.githubusercontent.com/777genius/agent-teams-ai/main/README.md", "https://github.com/777genius/agent-teams-ai/releases", "https://github.com/777genius/agent-teams-ai/releases/tag/v2.18.6", "https://agentteams.live"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/777genius/agent-teams-ai/main/resources/icons/png/256x256.png", "credit": "777genius and Agent Teams AI contributors", "license": "AGPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

Agent Teams AI puts several coding agents to work on one project and shows their progress on a kanban board. You pick a project, define the roles and write a provisioning prompt; the agents then create tasks, work through them and review each other's results.

- Agents send each other direct messages, comment on tasks and can talk across teams.
- Tasks that change code get a diff view where you accept, reject or comment on each hunk.
- You can let agents run on their own or approve supported tool actions one at a time.
- Each teammate can work in the main checkout or in its own git worktree, chosen at launch.
- Token use is broken down by team, agent, task and model, with optional monthly budgets.

The app detects installed Claude Code, Codex and OpenCode runtimes. Cursor, GitHub Copilot, Kiro and other providers connect from the interface with subscriptions or API keys you already have. There is also a free model that needs no sign-up or key.

The developer says the app does not upload your code to its own servers. The agent runtimes you launch still talk to their own providers.

Releases include separate macOS disk images for Apple silicon and Intel, each close to 400 MB. Pull requests are accepted under a contributor agreement that lets the owner also license that code commercially; the public code stays under the AGPL.
