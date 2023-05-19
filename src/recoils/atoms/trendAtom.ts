import { atom } from 'recoil';

import { v4 } from 'uuid';

import { type Trend } from '@/types/data';

const trendAtom = atom<Trend>({
  key: `trendAtom/${v4()}`,
  default: 'weekly',
});

export { trendAtom };
