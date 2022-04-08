import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import { useFeaturedCategories } from '../../utils/hooks/useFeaturedCategories';
import SliderSection from './components/SliderSection';
import CategorySection from './components/CategorySection';
import ProductSection from '../../components/ProductSection';
import { Main } from '../../components/Mix';
import { useFetching } from '../../utils/hooks/useFetch';


const SectionTitle = styled.div`
  margin-top: 3rem;
`;

// eslint-disable-next-line max-len
const FeaturedProductsGridUrl = 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16'

const Home = () => {
  const [products, setProducts] = useState([]);

  const featuredBanners = useFeaturedBanners().data?.results;
  const featuredCategories = useFeaturedCategories().data?.results;
  // const fetchProducts = useFeaturedProducts().data.results;
  const fetchProducts = useFetching(FeaturedProductsGridUrl).data.results;

  useEffect(() => {
    if (fetchProducts !== null && fetchProducts !== undefined && fetchProducts.length > 0) {
      setProducts(fetchProducts);
    }
  }, [fetchProducts]);


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

  return (
    <Main>
      <SliderSection 
        handleSlider={handleSlider} 
        featuredBanners={featuredBanners}
      />

      <SectionTitle>
        <h1>Categories</h1>
      </SectionTitle>

      <CategorySection categoryList={featuredCategories}/>
      
      <SectionTitle>
        <h1>Products</h1>
      </SectionTitle>

      <ProductSection productsList={products}/> 

      <SectionTitle style={{'marginBottom':'1rem'}}>
        <h1>Products</h1>
        <Link to="/products">
          <button type='button'>View all products</button>
        </Link>
      </SectionTitle>

    </Main>
  )
}

export default Home;
