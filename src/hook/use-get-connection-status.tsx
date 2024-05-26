import { useState, useEffect } from 'react';

import { useSocket } from './use-socket';


export const useGetConnectionStatus = () => {
  const { socket, error } = useSocket();

  const [isOnline, setIsOnline] = useState<boolean>(false);

  useEffect(() => {
    const handleConnect = () => {
      setIsOnline(true);
    };
    const handleDisconnect = () => {
      setIsOnline(false);

      socket?.connect();
    };

    socket?.on('connect', handleConnect);
    socket?.on('disconnect', handleDisconnect);

    if (error) {
      setIsOnline(false);
      socket?.connect();
    }

    return () => {
      socket?.off('connect', handleConnect);
      socket?.off('disconnect', handleDisconnect);
    };
  }, [error, socket]);

  return isOnline;
};
