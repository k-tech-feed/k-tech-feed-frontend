import { atom } from 'recoil';
import { v4 } from 'uuid';

const searchInputAtom = atom({
  key: `searchInputAtom/${v4()}`,
  default: '',
});

export { searchInputAtom };
