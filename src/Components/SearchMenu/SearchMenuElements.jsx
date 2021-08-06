import styled, { css } from 'styled-components';
import { AiFillCaretDown } from 'react-icons/ai';

export const activeStyles = css`
  visibility: visible;
  opacity: 100%;
  transform: translateX(0);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  justify-content: space-between;
  flex-direction: column;
  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const SearchBar = styled.input`
  font-size: 1rem;
  padding: 0 1rem;
  height: 3.5rem;
  width: 15rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: ${({ theme }) => theme.radius};
  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 0 2.5rem 0 0;
  }
`;

export const DropDownWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.paper};
  width: 15rem;
  height: auto;
  height: ${(props) => (props.active ? 'auto' : '2.5rem')};
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-weight: 500;

  position: relative;
`;

export const DropDownMenu = styled.ul`
  border-radius: ${({ theme }) => theme.radius};
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  background-color: #fff;
  z-index: 1;
  top: 3.5rem;
  left: 0;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.68);
  transform: translateY(-5px);
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  ${(props) =>
    props.active
      ? css`
          ${activeStyles}
        `
      : ''}
`;

export const Arrow = styled(AiFillCaretDown)``;

export const DropDownItem = styled.li`
  color: black;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.outline};
  }
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-weight: 500;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundLight};
  }
`;

export const Submenu = styled(DropDownMenu)`
  top: 101%;
  left: 20%;
`;
