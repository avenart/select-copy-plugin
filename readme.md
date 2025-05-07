# Select Copy Button – jQuery Plugin

A lightweight jQuery plugin that displays a floating **"Copy"** button next to selected text — fully responsive and mobile-friendly.

Perfect for articles, documentation, or any block of text where users may want to easily copy selected snippets.

---

## 🚀 Features

- 📋 One-tap copy of selected text (uses Clipboard API)
- 📱 Mobile and desktop compatible
- 🧩 Easy integration with any DOM element
- 🎨 Customizable button styles and labels

---

## 📦 Installation

1. Include jQuery (version 3+ recommended)
2. Include the plugin files:

```html
<link rel="stylesheet" href="select-copy-plugin.css" />
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="jquery.select-copy-plugin.js"></script>
```

## 📦 Options

```js
$('#my-article').selectCopyButton({
  buttonText: 'Copy',
  copiedText: 'Copied!',
  buttonClass: 'custom-copy-btn',
})
```
