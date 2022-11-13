---
group:
  title: canvas
  order: 5
---

# Canvas 基础入门

## 熟悉基础 api

```javascript | pure
/* 获取上下文 */
const context = canvas.getContext('2d');
/* 轮廓画法 */
context?.strokeRect(50, 50, 150, 150);
/* 填充画法 */
context?.fillRect(100, 100, 150, 150);
/* 清屏 api */
context?.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
```

<code src="./demo01.tsx">

## 抬笔动作

上一个例子中，使用了 `strokeRect` 和 `fillRect` 是一种复合写法，包含了两个动作,分别是路径绘制 + 绘制动作(fill|stroke)

```javascript | pure
/* 路径 */
context.rect(100, 100, 150, 150);
/* 填充 */
context.fill();
/* 轮廓 */
context.stroke();
```

当采用这种绘制方式时，需要有一个抬笔的动作。

```javascript | pure
context.beginPath();
context.closePath();
```

<code src="./demo02.tsx">

## 画圆

<code src="./demo03.tsx">

## 封装路径

上面笑脸案例中，频繁使用 `context.beginPath();` 和 `context.closePath()` 来封闭一个图案, 其实可用 `Path2D` 重构这个步骤。

使用 `Path2D` 重构笑脸，代码如下：

```javascript | pure
const facePath = new Path2D();
/* 定位到圆心 */
facePath.arc(150, 150, 100, 0, Math.PI * 2);
context.fillStyle = '#f6e58d';
context.fill(facePath);
context.stroke(facePath);
```

<code src="./demo04.tsx">
