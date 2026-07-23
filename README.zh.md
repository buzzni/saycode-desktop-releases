<div align="center">

<img src="docs/assets/icon.png" alt="Saycode" width="110" />

# Saycode Desktop

### 说出来，就变成软件。

**面向企业的氛围编程 (Vibe Coding) 工作台** — 用自然语言描述你想要的东西,
AI 智能体负责规划、构建、实时预览,并交付给你的团队。

[![Latest release](https://img.shields.io/github/v/release/buzzni/saycode-desktop-releases?label=Download&color=6d5df6)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/buzzni/saycode-desktop-releases/total?color=22c55e)](https://github.com/buzzni/saycode-desktop-releases/releases)
[![Platform](https://img.shields.io/badge/macOS-Apple%20Silicon-111?logo=apple)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)
[![Website](https://img.shields.io/badge/saycode.ai-visit-0ea5e9)](https://saycode.ai)

[English](README.md) | [한국어](README.ko.md) | **中文** | [日本語](README.ja.md)

<br/>

### [⬇️ 下载 macOS 版 (Apple Silicon)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)

*已签名并公证的 DMG · 内置自动更新*

**第一次使用？** 跟着**[📘 分步用户指南](docs/GUIDE.md)**（暂只提供英文 / 한국어）操作 —
从首次启动到指挥整支智能体舰队。

<br/>

<img src="docs/assets/build-by-chat.gif" alt="在 Saycode 中与 AI 智能体聊天构建应用" width="920" />

*输入一句话,得到一个能运行的应用 — 真实、未剪辑的会话录屏。*

</div>

---

## 为什么选择 Saycode？

你的团队早已在用 ChatGPT 和 Claude 提升效率 — 但成果散落在个人电脑上,
公司既无法管控也无法共享。Saycode 把个人的氛围编程升级为
**全公司可以管控、共享、协作的一套系统**:

| | 一般的氛围编程工具 | **Saycode** |
|---|---|---|
| 内网部署 | 外部云 / 手动操作 | **一键部署到内网 URL (自动 SSL)** |
| 团队协作 | 一人一账号,个人作品到此为止 | **同事接手,共同修改与评审** |
| 共享与交接 | 散落在个人电脑上 | **公司统一管理,全团队直接复用** |
| 代码与数据 | 流向外部 | **留在公司内部 + 端到端加密 (E2EE)** |
| AI Token 成本 | 每次请求都用最贵的模型 | **基于难度的自动路由,单轮成本最高节省 ~90%** |
| 多智能体运行 | 一个个聊天窗口来回切换 | **看板式智能体面板一次指挥整支舰队** |
| 谁能构建 | 通常需要开发者 | **能描述需求的人都可以** |

“做出来”大家都差不多。**做出来之后 — 部署、共享、交接 — 才是 Saycode 的不同之处。**

---

## 核心功能

<table>
<tr>
<td width="42%" valign="middle">

### 🖥️ 注册你自己的机器 — 让智能体在代码所在之处运行

这是 Saycode 的核心。注册任何一台你掌控的机器 — 笔记本、GPU 服务器、构建服务器、云主机 —
然后把智能体的工作交给它。打开 **Settings → Machines → Register machine**,点击
**Generate code**,把生成的一行命令在目标机器上运行即可。几秒后它就会显示 **online**,
之后每个新项目都可以选择在哪台机器上运行。智能体的读写、构建、运行全部发生在
**你自己的基础设施上**,紧挨着你的代码和数据 — 而不是别人的云端。

</td>
<td>
<img src="docs/assets/register-machine.gif" alt="从 Settings → Machines 注册远程机器" /><br/>
<img src="docs/assets/register-machine-code.png" alt="为目标机器生成的一行注册命令 (密钥已打码)" />
<sub>生成的一行命令 — 在目标机器上运行,它就会上线。(本 README 中已对密钥和令牌打码。)</sub>
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🔌 独立模式 (Standalone) — 完全本地,零配置

没有账号?没关系。在登录界面点一下**本地专用模式 (Standalone)**,Saycode 就会启动
**自带的内置服务器**,注册你的机器,并在几秒内把你带进一个完整的工作区。中继、数据库、
你的每一个字节的数据都留在你的 Mac 上 — 不与互联网发生任何往来。对安全敏感的团队、
隔离网络环境,或者只是想在安装后一分钟内把 Saycode 的所有能力亲手跑一遍的人来说,
再合适不过。需要团队功能时,登录即可无缝继续。

</td>
<td><img src="docs/assets/standalone-mode.gif" alt="点击本地专用模式,内置服务器启动,完全本地的工作区随即打开" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🗣️ 一句话,变成能跑的应用

用自然语言输入(也支持语音)你想要的东西。智能体确定方向,在真实机器上编写真实代码,
并把每一步 — 文件修改、终端命令、测试运行 — 以流式卡片透明地展示出来。
看着你的想法在几分钟内变成软件,而不是几个迭代周期。

</td>
<td><img src="docs/assets/build-by-chat.gif" alt="聊天驱动的构建" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 💸 模型自动路由 — 单次请求最高节省 ~90%

将模型保持为 **Default**,Saycode 就会为每一轮对话挑选合适的模型。修正错别字这类任务会
路由到轻量模型(**节省 ~90%**),常规工作使用中等模型(**节省 ~80%**),真正棘手的问题
才交给顶级模型 — 只有当会话确实卡住时,才会升级到最强大(也最昂贵)的档位。每条消息都
带有透明度徽章 — *"⚡ Auto · Haiku 4.5 · ~90% saved"* — 会话头部会汇总节省总额,让你始终
清楚省了多少、为什么选择了这个模型。

</td>
<td><img src="docs/assets/auto-model-routing.gif" alt="自动模型路由:简单请求路由到低价模型,困难请求路由到顶级模型,并附带每轮节省徽章" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🗂️ 智能体面板 — 像看板团队一样指挥你的智能体舰队

跨所有项目的每一个智能体会话都汇总在一块看板上:**等待输入 → 响应中 → 空闲 → 评审中
→ 已完成 → PR 已合并**。流式卡片实时显示每个智能体正在说什么。**拖动卡片**即可发送下一条
指令、请求代码评审或归档会话 — 也可以直接在卡片上触发 **Commit & PR** 或**合并 PR**。
节省小组件按天、周、月追踪自动路由为你省下的成本。

</td>
<td><img src="docs/assets/agent-board.gif" alt="智能体面板看板:将会话卡片拖入评审列以请求代码评审" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 👀 实时预览,就在聊天旁边

点击**运行预览**,应用就在侧边面板中打开 — 不是模型图,而是真正运行在项目机器上的应用。
左边继续对话,右边点击体验你的真实产品。智能体一改代码,你立刻就能看到。

</td>
<td><img src="docs/assets/live-preview.gif" alt="实时预览侧边面板" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### ⚡ 几秒钟建好一个新项目

空白项目、Git 克隆或已有文件夹 — 选台机器、起个名字,就完成了。每个项目都自带
聊天会话、规划文档、预览、环境变量和智能体指令,任何东西都不会只留在某个人的脑子里。

</td>
<td><img src="docs/assets/new-project.gif" alt="新建项目流程" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🧩 在一个屏幕上指挥整支智能体舰队

一键把工作区分割成多个窗格和网格 — **Focus / Coding / Operate / Monitor / Compare**
预设瞬间重排布局。在一个窗格里看 Claude 思考,另一个窗格里看 Codex 交付。
侧边栏实时追踪每一个正在运行的智能体。

</td>
<td><img src="docs/assets/multi-session-grid.gif" alt="多会话网格工作区" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 💻 远程机器上的真实终端

在任何已注册的机器上打开一个实时 Shell,就停靠在聊天下方。这是通往那台机器的
真正端到端加密会话 — 跑构建、看日志、随手排查 — 与此同时,上方的智能体继续工作。
终端在切换标签后依然存活,并会自动重连。

</td>
<td><img src="docs/assets/remote-terminal.gif" alt="停靠在聊天下方、连接到已注册机器的远程终端" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🤖 带上你最喜欢的智能体

**Claude (Anthropic)、Codex (OpenAI) 和 opencode** — 一等公民支持,每个会话可切换,
还能控制模型与 effort。启动 **Multi-Agent** 让多个智能体从不同角度攻克同一任务,
或者给会话分配独立的 **git worktree**,让实验永远不会破坏 main 分支。

</td>
<td><img src="docs/assets/agent-picker.png" alt="智能体与模型选择器,含 Multi-Agent 与 Worktree 选项" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### ✅ 妥善收尾 — 先评审,再 Commit & PR

一个**工作完成**按钮就能妥善收尾一个会话。可以让当前智能体自行评审改动,也可以把
**只读快照交给独立评审者** — 另一个智能体(Claude、Codex 等)只负责报告问题,无法
接触你的代码。采纳你认可的修复后,直接继续 **Commit & PR**。评审历史和发现的问题都会
保留在会话中。

</td>
<td><img src="docs/assets/work-completion-hub.png" alt="工作完成中心:让当前智能体评审、请独立评审者审查,或直接继续 Commit &amp; PR" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🔎 全文搜索每一段对话

按下 **⌘⇧F**,搜索你和智能体说过的一切 — 标题、提示词、回复 — 由永不离开你机器的
本地 SQLite FTS5 索引驱动。可以将范围限定为*我的对话*或*整个组织*,并用
`project:web`、`role:agent`、`after:2026-07-01` 或 `"精确短语"` 等过滤条件缩小结果。

</td>
<td><img src="docs/assets/conversation-search.gif" alt="对话搜索:按下 Cmd+Shift+F,输入关键词,即可跳转到任意历史智能体对话" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 📋 与代码共存的规划文档

每个项目都有 **Planning** 标签页 — spec、plan、design 文档由智能体在工作中亲自阅读并更新。
“为什么这么做”在会话结束后依然留存,下一位同事(或下一个智能体)都能精准接续。

</td>
<td><img src="docs/assets/planning-docs.png" alt="Planning 文档标签页" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🚀 一键部署与共享

发布到全团队都能打开的内网 URL — SSL 自动配置,每次部署更新同一个链接。
把项目共享给团队或公司社区;同事可以浏览、克隆、打磨,并把修改安全地合并回来。

</td>
<td><img src="docs/assets/deploy-share.png" alt="已部署到内网 URL 的项目" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 📱 装进口袋随身带走

Saycode 移动端把同一个工作区放进你的口袋:实时观看智能体会话、打开远程终端、
查看预览,长任务一结束就收到推送通知。

</td>
<td><img src="docs/assets/mobile-companion.png" alt="Saycode 移动端伴侣应用" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🌙 一个让你想一直待着的工作区

极光玻璃 (Aurora Glass) 设计,支持 Auto / Light / Dark 主题 — 信息密度高,画面却安静。
语音输入、横跨聊天/项目/机器的 ⌘K 搜索、带 Dock 角标的原生完成通知 —
细节的积累,成就体验。

</td>
<td><img src="docs/assets/workspace-home-dark.png" alt="深色模式的工作区主页" /></td>
</tr>
</table>

### 还有更多

- 🧭 **引导式首次启动向导** — 检查内置服务器状态、自动检测 Claude/Codex 登录,并引导你完成第一个会话的清单
- 🔔 **通知中心** — 完成通知在重启后依然保留,分未读/已读标签,点击即可跳转到对应的对话
- 📊 **AI 用量仪表盘** — 按机器查看 Claude/Codex 剩余额度(5 小时与 7 天窗口),一键切换 Claude 账号
- ⌨️ **自定义快捷键与一键分屏** — 重新绑定任意按键;在任意面板旁分屏打开终端 (⌘⌥T) 或另一个聊天 (⌘⌥C),或右键点击标签页
- 🎙️ **实时语音输入与附件** — 在输入框中实时语音转文字,拖拽文件和图片即可添加
- 📄 **丰富的文件预览** — Markdown、HTML、PDF 和 DOCX 直接在应用内渲染
- 🔗 **GitHub / GitLab 导入** — 连接账号后,创建项目时可从列表中选择仓库
- 🧩 **MCP 服务器与环境变量分组** — 按项目管理 MCP 连接,以及组织统一管理的环境变量分组
- 🔒 **隐私优先的设计** — 聊天与终端流量端到端加密,代码和数据留在你的机器上
- 🌐 **个人与组织机器** — 既可注册在自己账号下,也可在整个组织内共享机器
- 🧠 **记忆层** — 智能体跨会话记住项目上下文
- 🏢 **组织级管控** — 组织/团队工作区、机器注册表、环境变量、可审计的所有权
- 📱 **移动推送** — 桌面任务完成时,手机立刻收到通知

---

## 工作原理

| | | |
|---|---|---|
| **01 · 注册机器** | **02 · 说出需求** | **03 · AI 在你的机器上构建** |
| 把生成的一行命令在笔记本、GPU 服务器或构建服务器上运行,几秒即上线。 | 一句自然语言就够了: *“帮我做一个物资采购申请管理后台”* | 智能体在**你选择的机器上**读写真实文件、执行命令,并流式展示每一步。 |

| | |
|---|---|
| **04 · 即时预览** — 旁边的面板立刻显示真正运行的界面,构建过程中就能亲手点一点。 | **05 · 部署给团队** — 一键生成内网 URL;共享、交接、一起迭代。 |

<div align="center">
<img src="docs/assets/live-preview-final.png" alt="左侧是智能体会话,右侧预览面板中是真正运行的应用" width="920" />

*左边智能体在工作 — 右边你的真实应用在运行。*
</div>

---

## 安装

### macOS (Apple Silicon)

1. 从 **[Releases](https://github.com/buzzni/saycode-desktop-releases/releases/latest)** 下载最新 DMG
2. 打开 DMG,把 **Saycode** 拖入 Applications
3. 启动后选择界面语言,并选择开始方式:
   - 使用 saycode.ai 账号**登录** (团队工作区)
   - **Demo workspace** — 无需账号,立即体验
   - **本地专用模式 (Standalone)** — 内置服务器的完全本地环境
4. **首次启动清单**会检查你的环境(服务器状态、Claude/Codex 登录),并带你进入第一个会话。

应用已通过 Developer ID 签名与公证,并会自动更新。
完整的分步截图说明,请参阅**[用户指南](docs/GUIDE.md)**(暂只提供英文 / 한국어)。

> **Windows / Linux / Intel Mac** — 尚未提供。请关注 [Releases](https://github.com/buzzni/saycode-desktop-releases/releases) 获取平台更新。

---

## 面向团队的 Saycode

Saycode 为想要**可管控的**氛围编程的公司而生 — 组织级的权限与所有权、
注册制的执行机器、仅限内网的部署,以及可评审的协作。

| 方案 | 适用 | |
|---|---|---|
| **Free PoC** | 采购前免费验证 — 含示例项目搭建支持 | [联系我们](mailto:soo@buzzni.com) |
| **Enterprise** | 团队协作 · 私有化部署 · 权限/审计/部署运营 | [联系我们](mailto:soo@buzzni.com) |

- 🌐 官网: **[saycode.ai](https://saycode.ai)**
- 💼 商务咨询: [soo@buzzni.com](mailto:soo@buzzni.com)
- 🛠 技术咨询: [ryan@buzzni.com](mailto:ryan@buzzni.com)
- 🤝 客户支持: [ernie@buzzni.com](mailto:ernie@buzzni.com)

---

## 开源致谢

Saycode Desktop 构建于开源软件之上。我们打包并感激地使用了以下项目
(标注许可证;完整许可证文本随打包应用一同分发):

| 项目 | 用途 | 许可证 |
|---|---|---|
| [Happy](https://github.com/slopus/happy) (经由 [buzzni 分支](https://github.com/buzzni/happy)) | 独立模式内置的加密智能体会话中继引擎 (`happy-cli` / `happy-server`) | MIT |
| [Electron](https://www.electronjs.org/) | 桌面应用外壳 | MIT |
| [React](https://react.dev/) | UI 框架 | MIT |
| [xterm.js](https://xtermjs.org/) (+ fit / web-links / WebGL 插件) | 远程终端渲染 | MIT |
| [socket.io-client](https://socket.io/) | 实时通信 | MIT |
| [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) | 聊天 Markdown 渲染 | MIT |
| [electron-updater](https://www.electron.build/) | 应用内自动更新 | MIT |
| [buffer](https://github.com/feross/buffer) | 二进制工具库 | MIT |
| [lucide-react](https://lucide.dev/) | 图标库 | ISC |
| [TweetNaCl.js](https://tweetnacl.js.org/) | 端到端加密原语 | Unlicense (公有领域) |

特别感谢 Kirill Dubovitskiy 及众多贡献者的 **[slopus/happy](https://github.com/slopus/happy)** (MIT) —
它是 Saycode 加密会话同步架构的开源基石。

---

<div align="center">

**© 2026 [Buzzni](https://buzzni.com) · [saycode.ai](https://saycode.ai)**

*让公司里的每个人,说出来就能做出来。*

</div>
