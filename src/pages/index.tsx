import { styled } from '@nextui-org/react';
import { useMediaQuery } from 'react-responsive';

import { ArticleSection, TrendSection } from '@/components';

export default function Home() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <PageWrapper>
      {!isDesktop && <TrendSection />}
      <ArticleSection />
      {isDesktop && <TrendSection />}
    </PageWrapper>
  );
}

const PageWrapper = styled('div', {
  display: 'flex',
  gap: '60px',
  position: 'relative',
  height: '100%',
  flexDirection: 'column',
  width: '680px',
  '@md': {
    width: '100%',
    flexDirection: 'row',
  },
});
