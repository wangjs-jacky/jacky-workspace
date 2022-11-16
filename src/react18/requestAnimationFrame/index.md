## requestAnimationFrame

equestAnimationFrame，简写 rAF，引用 MDN 的介绍：

window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

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

## 参考文章：

1. [伢羽：React 之 requestAnimationFrame 执行机制探索](https://juejin.cn/post/7165780929439334437)
