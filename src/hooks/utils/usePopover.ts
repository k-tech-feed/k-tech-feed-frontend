import { usePopoverOpen } from '@/recoils/popoverAtom';
import { searchInputAtom } from '@/recoils/searchInputAtom';
import { useRecoilValue } from 'recoil';
import { useDebounce } from 'usehooks-ts';

const usePopover = () => {
  const searchInput = useRecoilValue(searchInputAtom);
  const debouncedSearchInput = useDebounce(searchInput, 200);
  const isPopperOpen = usePopoverOpen(debouncedSearchInput.trim().length > 0);

  return isPopperOpen;
};

export default usePopover;
