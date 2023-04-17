import { styled } from '@nextui-org/react';
import { useMediaQuery } from 'react-responsive';

import { ArticleSection, TrendArticles, TrendHashTags, TrendSelect } from '@/components';

export default function Home() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <PageWrapper>
      {!isDesktop && (
        <PageAside>
          <TrendSelect />
          <TrendArticles isMobile={!isDesktop} />
          <TrendHashTags />
        </PageAside>
      )}
      <ArticleSection />
      {isDesktop && (
        <PageAside>
          <TrendSelect />
          <TrendArticles isMobile={!isDesktop} />
          <TrendHashTags />
        </PageAside>
      )}
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

const PageAside = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: 'max-content',
  gap: '32px',
  width: '100%',
  '@md': {
    position: 'sticky',
    top: '76px',
    right: '0',
    width: '320px',
  },
});
