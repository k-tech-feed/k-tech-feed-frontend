import { Suspense } from 'react';

import { Loading, Text, styled } from '@nextui-org/react';

import TrendArticlesContent from './TrendArticlesContent';

interface Props {
  isMobile: boolean;
}

const TrendArticles = ({ isMobile }: Props) => {
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
        <TrendArticlesContent isMobile={isMobile} />
      </Suspense>
    </TrendArticlesWrapper>
  );
};

export default TrendArticles;

const TrendArticlesWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
  position: 'relative',
});

const LoadingWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
