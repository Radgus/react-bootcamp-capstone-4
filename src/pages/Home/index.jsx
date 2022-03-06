import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = styled.div`
  height: 30vh;
  background-color: grey;
  position: relative;
`;

const SliderButton = styled.div`
  width: 3rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: absolute;
  bottom: 50%;
  right: ${(props) => props.isRight ? 0 : 'none'};
  z-index: 10;
  .arrow {
    width: 1.5rem;
    height: 1.5rem;
    border-top: 0.2rem solid white;
    border-left: 0.2rem solid white;
    position: relative;
  }
  .left {
    transform: rotate(-45deg);
    left: 0.3rem;
  }
  .right {
    transform: rotate(135deg);
    right: 0.3rem;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Displacer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  overflow-x: scroll;
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  background-color: ${props => props.bgcolor ? props.bgcolor : 'pink'};
`;

const Dots = styled.div`
  width: 30%;
  position: absolute;
  bottom: 10%;
  left: 35%;
  display: flex;
  justify-content: space-between;
  .dot {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 0.2rem solid black;
  }
`;

const Home = () => {

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
    <main>
      <Slider>
        <SliderButton onClick={() => handleSlider('left')}>
          <div className="arrow left"/>
        </SliderButton>

        <Content >
          <Displacer id='contentSlider'>
            <Slide bgcolor='aqua'>Slide 1</Slide>
            <Slide bgcolor='green'>Slide 2</Slide>
            <Slide bgcolor='yellow'>Slide 3</Slide>
          </Displacer>
        </Content>

        <Dots>
          <div className="dot"/>
          <div className="dot"/>
          <div className="dot"/>
        </Dots>


        <SliderButton isRight onClick={() => handleSlider('rigth')}>
          <div className="arrow right"/>
        </SliderButton>
      </Slider>
    </main>
  )
}

export default Home;
