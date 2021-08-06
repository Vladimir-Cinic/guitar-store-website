import React from 'react';
import { useGlobalContext } from '../../../Context';
import {
  CloseBtn,
  ModalContent,
  ModalImage,
  ModalOverlay,
} from './ModalElements';

const Modal = () => {
  const { state, closeModal } = useGlobalContext();
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent>
        <CloseBtn onClick={closeModal} />
        <ModalImage src={state.modalContent} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
