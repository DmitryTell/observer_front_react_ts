import { useGetConnectionStatus } from '@hook/';
import { StartForm } from '@components/';


export const StartPage = () => {
  const isOnline = useGetConnectionStatus();

  return (
    <StartForm isOnline={ isOnline } />
  );
};
