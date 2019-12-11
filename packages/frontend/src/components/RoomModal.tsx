import * as React from 'react';
import PinInput from 'react-pin-input';
import styled from 'styled-components';

import Button from './Button';
import Modal, { IModalProps } from './Modal';
import Time from './Time';

const pinStyle: object = {
  border: 'solid 1px #505050',
  borderRadius: '7px',
  height: '52px',
  margin: '0 3.5px',
  width: '42px',
};

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

const PinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PinTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 5.66px;
  padding-left: 5.66px;
  margin-bottom: 0.8rem;
`;

const SubmitButton = styled(Button)`
  margin-top: 1.5rem;
  margin-bottom: 0.2rem;
`;

export interface IRoomModalProps extends IModalProps {
  room: any;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
}

const RoomModal: React.FC<IRoomModalProps> =
  ({ isOpen, onAfterOpen, onRequestClose, room, onClick }) => {
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
          <PinContainer>
            <PinTitle>PIN</PinTitle>
            <PinInput
              length={4}
              inputStyle={pinStyle}
            />
            <SubmitButton onClick={onClick}>참여하기</SubmitButton>
          </PinContainer>
        </Main>
      </Modal>
    );
  };

export default RoomModal;
