import React from 'react';
import { useGlobalContext } from '../../../Context';
import {
  Brand,
  Button,
  Footer,
  Header,
  Image,
  Name,
  Price,
  TextWrapper,
  Wrapper,
  ZoomIcon,
} from './CardElements';

const Card = ({ brand, model, price, images, id }) => {
  const { openModal } = useGlobalContext();
  return (
    <Wrapper>
      <Header>
        <ZoomIcon onClick={() => openModal(id)} />
        <Image src={images[0]} />
      </Header>
      <Footer>
        <Brand>{brand}</Brand>
        <Name>{model}</Name>
        <Price>${price}</Price>
        <Button to={`/details/${id}`}>Details</Button>
      </Footer>
    </Wrapper>
  );
};

export default Card;
