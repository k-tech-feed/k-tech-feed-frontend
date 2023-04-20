import { useQueries } from '@tanstack/react-query';

import { type Author } from '@/types/data';
import { apiRequest } from '@/utils/commonAxios';

const getRelatedQuery = async (type: string, keyword: string) => {
  const { data } = await apiRequest(`/related/${type}?keyword=${keyword}`);
  return data;
};

const useRelatedQueries = (keyword: string) => {
  const [{ data: keywords }, { data: authors }, { data: hashtags }] = useQueries({
    queries: [
      {
        queryKey: ['related', 'keywords', keyword],
        queryFn: () => getRelatedQuery('keywords', keyword),
        suspense: true,
        enabled: keyword?.length > 0,
      },
      {
        queryKey: ['related', 'authors', keyword],
        queryFn: () => getRelatedQuery('authors', keyword),
        suspense: true,
        enabled: keyword?.length > 0,
      },
      {
        queryKey: ['related', 'hashtags', keyword],
        queryFn: () => getRelatedQuery('hashtags', keyword),
        suspense: true,
        enabled: keyword?.length > 0,
      },
    ],
  });
  return {
    keywords: keywords as string[],
    authors: authors as Author[],
    hashtags: hashtags as string[],
  };
};

export { useRelatedQueries };
