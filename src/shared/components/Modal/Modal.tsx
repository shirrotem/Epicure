
import React from 'react';
import './Modal.scss';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div>
      <button className="close-button" onClick={onClose}>
          X
      </button>
      <div className="modal-content">
        {children}
      </div>
      </div>
    </div>
  );
};

export default Modal;
