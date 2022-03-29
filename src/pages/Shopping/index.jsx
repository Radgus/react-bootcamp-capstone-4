import React from 'react';
import styled from 'styled-components';
import Payment from './components/payment';
import ProductsDescription from './components/productsDescription';


const Container = styled.div`
  margin: 0 8% 2rem;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;


const ShoppingCart = () => {

  return (
    <Container>
      <h1>Shopping Cart Page</h1>
      
      <Payment/>

      <ProductsDescription/>

    </Container>
  );
}

export default ShoppingCart;
