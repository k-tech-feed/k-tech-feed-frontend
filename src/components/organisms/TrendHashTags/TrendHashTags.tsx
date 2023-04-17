import { Suspense } from 'react';

import { Loading, Text, styled } from '@nextui-org/react';

import TrendHashTagsContent from './TrendHashTagsContent';

const TrendHashTags = () => {
  return (
    <TrendHashTagsWrapper>
      <Text size={20} weight="bold">
        인기 해시태그
      </Text>
      <Suspense
        fallback={
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        }
      >
        <TrendHashTagsContent />
      </Suspense>
    </TrendHashTagsWrapper>
  );
};

export default TrendHashTags;

const TrendHashTagsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  minHeight: '300px',
});

const LoadingWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
