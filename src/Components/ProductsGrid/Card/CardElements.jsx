import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Wrapper = styled.article`
  width: 17rem;
  height: 21rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.paper};
  color: ${({ theme }) => theme.textDark};
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: ${({ theme }) => theme.radius};
`;

export const Header = styled.header`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0.3rem 0.3rem 0;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
`;

export const ZoomIcon = styled(BiSearchAlt)`
  position: absolute;
  left: 6px;
  top: 6px;
  font-size: 1.4rem;
  cursor: pointer;
  color: #fff;
`;

export const Footer = styled.footer`
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Brand = styled.h3`
  font-size: 1.3rem;

  font-weight: 700;
  letter-spacing: 1px;
`;
export const Name = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
`;
export const Price = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const Button = styled(Link)`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.textDark};
  text-transform: uppercase;
  margin-top: 1rem;
`;
