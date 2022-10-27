---
group:
  title: 基础篇
  order: 1
---

# 布局方式

基于 flex 实现的布局方式

## 两栏布局

经典的两列布局由左右两列组成，其特性为一列宽度固定、另一列宽度自适应和两列高度固定且相等。

<code src="./two-columns-layout">

## 圣杯布局

<code src="./grail-layout">

## 居中方案

1. flex 方案（三行经典版）

   <code src="./center-layout/flex">

2. flex 方案（二行版）

   <code src="./center-layout/flex-2">

3. `diplay:inline-block` 版本

   声明 `display:inline-block` 将其变成行内块级元素，那可用 `text-align` 与 `line-height` 声明水平垂直居中了，但行内块级元素与匿名行内盒的基线对齐存在很大差异，所以需声明 `vertical-align:middle` 将其调整到垂直居中的位置，不过这也是近似垂直居中，父节点最后还需声明 `font-size:0` 消除该差异。

    <code src="./center-layout/inline-block">

4. 最传统的布局方案

   <code src="./center-layout/classic">

# 文字布局

## 文本环绕

节点声明 `float` 脱流时会让其跳出正常文档流，其他节点会忽略该节点并填补其原先空间。该节点的文本内容可不参与脱流效果，却会认同该节点所占据的空间并围绕它布局，这就是文字环绕效果的原理。

<code src="./text-layout">
