import { Suspense } from 'react';

import { Loading, Text, styled } from '@nextui-org/react';

import TrendArticlesContent from './TrendArticlesContent';

const TrendArticles = () => {
  return (
    <TrendArticlesWrapper>
      <Text size={20} weight="bold">
        인기 아티클
      </Text>
      <Suspense
        fallback={
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        }
      >
        <TrendArticlesContent />
      </Suspense>
    </TrendArticlesWrapper>
  );
};

export default TrendArticles;

const TrendArticlesWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '320px',
  paddingTop: '24px',
  minHeight: '300px',
  position: 'relative',
});

const LoadingWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
