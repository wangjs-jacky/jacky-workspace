---
group:
  title: 进阶篇
  order: 5
---

# CSS 函数

## 属性函数

技巧 1： 与伪元素结合

`attr(val)` 用于返回节点属性，通常结合伪元素的 `content` 使用，是一个很优雅的函数。

<code src="./attr/attr-1">

技巧 2： 与 `hover` 属性结合

<code src="./attr/attr-2">

核心代码如下:

```css
/* 结合 hover 提取 html 中的信息 */
&:hover::after {
  content: attr(data-msg);
}

/* 使用 css 实现初始值 */
&:empty::after {
  content: attr(data-msg);
}
```
