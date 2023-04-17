import { styled } from '@nextui-org/react';

const ArticleCardWrapper = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
  position: 'relative',
  padding: '32px 0',
  boxSizing: 'border-box',
  '&:not(:last-child)': {
    borderBottom: '1px solid $gray300',
  },
  '@md': {
    maxWidth: '680px',
    minWidth: '680px',
  },
});

const BadgeWrapper = styled('div', {
  display: 'flex',
  gap: '8px',
});

const ArticleContent = styled('div', {
  width: '100%',
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: '1fr 80px',
  '@sm': {
    gridTemplateColumns: '1fr 180px',
  },
});

const ArticleThumbnail = styled('div', {
  width: '80px',
  height: '80px',
  position: 'relative',
  borderRadius: '8px',
  overflow: 'hidden',
  '@sm': {
    width: '180px',
    height: '120px',
  },
});

const ArticleContentTexts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export { ArticleCardWrapper, BadgeWrapper, ArticleContent, ArticleThumbnail, ArticleContentTexts };
