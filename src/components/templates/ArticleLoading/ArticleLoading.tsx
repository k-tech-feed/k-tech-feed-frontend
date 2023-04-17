import { Loading } from '@nextui-org/react';

import { ArticleCardWrapper } from '@/components/organisms/ArticleCard/ArticleCard.styles';

const ArticleLoading = () => {
  return (
    <>
      {[1, 2, 3, 4].map((id) => {
        return (
          <ArticleCardWrapper
            key={id}
            css={{
              minHeight: '260px',
              padding: '32px 0',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Loading />
          </ArticleCardWrapper>
        );
      })}
    </>
  );
};

export default ArticleLoading;
