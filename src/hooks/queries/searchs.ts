import { useQuery } from '@tanstack/react-query';

import { mockSearchHints } from '@/mocks/searchResults';
import { type SearchResult } from '@/types/data';

const searchHintsResponse = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockSearchHints);
  }, 5000);
});

const useSearchHintQuery = (keyword: string) => {
  const { data, ...rest } = useQuery(['search', keyword], () => searchHintsResponse, {
    suspense: true,
  });
  return {
    result: data as SearchResult,
    ...rest,
  };
};

export { useSearchHintQuery };
