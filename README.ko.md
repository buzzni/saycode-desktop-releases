<div align="center">

<img src="docs/assets/icon.png" alt="Saycode" width="110" />

# Saycode Desktop

### 말하면, 소프트웨어가 됩니다.

**회사 내 AI 구독과 API를 한 곳에서 관리하는 운영 레이어** —
팀이 이미 아는 최신 모델(Claude · Codex · Grok · opencode)을 그대로 쓰되,
계정·권한·모델 선택·비용·배포를 회사가 한 화면에서 관리합니다.
**관리는 한 화면에서, 비용은 절반으로.**

[![Latest release](https://img.shields.io/github/v/release/buzzni/saycode-desktop-releases?label=Download&color=6d5df6)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/buzzni/saycode-desktop-releases/total?color=22c55e)](https://github.com/buzzni/saycode-desktop-releases/releases)
[![Platform](https://img.shields.io/badge/macOS-Apple%20Silicon-111?logo=apple)](https://github.com/buzzni/saycode-desktop-releases/releases/latest)
[![Website](https://img.shields.io/badge/saycode.ai-visit-0ea5e9)](https://saycode.ai)

[English](README.md) | **한국어** | [中文](README.zh.md) | [日本語](README.ja.md)

<br/>

### [⬇️ macOS용 다운로드 (Apple Silicon)](https://github.com/buzzni/saycode-desktop-releases/releases/download/v0.1.41/Saycode-0.1.41-arm64.dmg)

*서명·공증된 DMG · 자동 업데이트 내장 · 계정 없이 바로 시작*

**처음이신가요?** **[📘 단계별 사용자 가이드](docs/GUIDE.ko.md)** ([English](docs/GUIDE.md))를 따라오세요 — 첫 실행부터 에이전트 함대 운영까지.

<br/>

<img src="docs/assets/build-by-chat.gif" alt="Saycode에서 AI 에이전트와 대화로 앱 만들기" width="920" />

*한 문장을 입력하면 동작하는 앱이 나옵니다 — 편집 없는 실제 세션 화면. 메시지마다 어떤 모델이 왜 선택됐는지 배지로 표시됩니다.*

</div>

<!-- release-notes:start -->
## 새로운 기능과 변경사항

- [최신 릴리스 노트](docs/releases/v0.1.41.ko.md)
- [전체 릴리스 기록](docs/releases/README.ko.md)
<!-- release-notes:end -->

---

## 왜 Saycode인가요?

직원들은 이미 ChatGPT와 Claude로 빠르게 일합니다. 하지만 구독과 API 계약은 부서·개인별로
흩어지고, 누가 어떤 모델을 얼마나 쓰는지 회사는 알 수 없습니다. **막으면 생산성이 멈추고,
열어두면 통제를 잃습니다.** 결과물은 개인 PC에 남았다가 퇴사와 함께 사라집니다.

Saycode는 **모델과 경쟁하는 제품이 아닙니다.** 팀이 이미 아는 최신 모델을 그대로 쓰되,
조직에 필요한 관리·보안·배포를 그 위에 더하는 **운영 레이어**입니다.

| | 개인이 직접 구독할 때 | **Saycode로 함께 쓸 때** |
|---|---|---|
| 계정·비용 | 개인별 결제·계정 파편화, 관리자는 사용량 확인 불가 | **같은 모델을 중앙 관리·감사·비용 통제 아래에서 사용** |
| 프롬프트·산출물 | 개인 계정에 귀속, 퇴사하면 소멸 | **조직 자산으로 축적 — 담당자가 바뀌어도 유지** |
| 모델 선택 | 하나의 모델에 종속, 더 나은 모델이 나와도 전환 곤란 | **요청별 최적 모델 자동 선택, 벤더 종속 없이 신모델 즉시 사용** |
| 코드·데이터 | 외부 클라우드로 나감 | **회사가 지정한 실행 머신에 상주 + 종단간 암호화(E2EE)** |
| 다중 에이전트 운영 | 채팅 창 하나씩 알트탭 | **칸반 에이전트 보드로 함대 전체를 한 화면에서 지휘** |
| 결과물 | 리뷰를 기다리는 브랜치 | **작업 마무리 → 리뷰 → Commit & PR → 사내 URL 배포** |

혼자 쓸 때는 직접 구독이 맞습니다. **조직이 함께 쓰는 순간, 필요한 것이 달라집니다.**

### 회사 관리자가 실제로 통제하는 네 가지

| | 무엇을 | 어떻게 |
|---|---|---|
| **누가 쓸 수 있나** | 계정·좌석 | 직원마다 계정을 주고 거둡니다. 회사가 가진 AI 구독이나 API를 누구에게 붙일지도 회사가 정합니다. 부서 이동·퇴사 시 즉시 회수. |
| **어떤 AI를 쓸 수 있나** | 모델·머신 정책 | 팀·머신별로 쓸 수 있는 AI를 골라 열어주고, 사람마다 예외를 둡니다. 회사 계정으로 한 번에 로그인(SSO). |
| **얼마나 쓰고 있나** | 사용량·비용 | 누가 얼마나 썼고 비용이 얼마 나갔는지 한 화면에서 봅니다. 예산 상한을 넘기 전에 알려주고, 넘으면 자동 중지. |
| **무슨 일이 있었나** | 감사 로그 | 누가 언제 무엇을 했는지 기록이 남습니다. 검색해서 파일로 내보낼 수 있습니다. |

### 우리가 먼저 도입해 측정했습니다

버즈니 개발 조직이 Saycode 위에서 개발·운영하며 실측한 결과입니다.

| **49%** | 단순 요청 **~90%** | 일상 작업 **~80%** |
|:---:|:---:|:---:|
| 월 AI 실행비 절감 — 작업량은 그대로 두고 비용만 줄였습니다 | 오타·문구 수정은 가벼운 모델이 처리 | 기능 구현·리팩터링은 중간 모델이 처리 |

> 측정 조건: 버즈니 개발 조직 35명 · 2026년 6~7월 · 구독·API 실행비 기준 · 동일 작업량 유지.
> 1턴당 절감률은 전체 절감률과 다른 지표입니다. 고객 환경의 절감률을 보장하지 않으며,
> 도입 첫 달에 기준선을 함께 측정합니다.

---

## Agent IDE(Orca 등)와는 뭐가 다른가요?

[Orca](https://www.onorca.dev) 같은 도구는 **Agent IDE**로, 개발자의 코딩 루프에
집중합니다 — worktree 단위 병렬 에이전트 실행, diff, 리뷰, 깊은 에디터 통합. 그 영역을
아주 잘 해내고, 일부는 조직 단위 도입과 거버넌스까지 제공합니다. 그 루프가 여러분의
문제라면 좋은 선택입니다.

Saycode가 겨냥하는 질문은 다릅니다. 에이전트가 코드를 다 만든 *그 다음*에 시작되는
질문입니다:

> **Agent IDE는 개발자가 더 많은 에이전트를 돌리게 합니다.
> Saycode는 그 에이전트가 만든 결과물을 회사의 자산으로 만듭니다.**

| | Agent IDE (Orca 등) | **Saycode** |
|---|---|---|
| 주된 초점 | 개발자의 코딩 루프 | **회사의 딜리버리 루프** — 제작 → 검토 → 배포 → 공유 → 인수인계 |
| 관리 단위 | Repo · worktree · 에이전트 세션 | **조직 · 팀 · 프로젝트 · 머신 · 좌석 · 배포 결과물** |
| "배포"의 의미 | 에이전트 도구를 조직에 안전하게 도입·확산 | **만든 결과물을 팀이 여는 사내 URL로 서비스** |
| 일반적인 결승선 | 리뷰를 거쳐 Git에 병합된 변경 | **공유·인수인계 가능한, 실제 운영 중인 사내 서비스** |
| AI 모델 비용 | 사용량 추적, 계정 전환 | **난이도 기반 자동 라우팅 + 서브 에이전트 위임 — 조직 전체 49% 절감 실측** |
| 닿는 사람 | 주로 개발자 | **회사 구성원 전체** — 개발자, 기획자, 운영자 |

두 제품은 병렬 에이전트, worktree, 원격 실행, 로컬 우선 보안에서 겹칩니다. 그러니
그것들은 선택의 기준이 되지 못합니다. Saycode가 그 위에 더하는 것은 **운영 레이어**입니다:

- **회사 소유권** — 프로젝트, 세션, 기획 문서, 머신이 개인 노트북이 아니라 조직에
  귀속됩니다. 담당자가 퇴사하거나 팀을 옮겨도 결과물은 검색되고 인수인계됩니다.
- **사내 배포** — 원클릭으로 고정된 사내 URL(SSL 자동)에 배포됩니다. 결과물이
  리뷰를 기다리는 브랜치가 아니라, 팀이 오늘 바로 여는 실제 도구가 됩니다.
- **공유·인수인계** — 동료가 열람하고, 복제하고, 다듬고, 변경 사항을 다시 반영합니다.
  다른 팀이 완성한 프로젝트는 다시 만들 대상이 아니라 출발점이 됩니다.
- **비용 운영** — 요청 난이도에 따라 가장 저렴한 적정 모델로 자동 라우팅하고(세션이
  막힐 때만 상위 모델로 승격), 기계적인 하위 작업은 더 가벼운 모델의 서브 에이전트에게
  위임하며, 이 모든 것이 중앙에서 관리되는 조직 공용 머신 위에서 돌아갑니다.
  메시지마다 어떤 모델이 왜 선택됐는지 배지로 표시됩니다. 회사 전체의 AI 비용을
  "확인"이 아니라 "운영"합니다.

**언제 무엇을 쓰면 되나요:** 내 저장소에서 가장 깊은 병렬 에이전트 코딩 경험이
목표라면 Agent IDE도 좋은 선택입니다 — 둘을 함께 쓰지 못할 이유도 없습니다. AI로 만든
소프트웨어가 **회사의 인프라**가 되는 것이 목표라면 — 사내에 배포되고, 팀 간에
공유되고, 인수인계에도 살아남고, 비용까지 통제되는 — 그게 Saycode가 푸는 문제입니다.

---

## 주요 기능

<table>
<tr>
<td width="42%" valign="middle">

### 🧭 설치하면 바로 시작 — 계정도, 설정도 없이

DMG를 열고 언어를 고르면 끝입니다. Saycode가 **내장 서버를 스스로 띄우고, 이 Mac을
로컬 머신으로 등록하고, Guest 로컬 작업공간으로 데려다줍니다** — 로그인 화면도, 데모
버튼도 없습니다. 이어지는 **3단계 마법사**가 Saycode CLI(앱에 내장된 로컬 런타임),
Claude Code·Codex 로그인 상태, 알림 소리를 확인하고 곧바로 첫 프로젝트 추가로
이어집니다. 릴레이도, 데이터베이스도, 데이터 한 바이트까지 전부 내 Mac 안에 있고
인터넷에 아무것도 나가지 않습니다. 팀 기능이 필요해지면 그때 로그인하면 됩니다.

</td>
<td><img src="docs/assets/first-run-onboarding.gif" alt="첫 실행: 언어 선택 → 내장 서버 자동 부팅 → 3단계 마법사 → 첫 프로젝트 추가" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🗣️ 한 문장이면 동작하는 앱이 됩니다

원하는 것을 말로(음성 입력도 지원) 설명하세요. 에이전트가 방향을 잡고, 실제 머신에서
진짜 코드를 작성하며, 파일 수정·터미널 명령·테스트 실행까지 모든 과정을 스트리밍
카드로 투명하게 보여줍니다. 턴이 끝나면 입력창이 **다음에 할 만한 요청을 먼저
제안**합니다 — *"GitHub 원격 추가하고 PR 만들어줘"* 처럼요.

</td>
<td><img src="docs/assets/build-by-chat.gif" alt="대화형 빌드" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🧱 템플릿 갤러리 — 이미 동작하는 앱에서 시작

**새 프로젝트 → 템플릿**에서 사내 대시보드, 설문 폼, API 백오피스 같은 검증된
Vite + React + TypeScript 템플릿을 고르세요. 프로젝트가 만들어지는 동시에 **첫
프롬프트가 입력창에 미리 채워지고**, 에이전트가 `npm install` → `npm run dev` →
브라우저 확인까지 이어서 진행합니다. 빈 프로젝트, Git URL 복제, ZIP/폴더 가져오기도
같은 대화상자에서 됩니다.

</td>
<td>
<img src="docs/assets/template-gallery.png" alt="새 프로젝트 대화상자의 템플릿 갤러리" /><br/>
<img src="docs/assets/template-run.gif" alt="템플릿 프로젝트 생성 직후 미리 채워진 첫 프롬프트로 에이전트가 실행까지 진행" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 💸 모델 자동 선택 — 요청당 최대 ~90% 저렴하게

모델을 **Default**로 두면 Saycode가 매 턴마다 딱 맞는 두뇌를 골라줍니다.
오타 수정은 가벼운 모델로(**~90% 절약**), 일상적인 작업은 중간 모델로(**~80% 절약**),
정말 어려운 문제는 상위 모델로 — 그리고 세션이 진짜로 막혔을 때만 가장 강력한 티어로
승격합니다. 모든 메시지에 *"⚡ 자동 선택 · Sonnet 5 · medium · ~80% 절약"* 같은
투명성 배지가 붙고, 세션 헤더에는 *"자동 선택 2턴 · 평균 ~65% 절약"* 처럼 누적
절약률이 집계됩니다. 원하면 Fable 5 · Opus 5 · Sonnet 5 · Haiku 4.5를 직접 고정하고
effort까지 지정할 수 있습니다.

</td>
<td><img src="docs/assets/auto-route-badges.png" alt="같은 세션에서 쉬운 턴은 Sonnet 5(~80% 절약), 리뷰·커밋 턴은 Opus 5(~50% 절약)로 자동 라우팅된 배지" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🗂️ 에이전트 보드 — 에이전트 함대를 칸반으로 지휘

모든 프로젝트의 모든 에이전트 세션이 한 보드에: **입력 대기 → 응답 중 → 대기 → 리뷰 중
→ 완료 → PR Merged**. 응답 중인 카드에는 에이전트가 지금 말하는 내용이 실시간으로
흐릅니다. **카드를 드래그**해서 다음 지시를 보내고, 코드 리뷰를 요청하고, 세션을
보관하세요 — **Commit & PR**, **PR 머지**, CI가 실패하면 **자동 수정 먼저**까지 카드에서
바로 실행됩니다. 자동 선택이 아껴준 비용은 일간/주간/월간 위젯으로 집계됩니다.

</td>
<td>
<img src="docs/assets/agent-board.gif" alt="에이전트 보드 칸반: 세션이 진행되며 컬럼 사이를 이동" /><br/>
<img src="docs/assets/board-drag-review.gif" alt="카드를 리뷰 중 컬럼으로 드래그하면 코드 리뷰 요청 확인 대화상자가 뜹니다" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 👀 브라우저 패널 — 화면의 요소를 집어서 바로 고치기

채팅 옆에 **브라우저 패널**을 나눠 열면 내 머신에서 실제로 돌아가는 앱이 그대로
뜹니다. 데스크톱·태블릿·모바일 뷰포트 프리셋으로 전환하고, **요소 선택 모드**로 화면의
버튼이나 카드를 클릭하면 그 요소의 셀렉터가 채팅에 첨부됩니다 — *"이 버튼 파란색으로
바꿔줘"* 한 줄이면 에이전트가 고치고, HMR로 즉시 반영된 결과를 같은 패널에서 확인합니다.

</td>
<td>
<img src="docs/assets/browser-panel.png" alt="채팅 옆 브라우저 패널에서 localhost:5173 앱 확인" /><br/>
<img src="docs/assets/element-to-chat.gif" alt="요소 선택 → 채팅에 셀렉터 첨부 → 수정 → HMR로 즉시 반영" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🧩 워크스페이스를 원하는 모양으로

탭 옆 **분할** 버튼이나 단축키(⌘⌥T 터미널, ⌘⌥C 채팅)로 어느 패널 옆이든 새 채팅·
터미널·브라우저·파일 페인을 나누고, 드래그로 크기를 조절하세요. 한쪽 페인에서 Claude가
생각하는 동안 다른 페인에서 Codex가 결과를 내는 모습을 실시간으로 지켜볼 수 있습니다.
작업을 여러 에이전트로 **팬아웃**하거나 세션을 다른 에이전트에게 **핸드오프**하는 것도
됩니다.

</td>
<td><img src="docs/assets/workspace-split-terminal.png" alt="채팅 + 브라우저 + 터미널 3분할 워크스페이스" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 💻 원격 머신 위의 진짜 터미널

등록한 어떤 머신이든 채팅 바로 아래에 실제 셸을 도킹해서 엽니다. 그 머신에 붙은 진짜
종단간 암호화 세션이라 — 빌드 돌리고, 로그 보고, git 상태 확인하는 걸 — 위에서
에이전트가 계속 일하는 동안 그대로 할 수 있습니다. 터미널은 탭을 바꿔도 살아있고
스스로 재연결됩니다.

</td>
<td><img src="docs/assets/remote-terminal.gif" alt="세션의 worktree에 붙은 원격 터미널에서 git 명령 실행" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🤖 좋아하는 에이전트를 그대로, 세션마다 worktree 격리

**Claude Code(Anthropic), Codex(OpenAI), Grok(xAI), opencode**를 세션마다 골라 쓰고,
모델과 effort까지 제어합니다. 새 대화를 열 때 **Worktree** 옵션을 켜면 세션 전용
브랜치와 격리된 작업 폴더가 만들어져 실험이 main을 건드리지 않습니다 — 세션 헤더의
브랜치 칩으로 어디서 일하는지 항상 보입니다. 기존 PR에서 세션을 시작하거나, 밖에서 만든
worktree를 Saycode로 가져올 수도 있습니다.

</td>
<td>
<img src="docs/assets/new-session-options.png" alt="새 대화: 에이전트·모델·effort 선택" /><br/>
<img src="docs/assets/new-session-worktree.png" alt="세션별 git worktree 격리 옵션" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### ✅ 작업 마무리 — 리뷰 먼저, 그다음 Commit & PR

**작업 마무리** 버튼 하나로 세션을 제대로 끝냅니다. 현재 에이전트에게 스스로 변경
사항을 리뷰시키거나, **읽기 전용 스냅샷을 독립 리뷰어에게** 맡기세요 — 코드는 건드리지
못하고 발견한 문제만 보고하는 별도의 에이전트(Claude, Codex 등)입니다. 받아들일 수정만
반영한 뒤 그대로 **Commit & PR**로 이어집니다: 리뷰 → 테스트 → 커밋 → push → PR 생성
(원격이 GitHub가 아니면 그 사실을 알려주고 커밋·push까지만 진행)까지 한 턴에 끝납니다.

</td>
<td>
<img src="docs/assets/work-completion-hub.png" alt="작업 마무리 허브: 현재 에이전트 리뷰, 독립 리뷰어 위임, 바로 Commit &amp; PR" /><br/>
<img src="docs/assets/commit-pr.gif" alt="Commit &amp; PR 한 턴: 리뷰 → 커밋 → push → PR" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🔎 모든 대화를 전문 검색, 어디든 ⌘P로 점프

**⌘⇧F**를 누르면 나와 에이전트가 나눈 모든 대화 — 제목, 프롬프트, 응답 — 를
검색합니다. 내 머신을 떠나지 않는 로컬 SQLite FTS5 인덱스 기반입니다. `project:web`,
`role:agent`, `after:2026-07-01`, `"정확한 문구"` 같은 필터로 좁혀 보세요. **⌘P Quick
Open**은 프로젝트·대화·파일을 한 입력창에서 바로 열고, **⌘K**는 프로젝트·대화·머신을
가로질러 검색합니다.

</td>
<td>
<img src="docs/assets/conversation-search.png" alt="대화 검색 (⌘⇧F)" /><br/>
<img src="docs/assets/quick-open.png" alt="Quick Open (⌘P)" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 📊 사용량 한눈에, 계정은 한 번에 전환

세션 헤더의 사용량 칩을 누르면 머신별 **Claude · Codex · Grok** 남은 사용량(5시간/7일
창)이 보입니다. Claude 계정을 여러 개 연결해 두면 목록에서 **클릭 한 번으로 전환** —
한 계정의 한도가 차도 작업이 멈추지 않습니다. 조회는 머신당 5분에 한 번만 이뤄져
제공사 API를 괴롭히지 않습니다.

</td>
<td><img src="docs/assets/machine-usage.png" alt="머신별 Claude·Codex 사용량과 계정 전환 팝오버" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🧠 시스템 프롬프트 · 메모리 · 확장

**환경설정 → AI → 시스템 프롬프트**에서 Saycode 기본 지시(자식 에이전트 호출, 내부
작업 위임, 기획부터 시작 워크플로우, 커밋 크레딧, 결과물 인라인 미리보기)를 항목별로
켜고 끄고, 프리셋(TypeScript · Tailwind · Korean · Minimal · Full-stack)이나 내 지시를
얹습니다. **Memory** 탭은 에이전트가 세션을 넘어 프로젝트 맥락을 기억하는 메모리
레이어를, **확장** 탭은 템플릿 팩 같은 확장과 스킬을 관리합니다.

</td>
<td>
<img src="docs/assets/settings-system-prompt.png" alt="시스템 프롬프트 설정: 기본 지시 항목별 토글과 프리셋" /><br/>
<img src="docs/assets/settings-extensions.png" alt="확장 관리" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 📱 주머니 속에서도 이어집니다

**환경설정 → 기기 → 모바일 연결**의 QR 코드를 Saycode 모바일 앱으로 찍으면 같은
워크스페이스가 폰에 그대로 열립니다 — 로컬 모드는 같은 네트워크에서, 다른 네트워크에서는
터널을 통해서요. 에이전트 세션을 실시간으로 지켜보고, 원격 터미널을 열고, 긴 작업이
끝나는 순간 푸시 알림을 받으세요.

</td>
<td><img src="docs/assets/mobile-companion.png" alt="모바일 연결: QR 코드로 폰에서 같은 워크스페이스 열기" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🖥️ 내 머신을 등록해서, 코드가 있는 곳에서 에이전트를 돌립니다

이 Mac은 첫 실행에 자동으로 등록됩니다. 여기에 내가 관리하는 어떤 머신이든 — GPU 서버,
빌드 서버, 클라우드 VM — 더 등록해서 에이전트 작업을 맡기세요. **환경설정 → 기기 →
머신**에서 등록 코드를 만들고, 나오는 한 줄 명령어를 대상 머신에서 실행하면 몇 초 만에
**온라인**으로 뜹니다. 이후 모든 프로젝트에서 어느 머신에서 돌릴지 고를 수 있습니다.
에이전트가 읽고, 쓰고, 빌드하고, 실행하는 모든 게 **내 인프라 위에서**, 코드와 데이터
옆에서 이뤄집니다 — 남의 클라우드가 아니라.

</td>
<td>
<img src="docs/assets/settings-machines.png" alt="환경설정 → 기기 → 머신: 등록된 로컬 머신과 머신 추가" /><br/>
<img src="docs/assets/register-machine-panel.png" alt="머신 등록: CLI 설치 명령과 Personal/Organization 등록 코드 발급" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🚀 배포와 공유는 클릭 한 번 *(팀 워크스페이스)*

saycode.ai 계정으로 로그인하면 팀 전체가 열어볼 수 있는 **사내 URL**로 배포할 수
있습니다 — SSL은 자동이고, 배포할 때마다 같은 링크가 갱신됩니다. 프로젝트를 팀이나
사내 커뮤니티에 공유하면 동료가 둘러보고, 복제해서 다듬고, 변경 사항을 안전하게 원본에
반영할 수 있습니다. 렌더링된 HTML 문서·리포트는 공개 링크로 바로 게시됩니다. 배포된
앱·리포트 URL을 이용하는 **최종 이용자에게는 좌석이 필요 없습니다.**

</td>
<td><img src="docs/assets/login-modal.png" alt="saycode.ai 로그인: 팀 워크스페이스로 전환" /></td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🏢 조직 콘솔에서 회사가 통제합니다 *(팀 워크스페이스)*

조직 관리 콘솔에서 멤버 초대·권한(관리자/멤버) 변경·제거, 감사 로그(누가 언제 어떤
프로젝트를 열었는지)까지 한곳에서 볼 수 있습니다. 같은 콘솔에서 조직 전체 MCP 서버,
GitHub PAT, 공용 AI 계정을 등록해 팀원들이 각자 키를 관리하지 않아도 됩니다.
**환경설정 → 보안**의 전역 일시정지 스위치는 예약 자동화·GitHub 트리거·보드
오토파일럿의 다음 실행을 즉시 보류시키는 팀 전용 비상 정지입니다.

</td>
<td>
<img src="docs/assets/org-console.png" alt="조직 관리 콘솔: 멤버 관리와 감사 로그" /><br/>
<img src="docs/assets/settings-security.png" alt="환경설정 → 보안: 전역 일시정지와 GitHub Personal Access Token" />
</td>
</tr>
<tr>
<td width="42%" valign="middle">

### 🌙 계속 머물고 싶은 워크스페이스

Auto / Light / Dark 테마의 오로라 글래스 디자인 — 정보는 촘촘하게, 화면은 차분하게.
알림 센터, 재바인딩 가능한 모든 단축키, Dock 배지와 네이티브 완료 알림, 입력 요청·작업
완료 소리까지. 디테일이 쌓여 경험이 됩니다.

</td>
<td>
<img src="docs/assets/workspace-home-dark.png" alt="다크 모드 워크스페이스 홈" /><br/>
<img src="docs/assets/chat-dark.png" alt="다크 모드 채팅" />
</td>
</tr>
</table>

### 이것도 있습니다

- 🔔 **알림 센터 & 아웃바운드 웹훅** — 완료 알림이 재시작 후에도 유지되고 클릭하면 해당 채팅으로 이동. 세션 완료·입력 대기·정체 이벤트를 HMAC-SHA256 서명과 함께 내 엔드포인트로 전송
- 💬 **diff 라인 코멘트** — 변경된 줄에 직접 코멘트를 달고 묶어서 에이전트에게 후속 지시로 전송
- ⌨️ **슬래시 명령 & 추가 메뉴** — 입력창에서 `/`로 명령을 호출하고, 파일·이미지·폴더를 끌어다 첨부
- 🎙️ **실시간 음성 입력** — 말하는 대로 실시간 전사
- 📄 **리치 파일 뷰어** — 마크다운·HTML·PDF·DOCX를 앱 안에서 바로 렌더링, 결과물 인라인 미리보기
- 🔗 **GitHub / GitLab 가져오기 & 커넥터** — 저장소를 목록에서 선택, Google Drive·Slack·Notion 같은 커넥터를 세션에 연결 *(팀 워크스페이스)*
- 🧩 **MCP 서버 & 환경변수 그룹** — 프로젝트별 MCP 연결과 조직 관리 환경변수 그룹 마운트
- 🛑 **전역 일시정지 & 품질 게이트** — 예약 자동화·GitHub 트리거·보드 오토파일럿을 스위치 하나로 보류, 자율 실행에 자체 리뷰 라운드와 품질 게이트 적용 *(팀 워크스페이스)*
- 🔐 **패스키 MFA** — 팀 계정 로그인에 WebAuthn 패스키 또는 TOTP
- 📉 **네트워크 데이터 절약** — 테더링·종량제 네트워크에서 무거운 동기화를 자동으로 줄임
- 🔒 **프라이버시 우선 설계** — 채팅·터미널 트래픽 종단간 암호화, 코드와 데이터는 내 머신에 보관
- 🏢 **조직 단위 통제** — 조직/팀 워크스페이스, 좌석·머신·환경변수·소유권 관리, 감사 로그 *(팀 워크스페이스)*
- 🔄 **단계적 자동 업데이트** — 새 버전은 일부 설치본부터 점진적으로 배포되어 문제가 생겨도 전체로 번지지 않음

---

## 이렇게 동작합니다

| | | |
|---|---|---|
| **01 · 설치하면 준비 끝** | **02 · 프로젝트 추가** | **03 · 말로 요청** |
| DMG를 열고 언어를 고르면 내장 서버가 뜨고 이 Mac이 로컬 머신으로 등록됩니다. 3단계 마법사가 CLI·AI 도구·알림을 확인합니다. | 기존 폴더 열기, 템플릿, 빈 프로젝트, Git URL 복제, ZIP — 머신을 고르고 이름만 정하면 됩니다. | 자연어 한 문장이면 됩니다: *"요청 테이블에 담당자 열 추가하고 더미 데이터 채워줘"* |

| | |
|---|---|
| **04 · 내 머신에서 AI가 제작** — 에이전트가 실제 파일을 읽고 쓰고 명령을 실행하며 전 과정을 스트리밍합니다. 브라우저 패널에서 바로 눌러보고, 요소를 집어 고칩니다. | **05 · 마무리하고 팀에 배포** — 작업 마무리로 리뷰 → Commit & PR. 팀 워크스페이스라면 버튼 한 번으로 사내 URL 발급. 공유하고, 인수인계하고, 함께 발전시키세요. |

<div align="center">
<img src="docs/assets/first-session-done.png" alt="첫 세션: 에이전트가 담당자 열을 추가하고 결과를 보고한 화면" width="920" />

*첫 세션 — 요청 한 줄에 에이전트가 파일을 고치고, 타입 검사를 돌리고, 결과를 보고합니다.*
</div>

---

## 설치와 첫 실행

### macOS (Apple Silicon)

1. **[Releases](https://github.com/buzzni/saycode-desktop-releases/releases/latest)**에서 최신 DMG 다운로드
2. DMG를 열고 **Saycode**를 Applications로 드래그
3. 실행 후 **언어**를 고르세요 (한국어 · English · 中文 · 日本語)
4. 그게 전부입니다. Saycode가 내장 서버를 띄우고 이 Mac을 등록해 **Guest 로컬 작업공간**을
   엽니다 (약 10초). 로그인 화면은 없습니다 — 팀 기능이 필요할 때 언제든 **Guest 메뉴 →
   로그인**하면 됩니다.

### 첫 작업까지 함께 준비해요 — 3단계 마법사

<table>
<tr>
<td width="33%"><img src="docs/assets/onboarding-step1-cli.png" alt="① Saycode CLI" /></td>
<td width="33%"><img src="docs/assets/onboarding-step2-ai-tools.png" alt="② AI 도구" /></td>
<td width="33%"><img src="docs/assets/onboarding-step3-notifications.png" alt="③ 알림" /></td>
</tr>
<tr>
<td valign="top"><b>① Saycode CLI</b> — 앱에 내장된 로컬 런타임을 확인합니다. Standalone 앱은 별도 설치 없이 <i>설치됨</i>으로 표시됩니다.</td>
<td valign="top"><b>② AI 도구</b> — Claude Code와 Codex의 로그인 상태를 감지합니다. 아직이라면 터미널에서 <code>claude</code> → <code>/login</code>, <code>codex login</code>을 마치고 <b>상태 다시 확인</b>을 누르세요.</td>
<td valign="top"><b>③ 알림</b> — 입력 요청 소리·작업 완료 소리를 고르고 <b>테스트 알림 보내기</b>로 확인합니다. 마지막 버튼이 바로 첫 프로젝트 추가로 이어집니다.</td>
</tr>
</table>

각 단계는 **나중에 하기**로 건너뛸 수 있고, **환경설정 → 기기 → 머신 → 시작 설정
이어하기**로 언제든 다시 열 수 있습니다.

### 첫 프로젝트와 첫 대화

<table>
<tr>
<td width="50%"><img src="docs/assets/first-project-dialog.png" alt="프로젝트 추가 대화상자" /></td>
<td width="50%"><img src="docs/assets/system-prompt-choice.png" alt="Saycode 기본 지시 사용 여부" /></td>
</tr>
<tr>
<td valign="top">마법사가 끝나면 <b>프로젝트 추가</b>가 열립니다. 호스트(머신)를 고르고 <b>기존 폴더 열기</b> — 또는 새 프로젝트 만들기 · Git URL에서 복제 · ZIP으로 가져오기를 고르세요. 새 프로젝트는 템플릿 갤러리에서 시작할 수 있습니다.</td>
<td valign="top">첫 대화를 열면 <b>Saycode 기본 지시</b>를 쓸지 묻습니다. 켜두면 에이전트가 자식 에이전트 위임, 커밋 크레딧, 결과물 인라인 미리보기 같은 Saycode 워크플로우를 따릅니다. 나중에 환경설정에서 항목별로 바꿀 수 있습니다.</td>
</tr>
</table>

앱은 Developer ID 서명·공증되어 있으며, 자동으로 업데이트됩니다.
모든 단계를 스크린샷과 함께 보려면 **[사용자 가이드](docs/GUIDE.ko.md)** 를 참고하세요.

### 로컬 작업공간과 팀 워크스페이스

| | Guest 로컬 작업공간 (기본) | 팀 워크스페이스 (saycode.ai 로그인) |
|---|---|---|
| 필요한 것 | 없음 — 설치만 하면 됨 | 조직 계정 (SSO · 패스키/TOTP MFA) |
| 데이터 위치 | 전부 이 Mac | 코드·데이터는 지정 머신, 메타데이터·감사 로그는 조직 콘솔 |
| 에이전트 · 모델 자동 선택 · 에이전트 보드 · worktree · 작업 마무리 · 브라우저 패널 · 터미널 · 템플릿 · 검색 · 메모리 | ✅ | ✅ |
| 원격 머신 등록 · 모바일 연결 | ✅ (모바일은 같은 네트워크 또는 터널) | ✅ |
| 사내 URL 배포 · 프로젝트 공유·인수인계 · 커뮤니티 | — | ✅ |
| 조직 콘솔 (좌석·권한·모델 정책·비용·감사 로그) · 커넥터 · 개인 메모리 동기화 · 프로젝트 내보내기 | — | ✅ |

로컬로 시작해서 필요할 때 로그인하면 됩니다. 로컬 프로젝트는 그대로 유지됩니다.

> **Windows / Linux / Intel Mac** — 아직 준비 중입니다. [Releases](https://github.com/buzzni/saycode-desktop-releases/releases)에서 소식을 확인하세요.

---

## 도입 시나리오 — 어디부터 시작할지 고객이 정합니다

세 시나리오는 순서가 아니라 선택지입니다. 하나로 시작해도, 조합해도 됩니다.

| 💬 채팅과 문서 | ⚙️ 개인 업무 자동화 | 🚀 앱 빌딩과 배포 |
|---|---|---|
| 회의록 요약, 기획서·보고서 초안, 검색·요약. 승인된 사용자·모델만 사용하고, 그룹별로 모델을 제한하고, 사용량·비용을 집계합니다. | 사내 협업 도구·문서 저장소와 연결해 반복 리포트 생성, 요청·승인 흐름 보조 같은 반복 업무를 자동화합니다. | 현업이 직접 사내 도구를 만들고 사내 URL로 배포합니다. 결과물 검토·승인 흐름까지. |

**개발자가 아니어도 첫 주부터 씁니다** — 경영 지원(회의록·월간 보고서 초안·정책 Q&A),
영업·마케팅(제안서 초안·VOC 분류), 커머스 운영(상품·가격·재고 점검 리포트),
HR·총무(규정 안내·요청·승인 흐름·온보딩 자료)처럼 지금 수작업·엑셀·메신저로 처리되는
반복 업무부터 시작합니다. 결과물은 링크로 공유하니 메신저 첨부 없이 검토가 끝납니다.

---

## 팀을 위한 Saycode

### 1개월 무료 PoC로 숫자부터 확인합니다

고객이 선택한 시나리오를 대상으로 사용량·비용·정책·감사를 실측하고, 도입 판단에 필요한
결과 보고서까지 함께 만듭니다. **프리미엄 좌석의 모든 기능을 PoC에서 그대로 씁니다.**

| 1주차 · 기준선 | 2~3주차 · 실사용 | 4주차 · 결과 보고 |
|---|---|---|
| 현재 AI 사용·비용 기준선 측정, 대상 부서와 PoC 시나리오 선정 | 실제 업무에 적용, 사용량·비용 실측, 정책·권한 설정 검증 | 활성화율·비용·정책 작동 결과 정리, 본 도입 견적 산출 |

PoC 기간 1개월 무료. 기간 중 발생하는 모델 사용료는 고객 계약에 따릅니다.

### 가격 — 직접 만드는 사람만 좌석을 둡니다

AI 모델을 되파는 도구가 아닙니다. 쓰던 AI 계약을 그대로 연결하고, 관리와 실행 환경에
대한 좌석 요금만 받습니다.

| 플랜 | 가격 | 대상 | 포함 |
|---|---|---|---|
| **오피스** | $10 / 인·월 | 채팅·문서 중심의 전 직원용 | 채팅·문서 작업 · 결과물 열람·검토·승인 · 사용량 대시보드 |
| **프리미엄** ⭐ | $40 / 인·월 | 직접 만들고 배포하는 실무자용 | 오피스의 모든 기능 + 앱 제작·에이전트 실행 · 사내 URL 배포 · SSO 연동 |
| **대량 도입** | 규모에 따라 협의 | 전사 도입·특수 요건 | 전사 규모 단가 · 사내 서버 설치형·폐쇄망 구성 · 전담 지원·SLA |

- **AI 모델 마크업 0%** — 쓰던 Anthropic·OpenAI·Azure·Bedrock·Vertex 계약을 그대로 연결합니다. 월 총비용 = 좌석료 + 외부 AI 구독료 + API 사용료.
- 배포된 앱·리포트 URL을 이용하는 **최종 이용자에게는 좌석이 필요 없습니다.** 기명 좌석이며 계정을 공유하지 않습니다.
- 예산 상한과 임계치 알림을 설정할 수 있고, 상한을 넘으면 자동으로 멈춥니다.
- 현재 도입 이벤트 기간 중 초기 세팅비 없음.

- 🌐 웹사이트: **[saycode.ai](https://saycode.ai)** · 소개서: **[saycodepoc.apps.saycode.ai](https://saycodepoc.apps.saycode.ai/)**
- 💼 도입 문의: [soo@buzzni.com](mailto:soo@buzzni.com)
- 🛠 기술 문의: [ryan@buzzni.com](mailto:ryan@buzzni.com)
- 🤝 고객 지원: [ernie@buzzni.com](mailto:ernie@buzzni.com)

---

## 오픈소스 고지

Saycode Desktop은 오픈소스 위에 만들어졌습니다. 아래 프로젝트를 번들하거나 사용하고
있으며(라이선스 병기), 전체 라이선스 전문은 패키징된 앱에 포함되어 있습니다:

| 프로젝트 | 용도 | 라이선스 |
|---|---|---|
| [Happy](https://github.com/slopus/happy) ([buzzni 포크](https://github.com/buzzni/happy) 경유) | 스탠드얼론 모드에 번들되는 암호화 에이전트 세션 릴레이 엔진 (`happy-cli` / `happy-server`) | MIT |
| [Electron](https://www.electronjs.org/) | 데스크톱 앱 셸 | MIT |
| [React](https://react.dev/) | UI 프레임워크 | MIT |
| [xterm.js](https://xtermjs.org/) (+ fit / web-links / WebGL 애드온) | 원격 터미널 렌더링 | MIT |
| [socket.io-client](https://socket.io/) | 실시간 전송 | MIT |
| [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) | 채팅 마크다운 렌더링 | MIT |
| [electron-updater](https://www.electron.build/) | 앱 내 자동 업데이트 | MIT |
| [buffer](https://github.com/feross/buffer) | 바이너리 유틸리티 | MIT |
| [lucide-react](https://lucide.dev/) | 아이콘 세트 | ISC |
| [TweetNaCl.js](https://tweetnacl.js.org/) | 종단간 암호화 프리미티브 | Unlicense (퍼블릭 도메인) |

Saycode의 암호화 세션 동기화 아키텍처의 근간이 되어준 Kirill Dubovitskiy와 기여자들의
**[slopus/happy](https://github.com/slopus/happy)** (MIT)에 특별한 감사를 전합니다.

---

<div align="center">

**© 2026 [Buzzni](https://buzzni.com) · [saycode.ai](https://saycode.ai)**

*회사의 누구든, 말하면 만들 수 있도록.*

</div>
