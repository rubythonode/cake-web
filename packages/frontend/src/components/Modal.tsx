import * as React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import close from '../assets/shared/close.png';

const CloseIcon = styled.img`
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  width: 45px;
  height: 45px;
  object-fit: 'contain';
  cursor: pointer;
`;

type IModalStyles = {
  content: object;
  overlay: object;
};

const ModalStyles: IModalStyles = {
  content: {
    borderRadius: '23px',
    bottom: 'unset',
    left: 'unset',
    overflow: 'unset',
    padding: '2rem',
    position: 'relative',
    right: 'unset',
    top: 'unset',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.39)',
    display: 'flex',
    justifyContent: 'center',
  },
};

export interface IModalProps {
  isOpen: boolean;
  onAfterOpen?: () => void;
  onRequestClose?: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ isOpen, onAfterOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={ModalStyles}
    >
      <CloseIcon
        src={close}
        onClick={onRequestClose}
      />
      {children}
    </ReactModal>
  );
};

export default Modal;
