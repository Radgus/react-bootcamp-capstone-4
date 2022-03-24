/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Divider, DividerSpace } from '../../components/Mix';
import categoryIcon from '../../resources/images/category-icon2.png';
import activeIcon from '../../resources/images/active-icon.png';
import listIcon from '../../resources/images/list-icon.png';
import ProductSection from '../../components/ProductSection';
import { useFeaturedCategories } from '../../utils/hooks/useFeaturedCategories';
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';
import Colors from '../../utils/colors';
import Spiner from './components/Loader';


const Container = styled.div`
  display: flex;
  margin-right: 8%;
  flex: 1 0 auto;
  .container__sidebar {
    width: ${(props) => props.collapsed ? '4.25rem' : '36%'};
    background-color: white;
    overflow-y: hidden;
  }
  .container__content {
    background-color: white;
    padding: 1rem;
    margin-left: 1rem;
    width: -webkit-fill-available;
  }
`;

const Sidebar = styled.section`
  .sidebar__section {
    display: flex;
    align-items: center;
  }
  .sidebar__icon {
    min-width: 4rem;
    width: 4rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  .check {
    height: 3rem;
  }
  .pointer {
    cursor: pointer;
  }
  .sidebar__bullet {
    width: 0.6rem;
    height: 0.6rem;
    background-color: black;
    border-radius: 50%;
  }
`;

const Pagination = styled.section`
  nav {
    margin: 3rem 0 2rem 0;
    display: flex;
    justify-content: right;
  }
  a {
    min-width: 2rem;
    border: 0.2rem solid ${Colors['BG-C']};
    cursor: pointer;
    font-size: 1.8rem;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    color: black;
    border-radius: 0.5rem;
    &:hover {
      background-color: brown;
      color: white;
    }
  }
`;

const NoProducts = styled.div`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ProductList = () => {
  const [isMenuCollapse,setIsMenuCollapse] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const categoryList = useFeaturedCategories().data.results;
  const fetchProducts = useFeaturedProducts().data.results;
  

  useEffect(() => {
    if (fetchProducts !== null && fetchProducts !== undefined && fetchProducts.length > 0) {
      setProducts(fetchProducts);
    }
  }, [fetchProducts]);

  useEffect(() => {
    const search  = window.location.search;
    const params = new URLSearchParams(search);
    const category = params.get('category');
    if (category !== null && categoryList !== null && 
        categoryList !== undefined && categoryList.length > 0 ) {
      const filterSelected = categoryList.filter(item => item.id === category);
      setActiveFilters(activeFilters => activeFilters.concat(filterSelected));
      const filter = document.getElementById(filterSelected[0]['id']);
      filter.checked = true;
    }
  }, [categoryList]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const categoryNames = [];
    activeFilters.forEach(element => {
      categoryNames.push(element.data.name.toLowerCase());
    });

    if (categoryNames.length > 0) {
      // eslint-disable-next-line max-len
      const newListProducts = fetchProducts?.filter( item => categoryNames.includes(item.data.category.slug));
      setProducts(newListProducts);
    } else {
      setProducts(fetchProducts);
    }
  }, [activeFilters,fetchProducts]);

  const handleSidebar = () => setIsMenuCollapse(!isMenuCollapse);

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
  
  return (
    <Container collapsed={isMenuCollapse}>

      <div className="container__sidebar">
        <Sidebar>

          <div className="sidebar__section" onClick={handleSidebar}>
            <div className="sidebar__icon pointer">
              <img src={categoryIcon} alt="Category Icon"/>
            </div>
            <p>Categories</p>
          </div>
          <Divider />

          <div className="sidebar__section">
            <div className="sidebar__icon">
              <img src={listIcon} alt="filter Icon"/>
            </div>
            <p>List</p>
          </div>
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
          <Divider />
          
          <div className="sidebar__section">
            <div className="sidebar__icon">
              <img src={activeIcon} alt="filter Icon"/>
            </div>
            <p>Actived</p>
          </div>

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

        </Sidebar>
      </div>

      <div className="container__content">
        
        {
          isLoading
          ? <Spiner/>
          : <>
              {activeFilters.length === 0 
              ? <h1>All products</h1>
              : <h1>Filters activated</h1>
              }

              {
                products.length === 0
                ? <NoProducts> <h3>There are no products</h3> </NoProducts> 
                : <ProductSection productsList={products} />
              }
            
              <DividerSpace/>

              <Pagination>
                <nav>
                  <a href="#" className="pagination__number">1</a>
                  <a href="#" className="pagination__number">2</a>
                  <a href="#" className="pagination__number">3</a>
                  <a href="#" className="pagination__number">Next</a>
                </nav>
              </Pagination>
          </>
        }
        
       

      </div>

    </Container>
  )
}

export default ProductList;
