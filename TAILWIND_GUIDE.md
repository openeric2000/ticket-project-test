# Tailwind CSS 設計系統說明

本專案使用 Tailwind CSS 進行樣式管理，並在 HTML 中內嵌配置以確保統一的設計風格。

## 🎨 主題顏色

### Primary 色系（主要品牌色）
- `text-primary` 或 `bg-primary`: #fb8d98（粉紅色）
- `text-primary-hover` 或 `bg-primary-hover`: #e97c87（深粉紅色，用於 hover）
- `text-primary-light` 或 `bg-primary-light`: #ffc4cb（淺粉紅色）
- `text-primary-dark` 或 `bg-primary-dark`: #e5758a（更深的粉紅色）

### Secondary 色系（次要色）
- `text-secondary` 或 `bg-secondary`: #6c757d（灰色）
- `text-secondary-hover` 或 `bg-secondary-hover`: #5a6268（深灰色）

## 🔘 按鈕樣式

### 基本按鈕
```html
<button class="btn">基本按鈕</button>
```

### 主要按鈕（粉紅色）
```html
<button class="btn-primary">主要按鈕</button>
<a href="#" class="btn-primary">連結按鈕</a>
```

### 外框按鈕（白底粉邊）
```html
<button class="btn-outline-primary">外框按鈕</button>
```

### 按鈕尺寸
```html
<button class="btn-primary btn-lg">大按鈕</button>
<button class="btn-primary">一般按鈕</button>
<button class="btn-primary btn-sm">小按鈕</button>
```

## 📦 卡片樣式

### 基本卡片
```html
<div class="card">
  <img src="..." class="card-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">卡片標題</h5>
    <p>卡片內容...</p>
  </div>
</div>
```

### 帶圖片的活動卡片
```html
<div class="card h-full">
  <div class="card-img" style="background-image: url('...');"></div>
  <div class="card-body">
    <h5 class="card-title">活動名稱</h5>
    <ul class="text-sm text-gray-600 mb-4 space-y-1">
      <li><i class="fa-solid fa-location-dot mr-1"></i>地點</li>
      <li><i class="fa-regular fa-calendar mr-1"></i>日期</li>
    </ul>
    <a href="#" class="block w-full btn-primary">立即購票</a>
  </div>
</div>
```

## 🔗 連結樣式

### 主要連結（粉紅色）
```html
<a href="#" class="link-primary">主要連結</a>
```

### 次要連結（灰色到粉紅色）
```html
<a href="#" class="link-muted">次要連結</a>
```

## 🏷️ 標籤/徽章

### 粉紅色徽章
```html
<span class="badge-primary">公告</span>
```

### 自訂徽章
```html
<span class="badge bg-blue-100 text-blue-600">自訂</span>
```

## 📝 表單元素

### 輸入框
```html
<input type="text" class="input" placeholder="請輸入..." />
<input type="email" class="input" placeholder="Email" />
```

### 表單按鈕
```html
<button type="submit" class="btn-primary">提交</button>
<button type="submit" class="w-full btn-primary">全寬按鈕</button>
```

## 🌐 導航連結

### Header 導航連結（白色）
```html
<a href="#" class="nav-link">導航項目</a>
```

## 📱 社交媒體圖示

```html
<a href="#" class="social-icon" aria-label="Facebook">
  <i class="fa-brands fa-facebook-f text-gray-600"></i>
</a>
```

## 📋 列表項目

### 公告列表項目
```html
<a href="#" class="list-item">
  <span>
    <span class="badge-primary mr-2">公告</span>
    公告內容...
  </span>
  <small class="text-gray-500 text-sm">2025-11-01</small>
</a>
```

## 🪟 模態框

```html
<div class="modal hidden" id="myModal">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">標題</h5>
      <button class="text-gray-400 hover:text-gray-600">×</button>
    </div>
    <div class="modal-body">
      內容...
    </div>
  </div>
</div>
```

## 📐 佈局

### 容器
專案使用自訂的 container 設定，提供更大的留白：
```html
<div class="container mx-auto">
  內容...
</div>
```

### 章節標題
```html
<div>
  <h3 class="section-title">章節標題</h3>
  <p class="section-description">章節描述</p>
</div>
```

## 🎡 輪播（Carousel）

輪播樣式仍使用 CSS 檔案（`CSS/MainPage2.css`）處理，因為它包含複雜的動畫和互動效果。

相關 class：
- `.carousel-container`
- `.carousel-inner`
- `.carousel-item`
- `.banner-slide`
- `.carousel-indicators`
- `.carousel-control`

## 📦 容器尺寸設定

| 螢幕寬度 | 容器最大寬度 | 左右 Padding |
|---------|------------|-------------|
| < 576px | 100% | 15px |
| ≥ 576px | 540px | 20px |
| ≥ 768px | 720px | 30px |
| ≥ 992px | 960px | 40px |
| ≥ 1200px | 1140px | 50px |
| ≥ 1400px | 1320px | 60px |

## 🚀 使用方式

### 在新頁面中使用

1. 複製 `MainPage2.html` 的 `<head>` 部分中的 Tailwind CSS 配置
2. 引入 Font Awesome（如需要圖示）
3. 如需輪播功能，引入 `CSS/MainPage2.css`
4. 使用上述的 class 名稱進行開發

### 自訂顏色

如需修改主題色，請在 HTML 的 `<script>` 標籤中修改 `tailwind.config`：

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#你的顏色',
          hover: '#你的顏色',
          // ...
        },
      },
    },
  },
}
```

## ⚠️ 注意事項

1. **編碼**：所有檔案均使用 UTF-8 編碼，確保中文正常顯示
2. **一致性**：使用統一的 class 名稱，避免直接寫顏色代碼（如 `#fb8d98`）
3. **響應式**：大部分元件都已考慮響應式設計，使用 Tailwind 的 `sm:`, `md:`, `lg:` 等前綴
4. **輪播特例**：輪播動畫保留在 CSS 檔案中，因其包含複雜的動畫效果

## 🎯 最佳實踐

1. **新增按鈕**：使用 `btn-primary` 或 `btn-outline-primary`
2. **新增卡片**：使用 `card`、`card-body`、`card-title`
3. **新增連結**：使用 `link-primary` 或 `link-muted`
4. **新增表單**：使用 `input` class
5. **保持一致**：優先使用預定義的 class，避免直接使用 Tailwind utilities

---

**維護者注意**：如需新增更多共用元件樣式，請在 HTML 的 `@layer components` 中新增定義。
