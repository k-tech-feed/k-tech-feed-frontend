import { styled } from '@nextui-org/react';
import { useMediaQuery } from 'react-responsive';

import { TrendArticles, TrendHashTags, TrendSelect } from '@/components';

const TrendSection = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <TrendSectionWrapper as="aside">
      <TrendSelect />
      <TrendArticles isMobile={!isDesktop} />
      <TrendHashTags />
    </TrendSectionWrapper>
  );
};

export default TrendSection;

const TrendSectionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: 'max-content',
  gap: '32px',
  width: '100%',
  '@md': {
    position: 'sticky',
    top: '116px',
    right: '0',
    width: '320px',
  },
});
