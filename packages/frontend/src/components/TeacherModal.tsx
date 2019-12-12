import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Modal, { IModalProps } from './Modal';
import Time from './Time';

const TimeList = styled.div`
  display: flex;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 520px;
  border-bottom: solid 1px #505050;
  padding-bottom: 1rem;
`;

const Name = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

const Status = styled.span`
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.33;
  letter-spacing: 5.3px;
  padding-left: 5.3px;
  margin-top: 0.3rem;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Delegate = styled.span`
  font-size: 1.3rem;
  font-weight: 300;
  margin: 1rem 0;
  line-height: 1.33;
  letter-spacing: 5.3px;
  padding-left: 5.3px;
`;

const Desc = styled.p`
  width: 300px;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  margin: 0;
  margin-bottom: 2.5rem;
  letter-spacing: 1.96px;
  padding-left: 1.96px;
  word-break: keep-all;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const DeclineButton = styled(Button)`
  margin-bottom: 0.2rem;
  width: 220px;
  margin-right: 1.5rem;
  border-radius: 37px;
  border: solid 1px #505050;
  background: white;
  color: #505050;
  font-weight: 300;
`;

const SubmitButton = styled(Button)`
  margin-bottom: 0.2rem;
  width: 220px;
  border-radius: 37px;
  background: #505050;;
  color: white;
  font-weight: 300;
`;

export interface ITeacherModalProps extends IModalProps {
  room: any;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
  onComplete?: (value: any, index: any) => any;
}

const TeacherModal: React.FC<ITeacherModalProps> =
  ({ isOpen, onAfterOpen, onRequestClose, room, onClick, onComplete }) => {
    const { users = [], max, room: roomName, delegate, desc, times = [] } = room;
    return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
      >
        <Header>
          <TimeList>
            {times.map((time: string, idx: number) => (
              <Time key={`time--${idx}`}>{time}</Time>
            ))}
          </TimeList>
          <Name>{ roomName }</Name>
          <Status>현 {users.length}명 / 총 {max}명</Status>
        </Header>
        <Main>
          <Delegate>{`대표자: ${delegate}`}</Delegate>
          <Desc dangerouslySetInnerHTML={ { __html: desc.replace(/(\n)+/g, '<br />') } } />
          <ButtonContainer>
            <DeclineButton>불허</DeclineButton>
            <SubmitButton onClick={onClick}>승인</SubmitButton>
          </ButtonContainer>
        </Main>
      </Modal>
    );
  };

export default TeacherModal;
