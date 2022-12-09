import { createImperativePromise } from '../imperative-promise';
function onlyResolvesLast(fn) {
  // 保存上一个请求的 cancel 方法
  let cancelPrevious = null;

  const wrappedFn = (...args) => {
    // 当前请求执行前，先 cancel 上一个请求
    cancelPrevious && cancelPrevious();

    // 执行当前请求
    const result = fn.apply(this, args);

    // 创建指令式的 promise，暴露 cancel 方法并保存
    const { promise, cancel } = createImperativePromise(result);
    cancelPrevious = cancel;

    return promise;
  };
  return wrappedFn;
}

export default onlyResolvesLast;
