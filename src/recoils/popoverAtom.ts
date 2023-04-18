import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

import { v4 } from 'uuid';

const popoverAtom = atom({
  key: `popoverAtom/${v4()}`,
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
