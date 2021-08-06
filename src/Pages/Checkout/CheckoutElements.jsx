import styled, { css } from 'styled-components';

export const CheckoutWrapper = styled.article`
  background-color: ${({ theme }) => theme.paper};
  width: 100%;
  min-height: calc(100vh - 7rem);
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Message = styled.h2`
  position: absolute;
  top: 30%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const CartItems = styled.div`
  width: auto;
  height: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 1rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.breakpoints.xxl} {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }
`;

export const CheckoutFooter = styled.footer`
  width: 100%;
  height: 10rem;
  border-top: 1px solid ${({ theme }) => theme.outline};
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  margin-top: 4rem;
  position: relative;
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0 2rem;
  }
`;

export const sharedStyles = css`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const ButtonGroup = styled.div`
  ${sharedStyles}
`;

export const TotalsWrapper = styled.div`
  ${sharedStyles}
`;

export const ClearButton = styled.div`
  color: red;
  position: absolute;
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius};
  padding: 0.5rem;
  top: -3.5rem;
  right: 50%;
  transform: translateX(50%);
  cursor: pointer;
  font-weight: 500;
`;

export const Subtotal = styled.h3``;

export const Total = styled.h2``;
