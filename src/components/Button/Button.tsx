import { Button as NextUIButton } from '@nextui-org/react';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const Button = ({ children }: Props) => {
  return <NextUIButton>{children}</NextUIButton>;
};

export default Button;
