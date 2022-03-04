import React from 'react';
import styled from 'styled-components';
import shoppingCar from '../resources/images/shopping-icon.gif';

const Section = styled.section`
  height: 7rem;
  header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    .header__section {
      width: 33%;
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
  }
`;

const Img = styled.img`
  height: 6rem;
`;

const Header = () => {

  return (
    <Section>
      <header>

        <div className="header__section left">
          <h1>Soy un LOGO</h1>
        </div>

        <div className="header__section">
          <h1>Soy un LOGO</h1>
        </div>

        <div className="header__section right">
          <Img src={shoppingCar} alt="shoppingCar" />
        </div>

      </header>
    </Section>
  )
}

export default Header;
