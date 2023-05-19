import { useRecoilValue_TRANSITION_SUPPORT_UNSTABLE } from 'recoil';

import { styled } from '@nextui-org/react';

import { HashTagBadge } from '@/components';
import { useTrendingHashtagsQuery } from '@/hooks/queries/trendings';
import { trendAtom } from '@/recoils/atoms/trendAtom';

const TrendHashTagsContent = () => {
  const trendType = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(trendAtom);
  const { data: hashTags } = useTrendingHashtagsQuery({ type: trendType });

  return (
    <ContentWrapper>
      {hashTags?.slice(0, 6).map((hashTag, idx) => (
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
