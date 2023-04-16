import Image from 'next/image';

import { Text, styled } from '@nextui-org/react';

import { Badge, CompanyPubdateBadge } from '@/components';

const ArticleCard = () => {
  const title = '카카오워크 음성채팅 웹 개발기';
  const companyName = '카카오엔터프라이즈';
  const pubDate = 'Fri, 07 Apr 2023 16:00:43 +0900';
  const description =
    '이번 포스팅에서는 지난 8월 카카오워크 신규 기능으로 탑재된 음성채팅을 구현했습니다. 음성채팅 기능은 각종 최신 기술 스택을 활용했습니다. 이번 포스팅에서는 지난 8월 카카오워크 신규 기능으로 탑재된 음성채팅을 구현했습니다. 음성채팅 기능은 각종 최신 기술 스택을 활용했습니다.';

  return (
    <ArticleCardWrapper>
      <CompanyPubdateBadge companyName={companyName} pubDate={pubDate} />
      <ArticleContent>
        <ArticleContentTexts>
          <Text size={24} weight="bold">
            {title}
          </Text>
          <Text
            size={16}
            weight="normal"
            color="$gray800"
            css={{
              whiteSpace: 'normal',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: '1.4',
              display: '-webkit-box',
              '-webkit-line-clamp': 3,
              '-webkit-box-orient': 'vertical',
            }}
          >
            {description}
          </Text>
        </ArticleContentTexts>
        <Image src="/thumbnail.png" alt="thumbnail" width={180} height={120}></Image>
      </ArticleContent>
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
  padding: '32px 0',

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
  maxWidth: '680px',
  display: 'flex',
  gap: '24px',
});

const ArticleContentTexts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});
