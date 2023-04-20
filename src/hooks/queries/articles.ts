import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { type AxiosError } from 'axios';

import { mockArticles, mockTrendHashTags } from '@/mocks/articles';
import { type Article } from '@/types/data';
import { apiRequest } from '@/utils/commonAxios';

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

const getArticles = async (
  afterId: number,
  size: number,
  optionParam?: Record<string, string>
): Promise<{ data: Article[]; afterId: number; isLast: boolean }> => {
  const { data } = await apiRequest.get<Article[]>('/articles', {
    params: {
      size,
      afterId,
      ...optionParam,
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

interface ArticleQueryProps {
  type?: string;
  param?: string;
  optionParam?: Record<string, string>;
}

const useArticlesQuery = ({ type = 'latest', optionParam = {} }: ArticleQueryProps) => {
  const { isReady } = useRouter();

  const { data, ...rest } = useInfiniteQuery<ArticlePagingData, AxiosError, ArticlePagingData>(
    ['articles', type, optionParam],
    ({ pageParam = 0 }) => getArticles(pageParam, 5, optionParam),
    {
      getNextPageParam: (lastPage) => (!lastPage.isLast ? lastPage.afterId : undefined),
      suspense: true,
      enabled: isReady,
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

export { useTrendArticlesQuery, useTrendHashTagsQuery, useArticlesQuery };
