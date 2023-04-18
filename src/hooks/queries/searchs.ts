import { useQuery } from '@tanstack/react-query';

import { mockSearchResults } from '@/mocks/searchResults';
import { type SearchResult } from '@/types/data';

const searchResponse = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockSearchResults);
  }, 5000);
});

const useSearchQuery = (keyword: string) => {
  const { data, ...rest } = useQuery(['search', keyword], () => searchResponse, {
    suspense: true,
  });
  return {
    result: data as SearchResult,
    ...rest,
  };
};

export { useSearchQuery };
