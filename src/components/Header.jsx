import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../resources/images/logo-9.PNG';
import searchIcon from '../resources/images/search-icon-5.png';
import ShoppingIcon from './ShoppingIcon';

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
    cursor: pointer;
    border-left: 1px solid gray;
    img {
      width: 2.5rem;
      margin: 0 auto;
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
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  }

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
            <input type="text" placeholder='search...' onChange={handleSearch}/>
            <Link
              to= {{
                pathname: "/search",
                search: `?q=${searchInput}`,
              }}
              className="logo"
            >
              <img src={searchIcon} alt="searchIcon" />
            </Link>
          </Search>
        </div>

        <div className="header__section right shopping">
          <ShoppingIcon/>
        </div>

      </header>
    </Section>
  )
}

export default Header;
