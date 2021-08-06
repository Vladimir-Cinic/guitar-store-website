import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  padding: 0 0.5rem;
`;

export const ModalContent = styled.article`
  width: 100%;
  max-height: 35rem;
  max-width: 50rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: ${({ theme }) => theme.radius};
  position: relative;
`;

export const ModalImage = styled.img`
  width: 100%;
  max-height: 100%;
`;

export const CloseBtn = styled(FaTimes)`
  color: #fff;
  position: absolute;
  left: 5px;
  top: 5px;
  font-size: 1.5rem;
  cursor: pointer;
`;
