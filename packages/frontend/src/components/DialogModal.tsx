import * as React from 'react';
import styled from 'styled-components';

import Modal, { IModalProps } from './Modal';

const Message = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.93;
  letter-spacing: 2.47px;
  padding: 3.5rem 7rem;
`;

export interface IDialogModalProps extends IModalProps {
  message: string;
}

const DialogModal: React.FC<IDialogModalProps> =
  ({ isOpen, onAfterOpen, onRequestClose, message }) => {
    return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
      >
        <Message>{message}</Message>
      </Modal>
    );
  };

export default DialogModal;
