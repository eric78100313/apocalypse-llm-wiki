# apocalypse-llm-wiki

以 Microsoft LLM Wiki 整理虛構的北城生存檔案，並用十頁互動簡報教零基礎讀者設計末日世界觀。讀者可從背景、地點、物資、角色與事件出發，練習建立有出處的知識關聯。

## 五篇資料的 Ingest

| 原始 HTML | Wiki 來源頁 |
|---|---|
| [廢棄醫院](source-input/abandoned-hospital.html) | [來源頁](.wiki/wiki/sources/abandoned-hospital-summary.md) |
| [前線醫護員](source-input/field-medic.html) | [來源頁](.wiki/wiki/sources/field-medic-summary.md) |
| [第一次感染爆發](source-input/first-outbreak.html) | [來源頁](.wiki/wiki/sources/first-outbreak-summary.md) |
| [醫療補給包](source-input/medical-kit.html) | [來源頁](.wiki/wiki/sources/medical-kit-summary.md) |
| [北區地下避難所](source-input/northern-underground-shelter.html) | [來源頁](.wiki/wiki/sources/northern-underground-shelter-summary.md) |

五篇 HTML 均已匯入 `.wiki/raw/`，可在[匯入日誌](.wiki/wiki/log.md)查閱紀錄。

## Wiki 知識庫

[Wiki 索引](.wiki/wiki/index.md)收錄 **17 個頁面**，包含 5 個來源頁、8 個實體和 4 個概念。知識頁間有 **72 條有向交叉連結**，即 36 對雙向關係。各知識頁可追溯到來源頁與匯入原文。

林以安協助轉移病患的時間保留兩種記載。人物檔案寫爆發「當夜」，事件檔案寫「3 月 18 日白天」，兩段是否描述同一次行動仍待確認。 [人物頁](.wiki/wiki/entities/field-medic.md) · [事件頁](.wiki/wiki/entities/first-outbreak.md)

## HTML 教學簡報

開啟 [slides/index.html](slides/index.html) 即可在本機瀏覽。可用左右方向鍵或頁面按鈕切換投影片，第 9 頁有互動選擇題與答案解析。簡報使用 HTML、CSS 與原生 JavaScript，可將 `slides/` 隨專案部署到 GitHub Pages，再以 `/apocalypse-llm-wiki/slides/` 作為入口。

## Loop / Graph 與檢查紀錄

工作流程從 Wiki 查詢與來源驗證開始，經大綱、內容審查、HTML 生成、功能測試、修正及最終驗證。遇到來源差異時回查原文，遇到版面或互動問題時回到 HTML、CSS 或 JavaScript 修改後再測。

- [簡報大綱與逐頁 Wiki 來源對照](workflow/slides-outline.md)
- [Loop / Graph 與案例關聯圖](workflow/graph.md)
- [Wiki Lint、內容核對、瀏覽器測試與待確認事項](workflow/validation.md)
