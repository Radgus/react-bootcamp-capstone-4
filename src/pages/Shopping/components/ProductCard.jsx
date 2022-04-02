import React, { useState } from 'react';
import styled from 'styled-components';
import QuantitySelector from '../../../components/QuantitySelector';


const Container = styled.div`
  /* border: 0.1rem solid gray; */
  border-radius: 1rem;
`;

const Header = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border: 0.1rem solid gray;
  background-color: #DCDCDC;
  padding: 1rem;
  display: flex;
  justify-items: flex-end;
`;

const TrashIcon = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 1rem 2rem;
`;

const ItemSection = styled.div`
  margin: 2rem 0;
  padding: 0 1rem;
  display: flex;
`;

const Img = styled.img`
  width: 10rem;
  /* height: 20rem; */
  object-fit: contain;
  margin-right: 1rem;
`;

const DataSection = styled.div`
  display: flex;
  flex-direction: column;
`;


const ProductCard = ({ product }) => {
  const [counter, setCounter] = useState(1);

  return (
    <Container>
      <Header>
        Trash
      </Header>

      <ItemSection>
        <Img src={product?.data?.mainimage?.url} alt={product?.data?.mainimage?.alt} />
        <DataSection>
          <h3>{product?.data?.name}</h3>
          <h4>Unit price: $<span>{product?.data?.price}</span></h4>
          <QuantitySelector 
            stock={product?.data?.stock}
            counter={counter}
            setCounter={setCounter}
          />
        </DataSection>
      </ItemSection>
    </Container>
  );
}

export default ProductCard;
