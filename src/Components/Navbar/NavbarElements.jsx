import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  max-width: ${({ theme }) => theme.maxWidth};
  top: 0;
  height: 5rem;
  z-index: 1000;
  background-color: ${({ theme }) => theme.backgroundDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  cursor: pointer;
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0 2rem;
  }
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.textLight};
  font-size: 1.5rem;
  font-weight: 700;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2rem;
  }
`;
