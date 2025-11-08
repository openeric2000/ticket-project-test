# 票務平台專案 (Ticket Platform)

## 📋 版本歷程

### 第二版：Tailwind CSS 統一設計系統
- ✅ 引入 Tailwind CSS 作為主要樣式框架
- ✅ 建立統一的設計系統（按鈕、卡片、表單等）
- ✅ 保留輪播動畫在獨立 CSS 檔案
- ✅ 所有檔案使用 UTF-8 編碼
- ✅ 響應式設計完整支援

### 第一版：基本功能實作
- ✅ 輪播功能
- ✅ 語言選單
- ✅ 基本版面

## 🎨 設計系統

本專案使用 Tailwind CSS 建立統一的設計風格，詳細說明請參考 [TAILWIND_GUIDE.md](./TAILWIND_GUIDE.md)

### 主要特色
- **統一配色**：使用主題色變數（primary, secondary）
- **元件化**：預定義的按鈕、卡片、表單樣式
- **易維護**：所有樣式配置集中管理
- **響應式**：完整的 RWD 支援

## 📁 專案結構

```
Ticket/
├── MainPage2.html          # 主要頁面（使用 Tailwind CSS）
├── CSS/
│   └── MainPage2.css      # 輪播動畫專用 CSS
├── JS/
│   └── MainPage2.js       # JavaScript 功能
├── tailwind.config.js     # Tailwind 配置檔（供參考）
├── TAILWIND_GUIDE.md      # Tailwind 使用指南
└── README.md              # 本檔案
```

## 🚀 快速開始

1. 直接開啟 `MainPage2.html` 即可在瀏覽器中查看
2. 所有樣式已透過 CDN 載入，無需額外安裝

## 🎯 樣式使用範例

### 按鈕
```html
<!-- 主要按鈕 -->
<button class="btn-primary">立即購票</button>

<!-- 外框按鈕 -->
<button class="btn-outline-primary">探索活動</button>

<!-- 大按鈕 -->
<button class="btn-primary btn-lg">立即購票</button>
```

### 卡片
```html
<div class="card">
  <div class="card-img" style="background-image: url('...');"></div>
  <div class="card-body">
    <h5 class="card-title">活動標題</h5>
    <p>活動描述...</p>
  </div>
</div>
```

### 連結
```html
<a href="#" class="link-primary">查看更多</a>
<a href="#" class="link-muted">次要連結</a>
```

更多範例請參考 [TAILWIND_GUIDE.md](./TAILWIND_GUIDE.md)

## 🎨 顏色系統

### Primary（主要色）
- `#fb8d98` - 預設粉紅色
- `#e97c87` - Hover 狀態
- `#ffc4cb` - 淺色版本
- `#e5758a` - 深色版本

### Secondary（次要色）
- `#6c757d` - 預設灰色
- `#5a6268` - Hover 狀態

## 📝 開發注意事項

1. **編碼**：所有檔案使用 UTF-8 編碼
2. **一致性**：使用預定義的 class，避免寫死顏色代碼
3. **輪播**：輪播動畫保留在 `CSS/MainPage2.css`
4. **擴展性**：新頁面可複製 HTML 的 Tailwind 配置

## 🛠️ 技術棧

- **HTML5**
- **Tailwind CSS 3** (via CDN)
- **Font Awesome 6** (圖示庫)
- **Vanilla JavaScript** (輪播功能)

## 📖 相關文件

- [Tailwind CSS 使用指南](./TAILWIND_GUIDE.md) - 完整的樣式使用說明
- [Tailwind CSS 官方文件](https://tailwindcss.com/docs)
- [Font Awesome 圖示](https://fontawesome.com/icons)

## 🔄 未來規劃

- [ ] 新增更多頁面（結帳、訂單查詢等）
- [ ] 整合後端 API
- [ ] 優化 SEO
- [ ] 效能優化

---

**最後更新**：2025年11月8日  
**版本**：v2.0 - Tailwind CSS 整合版

