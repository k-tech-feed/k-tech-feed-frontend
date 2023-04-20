import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { type AxiosError } from 'axios';

import { mockArticles, mockTrendHashTags } from '@/mocks/articles';
import { type Article } from '@/types/data';
import { apiRequest } from '@/utils/commonAxios';

// TODO: axios를 통한 비동기 호출로 바꾸기
const articleResponse = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockArticles);
  }, 2000);
});

const trendArticleResponse = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockArticles.slice(0, 3));
  }, 1000);
});

const trendHashTagsResponse = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockTrendHashTags);
  }, 1500);
});

const useArticlesQuery = () => {
  const { data, ...rest } = useQuery(['articles'], () => articleResponse, {
    suspense: true,
  });

  return {
    articles: data as Article[],
    ...rest,
  };
};

const getLatestArticles = async (
  afterId: number,
  size: number
): Promise<{ data: Article[]; afterId: number; isLast: boolean }> => {
  const { data } = await apiRequest.get<Article[]>('/articles', {
    params: {
      size,
      afterId,
    },
  });

  return {
    data,
    afterId: data[data.length - 1]?.id,
    isLast: data.length < size,
  };
};

interface ArticlePagingData {
  data: Article[];
  afterId: number;
  isLast: boolean;
}

const useLatestArticlesQuery = () => {
  const { data, ...rest } = useInfiniteQuery<ArticlePagingData, AxiosError, ArticlePagingData>(
    ['articles', 'latest'],
    ({ pageParam = 0 }) => getLatestArticles(pageParam, 5),
    {
      getNextPageParam: (lastPage) => (!lastPage.isLast ? lastPage.afterId : undefined),
      suspense: true,
    }
  );

  const articles = data ? data.pages.flatMap(({ data }) => data) : undefined;

  return {
    data: articles,
    ...rest,
  };
};

const useTrendArticlesQuery = () => {
  const { data, ...rest } = useQuery(['articles', 'trend'], () => trendArticleResponse, {
    suspense: true,
  });

  return {
    articles: data as Article[],
    ...rest,
  };
};

const useTrendHashTagsQuery = () => {
  const { data, ...rest } = useQuery(['trend', 'hashtags'], () => trendHashTagsResponse, {
    suspense: true,
  });

  return {
    hashTags: data as string[],
    ...rest,
  };
};

export { useArticlesQuery, useTrendArticlesQuery, useTrendHashTagsQuery, useLatestArticlesQuery };
