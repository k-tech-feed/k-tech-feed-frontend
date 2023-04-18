import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { styled } from '@nextui-org/react';

import { ArticleSection } from '@/components';

const SearchPage = () => {
  const router = useRouter();
  const {
    isReady,
    query: { keyword },
  } = router;

  useEffect(() => {
    if (isReady && !keyword) {
      void router.push('/');
    }
  }, [router, isReady, keyword]);

  return (
    <PageWrapper>
      <ArticleSection />
    </PageWrapper>
  );
};

export default SearchPage;

const PageWrapper = styled('div', {
  display: 'flex',
  gap: '60px',
  position: 'relative',
  height: '100%',
  flexDirection: 'column',
  width: '680px',
  '@md': {
    width: '100%',
    flexDirection: 'row',
  },
});
