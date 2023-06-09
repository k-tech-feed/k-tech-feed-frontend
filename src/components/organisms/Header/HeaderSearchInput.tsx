import { useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { SearchInput } from '@/components';
import { inputFocusAtom } from '@/recoils/atoms/inputFocusAtom';
import { searchInputAtom } from '@/recoils/atoms/searchInputAtom';

const HeaderSerachInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [input, setInput] = useRecoilState(searchInputAtom);

  const setFocused = useSetRecoilState(inputFocusAtom);

  useEffect(() => {
    if (ref.current) {
      ref.current.value = input;
    }
  }, [input]);

  return (
    <SearchInput
      ref={ref}
      ariaLabel="검색어 입력창"
      placeholder="검색어를 입력해주세요."
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
