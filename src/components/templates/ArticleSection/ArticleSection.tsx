import { useRouter } from 'next/router';
import { Suspense } from 'react';

import { Text, styled } from '@nextui-org/react';

import { ArticleContentSection, ArticleLoading } from '@/components';
import { useAuthorQuery } from '@/hooks/queries/authors';

const ArticeSection = () => {
  const router = useRouter();

  const {
    pathname,
    query: { id },
  } = router;

  const { data: author } = useAuthorQuery(id as string);

  return (
    <ArticleSectionWrapper>
      <Text as="h1" size={32} weight="semibold">
        {pathname === '/' && '최신 아티클'}
        {pathname.includes('/keyword') && `${(id as string) ?? '아티클'} 에 대한 검색 결과 `}
        {pathname.includes('/author') && `${author?.name ?? '아티클'} 에 대한 검색 결과 `}
        {pathname.includes('/hashtag') && `${(id as string) ?? '아티클'} 에 대한 검색 결과 `}
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
