import Image from 'next/image';

import { styled } from '@nextui-org/react';

const ArticleCardWrapper = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
  maxWidth: '680px',
  position: 'relative',
  padding: '32px 0',
  boxSizing: 'border-box',
  '&:not(:last-child)': {
    borderBottom: '1px solid $gray300',
  },
});

const BadgeWrapper = styled('div', {
  display: 'flex',
  gap: '8px',
});

const ArticleContent = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '24px',
});

const ArticleThumbnail = styled(Image, {
  borderRadius: '8px',
});

const ArticleContentTexts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export { ArticleCardWrapper, BadgeWrapper, ArticleContent, ArticleThumbnail, ArticleContentTexts };
