import React, {useEffect, useContext} from 'react';
import styled from 'styled-components';
import ProductCard from './components/ProductCard';
import { Divider } from '../../components/Mix';
import ProductContext from '../../state/productContext';



const Container = styled.div`
  margin: 0 8% 2rem;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const TitleSection = styled.h1`
  margin: 3rem 0;
  padding: 0 3rem;
`;

const Wrapper = styled.div`
  margin: 3rem 0;
  padding: 0 3rem;
`;


const ShoppingCart = () => {
  const {productsInCart, setProductsInCart} = useContext(ProductContext);

  useEffect(()=>{
    console.log('Context productos: ', productsInCart);
  },[productsInCart]);

  return (
    <Container>
      <TitleSection>Mis pedidos</TitleSection>
      <Divider />
      <Wrapper>
        {
          productsInCart.length > 0 && 
          productsInCart.map(item=>{
            console.log('item.product: ', item.product);
            return(
              <ProductCard key={item?.product?.id} product={item.product}/>
            )
          }) 
        }
      </Wrapper>

    </Container>
  );
}

export default ShoppingCart;
