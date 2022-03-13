import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Divider } from '../../components/Mix';
import categoryIcon from '../../resources/images/category-icon2.png';
import activeIcon from '../../resources/images/active-icon.png';
import listIcon from '../../resources/images/list-icon.png';
import CategoryList from '../../utils/CategoryList';


const Container = styled.div`
  display: flex;
  margin-right: 8%;
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
  .sidebar__bullet {
    width: 0.6rem;
    height: 0.6rem;
    background-color: black;
    border-radius: 50%;
  }
`;


const ProductList = () => {
  const [isMenuCollapse,setIsMenuCollapse] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setCategoryList([...CategoryList['results']]);
  }, []);

  useEffect(() => {
    console.log('activeFilters: ', activeFilters);
  }, [activeFilters]);

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
            <div className="sidebar__icon">
              <img src={categoryIcon} alt="filter Icon"/>
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
            categoryList.map((category) => {
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
        <h1>This is the Product List Page</h1>
      </div>

    </Container>
  )
}

export default ProductList;
