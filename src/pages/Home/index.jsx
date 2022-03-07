import React from 'react';
import styled from 'styled-components';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';

const Slider = styled.div`
  position: relative;
  border-radius: 0.5rem;
`;

const SliderButton = styled.div`
  width: 2rem;
  height: 4rem;
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
  @media (min-width: 320px) {
    width: 3rem;
    height: 6rem;
  }
`;

const Displacer = styled.div`
  width: 100%;
  display: flex;
  scroll-behavior: smooth;
  overflow-x: scroll;
  ::-webkit-scrollbar {
  display: none;
  }
`;

const Slide = styled.div`
  min-width: 100%;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Home = () => {
  const featuredBanners = useFeaturedBanners().data?.results;

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

        <Displacer id='contentSlider'>
          {
            featuredBanners?.map((item) => 
              <Slide key={item.id}>
                <Img src={item.data.main_image.url} alt="" />
              </Slide>
            )
          }
        </Displacer>

        <SliderButton isRight onClick={() => handleSlider('rigth')}>
          <div className="arrow right"/>
        </SliderButton>
      </Slider>
    </main>
  )
}

export default Home;
