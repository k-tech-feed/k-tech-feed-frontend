import { Navbar } from '@nextui-org/react';

import { Logo, SearchInput } from '@/components';

const Header = () => {
  return (
    <Navbar variant="sticky" css={{ width: '100vw' }}>
      <Navbar.Brand>
        <Logo
          css={{
            position: 'absolute',
            left: '20px',
          }}
        />
      </Navbar.Brand>
      <Navbar.Content>
        <SearchInput aria-label="search" placeholder="검색" />
      </Navbar.Content>
      <Navbar.Content />
    </Navbar>
  );
};

export default Header;
