import React, { useState } from 'react';
import { useHistory } from 'react-router';

import {
  CartItems,
  CheckoutFooter,
  CheckoutWrapper,
  Subtotal,
  TotalsWrapper,
  Total,
  ButtonGroup,
  ClearButton,
  Message,
} from './CheckoutElements';
import CheckoutCard from '../../Components/CheckoutCard/CheckoutCard';
import { useGlobalContext } from '../../Context';
import { Btn } from '../GlobalStyles';
import { FaTrash } from 'react-icons/fa';

const Checkout = () => {
  const { cartItems, clearCart, cartTotal, data, setProductsData } =
    useGlobalContext();
  const [shipping, setShipping] = useState(15);
  const history = useHistory();

  const continueShopping = () => {
    setProductsData(data);
    history.push('/');
  };
  return (
    <CheckoutWrapper>
      <CartItems>
        {cartItems.length === 0 ? (
          <Message>Your Cart Is Empty</Message>
        ) : (
          <>
            {cartItems.map((item) => {
              return <CheckoutCard key={item.id} {...item} />;
            })}
          </>
        )}
      </CartItems>

      <CheckoutFooter>
        {cartItems.length === 0 ? null : (
          <ClearButton onClick={clearCart}>
            Clear Cart <FaTrash style={{ marginLeft: '.5rem' }} />
          </ClearButton>
        )}
        <ButtonGroup>
          <Btn>Checkout</Btn>
          <Btn onClick={continueShopping}>Return</Btn>
        </ButtonGroup>
        <TotalsWrapper>
          {cartItems.length === 0 ? null : (
            <>
              <Subtotal>Subtotal : ${cartTotal} </Subtotal>
              <Subtotal>Shipping Tax : ${shipping}</Subtotal>
              <Total>Total : ${cartTotal + shipping}</Total>
            </>
          )}
        </TotalsWrapper>
      </CheckoutFooter>
    </CheckoutWrapper>
  );
};

export default Checkout;
