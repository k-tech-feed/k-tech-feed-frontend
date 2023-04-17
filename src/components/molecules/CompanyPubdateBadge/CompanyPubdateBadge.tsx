import { Text, styled } from '@nextui-org/react';

import { CompanyBadge } from '@/components';
import { type Article, type Company } from '@/types/data';
import dateTimeFormat from '@/utils/dateTime';

interface Props extends Pick<Article, 'pubDate'> {
  company: Company;
}

const CompanyPubdateBadge = ({ company, pubDate }: Props) => {
  return (
    <CompanyPubDateWrapper>
      <CompanyBadge company={company} />
      <Text size={14} color="$gray800">
        &nbsp;· {dateTimeFormat(pubDate)}
      </Text>
    </CompanyPubDateWrapper>
  );
};

export default CompanyPubdateBadge;

const CompanyPubDateWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
});
