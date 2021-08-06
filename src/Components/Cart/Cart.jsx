import React, { useState } from 'react';
import { Btn } from '../../Pages/GlobalStyles';
import { useLocation, useHistory } from 'react-router-dom';
import CartItem from './CartItem';
import {
  CartContainer,
  CartIcon,
  Badge,
  ItemsWrapper,
  ItemsList,
  BtnContainer,
  Notification,
  ItemNotification,
} from './CartElements';
import { useGlobalContext } from '../../Context';

const Cart = () => {
  const { setIsCartOpen, cartItems } = useGlobalContext();
  const location = useLocation();
  const history = useHistory();

  const goToPage = (page) => {
    setIsCartOpen(false);
    history.push(`/${page}`);
  };

  const { isCartOpen, handleCartClick, showNotification } = useGlobalContext();
  return (
    <>
      <CartContainer
        onClick={handleCartClick}
        hide={location.pathname === '/checkout'}
      >
        <ItemNotification active={showNotification}>
          Item Added To The Cart!
        </ItemNotification>
        <CartIcon />
        <Badge>{cartItems.length}</Badge>
      </CartContainer>

      <ItemsWrapper active={isCartOpen}>
        {cartItems.length === 0 ? (
          <Notification>Your Cart Is Empty</Notification>
        ) : (
          <>
            <ItemsList scroll={cartItems.length > 4 ? true : false}>
              {cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </ItemsList>
            <BtnContainer>
              <Btn onClick={() => goToPage('checkout')}>
                Proceed to checkout
              </Btn>
              <Btn onClick={() => goToPage('')}>Continue shopping</Btn>
            </BtnContainer>
          </>
        )}
      </ItemsWrapper>
    </>
  );
};

export default Cart;
