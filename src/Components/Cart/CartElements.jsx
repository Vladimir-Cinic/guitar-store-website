import styled, { css } from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const activeStyles = `
  visibility:visible;
  opacity:100%;
  transform:translateX(0);
`;

export const CartContainer = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  color: ${({ theme }) => theme.textLight};
  font-size: 2.3rem;
`;

export const Badge = styled.div`
  position: absolute;
  background-color: red;
  border-radius: 50%;
  height: 1.3rem;
  width: 1.3rem;
  top: -0.3rem;
  right: -0.3rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  flex-direction: column;
  transition: 0.3s;
  position: absolute;
  width: 95%;
  background: blue;
  height: auto;
  top: 5.5rem;
  right: 2.5%;
  z-index: 2000;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.68);
  padding: 1.5rem 0.5rem;
  transform: translateY(-5px);
  visibility: hidden;
  border-radius: ${({ theme }) => theme.radius};
  opacity: 0;
  ${(props) =>
    props.active
      ? css`
          ${activeStyles}
        `
      : ''}
  @media ${({ theme }) => theme.breakpoints.xsm} {
    width: 25rem;
  }
`;

export const ItemsList = styled.ul`
  width: 100%;
  flex-direction: column;
  margin-bottom: 1.5rem;
  height: ${(props) => (props.scroll ? '11.5rem' : 'auto')};
  overflow-y: ${(props) => (props.scroll ? 'scroll' : 'none')};
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Notification = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.textDark};
`;

export const ItemNotification = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  width: 12rem;
  height: 3rem;
  background-color: #fff;
  right: 2rem;
  top: 2rem;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;
  transform: translateX(5px);
  z-index: 100000;
  border-radius: ${({ theme }) => theme.radius};
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.68);
  ${(props) =>
    props.active
      ? css`
          ${activeStyles}
        `
      : ''}
`;
