import React, { useState, useContext, useEffect } from 'react';
import ProductContext from '../../../state/productContext';
import QuantitySelector from '../../../components/QuantitySelector';
import trashIcon from '../../../resources/images/trash-icon.png';
import { Container, ContainerHeader, TrashIcon, 
ContainerItemSection, ImgContainer, Img, DataSection,
Summary, Concept } from './ShoppingCardStyles';
import PropTypes from 'prop-types';


const ShoppingCard = ({ product, amount }) => {
  const [counter, setCounter] = useState(amount);
  const {productsInCart, setProductsInCart} = useContext(ProductContext);

  useEffect(()=>{
    const index = productsInCart.findIndex((item)=>
      item.product.id === product.id
    );
    const temporalCopy = [...productsInCart];
    temporalCopy[index].amount = counter;
    setProductsInCart(temporalCopy);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[counter]);

  const deleteProduct = () => {
    const index = productsInCart.findIndex((item)=>
      item.product.id === product.id
    );
    const temporalCopy = [...productsInCart];
    temporalCopy.splice(index,1);
    setProductsInCart(temporalCopy);
  }

  return (
    <Container>
      <ContainerHeader>
        <h3 style={{"color":"blue"}}>{product?.data?.name}</h3>
        <TrashIcon 
          src={trashIcon} 
          alt="trash Icon"
          onClick={deleteProduct}
        />
      </ContainerHeader>

      <ContainerItemSection>
        <ImgContainer>
          <Img src={product?.data?.mainimage?.url} alt={product?.data?.mainimage?.alt} />
        </ImgContainer>
        <DataSection>
          <h4>Unit price: $<span>{product?.data?.price}</span></h4>
          <QuantitySelector 
            stock={product?.data?.stock}
            counter={counter}
            setCounter={setCounter}
          />
          <h4>Stock: <span>{product?.data?.stock}</span></h4>
        </DataSection>

        <Summary>
          <h3 style={{"textAlign":"center"}}>Summary</h3>
          <Concept>
            <h4>Units</h4>
            <h4>{counter}</h4>
          </Concept>
          <Concept>
            <h4>Unit price</h4>
            <h4>${product?.data?.price}</h4>
          </Concept>
          <Concept>
            <h4>Subtotal:</h4>
            <h4>${product?.data?.price * counter}</h4>
          </Concept>
        </Summary>
      </ContainerItemSection>
    </Container>
  );
}

ShoppingCard.propTypes = {
  product: PropTypes.object,
  amount: PropTypes.number,
}

export default ShoppingCard;
