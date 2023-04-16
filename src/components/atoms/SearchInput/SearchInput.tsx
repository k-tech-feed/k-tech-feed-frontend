import { styled, Input, VariantProps, CSS } from '@nextui-org/react';
import { HTMLAttributes } from 'react';
import { IconSearch } from 'tabler-icons';

interface Props {
  id: string;
  css?: CSS;
  placeholder: string;
}

const SearchInput = ({ ...rest }: Props) => {
  return (
    <Input
      {...rest}
      clearable
      size="lg"
      contentLeft={<IconSearch color="gray" />}
      css={{
        width: '200px',
        fontSize: '$lg',
        display: 'flex',
        justifyContent: 'center',
        '@sm': {
          width: '400px',
        },
        '&::placeholder': {
          textAlign: 'center',
        },
      }}
    />
  );
};

export default SearchInput;
