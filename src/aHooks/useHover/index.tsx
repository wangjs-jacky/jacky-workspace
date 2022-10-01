import { useState } from 'react';
import useEventListener from '../useEventListener';

interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
}
const useHover = (target: any, options?: Options): boolean => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { onEnter, onLeave } = options || {};

  useEventListener(
    'mouseenter',
    () => {
      // 执行外部传入的 enter 事件
      onEnter?.();
      setIsHover(true);
    },
    target,
  );

  useEventListener(
    'mouseleave',
    () => {
      onLeave?.();
      setIsHover(false);
    },
    target,
  );

  return isHover;
};

export default useHover;
