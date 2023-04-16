import { Text, styled } from '@nextui-org/react';

import { CompanyBadge } from '@/components';
import { type CompanyPubdate } from '@/types/data';
import dateTimeFormat from '@/utils/dateTime';

interface Props extends CompanyPubdate {}

const CompanyPubdateBadge = ({ companyName, pubDate }: Props) => {
  return (
    <CompanyPubDateWrapper>
      <CompanyBadge />
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
