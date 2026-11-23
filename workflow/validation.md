# LLM Wiki 品質驗證紀錄

驗證日期：2026-11-23（Asia/Taipei）

## 查詢與驗證方式

上一輪課堂問題的答案來自直接讀取 `.wiki/wiki/sources/` 的 Markdown 來源頁，再依 `source_path` 查閱 `.wiki/raw/` 的 HTML 正文。上一輪沒有呼叫 LLM Wiki MCP 的查詢工具。

本次以檔案盤點與兩份原文比對驗證內容，另外透過本機 MCP 執行 Lint。助理的工具清單沒有預先連接 LLM Wiki，但工作站已安裝 VS Code 擴充套件 `eag-rss.llmwiki` 1.1.0。使用 Node 啟動該套件附帶的 `out/mcp-server.cjs`，將專案的 `.wiki` 絕對路徑傳為參數，經 MCP stdio 呼叫 `wiki_lint`，工具參數為 `{}`。這筆 MCP 呼叫屬於本次驗證。

## 實際頁面與連結

| 項目 | 盤點結果 |
|---|---|
| Entities | `entities/` 存在，0 頁 |
| Concepts | `concepts/` 存在，0 頁 |
| 來源頁 | 5 頁，皆為 `type: source`，正文為來源資訊及截斷的 HTML 預覽 |
| 管理頁 | [索引](../.wiki/wiki/index.md)、[匯入日誌](../.wiki/wiki/log.md) |
| Wiki 交叉連結 | 知識頁之間 0 條。目前有 5 條「索引 → 來源頁」的 Markdown 連結，目標檔案均存在 |

| 索引指向的現有來源頁 | 匯入 HTML 中實際出現的跨檔案連結目標，去除重複 |
|---|---|
| [廢棄醫院](../.wiki/wiki/sources/abandoned-hospital-summary.md) | 前線醫護員、第一次感染爆發、醫療補給包 |
| [前線醫護員](../.wiki/wiki/sources/field-medic-summary.md) | 廢棄醫院、第一次感染爆發、醫療補給包 |
| [第一次感染爆發](../.wiki/wiki/sources/first-outbreak-summary.md) | 廢棄醫院、前線醫護員、醫療補給包 |
| [醫療補給包](../.wiki/wiki/sources/medical-kit-summary.md) | 廢棄醫院、前線醫護員 |
| [北區地下避難所](../.wiki/wiki/sources/northern-underground-shelter-summary.md) | 廢棄醫院、前線醫護員、第一次感染爆發、醫療補給包 |

右欄共 15 條有向連結，來自原網站 HTML 的 `href`。這些路徑在目前平放的匯入目錄中無法直接解析，目標檔名可對回已匯入的五篇資料。它們提供候選關聯的線索。五組 `source-input/` 與 `.wiki/raw/` 的同名 HTML 經 SHA-256 比對均一致。

## 待釐清的時間差異

