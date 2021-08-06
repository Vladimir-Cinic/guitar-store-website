import styled, { css } from 'styled-components';

export const Main = styled.main`
  background-color: #696969;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.backgroundLight};
  min-height: 100vh;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 6rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Btn = styled.button`
  background-color: ${({ theme }) => theme.backgroundLight};
  border: none;
  font-size: 0.7rem;
  padding: 0.5rem;
  min-height: 2.2rem;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.textDark};
  font-weight: 600;
  cursor: pointer;
  transform: 0.2s;
  min-width: 6rem;
  &:hover {
    background-color: #b1b1b1;
  }
  border: 1px solid ${({ theme }) => theme.outline};
  @media ${({ theme }) => theme.breakpoints.xsm} {
    font-size: 0.9rem;
  }
`;

export const AmountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6rem;
`;

export const AmountInput = styled.input`
  width: 2rem;
  border: none;
  background-color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;

export const sharedStyles = css`
  background-color: ${({ theme }) => theme.backgroundLight};
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.outline};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
`;

export const AmountButton = styled.div`
  ${sharedStyles}
`;
