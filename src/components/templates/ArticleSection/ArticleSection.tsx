import { Suspense } from 'react';

import { Text, styled } from '@nextui-org/react';

import { ArticleContentSection, ArticleLoading } from '@/components';

const ArticeSection = () => {
  return (
    <ArticleSectionWrapper>
      <Text size={32} weight="bold">
        최신 아티클
      </Text>
      <Suspense fallback={<ArticleLoading />}>
        <ArticleContentSection />
      </Suspense>
    </ArticleSectionWrapper>
  );
};

export default ArticeSection;

const ArticleSectionWrapper = styled('div', {
  position: 'relative',
  width: '680px',
});
