import { forwardRef } from 'react';

import { type CSS, type FormElement, Input } from '@nextui-org/react';
import { IconSearch } from '@tabler/icons-react';

interface Props {
  css?: CSS;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ onChange, onFocus = () => {}, onBlur = () => {}, onKeyDown = () => {}, ...rest }, ref) => {
    return (
      <Input
        {...rest}
        ref={ref}
        clearable
        size="lg"
        onChange={(e: React.ChangeEvent<FormElement>) => {
          onChange(e as React.ChangeEvent<HTMLInputElement>);
        }}
        onFocus={(e: React.FocusEvent<FormElement>) => {
          onFocus(e as React.FocusEvent<HTMLInputElement>);
        }}
        onBlur={(e: React.FocusEvent<FormElement>) => {
          onBlur(e as React.FocusEvent<HTMLInputElement>);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          onKeyDown(e);
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
  }
);

export default SearchInput;

SearchInput.displayName = 'SeachInput';
