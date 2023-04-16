import { type PropsWithChildren } from 'react';

import { Badge as NextBadge, type VariantProps, styled } from '@nextui-org/react';

interface Props extends VariantProps<typeof StyledBadge>, PropsWithChildren {}

const Badge = ({ color, children }: Props) => {
  return (
    <StyledBadge color={color} isSquared>
      <BadgeContent>{children}</BadgeContent>
    </StyledBadge>
  );
};

export default Badge;

const StyledBadge = styled(NextBadge, {
  variants: {
    color: {
      green: {
        '*': {
          backgroundColor: '$green200',
          color: '$green700',
        },
      },
      purple: {
        '*': {
          backgroundColor: '$purple200',
          color: '$purple600',
        },
      },
      blue: {
        '*': {
          backgroundColor: '$blue200',
          color: '$blue600',
        },
      },
    },
  },
  height: 'fit-content',
});

const BadgeContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '600',
  fontSize: '14px',
});
