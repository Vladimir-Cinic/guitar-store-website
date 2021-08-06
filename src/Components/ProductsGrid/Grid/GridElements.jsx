import styled from 'styled-components';

export const Grid = styled.article`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  place-items: center;
  gap: 1rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`;

export const Message = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`;
