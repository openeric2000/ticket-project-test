# MainPage2 - 最終優化說明

## 更新日期
2025年11月8日（最終版本）

## 主要改進

### 1. 文件結構優化
- **CSS 獨立**: 所有自定義樣式已移至 `./CSS/MainPage2.css`
- **JavaScript 獨立**: 所有腳本已移至 `./JS/MainPage2.js`
- **Tailwind 配置**: 創建了獨立的 `tailwind.config.js` 配置文件

### 2. CSS 文件精簡 ✨
`MainPage2.css` 現在只保留：
1. **CSS Variables** (`:root`) - 定義主題顏色
2. **基礎樣式** - `html { scroll-behavior: smooth; }`
3. **自定義按鈕** - `.btn-primary`, `.btn-primary-outline`, `.btn-ticket`
4. **輪播相關樣式** - 所有 Tailwind 無法實現的輪播功能

移除的內容（改用 Tailwind）：
- ❌ Container 響應式設定（改用 Tailwind 的 `container` 類別）
- ❌ 通用工具類（改用 Tailwind 內建類別）
- ❌ 其他可用 Tailwind 實現的樣式

### 3. Tailwind CSS v4 升級
- 使用官方 Tailwind CSS v4 CDN: `https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4`
- 配置文件簡化，只定義主題顏色
- 所有樣式盡可能使用 Tailwind 原生類別

### 4. 顏色系統
#### CSS Variables (在 MainPage2.css)
```css
:root {
  --color-primary: #fb8d98;
  --color-primary-hover: #e97c87;
  --color-primary-light: #fce4e7;
}
```

#### Tailwind Config (在 tailwind.config.js)
```javascript
colors: {
  primary: {
    DEFAULT: '#fb8d98',
    hover: '#e97c87',
    light: '#fce4e7',
  },
}
```

#### 使用方式
HTML 中使用實際顏色值：
- `bg-[#fb8d98]` - 背景色
- `text-[#fb8d98]` - 文字色
- `hover:bg-[#e97c87]` - hover 背景色
- `border-[#fb8d98]` - 邊框色

CSS 中使用 CSS Variables：
```css
background-color: var(--color-primary);
```

### 5. 自定義按鈕類別（在 CSS 中）
為了減少重複的 Tailwind 類別組合，定義了三個按鈕類別：

#### `.btn-primary`
主要操作按鈕（粉紅底白字）
```css
display: inline-block;
background-color: var(--color-primary);
color: white;
padding: 0.75rem 1.5rem;
border-radius: 0.5rem;
...
```

#### `.btn-primary-outline`
次要操作按鈕（白底粉紅邊框）
```css
background-color: white;
color: var(--color-primary);
border: 2px solid var(--color-primary);
...
```

#### `.btn-ticket`
購票卡片按鈕（全寬粉紅按鈕）
```css
display: block;
width: 100%;
background-color: var(--color-primary);
...
```

### 6. 輪播樣式（完整保留）
保留所有輪播相關的樣式，因為這些無法用 Tailwind 實現：
- `.carousel-container` - 輪播容器
- `.carousel-inner` - 輪播內容
- `.carousel-item` - 輪播項目
- `.banner-slide` - Banner 幻燈片
- `.carousel-indicators` - 指示器
- `.carousel-control` - 控制按鈕
- `.carousel-control-prev/next` - 前後按鈕

## 文件清單

```
MainPage2.html              - 主頁面（使用 Tailwind 類別）
CSS/MainPage2.css           - 自定義樣式（輪播 + 按鈕 + CSS Variables）
JS/MainPage2.js             - 互動腳本
tailwind.config.js          - Tailwind 主題配置（顏色定義）
```

## 檔案大小對比
- **MainPage2.css**: 從 242 行精簡至約 200 行
- 移除了所有可用 Tailwind 替代的樣式
- 保留了必要的輪播和按鈕樣式

## 設計理念

### CSS 文件職責
只保留 **Tailwind 無法實現** 的樣式：
1. ✅ 輪播的複雜交互樣式
2. ✅ 自定義按鈕元件（方便重複使用）
3. ✅ CSS Variables（跨文件共用）
4. ✅ 基礎 HTML 設定（如 scroll-behavior）

### Tailwind Config 職責
定義 **可在其他頁面重用** 的主題設定：
1. ✅ 主題顏色（primary 系列）
2. ✅ 未來可擴展其他主題設定

### 新頁面開發指南
1. 引入 Tailwind CSS v4 CDN
2. 引入 `MainPage2.css`（獲得輪播和按鈕樣式）
3. 引入 `tailwind.config.js`（獲得主題顏色）
4. 直接使用 Tailwind 類別建構頁面
5. 如需輪播功能，複製相關 HTML 和 JS 代碼

## 編碼
所有文件使用 **UTF-8 編碼**，確保中文字符正確顯示。

## 瀏覽器支援
- Chrome/Edge (最新版)
- Firefox (最新版)
- Safari (最新版)

## 功能特性
✅ 響應式設計
✅ 無限循環輪播
✅ 拖曳/觸控支援
✅ 自動播放
✅ 手機版選單
✅ 登入 Modal
✅ 平滑滾動
✅ 主題顏色變數化
✅ CSS 精簡化
✅ 易於擴展到其他頁面

## 注意事項
1. Header 顏色使用 `bg-[#fb8d98]`，確保正確顯示
2. 自定義按鈕使用 class，如 `.btn-primary`
3. 輪播樣式完整保留在 CSS 文件中
4. 所有可用 Tailwind 實現的樣式都已移除
5. 新頁面可直接套用 `tailwind.config.js` 的主題設定
