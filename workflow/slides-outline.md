# 第十週教學簡報大綱與來源對照

主題為「末日生存世界觀設計入門：從背景設定到知識關聯」。零基礎讀者可先寫出五項設定，再用有證據的關聯組成一個案例。

## 查詢與來源驗證

使用 VS Code 的 LLM Wiki 1.1.0 擴充套件附帶的本機 stdio MCP。以 `wiki_status` 確認 5 篇原始來源與 17 個索引頁。以 `wiki_query` 查詢三個核心實體、爆發事件及四個概念，再用 `wiki_read_index` 與 `wiki_read_page` 讀取 17 個索引頁。將兩種轉移記載、區域評級、補給品核對及舊位置圖回查匯入 HTML。第 3 頁的主時間線標明事件檔案，人物記載另行呈現。第 8 頁將推論與事實分欄，第 9 頁用來源未交代的運送關係作為干擾選項。

## 十頁大綱與 Wiki 對照

| 頁次與主題 | 教學目標與呈現 | Wiki 依據 |
|---|---|---|
| 1 封面與學習目標 | 列出學習成果，從寫設定到畫可追溯的關係。 | [Wiki 索引](../.wiki/wiki/index.md) |
| 2 基本構成 | 以五個問題辨識背景、地點、資源、角色、事件。北城資料用作示範。 | [第一次感染爆發](../.wiki/wiki/entities/first-outbreak.md)、[廢棄醫院](../.wiki/wiki/entities/abandoned-hospital.md)、[林以安](../.wiki/wiki/entities/field-medic.md)、[醫療補給包](../.wiki/wiki/entities/medical-kit.md) |
| 3 災難背景與事件時間線 | 將事件日期與尚未確認的起因分開。四節點時間線及雙來源對照。 | [第一次感染爆發](../.wiki/wiki/entities/first-outbreak.md)、[林以安](../.wiki/wiki/entities/field-medic.md)、[撤離與傷患後送](../.wiki/wiki/concepts/evacuation-and-casualty-transfer.md) |
| 4 地點與危險等級 | 為每個地點寫風險及評級範圍。對照醫院 4/5 與避難所開放區 2/5。 | [廢棄醫院](../.wiki/wiki/entities/abandoned-hospital.md)、[七號避難所](../.wiki/wiki/entities/northern-underground-shelter.md)、[地點風險與評級範圍](../.wiki/wiki/concepts/location-risk.md) |
| 5 生存資源與物資管理 | 分辨取得、核對及調撥。流程圖呈現提問順序，個別例子的批次與流向仍未確認。 | [醫療補給包](../.wiki/wiki/entities/medical-kit.md)、[醫療物資轉運與配給](../.wiki/wiki/concepts/medical-supply-management.md)、[避難所運作](../.wiki/wiki/concepts/shelter-operations.md) |
| 6 倖存者角色設計 | 用過去職能、現有能力、合作與取捨組成可行動的角色。 | [林以安](../.wiki/wiki/entities/field-medic.md)、[許岑](../.wiki/wiki/entities/xu-cen.md)、[周伯](../.wiki/wiki/entities/zhou-bo.md) |
| 7 Entities、Concepts、Crosslinks | 判斷何者應命名、何者整理成概念，為連線加一個有證據的動詞。 | [Wiki 索引](../.wiki/wiki/index.md)、[廢棄醫院](../.wiki/wiki/entities/abandoned-hospital.md)、[醫療補給包](../.wiki/wiki/entities/medical-kit.md)、[醫療物資轉運與配給](../.wiki/wiki/concepts/medical-supply-management.md) |
| 8 醫院、林以安與補給包 | 為三個節點標示關係，用兩欄區分事實與 AI 推論。 | [廢棄醫院](../.wiki/wiki/entities/abandoned-hospital.md)、[林以安](../.wiki/wiki/entities/field-medic.md)、[醫療補給包](../.wiki/wiki/entities/medical-kit.md) |
| 9 互動練習 | 從三個選項選出有來源支持的描述，提交後讀取解析。 | [廢棄醫院](../.wiki/wiki/entities/abandoned-hospital.md)、[林以安](../.wiki/wiki/entities/field-medic.md)、[第一次感染爆發](../.wiki/wiki/entities/first-outbreak.md)、[醫療物資轉運與配給](../.wiki/wiki/concepts/medical-supply-management.md) |
| 10 總結與 Wiki 來源 | 用三步檢查自己的設定。依投影片引用編號追到 Wiki 路徑。 | [Wiki 索引](../.wiki/wiki/index.md)及上述來源 |

簡報來源面板以本頁對照為基礎，將摘要與 Wiki 路徑內嵌在 HTML。僅部署 `slides/` 也可閱讀引用；本檔的相對連結可在完整專案中開啟原頁。
