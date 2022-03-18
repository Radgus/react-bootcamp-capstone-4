import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import shoppingCarIcon from '../resources/images/shopping-icon-2.png';
import logo from '../resources/images/logo-9.PNG';
import searchIcon from '../resources/images/search-icon-5.png';

const Section = styled.section`
  margin-bottom: 2rem;
  padding: 2rem 8% 0 8%;
  background-color: white;
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .header__section {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* background-color: aqua; */
    }
    .right {
      justify-content: right;
    }
    .left {
      justify-content: left;
    }
    .logo {
      order: 1;
    }
    .search {
      order: 3;
      width: 100%;
    }
    .shopping {
      order: 2;
    }
    @media (min-width: 450px) {
      .logo {
        width: 25%;
      }
      .search {
        order: 2;
        width: 50%
      }
      .shopping {
        order: 3;
        width: 25%
      }
    }
  }
`;

const Img = styled.img`
  height: 3.5rem;
`;

const Logo = styled.img`
  height: 4rem;
`;

const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: lightgrey;
  border-radius: 5px;
  margin: 1.2rem 0;
  padding: 0 3% 0 7.5%;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 2.5rem;
    }
  }
  input {
    width: 100%;
    height: 3rem;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const Header = () => {

  return (
    <Section>
      <header>

        <div className="header__section left logo">
          <Link to="/">
            <Logo src={logo} alt="logoCommerce" />
          </Link>
        </div>

        <div className="header__section search">
           <Search>
            <input type="text" placeholder='search...'/>
            <div className="logo">
              <img src={searchIcon} alt="searchIcon" />
            </div>
          </Search>
        </div>

        <div className="header__section right shopping">
          <Img src={shoppingCarIcon} alt="shoppingCarIcon" />
        </div>

      </header>
    </Section>
  )
}

export default Header;
