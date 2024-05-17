import { useState, useEffect } from 'react';

import { useSocket } from './use-socket';


export const useGetStatus = (server: string) => {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  const socket = useSocket(server);

  useEffect(() => {
    socket.on('connect', () => {
      setIsOnline(true);
    });
    socket.on('disconnect', () => {
      setIsOnline(false);
    });
  });

  return isOnline;
};
