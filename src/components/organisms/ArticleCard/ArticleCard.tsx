import { styled } from '@nextui-org/react';

import { Badge } from '@/components';

const ArticleCard = () => {
  return (
    <ArticleCardWrapper>
      <BadgeWrapper>
        <Badge color="green"># Typescript</Badge>
        <Badge color="blue"># React</Badge>
        <Badge color="purple"># Websocket</Badge>
      </BadgeWrapper>
    </ArticleCardWrapper>
  );
};

export default ArticleCard;

const ArticleCardWrapper = styled('div', {
  display: 'flex',
});

const BadgeWrapper = styled('div', {
  display: 'flex',
});
