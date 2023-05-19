import { atom } from 'recoil';

import { v4 } from 'uuid';

const inputFocusAtom = atom({
  key: `inputFocusAtom/${v4()}`,
  default: false,
});

export { inputFocusAtom };
