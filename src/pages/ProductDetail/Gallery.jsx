import React, { useState } from 'react';
import styled from 'styled-components';


 const Main = styled.div`
  width: 95%;
  margin: 1rem auto 0;
  height: 8rem;
  display: flex;
  overflow-y: hidden;
  scroll-behavior: smooth;
 `;

 const Item = styled.div`
  min-width: 22%;
  height: 100%;
  width: 22%;
  background-color: white;
  margin: 0 0.3rem;
  display: flex;
  border-radius: 0.5rem;
  cursor: pointer;
  img {
    height: 100%;
    margin: 0 auto;
    object-fit: contain;
  }
 `;

  const ImgSection = styled.div`
  width: 15.5rem;
  height: 20rem;
  border-radius: 1rem;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 1rem;
  }
  @media (min-width: 700px) {
    width: 23.2rem;
    height: 30rem;
  }
  `;



const Gallery = ({product}) => {
  const [position, setPosition] = useState(0);

  const handleImage = (index) => {
    setPosition(index);
  }

  

  return(
    <>
      <ImgSection>
        <img src={product?.data?.images[position].image?.url} alt="" />
      </ImgSection>
      <Main>
        {
          product?.data?.images.map(item => {
            const index = product?.data?.images.findIndex
            (element=>element.image.url === item.image.url);
            return(
              <Item key={index} onClick={()=>handleImage(index)}>
                <img src={item.image.url} alt={item.image.alt} />
              </Item>
            )
          })
        }
      </Main>
    </>
  )
}

export default Gallery
