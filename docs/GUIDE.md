<div align="center">

<img src="assets/icon.png" alt="Saycode" width="90" />

# Saycode Desktop User Guide

**From first launch to running a whole agent fleet — just follow along.**

**English** | [한국어](GUIDE.ko.md)

</div>

---

## Contents

1. [Install & first run](#1-install--first-run)
2. [Register machines — where your agents work](#2-register-machines--where-your-agents-work)
3. [Create a project](#3-create-a-project)
4. [Your first session](#4-your-first-session)
5. [Save tokens with auto model routing](#5-save-tokens-with-auto-model-routing)
6. [Live preview](#6-live-preview)
7. [Terminal, splits & shortcuts](#7-terminal-splits--shortcuts)
8. [The Agent Board — command your fleet](#8-the-agent-board--command-your-fleet)
9. [Finish work — review & Commit & PR](#9-finish-work--review--commit--pr)
10. [Deploy & share](#10-deploy--share)
11. [Full-text conversation search](#11-full-text-conversation-search)
12. [Notification center](#12-notification-center)
13. [AI usage dashboard](#13-ai-usage-dashboard)
14. [Planning docs, voice input, attachments & viewer](#14-planning-docs-voice-input-attachments--viewer)
15. [Tips & troubleshooting](#15-tips--troubleshooting)

---

## 1. Install & first run

**[Download the latest DMG](https://github.com/buzzni/saycode-desktop-releases/releases/latest)**,
open it, and drag **Saycode** into Applications. The app is signed, notarized, and
updates itself.

On first launch you pick a **language** (한국어 / English / 中文 / 日本語):

<img src="assets/language-select.png" alt="First-run language selection" width="820" />

Then choose how to start:

<img src="assets/login-options.png" alt="Login screen — Login, Demo workspace, Local-only mode (Standalone)" width="820" />

| Option | Best for |
|---|---|
| **Login** | Teams with a saycode.ai account — org workspaces, shared machines, deploys |
| **Demo workspace** | Instant tour with curated fake data, no account needed |
| **Local-only mode (Standalone)** | One click boots an embedded server; nothing leaves your Mac |

Here is the real flow — language, login screen, standalone boot, and the first-run
checklist:

<img src="assets/first-run-onboarding.gif" alt="First run: language selection, login screen, standalone boot, onboarding checklist" width="920" />

### The first-run checklist

Once you're in the workspace, a **"Let's get your first task ready"** checklist verifies
everything you need:

<img src="assets/onboarding-checklist.png" alt="First-run onboarding checklist" width="820" />

- **Embedded server and local machine** — automatic in standalone mode
- **Add a remote machine** *(optional)* — for running tasks on other computers
- **Sign in to Claude Code / Codex** — auto-detected as **Ready** if you're already signed in
- **Start your first session** — one button to your first task

Reopen it any time via **Settings → Machines → Resume getting started**.

---

## 2. Register machines — where your agents work

Saycode agents read and write code **on machines you register** — a laptop, GPU box,
build server, or cloud VM.

1. Open **Settings → Machines → Register machine**
2. Click **Generate code** to get a one-line registration command
3. Run it on the target machine — seconds later it shows up **online**

<img src="assets/register-machine.gif" alt="Registering a machine from Settings → Machines" width="920" />

<img src="assets/register-machine-code.png" alt="Generated one-line registration command (secret redacted)" width="920" />

In standalone mode you can skip all of this — the app registers your Mac automatically.
Add remote machines later with `happy auth login --server <URL>` as the checklist shows.

---

## 3. Create a project

Hit **New project** in the sidebar. Four ways to start:

| Tab | What it does |
|---|---|
| **Blank** | Start empty |
| **Git** | Clone a repository — connect GitHub/GitLab and pick from a list |
| **Zip / file import** | Start from an archive or a set of files |
| **Folder** | Attach a folder that already exists on the machine |

On the **Git** tab, **Connect GitHub / Connect GitLab** lets you authenticate in the
browser and pick any of your repositories (private ones included):

<img src="assets/new-project-git-tab.png" alt="New project Git tab — connect GitHub/GitLab and pick a repository" width="820" />

Pick a machine, name the project, **Create project** — done.

<img src="assets/new-project.gif" alt="New project flow" width="920" />

---

## 4. Your first session

Open the project and click **New session**:

<img src="assets/new-session-draft.png" alt="New session screen — agent picker, model, worktree, suggestion cards" width="920" />

What you choose here:

- **Agent** — Claude (Anthropic) / Codex (OpenAI) / opencode. Your last choice is remembered
- **MODEL** — leave it on **Default**: the right model is picked per request ([chapter 5](#5-save-tokens-with-auto-model-routing))
- **Worktree** — turn it on for experiments; the session gets its own isolated git worktree

Not sure what to ask? Use a **suggestion card** (Understand the project / Review code /
Polish the UI / Tidy the docs) — or just type what you want, in plain language.

Send it, and the agent narrates everything — file edits, terminal commands, test runs —
as **streaming cards**. The session even titles itself:

<img src="assets/first-session-done.png" alt="A completed first session — tool cards, agent replies, auto-route badge" width="920" />

When the run finishes you get a **Response complete** marker, a
[notification](#12-notification-center), a Dock badge, and a mobile push if you use the
companion app.

> 💬 You can queue your next instruction while the agent is still responding — waiting
> sessions accept input immediately.

---

## 5. Save tokens with auto model routing

Saycode's quietest feature is the one that pays for itself. Leave the model on
**Default**, and every request is classified by difficulty and routed to the
**cheapest model that can do the job**:

| Difficulty | Claude sessions | Codex sessions | Saved vs top tier |
|---|---|---|---|
| Trivial (typos, labels) | Haiku 4.5 · low | GPT-5.6 Luna · low | **~90%** |
| Routine (features, fixes) | Sonnet 5 · medium | GPT-5.6 Terra · medium | **~80%** |
| Hard (refactors, perf, debugging) | Opus 4.8 · high | GPT-5.6 Sol · high | **~50%** |
| Stuck (escalated) | Fable 5 · xhigh | GPT-5.6 Sol · xhigh | — |

<img src="assets/auto-model-routing.gif" alt="An easy request routes to Haiku (~90% saved), a hard one to Opus (~50% saved)" width="920" />

Worth knowing:

- **Every turn gets a transparency badge** — *"⚡ Auto · Sonnet 5 · medium · ~80%
  saved"* — so you always see which model ran and why. When the lightweight local
  classifier had to make the call, the badge says so
- **The top tier is reserved for stuck sessions** — repeated failures ("still broken",
  the same error again) escalate to the most powerful model with an explicit *"promoted
  because the session is stuck"* badge. Expensive turns always come with a reason
- **Within a session, routing only goes up** — never down mid-conversation, to protect
  the prompt cache. It resets after an hour of idle time
- **Savings are totaled** — next to the composer (*"⚡ Auto 12 turns · avg ~72%
  saved"*) and on the [Agent Board](#8-the-agent-board--command-your-fleet) savings
  widget with **daily / weekly / monthly** views
- **Want manual control?** Pick any model from the dropdown and that session is pinned

<img src="assets/auto-route-badges.png" alt="Per-turn auto-route badges and cumulative savings" width="920" />

---

## 6. Live preview

Click **Run preview** and your app opens in a sidecar panel — not a mock, the real dev
server running on the project's machine. Chat on the left, click around on the right.
When the agent changes code, you see it immediately.

<img src="assets/live-preview.gif" alt="Live preview sidecar next to the chat" width="920" />

Preview runtimes are isolated per chat worktree, so parallel sessions on the same
project never trample each other's preview.

---

## 7. Terminal, splits & shortcuts

**Terminal** — dock a real shell under the chat (terminal button or ⌘⌥⇧T). It's an
end-to-end encrypted session on the registered machine — run builds and tail logs while
the agent keeps working above. Terminals survive tab switches and reconnect on their own.

<img src="assets/remote-terminal.gif" alt="Remote terminal docked under the chat" width="920" />

**Splits** — click a split icon to open a **terminal** in that direction; **⌥-click** it
to open a **chat** instead. **Right-click any tab** for the same split options. Grid
presets (2×2 and friends) arrange everything at once, and the **equalize splits** button
restores even sizing.

<img src="assets/multi-session-grid.gif" alt="Multi-session grid workspace" width="920" />

**Shortcuts** — all rebindable in **Settings → Shortcuts**:

| Action | Default |
|---|---|
| Project search | ⌘K |
| Conversation search | ⌘⇧F |
| Save file (file editor) | ⌘S |
| New window | ⌘N |
| Split terminal right | ⌘⌥T |
| Split terminal down | ⌘⌥⇧T |
| Split chat right | ⌘⌥C |
| Split chat down | ⌘⌥⇧C |

<img src="assets/settings-shortcuts.png" alt="Settings → Shortcuts" width="820" />

---

## 8. The Agent Board — command your fleet

A few concurrent sessions and tab-hopping stops scaling. Click **Agent Board** in the
sidebar and **every session across every project** lands on one Kanban board:

<img src="assets/agent-board.gif" alt="Agent Board: drag a session card into the review column to request a code review" width="920" />

| Column | Meaning |
|---|---|
| **Waiting for input** | The agent needs an answer or a permission — check here first |
| **Responding** | Working right now; the card streams the agent's latest words live |
| **Idle** | Waiting for the next instruction |
| **In review** | A code review is running |
| **Done** | Archived sessions (green "done" pill) |
| **PR Merged** | Fully finished — the PR landed |

What you can do from the board:

- **Drag a card to Responding** → an instruction box opens; whatever you type is sent to that session
- **Drag a card to In review** → a dialog opens with a pre-filled review request
- **Drag a card to Done** → archive the session
- **Click a card** → preview the last request & latest reply, then **jump into the chat**
- **Search** — filter sessions by title or prompt instantly
- **Commit & PR / merge** — for GitHub-connected projects, right from the card
- **Un-complete** — reopen an archived session and keep going (its worktree is restored from the branch if it was cleaned up)

The **savings widget** on top totals what auto-routing saved you — daily, weekly, monthly.

<img src="assets/agent-board-standalone.png" alt="Agent Board with a real session and the savings widget" width="920" />

---

## 9. Finish work — review & Commit & PR

Done with a task? Hit the **Work completion** button next to the composer:

<img src="assets/work-completion-hub.png" alt="Work completion hub" width="920" />

Three paths:

1. **Review with the current agent** — the agent that did the work inspects its own
   changes and fixes confirmed issues directly
2. **Ask an independent reviewer** — a **different agent** (Claude/Codex and more, with
   model and review-profile choices: general / bugs & regressions / security) inspects a
   **read-only snapshot**. It can't touch your code — it only reports findings, which
   kills self-review blind spots. Accept the findings you agree with and request fixes;
   the review history stays attached to the session
3. **Straight to Commit & PR** — changes already checked? Skip review and ship

Reviews cover changes inside submodules too.

---

## 10. Deploy & share

Click **Deploy** in the chat header and your project ships to an **internal URL** the
whole team can open — SSL automatic, same link updated on every deploy. A success card
with the URL and a copy button lands in the chat, and the composer keeps a shortcut to
the latest deploy.

<img src="assets/deploy-share.png" alt="Project deployed to an internal URL" width="920" />

Share projects to your team or the company community — teammates browse, clone, refine,
and merge changes back safely.

---

## 11. Full-text conversation search

**⌘⇧F** searches everything ever said — session titles, your prompts, agent replies.
The index is a local SQLite (FTS5) database that never leaves your machine.

<img src="assets/conversation-search.gif" alt="Conversation search with Cmd+Shift+F" width="920" />

- Scope toggle: **My conversations** ↔ **Whole organization**
- Filter syntax:

| Filter | Example |
|---|---|
| Limit to a project | `project:commerce payment error` |
| Limit by speaker | `role:user deploy`, `role:agent root cause` |
| Agent type | `agent:claude refactor` |
| Date range | `after:2026-07-01 before:2026-07-20 login` |
| Exact phrase | `"epoch milliseconds"` |

Toggle the feature or delete the index in **Settings → Conversation search**.

> ⌘K is **navigation** search (projects, repositories); ⌘⇧F is **content** search
> (what was actually said).

---

## 12. Notification center

Kick off a long run and walk away — Saycode tells you when it's done.

<img src="assets/notification-center.png" alt="Notification center with unread/read tabs" width="820" />

- The sidebar's **Recent notifications** strip previews the latest completions; **View all** opens the full center
- **Unread / Read** tabs — acknowledged notices stay as history
- Clicking a notice opens that chat **in a new tab**
- Notices survive restarts, and sync with Dock badges, native notifications, and mobile push

---

## 13. AI usage dashboard

Click the **usage chip** in the chat header (e.g. `⁂ 84%/96% · ⬡ —/49%`) to see what's
left of each service's quota on that machine:

<img src="assets/machine-usage.png" alt="Per-machine Claude and Codex remaining usage" width="920" />

- **Per-provider icons** show the remaining 5-hour and 7-day windows
- Multiple **Claude accounts**? Switch between them with one click
- Numbers refresh once per machine every 5 minutes

Running low? That's when [auto model routing](#5-save-tokens-with-auto-model-routing)
earns its keep — it stops easy work from burning expensive quota.

---

## 14. Planning docs, voice input, attachments & viewer

**Planning docs** — every project has spec / plan / design tabs the agent reads and
updates while it works, so the "why" survives the session.

<img src="assets/planning-docs.png" alt="Planning docs tab" width="920" />

**Voice input** — press the mic button and speak; your words are **transcribed live**
into the composer. (Disabled in standalone mode.)

**Attachments** — drop files and images into the conversation, or use the clip button.

**File viewer** — markdown and HTML render properly in the project file tab; PDF and
DOCX open in a document viewer. Downloads included.

---

## 15. Tips & troubleshooting

**Read the status pills** — sidebar and board badges:
*Responding* (working) · *Idle / Standby* (waiting for instructions, or reclaimed after
idling) · *Waiting for input* (the agent isn't stuck — it's waiting for **you**) ·
*Done* (archived).

**Resume a finished session** — archived sessions come back via **Un-complete** on the
Agent Board or in the chat header; a cleaned-up worktree is restored from its branch.

**Use worktrees** — enable Worktree on a new session for an isolated branch workspace
per session; you can also reuse an existing worktree, and your last choice is
remembered. Archiving or deleting a session cleans its worktree up automatically.

**Missed a question card?** Agent questions and permission requests are re-delivered
safely when a session resumes. Just keep an eye on the **Waiting for input** column.

**Demo mode limits** — machine execution, deploys, and Commit & PR are disabled in the
demo workspace. To try things for real, standalone mode is the fastest path.

**When things feel stuck** — if you see the *"promoted because the session is stuck"*
badge, the top model is already on the case. Still stuck? Break the task into smaller
requests, or ask the Work-completion hub's **independent reviewer** for a fresh pair of
eyes.

---

<div align="center">

Questions? [saycode.ai](https://saycode.ai) · technical contact [ryan@buzzni.com](mailto:ryan@buzzni.com)

**© 2026 [Buzzni](https://buzzni.com)**

</div>
