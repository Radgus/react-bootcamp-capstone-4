import React from 'react';
import styled from 'styled-components';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import SliderSection from './components/SliderSection';
import productsCategories from '../../utils/productsCategory';
import CategorySection from './components/CategorySection';


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

  return (
    <main>
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

      

    </main>
  )
}

export default Home;
