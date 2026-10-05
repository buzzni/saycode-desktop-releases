<div align="center">

<img src="docs/assets/icon.png" alt="Saycode" width="110" />

# Saycode Desktop

### Say it. Ship it.

**The operations layer for every AI subscription and API your company uses.**
Keep the frontier models your team already knows (Claude · Codex · Grok · opencode) —
and let the company manage accounts, permissions, model routing, cost and deployment from one screen.
**One place to manage. Half the cost.**

[![Latest release](https://img.shields.io/github/v/release/buzzni/saycode-desktop-releases?label=Download&color=6d5df6)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/buzzni/saycode-desktop-releases/total?color=22c55e)](https://github.com/buzzni/saycode-desktop-releases/releases)
[![Platform](https://img.shields.io/badge/macOS-Apple%20Silicon-111?logo=apple)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)
[![Website](https://img.shields.io/badge/saycode.ai-visit-0ea5e9)](https://saycode.ai)

**English** | [한국어](README.ko.md) | [中文](README.zh.md) | [日本語](README.ja.md)

<br/>

### [⬇️ Download for macOS (Apple Silicon)](https://github.com/buzzni/saycode-desktop-releases/releases/download/v0.1.52/Saycode-0.1.52-arm64.dmg)

*Signed & notarized DMG · auto-updates built in · no account needed to start*

**New here?** Follow the **[📘 Step-by-step User Guide](docs/GUIDE.md)** ([한국어](docs/GUIDE.ko.md)) — from first launch to running a fleet of agents.

<br/>

https://github.com/user-attachments/assets/9eea6cbb-bf4d-4d10-a86d-dc4011a8d9dc

*🔊 Sound on — a 92-second intro built in Blender from real v0.1.50 screens, with subtitles and music · [Download MP4](docs/assets/saycode-intro-en.mp4) · [Subtitles (SRT)](docs/assets/saycode-intro-en.srt)*

</div>

<!-- release-notes:start -->
## What's new

- [Latest release notes](docs/releases/v0.1.41.ko.md) (Korean)
- [Full release history](docs/releases/README.ko.md) (Korean)
<!-- release-notes:end -->

---

## In 30 seconds

| 🗣️ **One sentence becomes an app** | 🗂️ **Your agent fleet on one board** | ✅ **Review → commit → done** |
|:---|:---|:---|
| Say what you want and the agent writes real code **on your Mac**, starts the dev server and **opens the preview for you**. | Command many Claude · Codex · Grok · opencode conversations from a **kanban board**. Drop a card in a column and the next instruction or review request goes out. | One click on **Finish work** runs self-review, build verification and the commit — and the conversation lands in **Done** on the board. |

> **v0.1.50 — a completely redesigned app.** First run is now *Personal / Organization use → automatic onboarding*;
> home offers three purpose-built starting points — **Chat · Build · Develop**; and the project screen is rebuilt around
> **conversation tabs in the center + a files · changes · terminal · browser workspace on the right**. Add **Chat (Work)
> with document templates** for creating documents without a project, **Agent Board · Integrations** in the sidebar, and
> **agent/model pickers plus ↑ prompt history** in the composer — every clip below is the real v0.1.50 app.

---

## Why Saycode?

Your people already move fast with ChatGPT and Claude. But subscriptions and API contracts
are scattered across teams and individuals, and nobody at the company can tell who is using
which model, or how much it costs. **Block it and productivity stops; leave it open and you
lose control.** The work lives on personal laptops and walks out the door with the employee.

Saycode **does not compete with the models.** It keeps the frontier models your team already
knows and adds the management, security and deployment an organisation needs on top — an
**operations layer**.

| | Individual subscriptions | **Saycode** |
|---|---|---|
| Accounts & cost | Per-person billing, fragmented accounts, admins can't see usage | **Same models under central management, audit and cost control** |
| Prompts & output | Tied to personal accounts, gone when people leave | **Accumulated as company assets — survives hand-overs** |
| Model choice | Locked to one vendor; hard to switch when a better model ships | **Best model auto-selected per request; new models usable on day one** |
| Code & data | Leaves for someone else's cloud | **Stays on machines the company designates, end-to-end encrypted** |
| Running many agents | Alt-tabbing between chat windows | **A kanban agent board to command the whole fleet from one screen** |
| The finish line | A branch waiting for review | **Finish work → review → Commit & PR → deploy to an internal URL** |

Solo, a personal subscription is the right call. **The moment an organisation works together, the requirements change.**

### Four things a company admin actually controls

| | What | How |
|---|---|---|
| **Who can use it** | Accounts & seats | Hand out and revoke accounts per employee. The company decides which of its AI subscriptions or APIs are attached to whom. Instant revocation on transfer or departure. |
| **Which AI they can use** | Model & machine policy | Open up specific models per team or machine, with per-person exceptions. Single sign-on with the company account. |
| **How much they use** | Usage & cost | See who used what and what it cost on one screen. Alerts before a budget cap, automatic stop when it is exceeded. |
| **What happened** | Audit log | Who did what, when. Searchable and exportable. |

### We adopted it first — and measured

Results measured while Buzzni's own engineering organisation built and operated on Saycode.

| **49%** | Simple requests **~90%** | Everyday work **~80%** |
|:---:|:---:|:---:|
| lower monthly AI execution cost — same workload, lower bill | Typos and copy fixes go to a light model | Features and refactors go to a mid-tier model |

> Measurement: Buzzni engineering, 35 people · June–July 2026 · subscription + API execution
> cost · workload held constant. Per-turn savings are a different metric from the overall
> figure. No guarantee for your environment — we measure your baseline together during the
> first month.

---

## How is this different from an Agent IDE (Orca etc.)?

Tools like [Orca](https://www.onorca.dev) are **Agent IDEs**: they focus on the developer's
coding loop — parallel agents in worktrees, diffs, review, deep editor integration. They do
that very well, and some add org-level rollout and governance. If that loop is your problem,
they are a fine choice.

Saycode targets a different question — the one that begins *after* the agent has written the code:

> **An Agent IDE lets a developer run more agents.
> Saycode turns what those agents build into company assets.**

| | Agent IDE (Orca etc.) | **Saycode** |
|---|---|---|
| Primary focus | The developer's coding loop | **The company's delivery loop** — build → review → deploy → share → hand over |
| Unit of management | Repo · worktree · agent session | **Org · team · project · machine · seat · deployed artifact** |
| What "deploy" means | Rolling the agent tool out safely across an org | **Serving the result at an internal URL the team opens** |
| Typical finish line | A reviewed change merged in Git | **A live internal service that can be shared and handed over** |
| AI model cost | Usage tracking, account switching | **Difficulty-based auto-routing + sub-agent delegation — 49% measured org-wide** |
| Who it reaches | Mostly developers | **Everyone in the company** — developers, planners, operators |

The two overlap on parallel agents, worktrees, remote execution and local-first security, so
those aren't the deciding factors. What Saycode adds on top is the **operations layer**:

- **Company ownership** — projects, sessions, planning docs and machines belong to the
  organisation, not a laptop. When someone leaves or changes teams, the work stays
  searchable and hand-over-able.
- **Internal deployment** — one click to a fixed internal URL with automatic SSL. The result
  is a tool the team opens today, not a branch waiting for review.
- **Sharing & hand-over** — colleagues browse, clone, refine and merge changes back.
  A project another team finished is a starting point, not something to rebuild.
- **Cost operations** — route every request to the cheapest adequate model (escalating only
  when a session is genuinely stuck), delegate mechanical sub-tasks to lighter sub-agents,
  and run it all on centrally managed shared machines. Every message shows which model was
  chosen and why. Company-wide AI cost is *operated*, not just *observed*.

**When to use which:** if the goal is the deepest parallel-agent coding experience in your
own repo, an Agent IDE is a great pick — and nothing stops you using both. If the goal is
AI-built software becoming **company infrastructure** — deployed internally, shared across
teams, surviving hand-overs, with cost under control — that's the problem Saycode solves.

---

## Highlights

*Screenshots show the Korean UI; the app also runs in English, 中文 and 日本語.*

<table>
<tr>
<td width="42%" valign="middle">

### 🧭 Install and go — make one choice, then just wait

Open the DMG, pick a language and press either **Personal use** or **Organization use**. Choose
Personal use and Saycode **starts its embedded server on its own, registers this Mac as a local
machine** and then **runs the onboarding checklist for you** — checking the Saycode CLI,
detecting your Claude Code / Codex logins and setting up notification sounds. If a step gets
stuck, retry it right there; steps already done stay done. Not a single byte of data leaves
your Mac.

</td>
<td><img src="docs/assets/first-run.gif" alt="First run: choose language → Personal use → automatic onboarding → add first project" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🏠 Start from home, by purpose — Chat · Build · Develop

The new home greets you by name and branches three ways.
**Chat** is where you ask questions and create documents right away, no project needed.
**Build** lets you pick a new plan or new project from preview cards. **Develop** starts
development from a new project, a code repository, a ZIP or a folder on a machine, and lists
your projects in detail. Switch tabs and your Chat draft stays put; next time you open home,
it remembers the last tab.

</td>
<td>
<img src="docs/assets/home-build.png" alt="Home, Build tab: start from a new plan, start a new project, recent project cards" /><br/>
<img src="docs/assets/home-develop.png" alt="Home, Develop tab: start from a new project, code repository, ZIP or machine folder" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🗣️ One sentence becomes a working app

*"Build a dashboard for our internal equipment rentals"* — from that one line the agent
scaffolds a Vite + React app, installs dependencies and starts a dev server on port 5173.
File edits, terminal commands and build checks flow past as transparent **streaming cards**,
and the agent's reply appears as it is written. The moment the server is up, the **preview is
detected and opened on the right automatically** — just start clicking. (The app in the video
was really built this way.)

</td>
<td><img src="docs/assets/build-by-chat.gif" alt="New project → one-sentence request → agent at work → preview detected automatically" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 📄 Get work done without a project — Chat and document templates

No code required. In **Chat** on the home screen, say *"Make a Q3 equipment rental report as a
DOCX"* and you get a Word document complete with tables and improvement suggestions,
**rendered right inside the app**. In **Choose document**, pick a format — document,
spreadsheet, presentation or PDF — and a template such as *Design report* or *Basic
letterhead*, or turn your own Office files into **My templates** and keep writing in the same
style. You can also pick an existing folder and start working right there.

</td>
<td>
<img src="docs/assets/work-docs.gif" alt="Create a DOCX report from one sentence in Chat and view it right inside the app" /><br/>
<img src="docs/assets/doc-templates.png" alt="Document formats and template gallery: Design report, Basic letterhead, create My template" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🧩 A new workspace — conversation in the center, tools on the right

Open a project and **conversation tabs sit in the center**, with a **files · changes · terminal
· browser** workspace docked alongside on the right. Files the agent changed show up
immediately as a **side-by-side diff**, and you can take the workspace **full screen** for a
proper review. The files panel filters by file name and also runs **content search** across
the whole project and its worktrees — click a result to jump to that line. The real terminal
beside the chat survives tab switches.

</td>
<td>
<img src="docs/assets/workspace.gif" alt="Terminal → change diff → full-screen workspace → file content search" /><br/>
<img src="docs/assets/workspace-diff.png" alt="Full-screen workspace: side-by-side diff and list of changed files" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 👀 Fix what you see — grab an element on screen and send it to chat

Open the **browser** in the workspace and the app running on your machine appears as is.
Press **Pick an element and send it to chat**, click a card on screen, and its selector, size,
text and a screenshot are attached to the chat automatically. One line — *"Highlight overdue
cards with a red background and add a 'Recall now' badge"* — was all it took: the real fix in
the video finished in **14 seconds** and appeared instantly in the same panel via HMR.
Viewport presets and console / network error capture live in the same toolbar.

</td>
<td><img src="docs/assets/element-to-chat.gif" alt="Pick element → selector and screenshot attached to chat → fix → instant HMR update" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🤖 Keep your favourite agent — the model picks itself

Choose **Claude Code · Codex · Opencode · Grok** in the composer. Leave the model on
**Default** and Saycode picks the right model and reasoning effort for each request, every
turn — and every message carries a badge like *"⚡ Auto · Opus 5.5 · low"* showing what was
chosen and why. Prefer control? Pin **Fable 5.1 · Opus 5.5 · Opus 5 · Sonnet 5 · Haiku 4.5**
(GPT-6 Sol · Luna · Astra for Codex) yourself, and save the AI, model and environment combos
you use most as **AI profiles**.

</td>
<td>
<img src="docs/assets/agent-picker.png" alt="AI picker in the composer: Claude Code, Codex, Opencode, Grok and AI profiles" /><br/>
<img src="docs/assets/model-picker.png" alt="Model picker: Default, Fable 5.1, Opus 5.5, Opus 5, Sonnet 5, Haiku 4.5" /><br/>
<img src="docs/assets/auto-route-badge.png" alt="Auto-selection badge under a message: Auto · Opus 5.5 · low" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🗂️ Agent Board — command your fleet as a kanban

Every conversation in every project on one board: **Awaiting input → Responding → Waiting →
In review → Done → PR Merged**. Each card shows project, agent, model, elapsed time and
worktree, and responding cards stream what the agent is writing right now. In the video, two
Claude and two Codex conversations worked at once; dragging a finished card to **In review**
opened a review-request dialog, and dropping one on **Done** brought up a completion check.
**Commit & PR**, autopilot and change verification all run straight from the card.

</td>
<td><img src="docs/assets/agent-board.gif" alt="Agent Board: Claude and Codex conversations move across columns; cards dragged to In review and Done" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### ✅ Finish work — review, commit and done in one go

A single **Finish work** button in the composer closes a conversation properly. **Check with
the current agent** (repeats automatically up to 7 times while issues remain), **hand it to an
independent reviewer** (a different agent reviews a read-only snapshot only), **Commit & PR**
(commit only if there is no remote), or **move to Done**. In the video the agent checked its
own changes, found and fixed a possible port conflict, passed `npm ci` · build ·
`git diff --check`, and reported the commit hash.

</td>
<td>
<img src="docs/assets/finish-work.gif" alt="Finish work → Commit &amp; PR request → agent reviews, builds and commits → moved to Done" /><br/>
<img src="docs/assets/work-completion-hub.png" alt="Finish work hub: check with current agent, independent reviewer, Commit &amp; PR, mark as done" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 📊 AI quota and machine health, right in the header

A chip in the conversation header shows **remaining Claude · Codex · Grok usage** and the
execution machine's **CPU and memory**. Click it to see each machine's 5-hour / 7-day
remaining quota; connect several Codex or Claude accounts and **switch with one click**, or
let it roll over automatically when a limit is hit — one account running dry never stops the
work.

</td>
<td><img src="docs/assets/machine-usage.png" alt="Per-machine Codex accounts with 5-hour / 7-day remaining usage, click to switch" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🔌 Integrations — extensions, and agents on call from your messenger

Install official extensions straight from **Integrations** in the sidebar: project
templates, the plugin manager, public links, and **Telegram · Slack · Discord channel
adapters**. Connect a channel to start Saycode conversations from your messenger, get
progress updates, and control only the projects, machines and tasks you have allowed.
Permissions are approved one extension at a time, so you always see exactly what is allowed.

</td>
<td><img src="docs/assets/integrations.png" alt="Integrations: install official extensions and Telegram, Slack, Discord channel adapters" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🧠 Agents that remember and learn

When an agent proposes something it confirmed during the work as a **lesson candidate**, just
press **Approve / Reject** on the card under the reply. Approved lessons are used
automatically from the next conversation on, and you manage them together on the Memory
screen. In **System prompt** settings, toggle each Saycode default instruction (child Agent
calls, internal delegation, plan-first, commit credits, inline artifact previews) on or off.

</td>
<td><img src="docs/assets/settings-system-prompt.png" alt="Settings → System prompt: Saycode default instructions and per-item selection" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🖥️ Your machines, your phone

This Mac is registered automatically on first run, and you can add GPU servers, build servers
and cloud VMs via **Settings → Machines → Register machine**. Check status and even run CLI
updates from the machine details. Scan the **Mobile connection** QR code with the Saycode
mobile app and the same workspace opens on your phone — with a push notification the moment
a long task finishes.

</td>
<td>
<img src="docs/assets/settings-machines.png" alt="Settings → Machines: status, CPU and memory of the registered local machine" /><br/>
<img src="docs/assets/mobile-companion.png" alt="Settings → Mobile connection: open the same workspace on your phone via QR code" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🏢 Team workspace — deploy, share, organisation control *(sign-in)*

Sign in with a saycode.ai account to **deploy to an internal URL** your team can open (SSL is
automatic, and every deploy refreshes the same link), invite people to a project to **work
together** or share it with a whole team, and organise with tags. The organisation console
manages members, teams, permissions, audit logs, plus org-wide MCP, GitHub PAT and AI
accounts — and plugs **connectors** such as Notion, Slack and Google Drive into your
conversations. **End users who only open deployed apps and reports don't need a seat.**

</td>
<td>
<img src="docs/assets/org-console.png" alt="Organisation console: member management and audit log" /><br/>
<img src="docs/assets/settings-connectors.png" alt="Connectors: connect Notion, Slack, Google Drive, Gmail and KNOI" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🌙 A workspace you'll want to stay in

Switch between Light · Dark · Auto themes right from the profile menu. Dense with
information, calm on the eyes. Rebindable shortcuts (⌘K search, ⌘⇧F conversation search,
⌘P Quick Open, ⌘⇧A Agent Board), recent notifications in the sidebar, Dock badges, and
sounds for input requests and finished work — the details add up to an experience.

</td>
<td>
<img src="docs/assets/home-build-dark.png" alt="Home in dark mode" /><br/>
<img src="docs/assets/project-dark.png" alt="Project screen in dark mode: conversation and code editor" />
</td>
</tr>
</table>

### Also included

- ⌨️ **Composer productivity** — press **↑** in an empty composer to recall and search earlier prompts, save go-to prompts as **Quick Commands** with the pin button, and attach files, photos and folders with `+`
- 🛟 **File checkpoint protection** — turn it on for a new conversation and the agent snapshots files before changing them; restore safely with per-file previews and conflict checks
- 🌿 **worktree isolation per conversation** — turn on `Working copy (worktree)` and the conversation works on its own branch, so parallel runs on the board never collide
- 🧭 **Project hub** — make one conversation the hub and completions and questions from other conversations arrive there as messages; the agent can look up and direct other conversations in the same project
- 🔁 **Continue with another agent** — from ⋯ in the conversation header, pick a model and reasoning effort and hand off between Claude ↔ Codex
- 🔎 **Full-text conversation search & file content search** — ⌘⇧F searches every conversation via a local FTS index; the files panel searches project contents
- 🤖 **Autopilot & automatic quality checks** — repeated self-review, automatic verification before a task completes, auto-merge scheduled once PR checks pass, and a post-merge verification loop
- 🔔 **Notifications & webhooks** — completion notices persist across restarts, and session events are sent to your endpoint as HMAC-signed webhooks
- 📄 **Rich file viewer** — Markdown, HTML, PDF and DOCX rendered in-app; newly created artifacts appear in the files panel
- 🔐 **Secure by default** — end-to-end encrypted chat and terminal, passkey / TOTP MFA, a global pause switch *(team)*, and code and data stay on your machines

---

## How it works

| | | |
|---|---|---|
| **01 · Install and choose** | **02 · Start by purpose** | **03 · Ask in plain words** |
| Open the DMG, pick a language and how you'll use it; the embedded server starts and onboarding runs by itself. | On home, pick Chat (documents & questions), Build (new plan or project) or Develop (repository, ZIP or folder). | One natural-language sentence is enough: *"Add a 'Recall now' badge to overdue cards"* |

| | |
|---|---|
| **04 · AI builds on your machine** — the agent reads and writes real files and runs commands. Check the diff, terminal and preview right away in the workspace on the right, and command multiple conversations from the board. | **05 · Finish and share** — Finish work takes you through review → commit → done. In a team workspace, deploy to an internal URL and hand over through working together. |

---

## Install & first run

### macOS

1. Download the latest DMG from **[Releases](https://github.com/buzzni/saycode-desktop-releases/releases/latest)** (Apple Silicon — an x64 DMG for Intel Macs is on the same page)
2. Open the DMG and drag **Saycode** to Applications
3. Launch it and pick a **language** (한국어 · English · 中文 · 日本語)
4. Answer **How will you use Saycode?**
   - **Personal use** — start right away in a Guest local workspace, no sign-in
   - **Organization use** — continues to saycode.ai sign-in and registering this computer (selected automatically if you belong to one organisation)

<table>
<tr>
<td width="33%"><img src="docs/assets/language-select.png" alt="Language selection" /></td>
<td width="33%"><img src="docs/assets/onboarding-checklist.png" alt="Automatic onboarding checklist" /></td>
<td width="33%"><img src="docs/assets/first-project-dialog.png" alt="Add project" /></td>
</tr>
<tr>
<td valign="top"><b>① Language</b> — choose the UI language on the first screen. You can change it later in Settings → Language.</td>
<td valign="top"><b>② Automatic onboarding</b> — runs by itself in order: Saycode CLI → AI tools (detects Claude Code and Codex logins) → notifications. If you need to log in, run <code>claude</code> → <code>/login</code> and <code>codex login</code> in a terminal, then check again.</td>
<td valign="top"><b>③ First project</b> — confirm the host (this computer) and choose Open existing folder · New project · Clone from Git URL · Import ZIP.</td>
</tr>
</table>

You can skip onboarding with **Later** and pick it up any time from **Settings → onboarding
checklist → Continue automatically from this step**. Before your first conversation, Saycode
asks whether to use **Saycode default instructions** — keep them on and the agent follows
Saycode workflows such as child-agent delegation and inline artifact previews.

The app is Developer ID signed and notarized, and updates itself automatically.
For every step with screenshots, see the **[User Guide](docs/GUIDE.md)**.

### Local workspace vs. team workspace

| | Personal use · Guest local workspace | Organization use · Team workspace (saycode.ai sign-in) |
|---|---|---|
| Requirements | None — just install | Organisation account (SSO · passkey/TOTP MFA) |
| Where data lives | Entirely on this Mac | Code & data on designated machines; metadata & audit log in the org console |
| Agents · auto model selection · Chat & document templates · Agent Board · worktrees · Finish work · browser · terminal · search · lessons/memory · extensions | ✅ | ✅ |
| Remote machine registration · mobile connection | ✅ (mobile on the same network or via tunnel) | ✅ |
| Internal URL deployment · working together · team sharing · project tags | — | ✅ |
| Org console (seats · teams · permissions · model policy · cost · audit log) · connectors | — | ✅ |

Start local, sign in when you need to. Local projects stay where they are.

> **Windows / Linux** — coming soon. Watch [Releases](https://github.com/buzzni/saycode-desktop-releases/releases) for news.

---

## Adoption scenarios — you choose where to start

Three scenarios, not a sequence. Start with one or combine them.

| 💬 Chat & documents | ⚙️ Personal workflow automation | 🚀 App building & deployment |
|---|---|---|
| Meeting summaries, drafts of plans and reports, search and summarise. Only approved users and models, model limits per group, usage and cost rolled up. | Connect internal collaboration tools and document stores to automate recurring reports, request/approval flows and other repetitive work. | Business teams build their own internal tools and deploy them to an internal URL, with review and approval built in. |

**Non-developers use it from week one** — business support (minutes, monthly report drafts,
policy Q&A), sales & marketing (proposal drafts, VOC classification), commerce operations
(product / price / inventory check reports), HR & general affairs (policy guidance,
request/approval flows, onboarding material). Start with whatever is done by hand, in
spreadsheets or over chat today. Results are shared as links, so review ends without
attachments flying around.

---

## Saycode for teams

### A free one-month PoC — see the numbers first

We measure usage, cost, policy and audit for the scenario you choose and write the results
report with you. **The PoC includes every Premium feature.**

| Week 1 · Baseline | Weeks 2–3 · Real use | Week 4 · Report |
|---|---|---|
| Measure current AI usage and cost baseline, pick the target team and PoC scenario | Apply to real work, measure usage and cost, validate policy and permission settings | Summarise activation, cost and policy results; produce a rollout quote |

The PoC month is free. Model usage during the PoC follows your own contracts.

### Pricing — seats only for the people who build

Saycode does not resell AI models. Connect the AI contracts you already have and pay a seat
fee only for management and the execution environment.

| Plan | Price | For | Includes |
|---|---|---|---|
| **Office** | $10 / user · month | Everyone — chat & documents | Chat and document work · viewing, reviewing and approving results · usage dashboard |
| **Premium** ⭐ | $40 / user · month | People who build and deploy | Everything in Office + app building & agent execution · internal URL deployment · SSO |
| **Volume** | Negotiated | Company-wide rollout, special requirements | Volume pricing · on-premise / air-gapped installation · dedicated support & SLA |

- **0% markup on AI models** — connect your existing Anthropic, OpenAI, Azure, Bedrock or Vertex contracts. Monthly total = seats + external AI subscriptions + API usage.
- **End users who only open deployed apps and reports don't need a seat.** Seats are named; no account sharing.
- Budget caps and threshold alerts, with automatic stop when a cap is exceeded.
- No setup fee during the current launch period.

- 🌐 Website: **[saycode.ai](https://saycode.ai)** · Deck: **[saycodepoc.apps.saycode.ai](https://saycodepoc.apps.saycode.ai/)**
- 💼 Sales: [soo@buzzni.com](mailto:soo@buzzni.com)
- 🛠 Technical: [ryan@buzzni.com](mailto:ryan@buzzni.com)
- 🤝 Support: [ernie@buzzni.com](mailto:ernie@buzzni.com)

---

## Open-source notice

Saycode Desktop is built on open source. It bundles or uses the following projects (licences
noted); full licence texts ship inside the packaged app:

| Project | Used for | Licence |
|---|---|---|
| [Happy](https://github.com/slopus/happy) (via the [buzzni fork](https://github.com/buzzni/happy)) | Encrypted agent-session relay engine bundled in standalone mode (`happy-cli` / `happy-server`) | MIT |
| [Electron](https://www.electronjs.org/) | Desktop app shell | MIT |
| [React](https://react.dev/) | UI framework | MIT |
| [xterm.js](https://xtermjs.org/) (+ fit / web-links / WebGL addons) | Remote terminal rendering | MIT |
| [socket.io-client](https://socket.io/) | Real-time transport | MIT |
| [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) | Chat Markdown rendering | MIT |
| [electron-updater](https://www.electron.build/) | In-app auto-updates | MIT |
| [buffer](https://github.com/feross/buffer) | Binary utilities | MIT |
| [lucide-react](https://lucide.dev/) | Icon set | ISC |
| [TweetNaCl.js](https://tweetnacl.js.org/) | End-to-end encryption primitives | Unlicense (public domain) |

Special thanks to Kirill Dubovitskiy and the contributors of
**[slopus/happy](https://github.com/slopus/happy)** (MIT), the foundation of Saycode's
encrypted session-sync architecture.

---

<div align="center">

**© 2026 [Buzzni](https://buzzni.com) · [saycode.ai](https://saycode.ai)**

*So that anyone in the company can build, just by saying it.*

</div>
