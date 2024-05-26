import { FC } from 'react';

import { ReactComponent as Status } from '@assets/icon/Status.svg';

import { Input, Button } from './ui';
import * as Styled from './start-form.styled';


interface IStartForm {
  isOnline: boolean;
}

export const StartForm: FC<IStartForm> = ({ isOnline }) => (
  <Styled.Container>
    <Styled.Link href="https://observer-app.pro/">Вернуться на сайт</Styled.Link>
    <Styled.Form>
      <Styled.Title>Observer</Styled.Title>
      <Styled.Text>Кабинет преподавателя</Styled.Text>
      <Input />
      <Styled.Status $isOnline={ isOnline }>
        <Status />
        <Styled.StatusText>
          { isOnline ? 'Сервер работает' : 'Сервер недоступен' }
        </Styled.StatusText>
      </Styled.Status>
      <Button disabled={ !isOnline } />
    </Styled.Form>
  </Styled.Container>
);
