import { FC } from 'react';

import * as Styled from './ui.styled';


interface IButtonProp {
  disabled: boolean;
}

export const Button: FC<IButtonProp> = ({ disabled }) => {
  const handleOpenTasks = () => {
    console.log('Click to task opener');
  };

  return (
    <Styled.Button
      disabled={ disabled }
      type="button"
      onClick={ handleOpenTasks }
    >Задания
    </Styled.Button>
  );
};
