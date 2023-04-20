import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { type AxiosError } from 'axios';

import { type Author } from '@/types/data';
import { apiRequest } from '@/utils/commonAxios';

const getAuthor = async (authorId: string) => {
  const { data } = await apiRequest.get<Author>(`/authors/${authorId}`);
  return data;
};

const useAuthorQuery = (authorId: string) => {
  const { isReady, pathname } = useRouter();

  const { data, ...rest } = useQuery<Author, AxiosError, Author>(
    ['author', authorId],
    () => getAuthor(authorId),
    {
      enabled: isReady && pathname.includes('author'),
      suspense: true,
    }
  );

  return { data, ...rest };
};

export { useAuthorQuery };
