---
group:
  title: 进阶篇
---

# CSS 变量

## 条形加载条

<code src="./strip-loading/oldIndex" title="不使用 css 变量">

<code src="./strip-loading/newIndex" title="使用 css 变量">

## 心形加载条

1. 在造型的阶段，需要确定一条基准线，心脏在跳动的时候根据这条线进行垂直方向上的变化。

   使用 `height` + `transform: translateY(-xxx px)` 实现一个静态的心脏，如下：

<code src="./heart-loading/demo01">

2. 在静态的基础上，增加律动。律动体现在两个方面：

- 1. 垂直方向的动画律动，使用 `@keyframe` 控制 `height` 属性的变化。

- 2. 颜色的律动：使用色相旋转实现。

  - 角度单位： `deg`、`turn`(圈)、`rad`（`2pi`）

  ```css
  /* 计算角度 */
  --angle: calc(var(--line-index) / var(--line-count) * 0.5turn);
  /* 选择基础色 */
  background-color: #3c9;
  /* 旋转色相*/
  filter: hue-rotate(var(--angle));
  ```

<code src="./heart-loading/demo02">

## 悬浮按钮

实现方案：

1. 使用伪元素构造出一个光源效果，并将鼠标的中心定位到光源的中心，并使用 `--x` 与 `--y` 变量设置光源中心距离盒子的左侧与上侧的距离。
1. 使用 `js` 代码通过 `e.offset` 获取相对坐标，实时修改`--x` 与 `--y` 变量。

<code src="./suspend-button">

## 标签导航

<code src="./tab-navbar">