| 來源 | 原文記載 |
|---|---|
| [前線醫護員，背景故事](../.wiki/raw/field-medic.html#section-1) | 爆發「當夜」，林以安協助將部分病患「轉移至地下運輸通道」，撤離時與原小隊失散。 |
| [第一次感染爆發，發生時間與事件經過](../.wiki/raw/first-outbreak.html#section-4) | 事件自 2042 年 3 月 17 日夜間起。3 月 18 日凌晨醫療團隊開始分批撤離，3 月 18 日白天林以安等醫護人員「經地下通道轉移部分病患」。 |

**判定：時間措辭有差異，尚無法確認為直接矛盾。** 兩篇均支持林以安在爆發期間協助轉移部分病患。若兩段描述的是同一次轉移，夜間與白天的時間標記有衝突。原文沒有交代病患是否為同一批、轉移是否為同一次，也沒有說明「轉移至」與「經」是否指同一階段。分批撤離本身也無法證明林以安參與了兩次轉移。

**建議處理**。知識頁暫以「林以安在爆發期間協助轉移部分病患」表述，附上兩段引文及時間差異。若課堂作業需要單一時間線，請由設定作者確認事件是否相同，再決定日期與措辭。

## Lint 執行結果

本次 `wiki_lint` 成功回傳以下 `structuredContent`。

```json
{
  "command": "lint",
  "api_version": "1",
  "findings": [],
  "errorCount": 0,
  "warningCount": 0,
  "infoCount": 0,
  "categorySummary": {}
}
```

這份結果適用於目前的頁面與索引。實體及概念覆蓋率、原文事件時間，以及原網站 HTML 的路徑仍需依檔案與內容證據判讀。本次執行的是 Lint 檢查。

## 課堂 Loop / Graph 與反思

- **可確認**。五篇資料已匯入，索引有五個有效連結。目前可展示的 Wiki Graph 是「索引 → 五個來源頁」；原始 HTML 的 15 條關聯可另外標示為原文連結。
- **尚未確認**。兩篇檔案是否記載同一次病患轉移，以及任何一批由醫院取得的醫療補給包是否經林以安送至七號避難所。
- **建議 Workflow**。匯入與核對原文 → 查詢並記錄使用的工具、頁面與段落 → 標記來源事實、推論與待釐清處 → 審核後更新既有來源頁並建立有證據的實體、概念與交叉連結 → 重跑 Lint、抽查內容與連結 → 保存結果並回查原問題。
- **反思**。這一輪實際完成查詢回溯、圖譜盤點、來源比對與 Lint。Lint 回傳零筆問題時，知識圖譜仍可能只有來源索引，時間差異也仍需閱讀原文才能發現。

## 知識頁與交叉連結建立紀錄

執行日期：2026-11-23（Asia/Taipei）

### 執行方式與建立結果

重新讀取五個來源頁與匯入的 HTML 正文。透過 VS Code 擴充套件 `eag-rss.llmwiki` 1.1.0 附帶的本機 stdio MCP 伺服器執行 `tools/list`、`wiki_status` 及 `wiki_list_pages`，確認工具可用、基線有五個來源頁且無同名知識頁。以 `wiki_create_entity` 和 `wiki_create_concept` 建頁並登錄來源。建立工具的 slug 只接受 ASCII 英數，因此先以英文 slug 建立，再用 `wiki_update_page` 設定中文標題。一次建成各頁，沒有重複建立。

- **8 個實體**。[廢棄醫院](../.wiki/wiki/entities/abandoned-hospital.md)、[林以安](../.wiki/wiki/entities/field-medic.md)、[醫療補給包](../.wiki/wiki/entities/medical-kit.md)、[第一次感染爆發](../.wiki/wiki/entities/first-outbreak.md)、[北區地下避難所](../.wiki/wiki/entities/northern-underground-shelter.md)、[灰燈救援隊](../.wiki/wiki/entities/gray-lantern-rescue.md)、[許岑](../.wiki/wiki/entities/xu-cen.md)、[周伯](../.wiki/wiki/entities/zhou-bo.md)。本次將具名歷史事件作為實體，以事件標籤表示。
- **4 個概念**。[撤離與傷患後送](../.wiki/wiki/concepts/evacuation-and-casualty-transfer.md)、[醫療物資轉運與配給](../.wiki/wiki/concepts/medical-supply-management.md)、[地點風險與評級範圍](../.wiki/wiki/concepts/location-risk.md)、[避難所運作](../.wiki/wiki/concepts/shelter-operations.md)。
- **72 條交叉連結**。以 `wiki_add_crosslinks` 建立 36 對雙向關聯，每個方向各計一條。透過 `wiki_read_page` 逐頁讀回並比對目標，72 條均可解析。各頁正文另有共 41 條來源引用，皆與 frontmatter 的 `sources` 一致。來源引用及索引連結另計。

### 查詢與結構驗證

| 驗證 | MCP 實際結果 |
|---|---|
| `wiki_status` | 知識庫頁數 5 → 17，原始來源數維持 5，孤立頁 0，索引覆蓋率 100% |
| `wiki_read_index` | 逐一核對 17 筆索引登錄 |
| `wiki_lint` | `findings: []`，0 error、0 warning、0 info |
| `wiki_query` | `廢棄醫院 前線醫護員 醫療補給包` 命中 3 個對應實體頁；三個詞分別查詢也各命中 1 頁 |

`wiki_status` 的 `last_lint_date` 欄位仍回傳 `null`。本次 Lint 的完成證據為 `wiki_lint` 直接回傳的結果。另比對五組 `source-input/` 與 `.wiki/raw/` 的 HTML，同名檔案均逐位元組相同。

查詢核對：醫院的急診備品櫃偶有封存補給包。林以安曾任該院急診護理師、保留舊櫃位圖，且擅長盤點及辨識封裝。灰燈救援隊在分配前由醫護人員核對內容與保存狀態。舊圖及專長可能有助於查找與評估院內物資，已標記為 AI 推論。[廢棄醫院](../.wiki/wiki/entities/abandoned-hospital.md) · [林以安](../.wiki/wiki/entities/field-medic.md) · [醫療補給包](../.wiki/wiki/entities/medical-kit.md)

### 發現、處理與待人工確認

- 人物檔案的「當夜」與事件檔案的「3 月 18 日白天」已並列在人物、事件和撤離概念三頁，並逐頁核對。兩段是否指同批病患、同一次轉移或同一階段，以及病患最終去向，仍待設定作者確認。[人物原文](../.wiki/raw/field-medic.html#section-1) · [事件原文](../.wiki/raw/first-outbreak.html#section-4)
- 尚無紀錄可確認林以安是否親自從醫院回收特定補給包、避難所或周伯保管的補給是否來自該院。醫院接收到的避難所短波訊號也未指名發訊據點。相關頁面只記錄來源能支持的關係。[廢棄醫院](../.wiki/wiki/entities/abandoned-hospital.md) · [醫療物資轉運與配給](../.wiki/wiki/concepts/medical-supply-management.md)
- 建立後的結構驗證與連結比對均通過，本輪未執行自動修復。課堂可用本紀錄與索引對照建立前後的 Graph，再用查詢結果和未決問題說明 Loop 如何回到原文驗證。[Wiki 索引](../.wiki/wiki/index.md)

## 第十週教學型 HTML 簡報驗證

執行日期：2026-11-23（Asia/Taipei）

### 查詢、內容回查與建置

- 使用本機 LLM Wiki 1.1.0 MCP 的 `wiki_status`、`wiki_query`、`wiki_read_index`、`wiki_read_page`。狀態顯示 5 篇原始來源與 17 個 Wiki 頁面。查詢找到第一次感染爆發、廢棄醫院、林以安與醫療補給包，以及四個概念。依索引讀取全部 17 頁。
- 回查事件檔案與人物檔案的 HTML 段落，確認第 3 頁須將事件檔案的 3 月 18 日白天與人物檔案的爆發當夜並列。另核對評級範圍、備品櫃舊位置圖及醫護人員核對補給的記載。第 8 頁分欄呈現原文事實與 AI 推論，第 9 頁解析指出已知證據及尚未確認的關係。
- 先完成[十頁大綱與逐頁來源對照](slides-outline.md)，再以 HTML5、CSS3 與原生 JavaScript 建立[簡報](../slides/index.html)。參考上週專案的暗色與橘色系、檔案式標頭及雷達元素，僅讀取其 CSS。本輪沒有寫入 Wiki 或 HTML 來源。
- [Loop / Graph](graph.md)記錄內容審查與功能測試的回查路徑。簡報三個檔案使用相對路徑，來源短摘要及 Wiki 路徑內嵌於 HTML，可在靜態託管環境中顯示。

### 實際測試結果

| 工具與測項 | 結果 |
|---|---|
| Node `--check slides/script.js` | 通過語法檢查。 |
| Chrome Headless（CDP），以本機 `file:` 開啟 | 通過上一頁、下一頁、左右方向鍵、頁碼更新、首尾按鈕停用、跳到來源頁、深連結及瀏覽器返回。 |
| Chrome Headless，來源面板 | 通過開啟、顯示 Wiki 路徑、面板開啟時阻擋投影片快捷鍵、Escape 關閉。確認 12 個引用目標均對到專案內存在的 Wiki 檔案。 |
| Chrome Headless，第 9 頁 | 未選答案時瀏覽器會阻止提交。三個選項逐一提交均顯示對應結果，正確選項顯示肯定回饋。 |
| Chrome Headless，內容 | 確認 10 個投影片 ID、教學目標區、來源面板引用，以及第 3 頁的兩種時間描述和第 8 頁的事實／推論分欄。 |
| Chrome Headless，桌面 | 1366 × 820 與 1024 × 768 逐頁測量。最終 10 頁在兩種尺寸均為 16:9，未測得水平溢出或卡片內部垂直溢出。 |
| Chrome Headless，手機模擬 | 390 × 844 與 320 × 740 逐頁量測。版面依內容直向延伸，均無水平溢出。 |

### 問題與修正

- 初測桌面有數頁受內容撐高。調整桌面外框、五項設定的欄數及內距，複測時發現 1024px 寬度仍有三頁需在卡片內捲動。再縮減中等桌面寬度的內距與間隔後，兩種桌面寬度逐頁通過 16:9 及溢出檢查。
- 沙箱內的 Chrome 測試在啟用頁面時逾時，取得授權後改用沙箱外的無介面 Chrome。測試本身另遇到 PowerShell 管線的繁中編碼及頁面初始化時序問題，改用 UTF-8 並等待簡報初始化後成功重跑。
- 尚未進行實體手機、其他瀏覽器及投影設備的人工目視驗證。GitHub Pages 尚未實際部署或驗證公開網址。
