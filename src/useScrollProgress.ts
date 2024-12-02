import {
  useCallback,
  useRef,
  useState,
  type UIEvent,
  type WheelEvent,
} from 'react';

export const useScrollProgress = <
  Element extends HTMLElement,
  TargetReachedFn extends (...args: any[]) => void,
>({
  target = 70,
  onTargetReached,
  direction = 'down',
}: {
  direction?: 'up' | 'down';
  target?: number;
  onTargetReached?: TargetReachedFn;
}) => {
  const scrollingPane = useRef<Element>(null);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  const onWheel = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      const deltaY = event.deltaY;
      const direction = deltaY > 0 ? 'down' : 'up';

      if (direction !== scrollDirection) {
        return setScrollDirection(direction);
      }

      return;
    },
    [scrollDirection, setScrollDirection],
  );

  const onScroll = useCallback(
    (event: UIEvent<Element>) => {
      const element = event.currentTarget;
      const scrollProgress = Math.floor(
        (element.scrollTop / (element.scrollHeight - element.clientHeight)) *
          100,
      );

      if (scrollProgress > target && scrollDirection === direction) {
        return onTargetReached?.();
      }

      return;
    },
    [onTargetReached, target, scrollDirection, direction],
  );

  const props = {
    onScroll,
    onWheel,
  };

  return {
    ref: scrollingPane,
    props,
  };
};
