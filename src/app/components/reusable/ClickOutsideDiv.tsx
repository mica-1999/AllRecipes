import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  reference: RefObject<HTMLElement | null>,
  setState: (value: boolean) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (reference.current && !reference.current.contains(event.target as Node)) {
        setState(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [reference, setState]);
};