import { useEffect, useRef } from 'react';

interface Props {
  onClickOutside: (e: MouseEvent) => void;
}

const useClickOutside = <T extends HTMLElement = HTMLElement>({ onClickOutside }: Props) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickOutside(e);
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [onClickOutside]);

  return ref;
};

export default useClickOutside;
