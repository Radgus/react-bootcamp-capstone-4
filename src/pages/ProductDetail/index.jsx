import React, { useState, useEffect} from "react";
import styled from 'styled-components';
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";
import Gallery from "./Gallery";
import {  useParams } from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
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
    justify-content: space-between;
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
  width: 55%;
  height: 4rem;
  border-radius: 1rem;
  cursor: pointer;
  color: deeppink;
  border: 0.1rem solid gray;
  background-color: white;
  font-weight: 600;
  font-size: 1.4rem;
  :hover {
    background-color: black;
  }
`;

const Tags = styled.div`
  margin-top: 1rem;
  display: flex;
  h4 {
    font-size: 1.2rem;
  }
`;

const Ul = styled.ul`
  width: -webkit-fill-available;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-around;
  padding-left: 3rem;
`;

const Amount = styled.div`
  width: 40%;
  height: 5rem;
  border-radius: 1rem;
  color: deeppink;
  border: 0.1rem solid gray;
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  .column {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .column__counter {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 0.1rem solid gray;
  }

`;

const Math = styled.div`
  width: 100%;
  height: 100%;
  .math__section {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    cursor: pointer;
    font-size: 2.5rem;
    :hover {
      background-color: black;
    }
  }
  .divider {
    border-bottom: 0.1rem solid gray;
  }
`;

// Expand INICIO
const ExpandContainer = styled.div`
  padding: 1rem 2rem;
  background-color: white;
  .wrapper {
    display: flex;
    height: 3rem;
  }
  .wrapper__title {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrapper__icon {
    display: flex;
    align-items: center;
    width: 20%;
    cursor: pointer;
  }
  .content {
    padding: 1rem 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(45%, 1fr));
    column-gap: 1rem;
    row-gap: 1.5rem;
    font-size: 1.1rem;
    height: 0;
    overflow: hidden;
    transition: height 1s ease-in-out;
    overflow-y: hidden;
    scroll-behavior: smooth;
  }
`;

const Arrow = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-right: 0.2rem solid black;
  border-bottom: 0.2rem solid black;
  transform: ${(props) => props.expand ? 'rotate(-135deg)' : 'rotate(45deg)'};
  margin: 0 auto;
`;

const ExpandCard = ({product}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(()=>{
    const node = document.getElementById('specContainer');
    if (isExpanded) {
      node.style.height = '20rem';
    } else {
      node.style.height = '0';
    }
  },[isExpanded]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  return(
    <ExpandContainer>
      <div className="wrapper">
        <h2 className="wrapper__title">
          Specs
        </h2>
        <div className="wrapper__icon" onClick={handleExpand}>
          <Arrow id="arrow" expand={isExpanded}/>
        </div>
      </div>
      <div className="content" id="specContainer">
        {
          product?.data?.specs.map(spec=>(
            <div key={spec.spec_name}>
              <p><b>Name:</b> {spec.spec_name}</p>
              <p><b>Value:</b> {spec.spec_value}</p>
            </div>
          ))
        }
      </div>
    </ExpandContainer>
  );
}

// Expand FIN

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const fetchProducts = useFeaturedProducts().data.results;
  const [counter, setCounter] = useState(1);
  const { productId } = useParams();

  useEffect(() => {
    if (productId !== null && fetchProducts !== null && 
        fetchProducts !== undefined && fetchProducts.length > 0 ) {
      const productSelected = fetchProducts.filter(item => item.id === productId);
      setProduct({...productSelected[0]});
    }
  }, [fetchProducts, productId]);

  const handleAddToCard = (e, item) => {
    console.log('enviar al carrito: ', item);
  }

  const handleCounter = () => {
    setCounter(counter => counter-1 <= 0 ? 1 : counter-1);
  }

  return (
    <Container>

      <Gallery product={product} />
      
      <Card>
        <Wrapper>
          <h3>Category: {product?.data?.category?.slug}</h3>
          <Tags>
            <h4>Tags:</h4>
            <Ul>
              {
                product?.tags?.map(tag => <li key={tag}>{tag}</li>)
              }
            </Ul>
          </Tags>
            
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
            <br />
            <p><b>SKU: </b>{product?.data?.sku}</p>
          </div>
          <div className="shopping__addtocard">
            <Amount>
              <div className='column'>
                <div className='column__counter'>{counter}</div>
              </div>
              <div className='column'>
                <Math>
                  <div 
                    className='math__section divider' 
                    onClick={()=>setCounter(counter=>counter+1)}
                  >
                    +
                  </div>
                  <div 
                    className='math__section'
                    onClick={handleCounter}
                  >
                    -
                  </div>
                </Math>
              </div>
            </Amount>
            <Buttom type="button" onClick={(e)=>handleAddToCard(e, product)}>Add to Cart</Buttom>
          </div>
        </Shopping>

      </Card>

      <ExpandCard product={product} />
      
    </Container>
  )
}

export default ProductDetail;
