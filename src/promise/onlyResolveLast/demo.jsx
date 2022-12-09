import onlyResolvesLast from './index';

const Example = () => {
  const fn = (duration) =>
    new Promise((r) => {
      setTimeout(r, duration);
    });

  const wrappedFn = onlyResolvesLast(fn);

  const handleClick = () => {
    wrappedFn(500).then(() => console.log(1));
    wrappedFn(1000).then(() => console.log(2));
    wrappedFn(100).then(() => console.log(3));
    // 输出 3
  };

  return <button onClick={() => handleClick()}>连续发送三次 Promise</button>;
};

export default Example;
