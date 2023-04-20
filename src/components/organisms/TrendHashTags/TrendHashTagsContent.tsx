import { styled } from '@nextui-org/react';

import { HashTagBadge } from '@/components';
import { useTrendHashTagsQuery } from '@/hooks/queries/articles';

const TrendHashTagsContent = () => {
  const { hashTags } = useTrendHashTagsQuery();

  return (
    <ContentWrapper>
      {hashTags.map((hashTag, idx) => (
        <HashTagBadge hashtag={hashTag} key={idx} />
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
