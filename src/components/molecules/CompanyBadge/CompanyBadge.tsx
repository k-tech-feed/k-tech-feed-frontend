import Image from 'next/image';

import { Text, styled } from '@nextui-org/react';

import { type Company } from '@/types/data';

interface Props {
  company: Company;
}

const CompanyBadge = ({ company }: Props) => {
  const { name, imgUrl } = company;

  return (
    <CompanyBadgeWrapper>
      <CompanyImage src={imgUrl} alt="companyLogo" width={24} height={24} />
      <Text size={14} weight="medium">
        {name}
      </Text>
    </CompanyBadgeWrapper>
  );
};

export default CompanyBadge;

const CompanyBadgeWrapper = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

const CompanyImage = styled(Image, {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
});
