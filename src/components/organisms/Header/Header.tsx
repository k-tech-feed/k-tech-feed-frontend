import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { Navbar } from '@nextui-org/react';

import { Logo, SearchInput } from '@/components';
import { searchInputAtom } from '@/recoils/atoms/searchInputAtom';

const Header = () => {
  const [input, setInput] = useRecoilState(searchInputAtom);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input === '' && inputRef.current) {
      inputRef.current.value = '';
    }
  }, [input]);

  return (
    <Navbar variant="sticky" css={{ zIndex: 1000 }} disableShadow maxWidth="fluid" isBordered>
      <Navbar.Brand onClick={() => router.push('/')} css={{ cursor: 'pointer' }}>
        <Logo
          css={{
            position: 'absolute',
            left: '20px',
          }}
        />
      </Navbar.Brand>
      <Navbar.Content>
        <SearchInput
          ref={inputRef}
          aria-label="search"
          placeholder="검색"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          css={{ zIndex: 2000 }}
        />
      </Navbar.Content>
      <Navbar.Content />
    </Navbar>
  );
};

export default Header;
