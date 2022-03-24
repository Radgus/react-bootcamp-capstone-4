import React, { useState, useEffect} from "react";
import styled from 'styled-components';
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const ImgSection = styled.div`
  height: 20rem;
  padding: 0 8%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 1.5rem 1.5rem 0 0;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  
`;

const Wrapper = styled.div`
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  /* flex: 1 0 auto; */
`;

const Title = styled.div`
  margin: 1rem 0;
`;

const Description = styled.div`
  margin: 1rem 0;
`;

const Shopping = styled.div`
  /* border-radius: 2.5rem 2.5rem 0 0; */
  /* border-radius: 2.5rem; */
  /* background-color: black; */
  padding: 1.5rem 8%;
  display: flex;
  align-items: center;
  .shopping__price {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    /* color: white; */
  }
  .shopping__addtocard {
    display: flex;
    align-items: center;
    width: 60%;
  }
`;


const ProductDetail = () => {

  const [product, setProduct] = useState({})

  return (
    <Container>
      <ImgSection>
        <img src="http://placeimg.com/640/480/people" alt="" />
      </ImgSection>
      <Card>
        <Wrapper>
          <Title>
            <h2>Product Detail Page</h2>
          </Title>
          <Description>
            <p>
              Keeping a distinctive complex pattern without being 
              complicated involves choosing a simple palette. 
              The poinsettia red and ivory white in this cushion 
              cover are two lovely colors that we enjoy all season 
              long. The sweater-like snowflake design celebrates 
              more than one type of holiday (reverse is sherpa-like 
              sheepskin). Make it a snow day. The front is made of 
              100% yarn-dyed acrylic; It is reversed to 100% recycled 
              polyester sherpa in white. Yarn dyed fabric has amazing 
              vivid colors that keep their radiance over time. Holds 
              16 \"x 26\" fill (sold separately).
            </p>
          </Description>
        </Wrapper>
        <Shopping>
          <div className="shopping__price">
            <p>price</p>
            <p>$138.50</p>
          </div>
          <div className="shopping__addtocard">
            <button>Add to Cart</button>
          </div>
        </Shopping>
      </Card>
      
    </Container>
  )
}

export default ProductDetail;
