import React, { useState , useEffect } from 'react';
import styled from 'styled-components';
import shoppingCarIcon from '../resources/images/shopping-icon-2.png';
import { Link } from 'react-router-dom';


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
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useState([
    {
      'amount': 2,
      'product': {
        'id': "YZWTvxIAACkAujoz",
        'data': {
          'name': "Bathrobe Disney Mickey Mouse",
        },
      },
    },

  ]);

  return (
    <Container>
      {
        products.length > 0
        && <Alert>
            {products.length}
          </Alert>
      }
      
      <Link to = '/cart'>
        <Img src={shoppingCarIcon} alt="shoppingCarIcon" />
      </Link>
    </Container>
  );
}

export default ShoppingIcon;
