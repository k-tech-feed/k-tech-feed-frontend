import { useQuery } from '@tanstack/react-query';

import { type Article, type Trend } from '@/types/data';
import { apiRequest } from '@/utils/commonAxios';

interface TrendingQueryProps {
  type: Trend;
}

const getTrendingArticles = async ({ type }: TrendingQueryProps) => {
  const { data } = await apiRequest.get<Article[]>('/trending/articles', {
    params: { type: type.toUpperCase() },
  });
  return data;
};

const useTrendingArticlesQuery = ({ type = 'weekly' }: TrendingQueryProps) => {
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

const getTrendingHashtags = async ({ type }: TrendingQueryProps) => {
  const { data } = await apiRequest.get<string[]>('/trending/hashtags', {
    params: { type: type.toUpperCase() },
  });
  return data;
};

const useTrendingHashtagsQuery = ({ type = 'weekly' }: TrendingQueryProps) => {
  const { data, ...rest } = useQuery(
    ['trending', 'hashtags', type],
    () => getTrendingHashtags({ type }),
    {
      suspense: true,
    }
  );

  return {
    data,
    ...rest,
  };
};

export { useTrendingArticlesQuery, useTrendingHashtagsQuery };
