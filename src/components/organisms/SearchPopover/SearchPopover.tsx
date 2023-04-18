import { styled } from '@nextui-org/react';

const SearchPopover = () => {
  return (
    <PopoverBackground>
      <PopoverWrapper>asdf</PopoverWrapper>
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
  minHeight: '400px',
  borderRadius: '8px',
  backgroundColor: '$gray100',
  padding: '40px',
  width: '400px',
  '@smMax': {
    width: '100%',
  },
});
