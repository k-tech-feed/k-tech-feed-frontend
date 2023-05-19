import { useRecoilValue } from 'recoil';

import { useDebounce } from 'usehooks-ts';

import { usePopoverOpen } from '@/recoils/atoms/popoverAtom';
import { searchInputAtom } from '@/recoils/atoms/searchInputAtom';

const usePopover = () => {
  const searchInput = useRecoilValue(searchInputAtom);
  const debouncedSearchInput = useDebounce(searchInput, 200);

  const isPopperOpen = usePopoverOpen(debouncedSearchInput.length > 0);

  return isPopperOpen;
};

export default usePopover;
