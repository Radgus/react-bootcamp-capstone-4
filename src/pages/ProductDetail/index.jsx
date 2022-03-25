import React, { useState, useEffect} from "react";
import styled from 'styled-components';
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
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

const Card = styled.div`
  background-color: white;
  border-radius: 1.5rem 1.5rem 0 0;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  
`;

const Wrapper = styled.div`
  padding: 5% 5% 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin: 1rem 0;
`;

const Description = styled.div`
  p {
    font-size: 1.2rem;
  }
`;

const Shopping = styled.div`
  padding: 0.5rem 10%;
  display: flex;
  align-items: center;
  .shopping__price {
    display: flex;
    flex-direction: column;
    width: 40%;
  }
  .shopping__addtocard {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 60%;
    height: 100%;
  }
`;

const Price = styled.p`
  font-size: 1.8rem;
  margin: 0.5rem 0;
  font-weight: 600;
`;

const Span = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Money = styled.p`
  font-size: 2.2rem;
  font-family: 'Times New Roman', Times, serif;
`;

const Buttom = styled.button`
  width: 80%;
  height: 80%;
  border-radius: 2rem;
  cursor: pointer;
  color: deeppink;
  border: 0.1rem solid black;
  background-color: white;
  font-weight: 600;
  font-size: 1.4rem;
  :hover {
    background-color: black;
  }
`;


const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const fetchProducts = useFeaturedProducts().data.results;

  useEffect(() => {
    const search  = window.location.search;
    const params = new URLSearchParams(search);
    const productId = params.get('product');
    console.log('productId: ', productId);
    if (productId !== null && fetchProducts !== null && 
        fetchProducts !== undefined && fetchProducts.length > 0 ) {
      const productSelected = fetchProducts.filter(item => item.id === productId);
      setProduct({...productSelected[0]});
      console.log('{...productSelected[0]}: ', {...productSelected[0]});
    }
    // console.log('product: ', product);
  }, [fetchProducts]);

  const handleAddToCard = (e, item) => {
    console.log('enviar al carrito: ', item);
  }

  return (
    <Container>
      <ImgSection>
        <img src={product?.data?.mainimage?.url} alt="" />
      </ImgSection>
      <Card>
        <Wrapper>
          <Title>
            <h2>{product?.data?.name}</h2>
          </Title>
          <Description>
            <p>{product?.data?.short_description}</p>
          </Description>
        </Wrapper>
        <Shopping>
          <div className="shopping__price">
            <Price>Price</Price>
            <Money><Span>$</Span>{product?.data?.price}</Money>
          </div>
          <div className="shopping__addtocard">
            <Buttom type="button" onClick={(e)=>handleAddToCard(e, product)}>Add to Cart</Buttom>
          </div>
        </Shopping>
      </Card>
      
    </Container>
  )
}

export default ProductDetail;
