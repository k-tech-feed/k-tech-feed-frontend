import { type CSS, type FormElement, Input } from '@nextui-org/react';
import { IconSearch } from '@tabler/icons-react';

interface Props {
  css?: CSS;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ onChange, ...rest }: Props) => {
  return (
    <Input
      {...rest}
      clearable
      size="lg"
      onChange={(e: React.ChangeEvent<FormElement>) => {
        onChange(e as React.ChangeEvent<HTMLInputElement>);
      }}
      contentLeft={<IconSearch color="gray" />}
      css={{
        width: '200px',
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
