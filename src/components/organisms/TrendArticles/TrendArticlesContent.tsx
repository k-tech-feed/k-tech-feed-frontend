import { useTrendArticlesQuery } from '@/hooks/queries/articles';

import TrendArticleItem from './item/TrendArticleItem';

const TrendArticlesContent = () => {
  const { articles: trends } = useTrendArticlesQuery();
  return (
    <div>
      {trends.map(({ title, company, pubDate }, idx) => (
        <TrendArticleItem key={idx} title={title} company={company} pubDate={pubDate} />
      ))}
    </div>
  );
};

export default TrendArticlesContent;
