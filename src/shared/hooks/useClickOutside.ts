import { useCallback, useEffect } from 'react';

const useClickOutside = (
  callback: (e: MouseEvent) => void,
  ref: null | React.RefObject<HTMLDivElement>
): void => {
  const onClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!ref) {
        return;
      }

      if (ref.current && !ref.current.contains(e.target)) {
        callback(e);
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    window.addEventListener('click', onClickOutside);

    return () => {
      window.removeEventListener('click', onClickOutside);
    };
  }, [onClickOutside]);
};

export default useClickOutside;
