import * as Styled from './ui.styled';


export const InviteLink = () => {
  const handleInvite = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    console.log('Click to invite link');
  };

  return (
    <Styled.Link href="/" onClick={ handleInvite }>пригласить</Styled.Link>
  );
};

export const ExitLink = () => {
  const handleQuit = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    console.log('Click to exit link');
  };

  return (
    <Styled.Link href="/" onClick={ handleQuit }>выйти</Styled.Link>
  );
};
