import { type HTMLAttributes } from 'react';

import { styled } from '@nextui-org/react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ContentLayout = ({ ...rest }: Props) => {
  return <ContentWrapper {...rest}></ContentWrapper>;
};

export default ContentLayout;

const ContentWrapper = styled('main', {
  height: '100%',
  margin: '40px 32px',
  '@md': {
    margin: '40px auto',
  },
});
