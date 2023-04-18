import { useRouter } from 'next/router';
import { Suspense } from 'react';

import { Text, styled } from '@nextui-org/react';

import { ArticleContentSection, ArticleLoading } from '@/components';

const ArticeSection = () => {
  const router = useRouter();

  const {
    pathname,
    query: { keyword },
  } = router;

  return (
    <ArticleSectionWrapper>
      <Text size={32} weight="bold">
        {pathname === '/search'
          ? `${(keyword as string) ?? '아티클'} 에 대한 검색 결과 `
          : '최신 아티클'}
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
  width: '100%',
});
