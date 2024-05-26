import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

import { getStateRoom } from '@redux/';

import { useAppSelector } from './use-app-dispatch-selector';


export const useSocket = () => {
  const { server } = useAppSelector(getStateRoom);

  const [socket, setSocket] = useState<Socket | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const newSocket = io(server, {
      transports: ['websocket'],
    });

    setError(null);

    newSocket.on('connect_error', (newError) => {
      newSocket.close();

      setError(newError);
    });

    setSocket(newSocket);
  }, [server]);

  return { socket, error };
};
