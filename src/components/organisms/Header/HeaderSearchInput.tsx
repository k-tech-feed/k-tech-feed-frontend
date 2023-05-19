import { useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { SearchInput } from '@/components';
import { inputFocusAtom } from '@/recoils/atoms/inputFocusAtom';
import { searchInputAtom } from '@/recoils/atoms/searchInputAtom';

const HeaderSerachInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [input, setInput] = useRecoilState(searchInputAtom);

  const setFocused = useSetRecoilState(inputFocusAtom);

  return (
    <SearchInput
      ref={ref}
      value={input}
      aria-label="search"
      placeholder="검색"
      onChange={(e) => {
        setInput(e.target.value);
      }}
      onFocus={(e) => {
        setFocused(true);
      }}
      css={{ zIndex: 2000 }}
    />
  );
};

export default HeaderSerachInput;
