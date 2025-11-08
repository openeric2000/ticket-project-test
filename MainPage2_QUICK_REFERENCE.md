# MainPage2 - 快速參考

## 📁 文件結構
```
MainPage2.html          - 主頁面 (839 行)
CSS/MainPage2.css       - 自定義樣式 (169 行) ⬇️ 精簡版
JS/MainPage2.js         - 互動腳本 (226 行)
tailwind.config.js      - Tailwind 配置 (18 行)
```

## 🎨 顏色使用指南

### HTML 中使用 Tailwind 類別
```html
<!-- 背景色 -->
<header class="bg-[#fb8d98]">

<!-- 文字色 -->
<span class="text-[#fb8d98]">

<!-- Hover 效果 -->
<button class="bg-[#fb8d98] hover:bg-[#e97c87]">

<!-- 邊框色 -->
<div class="border-[#fb8d98]">
```

### CSS 中使用 CSS Variables
```css
/* 使用變數 */
background-color: var(--color-primary);
color: var(--color-primary);
border-color: var(--color-primary);

/* Hover 效果 */
background-color: var(--color-primary-hover);
```

### 可用的 CSS Variables
```css
--color-primary: #fb8d98
--color-primary-hover: #e97c87
--color-primary-light: #fce4e7
```

## 🎯 按鈕使用

### 主要按鈕
```html
<a href="#" class="btn-primary">立即購票</a>
```

### 次要按鈕（輪廓）
```html
<a href="#" class="btn-primary-outline">探索活動</a>
```

### 購票卡片按鈕
```html
<a href="#" class="btn-ticket">立即購票</a>
```

## 🎪 輪播功能

### HTML 結構
```html
<div id="heroCarousel" class="carousel-container">
  <div id="carouselInner" class="carousel-inner">
    <div class="carousel-item">
      <div class="banner-slide" style="background-image: url(...)">
        <!-- 內容 -->
      </div>
    </div>
  </div>
  <!-- 控制按鈕 -->
  <button id="prevBtn" class="carousel-control carousel-control-prev"></button>
  <button id="nextBtn" class="carousel-control carousel-control-next"></button>
  <!-- 指示器 -->
  <div class="carousel-indicators">...</div>
</div>
```

## 📦 新頁面開發流程

### 1. 建立 HTML 基礎結構
```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>新頁面</title>
  
  <!-- Tailwind CSS v4 -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  
  <!-- 自定義樣式（包含輪播和按鈕） -->
  <link rel="stylesheet" href="./CSS/MainPage2.css">
</head>
<body class="bg-gray-50">
  <!-- 你的內容 -->
</body>
</html>
```

### 2. 使用主題顏色
```html
<!-- Header -->
<header class="bg-[#fb8d98]">

<!-- 按鈕 -->
<button class="btn-primary">送出</button>
<a href="#" class="btn-primary-outline">取消</a>
```

### 3. 需要輪播時
1. 複製 `MainPage2.html` 中的輪播 HTML 結構
2. 複製 `MainPage2.js` 中的輪播相關代碼
3. CSS 樣式已包含在 `MainPage2.css` 中

## 🔧 常用 Tailwind 類別

### 間距
```
p-4    = padding: 1rem
px-6   = padding-left/right: 1.5rem
py-3   = padding-top/bottom: 0.75rem
mb-4   = margin-bottom: 1rem
```

### 文字
```
text-sm    = 小字
text-lg    = 大字
font-bold  = 粗體
text-center = 置中
```

### 佈局
```
flex           = display: flex
items-center   = align-items: center
justify-between = justify-content: space-between
container      = 響應式容器
mx-auto        = margin: 0 auto
```

### 顏色
```
bg-gray-50     = 淺灰背景
text-white     = 白色文字
text-gray-600  = 灰色文字
```

### 圓角與陰影
```
rounded-lg   = 圓角
shadow-sm    = 小陰影
```

## 💡 小技巧

### 1. 快速建立卡片
```html
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
  <!-- 卡片內容 -->
</div>
```

### 2. 響應式隱藏/顯示
```html
<!-- 手機版隱藏 -->
<div class="hidden lg:block">桌面版內容</div>

<!-- 桌面版隱藏 -->
<div class="lg:hidden">手機版內容</div>
```

### 3. Hover 效果
```html
<a class="text-gray-600 hover:text-[#fb8d98] transition">連結</a>
```

## ⚠️ 注意事項

1. **顏色使用**: 在 HTML 中使用 `bg-[#fb8d98]` 而非 `bg-primary`
2. **按鈕**: 優先使用 `.btn-primary` 等自定義類別
3. **輪播**: 完整樣式在 CSS 中，不要刪除
4. **編碼**: 所有文件必須使用 UTF-8
5. **Container**: 使用 Tailwind 的 `container mx-auto` 而非自定義

## 📚 參考資源

- [Tailwind CSS v4 文檔](https://tailwindcss.com)
- [Font Awesome Icons](https://fontawesome.com/icons)
- MainPage2_OPTIMIZATION.md - 完整優化說明
