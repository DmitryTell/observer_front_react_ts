import { FC } from 'react';

import { useRoom } from '@hook/';

import * as Styled from './ui.styled';


interface IButtonProp {
  disabled: boolean;
}

export const Button: FC<IButtonProp> = ({ disabled }) => {
  const { handleCreateRoom } = useRoom();

  return (
    <Styled.Button
      disabled={ disabled }
      type="button"
      onClick={ handleCreateRoom }
    >
      Создать комнату
    </Styled.Button>
  );
};
