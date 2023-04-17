import { styled } from '@nextui-org/react';

import { Badge } from '@/components';
import { useTrendHashTagsQuery } from '@/hooks/queries/articles';
import { CategoryColor } from '@/utils/categoryColors';

const TrendHashTagsContent = () => {
  const { hashTags } = useTrendHashTagsQuery();

  return (
    <ContentWrapper>
      {hashTags.map((hashTag) => (
        <Badge key={hashTag.id} color={CategoryColor(hashTag.name)}>
          # {hashTag.name}
        </Badge>
      ))}
    </ContentWrapper>
  );
};

export default TrendHashTagsContent;

const ContentWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
});
