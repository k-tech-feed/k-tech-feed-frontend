import { useRecoilValue_TRANSITION_SUPPORT_UNSTABLE } from 'recoil';

import { useTrendingArticlesQuery } from '@/hooks/queries/trendings';
import { trendAtom } from '@/recoils/atoms/trendAtom';

import TrendArticleItem from './item/TrendArticleItem';

interface Props {
  isMobile: boolean;
}

const TrendArticlesContent = ({ isMobile }: Props) => {
  const trendType = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(trendAtom);
  const { data: trends } = useTrendingArticlesQuery({ type: trendType });
  return (
    <ul style={{ margin: 0 }}>
      {trends?.slice(0, isMobile ? 1 : 3).map(({ id, title, author, timestamp }, idx) => (
        <TrendArticleItem
          key={idx}
          href={`${process.env.NEXT_PUBLIC_API_URL as string}/articles/${id}`}
          title={title}
          author={author}
          timestamp={timestamp}
        />
      ))}
    </ul>
  );
};

export default TrendArticlesContent;
