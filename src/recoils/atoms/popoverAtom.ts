import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

import { v4 } from 'uuid';

const popoverAtom = atom({
  key: `popoverAtom/${v4()}`,
  default: false,
});

const usePopoverOpen = (openable: boolean) => {
  const [isOpen, setIsOpen] = useRecoilState(popoverAtom);

  useEffect(() => {
    setIsOpen(openable);
    if (openable) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '14px';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }
  }, [openable, setIsOpen]);

  return isOpen;
};

export { popoverAtom, usePopoverOpen };
