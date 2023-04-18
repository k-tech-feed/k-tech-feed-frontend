import { atom } from 'recoil';

const searchInputAtom = atom({
  key: 'searchInputAtom',
  default: '',
});

export { searchInputAtom };
