import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Divider } from '../../components/Mix';
import categoryIcon from '../../resources/images/category-icon2.png';
import activeIcon from '../../resources/images/active-icon.png';
import listIcon from '../../resources/images/list-icon.png';


const Container = styled.div`
  display: flex;
  margin-right: 8%;
  .container__sidebar {
    width: ${(props) => props.collapsed ? '13%' : '35%'};
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
`;


const ProductList = () => {
  const [isMenuCollapse,setIsMenuCollapse] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  const [filterList, setFilterList] = useState({});


  const handleSidebar = () => {
    setIsMenuCollapse(!isMenuCollapse);
  }
  
  return (
    <Container collapsed={isMenuCollapse}>

      <div className="container__sidebar">
        <Sidebar>

          <div className="sidebar__section" onClick={handleSidebar}>
            <div className="sidebar__icon">
              <img src={categoryIcon} alt="filter Icon"/>
            </div>
            <p>Category</p>
          </div>
          <Divider />

          <div className="sidebar__section">
            <div className="sidebar__icon">
              <img src={listIcon} alt="filter Icon"/>
            </div>
            <p>List</p>
          </div>
          <Divider />
          
          <div className="sidebar__section">
            <div className="sidebar__icon">
              <img src={activeIcon} alt="filter Icon"/>
            </div>
            <p>Active</p>
          </div>

        </Sidebar>
      </div>

      <div className="container__content">
        <h1>This is the Product List Page</h1>
      </div>

    </Container>
  )
}

export default ProductList;
