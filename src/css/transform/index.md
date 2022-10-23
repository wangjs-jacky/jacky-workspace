---
group:
  title: 进阶篇
---

## 变化与动画

### 心形

<code src="./heart">

### 1 px 问题

参考：[transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin) <code src="./onepx-border">

### 使用 scale 实现翻转

`transform:scale()` 为负值将内容直接翻转。

- 水平翻转：`transform:scale(1,-1)`
- 垂直翻转：`transform:scale(-1,1)`
- 倒序翻转：`transform:scale(-1,-1)`

<code src="./flip-content">

## `Transition` 的使用

> 背景知识：[transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)

`transition` 共可接受四个属性：`transition: property duration time-function delay`

| 参数名称 | 含义 | 举例 |
| --- | --- | --- |
| `Property` | 设置需要过的属性 | `all` 或者某个具体的属性 `width` |
| `Duration` | 持续时间 | `0ms` |
| `time-function` | 缓动函数 | 直接参考[内塞尔函数](https://cubic-bezier.com/#.17,.67,.83,.67) |
| `transition-delay` | 等待时间 | `0ms` |

<code src="./switch-btn">

其中，`transition: all 300ms cubic-bezier(.4, .4, .25, 1.35)` 对应的贝塞尔曲线如下，可以发现切换按钮时会有一个刹车动画。

<img src="https://wjs-tik.oss-cn-shanghai.aliyuncs.com/image-20221022221246022.png" style="zoom: 33%;" />

### 自动打字机

> 知识点：[animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)

| 参数名称                  | 含义                         | 举例                                                         |
| ------------------------- | ---------------------------- | ------------------------------------------------------------ |
| `animation-name`          | `@keyframes` 的名称          | 如：`auto-typing`                                            |
| `animation-duration`      | 动画持续时间                 | 100ms                                                        |
| `animation-time-function` | 运动函数                     | 关键帧及逐帧两种模式，如果是关键帧，可以使用 `贝塞尔函数`，逐帧则是使用 `steps`（打字机） |
| `animation-delay`         | 延迟时间                     | 0ms                                                          |
| `animation-direction`     | 指定动画运行方式及结束方式。 | 默认为向前循环，本例打字机使用的是 `alternate` ，即动画结束后沿路反向执行。 |

<code src="./auto-typing">
