import React, {useEffect, useContext} from 'react';
import styled from 'styled-components';
import { Divider } from '../../components/Mix';
import ShoppingCard from './components/ShoppingCard';
import ProductContext from '../../state/productContext';


const Container = styled.div`
  margin: 0 3% 2rem;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const TitleSection = styled.div`
  margin: 1rem 0;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  margin: 2rem 0;
  padding: 0 1rem;
  > * {
   margin-top : 1rem;
  }
  > *:first-child {
    margin-top: 0px;
  }
`;

const ShoppingCart = () => {
  const {productsInCart} = useContext(ProductContext);

  useEffect(()=>{
    console.log('Context productos: ', productsInCart);
  },[productsInCart]);

  return (
    <Container>
      <TitleSection>
        <h3>Mis pedidos</h3>
        <h2>Total: $ {productsInCart.reduce((valorAnterior,valorActual)=>{
                        return valorAnterior+(valorActual.amount * valorActual.product.data.price);
                      },0)}
        </h2>
      </TitleSection>
      <Divider />
      <Wrapper>
        {
          productsInCart.length > 0 && 
          productsInCart.map(item=>{
            console.log('item.product: ', item.product);
            return(
              <ShoppingCard 
                key={item?.product?.id} 
                product={item.product} 
                amount={item.amount}
              />
            )
          }) 
        }
      </Wrapper>

    </Container>
  );
}

export default ShoppingCart;
