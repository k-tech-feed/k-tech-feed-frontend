import { styled } from '@nextui-org/react';

import { Badge, CompanyPubdateBadge } from '@/components';

const ArticleCard = () => {
  const companyName = '카카오엔터프라이즈';
  const pubDate = 'Fri, 07 Apr 2023 16:00:43 +0900';

  return (
    <ArticleCardWrapper>
      <CompanyPubdateBadge companyName={companyName} pubDate={pubDate} />
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
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
  position: 'relative',
});

const BadgeWrapper = styled('div', {
  display: 'flex',
});
