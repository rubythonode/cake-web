import * as React from 'react';
import styled from 'styled-components';

import Modal, { IModalProps } from './Modal';
import Time from './Time';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 597px;
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
  letter-spacing: 1.96px;
  padding-left: 1.96px;
  word-break: keep-all;
`;

export interface IRoomModalProps extends IModalProps {
  room: {
    delegate: string;
    desc: string;
  };
}

const RoomModal: React.FC<IRoomModalProps> = ({ isOpen, onAfterOpen, onRequestClose, room }) => {
  const { delegate, desc } = room;
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
    >
      <Header>
        <Time>방과후 1타임</Time>
        <Name>방과후 교실</Name>
        <Status>현 2명 / 총 4명</Status>
      </Header>
      <Main>
        <Delegate>{`대표자: ${delegate}`}</Delegate>
        <Desc dangerouslySetInnerHTML={ { __html: desc.replace(/(\n)+/g, '<br />') } } />
      </Main>
    </Modal>
  );
};

export default RoomModal;
