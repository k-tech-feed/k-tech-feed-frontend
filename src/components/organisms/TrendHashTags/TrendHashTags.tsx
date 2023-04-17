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
            <Loading type="spinner" />
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
  width: '100%',
  gap: '20px',
});

const LoadingWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100px',
  '@md': {
    minHeight: '300px',
  },
});
