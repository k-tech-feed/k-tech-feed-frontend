import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { Navbar } from '@nextui-org/react';

import { Logo, SearchInput } from '@/components';
import { searchInputAtom } from '@/recoils/searchInputAtom';

const Header = () => {
  const [input, setInput] = useRecoilState(searchInputAtom);
  const router = useRouter();

  return (
    <Navbar variant="sticky" css={{ zIndex: 1000 }}>
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
          aria-label="search"
          placeholder="검색"
          value={input}
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
