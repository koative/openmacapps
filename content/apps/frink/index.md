---
name: "Frink"
summary: "Runs several AI coding agents in parallel and triggers multi-step workflows from schedules, webhooks or issue events."
category: "AI"
tags:
  - agents
  - automation
  - coding-agents
repository: "https://github.com/benord-labs/frink"
website: "https://frink.dev"
license: "MIT"
licenseUrl: "https://github.com/benord-labs/frink/blob/main/LICENSE"
download: "https://github.com/benord-labs/frink/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/benord-labs/frink"
  - "https://github.com/benord-labs/frink/blob/main/LICENSE"
  - "https://github.com/benord-labs/frink/releases"
  - "https://frink.dev"
assets:
  - path: ./assets/icon.png
    source: https://github.com/benord-labs/frink/blob/main/build/icon.png
    credit: Frink contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Frink is a desktop app for running several AI coding agents side by side. Each pane has its own agent, model and diff to review, and agents can work in separate git worktrees. Routines can be saved as Flows that start on a schedule, from a webhook, or from an event in a tracker such as Linear or Sentry, and finished work waits in a queue for your review. It suits developers who want routine coding tasks to run while they review the results.

The README says macOS 13 or later is supported and that the release includes Apple silicon and Intel DMGs. Flows run only while Frink is open. It needs no Frink account and uses your existing AI sign-in or an API key that is stored encrypted. Official builds send anonymous usage counts and crash reports by default, and the README links to the list of what is sent.
