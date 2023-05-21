import { useEffect } from 'react';

import { SearchPopover } from '@/components';
import usePopover from '@/hooks/utils/usePopover';

const PopoverArea = () => {
  const { isPopoverOpen } = usePopover();

  useEffect(() => {
    if (isPopoverOpen) {
      // scroll overflow
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '14px';
    } else {
      // scroll overflow
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }
  }, [isPopoverOpen]);

  return isPopoverOpen ? <SearchPopover /> : null;
};

export default PopoverArea;
