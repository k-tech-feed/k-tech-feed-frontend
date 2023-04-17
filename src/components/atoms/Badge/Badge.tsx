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
      yellow: {
        '*': {
          backgroundColor: '$yellow200',
          color: '$yellow600',
        },
      },
      red: {
        '*': {
          backgroundColor: '$red200',
          color: '$red600',
        },
      },
      cyan: {
        '*': {
          backgroundColor: '$cyan200',
          color: '$cyan600',
        },
      },
      pink: {
        '*': {
          backgroundColor: '$pink200',
          color: '$pink600',
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
