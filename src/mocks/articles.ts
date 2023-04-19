import { type Article } from '@/types/data';

const mockArticles: Article[] = [
  {
    id: 1,
    author: {
      id: 1,
      name: '카카오엔터프라이즈',
      logoUrl:
        'https://tistory1.daumcdn.net/tistory/3769165/attach/b1fa9f8c61f847e38985e272eba3ad33',
    },
    title: '[IT TREND] AGI를 향한 기대와 우려',
    summary: 'summary',
    thumbnailUrl: 'https://blog.kakaocdn.net/dn/oSRMP/btr8vsu8HBu/0kS9e6kvxvXiXSGqh2aaL1/img.png',
    timestamp: '2023-04-18T11:18:01',
    hashtags: ['hello', 'world'],
  },
  {
    id: 2,
    author: {
      id: 1,
      name: '카카오엔터프라이즈',
      logoUrl:
        'https://tistory1.daumcdn.net/tistory/3769165/attach/b1fa9f8c61f847e38985e272eba3ad33',
    },
    title: '테크니컬 라이터와 Git',
    summary: 'summary',
    thumbnailUrl: 'https://blog.kakaocdn.net/dn/brIAMe/btr7SthsxTD/y4noVUemiCgRtoKk7Knnjk/img.png',
    timestamp: '2023-04-15T11:18:01',
    hashtags: ['git', 'gongmeda', 'hello'],
  },
];

const mockTrendHashTags = ['Typescript', 'React', 'Websocket', 'Spring', 'Java', 'MySQL', 'MSA'];

export { mockArticles, mockTrendHashTags };
