import { ArticleCard } from '@/components';
import { useLatestArticlesQuery } from '@/hooks/queries/articles';
import useIntersect from '@/hooks/utils/useIntersect';

const ArticleContentSection = () => {
  const { data: articles, fetchNextPage, hasNextPage, isFetching } = useLatestArticlesQuery();

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
        {articles?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </>
      <div ref={ref}></div>
    </>
  );
};

export default ArticleContentSection;
