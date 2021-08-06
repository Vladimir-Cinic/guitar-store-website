import React from 'react';
import { useGlobalContext } from '../../../Context';
import { Grid, Message } from './GridElements';
import Card from '../Card/Card';

const ProductsGrid = () => {
  const { productsData } = useGlobalContext();

  if (productsData.length === 0) {
    return <Message>No items match your search...</Message>;
  } else {
    return (
      <Grid>
        {productsData.map((item, i) => {
          return <Card key={i} {...item} />;
        })}
      </Grid>
    );
  }
};

export default ProductsGrid;
