import {
  useAppDispatch,
  useAppSelector,
  useGetStatus,
  useSocket,
} from '@hook/';
import { getStateRoom, setServerUrl } from '@redux/';
import { ReactComponent as Status } from '@assets/icon/Status.svg';

import { Input, Button } from './ui';
import * as Styled from './start-form.styled';


export const StartForm = () => {
  const { server } = useAppSelector(getStateRoom);
  const socket = useSocket(server);
  const isOnline = useGetStatus(server);

  const dispatch = useAppDispatch();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setServerUrl({ url: event.target.value }));
  };

  const handleCreateRoom = () => {
    socket.emit('room/create', { name: 'Host' });
  };

  return (
    <Styled.Container>
      <Styled.Link href="https://observer-app.pro/">Вернуться на сайт</Styled.Link>
      <Styled.Form>
        <Styled.Title>Observer</Styled.Title>
        <Styled.Text>Кабинет преподавателя</Styled.Text>
        <Input value={ server } onChange={ (event) => handleChangeInput(event) } />
        <Styled.Status $isOnline={ isOnline }>
          <Status />
          <Styled.StatusText>
            { isOnline ? 'Сервер работает' : 'Сервер недоступен' }
          </Styled.StatusText>
        </Styled.Status>
        <Button onClick={ handleCreateRoom } />
      </Styled.Form>
    </Styled.Container>
  );
};
