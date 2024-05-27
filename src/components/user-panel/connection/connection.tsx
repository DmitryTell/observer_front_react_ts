import { useRoom } from '@hook/';

import * as Styled from './connection.styled';


export const Connection = () => {
  const { isReconnecting, handleReconnect } = useRoom();

  return (
    <Styled.ConnectionBlock>
      { isReconnecting ? (
        <Styled.ConnectionText>Подключаюсь...</Styled.ConnectionText>
      ) : (
        <Styled.ConnectionText>Нет соединения</Styled.ConnectionText>
      ) }
      <Styled.ConnectionLink href="/" onClick={ handleReconnect }>Подключить</Styled.ConnectionLink>
    </Styled.ConnectionBlock>
  );
};
