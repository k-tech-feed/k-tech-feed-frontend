import { useRouter } from 'next/router';

import { Button, Text, styled } from '@nextui-org/react';

import { Logo } from '@/components';

const PageNotFound = () => {
  const router = useRouter();
  return (
    <PageWrapper>
      <Logo />
      <Text size={32} weight="bold">
        존재하지 않는 페이지 입니다.
      </Text>
      <Button onClick={() => router.push('/')}>홈페이지로 돌아가기</Button>
    </PageWrapper>
  );
};

export default PageNotFound;
const PageWrapper = styled('div', {
  display: 'flex',
  gap: '60px',
  position: 'relative',
  height: '100%',
  flexDirection: 'column',
  flexGrow: 1,
  flexShrink: 0,
  alignItems: 'center',
});
