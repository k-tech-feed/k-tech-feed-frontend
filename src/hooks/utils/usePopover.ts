import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { inputFocusAtom } from '@/recoils/atoms/inputFocusAtom';
import { popoverOpenState } from '@/recoils/selectors/popoverSelector';

const usePopover = () => {
  const isPopoverOpen = useRecoilValue(popoverOpenState);
  const setInputFocus = useSetRecoilState(inputFocusAtom);

  const closePopover = useCallback(() => {
    setInputFocus(false);
  }, [setInputFocus]);

  return {
    isPopoverOpen,
    closePopover,
  };
};

export default usePopover;
