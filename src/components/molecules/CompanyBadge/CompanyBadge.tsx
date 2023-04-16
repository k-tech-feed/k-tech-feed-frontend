import Image from 'next/image';

import { Text, styled } from '@nextui-org/react';

interface Props {
  companyName?: string;
  companyImage?: string;
}

const CompanyBadge = ({
  companyName = '카카오엔터프라이즈',
  companyImage = '/kakao.png',
}: Props) => {
  return (
    <CompanyBadgeWrapper>
      <Image src={companyImage} alt="companyLogo" width={24} height={24} />
      <Text size={14} weight="medium">
        {companyName}
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
