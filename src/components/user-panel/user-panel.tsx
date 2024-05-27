import { FC } from 'react';

import { ReactComponent as Settings } from '@assets/icon/Settings.svg';
import { IUser } from '@interface/';

import { Connection } from './connection';
import { StudentItem } from './student-item/student-item';
import {
  InviteLink,
  ExitLink,
  Button,
} from './ui';
import * as Styled from './user-panel.styled';


interface IUserPanelProps {
  users: IUser[];
  roomId: number;
  isOnline: boolean;
  currentPanel: string;
}

export const UserPanel: FC<IUserPanelProps> = ({
  users,
  roomId,
  isOnline,
  currentPanel,
}) => (
  <Styled.Container>
    <Styled.Panel>
      <Styled.PanelTitle>#{ roomId }</Styled.PanelTitle>
      <Styled.PanelAmount>
        <span>{ users.length - 1 }</span>
        <span>онлайн</span>
      </Styled.PanelAmount>
    </Styled.Panel>
    { isOnline && <Connection /> }
    <Styled.Links>
      <InviteLink />
      <ExitLink />
    </Styled.Links>
    <Styled.Buttons>
      <Button disabled={ currentPanel === 'task-editor' } />
      <Settings />
    </Styled.Buttons>
    <Styled.Students $isEmpty={ users.length < 2 }>
      { users.length < 2 ? (
        <Styled.StudentsEmpty>
          Пока никого нет. Отправьте ученикам номер комнаты, чтобы пригласить их!
        </Styled.StudentsEmpty>
      ) : (
        <Styled.StudentsList>
          { users.map((user) => (
            <StudentItem
              key={ user.sid }
              user={ user }
            />
          )) }
        </Styled.StudentsList>
      ) }
    </Styled.Students>
  </Styled.Container>
);
