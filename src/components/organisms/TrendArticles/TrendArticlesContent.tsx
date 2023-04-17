import { useTrendArticlesQuery } from '@/hooks/queries/articles';

import TrendArticleItem from './item/TrendArticleItem';

interface Props {
  isMobile: boolean;
}

const TrendArticlesContent = ({ isMobile }: Props) => {
  const { articles: trends } = useTrendArticlesQuery();
  return (
    <div>
      {trends.slice(0, isMobile ? 1 : trends.length).map(({ title, company, pubDate }, idx) => (
        <TrendArticleItem key={idx} title={title} company={company} pubDate={pubDate} />
      ))}
    </div>
  );
};

export default TrendArticlesContent;
