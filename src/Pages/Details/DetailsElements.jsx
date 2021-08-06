import styled, { css } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Btn } from '../GlobalStyles';

export const DetailsWrapper = styled.article`
  width: 100%;
  max-width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.outline};

  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 100%;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 1000px;
  }
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.radius};
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
  background: linear-gradient(to right, #2c3e50, #bdc3c7);
`;

export const MainImage = styled.div`
  height: 15rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  margin-bottom: 0.5rem;
  max-width: 1000px;
  border-radius: ${({ theme }) => theme.radius};
  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 18.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    height: 21rem;
  }
`;

export const ImagesRow = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideImage = styled.div`
  border-radius: ${({ theme }) => theme.radius};
  height: 100%;
  width: 6rem;
  background-color: #000;
  overflow: hidden;
  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SpecsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  padding: 1rem 1rem 1.5rem;
  background: ${({ theme }) => theme.paper};
  @media ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: row;
  }
`;

export const TextContainer = styled.article`
  width: 100%;
`;

export const Name = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  display: inline-block;
  border-bottom: 2px solid ${({ theme }) => theme.outline};
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.accent};
`;

export const Brand = styled.h5`
  font-size: 1.2rem;
`;

export const Specs = styled.p`
  color: ${({ theme }) => theme.textDark};
  border-bottom: 1px solid ${({ theme }) => theme.outline};
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const TotalPrice = styled.h5`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.accent};
  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.6rem;
  }
`;
export const Span = styled.span`
  font-weight: 600;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  @media ${({ theme }) => theme.breakpoints.lg} {
    align-items: flex-end;
    flex-direction: row;
    order: 2;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin: 1rem 0;
  width: auto;
  max-width: 25rem;
  align-items: center;
  justify-content: flex-start;
  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 0;
  }
`;

export const CartButton = styled(Btn)`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  height: 2.5rem;
  margin-left: 2rem;
`;

export const SliderContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  @media ${({ theme }) => theme.breakpoints.lg} {
    margin-top: 5rem;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 21rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${({ theme }) => theme.breakpoints.lg} {
    order: 1;
  }
`;

export const Slider = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
  position: relative;
  margin-top: 1rem;
  overflow: hidden;
`;

export const SliderItem = styled.article`
  cursor: pointer;
  width: 15rem;
  height: 15rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: ${({ theme }) => theme.radius};
  transform: ${(props) =>
    props.active
      ? 'translateX(0)'
      : props.previous
      ? 'translateX(-100%)'
      : 'translateX(100%)'};
`;

export const SliderImg = styled(SideImage)`
  height: 7rem;
  width: 100%;
`;

export const SliderText = styled.h5`
  text-align: center;
`;

export const btnStyles = css`
  font-size: 2rem;
  background-color: ${({ theme }) => theme.backgroundLight};
  padding: 0.3rem;
  cursor: pointer;
`;

export const PrevButton = styled(FaChevronLeft)`
  ${btnStyles}
`;
export const NextButton = styled(FaChevronRight)`
  ${btnStyles}
`;
