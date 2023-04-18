import { Suspense } from 'react';
import { useRecoilState } from 'recoil';

import { Loading, styled } from '@nextui-org/react';

import useClickOutside from '@/hooks/utils/useClickOutside';
import { searchInputAtom } from '@/recoils/searchInputAtom';

import SearchPopoverContent from './SearchPopoverContent';

const SearchPopover = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchInputAtom);
  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: () => {
      setSearchInput('');
    },
  });

  return (
    <PopoverBackground>
      <PopoverWrapper ref={ref}>
        <Suspense
          fallback={
            <Loading
              type="spinner"
              css={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          }
        >
          <SearchPopoverContent keyword={searchInput} />
        </Suspense>
      </PopoverWrapper>
    </PopoverBackground>
  );
};

export default SearchPopover;

const PopoverBackground = styled('div', {
  top: '76px',
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 5000,
});

const PopoverWrapper = styled('div', {
  position: 'absolute',
  top: '16px',
  left: '50%',
  transform: 'translate(-50%, 0)',
  height: '500px',
  borderRadius: '8px',
  backgroundColor: '$white',
  padding: '40px',
  width: '400px',
  '@smMax': {
    width: '100%',
  },
  overflow: 'auto',
  /* width */
  '&::-webkit-scrollbar': {
    width: '4px',
  },

  /* Track */
  '&::-webkit-scrollbar-track': {
    borderRadius: '10px',
    overflow: 'hidden',
  },

  /* Handle */
  '&::-webkit-scrollbar-thumb': {
    background: '$gray600',
    borderRadius: '8px',
  },

  /* Handle on hover */
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
});
