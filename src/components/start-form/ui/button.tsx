import { FC } from 'react';

import * as Styled from './ui.styled';


interface IButtonProp {
  disabled: boolean;
}

export const Button: FC<IButtonProp> = ({ disabled }) => (
  <Styled.Button
    disabled={ disabled }
    type="button"
    onClick={ () => console.log('Click') }
  >
    Создать комнату
  </Styled.Button>
);
