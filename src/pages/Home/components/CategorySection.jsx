import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Category = styled.div`
  width: 45%;
  height: auto;
  margin: 0.7rem 0;
  .imageBox {
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .title {
    text-align: center;
    padding-top: 0.3rem;
    font-size: 1.6rem;
    font-weight: 500;
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

const CategorySection = ({ categoryList }) => (
  <Categories>
    {categoryList?.map((item) => {
      return (
        <Category key={item.id}>
        <Link 
          to={{
            pathname: "/productList",
            search: `?category=${item.id}`,
          }}>
          <div className="imageBox">
            <img src={item.data.main_image.url} alt={item.data.main_image.alt} />
          </div>
        </Link>
        <div className="title">
          <p>{item.data.name}</p>
        </div>
      </Category>
      ) 
    })}
  </Categories>
);

export default CategorySection;
