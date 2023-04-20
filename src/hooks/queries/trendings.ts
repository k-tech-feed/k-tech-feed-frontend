import { useQuery } from '@tanstack/react-query';

import { type Article, type Trend } from '@/types/data';
import { apiRequest } from '@/utils/commonAxios';

interface TrendingArticleQueryProps {
  type: Trend;
}

const getTrendingArticles = async ({ type }: TrendingArticleQueryProps) => {
  const { data } = await apiRequest.get<Article[]>('/trending/articles', {
    params: { type: type.toUpperCase() },
  });
  return data;
};

const useTrendingArticlesQuery = ({ type = 'weekly' }: TrendingArticleQueryProps) => {
  const { data, ...rest } = useQuery(
    ['trending', 'articles', type],
    () => getTrendingArticles({ type }),
    {
      suspense: true,
    }
  );

  return {
    data,
    ...rest,
  };
};

export { useTrendingArticlesQuery };
