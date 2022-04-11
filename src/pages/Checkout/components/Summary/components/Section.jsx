import React from 'react';
import styled from 'styled-components';


const SummaryContainer = styled.div`
margin: 2rem 1rem;
padding: 0 1rem;
border: 0.1rem solid gray;
border-radius: 1rem;
background-color: rgb(232, 240, 254);
`;

const Section = ({children, ...props}) => 
<SummaryContainer {...props}>
  {children}
</SummaryContainer>

export default Section;
