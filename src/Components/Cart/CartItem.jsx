import React from 'react';
import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.outline};
  background-color: ${({ theme }) => theme.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  color: black;
  border-radius: ${({ theme }) => theme.radius};
  padding: 3px 8px 3px 3px;
  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 3rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
`;
export const Img = styled.img`
  width: 100%;
  object-fit: fill;
  height: 100%;
`;
export const Product = styled.h6`
  color: ${({ theme }) => theme.accent};
  @media ${({ theme }) => theme.breakpoints.xsm} {
    font-size: 0.8rem;
  }
`;
export const Span = styled.span`
  font-weight: 600;
  font-size: 0.8rem;
  @media ${({ theme }) => theme.breakpoints.xsm} {
    font-size: 0.9rem;
  }
`;

const CartItem = ({ model, itemQuantity, images, price }) => {
  return (
    <Item>
      <ImageContainer>
        <Img src={images[0]} />
      </ImageContainer>
      <Product>{model}</Product>
      <Span>{itemQuantity}x</Span>
      <Span>${price.toFixed(3) * itemQuantity}</Span>
    </Item>
  );
};

export default CartItem;
