---
nav:
  title: 异步编程逻辑
group:
  title: Promise
---

## Promise 中的竞态问题

### 1. 使用指令式 `promise` 结合闭包

> 每次发出新的请求时，取消掉上次请求：

<code src="../onlyResolveLast/demo.jsx">
