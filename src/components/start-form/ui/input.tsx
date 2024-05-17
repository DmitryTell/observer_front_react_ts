import { FC, HTMLProps } from 'react';

import * as Styled from './ui.styled';


interface IInputProps extends HTMLProps<HTMLInputElement> {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<IInputProps> = ({ value, onChange }) => (
  <Styled.Input
    placeholder="ws://server.com"
    type="text"
    value={ value }
    onChange={ onChange }
  />
);
