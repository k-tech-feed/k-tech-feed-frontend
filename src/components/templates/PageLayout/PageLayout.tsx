import { type PropsWithChildren } from 'react';

import { styled } from '@nextui-org/react';

import { ContentLayout, Header, PopoverArea } from '@/components';

interface Props extends PropsWithChildren {
  className: string;
}

const PageLayout = ({ children, className }: Props) => {
  return (
    <PageWrapper className={className}>
      <Header />
      <PopoverArea />
      <ContentLayout>{children}</ContentLayout>
    </PageWrapper>
  );
};

export default PageLayout;

const PageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  position: 'relative',
});
