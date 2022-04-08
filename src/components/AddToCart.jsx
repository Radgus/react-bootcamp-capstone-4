import React, { useContext} from 'react';
import styled from 'styled-components';
import ProductContext from '../state/productContext';


export const Buttom = styled.button`
  width: 55%;
  height: 4rem;
  border-radius: 1rem;
  cursor: pointer;
  color: deeppink;
  border: 0.1rem solid gray;
  background-color: white;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.2rem 0.4rem;
  :hover {
    background-color: black;
  }
`;

const AddToCart = ({product, amount=1, icon=false}) => {
  const {productsInCart, setProductsInCart} = useContext(ProductContext);

  const handleAddToCard = (item) => {
    const obj = {
      amount: amount,
      product: item,
    }
    const currentProducts = [...productsInCart];
    const mergeProducts = currentProducts.concat(obj);
    setProductsInCart(mergeProducts);
  }

  return(
    <Buttom type="button" onClick={()=>handleAddToCard(product)}>
      {
        icon 
        ? '+'
        : `Add 
            to 
          Cart`
      }
    </Buttom>
  )
}

export default AddToCart;
