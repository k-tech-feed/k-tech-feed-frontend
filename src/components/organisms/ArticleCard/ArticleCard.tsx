import { Text } from '@nextui-org/react';

import { Badge, CompanyPubdateBadge } from '@/components';
import { type Article } from '@/types/data';

import {
  ArticleCardWrapper,
  ArticleContent,
  ArticleContentTexts,
  ArticleThumbnail,
  BadgeWrapper,
} from './ArticleCard.styles';

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  const { title, pubDate, company, description, categories } = article;

  return (
    <ArticleCardWrapper>
      <CompanyPubdateBadge company={company} pubDate={pubDate} />
      <ArticleContent>
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
          >
            {description}
          </Text>
        </ArticleContentTexts>
        <ArticleThumbnail src="/thumbnail.png" alt="thumbnail" width={180} height={120} />
      </ArticleContent>
      <BadgeWrapper>
        {categories.map(({ name, id }) => (
          <Badge key={id} color="green">
            # {name}
          </Badge>
        ))}
      </BadgeWrapper>
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
