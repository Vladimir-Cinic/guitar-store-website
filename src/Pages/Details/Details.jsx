import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Button } from '../../Components/ProductsGrid/Card/CardElements';
import { useGlobalContext } from '../../Context';
import { AmountButton, AmountBox, AmountInput } from '../GlobalStyles';
import {
  Brand,
  ButtonGroup,
  CartButton,
  DetailsWrapper,
  ImagesRow,
  ImagesWrapper,
  Img,
  MainImage,
  Name,
  SideImage,
  Span,
  Specs,
  TotalPrice,
  TextContainer,
  SpecsWrapper,
  ButtonsWrapper,
  SimilarItems,
  Slider,
  SliderContainer,
  PrevButton,
  NextButton,
  Item,
  SimilarItem,
  SliderWrapper,
  SliderItem,
  SliderImg,
  SliderText,
} from './DetailsElements';

const Details = () => {
  const { addToCart, data, quantity, setQuantity } = useGlobalContext();
  const [currentImg, setCurrentImg] = useState(0);
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(
    data.find((item) => item.id === parseInt(id))
  );
  const [slideIndex, setSlideIndex] = useState(0);
  const [similarProducts, setsimilarProducts] = useState(
    data
      .filter((item) => item.brand === currentProduct.brand)
      .filter((item) => item.model !== currentProduct.model)
  );  

  useEffect(() => {
    setsimilarProducts(
      data
        .filter((item) => item.brand === currentProduct.brand)
        .filter((item) => item.model !== currentProduct.model)
    );
  }, [currentProduct]);

  const decrement = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const lastIndex = similarProducts.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    } else if (slideIndex > lastIndex) {
      setSlideIndex(0);
    }
  }, [slideIndex, similarProducts]);

  useEffect(() => {
    let slider = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [slideIndex]);
  return (
    <DetailsWrapper>
      <ImagesWrapper>
        <MainImage>
          <Img src={currentProduct.images[currentImg]} />
        </MainImage>
        <ImagesRow>
          {currentProduct.images.map((img, index) => {
            return (
              <SideImage key={index} onClick={() => setCurrentImg(index)}>
                <Img src={img} />
              </SideImage>
            );
          })}
        </ImagesRow>
      </ImagesWrapper>
      <SpecsWrapper>
        <TextContainer>
          <Brand>{currentProduct.brand}</Brand>
          <Name>{currentProduct.model}</Name>
          <Specs>
            <Span>Body : </Span> Mahogany
          </Specs>
          <Specs>
            <Span>Top : </Span> Maple
          </Specs>
          <Specs>
            <Span>Neck : </Span> Neck-through
          </Specs>
          <Specs>
            <Span>Fretboard : </Span> Ebony
          </Specs>
          <Specs>
            <Span>Scale : </Span> 648 mm
          </Specs>
          <Specs>
            <Span>Frets : </Span> 24 Stainless Steel Frets
          </Specs>
          <Specs>
            <Span>Pickups :</Span>
            {currentProduct.pickups}
          </Specs>
          <Specs>
            <Span>Price : </Span>${currentProduct.price}
          </Specs>
          <ButtonsWrapper>
            <TotalPrice>Total : ${currentProduct.price * quantity} </TotalPrice>
            <ButtonGroup>
              <AmountBox>
                <AmountButton onClick={() => setQuantity(quantity + 1)}>
                  +
                </AmountButton>
                <AmountInput
                  type='text'
                  min='1'
                  disabled
                  value={quantity === 0 ? 1 : quantity}
                />
                <AmountButton onClick={decrement}>-</AmountButton>
              </AmountBox>

              <CartButton onClick={() => addToCart(currentProduct)}>
                Add to cart
              </CartButton>
            </ButtonGroup>
          </ButtonsWrapper>
        </TextContainer>
        <SliderContainer>
          <Brand>Similar Products</Brand>
          <SliderWrapper>
            <PrevButton onClick={() => setSlideIndex(slideIndex - 1)} />
            <Slider>
              {similarProducts.map((product, index) => {
                return (
                  <SliderItem
                    onClick={() =>
                      setCurrentProduct(
                        data.find((item) => item.id === parseInt(product.id))
                      )
                    }
                    active={slideIndex === index}
                    previous={slideIndex < 0}
                    key={product.id}
                  >
                    <SliderImg>
                      <Img src={product.images[0]} />
                    </SliderImg>
                    <SliderText>{product.model}</SliderText>
                    <SliderText>$ {product.price}</SliderText>
                  </SliderItem>
                );
              })}
            </Slider>
            <NextButton onClick={() => setSlideIndex(slideIndex + 1)} />
          </SliderWrapper>
        </SliderContainer>
      </SpecsWrapper>
    </DetailsWrapper>
  );
};

export default Details;
