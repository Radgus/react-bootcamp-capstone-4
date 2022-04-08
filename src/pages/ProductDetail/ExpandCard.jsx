import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

export default ExpandCard;
