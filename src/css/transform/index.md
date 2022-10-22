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
