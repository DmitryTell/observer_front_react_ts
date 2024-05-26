import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { setRoomAndHostId } from '@redux/';

import { useAppDispatch } from '../use-app-dispatch-selector';
import { useSocket } from '../use-socket';


export const useUpdateRoom = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { socket } = useSocket();

  const [roomId, setRoomId] = useState<number | null>(null);

  const handleCreateRoom = () => {
    socket?.emit('room/create', { name: 'Host' });
  };

  useEffect(() => {
    socket?.on('room/update', (data) => {
      setRoomId(data.id);

      dispatch(setRoomAndHostId({ roomId: data.id, hostId: data.host }));

      console.log(data);
    });
  }, [dispatch, socket]);

  useEffect(() => {
    if (roomId) {
      navigate(`/room/${roomId}`, { replace: true });
    }
  }, [navigate, roomId]);

  return { handleCreateRoom };
};
