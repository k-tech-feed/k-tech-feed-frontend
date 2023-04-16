import Image from 'next/image';

import { type CSS, Text, styled } from '@nextui-org/react';

interface Props {
  css?: CSS;
}

const Logo = (props: Props) => {
  return (
    <LogoWrapper {...props}>
      <Image src="/logo.svg" alt="k-tech-feed" width={32} height={32} />
      <LogoText hideIn="sm">K_TECH_FEED</LogoText>
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const LogoText = styled(Text, {
  weight: 'black',
  fontSize: '24px',
  fontWeight: 'bold',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
});
