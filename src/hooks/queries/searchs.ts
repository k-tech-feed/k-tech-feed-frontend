import { useQuery } from '@tanstack/react-query';

import { mockSearchHints } from '@/mocks/searchHints';
import { type SearchResult } from '@/types/data';

const searchHintsResponse = (keyword: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSearchHints);
    }, 1000);
  });

const useSearchHintQuery = (keyword: string) => {
  const { data, ...rest } = useQuery(['search', keyword], () => searchHintsResponse(keyword), {
    suspense: true,
  });
  return {
    result: data as SearchResult,
    ...rest,
  };
};

export { useSearchHintQuery };
