/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductSection from '../../components/ProductSection';
import Loader from '../../components/Loader';
import { DividerSpace } from '../../components/Mix';
import Pagination from '../../components/Pagination';

const Container = styled.div`
  margin: 0 8%;
  padding: 0 1rem;
  background-color: white;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`;

const H3 = styled.h3`
  margin: 1rem 0;
  display: flex;
  flex: 1 0 auto;
`;
// eslint-disable-next-line max-len
const URL = 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5Bat%28document.type%2C+%22product%22%29%5D%5D&pageSize=20&languageCode=en-us&page=';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchProducts, setFetchProducts] = useState({});
  const [nextPage, setNextPage] = useState('');  
  const [previousPage, setPreviousPage] = useState(''); 
  const [pages, setPages] = useState([]);


  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const search  = window.location.search;
    const params = new URLSearchParams(search);
    const query = params.get('q');

    const FetchingProducts = async() => {
      const response = await fetch(URL+1);
      const data = await response.json();
      setFetchProducts({...data});
      setNextPage(data.next_page);
      setPreviousPage(data.prev_page);

      const productsFiltered = data.results.filter(item =>
          item.data.name.includes(query)
      )
      setProducts(productsFiltered);

      if (Object.keys(data)?.length > 0) {
        const numberOfPages = data['total_pages'];
        for (let i = 0; i < numberOfPages; i++) {
          setPages(pages=>pages.concat(<p id={i+1} className="pagination__number" key={i+1} onClick={()=>handleCounter(i+1)}> {i+1} </p>));
        }
      }
    }
    FetchingProducts();
  },[]);

  useEffect(()=>{
    if (Object.keys(fetchProducts).length > 0) {
      
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      
      const search  = window.location.search;
      const params = new URLSearchParams(search);
      const query = params.get('q');
      
      const productsFiltered = fetchProducts.results.filter(item =>
        item.data.name.includes(query)
      )
      setProducts(productsFiltered); 
    }
  },[fetchProducts]);

  const resetPageSelected = (id,total_pages) => {
    for (let i = 0; i < total_pages; i++) {
      const node = document.getElementById(i+1);
      node.style.borderColor= '#DCDCDC';
    }
    const selected = document.getElementById(id);
    selected.style.borderColor = 'red';
  }

  const  handleMovePage = async(move) => {
    const urlFetch = move === 'next' ? nextPage : previousPage;
    if (urlFetch !== null && urlFetch !== undefined && urlFetch !== '') {
      const response = await fetch(urlFetch);
      const data = await response.json();
      setNextPage(data.next_page);
      setPreviousPage(data.prev_page);
      setFetchProducts({...data});
      const currentPage = data.page;
      resetPageSelected(currentPage,data.total_pages);
      // setProducts(data.results);
    }
  }

  const  handleCounter = async (page) => {
    const response = await fetch(URL+page);
    const data = await response.json();
    setNextPage(data.next_page);
    setPreviousPage(data.prev_page);
    setFetchProducts({...data});
    resetPageSelected(page, data.total_pages);
    // setProducts(data.results);
  }

  return(
    <Container>
      <h1>Search Result Page</h1>
      {
        isLoading
        ? <Loader/>
        : products.length > 0
          ? <ProductSection productsList={products}/>
          : <H3>There are no results matching the searchTerm.</H3> 
      }
      <DividerSpace/>

      <Pagination>
        <div className="alfaOmega">
          <h3 onClick={()=>handleMovePage('previous')}>Previous</h3>
          <h3 onClick={()=>handleMovePage('next')}>Next</h3>
        </div>
        <nav>
          {
            pages.length > 0 && pages.map(page => page)
          }
        </nav>
      </Pagination>

    </Container>
  )
}

export default Search;
