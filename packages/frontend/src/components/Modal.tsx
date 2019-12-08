import * as React from 'react';
import ReactModal from 'react-modal';

type IModalStyles = {
  content: object;
  overlay: object;
};

const ModalStyles: IModalStyles = {
  content: {
    overflow: 'unset',
    position: 'unset',
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
      {children}
    </ReactModal>
  );
};

export default Modal;
