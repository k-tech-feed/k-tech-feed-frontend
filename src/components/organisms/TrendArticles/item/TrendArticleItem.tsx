import { Text, styled } from '@nextui-org/react';

import { CompanyPubdateBadge } from '@/components';
import { type Company } from '@/types/data';

interface Props {
  title: string;
  company: Company;
  pubDate: string;
}

const TrendArticleItem = ({ title, company, pubDate }: Props) => {
  return (
    <ItemWrapper>
      <CompanyPubdateBadge company={company} pubDate={pubDate} />
      <Text size={16} weight="bold">
        {title}
      </Text>
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
});
