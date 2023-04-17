import { useTrendArticlesQuery } from '@/hooks/queries/articles';

import TrendArticleItem from './item/TrendArticleItem';

const TrendArticlesContent = () => {
  const { articles: trends } = useTrendArticlesQuery();
  return (
    <div>
      {trends.map(({ title, company, pubDate }) => (
        <TrendArticleItem key={company.name} title={title} company={company} pubDate={pubDate} />
      ))}
    </div>
  );
};

export default TrendArticlesContent;
