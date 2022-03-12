import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import SliderSection from './components/SliderSection';
import productsCategories from '../../utils/productsCategory';
import CategorySection from './components/CategorySection';
import ProductSection from './components/ProductSection';
import productList from '../../utils/products';
import { Main } from '../../components/Mix';

const SectionTitle = styled.div`
  margin-top: 3rem;
`;

const Home = () => {
  const featuredBanners = useFeaturedBanners().data?.results;
  const handleSlider = (moveDirection) => {
    const contentSlider = document.getElementById('contentSlider');
    const childLength = contentSlider.firstChild.clientWidth;

    if (moveDirection === 'left') {
      contentSlider.scrollLeft -= childLength;
    }
    if (moveDirection === 'rigth') {
      contentSlider.scrollLeft += childLength;
    }
  }

  const categoryList = productsCategories.results;

  const productsList = productList.results

  return (
    <Main>
      <SliderSection 
        handleSlider={handleSlider} 
        featuredBanners={featuredBanners}
      />

      <SectionTitle>
        <h1>Categories</h1>
      </SectionTitle>

      <CategorySection categoryList={categoryList}/>
      
      <SectionTitle>
        <h1>Products</h1>
      </SectionTitle>

      <ProductSection productsList={productsList}/> 

      <SectionTitle>
        <h1>Products</h1>
        <Link to="/productList">
          <button type='button'>View all products</button>
        </Link>
      </SectionTitle>

    </Main>
  )
}

export default Home;
