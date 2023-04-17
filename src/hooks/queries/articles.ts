import { mockArticles } from '@/mocks/articles';
import { type Article } from '@/types/data';
import { useQuery } from '@tanstack/react-query';

// TODO: axios를 통한 비동기 호출로 바꾸기
const articleResponse = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockArticles);
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

export { useArticlesQuery };
