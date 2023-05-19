import Link from 'next/link';

import { Navbar } from '@nextui-org/react';

import { Logo } from '@/components';

import HeaderSerachInput from './HeaderSearchInput';

const Header = () => {
  return (
    <Navbar variant="sticky" css={{ zIndex: 1000 }} disableShadow maxWidth="fluid" isBordered>
      <Navbar.Brand css={{ cursor: 'pointer' }}>
        <Link href="/">
          <Logo />
        </Link>
      </Navbar.Brand>
      <Navbar.Content css={{ alignSelf: 'center' }}>
        <HeaderSerachInput />
      </Navbar.Content>
      <Navbar.Brand css={{ cursor: 'pointer', visibility: 'hidden' }}>
        <Link href="/">
          <Logo />
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
