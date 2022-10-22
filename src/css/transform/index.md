---
group:
  title: 进阶篇
---

## 变化与动画

### 心形

<code src="./heart">

## 1 px 问题

参考：[transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin) <code src="./onepx-border">

# 使用 scale 实现翻转

`transform:scale()` 为负值将内容直接翻转。

- 水平翻转：`transform:scale(1,-1)`
- 垂直翻转：`transform:scale(-1,1)`
- 倒序翻转：`transform:scale(-1,-1)`

<code src="./flip-content">
