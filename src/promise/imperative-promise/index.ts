/* resolve 既有可能接受结果，也可以接受 Promise 类型 */
type ResolveCallback<T> = (value: T | PromiseLike<T>) => void;
type RejectCallback = (reason?: any) => void;
type CancelCallback = () => void;

export type ImperativePromise<T> = {
  promise: Promise<T>;
  resolve: ResolveCallback<T>;
  reject: RejectCallback;
  cancel: CancelCallback;
};

export function createImperativePromise<T>(promiseFun?: Promise<T>): ImperativePromise<T> {
  /* 将传入的 Promise 的 resolve/reject 继承到下面的变量中 */
  let resolve: ResolveCallback<T> | null = null;
  let reject: RejectCallback | null = null;

  /* 将回调内的变量(这里为 resolve/reject 函数)给拿到外部 */
  /* 以下代码为立即执行的： */
  const wrappedPromise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  /* 异步执行，有可能为 null */
  promiseFun &&
    promiseFun.then(
      (val) => {
        resolve && resolve(val);
      },
      (error) => {
        reject && reject(error);
      },
    );

  return {
    promise: wrappedPromise,
    resolve: (value: T | PromiseLike<T>) => {
      resolve && resolve(value);
    },
    reject: (reason?: any) => {
      reject && reject(reason);
    },
    cancel: () => {
      resolve = null;
      reject = null;
    },
  };
}
