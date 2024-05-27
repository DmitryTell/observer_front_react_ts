import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { setRoomAndHostId, getStateRoom } from '@redux/';

import { useAppDispatch, useAppSelector } from './use-app-dispatch-selector';
import { useSocket } from './use-socket';


export const useRoom = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { socket } = useSocket();
  const { roomId, hostId } = useAppSelector(getStateRoom);

  const [isReconnecting, setIsReconnecting] = useState<boolean>(false);

  const reconnect = () => {
    socket?.emit('room/rehost', {
      room_id: roomId,
      user_id: hostId,
    });
  };

  const handleCreateRoom = () => {
    socket?.emit('room/create', { name: 'Host' });
  };
  const handleReconnect = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    reconnect();
    setIsReconnecting(true);

    setTimeout(() => {
      setIsReconnecting(false);
    }, 3000);
  };

  useEffect(() => {
    socket?.on('room/update', (data) => {
      dispatch(setRoomAndHostId({
        roomId: data.id,
        hostId: data.host,
      }));
    });
  }, [dispatch, socket]);

  useEffect(() => {
    if (roomId) {
      navigate(`/room/${roomId}`, { replace: true });
    }
  }, [navigate, roomId]);

  return {
    isReconnecting,
    handleCreateRoom,
    handleReconnect,
  };
};
