import { styled } from '@nextui-org/react';

import { Logo, SearchInput } from '@/components';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo
        css={{
          position: 'absolute',
          left: '20px',
        }}
      />
      <SearchInput id="searchbar" aria-label="search" placeholder="검색" />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled('header', {
  width: '100%',
  minWidth: '100vw',
  borderBottom: '1px solid $gray100',
  position: 'relative',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
