import React from 'react';
import ProductsGrid from '../../Components/ProductsGrid/Grid/ProductsGrid';
import Modal from '../../Components/ProductsGrid/Modal/Modal';
import SearchMenu from '../../Components/SearchMenu/SearchMenu';
import { useGlobalContext } from '../../Context';

const Home = () => {
  const { state } = useGlobalContext();
  return (
    <>
      <SearchMenu />
      <ProductsGrid />
      {state.isModalOpen && <Modal />}
    </>
  );
};

export default Home;
