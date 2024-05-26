import { FC } from 'react';

import { useUpdateRoom } from '@hook/';

import * as Styled from './ui.styled';


interface IButtonProp {
  disabled: boolean;
}

export const Button: FC<IButtonProp> = ({ disabled }) => {
  const { handleCreateRoom } = useUpdateRoom();

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
