import { atom } from 'recoil';

import { type Trend } from '@/types/data';
import { v4 } from 'uuid';

const trendAtom = atom<Trend>({
  key: `trendAtom/${v4()}`,
  default: 'weekly',
});

export { trendAtom };
