<div align="center">

<img src="docs/assets/icon.png" alt="Saycode" width="110" />

# Saycode Desktop

### 说出来，就变成软件。

**统一管理公司内所有 AI 订阅与 API 的运营层** ——
团队照常使用已经熟悉的最新模型（Claude · Codex · Grok · opencode），
账号、权限、模型选择、成本、部署则由公司在同一屏幕上统一管理。
**集中管理，成本减半。**

[![Latest release](https://img.shields.io/github/v/release/buzzni/saycode-desktop-releases?label=Download&color=6d5df6)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/buzzni/saycode-desktop-releases/total?color=22c55e)](https://github.com/buzzni/saycode-desktop-releases/releases)
[![Platform](https://img.shields.io/badge/macOS-Apple%20Silicon-111?logo=apple)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)
[![Website](https://img.shields.io/badge/saycode.ai-visit-0ea5e9)](https://saycode.ai)

[English](README.md) | [한국어](README.ko.md) | **中文** | [日本語](README.ja.md)

<br/>

### [⬇️ 下载 macOS 版 (Apple Silicon)](https://github.com/buzzni/saycode-desktop-releases/releases/download/v0.1.41/Saycode-0.1.41-arm64.dmg)

*已签名并公证的 DMG · 内置自动更新 · 无需账号即可开始*

**第一次使用？** 跟着**[📘 分步用户指南](docs/GUIDE.md)**（[한국어](docs/GUIDE.ko.md)）操作 —
从首次启动到指挥整支智能体舰队。

<br/>

<img src="docs/assets/build-by-chat.gif" alt="在 Saycode 中通过与 AI 智能体对话构建应用" width="920" />

*输入一句话，就能得到一个能运行的应用 —— 真实、未经剪辑的会话画面。每条消息都会用徽章标明选择了哪个模型、为什么选择它。*

</div>

<!-- release-notes:start -->
## 新功能与变更

- [最新发布说明](docs/releases/v0.1.41.ko.md)（韩文）
- [完整发布记录](docs/releases/README.ko.md)（韩文）
<!-- release-notes:end -->

---

## 为什么选择 Saycode？

员工早已借助 ChatGPT 和 Claude 快速开展工作。但订阅和 API 合约却分散在各部门、各个人手中，
公司无法得知谁在用什么模型、用了多少。**一禁用，生产力就停摆；放开管，又会失去控制。**
成果留在个人电脑上，随着员工离职一起消失。

Saycode **不是与模型竞争的产品。** 它让团队照常使用已经熟悉的最新模型，
并在此之上叠加组织所需的管理、安全与部署能力 —— 是一层**运营层**。

| | 个人自行订阅时 | **通过 Saycode 共同使用时** |
|---|---|---|
| 账号与成本 | 按个人付费、账号分散，管理员无法查看用量 | **在中央管理、审计与成本控制下使用同一批模型** |
| 提示词与产出 | 归属于个人账号，人一走就随之消失 | **作为组织资产持续积累 —— 即使负责人更替也能保留** |
| 模型选择 | 被锁定在单一模型上，更好的模型出现也难以切换 | **按请求自动选择最优模型，不受供应商绑定，新模型即刻可用** |
| 代码与数据 | 流向外部云端 | **驻留在公司指定的执行机器上 + 端到端加密（E2EE）** |
| 多智能体运行 | 一个个聊天窗口来回切换 | **用看板式智能体面板在同一屏幕上指挥整支舰队** |
| 产出 | 等待评审的分支 | **工作完成 → 评审 → Commit & PR → 部署到内网 URL** |

独自使用时，直接订阅是对的选择。**而当组织共同使用的那一刻起，所需要的东西就不一样了。**

### 公司管理员实际掌控的四件事

| | 内容 | 方式 |
|---|---|---|
| **谁能使用** | 账号与坐席 | 为每位员工分配并回收账号。公司拥有的 AI 订阅或 API 要挂在谁名下，也由公司决定。部门调动或离职时立即回收。 |
| **能用哪些 AI** | 模型与机器策略 | 按团队或机器开放可用的 AI，并为个别人设置例外。使用公司账号一次登录（SSO）。 |
| **用了多少** | 用量与成本 | 在同一屏幕上查看谁用了多少、花费了多少。在超出预算上限前发出提醒，超出后自动停止。 |
| **发生过什么** | 审计日志 | 记录谁在何时做了什么。可搜索并导出为文件。 |

### 我们率先采用并进行了实测

以下是 Buzzni 研发团队在 Saycode 上进行开发与运营后实测得到的结果。

| **49%** | 简单请求 **~90%** | 日常工作 **~80%** |
|:---:|:---:|:---:|
| 月度 AI 执行成本降低 —— 工作量不变，只是成本减少了 | 错别字、文案修正交给轻量模型处理 | 功能实现、重构交给中等模型处理 |

> 测量条件：Buzzni 研发团队 35 人 · 2026 年 6-7 月 · 以订阅与 API 执行成本为准 · 工作量保持不变。
> 单轮节省率与整体节省率是不同的指标。不保证客户环境能取得相同的节省率，
> 导入的第一个月会与客户一起测量基线。

---

## 这和 Agent IDE（Orca 等）有什么不同？

像 [Orca](https://www.onorca.dev) 这样的工具是 **Agent IDE**，专注于开发者的编码循环 ——
按 worktree 并行运行智能体、diff、评审、深度编辑器集成。它们在这方面做得非常出色，
其中一些还提供组织级的推广和治理能力。如果这正是你要解决的循环，
它们是不错的选择。

Saycode 瞄准的是一个不同的问题 —— 从智能体完成代码编写*之后*才开始的问题：

> **Agent IDE 让开发者能运行更多智能体。
> Saycode 把这些智能体构建的成果变成公司的资产。**

| | Agent IDE（Orca 等） | **Saycode** |
|---|---|---|
| 主要关注点 | 开发者的编码循环 | **公司的交付循环** —— 制作 → 评审 → 部署 → 共享 → 交接 |
| 管理单元 | 仓库 · worktree · 智能体会话 | **组织 · 团队 · 项目 · 机器 · 坐席 · 部署成果** |
| "部署"的含义 | 把智能体工具安全地推广到组织内 | **把构建成果作为团队可访问的内网 URL 提供服务** |
| 一般的终点 | 经评审后合并进 Git 的改动 | **可共享、可交接、正在实际运行的内网服务** |
| AI 模型成本 | 用量追踪、账号切换 | **基于难度的自动路由 + 子智能体委派 —— 组织整体实测节省 49%** |
| 触达范围 | 主要是开发者 | **公司的全体成员** —— 开发者、产品经理、运维人员 |

两款产品在并行智能体、worktree、远程执行和本地优先安全性上是重叠的，
所以这些都不是你该做选择的依据。Saycode 在此之上增加的是一层**运营层**：

- **公司所有权** —— 项目、会话、规划文档和机器归属于组织，而不是个人笔记本电脑。
  即使负责人离职或调岗，成果依然可搜索、可交接。
- **内网部署** —— 一键部署到固定的内网 URL（自动 SSL）。产出的不是一个
  等待评审的分支，而是团队今天就能打开使用的真实工具。
- **共享与交接** —— 同事可以浏览、克隆、打磨并把改动合并回去。
  别的团队完成的项目是一个起点，而不是需要重新制作的对象。
- **成本运营** —— 按请求难度自动路由到最便宜的适用模型（只有会话真正卡住时才升级到更高层级），
  机械性的子任务会委派给使用轻量模型的子智能体，
  而这一切都运行在集中管理的组织共用机器之上。
  每条消息都会用徽章标明选择了哪个模型、为什么选择它。公司整体的 AI 成本
  由"查看"变为"运营"。

**什么时候该用哪个：** 如果你的目标是在自己的代码仓库中获得最深度的并行智能体编码体验，
Agent IDE 也是不错的选择 —— 而且没有理由不能两者兼用。如果你的目标是让 AI 构建的
软件成为**公司的基础设施** —— 部署在内网、跨团队共享、经得起人员交接、成本还可控 ——
那正是 Saycode 要解决的问题。

---

## 核心功能

<table>
<tr>
<td width="42%" valign="middle">

### 🧭 安装即可开始 —— 无需账号，无需配置

打开 DMG，选择语言，就完成了。Saycode 会**自动启动内置服务器，把这台 Mac
注册为本地机器，并直接带你进入 Guest 本地工作区** —— 没有登录界面，也没有
演示按钮。随后的**三步向导**会检查 Saycode CLI（应用内置的本地运行时）、
Claude Code / Codex 的登录状态和通知声音，并直接引导你添加第一个项目。
中继、数据库，乃至每一个字节的数据都留在你的 Mac 上，不会有任何内容
发往互联网。需要团队功能时，再登录即可。

</td>
<td><img src="docs/assets/first-run-onboarding.gif" alt="首次启动：选择语言 → 内置服务器自动启动 → 三步向导 → 添加第一个项目" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🗣️ 一句话，就能变成能运行的应用

用语言（也支持语音输入）描述你想要的东西。智能体会确定方向，
在真实机器上编写真正的代码，并把文件修改、终端命令、测试运行等每一步
都以流式卡片透明地展示出来。一轮结束后，输入框会**主动建议下一步可以做的请求** ——
比如 *"添加 GitHub 远程仓库并创建 PR"*。

</td>
<td><img src="docs/assets/build-by-chat.gif" alt="对话式构建" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🧱 模板库 —— 从已经能运行的应用开始

在**新建项目 → 模板**中选择内网仪表盘、问卷表单、API 后台管理等
经过验证的 Vite + React + TypeScript 模板。项目创建的同时，**第一条提示词
会自动填入输入框**，智能体会接着执行 `npm install` → `npm run dev` →
在浏览器中查看。空白项目、Git URL 克隆、ZIP/文件夹导入也都在同一个对话框中完成。

</td>
<td>
<img src="docs/assets/template-gallery.png" alt="新建项目对话框中的模板库" /><br/>
<img src="docs/assets/template-run.gif" alt="创建模板项目后，预填的第一条提示词让智能体一路执行到运行起来" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 💸 模型自动选择 —— 单次请求最多节省 ~90%

把模型设为 **Default**，Saycode 就会在每一轮对话中挑选最合适的大脑。
修正错别字交给轻量模型（**节省 ~90%**），日常工作交给中等模型（**节省 ~80%**），
真正棘手的问题交给顶级模型 —— 只有当会话真正卡住时，才会升级到最强的档位。
每条消息都带有 *"⚡ 自动选择 · Sonnet 5 · medium · 节省 ~80%"* 这样的透明度徽章，
会话头部则会汇总累计节省率，如 *"自动选择 2 轮 · 平均节省 ~65%"*。
如果你更希望自己掌控，也可以直接锁定 Fable 5 · Opus 5 · Sonnet 5 · Haiku 4.5，
并自行指定 effort。

</td>
<td><img src="docs/assets/auto-route-badges.png" alt="同一会话中，简单轮次自动路由到 Sonnet 5(节省 ~80%)，评审/提交轮次路由到 Opus 5(节省 ~50%)的徽章" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🗂️ 智能体面板 —— 用看板指挥你的智能体舰队

所有项目的所有智能体会话都汇总在一块面板上：**等待输入 → 响应中 → 等待
→ 评审中 → 已完成 → PR Merged**。响应中的卡片会实时显示智能体正在说的内容。
**拖动卡片**即可发送下一条指令、请求代码评审、归档会话 —— **Commit & PR**、
**合并 PR**，以及 CI 失败时的**先自动修复**都能直接在卡片上执行。
自动选择帮你节省的成本会按日/周/月汇总在小组件中。

</td>
<td>
<img src="docs/assets/agent-board.gif" alt="智能体面板看板：会话随着进展在各列之间移动" /><br/>
<img src="docs/assets/board-drag-review.gif" alt="把卡片拖到评审中列，会弹出代码评审请求确认对话框" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 👀 浏览器面板 —— 选中界面元素，直接修改

在聊天旁边分屏打开**浏览器面板**，就能看到在你机器上真实运行的应用。
切换桌面 / 平板 / 移动端视口预设，进入**元素选择模式**后点击界面上的
按钮或卡片，该元素的选择器就会附加到聊天中 —— 只需一句
*"把这个按钮改成蓝色"*，智能体就会修改代码，并通过 HMR 在同一个面板中
立刻看到结果。

</td>
<td>
<img src="docs/assets/browser-panel.png" alt="在聊天旁的浏览器面板中查看 localhost:5173 应用" /><br/>
<img src="docs/assets/element-to-chat.gif" alt="选择元素 → 选择器附加到聊天 → 修改 → 通过 HMR 立即生效" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🧩 按你想要的方式布局工作区

使用标签页旁的**分屏**按钮或快捷键（⌘⌥T 打开终端，⌘⌥C 打开聊天），
在任意面板旁分出新的聊天、终端、浏览器或文件窗格，并通过拖动调整大小。
你可以实时看到 Claude 在一个窗格里思考，Codex 在另一个窗格里给出结果。
还可以把任务**扇出**给多个智能体，或把会话**交接**给另一个智能体。

</td>
<td><img src="docs/assets/workspace-split-terminal.png" alt="聊天 + 浏览器 + 终端三分屏工作区" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 💻 远程机器上的真实终端

在任意已注册的机器上，将真实的 Shell 停靠在聊天正下方打开。这是连接到
那台机器的真正端到端加密会话 —— 你可以照常运行构建、查看日志、检查 git 状态，
而上方的智能体仍在继续工作。终端在切换标签页后依然存活，并会自动重连。

</td>
<td><img src="docs/assets/remote-terminal.gif" alt="在连接到会话 worktree 的远程终端中执行 git 命令" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🤖 保留你喜欢的智能体，每个会话独立 worktree

在每个会话中自由选择 **Claude Code(Anthropic)、Codex(OpenAI)、Grok(xAI)、opencode**，
并控制模型和 effort。打开新对话时开启 **Worktree** 选项，就会创建会话专属的
分支和隔离的工作文件夹，让实验不会影响 main 分支 —— 会话头部的分支徽章
始终显示你正在哪里工作。也可以从已有的 PR 启动会话，或把在外部创建的
worktree 导入 Saycode。

</td>
<td>
<img src="docs/assets/new-session-options.png" alt="新建对话：选择智能体、模型和 effort" /><br/>
<img src="docs/assets/new-session-worktree.png" alt="按会话隔离的 git worktree 选项" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### ✅ 工作完成 —— 先评审，再 Commit & PR

一个**工作完成**按钮就能妥善收尾一个会话。可以让当前智能体自行评审改动，
也可以把**只读快照交给独立评审者** —— 一个无法接触代码、只负责报告发现问题的
独立智能体（Claude、Codex 等）。采纳你认可的修复后，直接继续 **Commit & PR**：
评审 → 测试 → 提交 → push → 创建 PR（如果远程不是 GitHub，会提示这一点，
并只执行到提交和 push）一轮之内全部完成。

</td>
<td>
<img src="docs/assets/work-completion-hub.png" alt="工作完成中心：当前智能体评审、委派给独立评审者、直接进行 Commit &amp; PR" /><br/>
<img src="docs/assets/commit-pr.gif" alt="一轮完成 Commit &amp; PR：评审 → 提交 → push → PR" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🔎 全文搜索所有对话，⌘P 跳转到任意位置

按下 **⌘⇧F**，即可搜索你和智能体之间的所有对话 —— 标题、提示词、回复 ——
搜索基于永不离开你机器的本地 SQLite FTS5 索引。可以用 `project:web`、
`role:agent`、`after:2026-07-01`、`"精确短语"` 等过滤条件缩小范围。
**⌘P Quick Open** 可以在一个输入框中直接打开项目、对话和文件；
**⌘K** 则可以跨项目、对话和机器进行搜索。

</td>
<td>
<img src="docs/assets/conversation-search.png" alt="对话搜索 (⌘⇧F)" /><br/>
<img src="docs/assets/quick-open.png" alt="Quick Open (⌘P)" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 📊 用量一目了然，账号一键切换

点击会话头部的用量徽章，即可查看按机器划分的 **Claude · Codex · Grok**
剩余用量（5 小时 / 7 天窗口）。连接多个 Claude 账号后，在列表中
**点一下即可切换** —— 即使某个账号额度用完，工作也不会中断。查询每台机器
每 5 分钟才进行一次，不会给服务商的 API 带来负担。

</td>
<td><img src="docs/assets/machine-usage.png" alt="按机器显示的 Claude/Codex 用量与账号切换弹窗" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🧠 系统提示词 · 记忆 · 扩展

在**偏好设置 → AI → 系统提示词**中，可以逐项开关 Saycode 的默认指令
（子智能体调用、内部任务委派、先规划后执行的工作流、提交积分、
产出内联预览），也可以叠加预设（TypeScript · Tailwind · Korean · Minimal · Full-stack）
或你自己的指令。**Memory** 标签页管理智能体跨会话记住项目上下文的记忆层，
**扩展** 标签页管理模板包等扩展和技能。

</td>
<td>
<img src="docs/assets/settings-system-prompt.png" alt="系统提示词设置：默认指令逐项开关与预设" /><br/>
<img src="docs/assets/settings-extensions.png" alt="扩展管理" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 📱 装进口袋也能继续使用

用 Saycode 移动端应用扫描**偏好设置 → 设备 → 移动连接**中的二维码，
同一个工作区就会原样在手机上打开 —— 本地模式在同一网络内，跨网络则通过隧道连接。
你可以实时观看智能体会话、打开远程终端，并在长任务完成的瞬间收到推送通知。

</td>
<td><img src="docs/assets/mobile-companion.png" alt="移动连接：通过二维码在手机上打开同一个工作区" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🖥️ 注册你的机器，在代码所在之处运行智能体

这台 Mac 在首次启动时会自动注册。你还可以在这里注册任何自己管理的
机器 —— GPU 服务器、构建服务器、云端 VM —— 把智能体的工作交给它们。
在**偏好设置 → 设备 → 机器**中生成注册码，在目标机器上运行显示出来的
一行命令，几秒钟后它就会显示为**在线**。此后，每个项目都能选择
在哪台机器上运行。智能体的读、写、构建、运行全部发生在**你自己的基础设施上**，
紧挨着代码和数据 —— 而不是别人的云端。

</td>
<td>
<img src="docs/assets/settings-machines.png" alt="偏好设置 → 设备 → 机器：已注册的本地机器与添加机器" /><br/>
<img src="docs/assets/register-machine-panel.png" alt="注册机器：CLI 安装命令与 Personal/Organization 注册码" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🚀 一键部署与共享 *(团队工作区)*

使用 saycode.ai 账号登录后，可以部署到整个团队都能打开的**内网 URL** ——
SSL 自动配置，每次部署都会更新同一个链接。把项目共享给团队或内部社区后，
同事可以浏览、克隆并打磨，再安全地把改动合并回原项目。渲染后的 HTML 文档 /
报告可直接发布为公开链接。**只需打开已部署应用或报告 URL 的最终使用者，
不需要坐席。**

</td>
<td><img src="docs/assets/login-modal.png" alt="saycode.ai 登录：切换到团队工作区" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🏢 组织控制台统一管控 *(团队工作区)*

组织管理控制台可以邀请成员、变更角色（管理员/成员）或移除成员，还能查看
审计日志——谁在何时打开过哪个项目。同一控制台还能注册组织级 MCP 服务器、
GitHub PAT 和共用 AI 账号，团队成员无需各自管理密钥。**偏好设置 → 安全**
中的全局暂停开关是团队专属的紧急停止按钮，会立即暂停下一次计划自动化、
GitHub 触发器和看板自动驾驶的执行。

</td>
<td>
<img src="docs/assets/org-console.png" alt="组织管理控制台：成员管理与审计日志" /><br/>
<img src="docs/assets/settings-security.png" alt="偏好设置 → 安全：全局暂停与 GitHub Personal Access Token" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🌙 让你想一直留下来的工作区

Auto / Light / Dark 主题下的极光玻璃设计 —— 信息密度高，画面却很沉静。
通知中心、可重新绑定的所有快捷键、Dock 角标与原生完成通知，
还有输入请求、任务完成的提示音。细节的积累，成就了体验。

</td>
<td>
<img src="docs/assets/workspace-home-dark.png" alt="深色模式下的工作区主页" /><br/>
<img src="docs/assets/chat-dark.png" alt="深色模式下的聊天" />
</td>
</tr>
</table>

### 还有更多

- 🔔 **通知中心与出站 Webhook** —— 完成通知在重启后依然保留，点击即可跳转到对应对话。会话完成、等待输入、卡住等事件会带上 HMAC-SHA256 签名发送到你的端点
- 💬 **diff 行内评论** —— 直接在改动的代码行上评论，并整理成后续指令发送给智能体
- ⌨️ **斜杠命令与附加菜单** —— 在输入框中用 `/` 调用命令，拖拽文件、图片、文件夹即可附加
- 🎙️ **实时语音输入** —— 边说边实时转写
- 📄 **富文件预览** —— Markdown、HTML、PDF、DOCX 直接在应用内渲染，支持产出内联预览
- 🔗 **GitHub / GitLab 导入与连接器** —— 从列表中选择仓库，把 Google Drive、Slack、Notion 等连接器连接到会话 *(团队工作区)*
- 🧩 **MCP 服务器与环境变量分组** —— 按项目管理 MCP 连接，挂载组织统一管理的环境变量分组
- 🛑 **全局暂停与质量门禁** —— 一个开关即可暂停定时自动化、GitHub 触发器和面板自动驾驶，为自主执行套用自评审轮次与质量门禁 *(团队工作区)*
- 🔐 **通行密钥 MFA** —— 团队账号登录支持 WebAuthn 通行密钥或 TOTP
- 📉 **网络流量节省** —— 在热点或按流量计费的网络下自动降低繁重同步
- 🔒 **隐私优先设计** —— 聊天与终端流量端到端加密，代码和数据保留在你的机器上
- 🏢 **组织级管控** —— 组织/团队工作区，坐席、机器、环境变量、所有权管理，审计日志 *(团队工作区)*
- 🔄 **分阶段自动更新** —— 新版本从部分安装实例开始逐步发布，即使出问题也不会波及所有人

---

## 工作原理

| | | |
|---|---|---|
| **01 · 安装即可就绪** | **02 · 添加项目** | **03 · 用语言提出请求** |
| 打开 DMG，选择语言，内置服务器随即启动，这台 Mac 会被注册为本地机器。三步向导会检查 CLI、AI 工具和通知。 | 打开已有文件夹、使用模板、新建空白项目、克隆 Git URL、导入 ZIP —— 选台机器、起个名字即可。 | 一句自然语言就够了：*"给请求表添加负责人列，并填入测试数据"* |

| | |
|---|---|
| **04 · AI 在你的机器上构建** —— 智能体读写真实文件、执行命令，并将整个过程流式展示。在浏览器面板中直接点击体验，选中元素即可修改。 | **05 · 收尾并部署给团队** —— 用工作完成执行评审 → Commit & PR。团队工作区下，一个按钮即可签发内网 URL。共享、交接、一起持续改进。 |

<div align="center">
<img src="docs/assets/first-session-done.png" alt="首个会话：智能体添加了负责人列并汇报结果的界面" width="920" />

*首个会话 —— 一句请求，智能体就修改文件、运行类型检查并汇报结果。*
</div>

---

## 安装与首次启动

### macOS (Apple Silicon)

1. 从 **[Releases](https://github.com/buzzni/saycode-desktop-releases/releases/latest)** 下载最新 DMG
2. 打开 DMG，把 **Saycode** 拖入 Applications
3. 启动后选择**语言**（한국어 · English · 中文 · 日本語）
4. 就这么简单。Saycode 会启动内置服务器并注册这台 Mac，打开 **Guest 本地工作区**
   （大约 10 秒）。没有登录界面 —— 需要团队功能时，随时通过 **Guest 菜单 →
   登录**即可。

### 一起为第一个任务做好准备 —— 三步向导

<table>
<tr>
<td width="33%"><img src="docs/assets/onboarding-step1-cli.png" alt="① Saycode CLI" /></td>
<td width="33%"><img src="docs/assets/onboarding-step2-ai-tools.png" alt="② AI 工具" /></td>
<td width="33%"><img src="docs/assets/onboarding-step3-notifications.png" alt="③ 通知" /></td>
</tr>
<tr>
<td valign="top"><b>① Saycode CLI</b> — 检查应用内置的本地运行时。Standalone 应用无需额外安装，会直接显示为<i>已安装</i>。</td>
<td valign="top"><b>② AI 工具</b> — 检测 Claude Code 和 Codex 的登录状态。如果尚未登录，请在终端中依次执行 <code>claude</code> → <code>/login</code>、<code>codex login</code>，然后点击<b>重新检查状态</b>。</td>
<td valign="top"><b>③ 通知</b> — 选择输入请求提示音和任务完成提示音，并通过<b>发送测试通知</b>确认。最后一个按钮会直接带你进入添加第一个项目。</td>
</tr>
</table>

每个步骤都可以用**稍后再说**跳过，并可以随时通过**偏好设置 → 设备 → 机器 →
继续启动设置**重新打开。

### 第一个项目与第一次对话

<table>
<tr>
<td width="50%"><img src="docs/assets/first-project-dialog.png" alt="添加项目对话框" /></td>
<td width="50%"><img src="docs/assets/system-prompt-choice.png" alt="是否使用 Saycode 默认指令" /></td>
</tr>
<tr>
<td valign="top">向导结束后会打开<b>添加项目</b>。选择主机（机器）并<b>打开已有文件夹</b> —— 或者选择新建项目 · 从 Git URL 克隆 · 导入 ZIP。新项目可以从模板库开始。</td>
<td valign="top">打开第一次对话时会询问是否使用<b>Saycode 默认指令</b>。开启后，智能体会遵循子智能体委派、提交积分、产出内联预览等 Saycode 工作流。之后也可以在偏好设置中逐项调整。</td>
</tr>
</table>

应用已通过 Developer ID 签名并公证，会自动更新。
若想查看每一步的详细截图，请参阅**[用户指南](docs/GUIDE.md)**（[한국어](docs/GUIDE.ko.md)）。

### 本地工作区与团队工作区

| | Guest 本地工作区（默认） | 团队工作区（saycode.ai 登录） |
|---|---|---|
| 所需条件 | 无 —— 安装即可 | 组织账号（SSO · 通行密钥/TOTP MFA） |
| 数据位置 | 全部在这台 Mac 上 | 代码与数据在指定机器上，元数据与审计日志在组织控制台 |
| 智能体 · 模型自动选择 · 智能体面板 · worktree · 工作完成 · 浏览器面板 · 终端 · 模板 · 搜索 · 记忆 | ✅ | ✅ |
| 远程机器注册 · 移动连接 | ✅（移动端需同一网络或通过隧道） | ✅ |
| 内网 URL 部署 · 项目共享与交接 · 社区 | — | ✅ |
| 组织控制台（坐席 · 权限 · 模型策略 · 成本 · 审计日志） · 连接器 · 个人记忆同步 · 项目导出 | — | ✅ |

先从本地开始，需要时再登录即可。本地项目会原样保留。

> **Windows / Linux / Intel Mac** —— 目前仍在准备中。请关注 [Releases](https://github.com/buzzni/saycode-desktop-releases/releases) 获取最新消息。

---

## 导入场景 —— 从哪里开始由客户决定

这三种场景不是先后顺序，而是可选项。可以从其中一种开始，也可以组合使用。

| 💬 聊天与文档 | ⚙️ 个人业务自动化 | 🚀 应用构建与部署 |
|---|---|---|
| 会议纪要总结、企划书/报告初稿、搜索与摘要。只使用经批准的用户和模型，按组限制可用模型，并汇总用量与成本。 | 与内部协作工具、文档存储连接，自动化生成周期性报表、协助请求/审批流程等重复性工作。 | 业务部门自行构建内部工具并部署到内网 URL，覆盖成果审阅、审批流程。 |

**即使不是开发者，从第一周起也能使用** —— 经营支持（会议纪要、月度报告初稿、
政策问答）、销售与市场（提案初稿、VOC 分类）、电商运营（商品/价格/库存检查报告）、
人力与总务（规章说明、请求/审批流程、入职资料）——从目前靠手工、Excel、
即时消息处理的重复性工作开始。成果以链接形式共享，无需在消息软件中来回传附件
就能完成审阅。

---

## 面向团队的 Saycode

### 用一个月免费 PoC 先看数据

针对客户选定的场景实测用量、成本、策略和审计，并一起制作出
导入决策所需的结果报告。**PoC 期间可以照常使用 Premium 坐席的全部功能。**

| 第 1 周 · 基线 | 第 2-3 周 · 实际使用 | 第 4 周 · 结果报告 |
|---|---|---|
| 测量当前 AI 使用与成本基线，选定目标部门与 PoC 场景 | 应用于实际业务，实测用量与成本，验证策略与权限设置 | 汇总激活率、成本、策略执行结果，产出正式导入报价 |

PoC 期间一个月免费。期间产生的模型使用费用按客户自身合约计算。

### 价格 —— 只为亲自构建的人设坐席

这不是转售 AI 模型的工具。直接连接你现有的 AI 合约，
只为管理与执行环境收取坐席费用。

| 方案 | 价格 | 适用对象 | 包含内容 |
|---|---|---|---|
| **Office** | $10 / 人·月 | 面向以聊天与文档为主的全体员工 | 聊天与文档工作 · 成果查看/审阅/审批 · 用量仪表盘 |
| **Premium** ⭐ | $40 / 人·月 | 面向亲自构建并部署的一线人员 | Office 的全部功能 + 应用构建/智能体执行 · 内网 URL 部署 · SSO 集成 |
| **批量导入** | 按规模协商 | 全公司导入 · 特殊需求 | 全公司规模的单价 · 私有化部署/隔离网络配置 · 专属支持与 SLA |

- **AI 模型加价 0%** —— 直接连接你现有的 Anthropic、OpenAI、Azure、Bedrock、Vertex 合约。月度总成本 = 坐席费 + 外部 AI 订阅费 + API 使用费。
- **只需打开已部署应用或报告 URL 的最终使用者，不需要坐席。** 坐席为实名制，不共享账号。
- 可以设置预算上限和阈值提醒，超出上限时自动停止。
- 当前导入活动期间无初始配置费用。

- 🌐 官网：**[saycode.ai](https://saycode.ai)** · 介绍资料：**[saycodepoc.apps.saycode.ai](https://saycodepoc.apps.saycode.ai/)**
- 💼 导入咨询：[soo@buzzni.com](mailto:soo@buzzni.com)
- 🛠 技术咨询：[ryan@buzzni.com](mailto:ryan@buzzni.com)
- 🤝 客户支持：[ernie@buzzni.com](mailto:ernie@buzzni.com)

---

## 开源声明

Saycode Desktop 构建于开源软件之上。以下项目被打包或使用在其中
（已标注许可证），完整的许可证全文包含在打包后的应用中：

| 项目 | 用途 | 许可证 |
|---|---|---|
| [Happy](https://github.com/slopus/happy) (经由 [buzzni 分支](https://github.com/buzzni/happy)) | 独立模式中打包的加密智能体会话中继引擎 (`happy-cli` / `happy-server`) | MIT |
| [Electron](https://www.electronjs.org/) | 桌面应用外壳 | MIT |
| [React](https://react.dev/) | UI 框架 | MIT |
| [xterm.js](https://xtermjs.org/) (+ fit / web-links / WebGL 插件) | 远程终端渲染 | MIT |
| [socket.io-client](https://socket.io/) | 实时传输 | MIT |
| [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) | 聊天 Markdown 渲染 | MIT |
| [electron-updater](https://www.electron.build/) | 应用内自动更新 | MIT |
| [buffer](https://github.com/feross/buffer) | 二进制工具库 | MIT |
| [lucide-react](https://lucide.dev/) | 图标库 | ISC |
| [TweetNaCl.js](https://tweetnacl.js.org/) | 端到端加密原语 | Unlicense（公有领域） |

特别感谢 Kirill Dubovitskiy 及其贡献者们的
**[slopus/happy](https://github.com/slopus/happy)**（MIT），它是 Saycode
加密会话同步架构的基石。

---

<div align="center">

**© 2026 [Buzzni](https://buzzni.com) · [saycode.ai](https://saycode.ai)**

*让公司里的每个人，说出来就能做出来。*

</div>
