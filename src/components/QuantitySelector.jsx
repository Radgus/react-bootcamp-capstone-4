import React from 'react';
import styled from 'styled-components';


export const Amount = styled.div`
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

export const Math = styled.div`
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

const QuantitySelector = ({stock, counter, setCounter}) => {

  const handleCounter = (operation,stock,setCounter) => {
    if (operation === 'add') {
      setCounter(counter=> counter+1 > stock ? stock : counter+1);
    }
    if (operation === 'subtract') {
      setCounter(counter=> counter-1 < 1 ? 1 : counter-1);
    }
  }
  return(
    <Amount>
      <div className='column'>
        <div className='column__counter'>{counter}</div>
      </div>
      <div className='column'>
        <Math>
          <div 
            className='math__section divider' 
            onClick={()=>handleCounter('add',stock,setCounter)} 
          >
            +
          </div>
          <div 
            className='math__section'
            onClick={()=>handleCounter('subtract',stock,setCounter)} 
          >
            -
          </div>
        </Math>
      </div>
    </Amount>
  )
}

export default QuantitySelector;
