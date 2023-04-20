import Image from 'next/image';
import Link from 'next/link';

import { Text, styled } from '@nextui-org/react';

import { type Author } from '@/types/data';

interface Props {
  author: Author;
}

const AuthorBadge = ({ author }: Props) => {
  const { id, name, logoUrl } = author;

  return (
    <Link href={`/author/${id}`}>
      <AuthorBadgeWrapper>
        <CompanyImage src={logoUrl} alt="authorLogo" width={24} height={24} />
        <Text size={14} weight="medium">
          {name}
        </Text>
      </AuthorBadgeWrapper>
    </Link>
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
