import { RefObject, useEffect } from 'react';

// This hook detects clicks outside of a specified element and updates the state accordingly.
// It is useful for closing dropdowns, modals, or any other UI elements that should close when clicked outside.
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