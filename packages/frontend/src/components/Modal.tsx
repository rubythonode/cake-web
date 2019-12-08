import * as React from 'react';
import ReactModal from 'react-modal';

interface IModalProps {
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
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
