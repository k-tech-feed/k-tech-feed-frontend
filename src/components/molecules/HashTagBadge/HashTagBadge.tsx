import Link from 'next/link';
import { type HTMLAttributes } from 'react';

import { Badge } from '@/components';
import { CategoryColor } from '@/utils/categoryColors';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  hashtag: string;
  onClick?: () => void;
}

const HashTagBadge = ({ hashtag, onClick, ...props }: Props) => {
  return (
    <Link href={`/hashtag/${hashtag}`} onClick={onClick} {...props}>
      <Badge color={CategoryColor(hashtag)}># {hashtag}</Badge>
    </Link>
  );
};

export default HashTagBadge;
