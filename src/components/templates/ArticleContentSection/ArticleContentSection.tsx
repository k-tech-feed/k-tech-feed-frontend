import { useRouter } from 'next/router';

import { Text } from '@nextui-org/react';

import { ArticleCard } from '@/components';
import { useArticlesQuery } from '@/hooks/queries/articles';
import useIntersect from '@/hooks/utils/useIntersect';

const ArticleContentSection = () => {
  const {
    pathname,
    query: { id },
  } = useRouter();
  const type = pathname.split('/')[1];

  const {
    data: articles,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useArticlesQuery({
    type,
    optionParam: {
      [type === 'author' ? 'authorId' : type]: id as string,
    },
  });

  const ref = useIntersect(
    (entry, observer) => {
      observer.unobserve(entry.target);
      if (hasNextPage && !isFetching) {
        void fetchNextPage();
      }
    },
    {
      rootMargin: '40px',
    }
  );

  return (
    <>
      <>
        <div style={{ marginTop: '30px' }}>
          {!articles ||
            (articles.length === 0 && (
              <Text size={24} weight="bold">
                검색 결과가 존재하지 않습니다.
              </Text>
            ))}
        </div>
        {articles?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </>
      <div ref={ref}></div>
    </>
  );
};

export default ArticleContentSection;
