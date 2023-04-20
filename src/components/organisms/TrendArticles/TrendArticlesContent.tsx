import { useRecoilValue } from 'recoil';

import { useTrendingArticlesQuery } from '@/hooks/queries/trendings';
import { trendAtom } from '@/recoils/trendAtom';

import TrendArticleItem from './item/TrendArticleItem';

interface Props {
  isMobile: boolean;
}

const TrendArticlesContent = ({ isMobile }: Props) => {
  const trendType = useRecoilValue(trendAtom);
  const { data: trends } = useTrendingArticlesQuery({ type: trendType });
  return (
    <div>
      {trends
        ?.slice(0, isMobile ? 1 : trends.length)
        .map(({ id, title, author, timestamp }, idx) => (
          <TrendArticleItem
            key={idx}
            href={`${process.env.NEXT_PUBLIC_API_URL as string}/articles/${id}`}
            title={title}
            author={author}
            timestamp={timestamp}
          />
        ))}
    </div>
  );
};

export default TrendArticlesContent;
