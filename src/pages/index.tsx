import { styled } from '@nextui-org/react';

import { ArticleSection, TrendArticles, TrendHashTags, TrendSelect } from '@/components';

export default function Home() {
  return (
    <PageWrapper>
      <ArticleSection />
      <PageAside>
        <TrendSelect />
        <TrendArticles />
        <TrendHashTags />
      </PageAside>
    </PageWrapper>
  );
}

const PageWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '60px',
  position: 'relative',
  height: '100%',
});

const PageAside = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: 'max-content',
  gap: '32px',
  position: 'sticky',
  top: '76px',
  right: '0',
});
