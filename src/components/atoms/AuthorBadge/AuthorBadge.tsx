import Image from 'next/image';
import Link from 'next/link';
import { type HTMLAttributes } from 'react';

import { Text, styled } from '@nextui-org/react';

import { type Author } from '@/types/data';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  author: Author;
  onClick?: () => void;
}

const AuthorBadge = ({ author, onClick, ...props }: Props) => {
  const { id, name, logoUrl } = author;

  return (
    <Link href={`/author/${id}`} onClick={onClick} {...props}>
      <AuthorBadgeWrapper>
        <CompanyImage src={logoUrl} alt="" width={24} height={24} />
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
