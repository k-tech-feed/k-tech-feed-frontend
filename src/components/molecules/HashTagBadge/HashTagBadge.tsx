import Link from 'next/link';

import { Badge } from '@/components';
import { CategoryColor } from '@/utils/categoryColors';

interface Props {
  hashtag: string;
}

const HashTagBadge = ({ hashtag }: Props) => {
  return (
    <Link href={`/hashtag/${hashtag}`}>
      <Badge color={CategoryColor(hashtag)}># {hashtag}</Badge>
    </Link>
  );
};

export default HashTagBadge;
