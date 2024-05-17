import { useEffect } from 'react';
import { io } from 'socket.io-client';


export const useSocket = (url: string) => {
  const socket = io(url, {
    transports: ['websocket'],
  });

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, [url]);

  return socket;
};
