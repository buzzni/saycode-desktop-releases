<div align="center">

<img src="docs/assets/icon.png" alt="Saycode" width="110" />

# Saycode Desktop

### 話せば、ソフトウェアになる。

**エンタープライズ向けバイブコーディング・ワークスペース** — 作りたいものを自然な言葉で伝えるだけで、
AI エージェントが企画し、作り、ライブでプレビューし、チームに届けます。

[![Latest release](https://img.shields.io/github/v/release/buzzni/saycode-desktop-releases?label=Download&color=6d5df6)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/buzzni/saycode-desktop-releases/total?color=22c55e)](https://github.com/buzzni/saycode-desktop-releases/releases)
[![Platform](https://img.shields.io/badge/macOS-Apple%20Silicon-111?logo=apple)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)
[![Website](https://img.shields.io/badge/saycode.ai-visit-0ea5e9)](https://saycode.ai)

[English](README.md) | [한국어](README.ko.md) | [中文](README.zh.md) | **日本語**

<br/>

### [⬇️ macOS 版をダウンロード (Apple Silicon)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)

*署名・公証済み DMG · 自動アップデート内蔵*

<br/>

<img src="docs/assets/build-by-chat.gif" alt="Saycode で AI エージェントとチャットしてアプリを作る" width="920" />

*一文を入力すると、動くアプリが出てくる — 編集なしの実際のセッション映像。*

</div>

---

## なぜ Saycode なのか？

社員はすでに ChatGPT や Claude で素早く働いています。しかし成果物は個人 PC に散らばり、
会社からは管理も共有もできません。Saycode は個人のバイブコーディングを、
**会社全体で管理・共有・協業できるひとつのシステム**に引き上げます:

| | 一般的なバイブコーディングツール | **Saycode** |
|---|---|---|
| 社内デプロイ | 外部クラウド / 手作業 | **社内 URL へワンクリックデプロイ (SSL 自動)** |
| チーム協業 | 1 人 1 アカウントで完結 | **同僚が引き継ぎ、共同で修正・レビュー** |
| 共有・引き継ぎ | 個人 PC に散在 | **会社が管理し、全チームがそのまま利用** |
| コードとデータ | 外部に流出 | **社内保管 + エンドツーエンド暗号化 (E2EE)** |
| 作れる人 | 基本的に開発者だけ | **作りたいものを説明できる人なら誰でも** |

作ること自体はどのツールも似ています。**その後 — デプロイ・共有・引き継ぎ — が違います。**

---

## 主な機能

<table>
<tr>
<td width="42%" valign="middle">

### 🖥️ 自分のマシンを登録 — コードのある場所でエージェントを動かす

これが Saycode の心臓部です。自分が管理するマシンなら何でも — ノート PC、GPU サーバー、
ビルドサーバー、クラウド VM — 登録して、エージェントの仕事を任せられます。
**Settings → Machines → Register machine** で **Generate code** をクリックし、表示される
ワンライナーを対象マシンで実行するだけ。数秒後には **online** になり、以後どのプロジェクト
でも実行マシンを選べます。エージェントの読み書き・ビルド・実行はすべて**あなたのインフラの上**、
コードとデータのすぐそばで行われます — 他人のクラウドではなく。

</td>
<td>
<img src="docs/assets/register-machine.gif" alt="Settings → Machines からリモートマシンを登録" /><br/>
<img src="docs/assets/register-machine-code.png" alt="対象マシン用に生成されたワンライナー登録コマンド (シークレットはぼかし済み)" />
<sub>生成されたワンライナー — 対象マシンで実行するとオンラインになります。(この README 用にシークレットとトークンはぼかしています。)</sub>
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🗣️ 一文から動くアプリへ

欲しいものを自然な言葉で入力(音声入力も対応)。エージェントが方向性を決め、実マシン上で
本物のコードを書き、ファイル編集・ターミナルコマンド・テスト実行まで、すべてのステップを
ストリーミングカードで透明に見せます。アイデアが数分でソフトウェアになるのを見守ってください。

</td>
<td><img src="docs/assets/build-by-chat.gif" alt="チャット駆動のビルド" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 👀 チャットのすぐ隣でライブプレビュー

**プレビュー実行**をクリックすると、サイドパネルにアプリが開きます — モックではなく、
プロジェクトのマシンで実際に動いているアプリです。左でチャットを続けながら、右で本物の
プロダクトをクリックして確かめられます。エージェントがコードを変えれば、即座に反映されます。

</td>
<td><img src="docs/assets/live-preview.gif" alt="ライブプレビューのサイドカー" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### ⚡ 新規プロジェクトは数秒で

空のプロジェクト、Git クローン、既存フォルダ — マシンを選んで名前を付けるだけ。
すべてのプロジェクトがチャットセッション・企画ドキュメント・プレビュー・環境変数・
エージェント指示を一緒に持ち歩くので、誰かの頭の中にしか残らないものはありません。

</td>
<td><img src="docs/assets/new-project.gif" alt="新規プロジェクト作成フロー" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🧩 エージェントの艦隊をひとつの画面で

ワンクリックで画面をペインやグリッドに分割 — **Focus / Coding / Operate / Monitor /
Compare** プリセットが瞬時にレイアウトを切り替えます。あるペインで Claude が考えている間に、
別のペインで Codex が成果を出す様子をリアルタイムで見られます。サイドバーは実行中の
エージェントを常に追跡します。

</td>
<td><img src="docs/assets/multi-session-grid.gif" alt="マルチセッションのグリッドワークスペース" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 💻 リモートマシン上の本物のターミナル

登録したどのマシンにも、チャットのすぐ下にドッキングされたライブシェルを開けます。
そのマシンへの本物のエンドツーエンド暗号化セッションなので、ビルドを回し、ログを追い、
あれこれ確認する — その間も上ではエージェントが働き続けます。ターミナルはタブを
切り替えても生きていて、自動で再接続します。

</td>
<td><img src="docs/assets/remote-terminal.gif" alt="登録済みマシンに接続され、チャットの下にドッキングされたリモートターミナル" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🤖 好きなエージェントをそのまま

**Claude (Anthropic)、Codex (OpenAI)、opencode** — セッションごとに切り替えられる
ファーストクラス対応で、モデルと effort も制御できます。ひとつのタスクを複数の角度から
攻める **Multi-Agent** 実行や、実験が main を壊さないようにするセッション別の
**git worktree** 分離もサポートします。

</td>
<td><img src="docs/assets/agent-picker.png" alt="エージェント・モデル選択と Multi-Agent、Worktree オプション" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 📋 コードと一緒に生きる企画ドキュメント

すべてのプロジェクトに **Planning** タブがあります — エージェントが作業しながら自ら読み、
更新する spec・plan・design ドキュメントです。「なぜこう作ったのか」がセッションの後も残り、
次の同僚も次のエージェントも、正確に続きから始められます。

</td>
<td><img src="docs/assets/planning-docs.png" alt="Planning ドキュメントタブ" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🚀 デプロイと共有はワンクリック

チーム全員が開ける社内 URL へデプロイ — SSL は自動、デプロイのたびに同じリンクが更新
されます。プロジェクトをチームや社内コミュニティに共有すれば、同僚が眺め、クローンして
磨き上げ、変更を安全に元へマージできます。

</td>
<td><img src="docs/assets/deploy-share.png" alt="社内 URL にデプロイされたプロジェクト" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 📱 ポケットの中でも続く

Saycode モバイルアプリが同じワークスペースをそのまま持ち歩きます: エージェントセッションを
リアルタイムで見守り、リモートターミナルを開き、プレビューを確認し、長い実行が終わった瞬間に
プッシュ通知を受け取れます。

</td>
<td><img src="docs/assets/mobile-companion.png" alt="Saycode モバイルコンパニオンアプリ" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🌙 ずっと居たくなるワークスペース

Auto / Light / Dark テーマのオーロラグラス・デザイン — 情報は濃く、画面は静かに。
音声入力、チャット・プロジェクト・マシンを横断する ⌘K 検索、Dock バッジ付きの
ネイティブ完了通知まで。ディテールの積み重ねが体験になります。

</td>
<td><img src="docs/assets/workspace-home-dark.png" alt="ダークモードのワークスペースホーム" /></td>
</tr>
</table>

### さらに

- 🔒 **プライバシー第一の設計** — チャット・ターミナルのトラフィックはエンドツーエンド暗号化、コードとデータは社内マシンに保管
- 🖥️ **スタンドアロンモード** — アカウントも外部インフラも不要、内蔵サーバーで 100% ローカル実行
- 🌐 **個人・組織マシン** — 自分のアカウントで登録することも、組織全体でマシンを共有することも可能
- 🧠 **メモリレイヤー** — エージェントがセッションを越えてプロジェクトの文脈を記憶
- 🏢 **組織レベルの統制** — 組織/チームワークスペース、マシンレジストリ、環境変数、所有権管理
- 🔔 **モバイルプッシュ** — デスクトップの実行が終わるとスマホに即通知

---

## 使い方の流れ

| | | |
|---|---|---|
| **01 · マシンを登録** | **02 · 言葉で依頼** | **03 · あなたのマシンで AI が製作** |
| 生成されたワンライナーをノート PC・GPU サーバー・ビルドサーバーで実行すれば、数秒でオンラインに。 | 自然な一文で十分: *「備品・購買リクエスト管理のバックオフィスを作って」* | エージェントが**選んだマシンの上で**実ファイルを読み書きし、コマンドを実行し、全工程をストリーミング。 |

| | |
|---|---|
| **04 · 即プレビュー** — 隣のパネルに本当に動く画面がすぐ表示。作られていく間も直接触れます。 | **05 · チームへデプロイ** — ボタンひとつで社内 URL を発行。共有し、引き継ぎ、一緒に育てましょう。 |

<div align="center">
<img src="docs/assets/live-preview-final.png" alt="左にエージェントセッション、右のプレビューサイドカーには実際に動くアプリ" width="920" />

*左でエージェントが働いている間 — 右では本物のアプリが動いています。*
</div>

---

## インストール

### macOS (Apple Silicon)

1. **[Releases](https://github.com/buzzni/saycode-desktop-releases/releases/latest)** から最新の DMG をダウンロード
2. DMG を開き、**Saycode** を Applications にドラッグ
3. 起動して開始方法を選択:
   - saycode.ai アカウントで**ログイン** (チームワークスペース)
   - **Demo workspace** — アカウントなしですぐ見て回れます
   - **ローカル専用モード (Standalone)** — 内蔵サーバーによる完全ローカル環境

アプリは Developer ID 署名・公証済みで、自動的にアップデートされます。

> **Windows / Linux / Intel Mac** — 現在準備中です。[Releases](https://github.com/buzzni/saycode-desktop-releases/releases) をご確認ください。

---

## チームのための Saycode

Saycode は**統制できる**バイブコーディングを求める企業のために作られました — 組織単位の
権限と所有権、登録済み実行マシン、社内限定デプロイ、レビュー可能なコラボレーションまで。

| プラン | 対象 | |
|---|---|---|
| **Free PoC** | 導入前の無料検証 — サンプルプロジェクト制作支援つき | [お問い合わせ](mailto:soo@buzzni.com) |
| **Enterprise** | チーム協業 · オンプレミス設置 · 権限/監査/デプロイ運用 | [お問い合わせ](mailto:soo@buzzni.com) |

- 🌐 ウェブサイト: **[saycode.ai](https://saycode.ai)**
- 💼 導入のご相談: [soo@buzzni.com](mailto:soo@buzzni.com)
- 🛠 技術的なお問い合わせ: [ryan@buzzni.com](mailto:ryan@buzzni.com)
- 🤝 カスタマーサポート: [ernie@buzzni.com](mailto:ernie@buzzni.com)

---

## オープンソースについて

Saycode Desktop はオープンソースの上に築かれています。以下のプロジェクトをバンドルまたは
使用しています(ライセンス併記。ライセンス全文はパッケージ版アプリに同梱):

| プロジェクト | 用途 | ライセンス |
|---|---|---|
| [Happy](https://github.com/slopus/happy) ([buzzni フォーク](https://github.com/buzzni/happy)経由) | スタンドアロンモードにバンドルされる暗号化エージェントセッション・リレーエンジン (`happy-cli` / `happy-server`) | MIT |
| [Electron](https://www.electronjs.org/) | デスクトップアプリシェル | MIT |
| [React](https://react.dev/) | UI フレームワーク | MIT |
| [xterm.js](https://xtermjs.org/) (+ fit / web-links / WebGL アドオン) | リモートターミナルのレンダリング | MIT |
| [socket.io-client](https://socket.io/) | リアルタイム通信 | MIT |
| [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) | チャットのマークダウン描画 | MIT |
| [electron-updater](https://www.electron.build/) | アプリ内自動アップデート | MIT |
| [buffer](https://github.com/feross/buffer) | バイナリユーティリティ | MIT |
| [lucide-react](https://lucide.dev/) | アイコンセット | ISC |
| [TweetNaCl.js](https://tweetnacl.js.org/) | エンドツーエンド暗号化プリミティブ | Unlicense (パブリックドメイン) |

Saycode の暗号化セッション同期アーキテクチャの土台となった Kirill Dubovitskiy と
コントリビューターの **[slopus/happy](https://github.com/slopus/happy)** (MIT) に、
特別な感謝を捧げます。

---

<div align="center">

**© 2026 [Buzzni](https://buzzni.com) · [saycode.ai](https://saycode.ai)**

*会社の誰もが、話すだけで作れるように。*

</div>
