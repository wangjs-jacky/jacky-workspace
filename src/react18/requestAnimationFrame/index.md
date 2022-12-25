---
group:
  title: 通用
---

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

> 打开控制台后可以发现，一帧的执行时间基本在理论值(`60` 帧)刷新率上下浮动(`16.666ms`)。但此时会遇到一个问题，在高刷的屏幕上，动画执行的速度会更快。如本地显示屏是 `75Hz`, 实际测出的值是在 `13.3333ms` 上下波动。

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

以上代码可能会存在一个问题，`test.style.transform = 'translate(400px, 0)'` 和 `test.style.transform = 'translate(200px, 0)'`会在同一帧执行，会出现向右移动的情况（PS：Chrome 无痕浏览器未成功复现）

<!-- 在 `Life of a frame` 这张图中，我们也看到了，`rAF` 的执行时机在 `JS` 之后，`Layout、Paint` 之前，这也就意味着，`test.style.transform = 'translate(400px, 0)'` 和 `test.style.transform = 'translate(200px, 0)'`会在同一帧执行，所以后者会覆盖前者，这就相当于你只设置了 `translate(200px, 0)`，虽然有些违反直觉，但根据规范，应该是向右移动。
如果想让 `transform` 操作依次生效，可以使用一个小技巧：让 `400px` 在第一帧生效，让 `200px` 在第二帧生效。 -->

如果想要稳定实现向左移动的效果，可以使用一个小技巧，让 `transfrom: translate(400px,0)` 在第一帧生效，让 `transfrom: translate(200px,0)` 在第二帧生效，如下：

```javascript | pure
divDomRef.current.style.transform = 'transform(400px,0)';
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    divDomRef.current.style.transform = 'transform 0.5s linear';
    divDomRef.current.style.transform = 'translate(200px, 0)';
  });
});
```

<code src="./demo03.tsx">

## 兼容性考虑

根据 [Can I use 网站](https://caniuse.com/?search=requestAnimationFrame) 查询可知，在 `Edge` 以及 `IE` 浏览器可能在 `Paint` 阶段无法稳定触发的问题，主流浏览器的对 `rAF` 函数的兼容性都还挺好的。

```javascript
export const scheduleTimeout: any =
  typeof setTimeout === 'function' ? setTimeout : (undefined: any);

const localRequestAnimationFrame =
  typeof requestAnimationFrame === 'function' ? requestAnimationFrame : scheduleTimeout;
```

尝试使用 `setTimeout` 以及 `requestIdleCallback` 进行替换：

<code src="./demo04.tsx">

经测试发现:

1. `setTimeout` 时间间隔基本在 `4~5ms` 左右，而 `requestIdleCallback` 在 `12~13ms` 范围,与 `rAF` 函数范围相当。

   a. `setTimeout` 的执行时机需要涉及到事件循环机制的知识：主线程执行-微任务也执行完后-setTimetout 执行。

   b. `requestIdeCallback` 的执行时机：浏览器空余时间执行，这一点和 `rAF` 有些像，时间限制在一帧的范围内，具体时机是当浏览器执行完 `JS` 以及渲染操作后，如果还有空余时间才会再去执行 `requestIdleCallback` 函数。

2. `rAF` 与 `requestIdleCallback` 的区别： `rAF` 函数是高优先级任务，一定会执行，而 `rLC`函数属于低优先级任务。如果浏览器长期处于繁忙状态的话，因配置第二个参数 `timeout`，如 `requestIdleCallback(cb,{timeout:2000})`。

## 参考文章：

1. [伢羽：React 之 requestAnimationFrame 执行机制探索](https://juejin.cn/post/7165780929439334437)
2. [趣谈前端：徐小夕](https://blog.csdn.net/KlausLily/article/details/122852531)
