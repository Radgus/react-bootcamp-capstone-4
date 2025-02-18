import React, { useContext } from 'react';
import styled from 'styled-components';
import shoppingCarIcon from '../resources/images/shopping-icon-2.png';
import { Link } from 'react-router-dom';
import ProductContext from '../state/productContext';


const Container = styled.div`
  height: 3.5rem;
  display: flex;
`;

const Alert = styled.div`
  width: 2rem;
  height: 2rem;
  border: 0.1rem solid red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 100%;
  cursor: pointer;
`;

const ShoppingIcon = () => {
  const { productsInCart } = useContext(ProductContext);

  return (
    <Container>
      {
        productsInCart.length > 0
        && <Alert>
            {productsInCart.reduce((valorAnterior,valorActual)=>{
              return valorAnterior+valorActual.amount;
            },0)}
          </Alert>
      }
      
      <Link to = '/cart'>
        <Img src={shoppingCarIcon} alt="shoppingCarIcon" />
      </Link>
    </Container>
  );
}

export default ShoppingIcon;
