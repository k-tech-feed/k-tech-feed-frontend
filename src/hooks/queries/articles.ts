import { useQuery } from '@tanstack/react-query';

import { mockArticles, mockTrendHashTags } from '@/mocks/articles';
import { type Article, type Category } from '@/types/data';

// TODO: axios를 통한 비동기 호출로 바꾸기
const articleResponse = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockArticles);
  }, 2000);
});

const trendArticleResponse = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockArticles.slice(0, 3));
  }, 2000);
});

const trendHashTagsResponse = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockTrendHashTags);
  }, 2000);
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
    hashTags: data as Category[],
    ...rest,
  };
};

export { useArticlesQuery, useTrendArticlesQuery, useTrendHashTagsQuery };
