import React from 'react';
import styled from 'styled-components';



const SummaryButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

const Buttons = ({children,...props}) => 
<SummaryButtonsContainer {...props}>
  {children}
</SummaryButtonsContainer>


export default Buttons;
