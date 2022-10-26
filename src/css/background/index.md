---
group:
  title: 基础篇
  order: 2
---

## 背景与遮罩

### 贴图效果

> 知识点： `background-position` 和 `background-size` 的设置

<code src="./pasted-bg" >

使用 `background-position: center top` 实现行居中，高贴顶的效果。

使用 `background-size: auto 300px` 实现宽自适应，高度固定的效果。

### 镂空文字

> 知识点: [`background-clip`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
>
> 这个属性主要用途就是设置背景主题的作用范围，由内向外分别为：`text` -> `content-box` -> `padding-box` -> `border-box`

在上述代码的基础上，只需要多加两行代码即可实现镂空文字效果。

```css
background-clip: text;
color: transparent;
```

<code src="./hollow-text" >

### 方格背景

step-1 : 使用 `linear-gradient` 创建一个带有明确边界的图案

```css
linear-gradient(180deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);

```

<code src="./square-bg/single-square-1">

step-2 : `linear-gradient` 推荐使用角度

```css
linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);

```

<code src="./square-bg/single-square-2">

step-3: 使用 `repeat` 拷贝

<code src="./square-bg">

### 网格背景

<code src="./square-bg/grid-bg">
