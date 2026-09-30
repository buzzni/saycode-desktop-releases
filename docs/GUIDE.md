<div align="center">

<img src="assets/icon.png" alt="Saycode" width="90" />

# Saycode Desktop User Guide

**From first launch to running an agent fleet — just follow along, in order.**
*Based on the v0.1.50 UI*

**English** | [한국어](GUIDE.ko.md)

</div>

---

## Contents

1. [Install and first run](#1-install-and-first-run)
2. [Onboarding checklist](#2-onboarding-checklist)
3. [A look around — the sidebar and Home](#3-a-look-around--the-sidebar-and-home)
4. [Add a project](#4-add-a-project)
5. [Your first conversation — putting an agent to work](#5-your-first-conversation--putting-an-agent-to-work)
6. [Working without a project — Chat and document templates](#6-working-without-a-project--chat-and-document-templates)
7. [The workspace — files, changes, terminal, browser](#7-the-workspace--files-changes-terminal-browser)
8. [See it, fix it — pick an element and send it to chat](#8-see-it-fix-it--pick-an-element-and-send-it-to-chat)
9. [Choosing agents and models, AI usage](#9-choosing-agents-and-models-ai-usage)
10. [Agent Board — command your fleet](#10-agent-board--command-your-fleet)
11. [Finish work — review, commit, done](#11-finish-work--review-commit-done)
12. [Lessons, memory and the system prompt](#12-lessons-memory-and-the-system-prompt)
13. [Integrations — extensions and messenger channels](#13-integrations--extensions-and-messenger-channels)
14. [A tour of Settings](#14-a-tour-of-settings)
15. [Machines and mobile connection](#15-machines-and-mobile-connection)
16. [Team workspace — login, deploy, share](#16-team-workspace--login-deploy-share)
17. [Tips and troubleshooting](#17-tips-and-troubleshooting)

*Screenshots show the Korean UI; the app also runs in English, 中文 and 日本語.*

---

## 1. Install and first run

**[Download the latest DMG](https://github.com/buzzni/saycode-desktop-releases/releases/latest)**,
open it, and drag **Saycode** into the Applications folder (DMGs are available for both
Apple Silicon and Intel Macs, x64). The app is signed and notarized, and updates itself
automatically.

On first launch you make just two choices.

1. **Language** — 한국어 / English / 中文 / 日本語
2. **How will you use Saycode?**
   - **Personal use** — build and manage your own projects with AI. You go straight into the
     **Guest local workspace**, no login required.
   - **Organization use** — share projects with your teammates. This continues to a
     saycode.ai login and registering this computer; if you belong to a single organization,
     it is selected automatically.

<img src="assets/language-select.png" alt="First-run language selection screen" width="480" />

If you choose Personal use, Saycode starts the **embedded server** (relay · database) inside
this Mac on its own, registers this Mac as a **local machine**, and opens the workspace. In
this state, not a single byte of data leaves the Mac.

<img src="assets/first-run.gif" alt="First run: language → Personal use → automatic onboarding → add first project → Home" width="920" />

---

## 2. Onboarding checklist

When the workspace opens, the **"Let's get ready for your first task"** checklist **runs
automatically**.

<img src="assets/onboarding-checklist.png" alt="Automatic onboarding checklist — Saycode CLI, AI tools, notifications" width="760" />

| Step | What it does |
|---|---|
| **① Saycode CLI** | Checks the local runtime your agents actually run on. It is bundled with the app, so it shows as *Installed* right away, and the multi-account tools (codex-multi-auth, claude-swap) are prepared as well. If you want to use the `saycode` CLI from a terminal, you can choose a global install. |
| **② AI tools** | Detects whether Claude Code and Codex are installed and logged in. If not yet, finish `claude` → `/login` and `codex login` in a terminal, then press **Check status again**. Having either one is enough to get started. |
| **③ Notifications** | Choose whether to play a sound when an agent **asks for input** and when it **finishes a task**, and confirm with **Send test notification**. |

The final **Add first project** button leads to [Chapter 4](#4-add-a-project). If an error
occurs along the way, just retry the same step — steps already completed are kept. If you
closed it with **Later**, go to **Settings → Onboarding checklist**, pick a step and press
**Run automatically from this step**.

<img src="assets/settings-onboarding.png" alt="Settings → Onboarding checklist" width="820" />

---

## 3. A look around — the sidebar and Home

### Sidebar

| Area | What's there |
|---|---|
| **Saycode Home** | The start screen with Chat · Build · Develop tabs |
| **Agent Board** | The agent board showing every conversation as a kanban ([Chapter 10](#10-agent-board--command-your-fleet)) |
| **Integrations** | Install extensions and messenger channel adapters ([Chapter 13](#13-integrations--extensions-and-messenger-channels)) |
| **Chat / Project tabs** | Conversations held without a project / projects and the conversations inside them. Switching tabs keeps the open screen as it is, and the search icon under each list lets you search only when you need to |
| **Recent notifications** | Completion and input-request notifications. Click one to jump to that conversation |
| **Account area** | Workspace and machine indicator, notifications, ⋯ menu. Click your name for organization and machine selection, login, **Settings**, and theme (Auto · Light · Dark) |

From the ⋯ menu you can toggle **Show AI usage remaining**, **Show CPU · memory**, open a new
window, and more.

### Home — three paths depending on your goal

<img src="assets/home-chat.png" alt="Home Chat tab — What can I help you with?" width="920" />

| Tab | Use it when |
|---|---|
| **Chat** | You want to ask something right away without a project, or make documents, spreadsheets and presentations ([Chapter 6](#6-working-without-a-project--chat-and-document-templates)) |
| **Build** | You want to **Start from a new plan** or **Start a new project**, or skim recent projects as preview cards |
| **Develop** | You want to start development with **New project · Import code repository · Import ZIP/files · Use a machine folder**, and see projects as a detailed list |

<img src="assets/home-build.png" alt="Home Build tab" width="920" />

<img src="assets/home-develop.png" alt="Home Develop tab" width="920" />

Your Chat draft survives switching tabs, and the last tab is restored when you come back by
clicking Home or the logo.

---

## 4. Add a project

Open it from the last onboarding button, **New project** in the sidebar, or a start card on
Home.

<img src="assets/first-project-dialog.png" alt="Add project — host selection, open existing folder, new project, Git, ZIP" width="480" />

First, check the **host** (the machine the agent will work on). Your own computer is shown as
**This computer**, and only online machines can be selected. Then:

| Method | Use it when |
|---|---|
| **Open existing folder** (default, ↵) | Connect an existing codebase as is. If it's a git repository, branches, worktrees and Commit & PR are all available |
| **Create new project** | Just give it a name and start in an empty folder (initialized as a Git repository). If you install the template extension, you can also pick templates such as an internal dashboard |
| **Clone from Git URL** | Clone a remote repository onto the selected machine |
| **Import from ZIP** | Create a local project from an archive |

Open **Project settings** (basic info · tags · run · automation) from the ⋯ next to the
project title or the ⚙ in the conversation header.

---

## 5. Your first conversation — putting an agent to work

When you open a project, you see *"What should we build in rental-dashboard?"* along with the
start cards **Understand the code · Build a feature · Code review · Fix a bug**. The first
time you open a conversation, you are asked once whether to use the **Saycode default
instructions**.

<img src="assets/system-prompt-choice.png" alt="Whether to use the Saycode default instructions" width="520" />

### Anatomy of the input box

| Element | Description |
|---|---|
| **+** | Attach files, photos (⌘U) or folders, or start from an existing path |
| **AI picker** | Claude Code · Codex · Opencode · Grok, plus AI profiles ([Chapter 9](#9-choosing-agents-and-models-ai-usage)) |
| **Model** | Default (automatic selection) or pin a specific model |
| **⚡ / ⋯** | Additional run options |
| **Pin (Quick Commands)** | Save frequently used prompts and fill them in with one click |
| **↑ key** | When the input box is empty, step through and search prompts you sent before |
| **Working copy (worktree)** | Work in isolation on a branch and working folder dedicated to the conversation |
| **File checkpoint protection** | (macOS conversations with worktree off) Saves the state before the agent changes files so you can restore safely |

### Build an app in one sentence

> *"Build an internal equipment-rental dashboard. Use Vite + React with summary cards by
> status, search and status filters, and a rental list table (20 rows of dummy data), in a
> clean light theme. Keep the dev server running on port 5173 so I can see it in the
> preview."*

<img src="assets/build-by-chat.gif" alt="New project → one-sentence request → agent works → preview auto-detected" width="920" />

The agent creates files on the real machine, runs `npm install` and the build, and starts the
dev server. Every tool call shows up as a card, and the answer appears on screen as it is
written. Once the dev server is up, the **preview is detected automatically** and opens in the
workspace on the right. HTML output can also be previewed inline in the chat.

> If you want a dev server, be sure to include *"keep the dev server running so I can see it
> in the preview"* in your request. Otherwise the agent may finish with a single HTML file.

---

## 6. Working without a project — Chat and document templates

The **Chat** tab on Home (or sidebar Chat → **Start new chat**) is where you work right away
without a project. Conversations are saved and can be continued even in a local workspace
without logging in.

<img src="assets/work-docs.gif" alt="Create a DOCX report in Chat and view it right inside the app" width="920" />

- Ask something like *"Create a Q3 internal equipment-rental status report as a DOCX file"*
  and the resulting file lands in the **working folder** and opens right away in the in-app
  viewer (DOCX · PDF · HTML · Markdown rendering).
- In **Choose document** (or `+`), pick a format — **Document (DOCX) · Spreadsheet (XLSX) ·
  Presentation (PPTX) · PDF** — to open the template list. Built-in templates such as
  *Design report* and *Basic letterhead*, or Office files and writing guidelines you saved
  with **Create my template**, are passed on to the actual task.
- Choose `+` → **Start from an existing path** to use an existing folder on this computer as
  the working path.

<img src="assets/doc-templates.png" alt="Document format selection and template gallery" width="820" />

---

## 7. The workspace — files, changes, terminal, browser

The project screen is split into the **conversation in the middle** and the **workspace on the
right**. Use the tabs at the top of the middle to move between conversations, and the tabs on
the right to use tools. Drag the divider to adjust the width.

<img src="assets/workspace.gif" alt="Terminal → changes diff → workspace full screen → file content search" width="920" />

| Tab | What you can do |
|---|---|
| **Changes** | The list of files changed in this conversation (worktree) and a **side-by-side diff**. Leave review comments on changed lines and send them to the agent |
| **Files** | Browse the file tree, filter by file name, and run **content search** (Enter) across the whole project or worktree. Click a result to open that line; new outputs are marked |
| **Terminal** | A real shell attached to that machine. It stays alive when you switch tabs and reconnects on its own |
| **Browser / Preview** | Open the running app, pick elements, viewport presets ([Chapter 8](#8-see-it-fix-it--pick-an-element-and-send-it-to-chat)) |

Use **+ (Add work panel)** at the top right to add Files · Terminal · Browser · Review · Run
preview, and **Full-screen work panel** to see it large or **Restore split view** to go back.

<img src="assets/workspace-diff.png" alt="Workspace full screen — side-by-side diff" width="920" />

---

## 8. See it, fix it — pick an element and send it to chat

Open an address such as `http://localhost:5173` in the workspace **Browser** and the app
running on your machine appears as is. Press **Pick an element and send it to chat** in the
toolbar and click an element on the page — its selector, size, text, ancestor path and a
screenshot are attached to the chat input.

<img src="assets/element-to-chat.gif" alt="Pick element → attached to chat → edit → applied instantly via HMR" width="920" />

Just add one line on top — *"Highlight the overdue card with a light red background and add
a 'Recover now' badge."* When the agent edits the code, HMR applies it immediately in the same
panel.

<img src="assets/browser-panel.png" alt="The result reflected in the browser panel next to the chat" width="920" />

The toolbar also has **console · network error collection**, **viewport** (desktop · tablet ·
mobile), cookie import, and open in a new window.

---

## 9. Choosing agents and models, AI usage

### Agents

<img src="assets/agent-picker.png" alt="AI picker — Claude Code, Codex, Opencode, Grok, AI profiles" width="670" />

Use the AI button in the input box to choose **Claude Code · Codex · Opencode · Grok**. Your
choice carries over to the next new conversation. An **AI profile** is a saved combination
that switches AI, model and working environment all at once. You can hand an ongoing
conversation over with **Continue with another agent** in the header ⋯, choosing the model and
reasoning effort.

### Automatic model selection

<img src="assets/model-picker.png" alt="Model picker — Default, Fable 5.1, Opus 5.5, Opus 5, Sonnet 5, Haiku 4.5" width="670" />

Leave the model on **Default** and Saycode looks at each turn's difficulty to choose the model
and reasoning effort — light for fixing a typo, moderate for implementing a feature, and the
top models only for genuinely hard problems. Hover over a message to see which choice was made
as a badge.

<img src="assets/auto-route-badge.png" alt="Automatic selection badge under a message" width="670" />

If you need a specific model, pin **Fable 5.1 · Opus 5.5 · Opus 5 · Sonnet 5 · Haiku 4.5**
(for Codex, GPT-6 Sol · Luna · Astra and others) directly.

### AI usage and account switching

Click the chip in the conversation header (e.g. `✱ 71%/17% · ◎ —/56% · Grok installed`) to
see the remaining usage per service on that machine.

<img src="assets/machine-usage.png" alt="Codex account list and remaining usage per machine" width="320" />

- Remaining percentage of the 5-hour and 7-day windows for **Claude / Codex / Grok**
- If you connected multiple accounts with `codex-multi-auth` · `claude-swap`, **switch with
  one click**, or switch automatically when a limit is hit — work doesn't stop even if one
  account is blocked
- Turn on **Show AI usage remaining / Show CPU · memory** in the ⋯ menu to always show them in
  the header

---

## 10. Agent Board — command your fleet

Click **Agent Board** (⌘⇧A) in the sidebar and **every conversation in every project** is laid
out as a kanban. Collapse the sidebar and all six columns fit on one screen.

<img src="assets/agent-board.gif" alt="Agent Board — Claude and Codex conversations moving between columns, cards dragged to In review and Done" width="920" />

| Column | Meaning |
|---|---|
| **Waiting for input** | Conversations that need an answer to a question or permission — look here first |
| **Responding** | Working right now. The latest response streams live on the card. *Drop a card here to send an instruction* |
| **Idle** | Waiting for the next instruction |
| **In review** | *Drop a card here to request a review* — a confirmation dialog opens with the model and prompt pre-filled |
| **Done** | *Drop a card here to move the conversation to Done* — hidden from the default list; bring it back with **Unmark done** |
| **PR merged** | Conversations finished because their PR was merged |

Cards show the project, agent, model, elapsed time and worktree name, and you can run
**Commit & PR**, **Autopilot** and **Verify changes** directly from a card. Click a card to
preview the last request and latest response, and **Go to conversation**. Use the search box
at the top right to filter by title or prompt.

<img src="assets/agent-board.png" alt="Agent Board — Idle, In review and Done columns" width="920" />

---

## 11. Finish work — review, commit, done

Press the **Finish work** (code review · Commit & PR) button in the input box.

<img src="assets/work-completion-hub.png" alt="Finish work hub" width="820" />

1. **Check with the current agent** — the agent that did the work reviews the changes and fixes
   problems itself. If findings of medium or higher come up, the review continues
   automatically up to the **iteration count** (default 7), and stops once only low or nit
   findings remain.
2. **Hand off to an independent reviewer** — another agent reviews a **read-only snapshot** and
   only reports the results. A reviewer different from the model that wrote the code is
   suggested first.
3. **Commit & PR** — review → test → commit → push → PR creation in a single turn. If there's
   no remote repository, it tells you it will request *commit only*. (Used in worktree
   conversations)
4. **Mark done** — moves the conversation to **Done** on the board. The worktree is kept.

<img src="assets/finish-work.gif" alt="Finish work → Commit & PR → review, build, commit → moved to Done" width="920" />

---

## 12. Lessons, memory and the system prompt

- **Lesson candidates** — when an agent proposes a method it confirmed during work as a project
  lesson, a card appears under that answer. Only lessons you **Approve** are used in later
  conversations; **Reject** discards them.
- **Memory** — in Settings → Memory, see lessons and review candidates in one place, and
  exclude them so they aren't recalled in later conversations.
- **System prompt** — turn the Saycode default instructions on or off as a whole, or adjust
  individual items: child Agent calls · internal task delegation · start-from-planning
  workflow · commit credits · inline preview of outputs.

<img src="assets/settings-system-prompt.png" alt="Settings → System prompt" width="820" />

---

## 13. Integrations — extensions and messenger channels

Under **Integrations** in the sidebar, install only the features you need as official
extensions.

<img src="assets/integrations.png" alt="Integrations — official extensions and channel adapters" width="920" />

| Extension | What it does |
|---|---|
| **Project templates** | Start new projects from proven templates such as internal dashboards and survey forms |
| **Plugin manager** | Manage skills and plugins |
| **Public links** | Publish rendered HTML documents and reports as links |
| **Telegram · Slack · Discord channel adapters** | Start Saycode conversations from a messenger, get progress updates, and control only the projects, machines and tasks you allow |

When you install an extension, review each requested permission (e.g. `channels.receive`,
`sessions.control`) and press **Approve permissions and activate**. For messenger channels,
connect the bot in two steps under **Messenger channels** in settings; if you like, move it to
**Run on another machine** instead of Desktop so it keeps receiving even when the app is
closed. Turn on **Developer mode** to also load unpacked local extension folders.

---

## 14. A tour of Settings

Open **Settings** (⌘,) from your name (or Guest) in the account area. Type a setting name in
the search box at the top left to jump straight to it.

| Group | Tabs | Contents |
|---|---|---|
| — | Onboarding checklist | Continue the startup setup automatically |
| Account | Security | Anonymous usage statistics, auto-stop sessions on loop detection, autopilot quality gate, global pause *(team)* |
| Preferences | Notifications · Visual effects · Language · Shortcuts | Mobile push, notification sounds, webhooks; theme and animations; UI language; rebind every shortcut |
| AI | System prompt · Memory · Conversation search | Default instructions, lessons and memory, conversation search index |
| Devices | Machines · Mobile connection · Network data saver | Machine registration, details and updates; QR connection; metered network handling |
| App | Extensions · About | Install and manage extensions, version |

<img src="assets/settings-shortcuts.png" alt="Settings → Shortcuts" width="820" />

<img src="assets/settings-notifications.png" alt="Settings → Notifications — mobile push, notification sounds, webhooks" width="820" />

Key shortcuts: **⌘K** project search · **⌘⇧F** full-text conversation search · **⌘P** Quick
Open · **⌘⇧A** Agent Board · **⌘S** save file · **⌘U** add files/photos · **⌘N** new window ·
**⌘T** new tab · **⌘B** collapse/expand sidebar · **⌘,** Settings.

---

## 15. Machines and mobile connection

### Machines

This Mac is registered automatically on first launch. In **Settings → Machines** you can see
its status (CPU · memory · storage, daemon status), and from **Details** run a Saycode CLI
update or **Rename / Delete** it.

<img src="assets/settings-machines.png" alt="Settings → Machines" width="820" />

Press **Register machine** to get a registration command and a one-time code to run on the
target machine (GPU server, build server, cloud VM). Once it shows up as **Online** a few
seconds later, pick that machine as the **host** when creating a project — the agent works
right next to your code and data.

### Mobile connection

<img src="assets/mobile-companion.png" alt="Settings → Mobile connection — QR code (blurred)" width="820" />

Scan the QR code with the Saycode mobile app and the same workspace opens on your phone. A
local workspace connects directly on the same network, or through a tunnel you turn on from a
different network. Watch conversations in real time and get a push notification the moment a
long task finishes.

---

## 16. Team workspace — login, deploy, share

The local workspace alone gives you agents, the board, worktrees, Finish work, the workspace,
and Chat with document templates. When you need the following, go to the account area →
**Log in** (or choose **Organization use** on first launch):

- **Deploy to an internal URL** your team can open (automatic SSL, the same link updated on
  every deploy)
- **Work together** invitations and acceptance, team-level project sharing, and project
  **tags** for organizing and filtering
- **Organization management** — members, teams, permissions, model policies, costs, audit
  logs, SSO
- Organization-wide MCP servers, GitHub PATs and AI accounts, and **connectors** such as
  Notion, Slack and Google Drive

<img src="assets/org-console.png" alt="Organization management console — member management and audit log" width="820" />

<img src="assets/settings-connectors.png" alt="Connectors — Notion, Slack, Google Drive, Gmail, KNOI" width="820" />

The project list in the sidebar is split into **My projects / Working together / Shared with
me**, and shared projects can be found under **Project view options**. End users who open a
deployed app or report URL don't need a seat. Local projects stay as they are after you log
in.

**Global pause** — turn on the switch in Settings → Security and scheduled automations, GitHub
event triggers, and the next steps of board autopilot won't start. Conversations already in
progress are not interrupted.

<img src="assets/settings-security.png" alt="Settings → Security — global pause, auto-stop on loop detection, autopilot quality gate" width="820" />

---

## 17. Tips and troubleshooting

**Conversation status at a glance** — *Responding* · *Idle* (waiting for the next
instruction) · *Waiting for input* (needs an answer to a question or permission — the agent
isn't stuck, it's waiting for you) · *Done* (archived).

**Continuing a finished conversation** — bring it back with **Unmark done** on the board or in
the conversation header.

**Using worktrees** — when running several conversations at once, turn on
`Working copy (worktree)`. Each conversation works on an isolated branch so they don't collide.
Worktrees and Commit & PR are available when the project is a git repository, and new projects
start initialized as a Git repository.

**If an AI tool shows "Installation required" or "Check failed"** — finish `claude` →
`/login` and `codex login` in a terminal, then press **Check status again** in the onboarding
checklist.

**If a pager opened in the terminal** — press `q` to exit, or run commands like
`git --no-pager log`.

**If you stopped a response** — a stopped AI response can be retried. The conversation also
carries on after you hit a model usage limit.

**When you feel stuck** — break the problem into smaller requests, or ask the **independent
reviewer** in Finish work for a fresh perspective.

---

<div align="center">

Have more questions? [saycode.ai](https://saycode.ai) · Technical inquiries [ryan@buzzni.com](mailto:ryan@buzzni.com)

**© 2026 [Buzzni](https://buzzni.com)**

</div>
