## requestAnimationFrame

`requestAnimationFrame`，简写 `rAF`，引用 MDN 的介绍：

`window.requestAnimationFrame()` 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

使用 `rAF` 函数，每一帧执行 `1px` 距离：

<code src="./demo01.tsx">

> PS: 如何计算时间差：
>
> ```javascript
> let timeStamp = window.performance.now(); // ms 数 (性能监控常用)
> let timeStamp = +new Date(); // 推荐常用操作
> let timeStamp = Date().now();
> let timeStamp = new Date().getTime();
> /* 计算差值 */
> let elaspe = (newTime - oldTime).toFixed(3); //  保留3为小数
> ```

> 打开控制台后可以发现，一帧的执行时间基本在理论值(1s 60 帧)刷新率上下浮动(`16.666ms`)。但此时会遇到一个问题，在高刷的屏幕上，动画执行的速度会更快。

## 执行时机

`rAF` 函数的执行时机如下图所示：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f9f648e47f304af586f629bcfecfaf69~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

关键在于 `requestAnimationFrame` 的执行时机在 `JS` 执行之后，以及 `Layout` 和 `Paint` 之前。

观察下面这个代码，方块的移动方向是什么？

```typescript | pure
/* 初始位置：0px */
if (divDomRef.current) {
  divDomRef.current.style.transform = 'translate(0px, 0px)';
}
const handleClick = () => {
  /* 点击后：先设置到 400px */
  if (divDomRef.current) {
    divDomRef.current.style.transform = 'translate(400px, 0)';
  }
  requestAnimationFrame(() => {
    if (divDomRef.current) {
      /* 在 rAF 函数中设置到 200px */
      divDomRef.current.style.transform = 'translate(200px, 0)';
      divDomRef.current.style.transition = 'transform 0.5s linear';
    }
  });
};
```

<code src="./demo02.tsx">

在 `Life of a frame` 这张图中，我们也看到了，`rAF` 的执行时机在 `JS` 之后，`Layout、Paint` 之前，这也就意味着，`test.style.transform = 'translate(400px, 0)'` 和 `test.style.transform = 'translate(200px, 0)'`会在同一帧执行，所以后者会覆盖前者，这就相当于你只设置了 `translate(200px, 0)`，虽然有些违反直觉，但根据规范，应该是向右移动。

如果想让 `transform` 操作依次生效，可以使用一个小技巧：让 `400px` 在第一帧生效，让 `200px` 在第二帧生效。

```javascript | pure
divDomRef.current.style.transform = 'transform(400px,0)';
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    divDomRef.current.style.transform = 'transform 0.5s linear';
    divDomRef.current.style.transform = 'translate(200px, 0)';
  });
});
```

## 参考文章：

1. [伢羽：React 之 requestAnimationFrame 执行机制探索](https://juejin.cn/post/7165780929439334437)
