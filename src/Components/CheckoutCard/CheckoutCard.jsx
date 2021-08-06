import React from 'react';
import styled, { css } from 'styled-components';
import { useGlobalContext } from '../../Context';
import { AmountBox, AmountButton, AmountInput } from '../../Pages/GlobalStyles';
import { FaTrash } from 'react-icons/fa';
export const Card = styled.article`
  width: 17rem;
  height: 21rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.outline};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  width: 45%;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  display: flex;
`;
export const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Name = styled.h4`
  color: ${({ theme }) => theme.accent};
  text-align: center;
`;

export const Price = styled.p`
  font-weight: 500;
`;

export const DeleteBtn = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c23616;
  border: 2px solid ${({ theme }) => theme.outline};
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
`;

export const Total = styled.h3`
  color: ${({ theme }) => theme.accent};
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.textDark};
`;

const CheckoutCard = ({ images, model, price, itemQuantity, id }) => {
  const { incrementQuantity, decrementQuantity, deleteItem } =
    useGlobalContext();
  return (
    <Card>
      <ImgContainer>
        <Img src={images[0]} />
      </ImgContainer>
      <Name>{model}</Name>
      <Price>${price}</Price>
      <AmountBox>
        <AmountButton onClick={() => incrementQuantity(id)}>+</AmountButton>
        <AmountInput type='text' min='1' disabled value={itemQuantity} />
        <AmountButton onClick={() => decrementQuantity(id)}>-</AmountButton>
      </AmountBox>
      <DeleteBtn onClick={() => deleteItem(id)}>
        <FaTrash />
      </DeleteBtn>
      <Total>
        <Span> Item Total :</Span> ${price * itemQuantity}
      </Total>
    </Card>
  );
};

export default CheckoutCard;
