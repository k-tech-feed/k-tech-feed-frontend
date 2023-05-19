import { styled } from '@nextui-org/react';

import { ArticleSection } from '@/components';

const SearchPage = () => {
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
  width: '100%',
  '@md': {
    flexDirection: 'row',
  },
});
