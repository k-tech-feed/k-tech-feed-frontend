import Image from 'next/image';

import { Text, styled } from '@nextui-org/react';

import { type Author } from '@/types/data';

interface Props {
  author: Author;
}

const AuthorBadge = ({ author }: Props) => {
  const { name, logoUrl } = author;

  return (
    <AuthorBadgeWrapper>
      <CompanyImage src={logoUrl} alt="authorLogo" width={24} height={24} />
      <Text size={14} weight="medium">
        {name}
      </Text>
    </AuthorBadgeWrapper>
  );
};

export default AuthorBadge;

const AuthorBadgeWrapper = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

const CompanyImage = styled(Image, {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
});
