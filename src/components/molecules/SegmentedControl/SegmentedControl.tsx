import { type HTMLAttributes } from 'react';

import { styled } from '@nextui-org/react';

import SegmentedControlItem from './SegmentedControlItem';

interface Props extends HTMLAttributes<HTMLUListElement> {}

const SegmentedControl = ({ children, ...rest }: Props) => {
  return <SegmentedControlWrapper {...rest}>{children}</SegmentedControlWrapper>;
};

SegmentedControl.Item = SegmentedControlItem;

export default SegmentedControl;

const SegmentedControlWrapper = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});
