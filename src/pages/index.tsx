import { styled } from '@nextui-org/react';

import { ArticleSection, TrendArticles } from '@/components';

export default function Home() {
  return (
    <PageWrapper>
      <ArticleSection />
      <TrendArticles />
    </PageWrapper>
  );
}

const PageWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '32px',
  position: 'relative',
});
