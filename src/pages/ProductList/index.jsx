/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Divider, DividerSpace } from '../../components/Mix';
import activeIcon from '../../resources/images/active-icon.png';
import listIcon from '../../resources/images/list-icon.png';
import ProductSection from '../../components/ProductSection';
import { useFeaturedCategories } from '../../utils/hooks/useFeaturedCategories';
import Loader from '../../components/Loader';
import { Container, Sidebar, Pagination, NoProducts, ClearButton } from './styles';
import { useFetching } from '../../utils/hooks/useFetch';
const URL = 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5Bat%28document.type%2C+%22product%22%29%5D%5D&pageSize=12&languageCode=en-us&page=';


const ProductList = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const categoryList = useFeaturedCategories().data.results;
  const [fetchProducts, setFetchProducts] = useState([]);
  const [nextPage, setNextPage] = useState('');  
  const [previousPage, setPreviousPage] = useState(''); 
  let firstCall = useFetching(URL+1);  

  useEffect(() => {
    const data = firstCall?.data;
    const results = firstCall?.data?.results;
    // setTotalPages(data.total_pages);
    setNextPage(data.next_page);
    setPreviousPage(data.prev_page);
    if (results !== null && 
      results !== undefined && 
      results?.length > 0) {
      setProducts(results);
    }
    if (Object.keys(data)?.length > 0) {
      const numberOfPages = data['total_pages'];
      for (let i = 0; i < numberOfPages; i++) {
        setPages(pages=>pages.concat(<p id={i+1} className="pagination__number" key={i+1} onClick={()=>handleCounter(i+1)}> {i+1} </p>));
      }
    }
  }, [firstCall]);

  useEffect(() => {
    const search  = window.location.search;
    const params = new URLSearchParams(search);
    const category = params.get('category');
    if (category !== null && categoryList !== null && categoryList !== undefined && categoryList.length > 0 ) {
      const categoryParams = category.split(',');

      const filterSelected = categoryList.filter(item => 
      item.slugs.length === categoryParams.length && 
      item.slugs.every(element=> categoryParams.includes(element))
      );
      setActiveFilters(activeFilters => activeFilters.concat(filterSelected));
      const filter = document.getElementById(filterSelected[0]['id']);
      filter.checked = true;
    }
  }, [categoryList]);

  useEffect(() => {
    const categoryNames = [];
    activeFilters.forEach(element => {
      element.slugs.forEach((slug)=>{
        categoryNames.push(slug);
      })
    });
    if (categoryNames?.length > 0) {
      // eslint-disable-next-line max-len
      const newListProducts = fetchProducts?.data?.results?.filter( item => categoryNames.includes(item.data.category.slug));
      setProducts(newListProducts);
    } else {
      setProducts(fetchProducts?.data?.results);
    }
  }, [activeFilters,fetchProducts]);

  useEffect(() => {
    // firstCall.pidirAlgo(url);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    const firstFetchProducts = async () => {
      const response = await fetch(URL+1);
      const data = await response.json();
      setFetchProducts({ data, isLoading: false });
    }
    firstFetchProducts();
  }, []);


  const resetPageSelected = (id) => {
    for (let i = 0; i < firstCall?.data?.total_pages; i++) {
      const node = document.getElementById(i+1);
      node.style.borderColor= '#DCDCDC';
    }
    const selected = document.getElementById(id);
    selected.style.borderColor = 'red';
    selected.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
  }

  const  handleMovePage = async(move) => {
    const urlFetch = move === 'next' ? nextPage : previousPage;
    if (urlFetch !== null && urlFetch !== undefined && urlFetch !== '') {
      const response = await fetch(urlFetch);
      const data = await response.json();
      setNextPage(data.next_page);
      setPreviousPage(data.prev_page);
      setFetchProducts({ data, isLoading: false });
      const currentPage = data.page;
      resetPageSelected(currentPage);
    }
  }

  const  handleCounter = async (page) => {
    const response = await fetch(URL+page);
    const data = await response.json();
    setNextPage(data.next_page);
    setPreviousPage(data.prev_page);
    setFetchProducts({ data, isLoading: false });
    resetPageSelected(page);
  }

  const handlerCheckbox = (e,id) => {
    const isActive = e.target.checked;
    if (isActive) {
      const filterSelected = categoryList.filter(item => item.id === id);
      setActiveFilters(activeFilters.concat(filterSelected));
    } else {
      const newActiveFilters = activeFilters.filter(item => item.id !== id);
      setActiveFilters(newActiveFilters);
    }
  }

  const handleClearFilters = () => {
    activeFilters.forEach((filter) =>{
      const checkInput = document.getElementById(filter['id']);
      checkInput.checked = false;
    });
    setActiveFilters([]);
  }
  
  return (
    <Container>

      <div className="container__sidebar">
        <Sidebar>

          <div className="sidebar__section">
            <div className="sidebar__icon">
              <img src={listIcon} alt="filter Icon"/>
            </div>
            <p>Category list</p>
            <ClearButton type='button' onClick={handleClearFilters}>Clear filters</ClearButton>
          </div>
          <div className='sidebar__horizontal'>
          { 
            categoryList?.map((category) => {
              const id = category.id;
              return (
                <div key={id} className="sidebar__section">
                  <div className="sidebar__icon check">
                    <input 
                      id={id} 
                      type="checkbox" 
                      onClick={(e) => handlerCheckbox(e,id)}
                      />
                  </div>
                  <label htmlFor={id}>{category.data.name}</label>
                </div>
              );
            })
          }
          </div>
          <Divider />
          
          <div className="sidebar__section">
            <div className="sidebar__icon">
              <img src={activeIcon} alt="filter Icon"/>
            </div>
            <p>Activated filters</p>
          </div>
          <div className='sidebar__horizontal'>
            { 
              activeFilters.length > 0 && activeFilters.map((category) => {
                const id = category.id;
                return (
                  <div key={id} className="sidebar__section">
                    <div className="sidebar__icon check">
                      <div className="sidebar__bullet"/>
                    </div>
                    <p>{category.data.name}</p>
                  </div>
                );
              })
            }
          </div>
        </Sidebar>
      </div>

      <div className="container__content">
        {
          isLoading
          ? <Loader/>
          : <>
              { products !== undefined &&
                products?.length === 0
                ? <NoProducts> <h3>There are no products</h3> </NoProducts> 
                : <ProductSection productsList={products}/>
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
          </>
        }
      </div>

    </Container>
  )
}

export default ProductList;
