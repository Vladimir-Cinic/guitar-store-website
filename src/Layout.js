import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Main, Container } from './Pages/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <Main>
      <Navbar />
      <Container>{children}</Container>
    </Main>
  );
};

export default Layout;
