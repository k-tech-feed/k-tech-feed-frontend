import { ArticleCard } from '@/components';
import { useArticlesQuery } from '@/hooks/queries/articles';

const ArticleContentSection = () => {
  const { articles } = useArticlesQuery();

  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </>
  );
};

export default ArticleContentSection;
