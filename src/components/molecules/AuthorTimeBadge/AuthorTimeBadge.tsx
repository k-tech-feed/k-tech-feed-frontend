import { Text, styled } from '@nextui-org/react';

import { AuthorBadge } from '@/components';
import { type Article, type Author } from '@/types/data';
import dateTimeFormat from '@/utils/dateTime';

interface Props extends Pick<Article, 'timestamp'> {
  author: Author;
}

const AuthorTimeBadge = ({ author, timestamp }: Props) => {
  return (
    <AuthorTimestampWrapper>
      <AuthorBadge author={author} />
      <Text size={14} color="$gray800">
        &nbsp;· {dateTimeFormat(timestamp)}
      </Text>
    </AuthorTimestampWrapper>
  );
};

export default AuthorTimeBadge;

const AuthorTimestampWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
});
