import { selector } from 'recoil';

import { v4 } from 'uuid';

import { inputFocusAtom } from '@/recoils/atoms/inputFocusAtom';
import { searchInputAtom } from '@/recoils/atoms/searchInputAtom';

const popoverOpenState = selector({
  key: `popoverOpenState/${v4()}`,
  get: ({ get }) => {
    const searchInput = get(searchInputAtom);
    const inputFocus = get(inputFocusAtom);

    return searchInput.length > 0 && inputFocus;
  },
});

export { popoverOpenState };
