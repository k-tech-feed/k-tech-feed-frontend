import { Text, styled } from '@nextui-org/react';

import { AuthorTimeBadge } from '@/components';
import { type Author } from '@/types/data';

interface Props {
  title: string;
  author: Author;
  timestamp: string;
  href: string;
}

const TrendArticleItem = ({ title, author, timestamp, href }: Props) => {
  return (
    <ItemWrapper>
      <AuthorTimeBadge author={author} timestamp={timestamp} />
      <a href={href} target="_blank">
        <Text size={16} weight="bold">
          {title}
        </Text>
      </a>
    </ItemWrapper>
  );
};

export default TrendArticleItem;

const ItemWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '16px 0',
  '&:not(:last-child)': {
    borderBottom: '1px solid $gray200',
  },
  alignItems: 'flex-start',
});
