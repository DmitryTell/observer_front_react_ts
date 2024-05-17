import { FC, HTMLProps } from 'react';

import * as Styled from './ui.styled';


interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  onClick: React.MouseEventHandler;
}

export const Button: FC<IButtonProps> = ({ onClick }) => (
  <Styled.Button type="button" onClick={ onClick }>
    Создать комнату
  </Styled.Button>
);
