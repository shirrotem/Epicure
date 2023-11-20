
import React, { useCallback } from 'react';
import './Modal.scss';
import { useAppDispatch, useAppSelector } from '../../../redux-toolkit/store/store';
import { setIsOpen } from '../../../redux-toolkit/slices/homePageSlice';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { isOpen }= useAppSelector(state=> state.homePage);
  const dispatch= useAppDispatch();

  const onClose = useCallback(() => {
    dispatch(setIsOpen(!isOpen));
  },[dispatch, isOpen]);
  
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
