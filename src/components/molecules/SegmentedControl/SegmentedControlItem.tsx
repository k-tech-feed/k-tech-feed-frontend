import { type HTMLAttributes } from 'react';

import { styled } from '@nextui-org/react';

import { motion } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLLIElement> {
  isSelected: boolean;
}

const SegmentedControlItem = ({ isSelected, children, ...rest }: Props) => {
  return (
    <ItemWrapper {...rest}>
      {isSelected && (
        <SelectHightlight
          layoutId="highlight"
          transition={{ type: 'spring', stiffness: 1000, damping: 52 }}
        />
      )}
      <ItemChildrenWrapper color={isSelected ? 'highlight' : 'default'}>
        {children}
      </ItemChildrenWrapper>
    </ItemWrapper>
  );
};

export default SegmentedControlItem;

const ItemWrapper = styled('li', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 12px ',
  margin: '0',
});

const ItemChildrenWrapper = styled('div', {
  variants: {
    color: {
      highlight: {
        '& > p': {
          color: '$blue600',
        },
      },
      default: {},
    },
  },
  zIndex: 2,
});

const SelectHightlight = styled(motion.div, {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  borderRadius: '8px',
  backgroundColor: '$blue200',
  zIndex: 1,
});
