import { useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
type EventHandler = (event: any) => void;
const useOnClickOutside = (
  ref: { current: HTMLElement | null },
  handler: EventHandler,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(<Node>event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
