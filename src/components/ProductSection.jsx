import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
  flex: 1 0 auto;
`;

const Product = styled.div`
  width: 45%;
  height: auto;
  margin: 1.2rem 0;
  .imageBox {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
  }
  .category {
    padding-top: 0.6rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .title {
    padding-top: 0.5rem;
    font-size: 1.4rem;
    font-weight: 400;
  }
  .price {
    padding-top: 0.5rem;
    font-size: 1.6rem;
    font-weight: 500;
  }
  .addCart :hover{
    cursor: pointer;
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

const ProductSection = ({ productsList, handleAddCart }) => (
  <Container>
    {productsList.map((item) => 
      <Product key={item.id}>
        <Link to={{
          pathname: `/product/${item.id}`,
        }}>
          <div className="imageBox">
            <img src={item.data.mainimage.url} alt={item.data.mainimage.alt} />
          </div>
        </Link>
        <div>
          <p className="category">{item.data.category.slug}</p>
        </div>
        <div className="title">
          <p>{item.data.name}</p>
        </div>
        <div className="price">
          <p>${item.data.price}</p>
        </div>
        <div className='addCart'>
          <button type='button' onClick={() => handleAddCart(item.id)}><b>Add to cart</b></button>
        </div>
      </Product>
    )}
  </Container>
);

export default ProductSection;
