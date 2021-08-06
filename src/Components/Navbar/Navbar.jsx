import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import Cart from '../Cart/Cart';
import { Logo, Nav } from './NavbarElements';

const Navbar = () => {
  const history = useHistory();
  const { setIsCartOpen, removeFilters } = useGlobalContext();
  const goToHomePage = () => {
    setIsCartOpen(false);
    history.push('/');
    removeFilters();
  };
  return (
    <Nav>
      <Logo onClick={goToHomePage}>Guitar Store</Logo>
      <Cart />
    </Nav>
  );
};

export default Navbar;
