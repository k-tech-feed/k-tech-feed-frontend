import { type PropsWithChildren } from 'react';

import { styled } from '@nextui-org/react';

import { ContentLayout, Header, SearchPopover } from '@/components';
import usePopover from '@/hooks/utils/usePopover';

interface Props extends PropsWithChildren {
  className: string;
}

const PageLayout = ({ children, className }: Props) => {
  const { isPopoverOpen } = usePopover();

  return (
    <PageWrapper className={className}>
      <Header />
      {isPopoverOpen && <SearchPopover />}
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
