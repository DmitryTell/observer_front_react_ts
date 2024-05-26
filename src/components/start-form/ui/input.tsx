import { useAppDispatch, useAppSelector } from '@hook/';
import { getStateRoom, setServerUrl } from '@redux/';

import * as Styled from './ui.styled';


export const Input = () => {
  const dispatch = useAppDispatch();

  const { server } = useAppSelector(getStateRoom);

  const handleChangeServerUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setServerUrl({ url: event.target.value }));
  };

  return (
    <Styled.Input
      placeholder="ws://server.com"
      type="text"
      value={ server }
      onChange={ handleChangeServerUrl }
    />
  );
};
