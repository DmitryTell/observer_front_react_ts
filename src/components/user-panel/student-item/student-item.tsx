import { FC } from 'react';

import { IUser } from '@interface/';
import { ReactComponent as Help } from '@assets/icon/Help.svg';
import { ReactComponent as Done } from '@assets/icon/Done.svg';

import * as Styled from './student-item.styled';


interface IStudentItemProp {
  user: IUser;
}

export const StudentItem: FC<IStudentItemProp> = ({ user }) => {
  const unreadMock = 1;

  const handleClickUser = () => {
    console.log(user.id);
  };

  return (
    <Styled.Item
      $hasNoneStatus={ Object.values(user.steps).every((status) => status === 'NONE') }
      $hasUnreadMessages={ Boolean(unreadMock) }
      $isActive={ false }
      onClick={ handleClickUser }
    >
      { Object.values(user.steps).every((status) => status === 'DONE') ? (
        <Done />
      ) : (
        <Help />
      ) }
      <Styled.ItemName
        $isReadMessages={ !unreadMock }
      >{ user.name }
      </Styled.ItemName>
      { Boolean(unreadMock) && (
        <Styled.ItemUnreadMessages>{ unreadMock }</Styled.ItemUnreadMessages>
      ) }
    </Styled.Item>
  );
};
