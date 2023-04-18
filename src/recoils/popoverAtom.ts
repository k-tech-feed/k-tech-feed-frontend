import { useEffect } from 'react';

import { atom, useRecoilState } from 'recoil';

const popoverAtom = atom({
  key: 'popoverAtom',
  default: true,
});

const usePopoverOpen = (openable: boolean) => {
  const [isOpen, setIsOpen] = useRecoilState(popoverAtom);

  useEffect(() => {
    setIsOpen(openable);
    if (openable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openable, setIsOpen]);

  return isOpen;
};

export { popoverAtom, usePopoverOpen };
