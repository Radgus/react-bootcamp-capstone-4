/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Divider, DividerSpace } from '../../components/Mix';
import categoryIcon from '../../resources/images/category-icon2.png';
import activeIcon from '../../resources/images/active-icon.png';
import listIcon from '../../resources/images/list-icon.png';
import ProductSection from '../../components/ProductSection';
import { useFeaturedCategories } from '../../utils/hooks/useFeaturedCategories';
import { useProducts } from '../../utils/hooks/useProducts';
import Spiner from './components/Loader';
import { Container, Sidebar, Pagination, NoProducts, ClearButton } from './styles';


const ProductList = () => {
  const [isMenuCollapse,setIsMenuCollapse] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const categoryList = useFeaturedCategories().data.results;
  const fetchProducts = useProducts().data.results;
  const infoProducts = useProducts().data;

  useEffect(() => {
    if (fetchProducts !== null && fetchProducts !== undefined && fetchProducts.length > 0) {
      setProducts(fetchProducts);
    }
  }, [fetchProducts]);

  useEffect(() => {
    console.log('infoProducts1: ', infoProducts);
    if (Object.keys(infoProducts).length > 0) {
      console.log('infoProducts2: ', infoProducts);
      const numberOfPages = infoProducts['total_pages'];
      console.log('numberOfPages: ', numberOfPages);
      for (let i = 0; i < numberOfPages; i++) {
        setPages(pages=>pages.concat(<a href="#" className="pagination__number">{i+1}</a>));
      }
    }
  }, [infoProducts]);

  useEffect(() => {
    const search  = window.location.search;
    const params = new URLSearchParams(search);
    const category = params.get('category');
    if (category !== null && categoryList !== null && 
      categoryList !== undefined && categoryList.length > 0 ) {
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
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const categoryNames = [];
    activeFilters.forEach(element => {
      element.slugs.forEach((slug)=>{
        categoryNames.push(slug);
      })
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

  const handleAddCart = (id) => {
    console.log('Add to cart the item with id: ', id);
  }

  const handleClearFilters = () => {
    activeFilters.forEach((filter) =>{
      const checkInput = document.getElementById(filter['id']);
      checkInput.checked = false;
    });
    setActiveFilters([]);
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
          <div className="sidebar__section">
            <ClearButton type='button' onClick={handleClearFilters}>Clear filters</ClearButton>
          </div>
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
                : <ProductSection productsList={products} handleAddCart={handleAddCart}/>
              }
            
              <DividerSpace/>

              <Pagination>
                <nav>
                  {
                    // pages.length > 0 && pages.map(page => page)
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
