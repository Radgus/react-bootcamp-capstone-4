import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddToCart from './AddToCart';
import {DividerSpace} from './Mix';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
  flex: 1 0 auto;
`;

const Product = styled.div`
  width: 45%;
  margin: 1.2rem 0;
  border: 0.1rem solid black;
  border-radius: 1rem;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  .imageBox {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
  }
  .category {
    padding-top: 0.5rem;
  }
  .title {
    padding-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
    display: flex;
    flex: 1 0 auto;
  }
  .price {
    padding-top: 0.5rem;
    font-size: 1.6rem;
    font-weight: 500;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 450px) {
    width: 30%;
  }
  @media (min-width: 700px) {
    width: 22%;
  }
  @media (min-width: 1000px) {
    width: 18%;
  }
`;

const ProductSection = ({ productsList }) => (
  <Container>
    {productsList.map((item) => 
      <Product key={item.id}>
        <Link to={{
          pathname: `/product/${item.id}`,
        }}>
          <div className="imageBox">
            <img className='img' src={item.data.mainimage.url} alt={item.data.mainimage.alt} />
          </div>
        </Link>
        <DividerSpace margin='0.5rem'/>
        <div className='category'>
          <p><b>Category: </b>{item.data.category.slug}</p>
        </div>
        <div className='title'>
          <p>{item.data.name}</p>
        </div>
        <div className='price'>
          <p>${item.data.price}</p>
          <AddToCart product={item} icon={false}/>
        </div>
      </Product>
    )}
  </Container>
);

export default ProductSection;
