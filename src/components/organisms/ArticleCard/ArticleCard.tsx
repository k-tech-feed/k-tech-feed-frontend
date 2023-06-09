import { Text } from '@nextui-org/react';

import { AuthorTimeBadge, HashTagBadge } from '@/components';
import { type Article } from '@/types/data';

import {
  ArticleCardWrapper,
  ArticleContent,
  ArticleContentTexts,
  ArticleThumbnail,
  BadgeWrapper,
} from './ArticleCard.styles';
import ArticleThumbnailImage from './ArticleThumbnailImage';

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  const { id, title, author, timestamp, summary, hashtags, thumbnailUrl } = article;

  return (
    <ArticleCardWrapper aria-label={title}>
      <AuthorTimeBadge author={author} timestamp={timestamp} />
      <ArticleContent
        href={`${process.env.NEXT_PUBLIC_API_URL as string}/articles/${id}`}
        target="_blank"
      >
        <ArticleContentTexts>
          <Text size={24} weight="bold">
            {title}
          </Text>
          <Text
            size={16}
            weight="normal"
            color="$gray800"
            css={{
              whiteSpace: 'normal',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: '1.4',
              display: '-webkit-box',
              '-webkit-line-clamp': 3,
              '-webkit-box-orient': 'vertical',
            }}
            aria-hidden={true}
          >
            {summary}
          </Text>
        </ArticleContentTexts>
        <ArticleThumbnail>
          <ArticleThumbnailImage
            src={thumbnailUrl}
            alt=""
            fill
            sizes="180px"
            style={{
              objectFit: 'cover',
            }}
          />
        </ArticleThumbnail>
      </ArticleContent>
      <BadgeWrapper>
        {hashtags.map((hashtag, idx) => (
          <HashTagBadge hashtag={hashtag} key={idx} aria-label={`해시태그 ${hashtag}`} />
        ))}
      </BadgeWrapper>
    </ArticleCardWrapper>
  );
};

ArticleCard.displayName = 'ArticleCard';

export default ArticleCard;
