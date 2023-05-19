import Link from 'next/link';

import { Badge } from '@/components';
import { CategoryColor } from '@/utils/categoryColors';

interface Props {
  hashtag: string;
  onClick?: () => void;
}

const HashTagBadge = ({ hashtag, onClick }: Props) => {
  return (
    <Link href={`/hashtag/${hashtag}`} onClick={onClick} aria-label={hashtag}>
      <Badge color={CategoryColor(hashtag)}># {hashtag}</Badge>
    </Link>
  );
};

export default HashTagBadge;
